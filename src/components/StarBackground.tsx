import type { CSSProperties } from 'react'
import styles from './StarBackground.module.css'

const stars = Array.from({ length: 72 }, (_, index) => {
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

export function StarBackground() {
  return (
    <div className={styles.background} aria-hidden="true">
      <div className={styles.deepField} />
      <div className={styles.nebulaPrimary} />
      <div className={styles.nebulaSecondary} />
      <div className={styles.grid} />
      <div className={styles.vignette} />
      {stars.map((star) => (
        <span key={star.id} className={styles.star} style={star.style} />
      ))}
    </div>
  )
}
