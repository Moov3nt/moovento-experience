"use client";

import { useRef } from "react";

import { useSceneObserver } from "./Scene/useSceneObserver";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  useSceneObserver(ref, "field");

  return (
    <section
      ref={ref}
      className="relative min-h-svh overflow-hidden font-sans text-revealue-ivory"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-revealue-deep via-revealue-deep/75 to-revealue-deep/10" />

      <div className="relative z-10 mx-auto flex min-h-svh w-full max-w-[90rem] flex-col px-6 pb-14 pt-28 sm:px-10 sm:pb-16 sm:pt-32 lg:px-16 lg:pb-20 lg:pt-36">
        <div className="flex flex-1 items-center py-12 sm:py-16 lg:py-20">
          <h1 className="max-w-[12ch] text-[clamp(3.25rem,6.5vw,7rem)] font-light leading-[0.92] tracking-[-0.055em] text-balance">
            <span className="block">Comprendere l&apos;insieme.</span>
            <span className="mt-[0.32em] block">Far emergere ciò che conta.</span>
          </h1>
        </div>

        <div className="border-t border-revealue-mineral/20 pt-6 sm:pt-7">
          <a
            href="#manifesto"
            className="inline-flex min-h-11 items-center gap-4 text-[10px] font-medium uppercase tracking-[0.3em] text-revealue-mineral hover:text-revealue-ivory focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-revealue-copper sm:text-[11px]"
          >
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-revealue-copper" />
            Scopri il metodo
          </a>
        </div>
      </div>
    </section>
  );
}
