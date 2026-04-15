import { AnimatePresence, motion } from 'framer-motion'
import type { Planet } from '../types/planet'
import styles from './PlanetInfoPanel.module.css'

type PlanetInfoPanelProps = {
  planet: Planet
}

export function PlanetInfoPanel({ planet }: PlanetInfoPanelProps) {
  return (
    <section className={styles.panel}>
      <div className={styles.topline}>
        <span className={styles.label}>Observatório Planetário</span>
        <span className={styles.label}>Arquivo solar / 08 mundos</span>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={planet.id}
          className={styles.content}
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -16, filter: 'blur(8px)' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={styles.headingRow}>
            <div>
              <p className={styles.index}>Planeta {String(planet.orbitIndex).padStart(2, '0')}</p>
              <h1 className={styles.title}>{planet.name}</h1>
            </div>
            <div className={styles.signalCard}>
              <span className={styles.signalLabel}>Atmosfera</span>
              <strong>{planet.subtitle}</strong>
            </div>
          </div>

          <p className={styles.description}>{planet.description}</p>

          <div className={styles.stats}>
            {planet.stats.map((stat) => (
              <article key={stat.label} className={styles.statCard}>
                <span className={styles.statLabel}>{stat.label}</span>
                <strong className={styles.statValue}>{stat.value}</strong>
              </article>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  )
}
