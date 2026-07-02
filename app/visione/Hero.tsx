"use client";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center text-white">

      <div className="mx-auto w-full max-w-7xl px-8 lg:px-16">

        <span className="text-[11px] uppercase tracking-[0.45em] text-[#A8B68A]">
          VISIONE
        </span>

        <h1 className="mt-8 text-[58px] font-light leading-[1.02] tracking-[-0.04em] md:text-[96px]">
          La complessità dei sistemi è cambiata.
          <br />
          Anche il modo di comprenderli
          <br />
          deve cambiare.
        </h1>

        <p className="mt-12 max-w-3xl text-2xl leading-relaxed text-neutral-300">
          Continuare ad osservarli come elementi isolati
          non è più sufficiente.
        </p>

        <p className="mt-16 max-w-2xl text-xl leading-relaxed text-neutral-500">
          Ogni giorno aumentano dati, servizi,
          infrastrutture, eventi, mobilità,
          persone e connessioni.
          <br /><br />
          Ogni nuovo servizio, infrastruttura, evento o
          flusso genera nuove relazioni.
          <br />
          Comprenderle è ciò che distingue una
          gestione operativa da una visione strategica
          del sistema.
        </p>

      </div>

    </section>
  );
}