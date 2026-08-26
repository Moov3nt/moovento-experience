"use client";

import { useEffect, RefObject } from "react";

import { VisualState } from "./SceneContext";
import { useVisualState } from "./SceneContext";

export function useSceneObserver(
  ref: RefObject<HTMLElement | null>,
  visualState: VisualState
) {
  const { setVisualState } = useVisualState();

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisualState(visualState);
        }
      },
      {
        threshold: 0.45,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [ref, visualState, setVisualState]);
}
