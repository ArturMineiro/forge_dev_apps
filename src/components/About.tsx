import { CheckCircle2, Zap, Users, Target } from "lucide-react";

export default function About() {
  return (
    // MUDANÇA: bg-transparent para aceitar o Amarelo/Dark global
    <section id="about" className="py-20 bg-transparent transition-colors">
      
      {/* Decoração sutil no fundo */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-violet-600/5 blur-[120px] -z-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-gray-900 dark:text-white transition-colors">
              Mais do que código, entregamos <span className="text-violet-600">resultados reais</span>.
            </h2>
            <p className="text-gray-600 dark:text-slate-400 text-lg mb-8 leading-relaxed transition-colors">
              A ForgeDevApps nasceu no Rio de Janeiro com a missão de modernizar o mercado digital. Não somos apenas desenvolvedores; somos parceiros estratégicos que entendem de negócio. Unimos design intuitivo com engenharia de software robusta.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Item 1 */}
              <div className="flex items-start gap-3 group">
                <div className="p-2 bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-transparent dark:border-slate-800 group-hover:bg-violet-100 dark:group-hover:bg-slate-800 transition-colors">
                  <Zap className="w-6 h-6 text-violet-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white transition-colors">Alta Performance</h4>
                  <p className="text-sm text-gray-600 dark:text-slate-400 transition-colors">Sites otimizados e velozes.</p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-start gap-3 group">
                 <div className="p-2 bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-transparent dark:border-slate-800 group-hover:bg-violet-100 dark:group-hover:bg-slate-800 transition-colors">
                  <Users className="w-6 h-6 text-violet-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white transition-colors">Foco no Usuário</h4>
                  <p className="text-sm text-gray-600 dark:text-slate-400 transition-colors">Interfaces limpas e fáceis.</p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-start gap-3 group">
                 <div className="p-2 bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-transparent dark:border-slate-800 group-hover:bg-violet-100 dark:group-hover:bg-slate-800 transition-colors">
                  <Target className="w-6 h-6 text-violet-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white transition-colors">Metodologia Ágil</h4>
                  <p className="text-sm text-gray-600 dark:text-slate-400 transition-colors">Entregas rápidas e constantes.</p>
                </div>
              </div>

              {/* Item 4 */}
              <div className="flex items-start gap-3 group">
                 <div className="p-2 bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-transparent dark:border-slate-800 group-hover:bg-violet-100 dark:group-hover:bg-slate-800 transition-colors">
                  <CheckCircle2 className="w-6 h-6 text-violet-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white transition-colors">Código Limpo</h4>
                  <p className="text-sm text-gray-600 dark:text-slate-400 transition-colors">Manutenção simplificada.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white dark:border-slate-800 group">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop" 
                alt="Equipe trabalhando" 
                className="w-full h-full object-cover opacity-90 dark:opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-50/50 via-transparent to-transparent dark:from-slate-950 dark:via-transparent"></div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-900 p-6 rounded-xl shadow-xl border border-gray-100 dark:border-slate-800 hidden md:block animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <p className="text-4xl font-bold text-violet-600 mb-1">+50</p>
              <p className="text-sm text-gray-600 dark:text-slate-300">Projetos Entregues</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}