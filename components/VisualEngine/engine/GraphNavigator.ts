import type { Edge } from "../types";

export class GraphNavigator {
  private readonly adjacency = new Map<
    number,
    Edge[]
  >();

  constructor(edges: Edge[]) {
    edges.forEach((edge) => {
      const list =
        this.adjacency.get(edge.from) ??
        [];

      list.push(edge);

      this.adjacency.set(
        edge.from,
        list,
      );
    });
  }

  getNextEdge(
    hubId: number,
  ): Edge | null {
    const edges =
      this.adjacency.get(hubId);

    if (
      !edges ||
      edges.length === 0
    ) {
      return null;
    }

    return edges[
      Math.floor(
        Math.random() *
          edges.length,
      )
    ];
  }

  getOutgoing(
    hubId: number,
  ) {
    return (
      this.adjacency.get(hubId) ??
      []
    );
  }
}


