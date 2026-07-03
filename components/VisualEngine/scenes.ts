import type { Scene } from "../Scene/SceneContext";

export type SceneConfig = {
  density: number;
  opacity: number;
  edgeOpacity: number;
  glow: number;
  pulse: number;
};

export const SCENES: Record<Scene, SceneConfig> = {
  hero: {
    density: 0.60,
    opacity: 0.28,
    edgeOpacity: 0.08,
    glow: 0.20,
    pulse: 0.80,
  },

  manifesto: {
    density: 0.85,
    opacity: 0.36,
    edgeOpacity: 0.14,
    glow: 0.35,
    pulse: 1,
  },

  platform: {
    density: 1.20,
    opacity: 0.48,
    edgeOpacity: 0.22,
    glow: 0.50,
    pulse: 1.20,
  },

  insight: {
    density: 1.55,
    opacity: 0.60,
    edgeOpacity: 0.30,
    glow: 0.75,
    pulse: 1.50,
  },

  decision: {
    density: 2.00,
    opacity: 0.72,
    edgeOpacity: 0.42,
    glow: 1,
    pulse: 2,
  },

  cta: {
    density: 0.75,
    opacity: 0.34,
    edgeOpacity: 0.10,
    glow: 0.25,
    pulse: 0.70,
  },
};

