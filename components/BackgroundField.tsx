"use client";

import VisualEngine from "./VisualEngine/VisualEngine";
import { useVisualState } from "./Scene/SceneContext";

export default function BackgroundField() {
  const { visualState } = useVisualState();

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <VisualEngine visualState={visualState} />
    </div>
  );
}
