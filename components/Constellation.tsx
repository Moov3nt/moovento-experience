const nodes = [
    { id: 1, x: 12, y: 22, r: 2, hub: false },
    { id: 2, x: 24, y: 34, r: 4, hub: true },
    { id: 3, x: 38, y: 18, r: 2, hub: false },
    { id: 4, x: 56, y: 30, r: 3, hub: false },
    { id: 5, x: 74, y: 20, r: 2, hub: false },
  
    { id: 6, x: 18, y: 62, r: 2, hub: false },
    { id: 7, x: 38, y: 54, r: 5, hub: true },
    { id: 8, x: 58, y: 66, r: 2, hub: false },
    { id: 9, x: 80, y: 58, r: 3, hub: false },
  
    { id: 10, x: 28, y: 82, r: 2, hub: false },
    { id: 11, x: 64, y: 84, r: 2, hub: false },
  ]
  
  const edges = [
    [1,2],
    [2,3],
    [3,4],
    [4,5],
  
    [2,7],
    [7,6],
    [7,8],
    [8,9],
    [7,10],
    [8,11]
  ]
  
  export default function Constellation() {
  
    const node = (id:number)=>nodes.find(n=>n.id===id)!
  
    return (
  
  <div className="relative w-full h-full">
  
  <svg
  viewBox="0 0 100 100"
  preserveAspectRatio="xMidYMid meet"
  className="absolute inset-0 w-full h-full overflow-visible"
  >
  
  <defs>
  
  <radialGradient id="hubGlow">
  
  <stop offset="0%" stopColor="#9DB36A" stopOpacity=".9"/>
  
  <stop offset="100%" stopColor="#9DB36A" stopOpacity="0"/>
  
  </radialGradient>
  
  </defs>
  
  {/* Glow */}
  
  {nodes.filter(n=>n.hub).map(n=>(
  
  <circle
  
  key={"g"+n.id}
  
  cx={n.x}
  
  cy={n.y}
  
  r={8}
  
  fill="url(#hubGlow)"
  
  />
  
  ))}
  
  {/* Edges */}
  
  {edges.map(([a,b],i)=>{
  
  const n1=node(a)
  
  const n2=node(b)
  
  return(
  
  <line
  
  key={i}
  
  x1={n1.x}
  
  y1={n1.y}
  
  x2={n2.x}
  
  y2={n2.y}
  
  stroke="rgba(255,255,255,.18)"
  
  strokeWidth=".28"
  
  />
  
  )
  
  })}
  
  {/* Nodes */}
  
  {nodes.map(n=>(
  
  <circle
  
  key={n.id}
  
  cx={n.x}
  
  cy={n.y}
  
  r={n.r*.35}
  
  fill={n.hub ? "#9DB36A":"white"}
  
  />
  
  ))}
  
  </svg>
  
  </div>
  
  )
  
  }