import React, { useState } from 'react';
import {
  LucideIcon,
  Building2,
  Activity,
  Sliders,
  Zap,
  FlaskConical,
  Users,
  Heart,
  CheckCircle2,
  Shield,
  FileText,
} from 'lucide-react';
import { Language, FacilityItem } from '../types/clinic';
import { FACILITIES } from '../data/clinicData';
import { TRANSLATIONS } from '../data/translations';

interface FacilitiesSectionProps {
  language: Language;
}

const facilityIconMap: Record<string, LucideIcon> = {
  Building2,
  Activity,
  Sliders,
  Zap,
  FlaskConical,
  Users,
  Heart,
};

export const FacilitiesSection: React.FC<FacilitiesSectionProps> = ({ language }) => {
  const t = TRANSLATIONS[language];
  const [selectedFacility, setSelectedFacility] = useState<FacilityItem>(FACILITIES[0]);

  return (
    <section id="facilities" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 reveal-on-scroll">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold-600">
            <span className="h-px w-8 bg-gold-500" />
            <span>{t.facEyebrow}</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-teal-brand tracking-tight text-balance">
            {t.facHeading}
          </h2>

          <p className="text-base text-slate-600 leading-relaxed pt-1">
            {t.facSubtitle}
          </p>
        </div>

        {/* Facilities Interactive Layout */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Facility List */}
          <div className="lg:col-span-5 space-y-2.5 reveal-on-scroll delay-100">
            {FACILITIES.map((facility) => {
              const Icon = facilityIconMap[facility.iconName] || Activity;
              const isSelected = selectedFacility.id === facility.id;
              const title = language === 'mr' ? facility.titleMr : facility.titleEn;
              const badge = language === 'mr' ? facility.badgeMr : facility.badgeEn;

              return (
                <button
                  key={facility.id}
                  onClick={() => setSelectedFacility(facility)}
                  className={`w-full text-left p-3.5 sm:p-4.5 rounded-2xl transition-all duration-300 border flex items-center justify-between gap-3 group ${
                    isSelected
                      ? 'bg-teal-brand text-white border-teal-brand shadow-medium scale-[1.01]'
                      : 'bg-[#fafbf9] text-slate-700 border-teal-900/10 hover:bg-teal-50/60 hover:border-teal-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`h-10 w-10 shrink-0 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        isSelected
                          ? 'bg-white/15 text-gold-300 scale-105'
                          : 'bg-white text-teal-brand border border-teal-100 group-hover:text-gold-600 group-hover:scale-105'
                      }`}
                    >
                      <Icon size={19} />
                    </div>
                    <div>
                      <p className={`text-xs sm:text-sm font-bold leading-tight ${isSelected ? 'text-white' : 'text-teal-brand'}`}>
                        {title}
                      </p>
                      <p className={`text-[10px] uppercase tracking-wider font-semibold mt-0.5 ${isSelected ? 'text-gold-300' : 'text-slate-500'}`}>
                        {badge}
                      </p>
                    </div>
                  </div>

                  <span
                    className={`h-2 w-2 rounded-full transition-transform duration-300 ${
                      isSelected ? 'bg-gold-400 scale-125' : 'bg-slate-300'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed View of Selected Facility */}
          <div className="lg:col-span-7 reveal-on-scroll delay-150">
            <div className="card-premium rounded-3xl p-6 sm:p-10 bg-gradient-to-br from-cream-100 to-white relative overflow-hidden transition-all duration-300">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-teal-900/10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gold-50 text-gold-800 border border-gold-200">
                  <Shield size={13} className="text-gold-600" />
                  {language === 'mr' ? selectedFacility.badgeMr : selectedFacility.badgeEn}
                </span>

                <span className="text-xs font-semibold text-slate-500">
                  {language === 'mr' ? 'उमेद क्लिनिक अधिकृत सुविधा' : 'Official UMED Facility'}
                </span>
              </div>

              <div className="mt-6 space-y-4 animate-fade-in key={selectedFacility.id}">
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-teal-brand">
                  {language === 'mr' ? selectedFacility.titleMr : selectedFacility.titleEn}
                </h3>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  {language === 'mr' ? selectedFacility.descMr : selectedFacility.descEn}
                </p>
              </div>

              {/* Key Clinical Standards Checklist */}
              <div className="mt-8 pt-6 border-t border-teal-900/10 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                  <span>{language === 'mr' ? 'वैद्यकीय देखरेखीखाली चालवले जाणारे' : 'Medically Supervised'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                  <span>{language === 'mr' ? 'कडक स्वच्छता व सुरक्षा मानके' : 'Strict Hygiene Standards'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                  <span>{language === 'mr' ? 'त्वरित व अचूक चाचणी अहवाल' : 'Fast Diagnostic Reports'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                  <span>{language === 'mr' ? 'रुग्ण गोपनीयता सुरक्षा' : 'Patient Privacy Protection'}</span>
                </div>
              </div>

              {/* Pamphlet Notice Ribbon */}
              <div className="mt-8 p-4 rounded-2xl bg-teal-brand text-white flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <FileText size={20} className="text-gold-400 shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-white">
                      {language === 'mr' ? 'उपलब्ध सुविधा पत्रिका' : 'Approved Clinical Infrastructure'}
                    </p>
                    <p className="text-[11px] text-teal-100">
                      {language === 'mr' ? 'लातूर येथील अधिकृत क्लिनिकल सुविधा' : 'Directly available at UMED Latur'}
                    </p>
                  </div>
                </div>

                <a
                  href="#visit"
                  className="px-3.5 py-1.5 rounded-full bg-gold-500 hover:bg-gold-600 text-white font-semibold text-xs tracking-wide transition-colors shrink-0 btn-interactive"
                >
                  {language === 'mr' ? 'पत्ता पहा' : 'Visit Clinic'}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Social Commitment Concession Card */}
        <div className="mt-12 rounded-2xl bg-emerald-50 border border-emerald-200 p-6 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 reveal-on-scroll delay-100">
          <div className="flex items-start gap-4">
            <div className="h-11 w-11 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm">
              <Heart size={20} />
            </div>
            <div>
              <h4 className="font-bold text-emerald-950 text-base">
                {language === 'mr'
                  ? 'गरीब व गरजू रुग्णांसाठी माफक दरात सर्व सुविधा'
                  : 'Subsidized & Affordable Care for Economically Weaker Patients'}
              </h4>
              <p className="text-xs sm:text-sm text-emerald-800 mt-1 max-w-3xl leading-relaxed">
                {language === 'mr'
                  ? 'आर्थिक अडचणींमुळे उपचारात खंड पडू नये यासाठी उमेद क्लिनिक गरजू रुग्णांना विशेष सवलतीच्या दरात उपचार आणि तपासण्या उपलब्ध करून देते.'
                  : 'UMED Clinic firmly believes financial hardship should never prevent anyone from accessing compassionate psychiatric healing and dignifying medical treatment.'}
              </p>
            </div>
          </div>

          <a
            href="tel:9067089323"
            className="shrink-0 px-4 py-2 rounded-xl bg-emerald-800 text-white text-xs font-bold hover:bg-emerald-900 transition-colors shadow-2xs btn-interactive"
          >
            {language === 'mr' ? 'माहितीसाठी संपर्क' : 'Inquire with Clinic'}
          </a>
        </div>
      </div>
    </section>
  );
};
