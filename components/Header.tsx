import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-ink-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-mono text-sm font-bold tracking-[0.2em] text-paper">
          DEVHILLZ
        </Link>
        <nav className="flex items-center gap-6 font-mono text-sm text-muted">
          <Link href="/docker" className="transition-colors hover:text-docker-accent">
            Docker
          </Link>
          <Link href="/kubernetes" className="transition-colors hover:text-kube-accent">
            Kubernetes
          </Link>
        </nav>
      </div>
    </header>
  );
}
