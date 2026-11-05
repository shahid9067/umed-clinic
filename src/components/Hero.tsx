import React from 'react';
import {
  ArrowRight,
  Sparkles,
  Volume2,
  Shield,
  Award,
} from 'lucide-react';
import { Language } from '../types/clinic';
import { TRANSLATIONS } from '../data/translations';
import { useTilt3D } from '../hooks/useTilt3D';
import { useCountUp } from '../hooks/useCountUp';

interface HeroProps {
  language: Language;
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ language, onOpenBooking }) => {
  const t = TRANSLATIONS[language];
  const centerTilt = useTilt3D<HTMLDivElement>({ maxTilt: 6, scale: 1.015 });
  const leftCardTilt = useTilt3D<HTMLDivElement>({ maxTilt: 10, scale: 1.04 });
  const rightCardTilt = useTilt3D<HTMLDivElement>({ maxTilt: 10, scale: 1.04 });

  // Counting animation for hero page numbers
  const { ref: heroStatRef, value: heroPatientCount } = useCountUp({
    end: 5000,
    suffix: '+',
    duration: 2200,
  });

  return (
    <section
      id="home"
      className="relative pt-28 sm:pt-36 lg:pt-40 pb-16 lg:pb-24 overflow-hidden bg-gradient-to-b from-[#eaf2f1] via-[#f3f7f6] to-[#fafaf7] perspective-1000"
    >
      {/* 3D Volumetric Ambient Glow Spheres (Deep Teal & Moving Warm Gold) */}
      <div
        className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[560px] bg-gradient-to-b from-teal-600/15 via-gold-400/15 to-transparent blur-3xl pointer-events-none -z-10 rounded-full animate-pulse-subtle"
        aria-hidden="true"
      />
      <div
        className="absolute top-24 -left-24 w-[420px] h-[420px] bg-teal-800/12 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      {/* Moving Light Gold Volumetric Glow */}
      <div
        className="absolute top-28 right-0 sm:right-12 w-[460px] h-[460px] bg-gradient-to-br from-gold-400/35 via-gold-300/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10 animate-gold-move"
        aria-hidden="true"
      />
      {/* Central Moving Light Gold Halo */}
      <div
        className="absolute top-1/2 left-1/2 w-[520px] h-[520px] bg-radial from-gold-400/25 via-gold-500/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10 animate-gold-halo"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Centered Section: Eyebrow, Editorial Typography, Subtitle & Action Buttons */}
        <div className="text-center max-w-3xl mx-auto space-y-5">
          {/* Authentic Marathi Motto & Location Badge with 3D Depth */}
          <div
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-teal-900/10 bg-white/95 shadow-sm backdrop-blur-md transition-all duration-300 hover:scale-102 hover:border-gold-400/60 anim-entrance-down"
            style={{ animationDelay: '80ms' }}
          >
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
          <h1
            className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[4.75rem] font-normal leading-[1.06] tracking-tight text-teal-brand text-balance anim-entrance-up"
            style={{ animationDelay: '180ms' }}
          >
            {language === 'mr' ? (
              <>
                <span className="drop-shadow-xs">निरोगी मन</span><br />
                <span className="relative inline-block italic font-normal font-serif text-gold-600 pb-1">
                  आनंदी जीवनासाठी.
                  <svg
                    className="absolute -bottom-1.5 sm:-bottom-2.5 left-0 w-full h-3 sm:h-4 pointer-events-none overflow-visible"
                    viewBox="0 0 250 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 10C50 3 130 2 247 9C180 4 90 6 22 12"
                      stroke="url(#underline-gold-gradient-mr)"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      className="animate-draw-underline"
                    />
                    <defs>
                      <linearGradient id="underline-gold-gradient-mr" x1="0" y1="0" x2="250" y2="0" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#9e732c" />
                        <stop offset="0.5" stopColor="#dfc476" />
                        <stop offset="1" stopColor="#b88e38" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </>
            ) : (
              <>
                <span className="drop-shadow-xs">A Clearer Mind</span><br />
                <span className="relative inline-block italic font-normal font-serif text-gold-600 pb-1">
                  For A Brighter You.
                  <svg
                    className="absolute -bottom-1.5 sm:-bottom-2.5 left-0 w-full h-3 sm:h-4 pointer-events-none overflow-visible"
                    viewBox="0 0 250 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 10C50 3 130 2 247 9C180 4 90 6 22 12"
                      stroke="url(#underline-gold-gradient-en)"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      className="animate-draw-underline"
                    />
                    <defs>
                      <linearGradient id="underline-gold-gradient-en" x1="0" y1="0" x2="250" y2="0" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#9e732c" />
                        <stop offset="0.5" stopColor="#dfc476" />
                        <stop offset="1" stopColor="#b88e38" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </>
            )}
          </h1>

          {/* Centered Subtitle */}
          <p
            className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal anim-entrance-up"
            style={{ animationDelay: '280ms' }}
          >
            {language === 'mr'
              ? 'लातूर येथील विश्वासार्ह मानसोपचार केंद्र. डॉ. श्रद्धा पत्रिके यांच्या मार्गदर्शनाखाली संपूर्ण गोपनीय, शास्त्रीय उपचार व ईईजी मेंदू तपासणी.'
              : 'Compassionate, unhurried psychiatric care and in-house neuro-diagnostics in Latur — guiding you towards lasting emotional peace.'}
          </p>

          {/* Centered Dual Action Buttons in Theme Palette with 3D Depth */}
          <div
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2 anim-entrance-up"
            style={{ animationDelay: '380ms' }}
          >
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-teal-brand hover:bg-teal-900 text-white font-medium text-xs sm:text-sm px-7 py-3.5 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5 group btn-interactive border border-white/20"
            >
              <span>{t.btnBookWhatsApp}</span>
              <ArrowRight
                size={15}
                className="transition-transform duration-200 group-hover:translate-x-1 text-gold-400"
              />
            </button>

            <a
              href="#care"
              className="inline-flex items-center justify-center gap-2.5 rounded-full border border-slate-300/80 bg-white hover:bg-teal-50/50 text-teal-brand font-medium text-xs sm:text-sm px-6 py-3.5 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 btn-interactive"
            >
              <span className="h-5 w-5 rounded-full bg-teal-brand text-gold-400 flex items-center justify-center text-[9px] pl-0.5 shadow-xs">
                ▶
              </span>
              <span>{language === 'mr' ? 'आरोग्य सेवा पहा' : 'Explore Care Areas'}</span>
            </a>
          </div>

          {/* 3 Micro Trust Signals directly below CTA */}
          <div
            className="pt-2 flex items-center justify-center gap-4 sm:gap-6 text-[11px] sm:text-xs font-semibold text-slate-500 anim-entrance-up"
            style={{ animationDelay: '440ms' }}
          >
            <span className="inline-flex items-center gap-1.5 text-teal-900">
              <Shield size={14} className="text-emerald-600" />
              <span>{language === 'mr' ? '१००% संपूर्ण गोपनीयता' : '100% Strict Patient Privacy'}</span>
            </span>
            <span className="h-3 w-px bg-slate-300" />
            <span className="inline-flex items-center gap-1.5 text-teal-900">
              <Award size={14} className="text-gold-600" />
              <span>{language === 'mr' ? 'तज्ज्ञ मानसोपचार (MBBS, DPM)' : 'Consultant Psychiatrist (MBBS, DPM)'}</span>
            </span>
          </div>
        </div>

        {/* Central Visual Composition with 3D Orbiting Cards, Connecting Lines, and Social Proof */}
        <div
          className="relative max-w-5xl mx-auto mt-10 sm:mt-14 pt-4 anim-entrance-scale"
          style={{ animationDelay: '480ms' }}
        >
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

          {/* Top Left Floating 3D Card (With Interactive Tilt and Audio Waves) */}
          <div
            ref={leftCardTilt.ref}
            onMouseMove={leftCardTilt.onMouseMove}
            onMouseLeave={leftCardTilt.onMouseLeave}
            style={leftCardTilt.style}
            className="absolute top-4 left-0 sm:left-4 lg:left-6 z-20 animate-float hidden md:block cursor-pointer"
          >
            <div className="glass-card-luxury rounded-2xl p-4 sm:p-5 shadow-xl border border-white/80 max-w-[210px] transition-all duration-300">
              <div className="flex items-center justify-between mb-3">
                <div className="h-8 w-8 rounded-xl bg-teal-50 flex items-center justify-center text-teal-brand shadow-xs">
                  <Volume2 size={16} className="text-teal-brand" />
                </div>
                {/* Live subtle soundwave visualizer */}
                <div className="flex items-center gap-0.5 h-4">
                  <span className="w-0.5 bg-teal-500 rounded-full h-3 animate-pulse" />
                  <span className="w-0.5 bg-gold-500 rounded-full h-4 animate-pulse" style={{ animationDelay: '150ms' }} />
                  <span className="w-0.5 bg-teal-600 rounded-full h-2 animate-pulse" style={{ animationDelay: '300ms' }} />
                  <span className="w-0.5 bg-gold-600 rounded-full h-3.5 animate-pulse" style={{ animationDelay: '75ms' }} />
                </div>
              </div>
              <h3 className="font-bold text-xs sm:text-sm text-teal-brand leading-snug">
                {language === 'mr' ? 'शांतपणे ऐकून घेणारे' : 'Turn Thoughts Into Healing.'}
              </h3>
              <p className="mt-1 text-[11px] text-slate-500 leading-relaxed">
                {language === 'mr'
                  ? 'गोपनीय व काळजीपूर्वक मानसोपचार.'
                  : 'Private, unhurried psychiatric care.'}
              </p>
            </div>
          </div>

          {/* Top Right Spinning Star Badge (Exact Match from Reference with Glowing Star) */}
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
                <div className="relative">
                  <Sparkles size={18} className="text-gold-500 animate-pulse" />
                  <div className="absolute inset-0 bg-gold-400 blur-sm opacity-50 rounded-full animate-ping" />
                </div>
              </div>
            </div>
          </div>

          {/* Floating 3D Card Right (Positioned Lower so Spinning Badge Sits Nicely Above) */}
          <div
            ref={rightCardTilt.ref}
            onMouseMove={rightCardTilt.onMouseMove}
            onMouseLeave={rightCardTilt.onMouseLeave}
            style={rightCardTilt.style}
            className="absolute top-32 right-0 sm:right-4 lg:right-6 z-20 animate-float-delayed hidden md:block cursor-pointer"
          >
            <div className="glass-card-luxury rounded-2xl p-4 sm:p-5 shadow-xl border border-white/80 max-w-[210px] transition-all duration-300">
              {/* Avatar stack */}
              <div className="flex items-center mb-3">
                <div className="flex -space-x-2">
                  <img
                    src="/images/doctor_image.jpeg"
                    alt="Dr. Shradha Patrike"
                    className="h-7 w-7 rounded-full border-2 border-white object-cover shadow-xs"
                  />
                  <div className="h-7 w-7 rounded-full bg-teal-brand text-white text-[9px] font-bold flex items-center justify-center border-2 border-white shadow-xs">
                    SP
                  </div>
                  <div className="h-7 w-7 rounded-full bg-gold-500 text-white text-[9px] font-bold flex items-center justify-center border-2 border-white shadow-xs">
                    +
                  </div>
                </div>
              </div>
              <h3 className="font-bold text-xs sm:text-sm text-teal-brand leading-snug">
                {language === 'mr' ? 'विश्वासू रुग्णसेवा' : 'Care Anytime, Anywhere.'}
              </h3>
              <p className="mt-1 text-[11px] text-slate-500 leading-relaxed">
                {language === 'mr'
                  ? 'ओपीडी व आयपीडी रुग्ण विभाग.'
                  : 'Specialist outpatient & inpatient care.'}
              </p>
            </div>
          </div>

          {/* Main Central Mind Portrait on 3D Pedestal */}
          <div
            ref={centerTilt.ref}
            onMouseMove={centerTilt.onMouseMove}
            onMouseLeave={centerTilt.onMouseLeave}
            style={centerTilt.style}
            className="relative mx-auto max-w-2xl px-4 flex justify-center cursor-pointer"
          >
            <div className="relative overflow-hidden rounded-3xl w-full max-w-xl group">
              {/* Soft radial pedestal glow behind head */}
              <div className="absolute inset-0 bg-radial from-teal-400/20 via-transparent to-transparent pointer-events-none rounded-full blur-2xl" />

              <img
                src="/images/hero-mind-portrait.png"
                alt="Mental Clarity and Healing at UMED Clinic"
                className="w-full h-auto object-contain mx-auto transition-transform duration-700 ease-out group-hover:scale-102"
              />

              {/* Seamless gradient fade at the bottom into the page */}
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#fafaf7] via-[#fafaf7]/50 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Bottom Left Social Proof Stack with Counting Animation */}
          <div className="absolute bottom-4 left-4 sm:left-10 lg:left-16 z-20 hidden md:block">
            <div ref={heroStatRef} className="space-y-1.5 p-3 rounded-2xl glass-card-luxury border border-white/80 shadow-md">
              <p className="text-[11px] font-semibold text-slate-700">
                {language === 'mr'
                  ? `${heroPatientCount} समाधानी रुग्ण व कुटुंबे`
                  : `Trusted by ${heroPatientCount} patients & families`}
              </p>
              <div className="flex items-center -space-x-2">
                <img
                  src="/images/doctor_image.jpeg"
                  alt="Dr. Shradha Patrike"
                  className="h-6 w-6 rounded-full border-2 border-white object-cover shadow-xs"
                />
                <div className="h-6 w-6 rounded-full bg-teal-100 text-teal-800 text-[9px] font-bold flex items-center justify-center border-2 border-white">
                  SP
                </div>
                <div className="h-6 w-6 rounded-full bg-amber-100 text-amber-800 text-[9px] font-bold flex items-center justify-center border-2 border-white">
                  RK
                </div>
                <div className="h-6 w-6 rounded-full bg-slate-200 text-slate-700 text-[9px] font-bold flex items-center justify-center border-2 border-white">
                  +
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Right Minimalist Sparkle (Moved inwards to avoid WhatsApp float overlap) */}
          <div className="absolute bottom-4 right-10 sm:right-16 lg:right-28 z-20 text-right hidden md:block">
            <div className="space-y-0.5 p-3 rounded-2xl glass-card-luxury border border-white/80 shadow-md">
              <Sparkles size={16} className="text-gold-500 ml-auto mb-1 animate-pulse" />
              <p className="text-xs font-bold text-teal-brand">
                {language === 'mr' ? 'कमी तणाव.' : 'Less chaos.'}
              </p>
              <p className="text-xs font-semibold text-gold-600">
                {language === 'mr' ? 'अधिक मनःशांती.' : 'More clarity.'}
              </p>
            </div>
          </div>
        </div>

        {/* Mobile-Friendly Feature Cards (Shown on mobile screens below the center image) */}
        <div className="mt-8 grid grid-cols-2 gap-3 md:hidden">
          <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-sm border border-slate-200/80">
            <Volume2 size={18} className="text-teal-brand mb-2" />
            <h3 className="font-bold text-xs text-teal-brand">
              {language === 'mr' ? 'शांत सल्ला' : 'Turn Thoughts Into Healing.'}
            </h3>
            <p className="text-[10px] text-slate-500 mt-1">
              {language === 'mr' ? 'गोपनीय मानसोपचार.' : 'Private psychiatric care.'}
            </p>
          </div>

          <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-sm border border-slate-200/80">
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
