import React from 'react';
import {
  ArrowRight,
  Sparkles,
  Volume2,
} from 'lucide-react';
import { Language } from '../types/clinic';
import { TRANSLATIONS } from '../data/translations';

interface HeroProps {
  language: Language;
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ language, onOpenBooking }) => {
  const t = TRANSLATIONS[language];

  return (
    <section
      id="home"
      className="relative pt-28 sm:pt-36 lg:pt-40 pb-16 lg:pb-24 overflow-hidden bg-[#fafaf7]"
    >
      {/* Soft ethereal ambient background glow matching the Mindly aesthetic */}
      <div
        className="absolute top-12 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[480px] bg-gradient-to-b from-teal-100/35 via-gold-100/20 to-transparent blur-3xl pointer-events-none -z-10 rounded-full"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Centered Section: Eyebrow, Editorial Typography, Subtitle & Action Buttons */}
        <div className="text-center max-w-3xl mx-auto space-y-5 animate-hero-enter">
          {/* Authentic Marathi Motto & Location Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-teal-900/10 bg-white/90 shadow-2xs backdrop-blur-sm transition-transform duration-300 hover:scale-102">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
            </span>
            <span className="text-[11px] sm:text-xs font-semibold text-teal-brand tracking-wide">
              {t.badgeLicensed}
            </span>
            <span className="hidden xs:inline-block h-3 w-px bg-slate-300" />
            <span className="hidden xs:inline-block text-[11px] sm:text-xs font-bold text-gold-700 font-marathi">
              “निरोगी मन, आनंदी जीवन”
            </span>
          </div>

          {/* Main Editorial Headline in Our Signature Theme Colors (Deep Teal & Warm Gold) */}
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[4.75rem] font-normal leading-[1.06] tracking-tight text-teal-brand text-balance">
            {language === 'mr' ? (
              <>
                <span>निरोगी मन</span><br />
                <span className="italic font-normal font-serif text-gold-600">
                  आनंदी जीवनासाठी.
                </span>
              </>
            ) : (
              <>
                <span>A Clearer Mind</span><br />
                <span className="italic font-normal font-serif text-gold-600">
                  For A Brighter You.
                </span>
              </>
            )}
          </h1>

          {/* Centered Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            {language === 'mr'
              ? 'रुग्णाचे म्हणणे शांतपणे ऐकून घेणारे हक्काचे ठिकाण. डॉ. श्रद्धा (नितूरे) पत्रिके यांच्या मार्गदर्शनाखाली लातूर येथे उपलब्ध आधुनिक मानसोपचार, समुपदेशन व ईईजी मेंदू तपासणी सुविधा.'
              : 'UMED helps you find clarity, overcome anxiety and emotional distress, and rebuild peace — through unhurried psychiatric care and in-house neuro-diagnostics in Latur.'}
          </p>

          {/* Centered Dual Action Buttons in Theme Palette */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-teal-brand hover:bg-teal-900 text-white font-medium text-xs sm:text-sm px-7 py-3.5 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 group btn-interactive"
            >
              <span>{t.btnBookWhatsApp}</span>
              <ArrowRight
                size={15}
                className="transition-transform duration-200 group-hover:translate-x-1 text-gold-400"
              />
            </button>

            <a
              href="#care"
              className="inline-flex items-center justify-center gap-2.5 rounded-full border border-slate-300/80 bg-white hover:bg-teal-50/50 text-teal-brand font-medium text-xs sm:text-sm px-6 py-3.5 shadow-2xs hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 btn-interactive"
            >
              <span className="h-5 w-5 rounded-full bg-teal-brand text-gold-400 flex items-center justify-center text-[9px] pl-0.5">
                ▶
              </span>
              <span>{language === 'mr' ? 'आरोग्य सेवा पहा' : 'Explore Care Areas'}</span>
            </a>
          </div>
        </div>

        {/* Central Visual Composition with 3D Orbiting Cards, Connecting Lines, and Social Proof */}
        <div className="relative max-w-5xl mx-auto mt-10 sm:mt-14 pt-4">
          {/* Subtle Organic Curved Connecting Lines (Splines) */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none hidden md:block z-10"
            viewBox="0 0 1000 450"
            fill="none"
            aria-hidden="true"
          >
            {/* Left Spline connecting Left Floating Card to Orbit */}
            <path
              d="M 240 120 C 310 160, 360 185, 430 200"
              stroke="#cbd5e1"
              strokeWidth="1.2"
              strokeDasharray="4 3"
            />
            {/* Right Spline connecting Right Floating Card to Orbit */}
            <path
              d="M 770 210 C 700 220, 650 215, 575 200"
              stroke="#cbd5e1"
              strokeWidth="1.2"
              strokeDasharray="4 3"
            />
          </svg>

          {/* Top Left Floating Card (Connected by Wire) */}
          <div className="absolute top-4 left-0 sm:left-4 lg:left-6 z-20 animate-float hidden md:block">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-lg border border-slate-200/90 max-w-[210px] transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="h-8 w-8 rounded-xl bg-teal-50 flex items-center justify-center text-teal-brand mb-3">
                <Volume2 size={16} className="text-teal-brand" />
              </div>
              <h3 className="font-bold text-xs sm:text-sm text-teal-brand leading-snug">
                {language === 'mr' ? 'शांतपणे ऐकून घेणारे' : 'Turn Thoughts Into Progress.'}
              </h3>
              <p className="mt-1 text-[11px] text-slate-500 leading-relaxed">
                {language === 'mr'
                  ? 'गोपनीय व काळजीपूर्वक मानसोपचार.'
                  : 'Private, unhurried psychiatric care.'}
              </p>
            </div>
          </div>

          {/* Top Right Spinning Star Badge (Exact Match from Reference) */}
          <div className="absolute top-0 right-2 sm:right-8 lg:right-16 z-20 hidden md:block">
            <div className="relative h-24 w-24 sm:h-28 sm:w-28 flex items-center justify-center animate-spin-slow">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <path
                  id="heroCircleTextPath"
                  d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                  fill="transparent"
                />
                <text className="text-[7.2px] uppercase font-bold tracking-[0.24em] fill-slate-700">
                  <textPath href="#heroCircleTextPath" startOffset="0%">
                    ★ NIRŌGĪ MAN · ĀNANDĪ JĪVAN ★ UMED CLINIC
                  </textPath>
                </text>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <Sparkles size={18} className="text-gold-500" />
              </div>
            </div>
          </div>

          {/* Floating Card Right (Positioned Lower so Spinning Badge Sits Nicely Above) */}
          <div className="absolute top-32 right-0 sm:right-4 lg:right-6 z-20 animate-float-delayed hidden md:block">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-lg border border-slate-200/90 max-w-[210px] transition-all duration-300 hover:scale-105 hover:shadow-xl">
              {/* Avatar stack */}
              <div className="flex items-center mb-3">
                <div className="flex -space-x-2">
                  <img
                    src="/images/doctor_image.jpeg"
                    alt="Dr. Shradha Patrike"
                    className="h-7 w-7 rounded-full border-2 border-white object-cover"
                  />
                  <div className="h-7 w-7 rounded-full bg-teal-brand text-white text-[9px] font-bold flex items-center justify-center border-2 border-white">
                    SP
                  </div>
                  <div className="h-7 w-7 rounded-full bg-gold-500 text-white text-[9px] font-bold flex items-center justify-center border-2 border-white">
                    +
                  </div>
                </div>
              </div>
              <h3 className="font-bold text-xs sm:text-sm text-teal-brand leading-snug">
                {language === 'mr' ? 'विश्वासू रुग्णसेवा' : 'Ideas, Anytime, Anywhere.'}
              </h3>
              <p className="mt-1 text-[11px] text-slate-500 leading-relaxed">
                {language === 'mr'
                  ? 'ओपीडी व आयपीडी रुग्ण विभाग.'
                  : 'Specialist outpatient & inpatient care.'}
              </p>
            </div>
          </div>

          {/* Main Central Mind Portrait */}
          <div className="relative mx-auto max-w-2xl px-4 flex justify-center">
            <div className="relative overflow-hidden rounded-3xl w-full max-w-xl">
              <img
                src="/images/hero-mind-portrait.png"
                alt="Mental Clarity and Healing at UMED Clinic"
                className="w-full h-auto object-contain mx-auto transition-transform duration-700 ease-out hover:scale-102"
              />

              {/* Seamless gradient fade at the bottom into the page */}
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#fafaf7] via-[#fafaf7]/40 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Bottom Left Social Proof Stack */}
          <div className="absolute bottom-4 left-4 sm:left-10 lg:left-16 z-20 hidden md:block">
            <div className="space-y-1.5">
              <p className="text-[11px] font-medium text-slate-500">
                {language === 'mr'
                  ? '५,०००+ समाधानी रुग्ण व कुटुंबे'
                  : 'Trusted by 5,000+ patients & families.'}
              </p>
              <div className="flex items-center -space-x-2">
                <img
                  src="/images/doctor_image.jpeg"
                  alt="Dr. Shradha Patrike"
                  className="h-7 w-7 rounded-full border-2 border-white object-cover shadow-xs"
                />
                <div className="h-7 w-7 rounded-full bg-teal-100 text-teal-800 text-[10px] font-bold flex items-center justify-center border-2 border-white">
                  SP
                </div>
                <div className="h-7 w-7 rounded-full bg-amber-100 text-amber-800 text-[10px] font-bold flex items-center justify-center border-2 border-white">
                  RK
                </div>
                <div className="h-7 w-7 rounded-full bg-slate-200 text-slate-700 text-[10px] font-bold flex items-center justify-center border-2 border-white">
                  +
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Right Minimalist Sparkle (Moved inwards to avoid WhatsApp float overlap) */}
          <div className="absolute bottom-4 right-10 sm:right-16 lg:right-28 z-20 text-right hidden md:block">
            <div className="space-y-0.5">
              <Sparkles size={16} className="text-gold-500 ml-auto mb-1" />
              <p className="text-xs font-semibold text-teal-brand">
                {language === 'mr' ? 'कमी तणाव.' : 'Less chaos.'}
              </p>
              <p className="text-xs font-semibold text-slate-500">
                {language === 'mr' ? 'अधिक मनःशांती.' : 'More clarity.'}
              </p>
            </div>
          </div>
        </div>

        {/* Mobile-Friendly Feature Cards (Shown on mobile screens below the center image) */}
        <div className="mt-8 grid grid-cols-2 gap-3 md:hidden">
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200/80">
            <Volume2 size={18} className="text-teal-brand mb-2" />
            <h3 className="font-bold text-xs text-teal-brand">
              {language === 'mr' ? 'शांत सल्ला' : 'Turn Thoughts Into Progress.'}
            </h3>
            <p className="text-[10px] text-slate-500 mt-1">
              {language === 'mr' ? 'गोपनीय मानसोपचार.' : 'Private psychiatric care.'}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200/80">
            <Sparkles size={18} className="text-gold-500 mb-2" />
            <h3 className="font-bold text-xs text-teal-brand">
              {language === 'mr' ? 'अधिक मनःशांती' : 'Less Chaos. More Clarity.'}
            </h3>
            <p className="text-[10px] text-slate-500 mt-1">
              {language === 'mr' ? 'शास्त्रीय उपचार.' : 'Evidence-based healing.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
