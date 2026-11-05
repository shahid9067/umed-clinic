import React, { useState, useEffect } from 'react';
import { Phone, Calendar, MoreVertical, X, Globe, ArrowUpRight, MapPin, Clock } from 'lucide-react';
import { Language } from '../types/clinic';
import { TRANSLATIONS } from '../data/translations';
import { CLINIC_CONTACT } from '../data/clinicData';

interface HeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  onOpenBooking: (serviceId?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ language, setLanguage, onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const t = TRANSLATIONS[language];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section scrollspy
      const sections = ['home', 'about', 'doctor', 'care', 'facilities', 'self-check', 'approach', 'faq', 'visit'];
      const scrollPosition = window.scrollY + 140;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: '#about', label: t.navAbout, id: 'about' },
    { href: '#doctor', label: t.navDoctor, id: 'doctor' },
    { href: '#care', label: t.navCare, id: 'care' },
    { href: '#facilities', label: t.navFacilities, id: 'facilities' },
    { href: '#self-check', label: t.navSelfCheck, id: 'self-check' },
    { href: '#approach', label: t.navApproach, id: 'approach' },
    { href: '#faq', label: t.navFaq, id: 'faq' },
    { href: '#visit', label: t.navVisit, id: 'visit' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 lg:px-8 pt-2.5 sm:pt-4 transition-all duration-300 anim-entrance-down">
      <div className="mx-auto max-w-7xl relative">
        <div
          className={`rounded-full border transition-all duration-300 ${
            isScrolled
              ? 'glass-panel shadow-medium py-2 sm:py-2.5 px-3.5 sm:px-6'
              : 'bg-white/95 border-teal-900/10 shadow-soft py-2.5 sm:py-3 px-3.5 sm:px-6'
          }`}
        >
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            {/* Brand Logo & Mental Health Title */}
            <a
              href="#home"
              className="flex items-center gap-2.5 sm:gap-3 group shrink-0 focus-visible:rounded-lg"
              aria-label="UMED Centre For Mental Health - Home"
            >
              <div className="relative h-9 w-9 sm:h-11 sm:w-11 shrink-0 overflow-hidden rounded-full border-2 border-gold-400 shadow-sm transition-transform duration-300 group-hover:scale-105">
                <img
                  src="/images/omed_logo.jpeg"
                  alt="UMED Logo"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="leading-tight">
                <div className="flex items-baseline gap-1.5">
                  <span className="font-display text-lg sm:text-xl font-bold tracking-wider text-teal-brand">
                    UMED
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-bold text-gold-600 uppercase tracking-widest hidden xs:inline">
                    Latur
                  </span>
                </div>
                <p className="text-[9px] sm:text-[10px] font-semibold text-teal-700 tracking-wide uppercase">
                  {language === 'mr' ? 'मानसोपचार केंद्र' : 'Mental Health Clinic'}
                </p>
              </div>
            </a>

            {/* Desktop Navigation (XL screens) */}
            <nav
              className="hidden xl:flex items-center gap-1 lg:gap-2 text-xs font-semibold text-teal-800"
              aria-label="Main Navigation"
            >
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    className={`px-3 py-1.5 rounded-full transition-all duration-200 tracking-wide ${
                      isActive
                        ? 'bg-teal-brand text-white shadow-sm'
                        : 'hover:text-gold-600 hover:bg-teal-50/70 text-slate-700'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-1.5 sm:gap-3">
              {/* Language Switcher - HIDDEN on mobile, visible on desktop/tablet only */}
              <button
                onClick={() => setLanguage(language === 'en' ? 'mr' : 'en')}
                className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-teal-900/15 bg-cream-100 hover:bg-white text-xs font-bold text-teal-brand transition-all shadow-2xs btn-interactive"
                title={language === 'en' ? 'मराठी भाषेत वाचा' : 'Switch to English'}
                aria-label="Toggle Language"
              >
                <Globe size={13} className="text-gold-600 shrink-0" />
                <span className="font-marathi">{language === 'en' ? 'मराठी' : 'EN'}</span>
              </button>

              {/* Quick Call Button (Desktop) */}
              <a
                href={`tel:${CLINIC_CONTACT.phone1Raw}`}
                className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-teal-brand hover:text-gold-600 transition-colors"
                aria-label="Call UMED Clinic"
              >
                <Phone size={13} className="text-gold-600" />
                <span className="tracking-tight">{CLINIC_CONTACT.phone1}</span>
              </a>

              {/* Desktop Primary Appointment Button */}
              <button
                onClick={() => onOpenBooking()}
                className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gold-500 hover:bg-gold-600 text-white font-semibold text-xs px-4 sm:px-5 py-2 sm:py-2.5 shadow-gold-glow transition-all duration-200 btn-interactive"
              >
                <Calendar size={14} />
                <span>{t.bookConsultation}</span>
                <ArrowUpRight size={13} className="hidden md:inline" />
              </button>

              {/* Mobile Quick Call Icon (Visible on small mobile) */}
              <a
                href={`tel:${CLINIC_CONTACT.phone1Raw}`}
                className="sm:hidden h-9 w-9 rounded-full bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-brand hover:bg-teal-100 transition-colors"
                aria-label="Call Clinic Directly"
              >
                <Phone size={15} className="text-gold-600" />
              </a>

              {/* Mobile 3-Dots Menu Trigger Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="h-9 w-9 sm:h-10 sm:w-10 rounded-full text-teal-brand bg-teal-50/80 hover:bg-teal-100/80 border border-teal-900/10 flex items-center justify-center xl:hidden focus-visible:ring-2 focus-visible:ring-gold-500 transition-all active:scale-95 shadow-2xs"
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open 3-Dots Menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X size={20} /> : <MoreVertical size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Mobile Navigation Drawer (Opens after clicking 3 dots) */}
        {mobileMenuOpen && (
          <div
            className="absolute top-full left-0 right-0 mt-2.5 rounded-3xl glass-panel shadow-2xl border border-teal-900/10 p-5 space-y-4 xl:hidden animate-dropdown z-50"
          >
            {/* Prominent Marathi / English Language Switcher Inside 3-Dots Menu */}
            <div className="flex items-center justify-between p-3 rounded-2xl bg-teal-50/80 border border-teal-100 shadow-2xs">
              <div className="flex items-center gap-2">
                <Globe size={16} className="text-gold-600 shrink-0" />
                <span className="text-xs font-bold text-teal-brand">
                  {language === 'mr' ? 'भाषा (Language)' : 'Language'}
                </span>
              </div>
              <div className="flex items-center bg-white rounded-xl p-1 border border-teal-200/60 shadow-inner">
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                    language === 'en'
                      ? 'bg-teal-brand text-white shadow-2xs'
                      : 'text-slate-600 hover:text-teal-brand'
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => setLanguage('mr')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold font-marathi transition-all ${
                    language === 'mr'
                      ? 'bg-teal-brand text-white shadow-2xs'
                      : 'text-slate-600 hover:text-teal-brand'
                  }`}
                >
                  मराठी
                </button>
              </div>
            </div>

            {/* Prominent Booking CTA inside Mobile Menu */}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-gold-500 to-gold-600 text-white font-bold text-sm py-3.5 shadow-gold-glow transition-transform active:scale-98"
            >
              <Calendar size={16} />
              <span>{t.bookConsultation}</span>
              <ArrowUpRight size={15} />
            </button>

            {/* Navigation Grid */}
            <nav className="grid grid-cols-2 gap-2 pt-1" aria-label="Mobile Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                    activeSection === link.id
                      ? 'bg-teal-brand text-white shadow-sm'
                      : 'text-slate-700 bg-slate-50/80 hover:bg-teal-50 hover:text-teal-brand'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Quick Contact & Details in Menu */}
            <div className="pt-3 border-t border-teal-900/10 space-y-2.5 text-xs">
              <div className="flex items-center justify-between gap-2">
                <a
                  href={`tel:${CLINIC_CONTACT.phone1Raw}`}
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-teal-50 text-teal-brand font-bold text-xs hover:bg-teal-100 transition-colors"
                >
                  <Phone size={13} className="text-gold-600" />
                  <span>{CLINIC_CONTACT.phone1}</span>
                </a>
                <a
                  href={`tel:${CLINIC_CONTACT.phone2Raw}`}
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-teal-50 text-teal-brand font-bold text-xs hover:bg-teal-100 transition-colors"
                >
                  <Phone size={13} className="text-gold-600" />
                  <span>{CLINIC_CONTACT.phone2}</span>
                </a>
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
                <span className="flex items-center gap-1">
                  <Clock size={11} className="text-gold-600" />
                  <span>10 AM – 8 PM</span>
                </span>
                <span className="flex items-center gap-1">
                  <MapPin size={11} className="text-gold-600" />
                  <span>Shivaji Chowk, Latur</span>
                </span>
              </div>

              <div className="text-center pt-2 border-t border-slate-100">
                <p className="font-display font-bold text-teal-brand text-xs tracking-wider">
                  UMED CENTRE FOR MENTAL HEALTH
                </p>
                <p className="font-marathi font-semibold text-gold-600 text-[11px] mt-0.5">
                  “निरोगी मन, आनंदी जीवन”
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
