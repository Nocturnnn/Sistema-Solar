import { startTransition, useState, type CSSProperties } from 'react'
import { defaultPlanetId, planets } from '../data/planets'
import type { PlanetId } from '../types/planet'
import { OrbitButtons } from './OrbitButtons'
import { PlanetDisplay } from './PlanetDisplay'
import { PlanetInfoPanel } from './PlanetInfoPanel'
import { StarBackground } from './StarBackground'
import styles from './SolarSystemScene.module.css'

const initialPlanet = planets.find((planet) => planet.id === defaultPlanetId) ?? planets[0]

export function SolarSystemScene() {
  const [activePlanetId, setActivePlanetId] = useState<PlanetId>(initialPlanet.id)
  const activePlanet =
    planets.find((planet) => planet.id === activePlanetId) ?? initialPlanet

  const sceneStyle = {
    '--accent': activePlanet.theme.accent,
    '--accent-soft': activePlanet.theme.accentSoft,
    '--accent-alt': activePlanet.theme.accentAlt,
    '--accent-glow': activePlanet.theme.accentGlow,
    '--accent-shadow': activePlanet.theme.shadow,
    '--panel-surface': activePlanet.theme.panel,
  } as CSSProperties

  const handleSelect = (planetId: PlanetId) => {
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
