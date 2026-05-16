import { Phone, MessageCircle } from "lucide-react";
import { COMPANY_DETAILS } from "../constants";
import { motion } from "motion/react";

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-4">
      {/* WhatsApp Button */}
      <motion.a
        href={`https://wa.me/91${COMPANY_DETAILS.whatsapp}`}
        target="_blank"
        rel="noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 group relative"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute right-full mr-4 bg-white text-slate-900 px-3 py-1 rounded-lg text-sm font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden sm:block pointer-events-none">
          Chat with us
        </span>
      </motion.a>

      {/* Call Button */}
      <motion.a
        href={`tel:${COMPANY_DETAILS.callNow}`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-primary text-secondary rounded-full flex items-center justify-center shadow-lg shadow-primary/30 group relative"
      >
        <Phone className="w-7 h-7" />
        <span className="absolute right-full mr-4 bg-white text-slate-900 px-3 py-1 rounded-lg text-sm font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden sm:block pointer-events-none">
          Call Now
        </span>
      </motion.a>
    </div>
  );
}
