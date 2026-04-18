import { useEffect, useState } from 'react'

const performanceQueries = [
  '(max-width: 900px)',
  '(hover: none) and (pointer: coarse)',
  '(prefers-reduced-motion: reduce)',
]

function readPerformanceMode() {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return false
  }

  return performanceQueries.some((query) => window.matchMedia(query).matches)
}

export function usePerformanceMode() {
  const [isPerformanceMode, setIsPerformanceMode] = useState(readPerformanceMode)

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
      return
    }

    const mediaLists = performanceQueries.map((query) => window.matchMedia(query))
    const updatePerformanceMode = () => {
      setIsPerformanceMode(mediaLists.some((mediaList) => mediaList.matches))
    }

    updatePerformanceMode()

    for (const mediaList of mediaLists) {
      mediaList.addEventListener('change', updatePerformanceMode)
    }

    return () => {
      for (const mediaList of mediaLists) {
        mediaList.removeEventListener('change', updatePerformanceMode)
      }
    }
  }, [])

  return isPerformanceMode
}
