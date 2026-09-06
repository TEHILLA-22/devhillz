export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-white/10 border-y border-white/10">
      {items.map(({ q, a }) => (
        <details key={q} className="group py-4">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-paper/90">
            {q}
            <span className="font-mono text-muted transition-transform group-open:rotate-45">+</span>
          </summary>
          <p className="mt-3 max-w-prose text-sm leading-relaxed text-muted">{a}</p>
        </details>
      ))}
    </div>
  );
}
