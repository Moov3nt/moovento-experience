"use client";

import { useEffect, useRef, type RefObject } from "react";

import type { VisualRequest, VisualState } from "./SceneContext";
import { useVisualState } from "./SceneContext";
import { resolveSceneObservationTransition } from "./sceneObservation";

const SCENE_THRESHOLD = 0.45;

function toVisualRequest(
  requestedVisual: VisualState | VisualRequest,
): VisualRequest {
  return typeof requestedVisual === "string"
    ? {
        visualState: requestedVisual,
        transitionIntent: "default",
      }
    : requestedVisual;
}

export function useSceneObserver(
  ref: RefObject<HTMLElement | null>,
  requestedVisual: VisualState | VisualRequest,
  reverseExitVisual?: VisualState | VisualRequest,
) {
  const { requestVisualState } = useVisualState();
  const wasWithinThreshold = useRef(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const visualRequest = toVisualRequest(requestedVisual);
    const reverseExitRequest = reverseExitVisual
      ? toVisualRequest(reverseExitVisual)
      : null;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isWithinThreshold =
          entry.isIntersecting && entry.intersectionRatio >= SCENE_THRESHOLD;
        const transition = resolveSceneObservationTransition(
          wasWithinThreshold.current,
          isWithinThreshold,
        );

        wasWithinThreshold.current = isWithinThreshold;

        if (transition === "enter") {
          requestVisualState(visualRequest);
        } else if (transition === "exit" && reverseExitRequest) {
          requestVisualState(reverseExitRequest);
        }
      },
      {
        threshold: SCENE_THRESHOLD,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [ref, requestVisualState, requestedVisual, reverseExitVisual]);
}
