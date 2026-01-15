import { Globe, Smartphone, Database, LayoutDashboard, Cloud, ShieldCheck } from "lucide-react";

const services = [
  { icon: <Globe className="w-10 h-10" />, title: "Desenvolvimento Web", description: "Sites institucionais, Landing Pages e aplicações web de alta performance." },
  { icon: <Smartphone className="w-10 h-10" />, title: "Aplicativos Mobile", description: "Apps nativos e híbridos para Android e iOS com React Native." },
  { icon: <Database className="w-10 h-10" />, title: "Sistemas Backend", description: "APIs robustas, integrações de banco de dados e arquitetura escalável." },
  { icon: <LayoutDashboard className="w-10 h-10" />, title: "Sistemas de Gestão", description: "Painéis administrativos personalizados para gerenciar seu negócio." },
  { icon: <Cloud className="w-10 h-10" />, title: "Cloud & DevOps", description: "Configuração de servidores e deploy automatizado." },
  { icon: <ShieldCheck className="w-10 h-10" />, title: "Consultoria em TI", description: "Análise técnica e modernização de sistemas legados." }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-transparent transition-colors">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
            Nossas Especialidades
          </h2>
          <div className="w-20 h-1.5 bg-violet-600 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto transition-colors">
            Soluções completas de ponta a ponta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-2xl bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 hover:border-violet-200 dark:hover:border-violet-900 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="mb-6 text-violet-600 bg-violet-50 dark:bg-slate-800 w-fit p-4 rounded-xl group-hover:bg-violet-600 group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}