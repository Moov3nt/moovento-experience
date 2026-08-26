// Deterministic Home narrative data for the default graph (seed 42), not engine inference.
// It demonstrates both the relevant branch 4 -> 3 -> 5 and its intervention locus.
export const CENTRAL_SEQUENCE_NARRATIVE = {
  relevantNodeIds: [3, 4, 5],
  relevantEdgeKeys: ["4-3", "3-5"],
  actionNodeId: 3,
} as const;
