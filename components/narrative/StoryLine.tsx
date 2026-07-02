"use client";

import Reveal from "@/components/Reveal";
import { ReactNode } from "react";

type StoryLineProps = {
  children: ReactNode;
  delay?: number;
};

export default function StoryLine({
  children,
  delay = 0,
}: StoryLineProps) {
  return (
    <Reveal delay={delay}>
      <p className="text-3xl leading-relaxed text-neutral-500">
        {children}
      </p>
    </Reveal>
  );
}