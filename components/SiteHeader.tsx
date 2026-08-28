"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const mobileNavigationId = "mobile-navigation";
const focusClass =
  "focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-revealue-copper";

const navigation = [
  { label: "Visione", href: "/visione" },
  { label: "Perché esistiamo", href: "/perche-esistiamo" },
  { label: "Ambiti", href: "/ambiti" },
  { label: "Contatti", href: "/#contatti" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const mobileNavigationRef = useRef<HTMLDivElement>(null);
  const firstMobileLinkRef = useRef<HTMLAnchorElement>(null);
  const restoreTriggerFocus = useRef(false);

  useEffect(() => {
    const closeForNavigation = () => setMenuOpen(false);
    const desktopQuery = window.matchMedia("(min-width: 64rem)");
    const closeForDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setMenuOpen(false);
    };

    window.addEventListener("hashchange", closeForNavigation);
    window.addEventListener("popstate", closeForNavigation);
    desktopQuery.addEventListener("change", closeForDesktop);

    return () => {
      window.removeEventListener("hashchange", closeForNavigation);
      window.removeEventListener("popstate", closeForNavigation);
      desktopQuery.removeEventListener("change", closeForDesktop);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) {
      if (restoreTriggerFocus.current) {
        restoreTriggerFocus.current = false;
        triggerRef.current?.focus();
      }

      return;
    }

    const main = document.getElementById("main-content");
    const previousBodyOverflow = document.body.style.overflow;
    const mainWasInert = main?.inert ?? false;
    const focusFrame = requestAnimationFrame(() => {
      firstMobileLinkRef.current?.focus();
    });

    if (main) main.inert = true;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        restoreTriggerFocus.current = true;
        setMenuOpen(false);
        return;
      }

      if (event.key !== "Tab") return;

      const links = Array.from(
        mobileNavigationRef.current?.querySelectorAll<HTMLAnchorElement>(
          "a[href]",
        ) ?? [],
      );
      const focusableElements = [
        ...links,
        ...(triggerRef.current ? [triggerRef.current] : []),
      ];

      if (focusableElements.length === 0) return;

      const currentIndex = focusableElements.indexOf(
        document.activeElement as HTMLAnchorElement | HTMLButtonElement,
      );
      const nextIndex = event.shiftKey
        ? currentIndex <= 0
          ? focusableElements.length - 1
          : currentIndex - 1
        : currentIndex === focusableElements.length - 1
          ? 0
          : currentIndex + 1;

      event.preventDefault();
      focusableElements[nextIndex].focus();
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      cancelAnimationFrame(focusFrame);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousBodyOverflow;
      if (main) main.inert = mainWasInert;
    };
  }, [menuOpen]);

  return (
    <>
      <header className="absolute left-0 right-0 top-0 z-50 flex items-center justify-between px-8 py-8 md:px-10">
        <Link
          href="/"
          className={`relative z-50 flex min-h-11 items-center gap-3 font-sans text-revealue-ivory ${focusClass}`}
          aria-label="REVEALUE Home"
          aria-current={pathname === "/" ? "page" : undefined}
          onClick={() => setMenuOpen(false)}
        >
          <span className="text-lg font-medium tracking-[0.08em]">
            REVEALUE
          </span>
          <span className="text-[8px] font-medium tracking-[0.28em] text-revealue-mineral max-[359px]:hidden sm:text-[9px]">
            EVENT INTELLIGENCE
          </span>
        </Link>

        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Navigazione principale"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={
                item.href !== "/#contatti" && pathname === item.href
                  ? "page"
                  : undefined
              }
              className={`inline-flex min-h-11 items-center text-[10px] uppercase tracking-[0.28em] text-neutral-400 transition-colors duration-300 hover:text-white motion-reduce:transition-none ${focusClass}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          ref={triggerRef}
          type="button"
          className={`relative z-50 inline-flex min-h-11 min-w-11 items-center justify-center text-[10px] uppercase tracking-[0.35em] text-neutral-300 transition-colors hover:text-white motion-reduce:transition-none lg:hidden ${focusClass}`}
          aria-label={menuOpen ? "Chiudi menu" : "Apri menu"}
          aria-expanded={menuOpen}
          aria-controls={mobileNavigationId}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? "Chiudi" : "Menu"}
        </button>
      </header>

      {menuOpen && (
        <div
          ref={mobileNavigationRef}
          id={mobileNavigationId}
          className="fixed inset-0 z-40 flex min-h-dvh flex-col overflow-y-auto bg-[#050505] px-8 pb-10 pt-32 text-white md:px-10"
        >
          <nav
            className="flex flex-col"
            aria-label="Navigazione mobile"
          >
            {navigation.map((item, index) => (
              <Link
                ref={index === 0 ? firstMobileLinkRef : undefined}
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                aria-current={
                  item.href !== "/#contatti" && pathname === item.href
                    ? "page"
                    : undefined
                }
                className={`border-b border-white/10 py-6 text-[clamp(2rem,8vw,4.5rem)] font-light leading-[0.95] tracking-[-0.04em] transition-colors hover:text-[#A8B68A] motion-reduce:transition-none ${focusClass}`}
              >
                <span className="mr-4 align-top text-[10px] tracking-[0.25em] text-[#A8B68A]">
                  0{index + 1}
                </span>

                {item.label}
              </Link>
            ))}
          </nav>

          <p className="mt-auto text-[10px] uppercase tracking-[0.35em] text-neutral-600">
            REVEALUE · EVENT INTELLIGENCE
          </p>
        </div>
      )}
    </>
  );
}
