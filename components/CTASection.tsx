"use client";

import { useRef } from "react";

import { useSceneObserver } from "./Scene/useSceneObserver";

export default function CTASection() {
  const ref = useRef<HTMLElement>(null);

  useSceneObserver(ref, "cta");

  return (
    <section
      id="contatti"
      ref={ref}
      className="relative min-h-screen flex items-center text-white"
    >
      <div className="mx-auto w-full max-w-7xl px-8 lg:px-16">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">

          <span className="text-[11px] uppercase tracking-[0.45em] text-[#A8B68A]">
            UN PRIMO CONFRONTO
          </span>

          <h2 className="mt-8 text-[56px] font-light leading-[0.98] tracking-[-0.04em] md:text-[88px]">
            Ogni evento può lasciare
            <br />
            più valore del precedente.
          </h2>

          <div className="mt-14 text-center text-xl leading-relaxed text-neutral-400">
            <p>
              Partiamo da un evento reale, dalle decisioni che richiede e
              dalla conoscenza che oggi rischia di andare perduta.
            </p>

            <p className="mt-8">
              Un primo confronto può aiutarci a capire se il metodo Moovento
              è applicabile al tuo contesto.
            </p>
          </div>

          <a
            href="mailto:giacinto@moovento.it"
            className="mt-20 inline-block max-w-full rounded-full border border-[#A8B68A]/60 px-5 py-5 text-center text-[10px] uppercase leading-snug tracking-[0.22em] text-white transition-all hover:border-[#A8B68A] hover:bg-[#A8B68A]/10 md:inline-flex md:px-10 md:text-[11px] md:tracking-[0.35em] md:leading-normal"
          >
            Parliamo del tuo prossimo evento
          </a>

        </div>
      </div>
    </section>
  );
}
