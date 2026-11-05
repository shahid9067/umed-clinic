import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Language } from '../types/clinic';
import { CLINIC_CONTACT } from '../data/clinicData';

interface WhatsAppFloatProps {
  language: Language;
}

export const WhatsAppFloat: React.FC<WhatsAppFloatProps> = ({ language }) => {
  const defaultMessage = encodeURIComponent(
    'Hello UMED Clinic, I would like to enquire about a consultation with Dr. Shradha.'
  );

  const whatsappUrl = `${CLINIC_CONTACT.whatsappBaseUrl}?text=${defaultMessage}`;

  return (
    <aside aria-label="WhatsApp Quick Contact">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex items-center gap-2.5 pl-3.5 pr-4 py-2.5 rounded-full bg-[#25d366] hover:bg-[#20ba5a] text-white shadow-premium hover:shadow-2xl transition-all duration-300 hover:scale-105 group animate-pulse-ring"
        aria-label="Chat with UMED Clinic on WhatsApp"
      >
        <span className="relative flex h-8 w-8 items-center justify-center">
          <MessageCircle size={24} className="relative z-10 transition-transform duration-300 group-hover:scale-110" />
        </span>
        <span className="hidden sm:inline-block text-xs font-bold tracking-wide">
          {language === 'mr' ? 'व्हॉट्सअ‍ॅपवर बोला' : 'Chat on WhatsApp'}
        </span>
      </a>
    </aside>
  );
};
