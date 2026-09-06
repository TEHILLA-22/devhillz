import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/${product.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border transition-colors sm:flex-row"
      style={{ borderColor: `${product.accent}33`, backgroundColor: product.soft }}
    >
      <div className="relative aspect-[2/3] w-full shrink-0 sm:w-56">
        <Image
          src={product.cover}
          alt={`${product.name} cover`}
          fill
          className="object-cover"
          sizes="(min-width: 640px) 224px, 100vw"
        />
      </div>
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <p className="font-mono text-xs tracking-wide text-muted">{product.price} · PDF course</p>
          <h3 className="mt-2 font-heading text-2xl font-bold text-paper">{product.shortName}</h3>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-paper/80">{product.tagline}</p>
        </div>
        <p
          className="mt-6 inline-flex items-center gap-2 font-mono text-sm font-bold transition-transform group-hover:translate-x-1"
          style={{ color: product.accent }}
        >
          View the course
        </p>
      </div>
    </Link>
  );
}
