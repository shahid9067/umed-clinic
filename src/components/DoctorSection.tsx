import React from 'react';
import { Award, ShieldCheck, Clock, Users, ArrowUpRight, MessageCircle, Stethoscope, CheckCircle2 } from 'lucide-react';
import { Language } from '../types/clinic';
import { TRANSLATIONS } from '../data/translations';
import { DOCTOR_INFO, CLINIC_CONTACT } from '../data/clinicData';
import { useTilt3D } from '../hooks/useTilt3D';

interface DoctorSectionProps {
  language: Language;
  onOpenBooking: () => void;
}

export const DoctorSection: React.FC<DoctorSectionProps> = ({ language, onOpenBooking }) => {
  const t = TRANSLATIONS[language];
  const portraitTilt = useTilt3D(8);
  const pillarIcons = [ShieldCheck, Clock, Award, Users];

  return (
    <section id="doctor" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -left-20 w-80 h-80 bg-gold-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-800/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Doctor Portrait 3D Architectural Frame (5 cols) */}
          <div className="lg:col-span-5 relative flex justify-center reveal-on-scroll">
            <div
              ref={portraitTilt.cardRef}
              onMouseMove={portraitTilt.handleMouseMove}
              onMouseLeave={portraitTilt.handleMouseLeave}
              style={portraitTilt.style}
              className="relative w-full max-w-sm card-3d"
            >
              {/* Outer Golden Aura Ring */}
              <div
                className="absolute -inset-3 rounded-[44px] bg-gradient-to-tr from-gold-400/30 via-transparent to-teal-600/30 blur-lg pointer-events-none animate-pulse-subtle"
                aria-hidden="true"
              />

              {/* Angled decorative backplate */}
              <div
                className="absolute -inset-3 rounded-[42px] border-2 border-gold-300/40 pointer-events-none transform -rotate-1 transition-transform duration-500"
                aria-hidden="true"
              />

              {/* Main Doctor Card Frame */}
              <div className="relative overflow-hidden rounded-[38px] bg-teal-brand shadow-2xl border-4 border-white transition-all duration-500">
                <img
                  src="/images/doctor_image.jpeg"
                  alt={language === 'mr' ? DOCTOR_INFO.nameMr : DOCTOR_INFO.nameEn}
                  className="w-full h-[460px] sm:h-[520px] object-cover object-[52%_15%] transition-transform duration-700 hover:scale-[1.03]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-teal-950/90 via-teal-950/20 to-transparent pointer-events-none" />

                {/* Floating Credentials Glass Plate */}
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="glass-teal-luxury rounded-2xl p-4 border border-white/20 shadow-xl backdrop-blur-md">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-gold-300 text-xs font-bold uppercase tracking-wider">
                        <Award size={14} className="text-gold-400" />
                        <span>{language === 'mr' ? 'मानसोपचार तज्ज्ञ' : 'Lead Psychiatrist'}</span>
                      </div>
                      <span className="flex items-center gap-1 text-[10px] text-emerald-300 font-semibold bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-400/30">
                        <CheckCircle2 size={10} />
                        Verified
                      </span>
                    </div>

                    <h3 className="font-display text-xl sm:text-2xl font-bold mt-1 text-white">
                      {language === 'mr' ? DOCTOR_INFO.nameMr : DOCTOR_INFO.nameEn}
                    </h3>
                    <p className="text-xs text-gold-200 font-semibold mt-0.5">
                      {language === 'mr' ? DOCTOR_INFO.degreesMr : DOCTOR_INFO.degreesEn}
                    </p>
                  </div>
                </div>
              </div>

              {/* Consultation Timing Floating Badge */}
              <div className="absolute -bottom-4 -left-3 sm:-left-6 rounded-2xl bg-white p-3.5 shadow-xl border border-teal-900/10 flex items-center gap-3 transition-transform duration-300 hover:scale-105 z-20">
                <div className="h-9 w-9 rounded-xl bg-gold-50 flex items-center justify-center text-gold-700 border border-gold-200">
                  <Clock size={18} />
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                      {language === 'mr' ? 'तपासणी वेळ' : 'OPD Consultation'}
                    </p>
                  </div>
                  <p className="text-xs font-bold text-teal-brand mt-0.5">
                    Mon – Sat: 10 AM – 8 PM
                  </p>
                </div>
              </div>

              {/* Experience Mini Pill */}
              <div className="absolute top-4 -right-3 rounded-2xl bg-white/95 backdrop-blur-md px-3.5 py-1.5 shadow-lg border border-gold-300/60 flex items-center gap-1.5 z-20">
                <Stethoscope size={13} className="text-gold-600" />
                <span className="text-xs font-bold text-teal-brand">
                  {language === 'mr' ? '१०+ वर्षे वैद्यकीय अनुभव' : '10+ Yrs Clinical Experience'}
                </span>
              </div>
            </div>
          </div>

          {/* Doctor Bio & Clinical Principles (7 cols) */}
          <div className="lg:col-span-7 space-y-6 reveal-on-scroll delay-150">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold-600">
                <span className="h-0.5 w-6 bg-gold-500 rounded-full" />
                <span>{t.docEyebrow}</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-teal-brand tracking-tight text-balance">
                {language === 'mr' ? (
                  <>
                    डॉ. श्रद्धा (नितूरे) पत्रिके<br />
                    <span className="font-serif italic font-normal text-gold-600 text-2xl sm:text-3xl lg:text-4xl">
                      मानसोपचार तज्ज्ञ · संचालक, उमेद क्लिनिक
                    </span>
                  </>
                ) : (
                  <>
                    Dr. Shradha (Niture) Patrike<br />
                    <span className="font-serif italic font-normal text-gold-600 text-2xl sm:text-3xl lg:text-4xl">
                      MBBS · DPM · Consultant Psychiatrist
                    </span>
                  </>
                )}
              </h2>
            </div>

            {/* Doctor's Personal Note Quote Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-cream-100 border-l-4 border-gold-500 text-slate-700 space-y-1">
              <p className="text-xs font-bold uppercase tracking-widest text-gold-700">
                {language === 'mr' ? 'डॉक्टरांचे मत' : 'Doctor’s Reflection'}
              </p>
              <p className="font-display italic text-sm sm:text-base text-teal-900 leading-relaxed">
                {language === 'mr'
                  ? '“मानसिक स्वास्थ्यासाठी वैद्यकीय सल्ला घेणे हा दुर्बलतेचा नाही, तर स्वतःच्या आणि कुटुंबाच्या भवितव्यासाठी घेतलेला सर्वात धाडसी निर्णय असतो.”'
                  : '“Reaching out for mental health support is not a sign of defeat — it is the single most courageous decision you can make for your emotional freedom and your family’s peace.”'}
              </p>
            </div>

            {/* Doctor Bio Paragraphs */}
            <div className="space-y-3.5 text-base text-slate-700 leading-relaxed">
              {(language === 'mr' ? DOCTOR_INFO.bioMr : DOCTOR_INFO.bioEn).map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Clinical Principles 2x2 Grid with 3D Tactile Styling */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {(language === 'mr' ? DOCTOR_INFO.pillarsMr : DOCTOR_INFO.pillarsEn).map((pillar, idx) => {
                const Icon = pillarIcons[idx % pillarIcons.length];
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl border border-teal-900/10 bg-white hover:bg-teal-50/60 shadow-xs hover:shadow-md transition-all duration-300 group hover:-translate-y-0.5"
                  >
                    <div className="flex items-center gap-2.5 text-teal-brand font-bold text-sm">
                      <div className="h-7 w-7 rounded-lg bg-teal-50 text-teal-brand flex items-center justify-center border border-teal-100 group-hover:bg-gold-500 group-hover:text-white transition-colors shrink-0">
                        <Icon size={15} />
                      </div>
                      <span>{pillar.title}</span>
                    </div>
                    <p className="mt-2 text-xs text-slate-600 leading-normal pl-9">
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

              <a
                href={CLINIC_CONTACT.whatsappDirect}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-teal-900/20 hover:border-gold-500 bg-white hover:bg-gold-50 text-teal-brand hover:text-gold-800 font-semibold text-xs sm:text-sm px-5 py-3.5 transition-all duration-300 shadow-xs"
              >
                <MessageCircle size={15} className="text-emerald-600" />
                <span>{language === 'mr' ? 'व्हॉट्सअॅपवर थेट मेसेज' : 'Chat on WhatsApp'}</span>
              </a>

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
