"use client";

import { useState } from "react";

export function SpotlightForm() {
  const [joined, setJoined] = useState(false);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setJoined(true);
      }}
      className="w-full max-w-md"
      aria-label="Join the Devhillz spotlight list"
    >
      {joined ? (
        <p className="glass-card flex items-center justify-center gap-3 px-6 py-4 font-mono text-sm text-spectrum-cyan">
          You are on the list — the curtain rises soon.
        </p>
      ) : (
        <div className="liquid-pill flex items-center gap-2 p-1.5 pl-5">
          <input
            type="email"
            required
            placeholder="you@stage.dev"
            className="w-full bg-transparent font-mono text-sm text-paper placeholder:text-muted focus:outline-none"
          />
          <button
            type="submit"
            className="shrink-0 rounded-full bg-spectrum-violet px-5 py-2.5 font-mono text-xs font-bold text-white transition-colors hover:bg-spectrum-violet/85"
          >
            Get the spotlight
          </button>
        </div>
      )}
    </form>
  );
}