export const ENGINE = {
  seed: 42,

  width: 100,
  height: 100,

  starCount: 700,

  hubCount: 6,

  glowRadius: 5.5,
};

export const COLORS = {
  star: "#F5F5F0",
  hub: "#C4D39A",
  glow: "#C4D39A",
  edge: "rgba(255,255,255,.07)",
};

export const DEPTH = {
  far: {
    radius: [0.04, 0.08],
    opacity: [0.05, 0.12],
  },

  mid: {
    radius: [0.08, 0.16],
    opacity: [0.10, 0.22],
  },

  near: {
    radius: [0.16, 0.30],
    opacity: [0.18, 0.35],
  },
};