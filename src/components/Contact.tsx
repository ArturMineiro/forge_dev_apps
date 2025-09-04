import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm(
        "service_lz3if7u", // seu Service ID
        "template_yzp1ytd", // ID do template criado no EmailJS
        form.current,
        "KqVaPQKagljnVi_8l" // sua Public Key do EmailJS
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Mensagem enviada com sucesso!");
          form.current?.reset();
        },
        (error) => {
          console.log(error.text);
          setStatus("Erro ao enviar a mensagem.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="container mx-auto py-20 px-6 text-center bg-gradient-to-b from-gray-50 to-gray-100"
    >
      <h3 className="text-4xl font-extrabold mb-6 text-gray-900">
        Entre em Contato
      </h3>
      <p className="mb-8 text-lg text-gray-700">
        Quer discutir um projeto? Envie uma mensagem!
      </p>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-lg mx-auto flex flex-col gap-5"
      >
        <input
          type="text"
          name="user_name"
          placeholder="Seu Nome"
          className="p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 transition"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Seu Email"
          className="p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 transition"
        />
        <textarea
          name="message"
          placeholder="Sua Mensagem"
          rows={5}
          className="p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 transition resize-none"
        />
        <button
          type="submit"
          className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 active:scale-95 transition-transform"
        >
          Enviar
        </button>
      </form>

      {status && <p className="mt-6 text-green-600 font-medium">{status}</p>}
    </section>
  );
}
