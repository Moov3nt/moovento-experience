export default function PostActionSequence() {
  return (
    <div className="font-sans text-revealue-ivory">
      <section
        aria-labelledby="post-action-effect-title"
        className="relative flex min-h-[92svh] items-end overflow-hidden"
      >
        <div className="mx-auto grid w-full max-w-[90rem] grid-cols-1 px-6 pb-[14svh] pt-28 sm:px-10 sm:pb-[16svh] sm:pt-32 lg:grid-cols-12 lg:px-16 lg:pb-[18svh] lg:pt-36">
          <div className="max-w-4xl lg:col-span-7 lg:col-start-2">
            <p className="text-[10px] font-medium uppercase tracking-[0.34em] text-revealue-mineral sm:text-[11px]">
              EFFETTO
            </p>

            <h2
              id="post-action-effect-title"
              className="mt-9 max-w-[15ch] text-[clamp(2.75rem,5.4vw,5.4rem)] font-light leading-[0.96] tracking-[-0.05em] text-balance"
            >
              <span className="block">Ogni azione produce </span>
              <span className="block">effetti.</span>
            </h2>

            <p className="mt-12 max-w-[28rem] text-[clamp(1.125rem,2vw,1.5rem)] font-light leading-relaxed text-revealue-mineral sm:mt-14">
              Misurarli rende visibile il valore.
            </p>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="post-action-experience-title"
        className="relative flex min-h-[88svh] items-center overflow-hidden"
      >
        <div className="mx-auto grid w-full max-w-[90rem] grid-cols-1 px-6 py-[18svh] sm:px-10 sm:py-[20svh] lg:grid-cols-12 lg:px-16">
          <div className="max-w-3xl lg:col-span-6 lg:col-start-3">
            <p className="text-[10px] font-medium uppercase tracking-[0.34em] text-revealue-mineral sm:text-[11px]">
              ESPERIENZA
            </p>

            <h2
              id="post-action-experience-title"
              className="mt-10 max-w-[17ch] text-[clamp(2.5rem,4.6vw,4.75rem)] font-light leading-[1.02] tracking-[-0.045em]"
            >
              <span className="block">L’evento finisce. </span>
              <span className="block">Ciò che abbiamo imparato resta.</span>
            </h2>

            <p className="mt-16 max-w-md text-[clamp(1.0625rem,1.7vw,1.375rem)] font-light leading-relaxed text-revealue-mineral sm:mt-20">
              Il prossimo parte da qui.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
