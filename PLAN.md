# Devhillz — Build Plan: Public Storefront + Admin Panel + Paystack

The landing page (this repo, redesigned) is the marquee. This plan builds the
machinery behind it: an admin panel where Devhillz uploads titles and organises
them into categories/sub-categories, a public storefront that renders whatever
the admin publishes (no hardcoded products), and a Paystack checkout that
replaces Lemon Squeezy entirely.

## 1. What changes vs today

| Today | After this build |
|---|---|
| Products hardcoded in `lib/products.ts` (two courses + Lemon Squeezy URL) | Products, categories and sub-categories live in a database, managed in `/admin` |
| `components/CheckoutButton.tsx` + `lib/checkout.ts` call Lemon Squeezy overlay | New Paystack checkout (`paystack.popup`) + server-side verification + webhook |
| Product routes `app/docker`, `app/kubernetes` hand-made per product | One dynamic product page + one dynamic category page (generated from DB) |
| Homepage hero already data-driven (reads `lib/catalog.ts`) | Homepage keeps reading the same shape — now from the DB instead of the seed file |

## 2. Architecture

- **Next.js 16 (App Router) + TypeScript + Tailwind** — unchanged, one deployable.
- **Supabase** (Postgres + Storage + Auth) as the database/file back-end. Keeps the
  project Next-only, no server to maintain. Storage hosts PDFs/covers; Auth guards `/admin`.
  (SQLite/Postgres on Vercel + S3 is a fine alternative if self-hosting is preferred.)
- **Paystack** as the payment provider. Server-side keys in env vars, never in the client.
- The **public UI never knows about payment providers** — it renders DB rows. Checkout is
  a thin layer (`lib/paystack.ts`) every Buy button calls, mirroring today's `lib/checkout.ts`
  pattern so swapping providers later stays a one-file change.

### Data model (Supabase tables)

```
admins             id, email, role, created_at            (Auth.users)
categories         id, slug, name, tagline, blurb, icon, accent, title_count, sort_order, published, created_at
sub_categories     id, category_id FK, slug, name, blurb, sort_order
products           id, category_id FK, sub_category_id FK NULL, slug, title, subtitle,
                   description, cover_url, price_kobo, currency, featured, published,
                   sort_order, created_at
product_files      id, product_id FK, label (e.g. "PDF course"), storage_path, mime, size, sort_order
orders             id, reference (unique), email, amount, currency, status, paystack_ref,
                   created_at, updated_at, metadata jsonb
order_items        id, order_id FK, product_id FK, price_kobo
deliveries         id, order_id FK, product_file_id FK, status, downloaded_at
settings           key, value            (paystack public key, support email, hero copy overrides)
```

`slug` is unique everywhere; `published` gates what the storefront shows so the
admin can draft without leaking.

## 3. Public storefront

Routes (all server-rendered, SEO-clean, share the landing page's glass/cinematic language):

| Route | Renders |
|---|---|
| `/` | Existing redesigned landing — catalog grid now fed by `listCategories(published=true)` from DB |
| `/catalog/[slug]` | Category landing: hero, sub-category filter pills, product grid |
| `/product/[slug]` | Product page: cover, description, curriculum/module list, FAQ, sticky buy bar (reuse `StickyBuyBar`) |
| `/catalog` | All published categories + search (title/tagline) |
| `/lib` (optional) | Purchaser's library: which titles they bought, download links, files |

Key behaviours:
- Category/sub-category data flows same shape as `lib/catalog.ts` → the landing
  page, footer and storefront all render from one DB query.
- Every product page gets `generateStaticParams` + `revalidatePath` on publish so
  pages rebuild the moment the admin hits save.
- Digital delivery: after a successful payment, the product's `product_files` are
  made downloadable (signed storage URLs / gated API) and emailed to the buyer.
- No specific product words anywhere — categories, departments and copy remain the
  generic "stage" language.

## 4. Admin panel (`/admin`)

Real panel, admin-only. Keep it deliberately boring (fast, obvious) while the public
side stays glossy.

- **Auth guard**: Supabase/Auth.js session, role check, middleware on `/admin/*`.
- **Dashboard**: total revenue, orders today, published titles, top departments.
- **Categories**: create/edit/archive categories; optional sub-categories nested under
  one; choose icon + accent (drives frontend cards); set sort order; publish toggle.
- **Products**: create/edit under a category (optional sub-category); cover upload;
  description (rich text); price in NGN (stored in kobo); attach deliverable files
  (PDF etc.) one or more per product; clone existing product; featured flag.
- **Orders & deliveries**: order list with Paystack status, buyer email, items,
  resend-download link action, mark-file-retracted for refunds.
- **Settings**: Paystack public/test keys (server-side env, not UI storage),
  support email, announcement bar text.

Admin routes: `/admin`, `/admin/categories`, `/admin/categories/[id]`,
`/admin/products`, `/admin/products/[id]`, `/admin/orders`, `/admin/settings`.

## 5. Paystack integration (replaces Lemon Squeezy)

1. **Env vars**: `PAYSTACK_SECRET_KEY`, `NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY` (test/mode
   toggled by a setting).
2. **Initiate**: client hits `POST /api/checkout/initialize` with `productId` (+qty).
   Server creates an `orders` row, calls Paystack `/transaction/initialize` with
   the product price, returns `authorization_url`.
3. **Pay**: open `paystack.popup({ key, email, amount, ref })` (or redirect to
   `authorization_url`). 
4. **Verify**: after redirect, call `GET /api/checkout/verify?reference=…`. Server
   hits Paystack `/transaction/verify`; on `success` → mark order paid, provision
   deliveries (signed URLs) and email them.
5. **Webhook** `POST /api/webhooks/paystack` (secret-token verified) for async
   confirmations: flip status, trigger delivery email.
6. **Delivery**: file downloads are signed, short-lived Supabase storage URLs tied to
   a paid order (and purchasers' `/lib`).
7. **Currency**: prices set in NGN by default; Paystack handles card/transfer/USSD/Bank.

## 6. Build order (suggested)

1. DB schema + Supabase project + seed the 6 departments (Engineering, Creative
   Studio, Audience Engine, Video Factory, Publishing Lab, Automation) and the 2
   Engineering titles (ported from `lib/products.ts`).
2. `lib/catalog.ts` swaps to DB reads; landing page + footer go live on real data.
3. Admin: auth + dashboard + categories/sub-categories CRUD (products can wait —
   categories are the foundation).
4. Admin: products CRUD + file upload + publish → storefront `/catalog/[slug]` +
   `/product/[slug]` render.
5. Paystack initialize → popup → verify → webhook → email delivery.
6. Orders + `/lib` purchaser library + resend/reconciliation.
7. Polish: search, migrations script, README rewrite, remove all Lemon Squeezy code.

## 7. Migration notes

- **Out**: `lib/checkout.ts`, Lemon Squeezy `<Script>` in layout (already removed),
  `checkoutUrl` field, hardcoded `app/docker|kubernetes` product pages (migrated into
  ported DB rows, then deleted).
- **Seed** maps existing `Product` fields (`modules` → a `curriculum` column or
  `product_files`, `faqs` JSON, `accent` colors) into the new schema so nothing is lost.
- **Test mode**: Paystack test keys + a flag that shows "test" badges on orders. Ship
  storefront + admin in test first, then flip to live keys.