# Devhillz Store

The storefront for the Devhillz DevOps courses (Docker, Kubernetes) — a homepage
and a dedicated sales page per course, built to be the landing spot for the
30-day TikTok plan.

Next.js only — no separate backend. Checkout and digital delivery are handled
by Lemon Squeezy (or Paddle), so there's no payment, tax, or file-hosting code
to maintain here.

## Stack

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS** — brand tokens (colors, fonts) live in `tailwind.config.ts`
- **Fonts**: Big Shoulders, Bricolage Grotesque, Instrument Sans, JetBrains
  Mono — the same families used on the course PDFs/covers, bundled locally
  under `app/fonts/` so the build never depends on Google's font CDN.
- **Checkout**: Lemon Squeezy overlay (`lib/checkout.ts`), stubbed until you
  connect a real store.

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

```bash
npm run build   # production build
npm run start   # serve the production build locally
```

## Where everything lives

| What you want to change | File |
|---|---|
| Price, tagline, curriculum, FAQ per course | `lib/products.ts` |
| Checkout URL per course | `lib/products.ts` → `checkoutUrl` field |
| Homepage copy/layout | `app/page.tsx` |
| Product page layout (shared by both courses) | `app/docker/page.tsx`, `app/kubernetes/page.tsx` |
| Colors, fonts | `tailwind.config.ts` |
| Book cover images | `public/images/` |

## Connecting real checkout (Lemon Squeezy)

1. Create your Lemon Squeezy store, add the Docker and Kubernetes courses as
   products, and upload each PDF as the deliverable file.
2. Copy each product's checkout URL.
3. Paste them into `lib/products.ts`:
   ```ts
   checkoutUrl: "https://devhillz.lemonsqueezy.com/checkout/buy/xxxxxxxx",
   ```
4. That's it — `app/layout.tsx` already loads Lemon Squeezy's overlay script,
   and `CheckoutButton` / `StickyBuyBar` already call it. No other code
   changes needed.

Until a `checkoutUrl` is set, clicking Buy shows a clear on-screen warning
instead of failing silently — so it's obvious in testing what's left to wire
up.

Prefer Paddle instead? Swap the contents of `lib/checkout.ts` for Paddle's
`Paddle.Checkout.open({...})` call — every button already calls through this
one function, so that's the only file that needs to change.

## Deploying

Push to a GitHub repo and import it on [Vercel](https://vercel.com/new) — zero
config needed, it detects Next.js automatically. Point your `.store` domain at
the Vercel project from Vercel's domain settings once it's live.

## Adding a third product later (e.g. a bundle)

1. Add an entry to the `products` array in `lib/products.ts`.
2. Copy `app/docker/page.tsx` to `app/<new-slug>/page.tsx` and swap
   `getProduct("docker")` for your new slug.
3. Add a link to it in `components/Header.tsx` and a `ProductCard` on the
   homepage if you want it featured there.

## Notes on what's deliberately NOT here

- No database, no user accounts, no custom backend — Lemon Squeezy tracks
  orders and handles file delivery. Add a database later only when you need
  something they don't track for you (e.g. a custom affiliate system).
- No animation library — the one scroll-reveal effect that was prototyped
  for the curriculum list was removed because it could leave content blank
  for anything that doesn't fire real scroll events (fast scrolling, some
  crawlers, full-page screenshot tools). Core purchase-decision content
  (the module list) always renders immediately, no JS required.
