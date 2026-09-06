/**
 * Static by design: this list is core purchase-decision content (what's
 * actually in the course), so it must never depend on JS running, a
 * scroll event firing, or an observer catching an element in time. An
 * earlier scroll-reveal version could leave the whole list blank for
 * anything that doesn't dispatch real scroll events (a full-page
 * capture, some crawlers) — not worth the risk for a numbered list.
 */
export function CurriculumList({ modules, accent }: { modules: string[]; accent: string }) {
  return (
    <ol className="divide-y divide-white/10 border-y border-white/10">
      {modules.map((title, i) => (
        <li key={title} className="flex items-baseline gap-4 py-4">
          <span className="font-mono text-sm" style={{ color: accent }}>
            {String(i + 1).padStart(2, "0")}
          </span>
          <span className="text-paper/90">{title}</span>
        </li>
      ))}
    </ol>
  );
}
