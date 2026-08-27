"use client";

import { useEffect, RefObject } from "react";

import type { VisualRequest, VisualState } from "./SceneContext";
import { useVisualState } from "./SceneContext";

export function useSceneObserver(
  ref: RefObject<HTMLElement | null>,
  requestedVisual: VisualState | VisualRequest,
) {
  const { requestVisualState } = useVisualState();

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const visualRequest: VisualRequest =
      typeof requestedVisual === "string"
        ? {
            visualState: requestedVisual,
            transitionIntent: "default",
          }
        : requestedVisual;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          requestVisualState(visualRequest);
        }
      },
      {
        threshold: 0.45,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [ref, requestVisualState, requestedVisual]);
}
