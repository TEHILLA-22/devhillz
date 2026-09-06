import Image from "next/image";
import type { Product } from "@/lib/products";
import { CheckoutButton } from "@/components/CheckoutButton";

export function ProductHero({ product }: { product: Product }) {
  return (
    <section
      className="border-b border-white/10"
      style={{
        background: `radial-gradient(circle at 20% 20%, ${product.soft}, #05070F 65%)`,
      }}
    >
      <div className="mx-auto grid max-w-5xl gap-10 px-6 py-16 sm:grid-cols-[280px_1fr] sm:items-center sm:py-24">
        <div className="relative mx-auto aspect-[2/3] w-56 shrink-0 overflow-hidden rounded-xl shadow-2xl shadow-black/50 sm:mx-0 sm:w-full">
          <Image src={product.cover} alt={`${product.name} cover`} fill className="object-cover" priority />
        </div>
        <div>
          <p className="font-mono text-xs tracking-wide" style={{ color: product.accent }}>
            {product.hook}
          </p>
          <h1 className="mt-3 font-display text-4xl leading-[1.05] text-paper sm:text-5xl">{product.name}</h1>
          <p className="mt-4 max-w-md text-base leading-relaxed text-paper/80">{product.tagline}</p>
          <div className="mt-8 flex items-center gap-4">
            <CheckoutButton checkoutUrl={product.checkoutUrl} accent={product.accent} label={`Buy — ${product.price}`} />
            <span className="font-mono text-xs text-muted">One-time payment · instant download</span>
          </div>
        </div>
      </div>
    </section>
  );
}
