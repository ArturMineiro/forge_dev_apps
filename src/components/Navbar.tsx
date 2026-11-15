import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "#services", label: "Serviços" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#about", label: "Sobre" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((v) => !v);
  const closeMenu = () => setIsOpen(false);

  // Fecha o menu mobile ao redimensionar para desktop ou apertar ESC
  useEffect(() => {
    const onResize = () => window.innerWidth >= 1024 && setIsOpen(false);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false);
    window.addEventListener("resize", onResize);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  // Função para rolar suavemente para o topo
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    closeMenu();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="fixed w-full top-0 left-0 z-50 bg-violet-100/95 dark:bg-slate-900/95 backdrop-blur-md shadow-sm border-b border-violet-200 dark:border-slate-800 transition-colors duration-300">
      <nav className="container mx-auto flex justify-between items-center h-20 px-4 sm:px-6">
        {/* LOGO = LINK PARA O TOPO */}
        <a href="#" onClick={scrollToTop} className="flex items-center gap-2 sm:gap-3 group cursor-pointer min-w-0">
          <img
            src="/logo_forge.png"
            alt="Logo ForgeDevApps"
            width={48}
            height={48}
            className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 object-contain group-hover:scale-105 transition-transform"
          />
          <span className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white tracking-tight truncate">
            Forge<span className="text-violet-600">Dev</span>Apps
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex gap-8 font-medium text-gray-600 dark:text-gray-300">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="px-5 py-2.5 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors shadow-md shadow-violet-200 dark:shadow-none font-medium"
            >
              Fale Conosco
            </a>
            <ThemeToggle />
          </div>
        </div>

        <button
          type="button"
          className="lg:hidden p-2 -mr-2 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-violet-200/60 dark:hover:bg-slate-800 transition-colors"
          onClick={toggleMenu}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </nav>

      {isOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden absolute top-full left-0 w-full max-h-[calc(100dvh-5rem)] overflow-y-auto bg-violet-100 dark:bg-slate-900 border-t border-violet-200 dark:border-slate-800 shadow-lg flex flex-col items-center py-6 gap-5"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-violet-600 dark:hover:text-violet-400 py-1"
              onClick={closeMenu}
            >
              {l.label}
            </a>
          ))}

          <a
            href="#contact"
            className="px-6 py-3 bg-violet-600 text-white rounded-lg w-[calc(100%-2rem)] max-w-sm text-center font-bold"
            onClick={closeMenu}
          >
            Fale Conosco
          </a>

          <ThemeToggle />
        </div>
      )}
    </header>
  );
}
