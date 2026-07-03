"use client";

import { useEffect, useState } from "react";

export function useHubEnergy(
  hubCount: number,
  activeHub: number,
) {
  const [energy, setEnergy] =
    useState<number[]>(
      () =>
        Array(hubCount).fill(0),
    );

  useEffect(() => {
    setEnergy((current) => {
      const next = current.map(
        (value) =>
          Math.max(0, value - 0.02),
      );

      if (
        activeHub >= 0 &&
        activeHub < hubCount
      ) {
        next[activeHub] = 1;
      }

      return next;
    });
  }, [activeHub, hubCount]);

  return energy;
}


