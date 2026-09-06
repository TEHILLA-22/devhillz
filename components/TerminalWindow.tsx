"use client";

import { useEffect, useState } from "react";

const LINES = [
  { prompt: "~", command: "docker run -d -p 8080:80 nginx", accent: "#2EACDB" },
  { prompt: "~", command: "kubectl apply -f deployment.yaml", accent: "#5865F2" },
];

/**
 * Types out each command in LINES, pauses, then moves to the next.
 * Respects prefers-reduced-motion by rendering the first command statically.
 */
export function TerminalWindow() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
  }, []);

  useEffect(() => {
    if (reduced) return;
    const current = LINES[lineIndex].command;

    if (charCount < current.length) {
      const t = setTimeout(() => setCharCount((c) => c + 1), 45);
      return () => clearTimeout(t);
    }
    const pause = setTimeout(() => {
      setCharCount(0);
      setLineIndex((i) => (i + 1) % LINES.length);
    }, 1600);
    return () => clearTimeout(pause);
  }, [charCount, lineIndex, reduced]);

  const active = LINES[lineIndex];
  const text = reduced ? active.command : active.command.slice(0, charCount);

  return (
    <div className="w-full max-w-xl rounded-xl border border-white/10 bg-ink-900 shadow-2xl shadow-black/40">
      <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
      </div>
      <div className="px-5 py-6 font-mono text-sm sm:text-base">
        <span className="text-muted">{active.prompt} $ </span>
        <span style={{ color: active.accent }}>{text}</span>
        <span className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 animate-blink bg-paper align-middle" />
      </div>
    </div>
  );
}
