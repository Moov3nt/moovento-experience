export default function RelationsSection() {
    return (
      <section className="relative py-40 bg-transparent text-[#ECE7DF]">
        <div className="sticky top-0 flex h-screen items-center">
  
          <div className="mx-auto max-w-7xl px-8">
  
            {/* Manifesto */}
  
            <div className="max-w-2xl">
  
              <p className="mb-10 text-[11px] uppercase tracking-[0.5em] text-[#87996A]">
                Manifesto
              </p>
  
              <h2 className="text-5xl font-light leading-[1.05] md:text-6xl">
                Il valore
                <br />
                non è invisibile.
              </h2>
  
              <p className="mt-10 max-w-md text-lg leading-8 text-white/40">
                Esiste già.
                <br />
                Siamo noi a non vedere
                <br />
                le relazioni che lo generano.
              </p>
  
            </div>
  
            {/* Costellazione narrativa */}
  
            <div className="relative mt-40 h-[420px]">
  
              <div className="absolute left-[2%] top-[12%] flex items-center gap-3">
  
                <div className="h-2 w-2 rounded-full bg-[#87996A]" />
  
                <span className="text-xl text-white/40 tracking-wide">
                  Persone
                </span>
  
              </div>
  
              <div className="absolute left-1/2 top-[46%] -translate-x-1/2 flex items-center gap-3">
  
                <div className="h-2 w-2 rounded-full bg-[#87996A]" />
  
                <span className="text-xl text-white/40 tracking-wide">
                  Luoghi
                </span>
  
              </div>
  
              <div className="absolute right-[3%] top-[20%] flex items-center gap-3">
  
                <div className="h-2 w-2 rounded-full bg-[#87996A]" />
  
                <span className="text-xl text-white/40 tracking-wide">
                  Eventi
                </span>
  
              </div>
  
            </div>
  
            {/* Relazioni */}
  
            <div className="mt-8 flex flex-col items-center">
  
              <h3 className="text-5xl font-light uppercase tracking-[0.52em] text-[#87996A]">
                RELAZIONI
              </h3>
  
              <p className="mt-12 max-w-xl text-center text-lg leading-9 text-white/38">
                Quando impariamo a leggere
                le relazioni,
                il movimento acquista significato.
              </p>
  
            </div>
  
          </div>
  
        </div>
      </section>
    )
  }