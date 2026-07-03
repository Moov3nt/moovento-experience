"use client";

import { useEffect, useRef, useState } from "react";

export function useEventEngine(
  activeHub: number,
) {
  const previous =
    useRef(activeHub);

  const [flashHub, setFlashHub] =
    useState(-1);

  useEffect(() => {
    if (
      activeHub !== previous.current
    ) {
      previous.current =
        activeHub;

      setFlashHub(activeHub);

      const timer =
        setTimeout(() => {
          setFlashHub(-1);
        }, 220);

      return () =>
        clearTimeout(timer);
    }
  }, [activeHub]);

  return {
    flashHub,
  };
}


