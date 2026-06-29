"use client";

import {
  createContext,
  useContext,
} from "react";

export type Scene =
  | "hero"
  | "manifesto"
  | "platform"
  | "insight"
  | "decision"
  | "cta";

export type SceneContextType = {
  scene: Scene;
  setScene: (scene: Scene) => void;
};

export const SceneContext =
  createContext<SceneContextType | null>(null);

export function useScene() {
  const context = useContext(SceneContext);

  if (!context) {
    throw new Error(
      "useScene must be used inside SceneProvider"
    );
  }

  return context;
}