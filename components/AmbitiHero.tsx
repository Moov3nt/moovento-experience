"use client";

export default function AmbitiHero() {
  return (
    <section className="relative flex min-h-screen items-center text-white">
      <div className="mx-auto w-full max-w-6xl px-8 lg:px-16">

        <span className="text-[11px] uppercase tracking-[0.45em] text-[#A8B68A]">
          AMBITI
        </span>

        <h1 className="mt-8 max-w-5xl text-[56px] font-light leading-[1.02] tracking-[-0.04em] md:text-[88px]">
          Ogni sistema
          <br />
          complesso può
          <br />
          essere compreso.
        </h1>

        <p className="mt-14 max-w-3xl text-xl leading-relaxed text-neutral-400">
          Cambiano i contesti, le scale e le domande.
          <br />
          Resta la necessità di comprendere come le parti
          <br />
          di un sistema si influenzano tra loro.
        </p>

      </div>
    </section>
  );
}