"use client";

import { useRef } from "react";

import { useSceneObserver } from "./Scene/useSceneObserver";

export default function DecisionEngineSection() {
  const ref = useRef<HTMLElement>(null);

  useSceneObserver(ref, "decision");

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center text-white"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-24 px-8 lg:grid-cols-2 lg:px-16">

        {/* LEFT */}

        <div>

          <span className="text-[11px] uppercase tracking-[0.45em] text-[#A8B68A]">
            SUPPORTO ALLE DECISIONI
          </span>

          <h2 className="mt-8 text-[56px] font-light leading-[0.98] tracking-[-0.04em] md:text-[88px]">
            Le decisioni
            <br />
            migliori
            <br />
            nascono da una
            <br />
            comprensione
            <br />
            migliore.
          </h2>

          <p className="mt-12 max-w-xl text-xl leading-relaxed text-neutral-400">
            Moovento trasforma l'osservazione 
            continua del territorio
            in una comprensione dinamica del
            sistema, aiutando a
            valutare scenari e impatti con 
            maggiore consapevolezza.
          </p>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-neutral-500">
            Quando una relazione modifica 
            l'equilibrio del sistema,
            Moovento evidenzia le connessioni più
            rilevanti e ne rende
            comprensibili i possibili effetti.
          </p>

        </div>

        {/* RIGHT */}

        <div className="flex justify-center">

          <div className="w-full max-w-xl rounded-[36px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl">

            <div className="text-[11px] uppercase tracking-[0.35em] text-neutral-500">
              Scenario aggiornato
            </div>

            <h3 className="mt-5 text-4xl font-light">
              Mercato Settimanale
            </h3>

            <div className="mt-10 space-y-8">

              <div className="flex justify-between">
                <span className="text-neutral-400">
                  Affluenza prevista
                </span>

                <span className="font-medium text-[#C4D39A]">
                  +31%
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-neutral-400">
                  Attività coinvolte
                </span>

                <span>84</span>
              </div>

              <div className="flex justify-between">
                <span className="text-neutral-400">
                  Mobilità
                </span>

                <span>Criticità moderata</span>
              </div>

              <div className="flex justify-between">
                <span className="text-neutral-400">
                  Raccomandazione
                </span>

                <span className="text-[#C4D39A]">
                  Valutare un incremento del servizio
                </span>
              </div>

            </div>

            <div className="mt-14 border-t border-white/10 pt-10">

              <p className="leading-relaxed text-neutral-400">
                L'analisi evidenzia che un incremento
                della frequenza 
                del trasporto pubblico nelle fasce orarie di 
                maggiore affluenza
                potrebbe migliorare l'equilibrio del 
                sistema.
              </p>

            </div>

          </div>
          
        </div>
        
      </div>
    </section>
  );
}