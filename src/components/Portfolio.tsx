import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "OmniDex Collections",
    description: "Plataforma completa para gerenciamento de coleções pessoais com sistema de busca avançada.",
    tags: ["React", "Node.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=1000&auto=format&fit=crop",
    link: "#",
  },
  {
    title: "Garagem Conectada",
    description: "Sistema estilo Airbnb para aluguel de vagas de garagem, com geolocalização e pagamentos.",
    tags: ["Laravel", "React", "Maps API"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1000&auto=format&fit=crop",
    link: "#",
  },
  {
    title: "E-commerce Forge",
    description: "Loja virtual de alta performance com dashboard administrativo e integração de pagamentos.",
    tags: ["Next.js", "Stripe", "Tailwind"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
    link: "#",
  },
];

export default function Portfolio() {
  return (
    // MUDANÇA: bg-transparent para aceitar o fundo global (Amarelo ou Dark)
    <section id="portfolio" className="py-20 bg-transparent transition-colors">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
            Projetos Entregues
          </h2>
          <div className="w-20 h-1.5 bg-violet-600 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto transition-colors">
            Conheça alguns dos sistemas e soluções que desenvolvemos para nossos clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              // MUDANÇA: Card com fundo branco no Light e Slate-900 no Dark
              className="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-slate-800 hover:border-violet-200 dark:hover:border-violet-900 flex flex-col"
            >
              {/* Imagem do Projeto */}
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-violet-900/0 group-hover:bg-violet-900/10 transition-colors duration-300"></div>
              </div>

              {/* Conteúdo */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-1 transition-colors">
                  {project.description}
                </p>

                {/* Tags Adaptáveis */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 text-xs font-semibold rounded-full border border-violet-200 dark:border-violet-700/50 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Botão de Ação */}
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 border border-gray-200 dark:border-slate-700 rounded-lg text-gray-700 dark:text-gray-200 font-medium hover:bg-violet-600 hover:text-white hover:border-violet-600 dark:hover:border-violet-600 transition-all duration-300 shadow-sm"
                >
                  Acessar Projeto
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}