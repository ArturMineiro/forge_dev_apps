export default function Services() {
  return (
    <section id="services" className="container mx-auto py-16 px-6">
      <h3 className="text-3xl font-bold text-center mb-12">Nossos Serviços</h3>
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
            Criação de aplicativos móveis híbridos e nativos para Android e iOS.
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
  );
}
