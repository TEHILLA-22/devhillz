import { Marquee } from "@/components/Marquee";
import { Scene } from "@/components/Scene";
import { CategoryCard } from "@/components/CategoryCard";
import { SpotlightForm } from "@/components/SpotlightForm";
import { categories, totalTitles } from "@/lib/catalog";

export default function HomePage() {
  return (
    <main className="bg-void-950 text-paper">
      {/* Scene 1 — The marquee */}
      <Scene id="top" sweep="curtainRight" className="overflow-clip">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="grid-lines absolute inset-0" />
          <div
            className="orb -left-32 top-24 h-96 w-96 opacity-[0.13]"
            style={{ background: "#8B5CF6" }}
          />
          <div
            className="orb -right-32 top-1/3 h-80 w-80 opacity-[0.11]"
            style={{ background: "#22D3EE" }}
          />
          <div
            className="beam left-1/2 top-0 h-[70vh] w-[160vw] -translate-x-1/2"
            style={{
              clipPath: "polygon(38% 0, 62% 0, 90% 100%, 10% 100%)",
              background:
                "conic-gradient(from 200deg at 50% 0%, transparent 40%, rgba(139,92,246,0.14), rgba(34,211,238,0.1), transparent 96%)",
            }}
          />
          <div className="shard left-[8%] top-[20%] h-20 w-14 rotate-12" />
          <div className="shard right-[10%] top-[32%] h-24 w-16 -rotate-6" />
        </div>

        <div className="scene-body relative mx-auto flex min-h-[88svh] max-w-5xl flex-col items-center justify-center gap-8 px-6 pb-24 pt-36 text-center">
          <span className="liquid-pill px-5 py-2 font-mono text-[11px] uppercase tracking-[0.28em] text-paper/80">
            Devhillz · The stage for digital creators
          </span>
          <h1 className="font-display text-[2.6rem] uppercase leading-[0.95] tracking-tight text-paper sm:text-6xl md:text-7xl lg:text-[6.5rem]">
            The home of world-leading digital catalogues.
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-paper/70 sm:text-lg">
            Devhillz is where the people building the internet&apos;s next era step up to
            perform. Every digital craft — engineering, design, words, film, automation,
            growth — gathered under one roof, catalogued, and given a floor to shine on.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#catalog"
              className="rounded-full bg-spectrum-violet px-7 py-3.5 font-mono text-sm font-bold text-white transition-colors hover:bg-spectrum-violet/85"
            >
              Explore the catalog
            </a>
            <a
              href="#stage"
              className="glass-card rounded-full px-7 py-3.5 font-mono text-sm text-paper/85 transition-colors hover:border-white/25 hover:text-paper"
            >
              Meet the stage
            </a>
          </div>
        </div>

        <Marquee />
      </Scene>

      {/* Scene 2 — The catalog */}
      <Scene
        id="catalog"
        sweep="curtainLeft"
        className="overflow-clip border-y border-white/5 bg-void-900/60"
      >
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div
            className="orb -left-40 bottom-0 h-96 w-96 opacity-10"
            style={{ background: "#F472B6" }}
          />
          <div
            className="orb -right-40 top-10 h-80 w-80 opacity-[0.07]"
            style={{ background: "#8B5CF6" }}
          />
        </div>

        <div className="scene-body relative mx-auto max-w-6xl px-6 py-28 sm:py-32">
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-spectrum-cyan">
              The catalog
            </p>
            <h2 className="mt-4 font-display text-4xl uppercase leading-[0.95] text-paper sm:text-5xl md:text-6xl">
              Every department, tuned for the stage.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-paper/65">
              Each one is a world of its own — curated by the Devhillz editors, stocked with
              titles that ship in minutes and stay yours forever.
            </p>
          </div>
          <div className="no-scrollbar -mx-6 mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 sm:mx-0 sm:grid sm:snap-none sm:grid-cols-2 sm:overflow-visible sm:pb-0 sm:px-0 lg:grid-cols-3">
            {categories.map((category) => (
              <CategoryCard key={category.slug} category={category} />
            ))}
          </div>
          <p className="mt-10 font-mono text-xs uppercase tracking-[0.25em] text-muted">
            {categories.length} departments · {totalTitles()} titles live · fresh entries
            every week
          </p>
        </div>
      </Scene>

      {/* Scene 3 — The stage */}
      <Scene id="stage" sweep="curtainUp" className="overflow-clip">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div
            className="beam left-1/2 top-0 h-[65vh] w-[150vw] -translate-x-1/2"
            style={{
              clipPath: "polygon(44% 0, 56% 0, 82% 100%, 18% 100%)",
              background:
                "conic-gradient(from 180deg at 50% 0%, transparent 55%, rgba(139,92,246,0.12), rgba(34,211,238,0.08), transparent 94%)",
            }}
          />
          <div
            className="orb left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 opacity-[0.09]"
            style={{ background: "#8B5CF6" }}
          />
        </div>

        <div className="scene-body relative mx-auto max-w-5xl px-6 py-28 text-center sm:py-36">
          <span className="liquid-pill px-5 py-2 font-mono text-[11px] uppercase tracking-[0.28em] text-paper/80">
            The stage
          </span>
          <h2 className="mt-8 font-display text-6xl uppercase leading-[0.9] tracking-tight sm:text-8xl">
            Devhillz
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-paper/70 sm:text-lg">
            A stage every performer can trust. No gatekeepers, no rent, no arbitrary limits —
            just lights, a floor, and the audience you&apos;re building.
          </p>
          <div className="no-scrollbar -mx-6 mt-16 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 text-left sm:mx-0 sm:grid sm:snap-none sm:grid-cols-3 sm:overflow-visible sm:pb-0 sm:px-0">
            {(
              [
                [
                  "Own your floor",
                  "One payment, permanent access. Your craft is yours, kept forever.",
                  "#F472B6",
                ],
                [
                  "Built to ship",
                  "Standing up a title takes minutes, not weekends. We handle the delivery.",
                  "#22D3EE",
                ],
                [
                  "Made to grow",
                  "Every catalogue entry compounds your reach on the same marquee.",
                  "#8B5CF6",
                ],
              ] as const
            ).map(([title, body, accent]) => (
              <div key={title} className="glass-card group relative w-[82%] shrink-0 snap-center overflow-hidden p-6 sm:w-auto">
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full opacity-[0.12] blur-2xl transition-opacity duration-500 group-hover:opacity-25"
                  style={{ background: accent }}
                />
                <h3 className="font-heading text-lg font-bold text-paper">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-paper/60">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </Scene>

      {/* Scene 4 — The debut */}
      <Scene
        id="contact"
        sweep="curtainDown"
        className="overflow-clip border-t border-white/5 bg-void-900/60"
      >
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div
            className="orb -left-40 bottom-0 h-80 w-80 opacity-10"
            style={{ background: "#22D3EE" }}
          />
          <div
            className="orb -right-32 top-8 h-80 w-80 opacity-10"
            style={{ background: "#F472B6" }}
          />
        </div>

        <div className="scene-body relative mx-auto max-w-3xl px-6 py-28 text-center sm:py-36">
          <span className="liquid-pill px-5 py-2 font-mono text-[11px] uppercase tracking-[0.28em] text-paper/80">
            Contact
          </span>
          <h2 className="mt-8 font-display text-4xl uppercase leading-[0.95] text-paper sm:text-6xl">
            Ready for your debut?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-paper/65">
            Step into the spotlight. Join the list and be first through the doors when the
            next department opens.
          </p>
          <div className="mt-10 flex justify-center">
            <SpotlightForm />
          </div>
          <p className="mt-8 font-mono text-sm text-muted">
            <a
              href="mailto:support@devhillz.store"
              className="transition-colors hover:text-paper"
            >
              support@devhillz.store
            </a>
          </p>
        </div>
      </Scene>
    </main>
  );
}