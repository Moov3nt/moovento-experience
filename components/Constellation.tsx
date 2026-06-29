type Attractor = {
  x: number
  y: number
  mass: number
}

type StarDepth = "far" | "mid" | "near"

type Star = {
  id: number
  x: number
  y: number
  r: number
  opacity: number
  depth: StarDepth
}

type VisibleNode = {
  id: number
  starId: number
  x: number
  y: number
  r: number
  opacity: number
  hub: boolean
  role: "dominant" | "secondary" | "tertiary"
}

type Edge = {
  from: number
  to: number
}

type ConstellationField = {
  attractors: Attractor[]
  stars: Star[]
  nodes: VisibleNode[]
  edges: Edge[]
}

const ENGINE = {
  seed: 82164,
  starCount: 248,
  visibleCount: 11,
  fieldSpan: 138,
  fieldOffset: -14,
}

const DEPTH_CONFIG: Record<
  StarDepth,
  { rMin: number; rMax: number; oMin: number; oMax: number }
> = {
  far: { rMin: 0.05, rMax: 0.07, oMin: 0.025, oMax: 0.05 },
  mid: { rMin: 0.07, rMax: 0.1, oMin: 0.055, oMax: 0.095 },
  near: { rMin: 0.1, rMax: 0.15, oMin: 0.11, oMax: 0.17 },
}

function hash(seed: number, index: number): number {
  const value = Math.sin(seed * 0.017 + index * 12.9898) * 43758.5453
  return value - Math.floor(value)
}

function lerp(min: number, max: number, t: number): number {
  return min + (max - min) * t
}

function distance(
  a: { x: number; y: number },
  b: { x: number; y: number },
): number {
  const dx = a.x - b.x
  const dy = a.y - b.y
  return Math.sqrt(dx * dx + dy * dy)
}

function createAttractors(seed: number): Attractor[] {
  const h = (index: number) => hash(seed, index)

  const dominant: Attractor = {
    x: 60 + h(0) * 20,
    y: 36 + h(1) * 14,
    mass: 1.18,
  }

  const weakA: Attractor = {
    x: dominant.x + 18 + h(2) * 10,
    y: dominant.y + 16 + h(3) * 16,
    mass: 0.24,
  }

  const weakB: Attractor = {
    x: dominant.x - 20 - h(4) * 8,
    y: dominant.y - 12 - h(5) * 8,
    mass: 0.2,
  }

  return [dominant, weakA, weakB]
}

function gravitationalInfluence(
  x: number,
  y: number,
  attractors: Attractor[],
): number {
  return attractors.reduce((sum, attractor) => {
    const dx = x - attractor.x
    const dy = y - attractor.y
    const softened = dx * dx + dy * dy + 0.65
    return sum + attractor.mass / softened
  }, 0)
}

function assignDepth(
  influence: number,
  sample: number,
  index: number,
): StarDepth {
  const roll = sample * 0.62 + (index % 9) * 0.04
  if (influence > 0.014) {
    return roll < 0.2 ? "near" : roll < 0.52 ? "mid" : "far"
  }
  if (influence > 0.0045) {
    return roll < 0.22 ? "mid" : "far"
  }
  return "far"
}

