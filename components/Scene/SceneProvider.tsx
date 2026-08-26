"use client";

import { useMemo, useState } from "react";

import {
  SceneContext,
  VisualState,
} from "./SceneContext";

type Props = {
  children: React.ReactNode;
};

export default function SceneProvider({
  children,
}: Props) {
  const [visualState, setVisualState] =
    useState<VisualState>("field");

  const value = useMemo(
    () => ({
      visualState,
      setVisualState,
    }),
    [visualState]
  );

  return (
    <SceneContext.Provider value={value}>
      {children}
    </SceneContext.Provider>
  );
}
