export default function Hero() {
  return (
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
  );
}
