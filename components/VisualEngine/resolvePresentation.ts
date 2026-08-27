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
  if (request.transitionIntent !== "closing") {
    return {
      ...presentation,
      hubIntensityTransitionDurationMs: 0,
    };
  }

  const transitionDurationMs = prefersReducedMotion
    ? 0
    : CLOSING_TRANSITION_DURATION_MS;

  return {
    ...presentation,
    transitionDurationMs,
    hubIntensityTransitionDurationMs: transitionDurationMs,
  };
}
