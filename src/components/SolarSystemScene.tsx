import { startTransition, useEffect, useState, type CSSProperties } from 'react'
import { defaultPlanetId, planets } from '../data/planets'
import type { PlanetId } from '../types/planet'
import { OrbitButtons } from './OrbitButtons'
import { PlanetDisplay } from './PlanetDisplay'
import { PlanetInfoPanel } from './PlanetInfoPanel'
import { StarBackground } from './StarBackground'
import styles from './SolarSystemScene.module.css'

const initialPlanet = planets.find((planet) => planet.id === defaultPlanetId) ?? planets[0]
const activePlanetStorageKey = 'solar-system:active-planet'
const planetIds = new Set<PlanetId>(planets.map((planet) => planet.id))

function isPlanetId(value: string): value is PlanetId {
  return planetIds.has(value as PlanetId)
}

function getInitialPlanetId() {
  if (typeof window === 'undefined') {
    return initialPlanet.id
  }

  try {
    const storedPlanetId = window.localStorage.getItem(activePlanetStorageKey)

    if (storedPlanetId && isPlanetId(storedPlanetId)) {
      return storedPlanetId
    }
  } catch {
    // Keep the interface working even if browser storage is unavailable.
  }

  return initialPlanet.id
}

function persistActivePlanetId(planetId: PlanetId) {
  if (typeof window === 'undefined') {
    return
  }

  try {
    window.localStorage.setItem(activePlanetStorageKey, planetId)
  } catch {
    // Keep the interface working even if browser storage is unavailable.
  }
}

export function SolarSystemScene() {
  const [activePlanetId, setActivePlanetId] = useState<PlanetId>(() => getInitialPlanetId())
  const activePlanet =
    planets.find((planet) => planet.id === activePlanetId) ?? initialPlanet

  useEffect(() => {
    persistActivePlanetId(activePlanetId)
  }, [activePlanetId])

  const sceneStyle = {
    '--accent': activePlanet.theme.accent,
    '--accent-soft': activePlanet.theme.accentSoft,
    '--accent-alt': activePlanet.theme.accentAlt,
    '--accent-glow': activePlanet.theme.accentGlow,
    '--accent-shadow': activePlanet.theme.shadow,
    '--panel-surface': activePlanet.theme.panel,
  } as CSSProperties

  const handleSelect = (planetId: PlanetId) => {
    persistActivePlanetId(planetId)

    startTransition(() => {
      setActivePlanetId(planetId)
    })
  }

  return (
    <main className={styles.scene} style={sceneStyle}>
      <StarBackground />

      <div className={styles.frame} aria-hidden="true" />

      <header className={styles.header}>
        <PlanetInfoPanel planet={activePlanet} />
      </header>

      <section className={styles.stage}>
        <div className={styles.stageTopline}>
          <span>Interface orbital / seleção ao vivo</span>
          <span>Mundo principal em foco</span>
        </div>

        <OrbitButtons
          planets={planets}
          activePlanetId={activePlanet.id}
          onSelect={handleSelect}
        />
        <PlanetDisplay planet={activePlanet} />
      </section>
    </main>
  )
}
