import { ProductCard } from "@/components/ProductCard";
import { TerminalWindow } from "@/components/TerminalWindow";
import { products } from "@/lib/products";

export default function HomePage() {
  return (
    <main>
      <section className="mx-auto flex max-w-5xl flex-col items-center gap-10 px-6 py-20 text-center sm:py-28">
        <h1 className="max-w-2xl font-display text-4xl leading-[1.05] text-paper sm:text-6xl">
          Docker and Kubernetes, taught the way production teams actually use them.
        </h1>
        <p className="max-w-lg text-base leading-relaxed text-paper/80 sm:text-lg">
          Two no-fluff PDF courses. Every command explained in plain English, with a real example
          and a real use case behind it — not just a syntax dump.
        </p>
        <TerminalWindow />
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="grid gap-6 sm:grid-cols-2">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 bg-ink-900">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 py-16 sm:grid-cols-3">
          <div>
            <h2 className="font-heading text-lg font-bold text-paper">Stupidly simple explanations</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Every concept is explained like you're new to it, because most people picking this up are.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-lg font-bold text-paper">Every command, with examples</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Not a syntax list — a copy-pasteable example for every command that actually matters.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-lg font-bold text-paper">Real-world use cases</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              You'll know why a command matters, not just what it does — pulled from how real teams work.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
