function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
      {/* Navbar */}
      <header className="bg-white shadow-md">
        <nav className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-2xl font-bold text-primary">ForgeDevApps</h1>
          <ul className="flex space-x-6">
            <li>
              <a href="#services" className="hover:text-primary">
                Serviços
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-primary">
                Sobre
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-primary">
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
          Desenvolvimento de Softwares Sob Medida 🚀
        </h2>
        <p className="text-lg md:text-xl mb-6 max-w-2xl">
          Criamos soluções digitais modernas, rápidas e escaláveis para
          potencializar o crescimento da sua empresa.
        </p>
        <a
          href="#contact"
          className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-200 transition"
        >
          Fale Conosco
        </a>
      </section>

      {/* Serviços */}
      <section id="services" className="container mx-auto py-16 px-6">
        <h3 className="text-3xl font-bold text-center mb-12">
          Nossos Serviços
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-2">Web Apps</h4>
            <p>
              Desenvolvimento de aplicações web modernas com React, Node e
              tecnologias de ponta.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-2">Mobile</h4>
            <p>
              Criação de aplicativos móveis híbridos e nativos para Android e
              iOS.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-2">
              Sistemas Personalizados
            </h4>
            <p>
              Soluções sob medida para automatizar processos e escalar seu
              negócio.
            </p>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="about" className="bg-gray-100 py-16 px-6">
        <div className="container mx-auto text-center max-w-3xl">
          <h3 className="text-3xl font-bold mb-6">Sobre Nós</h3>
          <p>
            Na <span className="font-bold">ForgeDevApps</span>, acreditamos em
            transformar ideias em soluções digitais de impacto. Nossa equipe é
            apaixonada por tecnologia e inovação, sempre focada em entregar
            qualidade e resultados.
          </p>
        </div>
      </section>

      {/* Contato */}
      <section
        id="contact"
        className="container mx-auto py-16 px-6 text-center"
      >
        <h3 className="text-3xl font-bold mb-6">Entre em Contato</h3>
        <p className="mb-6">Quer discutir um projeto? Envie uma mensagem!</p>
        <form className="max-w-lg mx-auto flex flex-col gap-4">
          <input
            type="text"
            placeholder="Seu Nome"
            className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            type="email"
            placeholder="Seu Email"
            className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <textarea
            placeholder="Sua Mensagem"
            rows={4}
            className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
          >
            Enviar
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6 mt-12">
        <p>
          © {new Date().getFullYear()} ForgeDevApps. Todos os direitos
          reservados.
        </p>
      </footer>
    </div>
  );
}

export default App;