function generateStars(
  attractors: Attractor[],
  count: number,
  seed: number,
): Star[] {
  const stars: Star[] = []
  let attempt = 0
  const maxAttempts = count * 14

  while (stars.length < count && attempt < maxAttempts) {
    const sampleX = hash(seed, attempt * 3 + 11)
    const sampleY = hash(seed, attempt * 3 + 29)
    const sampleGate = hash(seed, attempt * 3 + 47)

    const x = 28 + sampleX * (ENGINE.fieldSpan * 0.62)
    const y = ENGINE.fieldOffset + sampleY * ENGINE.fieldSpan * 0.84 + 10
    const influence = gravitationalInfluence(x, y, attractors)
    const peakInfluence = attractors.reduce(
      (peak, attractor) => peak + attractor.mass / 0.65,
      0,
    )
    const normalized = influence / (peakInfluence * 0.16)

    if (x < 50 && sampleGate > normalized * 0.38) {
      attempt++
      continue
    }

    if (sampleGate > normalized * 0.76 + 0.1) {
      attempt++
      continue
    }

    const depth = assignDepth(influence, sampleGate, attempt)
    const cfg = DEPTH_CONFIG[depth]
    const radiusSample = hash(seed, attempt * 5 + 3)
    const opacitySample = hash(seed, attempt * 5 + 19)

    stars.push({
      id: stars.length,
      x,
      y,
      r: lerp(cfg.rMin, cfg.rMax, radiusSample),
      opacity: lerp(cfg.oMin, cfg.oMax, opacitySample),
      depth,
    })

    attempt++
  }

  return stars
}

function localDensity(
  star: Star,
  stars: Star[],
  radius: number,
): number {
  const radiusSquared = radius * radius
  let count = 0

  for (const candidate of stars) {
    if (candidate.id === star.id) continue
    const dx = candidate.x - star.x
    const dy = candidate.y - star.y
    if (dx * dx + dy * dy <= radiusSquared) count++
  }

  return count
}

function nodeImportance(
  star: Star,
  stars: Star[],
  attractors: Attractor[],
): number {
  const gravity = gravitationalInfluence(star.x, star.y, attractors)
  const density = localDensity(star, stars, 7.5)
  const dominantDistance = distance(star, attractors[0])
  const proximity = 1 / (1 + dominantDistance * 0.042)

  return gravity * 0.46 + density * 0.18 + proximity * 0.36
}

function selectVisibleNodes(
  stars: Star[],
  attractors: Attractor[],
  targetCount: number,
): VisibleNode[] {
  const ranked = stars
    .map((star) => ({
      star,
      score: nodeImportance(star, stars, attractors),
    }))
    .sort((a, b) => b.score - a.score)

  const picked: Star[] = []
  const minimumSeparation = 6.4

  for (const entry of ranked) {
    if (picked.length >= targetCount) break

    const isSeparated = picked.every(
      (candidate) => distance(candidate, entry.star) >= minimumSeparation,
    )

    if (isSeparated) picked.push(entry.star)
  }

  const selected = picked
    .map((star) => ({
      star,
      score: nodeImportance(star, stars, attractors),
    }))
    .sort((a, b) => b.score - a.score)

  const topScore = selected[0]?.score ?? 1

  return selected.map(({ star, score }, index) => {
    const role: VisibleNode["role"] =
      index === 0 ? "dominant" : index <= 2 ? "secondary" : "tertiary"

    if (role === "dominant") {
      return {
        id: index + 1,
        starId: star.id,
        x: star.x,
        y: star.y,
        r: 3.05,
        opacity: 1,
        hub: true,
        role,
      }
    }

    if (role === "secondary") {
      return {
        id: index + 1,
        starId: star.id,
        x: star.x,
        y: star.y,
        r: 1.52,
        opacity: 0.88,
        hub: true,
        role,
      }
    }

    const prominence = score / topScore
    const opacity =
      prominence > 0.76 ? 0.72 : prominence > 0.56 ? 0.58 : 0.42

    return {
      id: index + 1,
      starId: star.id,
      x: star.x,
      y: star.y,
      r: lerp(0.68, 0.9, prominence),
      opacity,
      hub: false,
      role,
    }
  })
}

function edgeKey(a: number, b: number): string {
  return a < b ? `${a}-${b}` : `${b}-${a}`
}

function hasEdge(edges: Edge[], a: number, b: number): boolean {
  const key = edgeKey(a, b)
  return edges.some((edge) => edgeKey(edge.from, edge.to) === key)
}

function neighborsOf(nodeId: number, edges: Edge[]): number[] {
  const adjacent: number[] = []

  for (const edge of edges) {
    if (edge.from === nodeId) adjacent.push(edge.to)
    if (edge.to === nodeId) adjacent.push(edge.from)
  }

  return adjacent
}

