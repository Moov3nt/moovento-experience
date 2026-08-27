"use client";

import { useEffect, useMemo, useState } from "react";
import Background from "./Background";
import Network from "./Network";
import Stars from "./Stars";
import PulseRenderer from "./PulseRenderer";
import { generateScene } from "./generator";
import { VISUAL_PRESENTATIONS } from "./scenes";
import type { VisualRequest } from "../Scene/SceneContext";
import { usePulseEngine } from "./engine/usePulseEngine";
import { useHubEnergy } from "./engine/useHubEnergy";
import { useNetworkBreath } from "./engine/useNetworkBreath";
import PulseTrail from "./PulseTrail";
import NodeFlash from "./NodeFlash";
import { useEventEngine } from "./engine/useEventEngine";
import { resolveVisualPresentation } from "./resolvePresentation";

type Props = {
  visualRequest: VisualRequest;
};

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(query.matches);

    updatePreference();
    query.addEventListener("change", updatePreference);

    return () => query.removeEventListener("change", updatePreference);
  }, []);

  return prefersReducedMotion;
}

export default function VisualEngine({
  visualRequest,
}: Props) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const presentation = useMemo(
    () =>
      resolveVisualPresentation(
        VISUAL_PRESENTATIONS[visualRequest.visualState],
        visualRequest,
        prefersReducedMotion,
      ),
    [prefersReducedMotion, visualRequest],
  );

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
          opacity: presentation.fieldOpacity,
          transition: `opacity ${presentation.transitionDurationMs}ms ease-in-out`,
        }}
      >
        <Background />

        <Stars
          stars={graph.stars}
          opacity={presentation.starOpacity}
          transitionDurationMs={presentation.transitionDurationMs}
        />

        <Network
          hubs={graph.hubs}
          edges={graph.edges}
          presentation={presentation}
          energy={energy}
          breath={breath}
        />

        {presentation.pulseEnabled && (
          <PulseTrail
            hubs={graph.hubs}
            edges={graph.edges}
            edgeIndex={pulse.edgeIndex}
            progress={pulse.progress}
          />
        )}

        {presentation.flashEnabled && (
          <NodeFlash
            hubs={graph.hubs}
            activeHub={flashHub}
          />
        )}

        {presentation.pulseEnabled && (
          <PulseRenderer
            hubs={graph.hubs}
            edges={graph.edges}
            edgeIndex={pulse.edgeIndex}
            progress={pulse.progress}
          />
        )}
          
            </svg>
    </div>
  );
}

