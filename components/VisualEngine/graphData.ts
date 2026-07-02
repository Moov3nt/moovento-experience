import type { Edge } from "./Types";

export function buildAdjacency(
  edges: Edge[],
) {
  const map = new Map<number, number[]>();

  edges.forEach((edge) => {
    if (!map.has(edge.from)) {
      map.set(edge.from, []);
    }

    if (!map.has(edge.to)) {
      map.set(edge.to, []);
    }

    map.get(edge.from)!.push(edge.to);
    map.get(edge.to)!.push(edge.from);
  });

  return map;
}