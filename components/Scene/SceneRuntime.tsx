"use client";

import { usePathname } from "next/navigation";

import SceneProvider from "./SceneProvider";

type Props = {
  children: React.ReactNode;
};

export default function SceneRuntime({ children }: Props) {
  const pathname = usePathname();

  return <SceneProvider key={pathname}>{children}</SceneProvider>;
}
