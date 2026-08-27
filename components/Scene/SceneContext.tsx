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

export type VisualRequest =
  | Readonly<{
      visualState: VisualState;
      transitionIntent: "default";
    }>
  | Readonly<{
      visualState: "field";
      transitionIntent: "closing";
    }>;

/** @deprecated Compatibility for the deferred sceneGraph module only. */
export type Scene =
  | "hero"
  | "manifesto"
  | "platform"
  | "insight"
  | "decision"
  | "cta";

export type SceneContextType = {
  visualRequest: VisualRequest;
  requestVisualState: (visualRequest: VisualRequest) => void;
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
