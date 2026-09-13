"use client";

import { useEffect, useState } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-5xl px-4 pt-4 sm:px-6">
        <div
          className="liquid-pill flex items-center justify-between gap-4 px-5 py-2.5 sm:px-6"
          data-scrolled={scrolled}
        >
          <a href="#top" className="flex items-center gap-2.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-spectrum-violet font-heading text-xs font-bold text-void-950">
              D
            </span>
            <span className="font-mono text-sm font-bold tracking-[0.22em] text-paper">
              DEVHILLZ
            </span>
          </a>
          <nav className="hidden items-center gap-7 font-mono text-[13px] text-muted md:flex">
            <a href="#catalog" className="transition-colors hover:text-paper">
              Catalog
            </a>
            <a href="#stage" className="transition-colors hover:text-paper">
              The Stage
            </a>
            <a href="#contact" className="transition-colors hover:text-paper">
              Contact
            </a>
          </nav>
          <a
            href="#catalog"
            className="rounded-full bg-spectrum-violet px-4 py-1.5 font-mono text-xs font-bold text-white transition-colors hover:bg-spectrum-violet/85 sm:px-5"
          >
            Enter the stage
          </a>
        </div>
      </div>
    </header>
  );
}