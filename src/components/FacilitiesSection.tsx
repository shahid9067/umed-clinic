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
  Calendar,
  Sparkles,
} from 'lucide-react';
import { Language, FacilityItem } from '../types/clinic';
import { FACILITIES } from '../data/clinicData';
import { TRANSLATIONS } from '../data/translations';
import { useTilt3D } from '../hooks/useTilt3D';

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

const facilityImageMap: Record<string, { image: string; tagEn: string; tagMr: string }> = {
  'opd-ipd': {
    image: '/images/facility-ipd.jpg',
    tagEn: '24/7 Monitored Inpatient & Private Outpatient Suites',
    tagMr: '२४ तास वैद्यकीय देखरेखीखाली अंतररुग्ण व बाह्यरुग्ण कक्ष',
  },
  'eeg-diagnostics': {
    image: '/images/facility-eeg.jpg',
    tagEn: '32-Channel Digital Video EEG Brainwave Workstation',
    tagMr: '३२-चॅनेल डिजिटल व्हिडिओ ईईजी मेंदू आलेख प्रणाली',
  },
  'mbt-machine': {
    image: '/images/facility-therapy.jpg',
    tagEn: 'Multi-Behavior Therapy & Neuro-Relaxation Suite',
    tagMr: 'मल्टी-बिहेविअर थेरेपी व न्यूरो-रिलॅक्सेशन कक्ष',
  },
  'ect-facility': {
    image: '/images/facility-consultation.jpg',
    tagEn: 'Ultra-Modern Supervised Clinical Treatment Suite',
    tagMr: 'भूलतज्ज्ञांच्या देखरेखीखाली सुरक्षित क्लिनिकल उपचार',
  },
  'ecg-pathology': {
    image: '/images/facility-consultation.jpg',
    tagEn: 'Direct In-House ECG & Pathology Laboratory Workstation',
    tagMr: 'क्लिनिकमध्येच उपलब्ध ईसीजी व रक्त तपासणी लॅब',
  },
  'visiting-specialists': {
    image: '/images/about-listening.jpg',
    tagEn: 'Cross-Specialty Physician & Neurologist Panel On-Call',
    tagMr: 'न्युरोलॉजिस्ट व फिजिशियन तज्ज्ञ डॉक्टरांचा सल्ला',
  },
  'affordable-concessions': {
    image: '/images/care/care-general.jpg',
    tagEn: 'Dedicated Subsidized Healthcare Care Desk',
    tagMr: 'शेतकरी व गरजू कुटुंबांसाठी विशेष सवलत डेस्क',
  },
};

