import { startTransition, useEffect, useRef, useState, type CSSProperties } from 'react'
import interstellarTheme from '../assets/music/Hans Zimmer - Interstellar  Imperial Orchestra - Imperial Orchestra (youtube).mp3'
import { defaultPlanetId, planets } from '../data/planets'
import { usePerformanceMode } from '../hooks/usePerformanceMode'
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
  const [isMusicEnabled, setIsMusicEnabled] = useState(false)
  const [musicError, setMusicError] = useState<string | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const performanceMode = usePerformanceMode()
  const activePlanet =
    planets.find((planet) => planet.id === activePlanetId) ?? initialPlanet

  useEffect(() => {
    persistActivePlanetId(activePlanetId)
  }, [activePlanetId])

  useEffect(() => {
    const audio = audioRef.current

    return () => {
      audio?.pause()
    }
  }, [])

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

  const handleToggleMusic = async () => {
    const audio = audioRef.current

    if (!audio) {
      return
    }

    setMusicError(null)

    if (isMusicEnabled) {
      audio.pause()
      setIsMusicEnabled(false)
      return
    }

    try {
      audio.volume = 0.42
      await audio.play()
      setIsMusicEnabled(true)
    } catch {
      setMusicError('O navegador não conseguiu iniciar a trilha sonora.')
      setIsMusicEnabled(false)
    }
  }

  return (
    <main className={styles.scene} style={sceneStyle} data-performance={performanceMode}>
      <StarBackground performanceMode={performanceMode} />

      <div className={styles.frame} aria-hidden="true" />

      <div className={styles.audioDock}>
        {musicError ? <p className={styles.audioMessage}>{musicError}</p> : null}

        <button
          type="button"
          className={styles.audioToggle}
          data-active={isMusicEnabled}
          onClick={handleToggleMusic}
          aria-pressed={isMusicEnabled}
          aria-label={
            isMusicEnabled ? 'Desativar trilha sonora de Interstellar' : 'Ativar trilha sonora de Interstellar'
          }
        >
          <span className={styles.audioLabel}>Interstellar</span>
          <span className={styles.audioState}>{isMusicEnabled ? 'Ligado' : 'Desligado'}</span>
        </button>
      </div>

      <header className={styles.header}>
        <PlanetInfoPanel planet={activePlanet} performanceMode={performanceMode} />
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
          performanceMode={performanceMode}
        />
        <PlanetDisplay planet={activePlanet} performanceMode={performanceMode} />
      </section>

      <audio ref={audioRef} src={interstellarTheme} loop preload="none" aria-hidden="true" />
    </main>
  )
}
