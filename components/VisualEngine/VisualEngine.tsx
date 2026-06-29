"use client";

import { useMemo } from "react";

import Background from "./Background";
import Stars from "./Stars";
import Network from "./Network";

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

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
        style={{
          opacity: config.opacity,
          transition: "opacity 1200ms ease-in-out",
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
      </svg>
    </div>
  );
}