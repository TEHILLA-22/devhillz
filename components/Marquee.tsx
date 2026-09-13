const WORDS = [
  "Engineering",
  "Design",
  "Film",
  "Publishing",
  "Growth",
  "Automation",
  "AI",
  "Branding",
  "Content",
  "Systems",
];

export function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-white/5 py-4">
      <div className="marquee-track font-mono text-xs uppercase tracking-[0.3em] text-white/35">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center">
            {WORDS.map((word) => (
              <span key={`${copy}-${word}`} className="flex items-center gap-6 pr-6">
                {word}
                <span className="text-white/25">·</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}