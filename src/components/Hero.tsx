import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-14 pb-16 sm:pt-24 sm:pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        
        {/* Badge / Etiqueta */}
        <span className="inline-block py-1 px-3 rounded-full bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300 text-sm font-medium mb-6 border border-violet-200 dark:border-violet-700/50">
          Inovação em cada linha de código
        </span>
        
        {/* Título Principal */}
        <h1 className="text-[2rem] leading-tight sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight leading-tight text-gray-900 dark:text-white transition-colors">
          Transformamos Ideias em <br className="hidden sm:block" />{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-indigo-400">
            Sistemas Poderosos
          </span>
        </h1>
        
        {/* Subtítulo */}
        <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed transition-colors">
          Desenvolvimento de sites, aplicativos e sistemas sob medida para escalar o seu negócio com a tecnologia mais moderna do mercado.
        </p>
        
        {/* Botões de Ação */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center max-w-sm sm:max-w-none mx-auto">
          <a
            href="#contact"
            className="px-8 py-4 bg-violet-600 text-white font-bold rounded-xl shadow-lg hover:bg-violet-700 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
          >
            Orçar meu Projeto
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#portfolio"
            className="px-8 py-4 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-700 dark:text-white font-semibold rounded-xl text-center hover:bg-gray-50 dark:hover:bg-slate-700 transition-all duration-300 shadow-sm"
          >
            Ver Portfólio
          </a>
        </div>
      </div>
    </section>
  );
}