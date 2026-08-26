import type { VisualState } from "../Scene/SceneContext";
import { CENTRAL_SEQUENCE_NARRATIVE } from "../centralSequenceNarrative";

export type VisualPresentation = {
  fieldOpacity: number;
  starOpacity: number;
  nodeOpacity: number;
  edgeOpacity: number;
  hubIntensity: number;
  pulseEnabled: boolean;
  flashEnabled: boolean;
  transitionDurationMs: number;
  relevantNodeIds: readonly number[];
  relevantEdgeKeys: readonly string[];
  actionNodeId: number | null;
};

export const VISUAL_PRESENTATIONS: Record<VisualState, VisualPresentation> = {
  field: {
    fieldOpacity: 0.28,
    starOpacity: 0.72,
    nodeOpacity: 0.46,
    edgeOpacity: 0.1,
    hubIntensity: 0.5,
    pulseEnabled: false,
    flashEnabled: false,
    transitionDurationMs: 1400,
    relevantNodeIds: [],
    relevantEdgeKeys: [],
    actionNodeId: null,
  },
  system: {
    fieldOpacity: 0.4,
    starOpacity: 0.78,
    nodeOpacity: 0.7,
    edgeOpacity: 0.2,
    hubIntensity: 0.58,
    pulseEnabled: false,
    flashEnabled: false,
    transitionDurationMs: 1400,
    relevantNodeIds: [],
    relevantEdgeKeys: [],
    actionNodeId: null,
  },
  relevance: {
    fieldOpacity: 0.34,
    starOpacity: 0.5,
    nodeOpacity: 0.48,
    edgeOpacity: 0.09,
    hubIntensity: 0.38,
    pulseEnabled: false,
    flashEnabled: false,
    transitionDurationMs: 2200,
    relevantNodeIds: CENTRAL_SEQUENCE_NARRATIVE.relevantNodeIds,
    relevantEdgeKeys: CENTRAL_SEQUENCE_NARRATIVE.relevantEdgeKeys,
    actionNodeId: null,
  },
  action: {
    fieldOpacity: 0.36,
    starOpacity: 0.42,
    nodeOpacity: 0.58,
    edgeOpacity: 0.12,
    hubIntensity: 0.42,
    pulseEnabled: false,
    flashEnabled: false,
    transitionDurationMs: 1600,
    relevantNodeIds: CENTRAL_SEQUENCE_NARRATIVE.relevantNodeIds,
    relevantEdgeKeys: CENTRAL_SEQUENCE_NARRATIVE.relevantEdgeKeys,
    actionNodeId: CENTRAL_SEQUENCE_NARRATIVE.actionNodeId,
  },
};
