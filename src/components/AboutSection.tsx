import React from 'react';
import { Ear, Sparkles, HeartHandshake, Compass } from 'lucide-react';
import { Language } from '../types/clinic';
import { TRANSLATIONS } from '../data/translations';

interface AboutSectionProps {
  language: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ language }) => {
  const t = TRANSLATIONS[language];

  const pillars = [
    {
      icon: Ear,
      number: '01',
      titleEn: 'Listen with Unhurried Presence',
      titleMr: 'शांतपणे व सविस्तर ऐकून घेणे',
      descEn: 'We do not reduce your struggles to a five-minute tick-box. Every consultation provides ample time to express what hurts, without shame or judgment.',
      descMr: 'कोणतीही घाई न करता रुग्णाचे विचार, भावना व वेदना समजून घेणे. येथे कोणावरही टीका किंवा लेबल लावले जात नाही.',
      delayClass: 'delay-100',
    },
    {
      icon: Compass,
      number: '02',
      titleEn: 'Rational, Science-Backed Treatment',
      titleMr: 'शास्त्रीय व अचूक औषधोपचार',
      descEn: 'Medical treatments are carefully calibrated with minimum effective dosages, alongside evidence-based cognitive therapy and neuro-diagnostics like EEG when indicated.',
      descMr: 'जागतिक वैद्यकीय निकषांनुसार मोजकी आणि अचूक औषधे. गैरसमज दूर करून रुग्णाला स्वतःच्या उपचारांची पूर्ण पारदर्शकता दिली जाते.',
      delayClass: 'delay-200',
    },
    {
      icon: HeartHandshake,
      number: '03',
      titleEn: 'Walk Alongside You & Your Family',
      titleMr: 'कुटुंबाला सोबत घेऊन शाश्वत आरोग्य',
      descEn: 'Recovery is a journey, not a single appointment. We provide caregiver counseling, lifestyle adaptations, and gradual tapering for sustainable emotional health.',
      descMr: 'औषधांसोबतच कुटुंबाचे सहकार्य, सकारात्मक वातावरण व समुपदेशन यांच्या साहाय्याने पुन्हा आत्मविश्वासाने जगण्याचा मार्ग तयार केला जातो.',
      delayClass: 'delay-300',
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#f5f8f6] relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 reveal-on-scroll">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold-600">
            <span className="h-px w-8 bg-gold-500" />
            <span>{t.aboutEyebrow}</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-teal-brand tracking-tight text-balance">
            {t.aboutHeading}
          </h2>

          <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed pt-2">
            <p>{t.aboutP1}</p>
            <p className="text-slate-600 text-sm sm:text-base">{t.aboutP2}</p>
          </div>
        </div>

        {/* 3 Pillars Grid with Staggered Scroll Reveal */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className={`card-premium rounded-3xl p-7 sm:p-8 flex flex-col justify-between relative overflow-hidden group reveal-on-scroll ${p.delayClass}`}
              >
                {/* Subtle top gold accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-brand via-gold-400 to-teal-brand opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  <div className="flex items-center justify-between">
                    <div className="h-12 w-12 rounded-2xl bg-teal-50 text-teal-brand flex items-center justify-center border border-teal-100 group-hover:bg-gold-50 group-hover:text-gold-700 transition-all duration-300 group-hover:scale-110">
                      <Icon size={22} />
                    </div>
                    <span className="font-display text-2xl font-bold text-gold-400/80">
                      {p.number}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-teal-brand tracking-tight group-hover:text-gold-700 transition-colors">
                    {language === 'mr' ? p.titleMr : p.titleEn}
                  </h3>

                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {language === 'mr' ? p.descMr : p.descEn}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-gold-700">
                  <Sparkles size={12} className="text-gold-500" />
                  <span>{language === 'mr' ? 'उमेद उपचार मूल्य' : 'UMED Care Standard'}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Philosophy Quotation Card */}
        <div className="mt-12 rounded-3xl bg-teal-brand text-white p-8 sm:p-12 shadow-premium relative overflow-hidden reveal-on-scroll delay-150">
          <div
            className="absolute -right-12 -bottom-12 w-64 h-64 rounded-full bg-teal-600/20 blur-2xl pointer-events-none animate-float"
            aria-hidden="true"
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-4xl text-gold-400 font-serif leading-none block">“</span>
              <p className="font-marathi text-2xl sm:text-3xl text-gold-300 font-bold leading-snug">
                “निरोगी मन, आनंदी जीवन”
              </p>
              <p className="font-display text-xl sm:text-2xl text-white font-medium italic leading-snug">
                {language === 'mr'
                  ? 'निरोगी मन आणि आनंदी जीवन हा प्रत्येकाचा मूलभूत अधिकार आहे. संकोच सोडून संवाद साधणे हेच आरोग्याचे पहिले पाऊल आहे.'
                  : 'A healthy mind is the foundation for a joyful, fulfilling life. Healing begins the moment you feel genuinely heard and understood.'}
              </p>
              <div className="pt-2 flex items-center gap-3">
                <div className="h-0.5 w-8 bg-gold-400" />
                <span className="text-xs uppercase font-bold tracking-widest text-gold-300">
                  {language === 'mr' ? 'उमेद ध्येयवाक्य' : 'UMED Core Philosophy'}
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm text-center max-w-xs transition-transform duration-300 hover:scale-105">
                <img
                  src="/images/omed_logo.jpeg"
                  alt="UMED Emblem"
                  className="h-16 w-16 mx-auto rounded-full object-cover object-top border-2 border-gold-400 shadow-md"
                />
                <p className="mt-3 font-marathi font-bold text-gold-300 text-sm">
                  “निरोगी मन, आनंदी जीवन”
                </p>
                <p className="text-[11px] text-teal-100 font-medium mt-1">
                  Centre for Mental Health · Latur
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
