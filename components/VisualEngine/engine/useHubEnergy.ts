"use client";

import { useEffect, useReducer } from "react";

type HubArrival = Readonly<{
  activeHub: number;
  hubCount: number;
}>;

export function createHubEnergy(hubCount: number) {
  return Array<number>(hubCount).fill(0);
}

export function applyHubArrival(
  current: readonly number[],
  { activeHub, hubCount }: HubArrival,
) {
  const next = current.map(
    (value) => Math.max(0, value - 0.02),
  );

  if (activeHub >= 0 && activeHub < hubCount) {
    next[activeHub] = 1;
  }

  return next;
}

export function useHubEnergy(
  hubCount: number,
  activeHub: number,
) {
  const [energy, dispatchArrival] = useReducer(
    applyHubArrival,
    hubCount,
    createHubEnergy,
  );

  useEffect(() => {
    dispatchArrival({ activeHub, hubCount });
  }, [activeHub, hubCount]);

  return energy;
}


