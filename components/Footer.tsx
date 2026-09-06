export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono">Devhillz — DevOps courses that actually ship.</p>
        <div className="flex gap-5 font-mono">
          <a href="mailto:support@devhillz.store" className="transition-colors hover:text-paper">
            support@devhillz.store
          </a>
          <span>&copy; {new Date().getFullYear()} Devhillz</span>
        </div>
      </div>
    </footer>
  );
}
