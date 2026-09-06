export type Product = {
  slug: "docker" | "kubernetes";
  name: string;
  shortName: string;
  tagline: string;
  hook: string;
  price: string;
  cover: string;
  accent: string;
  accentDark: string;
  soft: string;
  terminalLine: string;
  modules: string[];
  faqs: { q: string; a: string }[];
  /**
   * Paste the Lemon Squeezy (or Paddle) checkout URL for this product here
   * once it exists — e.g. "https://devhillz.lemonsqueezy.com/checkout/buy/xxxx".
   * Leave empty during development; CheckoutButton falls back to a clear
   * console warning instead of failing silently.
   */
  checkoutUrl: string;
};

export const products: Product[] = [
  {
    slug: "docker",
    name: "Docker — The Complete Course",
    shortName: "Docker",
    tagline: "Every command explained simply, with real examples and real use cases.",
    hook: "Climb the DevOps Hillz — one container at a time.",
    price: "$19",
    cover: "/images/docker-cover.png",
    accent: "#2EACDB",
    accentDark: "#0E5C82",
    soft: "#0E3A56",
    terminalLine: "docker run -d -p 8080:80 --name my-first-site nginx",
    modules: [
      "What Is Docker (And Why Should You Care)",
      "Installing Docker",
      "How Docker Actually Works",
      "Your First Container",
      "Working With Images",
      "Working With Containers",
      "The Dockerfile",
      "Volumes — Making Data Survive",
      "Docker Networking",
      "Docker Compose — Multi-Container Apps",
      "Cleaning Up & System Commands",
      "Real-World Use Cases",
      "Best Practices & Common Mistakes",
      "The Full Docker Command Cheat Sheet",
      "What's Next: From Docker to Kubernetes",
    ],
    faqs: [
      {
        q: "Do I need any prior experience?",
        a: "No. If you can open a terminal, you can follow along from Module 1.",
      },
      {
        q: "What format is the course?",
        a: "A 27-page PDF you keep forever — read it on any device, no login or app required.",
      },
      {
        q: "Does it cover Docker Compose?",
        a: "Yes — Module 10 is a full walkthrough of running multi-container apps with Compose.",
      },
    ],
    checkoutUrl: "",
  },
  {
    slug: "kubernetes",
    name: "Kubernetes — The Complete Course",
    shortName: "Kubernetes",
    tagline: "From your first Pod to a production-ready cluster.",
    hook: "Climb the DevOps Hillz — one cluster at a time.",
    price: "$19",
    cover: "/images/kubernetes-cover.png",
    accent: "#5865F2",
    accentDark: "#3C34A5",
    soft: "#241C4E",
    terminalLine: "kubectl apply -f deployment.yaml",
    modules: [
      "The Problem Kubernetes Solves",
      "Kubernetes Architecture, Explained Simply",
      "Getting A Cluster Running",
      "Core Objects: Pods, ReplicaSets, Deployments",
      "kubectl Basics",
      "Deployments In Practice",
      "Services & Exposing Your App",
      "ConfigMaps & Secrets",
      "Storage: Volumes, PV & PVC",
      "Scaling, Rollouts & Self-Healing",
      "Namespaces & Context Management",
      "Real-World Use Cases",
      "Best Practices & Common Mistakes",
      "The Full kubectl Command Cheat Sheet",
      "What's Next",
    ],
    faqs: [
      {
        q: "Do I need to know Docker first?",
        a: "Yes — this course assumes you're comfortable with Docker basics. The Devhillz Docker course covers exactly that.",
      },
      {
        q: "Will I need a real cluster?",
        a: "No — everything is taught on minikube or kind, free local tools that simulate a full cluster on your laptop.",
      },
      {
        q: "What format is the course?",
        a: "A 28-page PDF you keep forever — read it on any device, no login or app required.",
      },
    ],
    checkoutUrl: "",
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
