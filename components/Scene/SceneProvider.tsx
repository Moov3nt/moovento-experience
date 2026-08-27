"use client";

import { useCallback, useMemo, useState } from "react";

import {
  SceneContext,
  type VisualRequest,
} from "./SceneContext";

type Props = {
  children: React.ReactNode;
};

export default function SceneProvider({
  children,
}: Props) {
  const [visualRequest, setVisualRequest] =
    useState<VisualRequest>({
      visualState: "field",
      transitionIntent: "default",
    });

  const requestVisualState = useCallback((request: VisualRequest) => {
    setVisualRequest((current) =>
      current.visualState === request.visualState &&
      current.transitionIntent === request.transitionIntent
        ? current
        : request,
    );
  }, []);

  const value = useMemo(
    () => ({
      visualRequest,
      requestVisualState,
    }),
    [requestVisualState, visualRequest]
  );

  return (
    <SceneContext.Provider value={value}>
      {children}
    </SceneContext.Provider>
  );
}
