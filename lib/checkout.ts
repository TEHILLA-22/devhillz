declare global {
  interface Window {
    LemonSqueezy?: {
      Url: { Open: (url: string) => void };
    };
  }
}

/**
 * Opens a Lemon Squeezy overlay checkout for the given product.
 *
 * Setup (once your Lemon Squeezy store exists):
 * 1. Create a product for each course, copy its checkout URL.
 * 2. Paste that URL into the matching product's `checkoutUrl` in lib/products.ts.
 * 3. The <Script> tag in app/layout.tsx already loads Lemon Squeezy's overlay
 *    library, so no further wiring is needed — this function does the rest.
 *
 * Until a checkoutUrl is set, this falls back to a visible warning instead of
 * a silently broken button, so it's obvious in testing what's left to wire up.
 */
export function openCheckout(checkoutUrl: string) {
  if (!checkoutUrl) {
    console.warn(
      "[Devhillz] No checkout URL set for this product yet — add it in lib/products.ts."
    );
    alert("Checkout isn't connected yet — add a Lemon Squeezy checkout URL in lib/products.ts.");
    return;
  }

  if (typeof window !== "undefined" && window.LemonSqueezy) {
    window.LemonSqueezy.Url.Open(checkoutUrl);
  } else if (typeof window !== "undefined") {
    window.location.href = checkoutUrl;
  }
}