export const FacilitiesSection: React.FC<FacilitiesSectionProps> = ({ language }) => {
  const t = TRANSLATIONS[language];
  const [selectedFacility, setSelectedFacility] = useState<FacilityItem>(FACILITIES[0]);
  const previewTilt = useTilt3D(6);

  const currentMedia = facilityImageMap[selectedFacility.id] || {
    image: '/images/facility-ipd.jpg',
    tagEn: 'Clinical Infrastructure',
    tagMr: 'क्लिनिकल पायाभूत सुविधा',
  };

  return (
    <section id="facilities" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-teal-800/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-gold-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 reveal-on-scroll">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold-600">
            <span className="h-0.5 w-6 bg-gold-500 rounded-full" />
            <span>{t.facEyebrow}</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-teal-brand tracking-tight text-balance">
            {language === 'mr' ? (
              <>
                अत्याधुनिक वैद्यकीय तंत्रज्ञान व <span className="font-serif italic text-gold-600 font-normal">सुसज्ज पायाभूत सुविधा</span>
              </>
            ) : (
              <>
                Advanced Neuro-Technology & <span className="font-serif italic text-gold-600 font-normal">Clinical Facilities</span>
              </>
            )}
          </h2>

          <p className="text-base text-slate-600 leading-relaxed pt-1">
            {t.facSubtitle}
          </p>
        </div>

        {/* Facilities Interactive 3D Showcase */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Facility Tab Selector (5 cols) */}
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
                  className={`w-full text-left p-3.5 sm:p-4 rounded-2xl transition-all duration-300 border flex items-center justify-between gap-3 group relative overflow-hidden ${
                    isSelected
                      ? 'bg-teal-brand text-white border-teal-brand shadow-lg scale-[1.01]'
                      : 'bg-[#fafbf9] text-slate-700 border-teal-900/10 hover:bg-teal-50/70 hover:border-teal-200'
                  }`}
                >
                  <div className="flex items-center gap-3 relative z-10">
                    <div
                      className={`h-10 w-10 shrink-0 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        isSelected
                          ? 'bg-white/15 text-gold-300 scale-105 border border-white/20'
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
                    className={`h-2.5 w-2.5 rounded-full transition-transform duration-300 relative z-10 ${
                      isSelected ? 'bg-gold-400 scale-125 shadow-xs' : 'bg-slate-300'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: 3D Visual Preview & Technical Spec Card (7 cols) */}
          <div className="lg:col-span-7 reveal-on-scroll delay-150">
            <div
              ref={previewTilt.cardRef}
              onMouseMove={previewTilt.handleMouseMove}
              onMouseLeave={previewTilt.handleMouseLeave}
              style={previewTilt.style}
              className="card-3d rounded-3xl bg-white border border-slate-200/90 shadow-2xl overflow-hidden relative"
            >
              {/* High-Resolution Dynamic Image Showcase */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-teal-950">
                <img
                  key={selectedFacility.id}
                  src={currentMedia.image}
                  alt={language === 'mr' ? selectedFacility.titleMr : selectedFacility.titleEn}
                  className="w-full h-full object-cover object-center transition-all duration-700 animate-fade-in"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-teal-950/90 via-teal-950/20 to-transparent pointer-events-none" />

                {/* Floating Category Badge */}
                <div className="absolute top-4 left-4 glass-teal-luxury px-3.5 py-1.5 rounded-full border border-white/20 text-white text-xs font-semibold flex items-center gap-2 shadow-lg">
                  <Shield size={13} className="text-gold-400" />
                  <span>{language === 'mr' ? selectedFacility.badgeMr : selectedFacility.badgeEn}</span>
                </div>

                {/* Image Live Subtitle Tag */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                  <span className="font-semibold text-gold-300 bg-black/50 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10 line-clamp-1">
                    {language === 'mr' ? currentMedia.tagMr : currentMedia.tagEn}
                  </span>
                  <span className="text-[11px] text-teal-200 font-medium hidden sm:inline-block">
                    {language === 'mr' ? 'अधिकृत क्लिनिक सुविधा' : 'Direct UMED Facility'}
                  </span>
                </div>
              </div>

              {/* Detail Content Section */}
              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-teal-brand tracking-tight">
                    {language === 'mr' ? selectedFacility.titleMr : selectedFacility.titleEn}
                  </h3>

                  <p className="mt-3 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                    {language === 'mr' ? selectedFacility.descMr : selectedFacility.descEn}
                  </p>
                </div>

                {/* Clinical Standards Checklist */}
                <div className="pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700 font-medium">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                    <span>{language === 'mr' ? 'वैद्यकीय देखरेखीखाली चालवले जाणारे' : 'Medically Supervised Protocol'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                    <span>{language === 'mr' ? 'कडक स्वच्छता व सुरक्षा मानके' : 'Strict Sterilization & Hygiene'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                    <span>{language === 'mr' ? 'त्वरित व अचूक चाचणी अहवाल' : 'Instant Diagnostic Feedback'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                    <span>{language === 'mr' ? '१००% रुग्ण गोपनीयता सुरक्षा' : '100% Patient Privacy Protection'}</span>
                  </div>
                </div>

                {/* Direct Action Ribbon */}
                <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-xs font-semibold text-gold-700">
                    <Sparkles size={14} className="text-gold-500" />
                    <span>{language === 'mr' ? 'लातूर येथील अग्रगण्य सुविधा' : 'Leading Facility in Latur'}</span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <a
                      href="#visit"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-teal-900/20 hover:border-gold-500 text-teal-brand hover:text-gold-800 text-xs font-bold transition-colors"
                    >
                      <FileText size={13} />
                      <span>{language === 'mr' ? 'पत्ता व वेळ' : 'Clinic Location'}</span>
                    </a>

                    <a
                      href="https://wa.me/919067089323?text=Hello%20UMED%20Clinic,%20I%20would%20like%20to%20inquire%20about%20your%20facilities."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-teal-brand hover:bg-teal-800 text-white text-xs font-bold transition-all shadow-sm btn-interactive"
                    >
                      <Calendar size={13} />
                      <span>{language === 'mr' ? 'सुविधेबाबत विचारा' : 'Inquire Facility'}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Commitment Concession Card */}
        <div className="mt-12 rounded-3xl bg-gradient-to-r from-emerald-50 via-teal-50/50 to-emerald-50 border border-emerald-200/80 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 reveal-on-scroll delay-100 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="h-12 w-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-md">
              <Heart size={22} />
            </div>
            <div>
              <h4 className="font-bold text-emerald-950 text-base sm:text-lg">
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
            className="shrink-0 px-5 py-2.5 rounded-full bg-emerald-800 text-white text-xs sm:text-sm font-bold hover:bg-emerald-900 transition-all shadow-sm btn-interactive"
          >
            {language === 'mr' ? 'सवलतीबाबत संपर्क साधा' : 'Inquire with Clinic'}
          </a>
        </div>
      </div>
    </section>
  );
};
