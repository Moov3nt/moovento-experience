"use client";

import { useMemo } from "react";
import Background from "./Background";
import Network from "./Network";
import Stars from "./Stars";
import PulseRenderer from "./PulseRenderer";
import { generateScene } from "./generator";
import { SCENES } from "./scenes";
import type { Scene } from "../Scene/SceneContext";
import { usePulseEngine } from "./engine/usePulseEngine";
import { useHubEnergy } from "./engine/useHubEnergy";
import { useNetworkBreath } from "./engine/useNetworkBreath";
import PulseTrail from "./PulseTrail";
import NodeFlash from "./NodeFlash";
import { useEventEngine } from "./engine/useEventEngine";

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

  const pulse = usePulseEngine(
    graph.edges,
    graph.navigator,
  );

  const breath = useNetworkBreath();

  const activeHub =
  graph.edges[pulse.edgeIndex]?.to ?? -1;

  const energy = useHubEnergy(
  graph.hubs.length,
  activeHub,
  );

  const { flashHub } = useEventEngine(activeHub);

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

        />

        <Network
          hubs={graph.hubs}
          edges={graph.edges}
          config={config}
          energy={energy}
          breath={breath}
        />

        <PulseTrail
          hubs={graph.hubs}
          edges={graph.edges}
          edgeIndex={pulse.edgeIndex}
          progress={pulse.progress}
        />

        <NodeFlash
          hubs={graph.hubs}
          activeHub={flashHub}
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

