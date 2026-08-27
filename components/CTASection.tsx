"use client";

import { useRef } from "react";

import { useSceneObserver } from "./Scene/useSceneObserver";
import type { VisualRequest } from "./Scene/SceneContext";

const headingId = "final-event-invitation-title";
const closingFieldRequest = {
  visualState: "field",
  transitionIntent: "closing",
} as const satisfies VisualRequest;

export default function CTASection() {
  const closingBoundaryRef = useRef<HTMLHeadingElement>(null);

  useSceneObserver(closingBoundaryRef, closingFieldRequest);

  return (
    <section
      id="contatti"
      aria-labelledby={headingId}
      className="relative flex min-h-screen items-center overflow-hidden font-sans text-revealue-ivory"
    >
      <div className="mx-auto grid w-full max-w-[90rem] grid-cols-1 gap-14 px-6 py-32 sm:px-10 sm:py-40 lg:grid-cols-12 lg:gap-8 lg:px-16 lg:py-48">
        <div className="lg:col-span-2 lg:col-start-2">
          <p className="text-[10px] font-medium uppercase tracking-[0.34em] text-revealue-mineral sm:text-[11px]">
            UN EVENTO REALE
          </p>
          <div
            aria-hidden="true"
            className="mt-8 h-px w-14 bg-revealue-copper/60"
          />
        </div>

        <div className="lg:col-span-7 lg:col-start-5">
          <h2
            id={headingId}
            ref={closingBoundaryRef}
            className="max-w-[13ch] text-[clamp(3rem,6vw,6.25rem)] font-light leading-[0.94] tracking-[-0.055em] text-balance"
          >
            Ora possiamo osservare il tuo.
          </h2>

          <p className="mt-12 max-w-[32rem] text-[clamp(1.0625rem,1.45vw,1.25rem)] font-light leading-relaxed text-revealue-mineral sm:mt-14">
            Partiamo da un evento reale. Da ciò che accade, dalle decisioni
            possibili e dagli effetti che possono generare.
          </p>

          <a
            href="mailto:giacinto@revealue.it"
            className="mt-16 inline-flex min-h-11 max-w-full items-center gap-5 border-b border-revealue-mineral/50 py-3 text-[10px] font-medium uppercase leading-snug tracking-[0.24em] text-revealue-ivory transition-colors duration-300 hover:border-revealue-copper hover:text-revealue-ivory focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-revealue-copper motion-reduce:transition-none sm:mt-20 sm:text-[11px] sm:tracking-[0.3em]"
          >
            Parliamo del tuo prossimo evento
            <span
              aria-hidden="true"
              className="h-px w-10 shrink-0 bg-revealue-copper"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
