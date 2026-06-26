import Constellation from "./Constellation";

export default function Manifesto() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050505] text-white">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#9DB36A]/5 blur-[180px]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col px-10 py-10">

        {/* Header */}
        <header className="flex items-center justify-between">

          <div className="text-lg font-medium tracking-wide">
            moovento
          </div>

          <button className="text-xs uppercase tracking-[0.35em] text-zinc-500 transition hover:text-white">
            Contatti
          </button>

        </header>

        {/* Content */}
        <div className="grid flex-1 items-center gap-10 lg:grid-cols-[1.05fr_.95fr]">

          {/* Left */}

          <div className="relative z-20 max-w-3xl">

            <p className="mb-12 text-[11px] uppercase tracking-[0.45em] text-[#9DB36A]">
              MAKING THE INVISIBLE VALUABLE
            </p>

            <h1 className="text-[68px] font-light leading-[0.90] tracking-[-0.05em] lg:text-[108px]">

              <span className="block">Rendere</span>

              <span className="block">visibile</span>

              <span className="block">il valore</span>

              <span className="block">invisibile.</span>

            </h1>

            <p className="mt-14 max-w-md text-lg leading-8 text-zinc-400">

              Osserviamo le relazioni che rendono
              possibile il movimento.

            </p>

            <button className="group mt-16 flex items-center gap-3 text-lg font-light">

              <span>Inizia il percorso</span>

              <span className="transition duration-300 group-hover:translate-x-2">

                →

              </span>

            </button>

          </div>

          {/* Right */}

          <div className="relative flex h-[700px] items-center justify-center">

            <Constellation />

          </div>

        </div>

        {/* Footer */}

        <footer className="flex justify-between pb-2 text-[10px] uppercase tracking-[0.45em] text-zinc-600">

          <span>Scroll</span>

          <span>v0.2</span>

        </footer>

      </div>
    </section>
  );
}