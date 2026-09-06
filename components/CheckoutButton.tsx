"use client";

import { openCheckout } from "@/lib/checkout";

export function CheckoutButton({
  checkoutUrl,
  accent,
  label = "Buy the course",
  className = "",
}: {
  checkoutUrl: string;
  accent: string;
  label?: string;
  className?: string;
}) {
  return (
    <button
      onClick={() => openCheckout(checkoutUrl)}
      className={`inline-flex items-center justify-center rounded-lg px-6 py-3 font-mono text-sm font-bold text-ink-950 transition-transform hover:scale-[1.02] active:scale-[0.98] ${className}`}
      style={{ backgroundColor: accent }}
    >
      {label}
    </button>
  );
}
