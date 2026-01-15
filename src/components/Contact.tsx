import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function Contact() {
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
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-violet-100 dark:bg-slate-800 text-violet-600 rounded-lg">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Localização</h4>
                  <p className="text-gray-600 dark:text-gray-400">Rio de Janeiro - RJ, Brasil</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-violet-100 dark:bg-slate-800 text-violet-600 rounded-lg">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Email</h4>
                  <p className="text-gray-600 dark:text-gray-400">forgeapps.faj@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-violet-100 dark:bg-slate-800 text-violet-600 rounded-lg">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">WhatsApp</h4>
                  <p className="text-gray-600 dark:text-gray-400">(21) 99999-9999</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulário */}
          <form className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-800 transition-colors">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Nome</label>
                <input 
                  type="text" id="name" placeholder="Seu nome"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-slate-950 border border-gray-200 dark:border-slate-700 text-gray-900 dark:text-white focus:border-violet-600 focus:ring-2 focus:ring-violet-200 dark:focus:ring-violet-900 outline-none transition-all"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                <input 
                  type="email" id="email" placeholder="seu@email.com"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-slate-950 border border-gray-200 dark:border-slate-700 text-gray-900 dark:text-white focus:border-violet-600 focus:ring-2 focus:ring-violet-200 dark:focus:ring-violet-900 outline-none transition-all"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Assunto</label>
              <input 
                type="text" id="subject" placeholder="Como podemos ajudar?"
                className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-slate-950 border border-gray-200 dark:border-slate-700 text-gray-900 dark:text-white focus:border-violet-600 focus:ring-2 focus:ring-violet-200 dark:focus:ring-violet-900 outline-none transition-all"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Mensagem</label>
              <textarea 
                id="message" rows={4} placeholder="Conte sobre o seu projeto..."
                className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-slate-950 border border-gray-200 dark:border-slate-700 text-gray-900 dark:text-white focus:border-violet-600 focus:ring-2 focus:ring-violet-200 dark:focus:ring-violet-900 outline-none transition-all resize-none"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full py-4 bg-violet-600 text-white font-bold rounded-xl hover:bg-violet-700 transition-colors shadow-lg shadow-violet-200 dark:shadow-none flex items-center justify-center gap-2"
            >
              Enviar Mensagem
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}