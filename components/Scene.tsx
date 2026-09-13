"use client";

import { useEffect, useLayoutEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

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
 * On portrait/mobile widths the sweep switches to a vertical top-down curtain
 * (reads dramatically on a tall screen); landscape keeps the horizontal sweep.
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
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

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

  const activeSweep: Sweep = mobile ? "curtainUp" : sweep;

  return (
    <section
      ref={ref}
      id={id}
      className={`scene ${SWEEP_CLASS[activeSweep]} ${className}`}
      style={style}
    >
      {children}
    </section>
  );
}