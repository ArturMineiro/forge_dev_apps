import Navbar from "./components/Navbar";
import "./index.css";

export default function App() {
  return (
    <>
      <a href="#services" id="top" className="sr-only">Topo</a>
      <Navbar />

      <section className="mx-auto max-w-7xl px-4 md:px-6 py-8">
        <div className="p-4 rounded-xl bg-brand text-white mb-3">brand</div>
        <div className="p-4 rounded-xl border border-brand text-brand mb-3">brand outline</div>
        <button className="px-4 py-2 rounded-lg bg-accent text-white hover:bg-accent-600 transition">
          CTA accent
        </button>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-4 md:px-6 py-20">
        <h3 className="text-2xl font-bold mb-6">Serviços</h3>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-4 md:px-6 py-20">
        <h3 className="text-2xl font-bold mb-6">Sobre</h3>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-4 md:px-6 py-20">
        <h3 className="text-2xl font-bold mb-6">Contato</h3>
      </section>
    </>
  );
}
