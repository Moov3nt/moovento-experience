"use client";

import { useEffect, useState } from "react";

export function useNetworkBreath() {
  const [breath, setBreath] =
    useState(0);

  useEffect(() => {
    let frame: number;

    const start =
      performance.now();

    const animate = (
      now: number,
    ) => {
      const t =
        (now - start) * 0.00045;

      const value =
        (Math.sin(t) + 1) / 2;

      setBreath(value);

      frame =
        requestAnimationFrame(
          animate,
        );
    };

    frame =
      requestAnimationFrame(
        animate,
      );

    return () =>
      cancelAnimationFrame(frame);
  }, []);

  return breath;
}