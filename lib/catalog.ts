import type { GlyphName } from "@/components/icons";

export type SubCategory = {
  slug: string;
  name: string;
  blurb?: string;
};

export type Category = {
  slug: string;
  name: string;
  tagline: string;
  icon: GlyphName;
  accent: string;
  titleCount: number;
  featured?: boolean;
  subCategories: SubCategory[];
};

/**
 * Seed data — the shape is what the admin panel will manage later.
 * When the admin panel ships, this array is replaced by records read
 * from the database, and every frontend section renders from that same
 * source (no hardcoded categories on the UI).
 *
 * Display names are intentionally generic ("Engineering", "Creative
 * Studio", ...) so the marquee copy never reads as a specific product.
 */
export const categories: Category[] = [
  {
    slug: "engineering",
    name: "Engineering",
    tagline: "Systems, infrastructure, and the logic that keeps the internet running.",
    icon: "layers",
    accent: "#8B5CF6",
    titleCount: 2,
    featured: true,
    subCategories: [
      { slug: "containers", name: "Containers" },
      { slug: "orchestration", name: "Orchestration" },
    ],
  },
  {
    slug: "creative-studio",
    name: "Creative Studio",
    tagline: "Visual craft, brand design, and toolkits that make things pretty on purpose.",
    icon: "palette",
    accent: "#F472B6",
    titleCount: 0,
    subCategories: [],
  },
  {
    slug: "audience-engine",
    name: "Audience Engine",
    tagline: "Systems for turning attention into a dependable income — without the burnout.",
    icon: "megaphone",
    accent: "#FBBF24",
    titleCount: 0,
    subCategories: [],
  },
  {
    slug: "video-factory",
    name: "Video Factory",
    tagline: "Produce, edit, and publish video at a pace that used to need a whole team.",
    icon: "play",
    accent: "#22D3EE",
    titleCount: 0,
    subCategories: [],
  },
  {
    slug: "publishing-lab",
    name: "Publishing Lab",
    tagline: "Words, blogs, and search visibility engineered to keep compounding.",
    icon: "pen",
    accent: "#A3E635",
    titleCount: 0,
    subCategories: [],
  },
  {
    slug: "automation",
    name: "Automation",
    tagline: "Bots and pipelines that run your workflow on autopilot while you create.",
    icon: "zap",
    accent: "#E879F9",
    titleCount: 0,
    subCategories: [],
  },
];

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function featuredCategory() {
  return categories.find((c) => c.featured) ?? categories[0];
}

export function totalTitles() {
  return categories.reduce((sum, c) => sum + c.titleCount, 0);
}