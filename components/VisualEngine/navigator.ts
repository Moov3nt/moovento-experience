import type { Edge } from "./types";
export type NavigationState = {
  currentHub: number;
  previousHub: number;
  currentEdge: number;
};
export type GraphNavigator = {
  connectedEdges(
    hub: number,
  ): number[];

  nextEdge(
    currentEdge: number,
    previousEdge: number,
  ): number;
};

export function createNavigator(
  edges: Edge[],
): GraphNavigator {

  const map = new Map<
    number,
    number[]
  >();

  edges.forEach((edge, index) => {

    if (!map.has(edge.from)) {
      map.set(edge.from, []);
    }

    if (!map.has(edge.to)) {
      map.set(edge.to, []);
    }

    map.get(edge.from)!.push(index);
    map.get(edge.to)!.push(index);

  });

  return {

    connectedEdges(hub) {
      return map.get(hub) ?? [];
    },

    nextEdge(
        currentEdge,
        previousEdge,
      ) {
        const edge =
          edges[currentEdge];
      
        if (!edge) {
          return currentEdge;
        }
      
        const hub = edge.to;
      
        const connected =
          (map.get(hub) ?? []).filter(
            (index) =>
              index !== currentEdge &&
              index !== previousEdge,
          );
      
        if (connected.length === 0) {
          return currentEdge;
        }
      
        return connected[0];
      },

  };
}

