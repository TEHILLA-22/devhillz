import type { Metadata } from "next";
import { ProductHero } from "@/components/ProductHero";
import { CurriculumList } from "@/components/CurriculumList";
import { Faq } from "@/components/Faq";
import { StickyBuyBar } from "@/components/StickyBuyBar";
import { getProduct } from "@/lib/products";

const product = getProduct("docker")!;

export const metadata: Metadata = {
  title: `${product.name} · Devhillz`,
  description: product.tagline,
};

export default function DockerPage() {
  return (
    <main>
      <ProductHero product={product} />

      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="font-heading text-2xl font-bold text-paper">What's inside</h2>
        <p className="mt-2 text-sm text-muted">15 modules, 27 pages, one PDF you keep forever.</p>
        <div className="mt-8">
          <CurriculumList modules={product.modules} accent={product.accent} />
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-16">
        <h2 className="font-heading text-2xl font-bold text-paper">Questions</h2>
        <div className="mt-6">
          <Faq items={product.faqs} />
        </div>
      </section>

      <StickyBuyBar product={product} />
    </main>
  );
}
