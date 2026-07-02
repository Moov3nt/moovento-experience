"use client";

export default function Paradigm() {
  return (
    <section className="relative py-40 text-white">

      <div className="mx-auto max-w-7xl px-8 lg:px-16">

        <span className="text-[11px] uppercase tracking-[0.45em] text-[#A8B68A]">
          UN NUOVO PARADIGMA
        </span>

        <h2 className="mt-8 text-[56px] font-light leading-[1.02] tracking-[-0.04em] md:text-[88px]">
          Da tema operativo
          <br />
          ad asset strategico.
        </h2>

        <p className="mt-12 max-w-3xl text-xl leading-relaxed text-neutral-400">
          Quando un sistema viene compreso,
          smette di essere soltanto un tema operativo
          e diventa un asset strategico.
        </p>

        <p className="mt-8 max-w-3xl text-xl leading-relaxed text-neutral-500">
          Comprenderne le relazioni significa prendere
          decisioni migliori, generare valore economico,
          rafforzare la reputazione e costruire
          un vantaggio competitivo duraturo.
        </p>

        <div className="mt-24 grid gap-16 lg:grid-cols-3">

          <div>

            <div className="text-[11px] uppercase tracking-[0.35em] text-[#A8B68A]">
              VALORE
            </div>

            <p className="mt-6 text-2xl font-light leading-relaxed">
              Efficienza.
              <br />
              Profitto.
              <br />
              Opportunità.
            </p>

          </div>

          <div>

            <div className="text-[11px] uppercase tracking-[0.35em] text-[#A8B68A]">
              REPUTAZIONE
            </div>

            <p className="mt-6 text-2xl font-light leading-relaxed">
              Esperienze.
              <br />
              Fiducia.
              <br />
              Attrattività.
            </p>

          </div>

          <div>

            <div className="text-[11px] uppercase tracking-[0.35em] text-[#A8B68A]">
              VANTAGGIO
            </div>

            <p className="mt-6 text-2xl font-light leading-relaxed">
              Decisioni.
              <br />
              Resilienza.
              <br />
              Competitività.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}