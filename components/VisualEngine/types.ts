export type Point = {
    x: number
    y: number
  }
  
  export type Star = {
    id: number
    x: number
    y: number
    radius: number
    opacity: number
    depth: "far" | "mid" | "near"
  }
  
  export type Hub = {
    id: number
    x: number
    y: number
    radius: number
    dominant: boolean
  }
  
  export type Edge = {
    from: number
    to: number
    primary?: boolean;
  }
  
  export type VisualScene = {
    stars: Star[]
    hubs: Hub[]
    edges: Edge[]
    import type { GraphNavigator } from "./navigator";
    navigator: GraphNavigator;
  }