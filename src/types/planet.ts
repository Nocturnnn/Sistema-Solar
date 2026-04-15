export type PlanetId =
  | 'mercury'
  | 'venus'
  | 'earth'
  | 'mars'
  | 'jupiter'
  | 'saturn'
  | 'uranus'
  | 'neptune'

export type PlanetStat = {
  label: string
  value: string
}

export type PlanetTheme = {
  accent: string
  accentSoft: string
  accentAlt: string
  accentGlow: string
  shadow: string
  panel: string
}

export type Planet = {
  id: PlanetId
  orbitIndex: number
  name: string
  subtitle: string
  description: string
  image: string
  rotationDuration: number
  relativeSize: number
  stats: PlanetStat[]
  theme: PlanetTheme
}
