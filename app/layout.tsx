import type { Metadata } from "next";
import localFont from "next/font/local";
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
  title: "Devhillz — The stage for digital creators",
  description:
    "The home of world-leading digital catalogues. Engineering, design, words, film, automation and growth — one catalogue, one stage.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${heading.variable} ${sans.variable} ${mono.variable}`}>
      <body className="bg-void-950 font-sans text-paper antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
