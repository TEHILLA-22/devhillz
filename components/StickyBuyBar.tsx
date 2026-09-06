"use client";

import { useEffect, useRef, useState } from "react";
import { CheckoutButton } from "@/components/CheckoutButton";
import type { Product } from "@/lib/products";

export function StickyBuyBar({ product }: { product: Product }) {
  const [visible, setVisible] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = sentinelRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { rootMargin: "-72px 0px 0px 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Placed at the end of the hero section to mark when it scrolls away */}
      <div ref={sentinelRef} />
      <div
        className={`fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-ink-900/95 backdrop-blur transition-transform duration-300 ${
          visible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-3">
          <div className="min-w-0">
            <p className="truncate font-heading text-sm font-bold text-paper sm:text-base">{product.name}</p>
            <p className="font-mono text-xs text-muted">{product.price} · one-time</p>
          </div>
          <CheckoutButton checkoutUrl={product.checkoutUrl} accent={product.accent} label="Buy now" />
        </div>
      </div>
    </>
  );
}
