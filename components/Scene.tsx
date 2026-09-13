"use client";

import { useLayoutEffect, useRef, type CSSProperties, type ReactNode } from "react";

type Sweep = "curtainRight" | "curtainLeft" | "curtainUp" | "curtainDown";

const SWEEP_CLASS: Record<Sweep, string> = {
  curtainRight: "scene--curtainRight",
  curtainLeft: "scene--curtainLeft",
  curtainUp: "scene--curtainUp",
  curtainDown: "scene--curtainDown",
};

/**
 * A full "scene" of the landing page. Its clip-path and 3D tilt are tied
 * to scroll position (curtain sweep) rather than any opacity fade, so each
 * section flows into the next like a film scene cut.
 *
 * Falls back to fully visible, static content when JS is off or the user
 * prefers reduced motion.
 */
export function Scene({
  id,
  sweep = "curtainRight",
  className = "",
  style,
  children,
}: {
  id?: string;
  sweep?: Sweep;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.setProperty("--p", "1");
      return;
    }

    let raf = 0;
    const apply = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const startY = vh * 0.72;
      const p = Math.min(1, Math.max(0, (startY - rect.top) / startY));
      el.style.setProperty("--p", p.toFixed(3));
    };
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(apply);
    };

    apply();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });

    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  return (
    <section
      ref={ref}
      id={id}
      className={`scene ${SWEEP_CLASS[sweep]} ${className}`}
      style={style}
    >
      {children}
    </section>
  );
}