"use client";

import VisualEngine from "./VisualEngine/VisualEngine";
import { useVisualState } from "./Scene/SceneContext";

export default function BackgroundField() {
  const { visualRequest } = useVisualState();

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <VisualEngine visualRequest={visualRequest} />
    </div>
  );
}