function createsTriangle(a: number, b: number, edges: Edge[]): boolean {
  for (const neighbor of neighborsOf(a, edges)) {
    if (hasEdge(edges, neighbor, b)) return true
  }
  return false
}

function edgeAngle(
  from: VisibleNode,
  to: VisibleNode,
): { angle: number; length: number } {
  return {
    angle: Math.atan2(to.y - from.y, to.x - from.x),
    length: distance(from, to),
  }
}

function createsRegularGeometry(
  a: VisibleNode,
  b: VisibleNode,
  edges: Edge[],
  nodes: VisibleNode[],
): boolean {
  const next = edgeAngle(a, b)
  const nodeById = new Map(nodes.map((node) => [node.id, node]))

  for (const edge of edges) {
    const from = nodeById.get(edge.from)
    const to = nodeById.get(edge.to)
    if (!from || !to) continue

    const existing = edgeAngle(from, to)
    let delta = Math.abs(next.angle - existing.angle)
    if (delta > Math.PI) delta = Math.PI * 2 - delta

    if (delta < 0.13 && Math.abs(next.length - existing.length) < 2.8) {
      return true
    }
  }

  return false
}

function buildConnections(nodes: VisibleNode[]): Edge[] {
  const edges: Edge[] = []
  const connectionCount = new Map<number, number>()
  const maxDistance = 21
  const minDistance = 4.8
  const nodeById = new Map(nodes.map((node) => [node.id, node]))

  const maxConnectionsFor = (nodeId: number): number => {
    const node = nodeById.get(nodeId)
    if (!node) return 1
    return node.role === "dominant" ? 2 : 1
  }

  const candidates: { from: number; to: number; distance: number }[] = []

  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const separation = distance(nodes[i], nodes[j])
      if (separation >= minDistance && separation <= maxDistance) {
        candidates.push({
          from: nodes[i].id,
          to: nodes[j].id,
          distance: separation,
        })
      }
    }
  }

  candidates.sort((a, b) => {
    const aTouchesDominant =
      nodeById.get(a.from)?.role === "dominant" ||
      nodeById.get(a.to)?.role === "dominant"
        ? 0
        : 1
    const bTouchesDominant =
      nodeById.get(b.from)?.role === "dominant" ||
      nodeById.get(b.to)?.role === "dominant"
        ? 0
        : 1

    if (aTouchesDominant !== bTouchesDominant) {
      return aTouchesDominant - bTouchesDominant
    }

    return a.distance - b.distance
  })

  for (const candidate of candidates) {
    const fromCount = connectionCount.get(candidate.from) ?? 0
    const toCount = connectionCount.get(candidate.to) ?? 0

    if (
      fromCount >= maxConnectionsFor(candidate.from) ||
      toCount >= maxConnectionsFor(candidate.to)
    ) {
      continue
    }

    if (createsTriangle(candidate.from, candidate.to, edges)) continue

    const fromNode = nodeById.get(candidate.from)
    const toNode = nodeById.get(candidate.to)
    if (!fromNode || !toNode) continue

    if (createsRegularGeometry(fromNode, toNode, edges, nodes)) continue

    edges.push({ from: candidate.from, to: candidate.to })
    connectionCount.set(candidate.from, fromCount + 1)
    connectionCount.set(candidate.to, toCount + 1)
  }

  return edges
}

function buildField(): ConstellationField {
  const attractors = createAttractors(ENGINE.seed)
  const stars = generateStars(attractors, ENGINE.starCount, ENGINE.seed)
  const nodes = selectVisibleNodes(stars, attractors, ENGINE.visibleCount)
  const edges = buildConnections(nodes)

  return { attractors, stars, nodes, edges }
}

const field = buildField()

function starFill(depth: StarDepth): string {
  if (depth === "far") return "#B0BAC4"
  if (depth === "mid") return "#D2D6DC"
  return "#E8E3DA"
}

