"use client";

import VisualEngine from "./VisualEngine/VisualEngine";
import { useScene } from "./Scene/SceneContext";

export default function BackgroundField() {
  const { scene } = useScene();

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <VisualEngine scene={scene} />
    </div>
  );
}