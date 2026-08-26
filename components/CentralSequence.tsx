"use client";

import { useRef } from "react";

import { useSceneObserver } from "./Scene/useSceneObserver";

export default function CentralSequence() {
  const systemRef = useRef<HTMLElement>(null);
  const relevanceRef = useRef<HTMLElement>(null);
  const actionRef = useRef<HTMLElement>(null);

  useSceneObserver(systemRef, "system");
  useSceneObserver(relevanceRef, "relevance");
  useSceneObserver(actionRef, "action");

  return (
    <>
      <section
        ref={systemRef}
        aria-labelledby="central-sequence-system-title"
        className="relative flex min-h-svh items-center overflow-hidden font-sans text-revealue-ivory"
      >
        <div className="mx-auto grid w-full max-w-[90rem] grid-cols-1 px-6 py-24 sm:px-10 sm:py-28 lg:grid-cols-12 lg:px-16 lg:py-32">
          <div className="max-w-3xl lg:col-span-7 lg:col-start-2">
            <p className="text-[10px] font-medium uppercase tracking-[0.34em] text-revealue-mineral sm:text-[11px]">
              IL SISTEMA
            </p>

            <h2
              id="central-sequence-system-title"
              className="mt-9 max-w-[14ch] text-[clamp(2.75rem,5vw,5rem)] font-light leading-[0.98] tracking-[-0.045em] text-balance"
            >
              Ogni evento è un sistema di relazioni.
            </h2>

            <p className="mt-12 max-w-xl text-[clamp(1.125rem,2vw,1.5rem)] font-light leading-relaxed text-revealue-mineral sm:mt-14">
              Comprenderle cambia ciò che possiamo vedere.
            </p>
          </div>
        </div>
      </section>

      <section
        ref={relevanceRef}
        aria-labelledby="central-sequence-relevance-title"
        className="relative flex min-h-svh items-center overflow-hidden font-sans text-revealue-ivory"
      >
        <div className="mx-auto grid w-full max-w-[90rem] grid-cols-1 px-6 py-24 sm:px-10 sm:py-28 lg:grid-cols-12 lg:px-16 lg:py-32">
          <div className="max-w-3xl lg:col-span-7 lg:col-start-2">
            <p className="text-[10px] font-medium uppercase tracking-[0.34em] text-revealue-mineral sm:text-[11px]">
              RILEVANZA
            </p>

            <h2
              id="central-sequence-relevance-title"
              className="mt-9 max-w-[14ch] text-[clamp(2.75rem,5vw,5rem)] font-light leading-[0.98] tracking-[-0.045em] text-balance"
            >
              Non tutto ciò che cambia conta.
            </h2>

            <p className="mt-12 max-w-xl text-[clamp(1.125rem,2vw,1.5rem)] font-light leading-relaxed text-revealue-mineral sm:mt-14">
              La rilevanza emerge dalle relazioni.
            </p>
          </div>
        </div>
      </section>

      <section
        ref={actionRef}
        aria-labelledby="central-sequence-action-title"
        className="relative flex min-h-svh items-center overflow-hidden font-sans text-revealue-ivory"
      >
        <div className="mx-auto grid w-full max-w-[90rem] grid-cols-1 px-6 py-24 sm:px-10 sm:py-28 lg:grid-cols-12 lg:px-16 lg:py-32">
          <div className="max-w-3xl lg:col-span-7 lg:col-start-2">
            <p className="text-[10px] font-medium uppercase tracking-[0.34em] text-revealue-mineral sm:text-[11px]">
              AZIONE
            </p>

            <h2
              id="central-sequence-action-title"
              className="mt-9 max-w-[14ch] text-[clamp(2.75rem,5vw,5rem)] font-light leading-[0.98] tracking-[-0.045em] text-balance"
            >
              Capire dove agire.
            </h2>

            <p className="mt-12 max-w-xl text-[clamp(1.125rem,2vw,1.5rem)] font-light leading-relaxed text-revealue-mineral sm:mt-14">
              La rilevanza diventa possibilità d&apos;intervento.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
