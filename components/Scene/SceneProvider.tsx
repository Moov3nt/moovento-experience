"use client";

import { useMemo, useState } from "react";

import {
  Scene,
  SceneContext,
} from "./SceneContext";

type Props = {
  children: React.ReactNode;
};

export default function SceneProvider({
  children,
}: Props) {
  const [scene, setScene] =
    useState<Scene>("hero");

  const value = useMemo(
    () => ({
      scene,
      setScene,
    }),
    [scene]
  );

  return (
    <SceneContext.Provider value={value}>
      {children}
    </SceneContext.Provider>
  );
}