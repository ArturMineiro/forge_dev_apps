import { CheckCircle2, Zap, Users, Target } from "lucide-react";

export default function About() {
  return (
    // MUDANÇA AQUI: bg-slate-950 (Azul Noturno Profundo) em vez de gray-900
    <section id="about" className="py-20 bg-slate-950 text-white relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-violet-600/10 blur-[120px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Mais do que código, entregamos <span className="text-violet-600">resultados reais</span>.
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              A ForgeDevApps nasceu no Rio de Janeiro com a missão de modernizar o mercado digital. Não somos apenas desenvolvedores; somos parceiros estratégicos que entendem de negócio. Unimos design intuitivo com engenharia de software robusta.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3 group">
                {/* Cards internos agora são Slate-900 para destacar sutilmente do fundo */}
                <div className="p-2 bg-slate-900 rounded-lg group-hover:bg-violet-600/20 transition-colors">
                  <Zap className="w-6 h-6 text-violet-600" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Alta Performance</h4>
                  <p className="text-sm text-slate-400">Sites otimizados e velozes.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                 <div className="p-2 bg-slate-900 rounded-lg group-hover:bg-violet-600/20 transition-colors">
                  <Users className="w-6 h-6 text-violet-600" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Foco no Usuário</h4>
                  <p className="text-sm text-slate-400">Interfaces limpas e fáceis.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                 <div className="p-2 bg-slate-900 rounded-lg group-hover:bg-violet-600/20 transition-colors">
                  <Target className="w-6 h-6 text-violet-600" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Metodologia Ágil</h4>
                  <p className="text-sm text-slate-400">Entregas rápidas e constantes.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                 <div className="p-2 bg-slate-900 rounded-lg group-hover:bg-violet-600/20 transition-colors">
                  <CheckCircle2 className="w-6 h-6 text-violet-600" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Código Limpo</h4>
                  <p className="text-sm text-slate-400">Manutenção simplificada.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-800 group">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop" 
                alt="Equipe trabalhando" 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-slate-900 p-6 rounded-xl shadow-xl border border-slate-800 hidden md:block animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <p className="text-4xl font-bold text-violet-600 mb-1">+50</p>
              <p className="text-sm text-slate-300">Projetos Entregues</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}