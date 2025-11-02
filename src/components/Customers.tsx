import espacoLiliTatah from "../assets/images/espacolilitatah.jpeg";

export default function Customers() {
  const clients = [
    {
      name: "Espaço LiliTatah",
      image: espacoLiliTatah,
      url: "https://lilitatah.forgedevapps.com/",
    },
    {
      name: "FitLife",
      image: "https://via.placeholder.com/150x80?text=FitLife",
      url: "https://fitlife.com.br",
    },
  ];

  return (
    <section id="customers" className="bg-white py-16 px-6">
      <div className="container mx-auto text-center max-w-5xl">
        <h3 className="text-3xl font-bold mb-10">Nossos Clientes</h3>
        <p className="mb-12 text-gray-600">
          Orgulhosamente, colaboramos com marcas incríveis que confiam na{" "}
          <span className="font-semibold text-indigo-600">ForgeDevApps</span>{" "}
          para desenvolver suas soluções digitais.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
          {clients.map((client, index) => (
            <a
              key={index}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group hover:scale-105 transition-transform duration-300"
            >
              <div className="bg-gray-100 rounded-xl shadow-sm hover:shadow-md p-6 flex items-center justify-center h-32">
                <img
                  src={client.image}
                  alt={client.name}
                  className="max-h-16 object-contain grayscale group-hover:grayscale-0 transition-all"
                />
              </div>
              <p className="mt-3 text-sm font-medium text-gray-700 group-hover:text-indigo-600">
                {client.name}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
