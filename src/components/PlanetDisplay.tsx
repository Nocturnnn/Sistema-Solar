import { AnimatePresence, motion } from 'framer-motion'
import type { CSSProperties } from 'react'
import type { Planet } from '../types/planet'
import styles from './PlanetDisplay.module.css'

type PlanetDisplayProps = {
  planet: Planet
  performanceMode?: boolean
}

const richEase: [number, number, number, number] = [0.22, 1, 0.36, 1]

export function PlanetDisplay({
  planet,
  performanceMode = false,
}: PlanetDisplayProps) {
  return (
    <section
      className={styles.shell}
      data-performance={performanceMode}
      aria-label={`Exibicao do planeta ${planet.name}`}
    >
      <motion.div
        className={styles.haloPrimary}
        animate={performanceMode ? undefined : { scale: [1, 1.08, 1], opacity: [0.5, 0.75, 0.5] }}
        transition={
          performanceMode
            ? undefined
            : { duration: 10, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }
        }
      />
      {performanceMode ? null : (
        <motion.div
          className={styles.haloSecondary}
          animate={{ rotate: 360 }}
          transition={{ duration: 56, repeat: Number.POSITIVE_INFINITY, ease: 'linear' }}
        />
      )}
      <div className={styles.shadowPool} />
      {performanceMode ? null : <div className={styles.ringTrace} />}

      <AnimatePresence mode="wait">
        <motion.div
          key={planet.id}
          className={styles.motionStage}
          initial={
            performanceMode
              ? { opacity: 0, y: 12, scale: 0.97 }
              : { opacity: 0, y: 28, scale: 0.9, filter: 'blur(14px)' }
          }
          animate={
            performanceMode
              ? { opacity: 1, y: 0, scale: 1 }
              : { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }
          }
          exit={
            performanceMode
              ? { opacity: 0, y: -8, scale: 1.01 }
              : { opacity: 0, y: -20, scale: 1.03, filter: 'blur(10px)' }
          }
          transition={{
            duration: performanceMode ? 0.32 : 0.75,
            ease: performanceMode ? 'easeOut' : richEase,
          }}
        >
          <motion.div
            className={styles.scaleStage}
            style={{ '--planet-scale': planet.relativeSize } as CSSProperties}
            animate={performanceMode ? undefined : { y: [0, -8, 0] }}
            transition={
              performanceMode
                ? undefined
                : {
                    duration: 9.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: 'easeInOut',
                  }
            }
          >
            <div className={styles.planetAura} />
            <div className={styles.planetBloom} />
            {performanceMode ? null : <div className={styles.planetField} />}
            <motion.img
              className={styles.planet}
              src={planet.image}
              alt={planet.name}
              loading="eager"
              decoding="async"
              fetchPriority="high"
              animate={performanceMode ? undefined : { rotate: 360 }}
              transition={
                performanceMode
                  ? undefined
                  : {
                      duration: planet.rotationDuration,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: 'linear',
                    }
              }
            />
            <div className={styles.planetShade} />
            {performanceMode ? null : <div className={styles.atmosphereArc} />}
            <div className={styles.rimLight} />
            <div className={styles.specular} />
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </section>
  )
}
