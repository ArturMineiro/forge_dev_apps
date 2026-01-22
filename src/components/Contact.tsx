import { useState } from "react";
import { Mail, MapPin, Phone, Send, Instagram, CheckCircle2, Loader2 } from "lucide-react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Função que envia o formulário
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    
    // Transforma os dados em objeto JSON
    const data = Object.fromEntries(formData.entries());

    try {
      // MUDANÇA: URL do FormSubmit com seu e-mail real
      const response = await fetch("https://formsubmit.co/ajax/forgeapps.faj@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...data,
          _subject: `Novo Contato do Site: ${data.name}`, // Assunto do email
          _template: "table", // Formato bonitinho de tabela
          _captcha: "false" // Desativa o captcha chato (opcional)
        })
      });

      if (response.ok) {
        setIsSuccess(true);
        e.currentTarget.reset(); // Limpa o formulário
        
        // Remove a mensagem de sucesso após 5 segundos
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        alert("Ocorreu um erro ao enviar. Tente novamente pelo WhatsApp.");
      }
    } catch (error) {
      alert("Erro de conexão. Verifique sua internet.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-transparent transition-colors">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
            Vamos Conversar?
          </h2>
          <div className="w-20 h-1.5 bg-violet-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Informações de Contato */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white transition-colors">Entre em contato</h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg transition-colors">
              Tem uma ideia incrível? Estamos prontos para transformar sua visão em realidade.
            </p>
            
            <div className="space-y-6">
              {/* Localização */}
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-violet-100 dark:bg-slate-800 text-violet-600 rounded-lg">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Localização</h4>
                  <p className="text-gray-600 dark:text-gray-400">Rio de Janeiro - RJ, Brasil</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-violet-100 dark:bg-slate-800 text-violet-600 rounded-lg">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Email</h4>
                  <p className="text-gray-600 dark:text-gray-400">forgeapps.faj@gmail.com</p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-violet-100 dark:bg-slate-800 text-violet-600 rounded-lg">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">WhatsApp</h4>
                  <p className="text-gray-600 dark:text-gray-400">(21) 99301-5515</p>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-violet-100 dark:bg-slate-800 text-violet-600 rounded-lg">
                  <Instagram className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Instagram</h4>
                  <a 
                    href="https://www.instagram.com/forgedevapps/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors font-medium"
                  >
                    @forgedevapps
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Formulário Funcional com formsubmit.co */}
          <form 
            onSubmit={handleSubmit}
            className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-800 transition-colors relative overflow-hidden"
          >
            {/* Feedback de Sucesso */}
            {isSuccess && (
              <div className="absolute inset-0 bg-white/95 dark:bg-slate-900/95 flex flex-col items-center justify-center z-10 animate-in fade-in zoom-in">
                <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Mensagem Enviada!</h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">Em breve entraremos em contato.</p>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Nome</label>
                <input 
                  required
                  name="name"
                  type="text" id="name" placeholder="Seu nome"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-slate-950 border border-gray-200 dark:border-slate-700 text-gray-900 dark:text-white focus:border-violet-600 focus:ring-2 focus:ring-violet-200 dark:focus:ring-violet-900 outline-none transition-all"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                <input 
                  required
                  name="email"
                  type="email" id="email" placeholder="seu@email.com"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-slate-950 border border-gray-200 dark:border-slate-700 text-gray-900 dark:text-white focus:border-violet-600 focus:ring-2 focus:ring-violet-200 dark:focus:ring-violet-900 outline-none transition-all"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Assunto</label>
              <input 
                required
                name="subject"
                type="text" id="subject" placeholder="Como podemos ajudar?"
                className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-slate-950 border border-gray-200 dark:border-slate-700 text-gray-900 dark:text-white focus:border-violet-600 focus:ring-2 focus:ring-violet-200 dark:focus:ring-violet-900 outline-none transition-all"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Mensagem</label>
              <textarea 
                required
                name="message"
                id="message" rows={4} placeholder="Conte sobre o seu projeto..."
                className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-slate-950 border border-gray-200 dark:border-slate-700 text-gray-900 dark:text-white focus:border-violet-600 focus:ring-2 focus:ring-violet-200 dark:focus:ring-violet-900 outline-none transition-all resize-none"
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`w-full py-4 bg-violet-600 text-white font-bold rounded-xl hover:bg-violet-700 transition-colors shadow-lg shadow-violet-200 dark:shadow-none flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  Enviar Mensagem
                  <Send className="w-5 h-5" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}