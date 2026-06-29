"use client";

import { useEffect, useMemo } from "react";

import Background from "./Background";
import Stars from "./Stars";
import Network from "./Network";

import { generateScene } from "./generator";
import { startAnimation } from "./animation";
import { SCENES } from "./scenes";

import type { Scene } from "../Scene/SceneContext";

type Props = {
  scene: Scene;
};

export default function VisualEngine({
  scene,
}: Props) {
  // Configurazione della scena corrente
  const config = SCENES[scene] ?? SCENES.hero;

  // Genera la rete in funzione della scena
  const graph = useMemo(
    () => generateScene(config.density),
    [config.density]
  );

  useEffect(() => {
    startAnimation();
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        className="h-full w-full"
        style={{
          opacity: config.opacity,
          transition: "opacity 1200ms ease-in-out",
        }}
      >
        <Background />

        <Stars stars={graph.stars} />

        <Network
          hubs={graph.hubs}
          edges={graph.edges}
          config={config}
        />
      </svg>
    </div>
  );
}