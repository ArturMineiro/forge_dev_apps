import { Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Função para rolar suavemente para o topo
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-violet-100 dark:bg-slate-950 text-gray-600 dark:text-slate-300 py-12 border-t border-violet-200 dark:border-slate-900 transition-colors">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          
          {/* LOGO AGORA É UM LINK PARA O TOPO */}
          <a 
            href="#" 
            onClick={scrollToTop}
            className="flex items-center gap-3 mb-4 md:mb-0 group cursor-pointer"
          >
            <img src="/logo_forge.png" alt="Logo ForgeDevApps" className="w-10 h-10 object-contain group-hover:scale-105 transition-transform" />
            <span className="text-2xl font-bold text-gray-800 dark:text-white tracking-tight transition-colors">
              Forge<span className="text-violet-600">Dev</span>Apps
            </span>
          </a>

          <div className="flex gap-6">
            <a 
              href="https://www.instagram.com/forgedevapps/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-violet-600 transition-colors duration-300"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="border-t border-violet-200 dark:border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {currentYear} ForgeDevApps. Todos os direitos reservados.</p>
          <div className="flex gap-2 items-center mt-4 md:mt-0">
             <span>Rio de Janeiro - RJ 🇧🇷</span>
          </div>
        </div>
      </div>
    </footer>
  );
}