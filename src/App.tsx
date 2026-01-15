import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Service";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      {/* ESTRUTURA GLOBAL DE CORES:
          Light Mode: bg-amber-50 (Amarelo Creme Suave) + Texto Cinza Escuro
          Dark Mode: bg-slate-950 (Azul Noturno) + Texto Branco
      */}
      <div className="relative min-h-screen transition-colors duration-500 ease-in-out bg-amber-50 dark:bg-slate-950 text-gray-800 dark:text-gray-100 pt-20 overflow-x-hidden">
        
        {/* EFEITO BLOB (Apenas no Dark Mode) */}
        <div className="fixed inset-0 z-0 pointer-events-none hidden dark:block">
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-600/20 blur-[120px] rounded-full mix-blend-screen animate-pulse"></div>
           <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full mix-blend-screen"></div>
        </div>

        {/* Conteúdo */}
        <div className="relative z-10">
          <Navbar />
          <Hero />
          <Services />
          <Portfolio />
          <About />
          <Contact />
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;