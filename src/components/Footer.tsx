import React from 'react';
import { Mail, Phone, MapPin, Clock, ArrowUp, Instagram, Sparkles } from 'lucide-react';
import { Language } from '../types/clinic';
import { CLINIC_CONTACT, DOCTOR_INFO } from '../data/clinicData';
import { TRANSLATIONS } from '../data/translations';

interface FooterProps {
  language: Language;
}

export const Footer: React.FC<FooterProps> = ({ language }) => {
  const t = TRANSLATIONS[language];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { href: '#about', label: t.navAbout },
    { href: '#doctor', label: t.navDoctor },
    { href: '#care', label: t.navCare },
    { href: '#facilities', label: t.navFacilities },
    { href: '#self-check', label: t.navSelfCheck },
    { href: '#approach', label: t.navApproach },
    { href: '#faq', label: t.navFaq },
    { href: '#visit', label: t.navVisit },
  ];

  return (
    <footer className="bg-teal-brand text-teal-100 pt-16 pb-12 relative overflow-hidden border-t border-teal-900/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-teal-800/60">
          {/* Brand & Doctor Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-gold-400 bg-white">
                <img
                  src="/images/omed_logo.jpeg"
                  alt="UMED Logo"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold tracking-wider text-white">
                  UMED
                </h3>
                <p className="text-xs text-gold-400 font-semibold uppercase tracking-widest font-marathi">
                  {language === 'mr' ? 'सेंटर फॉर मेंटल हेल्थ · लातूर' : 'Centre For Mental Health · Latur'}
                </p>
              </div>
            </div>

            <p className="text-sm font-marathi text-gold-300 font-bold">
              “निरोगी मन, आनंदी जीवन”
            </p>

            <p className="text-xs text-teal-200/90 leading-relaxed max-w-sm">
              {language === 'mr'
                ? 'डॉ. श्रद्धा (नितूरे) पत्रिके (MBBS, DPM) यांच्या मार्गदर्शनाखाली चालवले जाणारे लातूरमधील अग्रगण्य व विश्वासार्ह मानसोपचार केंद्र.'
                : 'Led by Consultant Psychiatrist Dr. Shradha (Niture) Patrike (MBBS, DPM). Providing confidential, dignified psychiatric care, diagnostics, and counseling.'}
            </p>

            <div className="pt-2 text-xs text-teal-300 space-y-1">
              <p className="font-semibold text-white">
                {language === 'mr' ? DOCTOR_INFO.nameMr : DOCTOR_INFO.nameEn}
              </p>
              <p>{language === 'mr' ? DOCTOR_INFO.degreesMr : DOCTOR_INFO.degreesEn}</p>
            </div>
          </div>

          {/* Quick Navigation Col */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gold-400">
              {language === 'mr' ? 'जलद दुवे' : 'Quick Navigation'}
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-xs font-medium text-teal-200">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-white hover:underline transition-colors block py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gold-400">
              {language === 'mr' ? 'थेट संपर्क व पत्ता' : 'Clinic Contact & Location'}
            </h4>
            <div className="space-y-3 text-xs text-teal-200 leading-normal">
              <div className="flex items-start gap-2.5">
                <MapPin size={15} className="text-gold-400 shrink-0 mt-0.5" />
                <span>{CLINIC_CONTACT.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone size={15} className="text-gold-400 shrink-0" />
                <div className="flex gap-2">
                  <a href={`tel:${CLINIC_CONTACT.phone1Raw}`} className="hover:text-white font-semibold">
                    {CLINIC_CONTACT.phone1}
                  </a>
                  <span>/</span>
                  <a href={`tel:${CLINIC_CONTACT.phone2Raw}`} className="hover:text-white font-semibold">
                    {CLINIC_CONTACT.phone2}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail size={15} className="text-gold-400 shrink-0" />
                <a href={`mailto:${CLINIC_CONTACT.email}`} className="hover:text-white">
                  {CLINIC_CONTACT.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock size={15} className="text-gold-400 shrink-0 mt-0.5" />
                <span>{CLINIC_CONTACT.hoursWeekday}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Boostimize Credit & Scroll to Top */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-teal-300">
          <p>© {new Date().getFullYear()} UMED Centre For Mental Health, Latur. {t.footerRights}</p>

          {/* Boostimize Attribution Link */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs">
            <Sparkles size={13} className="text-gold-400 shrink-0" />
            <span className="text-teal-200">Created By</span>
            <a
              href="https://www.instagram.com/boostimize.media/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-bold text-gold-400 hover:text-white transition-colors duration-200 group"
            >
              <Instagram size={13} className="text-gold-400 group-hover:scale-110 transition-transform" />
              <span className="underline underline-offset-2">Boostimize</span>
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors btn-interactive"
            aria-label="Scroll back to top"
          >
            <span>{language === 'mr' ? 'वर जा' : 'Back To Top'}</span>
            <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
};
