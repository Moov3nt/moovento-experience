export type SceneObservationTransition = "enter" | "exit" | null;

export function resolveSceneObservationTransition(
  wasWithinThreshold: boolean,
  isWithinThreshold: boolean,
): SceneObservationTransition {
  if (!wasWithinThreshold && isWithinThreshold) return "enter";
  if (wasWithinThreshold && !isWithinThreshold) return "exit";

  return null;
}
