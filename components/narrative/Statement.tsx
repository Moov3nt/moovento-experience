"use client";

import { ReactNode } from "react";
import Reveal from "@/components/Reveal";

type StatementProps = {
  children: ReactNode;
  delay?: number;
  emphasis?: boolean;
};

export default function Statement({
  children,
  delay = 0,
  emphasis = false,
}: StatementProps) {
  return (
    <Reveal delay={delay}>
      <h2
        className={
          emphasis
            ? "text-[72px] md:text-[140px] font-light leading-[0.95] tracking-[-0.055em] text-white"
            : "text-[58px] md:text-[96px] font-light leading-[0.98] tracking-[-0.055em] text-white"
        }
      >
        {children}
      </h2>
    </Reveal>
  );
}