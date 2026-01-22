import { useState } from "react";
import { Mail, MapPin, Phone, Send, Instagram, CheckCircle2, Loader2, AlertCircle } from "lucide-react";

// Tipo para os erros
type FormErrors = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  general?: string; // Para erro de conexão/servidor
};

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({}); // Estado para controlar erros visuais

  // Função que envia o formulário
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({}); // Limpa erros anteriores ao tentar enviar
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // --- ETAPA 1: VALIDAÇÃO VISUAL ---
    const newErrors: FormErrors = {};

    // Valida campos vazios
    if (!data.name) newErrors.name = "O nome é obrigatório.";
    if (!data.subject) newErrors.subject = "O assunto é obrigatório.";
    if (!data.message) newErrors.message = "A mensagem não pode estar vazia.";
    
    // Valida Email (Vazio e Formato)
    if (!data.email) {
      newErrors.email = "O email é obrigatório.";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email as string)) {
        newErrors.email = "Digite um email válido (ex: nome@gmail.com)";
      }
    }

    // Se houver erros, atualiza o estado e PARA TUDO (não envia)
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // --- ETAPA 2: ENVIO ---
    setIsSubmitting(true);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/forgeapps.faj@gmail.com`, {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...data,
          _template: "table",
          _captcha: "false"
        })
      });

      const result = await response.json();

      if (response.ok || result.success === "true") {
        setIsSuccess(true);
        form.reset();
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        setErrors({ general: "Erro no servidor. Tente enviar pelo WhatsApp." });
      }

    } catch (error) {
      // Erro de conexão (CORS ou falta de internet)
      console.error(error);
      setErrors({ general: "Houve um problema de conexão. Verifique sua internet ou chame no WhatsApp." });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Helper para classes de input (se tiver erro, borda vermelha)
  const getInputClass = (error?: string) => `
    w-full px-4 py-3 rounded-lg 
    bg-gray-50 dark:bg-slate-950 
    text-gray-900 dark:text-white 
    outline-none transition-all border
    ${error 
      ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200 dark:focus:ring-red-900/30' 
      : 'border-gray-200 dark:border-slate-700 focus:border-violet-600 focus:ring-2 focus:ring-violet-200 dark:focus:ring-violet-900'
    }
  `;

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

          {/* Formulário Funcional */}
          <form 
            onSubmit={handleSubmit}
            noValidate
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
              {/* NOME */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Nome <span className="text-violet-500">*</span>
                </label>
                <input 
                  name="name" type="text" id="name" placeholder="Seu nome"
                  // Se mudar o input, a gente poderia limpar o erro aqui, mas vamos manter simples
                  className={getInputClass(errors.name)}
                />
                {errors.name && <p className="mt-1 text-sm text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3"/> {errors.name}</p>}
              </div>

              {/* EMAIL */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email <span className="text-violet-500">*</span>
                </label>
                <input 
                  name="email" type="email" id="email" placeholder="seu@email.com"
                  className={getInputClass(errors.email)}
                />
                {errors.email && <p className="mt-1 text-sm text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3"/> {errors.email}</p>}
              </div>
            </div>

            {/* ASSUNTO */}
            <div className="mb-6">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Assunto <span className="text-violet-500">*</span>
              </label>
              <input 
                name="subject" type="text" id="subject" placeholder="Como podemos ajudar?"
                className={getInputClass(errors.subject)}
              />
              {errors.subject && <p className="mt-1 text-sm text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3"/> {errors.subject}</p>}
            </div>

            {/* MENSAGEM */}
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Mensagem <span className="text-violet-500">*</span>
              </label>
              <textarea 
                name="message" id="message" rows={4} placeholder="Conte sobre o seu projeto..."
                className={`${getInputClass(errors.message)} resize-none`}
              ></textarea>
              {errors.message && <p className="mt-1 text-sm text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3"/> {errors.message}</p>}
            </div>

            {/* MENSAGEM DE ERRO GERAL (Conexão) */}
            {errors.general && (
              <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-center gap-3 text-red-600 dark:text-red-300 text-sm">
                 <AlertCircle className="w-5 h-5 flex-shrink-0" />
                 {errors.general}
              </div>
            )}

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