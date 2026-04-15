import { AnimatePresence, motion } from 'framer-motion'
import type { CSSProperties } from 'react'
import type { Planet } from '../types/planet'
import styles from './PlanetDisplay.module.css'

type PlanetDisplayProps = {
  planet: Planet
}

export function PlanetDisplay({ planet }: PlanetDisplayProps) {
  return (
    <section className={styles.shell} aria-label={`Exibição do planeta ${planet.name}`}>
      <motion.div
        className={styles.haloPrimary}
        animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.75, 0.5] }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
      />
      <motion.div
        className={styles.haloSecondary}
        animate={{ rotate: 360 }}
        transition={{ duration: 56, repeat: Number.POSITIVE_INFINITY, ease: 'linear' }}
      />
      <div className={styles.shadowPool} />
      <div className={styles.ringTrace} />

      <AnimatePresence mode="wait">
        <motion.div
          key={planet.id}
          className={styles.motionStage}
          initial={{ opacity: 0, y: 28, scale: 0.9, filter: 'blur(14px)' }}
          animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -20, scale: 1.03, filter: 'blur(10px)' }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className={styles.scaleStage}
            style={{ '--planet-scale': planet.relativeSize } as CSSProperties}
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 9.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'easeInOut',
            }}
          >
            <div className={styles.planetAura} />
            <div className={styles.planetBloom} />
            <div className={styles.planetField} />
            <motion.img
              className={styles.planet}
              src={planet.image}
              alt={planet.name}
              animate={{ rotate: 360 }}
              transition={{
                duration: planet.rotationDuration,
                repeat: Number.POSITIVE_INFINITY,
                ease: 'linear',
              }}
            />
            <div className={styles.planetShade} />
            <div className={styles.atmosphereArc} />
            <div className={styles.rimLight} />
            <div className={styles.specular} />
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </section>
  )
}
