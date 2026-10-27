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
          <div>
            <h1 className="max-w-[12ch] text-[clamp(3.25rem,6.5vw,7rem)] font-light leading-[0.92] tracking-[-0.055em] text-balance">
              <span className="block">Comprendere l&apos;insieme.</span>
              <span className="mt-[0.32em] block">Far emergere ciò che conta.</span>
            </h1>
            <p className="mt-10 max-w-[42rem] text-[clamp(1.125rem,1.8vw,1.45rem)] font-light leading-relaxed text-revealue-ivory/80 sm:mt-12">
              Nella mobilità dei grandi eventi, REVEALUE collega evidenze,
              interpretazione, decisioni governate, interventi ed effetti
              osservati per migliorare le decisioni e valutare il valore
              generato.
            </p>
            <p className="mt-5 max-w-[42rem] text-base leading-relaxed text-revealue-ivory/70 sm:text-lg">
              Arrivi, parcheggi, traffico, accessibilità, accessi alla venue ed
              esperienza degli spettatori sono il primo contesto concreto. Il
              metodo resta estensibile ad altri sistemi complessi.
            </p>
          </div>
        </div>

        <div className="border-t border-revealue-mineral/20 pt-6 sm:pt-7">
          <a
            href="#metodo"
            className="inline-flex min-h-11 items-center gap-4 text-xs font-medium uppercase tracking-[0.24em] text-revealue-mineral hover:text-revealue-ivory focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-revealue-copper"
          >
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-revealue-copper" />
            Scopri il metodo
          </a>
        </div>
      </div>
    </section>
  );
}
