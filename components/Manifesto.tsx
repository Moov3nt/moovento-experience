"use client";

import { useRef } from "react";

import { useSceneObserver } from "./Scene/useSceneObserver";

export default function Manifesto() {
  const ref = useRef<HTMLElement>(null);

  useSceneObserver(ref, "manifesto");

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center text-white"
    >
      <div className="mx-auto w-full max-w-6xl px-8 lg:px-16">

      <span className="text-[11px] uppercase tracking-[0.45em] text-[#A8B68A]">
  MANIFESTO
</span>

<h2 className="mt-8 max-w-5xl text-[54px] leading-[1.02] tracking-[-0.04em] font-light md:text-[88px]">
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
  Ogni giorno persone, servizi, infrastrutture e territori
  generano milioni di connessioni. Queste relazioni raccontano
  come una città vive, si muove e cambia.
  <br />
  <br />
  <strong className="text-white font-medium">
    Moovento nasce per renderle leggibili.
  </strong>
  <br />
  Trasformiamo la complessità in una visione capace di
  supportare decisioni migliori.
</p>

      </div>
    </section>
  );
}