import { useEffect, useMemo, useState } from "react";

const NAV_LINKS = [
  { id: "services", label: "Serviços" },
  { id: "about", label: "Sobre" },
  { id: "contact", label: "Contato" },
] as const;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string>("services");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActiveId(visible.target.id);
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    NAV_LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerClasses = useMemo(
    () =>
      [
        "sticky top-0 z-50 backdrop-blur",
        "bg-white/85 dark:bg-dark-bg/80",
        scrolled ? "shadow-md" : "shadow-[0_1px_2px_0_rgb(0_0_0_/_0.05)]",
        "border-b border-light-border/60 dark:border-dark-border/60",
      ].join(" "),
    [scrolled]
  );

  const LinkItem = ({ id, label }: { id: string; label: string }) => {
    const isActive = activeId === id;
    return (
      <a
        href={`#${id}`}
        onClick={() => setMenuOpen(false)}
        className={[
          "px-2 py-1 transition-colors",
          "text-light-fg dark:text-dark-fg",
          "hover:text-accent",
          isActive ? "text-brand font-semibold" : "",
        ].join(" ")}
      >
        {label}
      </a>
    );
  };

  return (
    <header className={headerClasses}>
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 md:px-6 py-3"
        aria-label="Principal"
      >
        <a href="#top" className="flex items-center gap-2 group">
          <span className="text-2xl font-extrabold bg-gradient-to-r from-brand to-brand-600 bg-clip-text text-transparent">
            ForgeDevApps
          </span>
          <span className="sr-only">Ir para o topo</span>
        </a>

        <ul className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((l) => (
            <li key={l.id}>
              <LinkItem {...l} />
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="rounded-xl px-4 py-2 transition border border-brand/60 text-brand hover:bg-accent hover:border-accent hover:text-white"
            >
              Solicitar orçamento
            </a>
          </li>
        </ul>

        <button
          className="md:hidden inline-flex items-center justify-center rounded-lg border border-light-border dark:border-dark-border px-3 py-2 text-light-fg dark:text-dark-fg"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label="Abrir menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M3 6h18M3 12h18M3 18h18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`md:hidden border-t border-light-border dark:border-dark-border ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="mx-auto max-w-7xl px-4 md:px-6 flex flex-col gap-2 py-3">
          {NAV_LINKS.map((l) => (
            <li key={l.id}>
              <LinkItem {...l} />
            </li>
          ))}
          <li className="pt-1">
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="inline-block w-full rounded-xl border border-brand/60 px-4 py-2 text-center text-brand hover:bg-accent hover:border-accent hover:text-white transition"
            >
              Solicitar orçamento
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
