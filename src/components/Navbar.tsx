import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed w-full top-0 left-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-sm border-b border-gray-100 dark:border-slate-800 transition-colors duration-300">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        
        {/* Logo usando o arquivo SVG */}
        <div className="flex items-center gap-3">
          <img src="/favicon.svg" alt="Logo ForgeDevApps" className="w-10 h-10" />
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white tracking-tight">
            Forge<span className="text-violet-600">Dev</span>Apps
          </h1>
        </div>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex space-x-8 font-medium text-gray-600 dark:text-gray-300">
            <li><a href="#services" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Serviços</a></li>
            <li><a href="#portfolio" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Portfólio</a></li>
            <li><a href="#about" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Sobre</a></li>
          </ul>

          <div className="flex items-center gap-4">
            <a 
              href="#contact" 
              className="px-5 py-2.5 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors shadow-md shadow-violet-200 dark:shadow-none font-medium"
            >
              Fale Conosco
            </a>
            
            {/* Botão de Troca de Tema (Sol/Lua/Auto) */}
            <ThemeToggle />
          </div>
        </div>

        {/* Botão Sanduíche (Mobile) */}
        <button className="md:hidden text-gray-700 dark:text-gray-200" onClick={toggleMenu}>
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </nav>

      {/* Menu Mobile (Dropdown) */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-slate-800 shadow-lg flex flex-col items-center py-6 space-y-6 animate-in slide-in-from-top-5">
          <a href="#services" className="text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-violet-600 dark:hover:text-violet-400" onClick={toggleMenu}>Serviços</a>
          <a href="#portfolio" className="text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-violet-600 dark:hover:text-violet-400" onClick={toggleMenu}>Portfólio</a>
          <a href="#about" className="text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-violet-600 dark:hover:text-violet-400" onClick={toggleMenu}>Sobre</a>
          
          <div className="flex flex-col items-center gap-4 w-full">
            <a href="#contact" className="px-6 py-3 bg-violet-600 text-white rounded-lg w-3/4 text-center font-bold" onClick={toggleMenu}>
              Fale Conosco
            </a>
            
            {/* Theme Toggle no Mobile também */}
            <div className="mt-2">
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}