function nodeFill(node: VisibleNode): string {
  if (node.hub) {
    if (node.role === "dominant") return "#87996A"
    return "#929F74"
  }

  if (node.opacity <= 0.48) return "#B8BEC6"
  if (node.opacity <= 0.64) return "#D4CEC6"
  return "#ECE7DF"
}

function render(fieldData: ConstellationField) {
  const { stars, nodes, edges } = fieldData
  const hubs = nodes.filter((node) => node.hub)
  const nodeById = new Map(nodes.map((node) => [node.id, node]))
  const depthOrder: Record<StarDepth, number> = { far: 0, mid: 1, near: 2 }
  const sortedStars = [...stars].sort(
    (a, b) => depthOrder[a.depth] - depthOrder[b.depth],
  )

  return (
    <svg
      viewBox="0 0 100 100"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient id="atmosphere" cx="72%" cy="40%" r="62%">
          <stop offset="0%" stopColor="#8E9870" stopOpacity="0.022" />
          <stop offset="42%" stopColor="#6E7684" stopOpacity="0.01" />
          <stop offset="100%" stopColor="#050505" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="hubGlowDominantOuter">
          <stop offset="0%" stopColor="#6E7858" stopOpacity="0.016" />
          <stop offset="36%" stopColor="#667080" stopOpacity="0.007" />
          <stop offset="100%" stopColor="#3E4450" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="hubGlowDominantInner">
          <stop offset="0%" stopColor="#84966A" stopOpacity="0.028" />
          <stop offset="64%" stopColor="#7A8468" stopOpacity="0.006" />
          <stop offset="100%" stopColor="#505848" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="hubGlowSecondaryOuter">
          <stop offset="0%" stopColor="#707A62" stopOpacity="0.011" />
          <stop offset="48%" stopColor="#646E7C" stopOpacity="0.005" />
          <stop offset="100%" stopColor="#404650" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="hubGlowSecondaryInner">
          <stop offset="0%" stopColor="#8A9670" stopOpacity="0.02" />
          <stop offset="60%" stopColor="#7E886E" stopOpacity="0.005" />
          <stop offset="100%" stopColor="#565E50" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="100" height="100" fill="url(#atmosphere)" />

      {sortedStars.map((star) => (
        <circle
          key={`star-${star.id}`}
          cx={star.x}
          cy={star.y}
          r={star.r}
          fill={starFill(star.depth)}
          opacity={star.opacity * 0.92}
        />
      ))}

      {hubs.map((hub) => (
        <g key={`glow-${hub.id}`}>
          <circle
            cx={hub.x}
            cy={hub.y}
            r={hub.role === "dominant" ? 12.5 : 6.8}
            fill={
              hub.role === "dominant"
                ? "url(#hubGlowDominantOuter)"
                : "url(#hubGlowSecondaryOuter)"
            }
          />
          <circle
            cx={hub.x}
            cy={hub.y}
            r={hub.role === "dominant" ? 5.6 : 3.2}
            fill={
              hub.role === "dominant"
                ? "url(#hubGlowDominantInner)"
                : "url(#hubGlowSecondaryInner)"
            }
          />
        </g>
      ))}

      {edges.map((edge) => {
        const from = nodeById.get(edge.from)
        const to = nodeById.get(edge.to)
        if (!from || !to) return null

        return (
          <line
            key={`edge-${edge.from}-${edge.to}`}
            x1={from.x}
            y1={from.y}
            x2={to.x}
            y2={to.y}
            stroke="rgba(176, 184, 194, 0.038)"
            strokeWidth={0.1}
            strokeLinecap="round"
          />
        )
      })}

      {nodes.map((node) => (
        <circle
          key={`node-${node.id}`}
          cx={node.x}
          cy={node.y}
          r={node.r}
          fill={nodeFill(node)}
          opacity={node.hub && node.role === "dominant" ? 0.94 : node.opacity * 0.96}
        />
      ))}
    </svg>
  )
}

export default function Constellation() {
  return <div className="absolute inset-0">{render(field)}</div>
}
