import { motion } from 'framer-motion'
import type { CSSProperties } from 'react'
import type { Planet, PlanetId } from '../types/planet'
import styles from './OrbitButtons.module.css'

type OrbitButtonsProps = {
  planets: Planet[]
  activePlanetId: PlanetId
  onSelect: (planetId: PlanetId) => void
  performanceMode?: boolean
}

const orbitDuration = 34

export function OrbitButtons({
  planets,
  activePlanetId,
  onSelect,
  performanceMode = false,
}: OrbitButtonsProps) {
  return (
    <div className={styles.shell} data-performance={performanceMode}>
      <div className={styles.orbitRing} />
      <div className={styles.orbitRingSecondary} />
      <div className={styles.orbitGlow} />

      <motion.div
        className={styles.orbitTrack}
        animate={performanceMode ? undefined : { rotate: 360 }}
        transition={
          performanceMode
            ? undefined
            : { duration: orbitDuration, repeat: Number.POSITIVE_INFINITY, ease: 'linear' }
        }
      >
        {planets.map((planet, index) => {
          const angle = -90 + index * (360 / planets.length)
          const slotStyle = {
            '--angle': `${angle}deg`,
            '--counter-angle': `${-angle}deg`,
            '--thumb-accent': planet.theme.accent,
            '--thumb-alt': planet.theme.accentAlt,
          } as CSSProperties

          const button = (
            <motion.button
              type="button"
              className={`${styles.planetButton} ${
                planet.id === activePlanetId ? styles.active : ''
              }`}
              onClick={() => onSelect(planet.id)}
              whileHover={
                performanceMode
                  ? undefined
                  : {
                      scale: 1.08,
                      y: -4,
                      boxShadow: '0 20px 48px rgba(0, 0, 0, 0.34)',
                    }
              }
              whileTap={{ scale: 0.98 }}
            >
              <span className={styles.thumbFrame} aria-hidden="true">
                <span className={styles.thumb} />
              </span>
              <span className={styles.copy}>
                <span className={styles.name}>{planet.name}</span>
                <span className={styles.meta}>
                  Orbita {String(planet.orbitIndex).padStart(2, '0')}
                </span>
              </span>
            </motion.button>
          )

          return (
            <div key={planet.id} className={styles.slot} style={slotStyle}>
              {performanceMode ? (
                <div className={styles.counterSpinStatic}>{button}</div>
              ) : (
                <motion.div
                  className={styles.counterSpin}
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: orbitDuration,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: 'linear',
                  }}
                >
                  {button}
                </motion.div>
              )}
            </div>
          )
        })}
      </motion.div>
    </div>
  )
}
