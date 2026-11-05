import React from 'react';
import { UserCheck, Stethoscope, HeartPulse, CheckCircle2, LucideIcon } from 'lucide-react';
import { Language } from '../types/clinic';
import { TRANSLATIONS } from '../data/translations';
import { useTilt3D } from '../hooks/useTilt3D';

interface ApproachSectionProps {
  language: Language;
}

interface StepItem {
  number: string;
  icon: LucideIcon;
  titleEn: string;
  titleMr: string;
  subtitleEn: string;
  subtitleMr: string;
  descEn: string;
  descMr: string;
  guaranteeEn: string;
  guaranteeMr: string;
}

const StepCard: React.FC<{
  st: StepItem;
  idx: number;
  language: Language;
}> = ({ st, idx, language }) => {
  const tilt = useTilt3D(6);
  const Icon = st.icon;
  const delays = ['delay-100', 'delay-200', 'delay-300'];

  return (
    <div
      ref={tilt.cardRef}
      onMouseMove={tilt.handleMouseMove}
      onMouseLeave={tilt.handleMouseLeave}
      style={tilt.style}
      className={`card-3d rounded-3xl p-7 sm:p-8 relative flex flex-col justify-between group bg-white border border-slate-200/90 shadow-premium hover:border-gold-400 transition-all duration-300 reveal-on-scroll ${delays[idx]}`}
    >
      <div>
        <div className="flex items-center justify-between pb-6 border-b border-slate-100">
          <span className="font-display text-4xl font-bold text-gold-500">
            {st.number}
          </span>
          <div className="h-12 w-12 rounded-2xl bg-teal-50 text-teal-brand flex items-center justify-center border border-teal-100 group-hover:bg-gold-500 group-hover:text-white transition-all duration-300 group-hover:scale-110 shadow-xs">
            <Icon size={22} />
          </div>
        </div>

        <p className="mt-6 text-[11px] font-bold uppercase tracking-wider text-gold-700">
          {language === 'mr' ? st.subtitleMr : st.subtitleEn}
        </p>

        <h3 className="mt-1 text-xl font-bold text-teal-brand tracking-tight">
          {language === 'mr' ? st.titleMr : st.titleEn}
        </h3>

        <p className="mt-3 text-sm text-slate-600 leading-relaxed font-normal">
          {language === 'mr' ? st.descMr : st.descEn}
        </p>
      </div>

      <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
        <span className="flex items-center gap-1.5 font-semibold text-teal-800">
          <CheckCircle2 size={13} className="text-emerald-600" />
          <span>{language === 'mr' ? st.guaranteeMr : st.guaranteeEn}</span>
        </span>
        <span className="font-bold text-gold-600 bg-gold-50 px-2 py-0.5 rounded-md">
          {language === 'mr' ? `टप्पा ${idx + 1}` : `Phase ${idx + 1}`}
        </span>
      </div>
    </div>
  );
};

export const ApproachSection: React.FC<ApproachSectionProps> = ({ language }) => {
  const t = TRANSLATIONS[language];

  const steps: StepItem[] = [
    {
      number: '01',
      icon: UserCheck,
      titleEn: 'Arrive As You Are',
      titleMr: 'तुम्ही जसे आहात तसेच या',
      subtitleEn: 'Zero Medical Jargon',
      subtitleMr: 'कोणत्याही संकोचाची गरज नाही',
      descEn:
        'You do not need to prepare a formal explanation or worry about how to describe your pain. We begin with what feels comfortable for you to share, in a strictly private and warm room.',
      descMr:
        'मनातील भीती, अस्वस्थता किंवा भावना व्यक्त करण्यासाठी कोणत्याही अवघड शब्दांची गरज नसते. अगदी शांतपणे व मोकळेपणाने तुमचे म्हणणे ऐकून घेतले जाते.',
      guaranteeEn: '100% Confidential Listening',
      guaranteeMr: '१००% खाजगी व शांत संवाद',
    },
    {
      number: '02',
      icon: Stethoscope,
      titleEn: 'Understand Together',
      titleMr: 'एकत्रित समजून घेणे व निदान',
      subtitleEn: 'Transparent Clinical Clarity',
      subtitleMr: 'पारदर्शक वैद्यकीय दृष्टिकोन',
      descEn:
        'Dr. Shradha carefully evaluates neurological, psychological, and lifestyle factors. If EEG or lab tests are indicated, every step is explained clearly so you remain an empowered partner in your care.',
      descMr:
        'मेंदूतील रासायनिक बदल, मानसिक ताण आणि जीवनशैलीचा अभ्यास करून योग्य निदान केले जाते. चाचण्या किंवा औषधांमागील कारणे रुग्णाला स्पष्टपणे समजावून सांगितली जातात.',
      guaranteeEn: 'Clear Diagnostic Rationale',
      guaranteeMr: 'अचूक व शास्त्रीय स्पष्टता',
    },
    {
      number: '03',
      icon: HeartPulse,
      titleEn: 'Move At Your Pace',
      titleMr: 'तुमच्या गतीने शाश्वत सुधारणा',
      subtitleEn: 'Sustainable Recovery Roadmap',
      subtitleMr: 'दीर्घकालीन मानसिक स्वास्थ्य',
      descEn:
        'Progress in mental health is a process of steady restoration. Through structured follow-ups, gradual medicine tapering, and family counseling, we help you regain confidence and joyful living.',
      descMr:
        'मानसोपचार हा तात्पुरता नसून शाश्वत सुधारणेचा मार्ग आहे. नियमित पाठपुरावा, समुपदेशन आणि वेळेवर औषध कमी करत रुग्णाला पुन्हा स्वतंत्र व आनंदी जीवन जगता येते.',
      guaranteeEn: 'Gradual Tapering Pathway',
      guaranteeMr: 'टप्प्याटप्प्याने औषधमुक्ती',
    },
  ];

  return (
    <section id="approach" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-teal-800/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 reveal-on-scroll">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold-600">
            <span className="h-0.5 w-6 bg-gold-500 rounded-full" />
            <span>{t.appEyebrow}</span>
            <span className="h-0.5 w-6 bg-gold-500 rounded-full" />
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-teal-brand tracking-tight text-balance">
            {t.appHeading}
          </h2>

          <p className="text-base text-slate-600 leading-relaxed max-w-2xl mx-auto pt-1">
            {language === 'mr'
              ? 'मानसिक उपचारांची प्रक्रिया कशी चालते याबद्दल संपूर्ण पारदर्शकता.'
              : 'Mental healthcare with clarity, patience, and purpose at every single stage.'}
          </p>
        </div>

        {/* 3 Step Process 3D Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((st, idx) => (
            <StepCard key={idx} st={st} idx={idx} language={language} />
          ))}
        </div>
      </div>
    </section>
  );
};
