"use client";

import { useState } from "react";

import type { Pulse } from "./types";

export function useSimulation() {

  const [pulses, setPulses] =
    useState<Pulse[]>([
      {
        id: 0,
        fromHub: 0,
        toHub: 0,
        edgeIndex: 0,
        progress: 0,
        speed: 0.003,
      },
    ]);

  const energy = [];

  const events = [];

  const breath = 0;

  const pulse = pulses[0];

  return {

    pulse,

    pulses,
    
    energy,

    events,

    breath,

  };
}