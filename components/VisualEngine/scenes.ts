import type { VisualState } from "../Scene/SceneContext";

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
    nodeOpacity: 0.42,
    edgeOpacity: 0.08,
    hubIntensity: 0.35,
    pulseEnabled: false,
    flashEnabled: false,
    transitionDurationMs: 1200,
    selectedNodeIds: [],
    selectedEdgeKeys: [],
  },
  system: {
    fieldOpacity: 0.38,
    starOpacity: 0.82,
    nodeOpacity: 0.58,
    edgeOpacity: 0.14,
    hubIntensity: 0.5,
    pulseEnabled: false,
    flashEnabled: false,
    transitionDurationMs: 1200,
    selectedNodeIds: [],
    selectedEdgeKeys: [],
  },
  relevance: {
    fieldOpacity: 0.48,
    starOpacity: 0.9,
    nodeOpacity: 0.7,
    edgeOpacity: 0.2,
    hubIntensity: 0.7,
    pulseEnabled: true,
    flashEnabled: false,
    transitionDurationMs: 1200,
    selectedNodeIds: [],
    selectedEdgeKeys: [],
  },
  action: {
    fieldOpacity: 0.54,
    starOpacity: 0.92,
    nodeOpacity: 0.78,
    edgeOpacity: 0.24,
    hubIntensity: 0.82,
    pulseEnabled: true,
    flashEnabled: true,
    transitionDurationMs: 1200,
    selectedNodeIds: [],
    selectedEdgeKeys: [],
  },
};
