import { WHATSAPP_LINK } from "../config/contact";
import WhatsAppIcon from "./WhatsAppIcon";

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 sm:bottom-6 sm:right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:bg-[#20ba5a] hover:scale-110 transition-all duration-300 group"
      aria-label="Falar no WhatsApp"
    >
      {/* Círculo de Ping */}
      <span
        className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping group-hover:animate-none motion-reduce:animate-none"
        style={{ animationDuration: "2.5s" }}
      ></span>

      <WhatsAppIcon className="relative w-8 h-8 text-white" />
    </a>
  );
}
