"use client";

import {
  useEffect,
  useMemo,
  useState,
} from "react";

import Background from "./Background";
import Network from "./Network";
import Stars from "./Stars";
import PulseRenderer from "./PulseRenderer";

import { generateScene } from "./generator";
import { SCENES } from "./scenes";

import type { Scene } from "../Scene/SceneContext";

type Props = {
  scene: Scene;
};

export default function VisualEngine({
  scene,
}: Props) {
  const config =
    SCENES[scene] ??
    SCENES.hero;

  const graph = useMemo(
    () => generateScene(),
    [],
  );

  const [pulse, setPulse] =
  useState({
    edgeIndex: 0,
    progress: 0,
  });

  useEffect(() => {
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
            graph.edges.length;
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
  }, [graph]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
        style={{
          opacity: config.opacity,
          transition:
            "opacity 1200ms ease-in-out",
        }}
      >
        <Background />

        <Stars
          stars={graph.stars}
          opacity={config.starOpacity}
        />

        <Network
          hubs={graph.hubs}
          edges={graph.edges}
          config={config}
        />

      <PulseRenderer
        hubs={graph.hubs}
        edges={graph.edges}
        edgeIndex={pulse.edgeIndex}
        progress={pulse.progress}
      />
          
            </svg>
    </div>
  );
}