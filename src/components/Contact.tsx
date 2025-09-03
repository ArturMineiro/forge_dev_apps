export default function Contact() {
  return (
    <section id="contact" className="container mx-auto py-16 px-6 text-center">
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
  );
}
