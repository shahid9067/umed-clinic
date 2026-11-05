import React from 'react';
import { Award, ShieldCheck, Clock, Users, ArrowUpRight } from 'lucide-react';
import { Language } from '../types/clinic';
import { TRANSLATIONS } from '../data/translations';
import { DOCTOR_INFO } from '../data/clinicData';

interface DoctorSectionProps {
  language: Language;
  onOpenBooking: () => void;
}

export const DoctorSection: React.FC<DoctorSectionProps> = ({ language, onOpenBooking }) => {
  const t = TRANSLATIONS[language];

  const pillarIcons = [ShieldCheck, Clock, Award, Users];

  return (
    <section id="doctor" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Doctor Portrait Frame */}
          <div className="lg:col-span-5 relative flex justify-center reveal-on-scroll">
            <div className="relative w-full max-w-sm">
              <div
                className="absolute -inset-4 rounded-[42px] border-2 border-gold-300/40 pointer-events-none transform -rotate-1 transition-transform duration-500 hover:rotate-0"
                aria-hidden="true"
              />

              <div className="relative overflow-hidden rounded-[38px] bg-teal-brand shadow-premium border-4 border-white transition-all duration-500 hover:shadow-2xl">
                <img
                  src="/images/doctor_image.jpeg"
                  alt={language === 'mr' ? DOCTOR_INFO.nameMr : DOCTOR_INFO.nameEn}
                  className="w-full h-[440px] sm:h-[500px] object-cover object-[52%_15%] transition-transform duration-700 hover:scale-[1.03]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-teal-950/85 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="glass-teal rounded-2xl p-4 border border-white/20">
                    <div className="flex items-center gap-2 text-gold-300 text-xs font-bold uppercase tracking-wider">
                      <Award size={14} />
                      <span>{language === 'mr' ? 'मानसोपचार तज्ज्ञ' : 'Lead Psychiatrist'}</span>
                    </div>
                    <h3 className="font-display text-xl font-bold mt-1 text-white">
                      {language === 'mr' ? DOCTOR_INFO.nameMr : DOCTOR_INFO.nameEn}
                    </h3>
                    <p className="text-xs text-gold-200 font-semibold mt-0.5">
                      {language === 'mr' ? DOCTOR_INFO.degreesMr : DOCTOR_INFO.degreesEn}
                    </p>
                  </div>
                </div>
              </div>

              {/* Consultation Timing Badge */}
              <div className="absolute -bottom-4 -left-3 sm:-left-6 rounded-2xl bg-cream-100 p-3 shadow-medium border border-teal-900/10 flex items-center gap-2.5 transition-transform duration-300 hover:scale-105">
                <Clock size={16} className="text-gold-600 shrink-0" />
                <div className="text-left">
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                    {language === 'mr' ? 'तपासणी वेळ' : 'Consultation Timings'}
                  </p>
                  <p className="text-xs font-bold text-teal-brand">
                    Mon – Sat: 10 AM – 8 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Doctor Bio & Clinical Principles */}
          <div className="lg:col-span-7 space-y-6 reveal-on-scroll delay-150">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold-600">
                <span className="h-px w-8 bg-gold-500" />
                <span>{t.docEyebrow}</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-teal-brand tracking-tight text-balance">
                {language === 'mr' ? (
                  <>
                    डॉ. श्रद्धा (नितूरे) पत्रिके<br />
                    <span className="italic font-normal text-gold-600 text-2xl sm:text-3xl lg:text-4xl">
                      मानसोपचार तज्ज्ञ · संचालक, उमेद क्लिनिक
                    </span>
                  </>
                ) : (
                  <>
                    Dr. Shradha (Niture) Patrike<br />
                    <span className="italic font-normal text-gold-600 text-2xl sm:text-3xl lg:text-4xl">
                      MBBS · DPM · Consultant Psychiatrist
                    </span>
                  </>
                )}
              </h2>
            </div>

            {/* Doctor Bio Paragraphs */}
            <div className="space-y-4 text-base text-slate-700 leading-relaxed">
              {(language === 'mr' ? DOCTOR_INFO.bioMr : DOCTOR_INFO.bioEn).map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Clinical Principles 2x2 Grid with Staggered Transition */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {(language === 'mr' ? DOCTOR_INFO.pillarsMr : DOCTOR_INFO.pillarsEn).map((pillar, idx) => {
                const Icon = pillarIcons[idx % pillarIcons.length];
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl border border-teal-900/10 bg-teal-50/40 hover:bg-teal-50/90 transition-all duration-300 hover:shadow-xs group"
                  >
                    <div className="flex items-center gap-2 text-teal-brand font-bold text-sm">
                      <Icon size={16} className="text-gold-600 shrink-0 group-hover:scale-110 transition-transform" />
                      <span>{pillar.title}</span>
                    </div>
                    <p className="mt-1.5 text-xs text-slate-600 leading-normal">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* CTA to Book with Doctor */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 rounded-full bg-teal-brand hover:bg-teal-800 text-white font-semibold text-xs sm:text-sm px-6 py-3.5 shadow-medium transition-all duration-300 hover:-translate-y-0.5 btn-interactive"
              >
                <span>{language === 'mr' ? 'डॉ. श्रद्धा यांच्याशी बोला' : 'Book with Dr. Shradha'}</span>
                <ArrowUpRight size={15} />
              </button>

              <div className="text-xs text-slate-500 font-medium">
                {t.consultationHours}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
