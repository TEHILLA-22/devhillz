import type { Category } from "@/lib/catalog";
import { Glyph } from "@/components/icons";

export function CategoryCard({ category }: { category: Category }) {
  return (
    <article className="glass-card group relative flex w-[84%] shrink-0 snap-center flex-col gap-5 overflow-hidden p-7 transition-all duration-500 hover:-translate-y-1 hover:border-white/25 sm:w-auto">
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-[0.14] blur-3xl transition-opacity duration-500 group-hover:opacity-30"
        style={{ background: category.accent }}
      />
      <div className="flex items-center justify-between gap-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-paper transition-colors duration-500 group-hover:text-white">
          <Glyph name={category.icon} className="h-6 w-6" />
        </span>
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
          {category.titleCount} {category.titleCount === 1 ? "title" : "titles"}
        </span>
      </div>
      <div>
        <h3 className="font-heading text-2xl font-bold text-paper">{category.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-paper/65">{category.tagline}</p>
      </div>
      {category.subCategories.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-1">
          {category.subCategories.map((sub) => (
            <span
              key={sub.slug}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[11px] text-muted"
            >
              {sub.name}
            </span>
          ))}
        </div>
      )}
      <span
        className="mt-auto inline-flex items-center gap-2 pt-1 font-mono text-[13px] font-semibold"
        style={{ color: category.accent }}
      >
        <span className="h-px w-6 bg-current opacity-60 transition-all duration-500 group-hover:w-10" />
        Step inside
      </span>
    </article>
  );
}