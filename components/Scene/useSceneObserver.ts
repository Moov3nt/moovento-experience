"use client";

import { useEffect, RefObject } from "react";

import { Scene } from "./SceneContext";
import { useScene } from "./SceneContext";

export function useSceneObserver(
  ref: RefObject<HTMLElement | null>,
  scene: Scene
) {
  const { setScene } = useScene();

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setScene(scene);
        }
      },
      {
        threshold: 0.45,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [ref, scene, setScene]);
}