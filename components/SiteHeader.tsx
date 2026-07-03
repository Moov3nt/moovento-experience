"use client";

import { useState } from "react";
import Link from "next/link";

const navigation = [
  { label: "Visione", href: "/visione" },
  { label: "Perché esistiamo", href: "/perche-esistiamo" },
  { label: "Ambiti", href: "/ambiti" },
  { label: "Contatti", href: "/#contatti" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="absolute left-0 right-0 top-0 z-50 flex items-center justify-between px-8 py-8 md:px-10">
        <Link
          href="/"
          className="relative z-50 text-xl font-semibold tracking-tight text-white"
          aria-label="Moovento Home"
          onClick={() => setMenuOpen(false)}
        >
          moovento
        </Link>

        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Navigazione principale"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[10px] uppercase tracking-[0.28em] text-neutral-400 transition-colors duration-300 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="relative z-50 text-[10px] uppercase tracking-[0.35em] text-neutral-300 transition-colors hover:text-white lg:hidden"
          aria-label={menuOpen ? "Chiudi menu" : "Apri menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? "Chiudi" : "Menu"}
        </button>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-40 flex min-h-dvh flex-col bg-[#050505] px-8 pb-10 pt-32 text-white md:px-10">
          <nav
            className="flex flex-col"
            aria-label="Navigazione mobile"
          >
            {navigation.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-white/10 py-6 text-[clamp(2rem,8vw,4.5rem)] font-light leading-[0.95] tracking-[-0.04em] transition-colors hover:text-[#A8B68A]"
              >
                <span className="mr-4 align-top text-[10px] tracking-[0.25em] text-[#A8B68A]">
                  0{index + 1}
                </span>

                {item.label}
              </Link>
            ))}
          </nav>

          <p className="mt-auto text-[10px] uppercase tracking-[0.35em] text-neutral-600">
            Making the Invisible Valuable
          </p>
        </div>
      )}
    </>
  );
}