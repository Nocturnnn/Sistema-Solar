import { memo, type CSSProperties } from 'react'
import styles from './StarBackground.module.css'

type StarBackgroundProps = {
  performanceMode?: boolean
}

function buildStars(count: number) {
  return Array.from({ length: count }, (_, index) => {
    const left = (index * 17.3) % 100
    const top = (index * 29.7) % 100
    const size = 1 + ((index * 7) % 3)
    const opacity = 0.22 + (((index * 11) % 55) / 100)
    const duration = 3.8 + (index % 6) * 1.35
    const delay = (index % 9) * 0.45

    return {
      id: index,
      style: {
        left: `${left}%`,
        top: `${top}%`,
        width: `${size}px`,
        height: `${size}px`,
        opacity,
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`,
      } satisfies CSSProperties,
    }
  })
}

const fullStars = buildStars(72)
const compactStars = buildStars(30)

export const StarBackground = memo(function StarBackground({
  performanceMode = false,
}: StarBackgroundProps) {
  const stars = performanceMode ? compactStars : fullStars

  return (
    <div className={styles.background} data-compact={performanceMode} aria-hidden="true">
      <div className={styles.deepField} />
      <div className={styles.nebulaPrimary} />
      {performanceMode ? null : <div className={styles.nebulaSecondary} />}
      {performanceMode ? null : <div className={styles.grid} />}
      <div className={styles.vignette} />
      {stars.map((star) => (
        <span key={star.id} className={styles.star} style={star.style} />
      ))}
    </div>
  )
})
