"use client";

import { useRef } from "react";

import { useSceneObserver } from "./Scene/useSceneObserver";

export default function Manifesto() {
  const ref = useRef<HTMLElement>(null);

  useSceneObserver(ref, "manifesto");

  return (
    <section
      id="manifesto"
      ref={ref}
      className="relative min-h-screen flex items-center text-white"
    >
      <div className="mx-auto w-full max-w-6xl px-8 lg:px-16">
        <span className="text-[11px] uppercase tracking-[0.45em] text-[#A8B68A]">
          IL PROBLEMA
        </span>

        <h2 className="mt-8 max-w-5xl text-[54px] font-light leading-[1.02] tracking-[-0.04em] md:text-[88px]">
          Ogni evento genera decisioni ed effetti.
          <br />
          Troppo spesso non diventano{" "}
          <span className="text-[#A8B68A]">
            esperienza.
          </span>
        </h2>

        <p className="mt-12 max-w-2xl text-xl leading-relaxed text-neutral-400">
          Segnali, scelte, azioni ed esiti vengono spesso osservati
          separatamente. Quando l&apos;evento termina, una parte importante
          di ciò che è accaduto si disperde.
          <br />
          <br />
          <strong className="font-medium text-white">
            Moovento nasce per trasformare questa esperienza in conoscenza
            utilizzabile.
          </strong>
        </p>
      </div>
    </section>
  );
}
