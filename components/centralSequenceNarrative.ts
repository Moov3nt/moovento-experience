// Static Home narrative fixture for the deterministic default graph (seed 42).
// This selects the connected right-side branch 4 -> 3 -> 5; it is not engine inference.
export const RELEVANCE_NARRATIVE_SELECTION = {
  selectedNodeIds: [3, 4, 5],
  selectedEdgeKeys: ["4-3", "3-5"],
} as const;
