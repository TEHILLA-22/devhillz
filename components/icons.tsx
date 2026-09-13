import type { ReactNode } from "react";

export type GlyphName = "layers" | "palette" | "megaphone" | "play" | "pen" | "zap";

const PATHS: Record<GlyphName, ReactNode> = {
  layers: (
    <>
      <path d="M12 3l9 5-9 5-9-5 9-5z" />
      <path d="M3 12l9 5 9-5" />
      <path d="M3 17l9 5 9-5" />
    </>
  ),
  palette: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="9" cy="9.2" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="15" cy="9.6" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="12" cy="14.8" r="1.1" fill="currentColor" stroke="none" />
      <path d="M12 21v-1.4" />
    </>
  ),
  megaphone: (
    <>
      <path d="M3 10.5v3h2.5l6.5 5V5.5l-6.5 5H3z" />
      <path d="M17.5 8.5a3.4 3.4 0 010 7" />
      <path d="M20.5 6.5a7 7 0 010 11" />
    </>
  ),
  play: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M10 8.5l6 3.5-6 3.5v-7z" fill="currentColor" stroke="none" />
    </>
  ),
  pen: (
    <>
      <path d="M4 20l1.2-4.2L15.5 5.5l3 3L8.2 18.8 4 20z" />
      <path d="M13.5 7.5l3 3" />
    </>
  ),
  zap: (
    <>
      <path d="M13 2L4.5 14H11l-1 8 8.5-12H12l1-8z" />
    </>
  ),
};

export function Glyph({ name, className = "h-6 w-6" }: { name: GlyphName; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      {PATHS[name]}
    </svg>
  );
}