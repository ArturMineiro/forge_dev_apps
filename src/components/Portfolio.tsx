import { ExternalLink } from "lucide-react";
import Carousel from "./Carousel";

const projects = [
  {
    title: "Bateu a Fome",
    description: "SaaS de cardápio online para quem vende comida pelo WhatsApp: o lojista monta a loja em minutos e o pedido chega pronto no WhatsApp, sem comissão.",
    tags: ["React", "Vite", "SaaS", "WhatsApp"],
    image: "/bateuafome.webp",
    link: "https://bateuafomeapp.forgedevapps.com/",
  },
  {
    title: "Afinances",
    description: "Controle financeiro pessoal com contas a pagar, a receber e saldo previsto. Gráficos, exportação para Excel e instalável como app.",
    tags: ["React", "Vite", "PWA", "Recharts"],
    image: "/afinances-cover.webp",
    link: "https://afinances.forgedevapps.com/",
  },
  {
    title: "RouteFlow",
    description: "Plataforma SaaS para gestão de equipes de campo: rotas, agenda, visitas com fotos, cartas de autorização, despesas e relatórios — no computador e no celular.",
    tags: ["React", "Vite", "PWA", "SaaS"],
    image: "/routeflow.webp",
    link: "https://routeflow.forgedevapps.com/",
  },
  {
    title: "Steak Burger",
    description: "Cardápio digital para hamburgueria artesanal: busca por itens, categorias, preços atualizados e cardápio em PDF para download.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/steakburger.webp",
    link: "https://steakburger.forgedevapps.com/",
  },
  {
    title: "Clínica Lilitathá",
    description: "Site institucional para clínica de fisioterapia e reabilitação. Foco em transmitir confiança, com apresentação de equipe e serviços.",
    tags: ["React", "TypeScript", "Tailwind", "Vite"],
    image: "/lilitatah.webp",
    link: "https://lilitatah.forgedevapps.com/",
  },
  {
    title: "Leni Manicure",
    description: "Plataforma de beleza para agendamentos e portfólio. Interface elegante para realçar o cuidado e a arte das unhas.",
    tags: ["React", "TypeScript", "Tailwind", "Vite"],
    image: "/leni_manicure.webp",
    link: "https://leni-manicure.forgedevapps.com/",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="scroll-mt-24 py-16 sm:py-20 bg-transparent transition-colors">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
            Projetos Entregues
          </h2>
          <div className="w-20 h-1.5 bg-violet-600 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto transition-colors">
            Conheça alguns dos sistemas e soluções que desenvolvemos para nossos clientes.
          </p>
        </div>

        <Carousel label="Projetos entregues">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-slate-800 hover:border-violet-200 dark:hover:border-violet-900 flex flex-col"
            >
              {/* Imagem do Projeto */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block aspect-[16/10] overflow-hidden relative bg-gray-100 dark:bg-slate-800"
                tabIndex={-1}
              >
                <img
                  src={project.image}
                  alt={`Tela do projeto ${project.title}`}
                  loading="lazy"
                  decoding="async"
                  width={960}
                  height={600}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-violet-900/0 group-hover:bg-violet-900/10 transition-colors duration-300"></div>
              </a>

              {/* Conteúdo */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-1 transition-colors">
                  {project.description}
                </p>

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
            </article>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
