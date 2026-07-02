"use client";

type Props = {
  center: string;
  top: string;
  left: string;
  right: string;
  bottom: string;
};

export default function RelationGraph({
  center,
  top,
  left,
  right,
  bottom,
}: Props) {
  return (
    <div className="flex justify-center my-10">

      <div className="relative h-64 w-64">

        {/* Connessioni */}

        <div className="absolute left-1/2 top-12 h-12 w-px -translate-x-1/2 bg-[#A8B68A]/20" />

        <div className="absolute left-12 top-1/2 h-px w-12 -translate-y-1/2 bg-[#A8B68A]/20" />

        <div className="absolute right-12 top-1/2 h-px w-12 -translate-y-1/2 bg-[#A8B68A]/20" />

        <div className="absolute bottom-12 left-1/2 h-12 w-px -translate-x-1/2 bg-[#A8B68A]/20" />

        {/* Nodo superiore */}

        <div className="absolute left-1/2 top-0 -translate-x-1/2 flex flex-col items-center">

          <div className="h-2.5 w-2.5 rounded-full bg-[#C4D39A] shadow-[0_0_14px_rgba(196,211,154,0.35)]" />

          <span className="mt-3 text-xs text-neutral-300">
            {top}
          </span>

        </div>

        {/* Nodo sinistro */}

        <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col items-center">

          <div className="h-2.5 w-2.5 rounded-full bg-[#C4D39A] shadow-[0_0_14px_rgba(196,211,154,0.35)]" />

          <span className="mt-3 text-xs text-neutral-300">
            {left}
          </span>

        </div>

        {/* Nodo destro */}

        <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col items-center">

          <div className="h-2.5 w-2.5 rounded-full bg-[#C4D39A] shadow-[0_0_14px_rgba(196,211,154,0.35)]" />

          <span className="mt-3 text-xs text-neutral-300">
            {right}
          </span>

        </div>

        {/* Nodo inferiore */}

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center">

          <div className="h-2.5 w-2.5 rounded-full bg-[#C4D39A] shadow-[0_0_14px_rgba(196,211,154,0.35)]" />

          <span className="mt-3 text-xs text-neutral-300">
            {bottom}
          </span>

        </div>

        {/* Alone centrale */}

        <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#A8B68A]/10 blur-2xl" />

        {/* Hub centrale */}

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">

          <div
            className="
              group
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-full
              border-2
              border-[#A8B68A]/50
              bg-[#A8B68A]/15
              backdrop-blur-md
              shadow-[0_0_35px_rgba(196,211,154,0.25)]
              transition-all
              duration-500
              hover:scale-105
            "
          >

            <span
              className="
                px-1
                text-center
                text-[10px]
                font-medium
                uppercase
                tracking-[0.12em]
                text-[#C4D39A]
              "
            >
              {center}
            </span>

          </div>

        </div>

      </div>

    </div>
  );
}