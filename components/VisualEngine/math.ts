export function hash(seed: number, index: number): number {
    const value =
      Math.sin(seed * 0.0137 + index * 12.9898) *
      43758.5453123
  
    return value - Math.floor(value)
  }
  
  export function lerp(
    min: number,
    max: number,
    t: number,
  ) {
    return min + (max - min) * t
  }
  
  export function distance(
    a: { x: number; y: number },
    b: { x: number; y: number },
  ) {
    const dx = a.x - b.x
    const dy = a.y - b.y
  
    return Math.sqrt(dx * dx + dy * dy)
  }
  
  export function clamp(
    value: number,
    min: number,
    max: number,
  ) {
    return Math.min(max, Math.max(min, value))
  }