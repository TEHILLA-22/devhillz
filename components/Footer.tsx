import { categories } from "@/lib/catalog";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-void-950">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-spectrum-violet font-heading text-xs font-bold text-void-950">
                D
              </span>
              <span className="font-mono text-sm font-bold tracking-[0.22em] text-paper">
                DEVHILLZ
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              The stage where the next era of digital products performs. Engineering, design,
              words, film, automation, growth — one catalogue.
            </p>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
              Departments
            </p>
            <ul className="mt-4 space-y-2">
              {categories.map((category) => (
                <li key={category.slug}>
                  <a
                    href="#catalog"
                    className="text-sm text-paper/70 transition-colors hover:text-paper"
                  >
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">Connect</p>
            <ul className="mt-4 space-y-2 text-sm text-paper/70">
              <li>
                <a
                  href="mailto:support@devhillz.store"
                  className="transition-colors hover:text-paper"
                >
                  support@devhillz.store
                </a>
              </li>
              <li>
                <a href="#contact" className="transition-colors hover:text-paper">
                  Get the spotlight
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-white/5 pt-6 font-mono text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Devhillz</p>
          <p>Hydrated by creators · built for the stage</p>
        </div>
      </div>
    </footer>
  );
}