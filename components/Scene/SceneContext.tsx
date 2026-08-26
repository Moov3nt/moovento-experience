"use client";

import {
  createContext,
  useContext,
} from "react";

export type VisualState =
  | "field"
  | "system"
  | "relevance"
  | "action";

/** @deprecated Compatibility for the deferred sceneGraph module only. */
export type Scene =
  | "hero"
  | "manifesto"
  | "platform"
  | "insight"
  | "decision"
  | "cta";

export type SceneContextType = {
  visualState: VisualState;
  setVisualState: (visualState: VisualState) => void;
};

export const SceneContext =
  createContext<SceneContextType | null>(null);

export function useVisualState() {
  const context = useContext(SceneContext);

  if (!context) {
    throw new Error(
      "useVisualState must be used inside SceneProvider"
    );
  }

  return context;
}
