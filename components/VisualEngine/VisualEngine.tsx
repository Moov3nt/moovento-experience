"use client";

import type { Scene } from "../Scene/SceneContext";

type Props = {
  scene: Scene;
};

export default function VisualEngine({}: Props) {
  return (
    <div className="fixed inset-0 pointer-events-none">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
      >
        <circle
          cx="50"
          cy="50"
          r="5"
          fill="red"
        />
      </svg>
    </div>
  );
}