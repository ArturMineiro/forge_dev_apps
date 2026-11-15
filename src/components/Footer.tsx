import { ArrowUp, Instagram, Mail, MapPin } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import { EMAIL, INSTAGRAM_HANDLE, INSTAGRAM_URL, WHATSAPP_DISPLAY, WHATSAPP_LINK } from "../config/contact";

const navLinks = [
  { href: "#services", label: "Serviços" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#about", label: "Sobre" },
  { href: "#contact", label: "Contato" },
];

const serviceLinks = ["Sites e Landing Pages", "Aplicativos Mobile", "Sistemas de Gestão", "Automações & Integrações"];

const socials = [
  { href: WHATSAPP_LINK, label: "WhatsApp", icon: <WhatsAppIcon className="w-5 h-5" />, hover: "hover:bg-[#25D366] hover:border-[#25D366]" },
  { href: INSTAGRAM_URL, label: "Instagram", icon: <Instagram className="w-5 h-5" />, hover: "hover:bg-gradient-to-tr hover:from-amber-500 hover:via-pink-500 hover:to-violet-600 hover:border-pink-500" },
  { href: `mailto:${EMAIL}`, label: "E-mail", icon: <Mail className="w-5 h-5" />, hover: "hover:bg-violet-600 hover:border-violet-600" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const titleClass = "text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white mb-4";
  const linkClass = "hover:text-violet-600 dark:hover:text-violet-400 transition-colors";

  return (
    <footer className="relative bg-violet-100 dark:bg-slate-950 text-gray-600 dark:text-slate-400 border-t border-violet-200 dark:border-slate-900 transition-colors">
      {/* Linha de destaque no topo */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-500/60 to-transparent"></div>

      <div className="container mx-auto px-4 sm:px-6 pt-14 pb-8">
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-x-6 gap-y-10">
          {/* Marca */}
          <div className="col-span-2 lg:col-span-4 flex flex-col items-center text-center lg:items-start lg:text-left">
            <a href="#" onClick={scrollToTop} className="flex items-center gap-3 group">
              <img
                src="/logo-forge.png"
                alt="Logo ForgeDevApps"
                width={44}
                height={44}
                className="w-11 h-11 object-contain group-hover:scale-105 transition-transform"
              />
              <span className="text-2xl font-bold text-gray-800 dark:text-white tracking-tight">
                Forge<span className="text-violet-600">Dev</span>Apps
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed max-w-xs">
              Sites, aplicativos e sistemas sob medida para escalar o seu negócio com tecnologia moderna.
            </p>

            <div className="flex gap-3 mt-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  title={s.label}
                  className={`flex items-center justify-center w-11 h-11 rounded-xl border bg-white dark:bg-slate-900 border-violet-200 dark:border-slate-800 text-violet-600 dark:text-violet-400 hover:text-white dark:hover:text-white hover:-translate-y-0.5 transition-all duration-300 ${s.hover}`}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navegação */}
          <nav className="lg:col-span-2" aria-label="Rodapé">
            <h3 className={titleClass}>Navegação</h3>
            <ul className="space-y-3 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className={linkClass}>{l.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Serviços */}
          <div className="lg:col-span-3">
            <h3 className={titleClass}>Serviços</h3>
            <ul className="space-y-3 text-sm">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a href="#services" className={linkClass}>{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div className="col-span-2 lg:col-span-3">
            <h3 className={`${titleClass} text-center lg:text-left`}>Contato</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3 text-sm">
              <li>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-3 p-3 lg:p-0 rounded-xl bg-white/60 dark:bg-slate-900/60 lg:bg-transparent lg:dark:bg-transparent ${linkClass}`}>
                  <WhatsAppIcon className="w-4 h-4 shrink-0 text-[#25D366]" />
                  <span className="whitespace-nowrap">{WHATSAPP_DISPLAY}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className={`flex items-center gap-3 p-3 lg:p-0 rounded-xl bg-white/60 dark:bg-slate-900/60 lg:bg-transparent lg:dark:bg-transparent ${linkClass}`}>
                  <Mail className="w-4 h-4 shrink-0 text-violet-600" />
                  <span className="break-all">{EMAIL}</span>
                </a>
              </li>
              <li>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-3 p-3 lg:p-0 rounded-xl bg-white/60 dark:bg-slate-900/60 lg:bg-transparent lg:dark:bg-transparent ${linkClass}`}>
                  <Instagram className="w-4 h-4 shrink-0 text-pink-500" />
                  <span>{INSTAGRAM_HANDLE}</span>
                </a>
              </li>
              <li className="sm:col-span-3 lg:col-span-1 flex items-center justify-center lg:justify-start gap-3 pt-1">
                <MapPin className="w-4 h-4 shrink-0 text-violet-600" />
                <span>Rio de Janeiro - RJ, Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="mt-12 pt-6 border-t border-violet-200 dark:border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm pb-20 sm:pb-0 sm:pr-20">
          <p className="text-center sm:text-left">&copy; {currentYear} ForgeDevApps. Todos os direitos reservados.</p>
          <a
            href="#"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-200 dark:border-slate-800 hover:border-violet-500 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
          >
            Voltar ao topo
            <ArrowUp className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
