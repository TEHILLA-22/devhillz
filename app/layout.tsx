import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const display = localFont({
  src: "./fonts/BigShoulders-Bold.ttf",
  variable: "--font-display",
  weight: "700",
  display: "swap",
});

const heading = localFont({
  src: "./fonts/BricolageGrotesque-Bold.ttf",
  variable: "--font-heading",
  weight: "700",
  display: "swap",
});

const sans = localFont({
  src: [
    { path: "./fonts/InstrumentSans-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/InstrumentSans-Italic.ttf", weight: "400", style: "italic" },
  ],
  variable: "--font-sans",
  display: "swap",
});

const mono = localFont({
  src: [
    { path: "./fonts/JetBrainsMono-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/JetBrainsMono-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Devhillz — Docker & Kubernetes, taught properly",
  description:
    "Two no-fluff DevOps courses: every command explained simply, with real examples and real use cases. Climb the DevOps Hillz.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${heading.variable} ${sans.variable} ${mono.variable}`}>
      <body className="bg-ink-950 font-sans text-paper antialiased">
        <Header />
        {children}
        <Footer />
        {/* Lemon Squeezy overlay checkout — see lib/checkout.ts */}
        <Script src="https://assets.lemonsqueezy.com/lemon.squeezy.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
