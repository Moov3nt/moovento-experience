import type { VisualRequest } from "../Scene/SceneContext";
import type { VisualPresentation } from "./scenes";

export const CLOSING_TRANSITION_DURATION_MS = 2200;

export type ResolvedVisualPresentation = VisualPresentation &
  Readonly<{
    hubIntensityTransitionDurationMs: number;
  }>;

export function resolveVisualPresentation(
  presentation: VisualPresentation,
  request: VisualRequest,
  prefersReducedMotion: boolean,
): ResolvedVisualPresentation {
  if (prefersReducedMotion) {
    return {
      ...presentation,
      transitionDurationMs: 0,
      hubIntensityTransitionDurationMs: 0,
    };
  }

  if (request.transitionIntent !== "closing") {
    return {
      ...presentation,
      hubIntensityTransitionDurationMs: 0,
    };
  }

  return {
    ...presentation,
    transitionDurationMs: CLOSING_TRANSITION_DURATION_MS,
    hubIntensityTransitionDurationMs: CLOSING_TRANSITION_DURATION_MS,
  };
}
