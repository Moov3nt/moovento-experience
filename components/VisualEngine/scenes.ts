import type { VisualState } from "../Scene/SceneContext";
import { RELEVANCE_NARRATIVE_SELECTION } from "../centralSequenceNarrative";

export type VisualPresentation = {
  fieldOpacity: number;
  starOpacity: number;
  nodeOpacity: number;
  edgeOpacity: number;
  hubIntensity: number;
  pulseEnabled: boolean;
  flashEnabled: boolean;
  transitionDurationMs: number;
  selectedNodeIds: readonly number[];
  selectedEdgeKeys: readonly string[];
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
    selectedNodeIds: [],
    selectedEdgeKeys: [],
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
    selectedNodeIds: [],
    selectedEdgeKeys: [],
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
    selectedNodeIds: RELEVANCE_NARRATIVE_SELECTION.selectedNodeIds,
    selectedEdgeKeys: RELEVANCE_NARRATIVE_SELECTION.selectedEdgeKeys,
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
    selectedNodeIds: [],
    selectedEdgeKeys: [],
  },
};
