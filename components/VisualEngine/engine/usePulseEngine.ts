"use client";

import {
  useEffect,
  useState,
} from "react";

import type { Edge } from "../types";

export type PulseState = {
  edgeIndex: number;
  progress: number;
};

export function usePulseEngine(
  edges: Edge[],
  enabled = true,
) {
  const [pulse, setPulse] =
    useState<PulseState>({
      edgeIndex: 0,
      progress: 0,
    });

  useEffect(() => {
    if (!enabled || edges.length === 0) return;

    let frame: number;

    const animate = () => {
      setPulse((current) => {
        let progress =
          current.progress + 0.003;

        let edgeIndex =
          current.edgeIndex;

        if (progress >= 1) {
          progress = 0;

          edgeIndex =
            (edgeIndex + 1) %
            edges.length;
        }

        return {
          edgeIndex,
          progress,
        };
      });

      frame =
        requestAnimationFrame(
          animate,
        );
    };

    frame =
      requestAnimationFrame(
        animate,
      );

    return () =>
      cancelAnimationFrame(frame);
  }, [edges, enabled]);

  return pulse;
}


