"use client";

import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="absolute left-0 right-0 top-0 z-20 flex items-center justify-between px-10 py-8">
      <Link
        href="/"
        className="text-xl font-semibold tracking-tight"
        aria-label="Moovento — Home"
      >
        moovento
      </Link>

      <Link
        href="/#contatti"
        className="text-xs uppercase tracking-[0.35em] text-neutral-400 transition-colors hover:text-white"
      >
        Contatti
      </Link>
    </header>
  );
}