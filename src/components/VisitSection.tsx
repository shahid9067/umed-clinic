import React from 'react';
import { MapPin, Phone, Mail, Clock, Navigation, ExternalLink, ArrowRight } from 'lucide-react';
import { Language } from '../types/clinic';
import { CLINIC_CONTACT } from '../data/clinicData';
import { TRANSLATIONS } from '../data/translations';

interface VisitSectionProps {
  language: Language;
  onOpenBooking: () => void;
}

export const VisitSection: React.FC<VisitSectionProps> = ({ language, onOpenBooking }) => {
  const t = TRANSLATIONS[language];

  return (
    <section id="visit" className="py-20 lg:py-28 bg-white relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Clinic Details Column */}
          <div className="lg:col-span-7 space-y-8 reveal-on-scroll">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold-600">
                <span className="h-px w-8 bg-gold-500" />
                <span>{t.visitEyebrow}</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-teal-brand tracking-tight text-balance">
                {t.visitHeading}
              </h2>

              <p className="text-base text-slate-600 leading-relaxed pt-1">
                {language === 'mr'
                  ? 'शांत, खाजगी व सोयीस्कर जागेत मानसोपचार क्लिनिक. छत्रपती शिवाजी महाराज चौक, हॉटेल अंजनीच्या मागे, लातूर.'
                  : 'Centrally located behind Hotel Anjani, Shivaji Chowk. Designed as a calm, confidential haven for patients and families.'}
              </p>
            </div>

            {/* Information Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Address */}
              <div className="p-5 rounded-2xl bg-teal-50/50 border border-teal-900/10 space-y-2">
                <div className="flex items-center gap-2 text-teal-brand font-bold text-sm">
                  <MapPin size={17} className="text-gold-600 shrink-0" />
                  <span>{t.visitAddressTitle}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                  {t.visitAddressValue}
                </p>
                <div className="pt-2">
                  <a
                    href={CLINIC_CONTACT.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-brand hover:text-gold-600 transition-colors"
                  >
                    <span>{t.btnGetDirections}</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>

              {/* Consultation Timings */}
              <div className="p-5 rounded-2xl bg-teal-50/50 border border-teal-900/10 space-y-2">
                <div className="flex items-center gap-2 text-teal-brand font-bold text-sm">
                  <Clock size={17} className="text-gold-600 shrink-0" />
                  <span>{t.visitHoursTitle}</span>
                </div>
                <div className="text-xs sm:text-sm text-slate-700 space-y-1">
                  <p className="font-medium">{t.visitHoursWeekday}</p>
                  <p className="text-xs text-slate-500">{t.visitHoursSunday}</p>
                </div>
              </div>

              {/* Direct Phone Numbers */}
              <div className="p-5 rounded-2xl bg-teal-50/50 border border-teal-900/10 space-y-2">
                <div className="flex items-center gap-2 text-teal-brand font-bold text-sm">
                  <Phone size={17} className="text-gold-600 shrink-0" />
                  <span>{t.visitContactTitle}</span>
                </div>
                <div className="space-y-1 text-xs sm:text-sm font-semibold text-teal-brand">
                  <p>
                    <a href={`tel:${CLINIC_CONTACT.phone1Raw}`} className="hover:text-gold-600 transition-colors">
                      {CLINIC_CONTACT.phone1}
                    </a>
                  </p>
                  <p>
                    <a href={`tel:${CLINIC_CONTACT.phone2Raw}`} className="hover:text-gold-600 transition-colors">
                      {CLINIC_CONTACT.phone2}
                    </a>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="p-5 rounded-2xl bg-teal-50/50 border border-teal-900/10 space-y-2">
                <div className="flex items-center gap-2 text-teal-brand font-bold text-sm">
                  <Mail size={17} className="text-gold-600 shrink-0" />
                  <span>{t.visitEmailTitle}</span>
                </div>
                <p className="text-xs sm:text-sm font-medium text-slate-700">
                  <a href={`mailto:${CLINIC_CONTACT.email}`} className="hover:text-gold-600 transition-colors">
                    {CLINIC_CONTACT.email}
                  </a>
                </p>
                <p className="text-[11px] text-slate-500">
                  {language === 'mr' ? '२४ तासांत प्रतिसाद दिला जातो' : 'Replies within 24 hours'}
                </p>
              </div>
            </div>

            {/* Quick Action Button */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 rounded-full bg-gold-500 hover:bg-gold-600 text-white font-semibold text-xs sm:text-sm px-6 py-3.5 shadow-gold-glow transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>{t.bookConsultation}</span>
                <ArrowRight size={15} />
              </button>

              <a
                href={CLINIC_CONTACT.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-teal-900/20 bg-white hover:bg-cream-100 text-teal-brand font-semibold text-xs sm:text-sm px-6 py-3.5 transition-colors"
              >
                <Navigation size={15} className="text-gold-600" />
                <span>{t.btnGetDirections}</span>
              </a>
            </div>
          </div>

          {/* Location Visual Card */}
          <div className="lg:col-span-5">
            <div className="card-premium rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-cream-100 via-white to-cream-50 border border-teal-900/15 relative overflow-hidden">
              {/* Location Header */}
              <div className="flex items-center justify-between pb-5 border-b border-teal-900/10">
                <div className="flex items-center gap-2.5">
                  <div className="h-9 w-9 rounded-xl bg-teal-brand text-gold-400 flex items-center justify-center">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-teal-brand">UMED Latur</p>
                    <p className="text-[10px] text-slate-500">Shivaji Chowk, Latur</p>
                  </div>
                </div>

                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  {language === 'mr' ? 'खुले आहे' : 'Open Today'}
                </span>
              </div>

              {/* Address Banner Image Presentation */}
              <div className="mt-5 rounded-2xl overflow-hidden border border-teal-900/10 shadow-sm bg-white">
                <img
                  src="/images/umed_address.jpeg"
                  alt="UMED Address and Contact Details"
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Landmark Guidance */}
              <div className="mt-5 space-y-2 text-xs text-slate-600 leading-relaxed bg-white p-4 rounded-xl border border-slate-100">
                <p className="font-bold text-teal-brand">
                  {language === 'mr' ? 'कसे पोहोचावे (लँडमार्क मार्गदर्शन):' : 'Landmark Directions:'}
                </p>
                <p>
                  {language === 'mr'
                    ? 'छत्रपती शिवाजी महाराज चौकातील हॉटेल अंजनीच्या मागील बाजूस क्लिनिक स्थित आहे. शहराच्या कोणत्याही भागातून रिक्षा किंवा वाहनाने सहज पोहोचता येते.'
                    : 'Located directly behind the prominent Hotel Anjani at Shivaji Chowk. Centrally connected via city auto-rickshaws and public transport from anywhere in Latur.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
