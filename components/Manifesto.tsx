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
          MANIFESTO
        </span>

        <h2 className="mt-8 max-w-5xl text-[54px] font-light leading-[1.02] tracking-[-0.04em] md:text-[88px]">
          I sistemi complessi non
          <br />
          hanno bisogno di più dati.
          <br />
          Hanno bisogno di{" "}
          <span className="text-[#A8B68A]">
            comprenderli.
          </span>
        </h2>

        <p className="mt-12 max-w-2xl text-xl leading-relaxed text-neutral-400">
          Ogni giorno persone, servizi, infrastrutture, eventi e mobilità
          generano milioni di connessioni. Queste relazioni raccontano
          come un sistema evolve e dove un cambiamento richiede attenzione.
          <br />
          <br />
          <strong className="font-medium text-white">
            Moovento nasce per renderle comprensibili.
          </strong>
          <br />
          Per trasformare ciò che accade in evidenze condivise,
          capaci di guidare decisioni responsabili e azioni coordinate.
        </p>
      </div>
    </section>
  );
}
