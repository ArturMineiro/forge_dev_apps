import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center gap-1 bg-gray-100 dark:bg-slate-800 p-1 rounded-full border border-gray-200 dark:border-slate-700">
      <button
        onClick={() => setTheme("light")}
        className={`p-1.5 rounded-full transition-all ${
          theme === "light" 
            ? "bg-white text-yellow-500 shadow-sm" 
            : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
        }`}
        title="Modo Claro"
      >
        <Sun className="w-4 h-4" />
      </button>
      
      <button
        onClick={() => setTheme("system")}
        className={`p-1.5 rounded-full transition-all ${
          theme === "system" 
            ? "bg-white dark:bg-slate-600 text-violet-600 dark:text-white shadow-sm" 
            : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
        }`}
        title="Automático"
      >
        <Monitor className="w-4 h-4" />
      </button>

      <button
        onClick={() => setTheme("dark")}
        className={`p-1.5 rounded-full transition-all ${
          theme === "dark" 
            ? "bg-slate-600 text-violet-400 shadow-sm" 
            : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
        }`}
        title="Modo Escuro"
      >
        <Moon className="w-4 h-4" />
      </button>
    </div>
  );
}