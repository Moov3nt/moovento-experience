"use client";

export default function VisionCTA() {
  return (
    <section className="relative py-48 text-white">

      <div className="mx-auto max-w-5xl px-8 text-center">

        <span className="text-[11px] uppercase tracking-[0.45em] text-[#A8B68A]">
          IL PROSSIMO PASSO
        </span>

        <h2 className="mt-10 text-5xl font-light leading-[1.02] tracking-[-0.04em] md:text-7xl">

          Ogni sistema
          <br />
          racconta una storia.
          <br />
          Iniziamo
          <br />
          a comprenderla.

        </h2>

        <p className="mx-auto mt-12 max-w-2xl text-xl leading-relaxed text-neutral-400">

          Ogni organizzazione affronta sfide diverse.
          <br />
          Ogni sistema custodisce opportunità differenti.
          <br />
          Il primo passo è imparare a leggerne le relazioni.

        </p>

        <button
          className="
            mt-20
            rounded-full
            border
            border-[#A8B68A]
            px-10
            py-5
            text-sm
            uppercase
            tracking-[0.35em]
            transition-all
            duration-500
            hover:bg-[#A8B68A]
            hover:text-black
          "
        >
          Inizia una conversazione
        </button>

      </div>

    </section>
  );
}