import React, { useState, useEffect } from 'react';
import {
  Ear,
  Sparkles,
  HeartHandshake,
  Compass,
  Activity,
  Users,
  ArrowUpRight,
  ShieldCheck,
  Heart,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
} from 'lucide-react';
import { Language } from '../types/clinic';
import { TRANSLATIONS } from '../data/translations';
import { useTilt3D } from '../hooks/useTilt3D';
import { useCountUp } from '../hooks/useCountUp';

interface AboutSectionProps {
  language: Language;
}

interface ArcSlideItem {
  id: string;
  image: string;
  altEn: string;
  altMr: string;
  tagEn: string;
  tagMr: string;
}

const ARC_SLIDES: ArcSlideItem[] = [
  {
    id: 'mindfulness',
    image: '/images/care/care-anxiety.jpg',
    altEn: 'Mindfulness, calm mind, and inner peace',
    altMr: 'शांत मन आणि तणावमुक्ती',
    tagEn: 'Emotional Peace',
    tagMr: 'भावनिक शांती',
  },
  {
    id: 'listening',
    image: '/images/about-listening.jpg',
    altEn: 'Unhurried private psychiatric consultation',
    altMr: 'शांतपणे ऐकून घेणारे खाजगी समुपदेशन',
    tagEn: 'Unhurried Presence',
    tagMr: 'सविस्तर संवाद',
  },
  {
    id: 'student',
    image: '/images/care/care-student.jpg',
    altEn: 'Student focus, confidence, and optimism',
    altMr: 'विद्यार्थी एकाग्रता व आत्मविश्वास',
    tagEn: 'Clarity & Focus',
    tagMr: 'एकाग्रता व आत्मविश्वास',
  },
  {
    id: 'recovery',
    image: '/images/facility-ipd.jpg',
    altEn: 'Comfortable, serene inpatient recovery ward',
    altMr: 'शांत व सुरक्षित अंतररुग्ण विभाग',
    tagEn: 'Dignified Healing',
    tagMr: 'सन्मानपूर्वक उपचार',
  },
  {
    id: 'diagnostics',
    image: '/images/facility-eeg.jpg',
    altEn: 'In-house digital 32-channel EEG brainwave testing',
    altMr: 'मेंदूच्या लहरींचे अचूक ईईजी निदान',
    tagEn: 'Neuro-Diagnostics',
    tagMr: 'अचूक ब्रेन मॅपिंग',
  },
  {
    id: 'general',
    image: '/images/care/care-general.jpg',
    altEn: 'Compassionate family guidance & medical care',
    altMr: 'कुटुंब सहकार्य व मानसिक आरोग्य',
    tagEn: 'Family Partnership',
    tagMr: 'कुटुंब सहकार्य',
  },
];

// Single animated stat block with count-up hook
const AnimatedStatItem: React.FC<{
  end: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  labelEn: string;
  labelMr: string;
  subEn: string;
  subMr: string;
  language: Language;
}> = ({ end, suffix = '', prefix = '', decimals = 0, labelEn, labelMr, subEn, subMr, language }) => {
  const { ref, value } = useCountUp({
    end,
    duration: 2200,
    decimals,
    suffix,
    prefix,
  });

  return (
    <div
      ref={ref}
      className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-soft hover:shadow-md transition-all duration-300 text-center flex flex-col justify-between group hover:-translate-y-1"
    >
      <div>
        <p className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-teal-brand tracking-tight group-hover:text-gold-600 transition-colors">
          {value}
        </p>
        <p className="mt-2 text-xs sm:text-sm font-bold text-slate-800">
          {language === 'mr' ? labelMr : labelEn}
        </p>
      </div>
      <p className="mt-1 text-[11px] text-slate-500 font-medium">
        {language === 'mr' ? subMr : subEn}
      </p>
    </div>
  );
};

export const AboutSection: React.FC<AboutSectionProps> = ({ language }) => {
  const t = TRANSLATIONS[language];
  const cardTilt1 = useTilt3D(6);
  const cardTilt2 = useTilt3D(6);
  const cardTilt3 = useTilt3D(6);
  const cardTilt4 = useTilt3D(6);

  // Slide state for the curved arc carousel
  const [activeSlide, setActiveSlide] = useState(2); // center card active
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % ARC_SLIDES.length);
    }, 3800);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrevSlide = () => {
    setIsAutoPlaying(false);
    setActiveSlide((prev) => (prev === 0 ? ARC_SLIDES.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setIsAutoPlaying(false);
    setActiveSlide((prev) => (prev + 1) % ARC_SLIDES.length);
  };

  return (
    <section
      id="about"
      className="py-20 lg:py-28 bg-[#f5f8f6] relative overflow-hidden scroll-mt-24 sm:scroll-mt-28"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-teal-800/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ==========================================================
            GRAND SEMI-CIRCULAR ARC DIAL SHOWCASE (Matching Reference)
            ========================================================== */}
        <div className="relative pt-6 pb-12 sm:pb-16 text-center max-w-5xl mx-auto reveal-on-scroll">
          {/* Radial Arc Track with Graduation Dial Marks */}
          <div className="relative mx-auto w-full max-w-4xl h-[280px] sm:h-[340px] md:h-[390px] flex items-end justify-center overflow-visible">
            {/* SVG Precision Semi-Circular Dial Line & Radial Ticks */}
            <svg
              className="absolute inset-x-0 bottom-0 w-full h-[260px] sm:h-[320px] md:h-[370px] pointer-events-none overflow-visible"
              viewBox="0 0 900 450"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Outer faint glow arc */}
              <path
                d="M 50 440 A 400 400 0 0 1 850 440"
                stroke="rgba(184, 142, 56, 0.25)"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />

              {/* Main solid precision guide arc */}
              <path
                d="M 90 440 A 360 360 0 0 1 810 440"
                stroke="rgba(15, 61, 67, 0.2)"
                strokeWidth="2"
              />

              {/* Radial tick marks along the arc circumference */}
              {Array.from({ length: 65 }).map((_, i) => {
                const angle = 180 + (i / 64) * 180;
                const rad = (angle * Math.PI) / 180;
                const cx = 450;
                const cy = 440;
                const rInner = i % 5 === 0 ? 342 : 352;
                const rOuter = 368;
                const x1 = cx + rInner * Math.cos(rad);
                const y1 = cy + rInner * Math.sin(rad);
                const x2 = cx + rOuter * Math.cos(rad);
                const y2 = cy + rOuter * Math.sin(rad);

                return (
                  <line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke={i % 5 === 0 ? 'rgba(184, 142, 56, 0.7)' : 'rgba(15, 61, 67, 0.25)'}
                    strokeWidth={i % 5 === 0 ? '2' : '1'}
                  />
                );
              })}
            </svg>

            {/* Radial Cards Arched along the Perimeter (Slide / Rotation Animation) */}
            <div className="absolute top-0 inset-x-0 h-full flex items-center justify-center pointer-events-none">
              <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
                {ARC_SLIDES.map((slide, idx) => {
                  // Calculate relative offset from active slide
                  const offset = (idx - activeSlide + ARC_SLIDES.length) % ARC_SLIDES.length;
                  // Map to centered index: -2, -1, 0, 1, 2
                  const signedOffset = offset > ARC_SLIDES.length / 2 ? offset - ARC_SLIDES.length : offset;

                  // Visible range: -2 to +2
                  const isVisible = Math.abs(signedOffset) <= 2;
                  if (!isVisible) return null;

                  // Distinct angular and translation offsets along the semicircle
                  const rotationAngle = signedOffset * 17; // -34deg, -17deg, 0deg, +17deg, +34deg
                  const xTranslate = signedOffset * 155; // pixels spread
                  const yTranslate = Math.abs(signedOffset) * 22; // curve downward on sides
                  const scale = signedOffset === 0 ? 1.08 : 0.94 - Math.abs(signedOffset) * 0.05;
                  const zIndex = 20 - Math.abs(signedOffset) * 2;
                  const opacity = signedOffset === 0 ? 1 : 0.88 - Math.abs(signedOffset) * 0.15;

                  return (
                    <div
                      key={slide.id}
                      onClick={() => {
                        setIsAutoPlaying(false);
                        setActiveSlide(idx);
                      }}
                      className="absolute pointer-events-auto cursor-pointer transition-all duration-700 ease-out group"
                      style={{
                        transform: `translateX(${xTranslate}px) translateY(${yTranslate}px) rotate(${rotationAngle}deg) scale(${scale})`,
                        zIndex,
                        opacity,
                        transformOrigin: 'center 280px',
                      }}
                    >
                      <div
                        className={`w-28 sm:w-36 md:w-44 h-40 sm:h-52 md:h-60 rounded-2xl sm:rounded-3xl overflow-hidden p-1 bg-white border-2 transition-all duration-300 shadow-xl ${
                          signedOffset === 0
                            ? 'border-gold-400 ring-4 ring-gold-400/20 shadow-2xl'
                            : 'border-white/80 hover:border-gold-300'
                        }`}
                      >
                        <div className="relative w-full h-full rounded-xl sm:rounded-2xl overflow-hidden bg-teal-950">
                          <img
                            src={slide.image}
                            alt={language === 'mr' ? slide.altMr : slide.altEn}
                            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-teal-950/80 via-transparent to-transparent" />

                          {/* Tag on card */}
                          <div className="absolute bottom-2 left-2 right-2 text-center">
                            <span className="inline-block px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-white text-[9px] sm:text-[11px] font-bold border border-white/20 line-clamp-1">
                              {language === 'mr' ? slide.tagMr : slide.tagEn}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Slide Navigation Arrows */}
            <div className="absolute -bottom-4 inset-x-0 flex items-center justify-between px-2 sm:px-8 z-30 pointer-events-auto">
              <button
                onClick={handlePrevSlide}
                className="h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-white/95 border border-teal-900/10 shadow-md flex items-center justify-center text-teal-brand hover:text-gold-600 hover:scale-105 active:scale-95 transition-all"
                aria-label="Previous slide"
              >
                <ChevronLeft size={20} />
              </button>

              {/* Indicator dots */}
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-teal-900/10 shadow-2xs">
                {ARC_SLIDES.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={() => {
                      setIsAutoPlaying(false);
                      setActiveSlide(dotIdx);
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeSlide === dotIdx ? 'w-6 bg-gold-500' : 'w-2 bg-slate-300 hover:bg-slate-400'
                    }`}
                    aria-label={`Go to slide ${dotIdx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNextSlide}
                className="h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-white/95 border border-teal-900/10 shadow-md flex items-center justify-center text-teal-brand hover:text-gold-600 hover:scale-105 active:scale-95 transition-all"
                aria-label="Next slide"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Central Dial Content Hub (Heading, Subtitle, CTA exactly like Image 1) */}
          <div className="mt-14 max-w-2xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-teal-900/10 shadow-2xs text-xs font-bold uppercase tracking-widest text-gold-700">
              <Sparkles size={13} className="text-gold-500" />
              <span>{language === 'mr' ? 'उमेद मानसोपचार केंद्र विषयी' : 'About UMED Clinic'}</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-teal-brand tracking-tight text-balance leading-tight">
              {language === 'mr' ? (
                <>
                  शांत मन, स्पष्ट विचार आणि <br className="hidden sm:inline" />
                  <span className="font-serif italic text-gold-600 font-normal">
                    आत्मविश्वासाची नवी उमेद
                  </span>
                </>
              ) : (
                <>
                  Helping People Find Calm, <br className="hidden sm:inline" />
                  <span className="font-serif italic text-gold-600 font-normal">
                    Clarity & Confidence
                  </span>
                </>
              )}
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-xl mx-auto">
              {language === 'mr'
                ? 'कोणत्याही घाईशिवाय शांतपणे ऐकून घेणे हेच उपचारांचे पहिले पाऊल आहे. ताणतणाव, नैराश्य व भीतीवर मात करून जीवनात पुन्हा आनंद मिळवण्यासाठी आम्ही तुमच्यासोबत आहोत.'
                : 'We believe meaningful mental health care starts with listening. Our goal is to help our patients and families succeed despite stress, anxiety, depression, and life changes.'}
            </p>

            <div className="pt-2 flex justify-center">
              <a
                href="#doctor"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold-600 hover:bg-gold-500 text-white font-semibold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 btn-interactive"
              >
                <span>{language === 'mr' ? 'तज्ज्ञांबद्दल अधिक जाणून घ्या' : 'Learn More About Us'}</span>
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>

          {/* 4 Counter Stats with Live Counting Animation (as shown in Image 1) */}
          <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <AnimatedStatItem
              end={10}
              suffix="+"
              labelEn="Years of Experience"
              labelMr="वर्षांचा वैद्यकीय अनुभव"
              subEn="Dedicated Psychiatric Practice"
              subMr="लातूरमधील निष्णात मानसोपचार"
              language={language}
            />

            <AnimatedStatItem
              end={5000}
              suffix="+"
              labelEn="Patients Guided"
              labelMr="रुग्ण व कुटुंबे मार्गदर्शन"
              subEn="Across Marathwada Region"
              subMr="मराठवाड्यातील विश्वासार्ह केंद्र"
              language={language}
            />

            <AnimatedStatItem
              end={98}
              suffix="%"
              labelEn="Client Satisfaction"
              labelMr="रुग्ण व पालक समाधान"
              subEn="Compassionate Care Standards"
              subMr="आदरयुक्त व शांत वातावरण"
              language={language}
            />

            <AnimatedStatItem
              end={1}
              prefix="1:"
              labelEn="Personalized Support"
              labelMr="१:१ सविस्तर संवाद"
              subEn="30–45 Min Unhurried Sessions"
              subMr="घाई न करता संपूर्ण लक्ष"
              language={language}
            />
          </div>
        </div>

        {/* ==========================================================
            4 CORE CLINICAL DIFFERENTIATORS (BENTO GRID ARCHITECTURE)
            Card 4 is rendered with Guaranteed High-Contrast Legibility!
            ========================================================== */}
        <div className="mt-16 pt-12 border-t border-slate-200/80">
          <div className="max-w-3xl space-y-3 mb-10 reveal-on-scroll">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold-600">
              <span className="h-0.5 w-6 bg-gold-500 rounded-full" />
              <span>{t.aboutEyebrow}</span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-medium text-teal-brand tracking-tight">
              {language === 'mr' ? (
                <>
                  उमेद क्लिनिकची <span className="font-serif italic text-gold-600 font-normal">४ प्रमुख उपचार मूल्ये</span>
                </>
              ) : (
                <>
                  The 4 Pillars of <span className="font-serif italic text-gold-600 font-normal">UMED Care Standards</span>
                </>
              )}
            </h3>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {t.aboutP1}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
            {/* Bento Item 1: Wide Featured Consultation Chamber (7 cols) */}
            <div
              ref={cardTilt1.cardRef}
              onMouseMove={cardTilt1.handleMouseMove}
              onMouseLeave={cardTilt1.handleMouseLeave}
              style={cardTilt1.style}
              className="lg:col-span-7 card-3d card-3d-white rounded-3xl bg-white border border-slate-200/90 shadow-premium overflow-hidden flex flex-col justify-between group reveal-on-scroll"
            >
              <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-teal-950">
                <img
                  src="/images/about-listening.jpg"
                  alt="Unhurried psychiatric consultation chamber at UMED Clinic"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-950/90 via-teal-950/30 to-transparent pointer-events-none" />

                {/* Floating 3D Badge */}
                <div className="absolute top-4 left-4 glass-teal-luxury px-3.5 py-1.5 rounded-full border border-white/20 text-white text-xs font-semibold flex items-center gap-2 shadow-lg">
                  <span className="h-2 w-2 rounded-full bg-gold-400 animate-ping" />
                  <span>{language === 'mr' ? '३०–४५ मिनिटे सविस्तर संवाद' : '30–45 Min Unhurried Sessions'}</span>
                </div>

                {/* Stat Highlight at bottom of photo */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                  <span className="font-medium bg-black/50 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10">
                    {language === 'mr' ? '३ पट अधिक वेळ व लक्ष' : '3x Longer Than Typical OPD'}
                  </span>
                  <span className="text-gold-300 font-semibold flex items-center gap-1">
                    <ShieldCheck size={14} />
                    {language === 'mr' ? '१००% पूर्ण गोपनीयता' : '100% Strict Privacy'}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="h-11 w-11 rounded-2xl bg-teal-50 text-teal-brand flex items-center justify-center border border-teal-100 group-hover:bg-gold-50 group-hover:text-gold-700 transition-colors">
                      <Ear size={22} />
                    </div>
                    <span className="font-display text-2xl font-bold text-gold-500">01</span>
                  </div>

                  <h4 className="mt-4 text-xl sm:text-2xl font-bold text-teal-brand tracking-tight">
                    {language === 'mr' ? 'शांतपणे व सविस्तर ऐकून घेणे' : 'Listen with Unhurried Presence'}
                  </h4>

                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {language === 'mr'
                      ? 'कोणतीही घाई न करता रुग्णाचे विचार, भावना व वेदना समजून घेणे. येथे कोणावरही टीका किंवा लेबल लावले जात नाही. प्रत्येक रुग्णाला स्वतःची गोष्ट मांडण्यासाठी पुरेसा वेळ दिला जातो.'
                      : 'We do not reduce your struggles to a five-minute tick-box. Every consultation provides ample time to express what hurts, without shame or judgment, building trust before clinical decisions.'}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-semibold text-gold-700 flex items-center gap-1.5">
                    <Sparkles size={13} className="text-gold-500" />
                    {language === 'mr' ? 'उमेद मुख्य उपचार मूल्य' : 'UMED Core Clinical Standard'}
                  </span>
                  <a
                    href="#doctor"
                    className="inline-flex items-center gap-1 text-teal-brand font-bold hover:text-gold-700 transition-colors"
                  >
                    <span>{language === 'mr' ? 'तज्ज्ञांबद्दल अधिक' : 'Meet Psychiatrist'}</span>
                    <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            </div>

            {/* Bento Item 2: Diagnostic Precision & EEG Brain Mapping (5 cols) */}
            <div
              ref={cardTilt2.cardRef}
              onMouseMove={cardTilt2.handleMouseMove}
              onMouseLeave={cardTilt2.handleMouseLeave}
              style={cardTilt2.style}
              className="lg:col-span-5 card-3d card-3d-white rounded-3xl bg-white border border-slate-200/90 shadow-premium p-6 sm:p-8 flex flex-col justify-between group reveal-on-scroll delay-100"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="h-11 w-11 rounded-2xl bg-teal-50 text-teal-brand flex items-center justify-center border border-teal-100 group-hover:bg-gold-50 group-hover:text-gold-700 transition-colors">
                    <Compass size={22} />
                  </div>
                  <span className="font-display text-2xl font-bold text-gold-500">02</span>
                </div>

                <div className="mt-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-teal-50 text-teal-brand border border-teal-200">
                    <Activity size={12} className="text-gold-600" />
                    {language === 'mr' ? 'अचूक निदान' : 'Neuro-Diagnostics'}
                  </span>

                  <h4 className="mt-3 text-xl font-bold text-teal-brand tracking-tight">
                    {language === 'mr' ? 'शास्त्रीय व अचूक औषधोपचार' : 'Rational, Science-Backed Treatment'}
                  </h4>

                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {language === 'mr'
                      ? 'जागतिक वैद्यकीय निकषांनुसार मोजकी आणि अचूक औषधे. गैरसमज दूर करून रुग्णाला स्वतःच्या उपचारांची पूर्ण पारदर्शकता दिली जाते. इन-हाउस डिजिटल ईईजी ब्रेन मॅपिंगद्वारे खात्रीशीर निदान.'
                      : 'Medical treatments are carefully calibrated with minimum effective dosages, alongside evidence-based cognitive therapy and in-house digital EEG brain mapping when indicated.'}
                  </p>
                </div>

                {/* Brain Wave Visual Representation */}
                <div className="mt-6 p-4 rounded-2xl bg-teal-50/50 border border-teal-100 flex items-center gap-3">
                  <div className="flex items-end gap-1 h-7">
                    <span className="w-1 bg-gold-500 rounded-full h-3 animate-pulse" />
                    <span className="w-1 bg-teal-600 rounded-full h-6 animate-pulse delay-75" />
                    <span className="w-1 bg-gold-500 rounded-full h-4 animate-pulse delay-150" />
                    <span className="w-1 bg-teal-600 rounded-full h-7 animate-pulse delay-200" />
                    <span className="w-1 bg-gold-500 rounded-full h-5 animate-pulse delay-100" />
                    <span className="w-1 bg-teal-600 rounded-full h-3 animate-pulse delay-300" />
                  </div>
                  <div className="text-xs">
                    <p className="font-bold text-teal-brand">
                      {language === 'mr' ? 'डिजिटल ३२-चॅनेल ईईजी' : 'In-House 32-Channel EEG'}
                    </p>
                    <p className="text-slate-500 text-[11px]">
                      {language === 'mr' ? 'मेंदूच्या लहरींचे अचूक विश्लेषण' : 'Advanced brainwave signal tracking'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-gold-700">
                <Sparkles size={12} className="text-gold-500" />
                <span>{language === 'mr' ? 'कमीत कमी आणि मोजकी औषधे' : 'Minimum Effective Dosage Protocol'}</span>
              </div>
            </div>

            {/* Bento Item 3: Family & Caregiver Partnership (6 cols) */}
            <div
              ref={cardTilt3.cardRef}
              onMouseMove={cardTilt3.handleMouseMove}
              onMouseLeave={cardTilt3.handleMouseLeave}
              style={cardTilt3.style}
              className="lg:col-span-6 card-3d card-3d-white rounded-3xl bg-white border border-slate-200/90 shadow-premium p-6 sm:p-8 flex flex-col justify-between group reveal-on-scroll delay-150"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="h-11 w-11 rounded-2xl bg-teal-50 text-teal-brand flex items-center justify-center border border-teal-100 group-hover:bg-gold-50 group-hover:text-gold-700 transition-colors">
                    <HeartHandshake size={22} />
                  </div>
                  <span className="font-display text-2xl font-bold text-gold-500">03</span>
                </div>

                <div className="mt-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-gold-50 text-gold-800 border border-gold-200">
                    <Users size={12} className="text-gold-600" />
                    {language === 'mr' ? 'कुटुंब सहकार्य' : 'Caregiver Alliance'}
                  </span>

                  <h4 className="mt-3 text-xl font-bold text-teal-brand tracking-tight">
                    {language === 'mr' ? 'कुटुंबाला सोबत घेऊन शाश्वत आरोग्य' : 'Walk Alongside You & Your Family'}
                  </h4>

                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {language === 'mr'
                      ? 'औषधांसोबतच कुटुंबाचे सहकार्य, सकारात्मक वातावरण व समुपदेशन यांच्या साहाय्याने पुन्हा आत्मविश्वासाने जगण्याचा मार्ग तयार केला जातो. आजार समजून घेणे व आधार देणे यावर भर.'
                      : 'Recovery is a journey, not a single appointment. We provide caregiver counseling, lifestyle adaptations, and structured tapering pathways for sustainable long-term emotional well-being.'}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-600">
                  {language === 'mr' ? 'समस्यांचे निवारण व मानसिक आधार' : 'Dedicated Caregiver Guidance'}
                </span>
                <span className="font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
                  {language === 'mr' ? 'शाश्वत सुधारणा' : 'Sustainable Recovery'}
                </span>
              </div>
            </div>

            {/* Bento Item 4: Subsidized Care Desk for Marathwada (6 cols)
                CRITICAL FIX FOR IMAGE 2: Crystal-clear contrast with guaranteed legibility! */}
            <div
              ref={cardTilt4.cardRef}
              onMouseMove={cardTilt4.handleMouseMove}
              onMouseLeave={cardTilt4.handleMouseLeave}
              style={{ ...cardTilt4.style, backgroundColor: '#0f3d43' }}
              className="lg:col-span-6 card-3d card-3d-dark rounded-3xl !bg-[#0f3d43] text-white shadow-2xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group reveal-on-scroll delay-200 border-2 border-gold-400/40"
            >
              {/* Gold volumetric ambient glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold-400/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-teal-600/30 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <div className="h-11 w-11 rounded-2xl bg-white/15 text-gold-300 flex items-center justify-center border border-white/20 shadow-xs">
                    <Heart size={22} className="text-gold-300" />
                  </div>
                  <span className="font-display text-2xl font-bold text-gold-400">04</span>
                </div>

                <div className="mt-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-gold-500/25 text-gold-300 border border-gold-400/60 shadow-xs">
                    <ShieldCheck size={13} className="text-gold-300" />
                    {language === 'mr' ? 'सामाजिक बांधिलकी' : 'Social Commitment'}
                  </span>

                  <h4 className="mt-3 text-xl sm:text-2xl font-bold text-white tracking-tight drop-shadow-xs">
                    {language === 'mr'
                      ? 'गरीब व गरजू रुग्णांसाठी माफक दरात सुविधा'
                      : 'Subsidized Care Desk for Rural & Farming Families'}
                  </h4>

                  <p className="mt-3 text-sm text-teal-50 leading-relaxed font-normal">
                    {language === 'mr'
                      ? 'लातूर, धाराशीव, बीड व संपूर्ण मराठवाड्यातील शेतकरी व गरजू कुटुंबांना पैशांअभावी उपचारांपासून वंचित राहावे लागू नये, यासाठी उमेद क्लिनिक विशेष सवलत व सहकार्य देते.'
                      : 'UMED Clinic firmly believes economic constraints should never prevent access to compassionate psychiatric healing. Subsidized consultations and diagnostics for deserving families across Marathwada.'}
                  </p>
                </div>
              </div>

              <div className="relative z-10 mt-6 pt-4 border-t border-white/20 flex flex-wrap items-center justify-between gap-3 text-xs">
                <span className="text-gold-200 font-semibold flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-gold-400" />
                  {language === 'mr' ? 'माफक व पारदर्शक शुल्क' : 'Fair, Transparent & Subsidized'}
                </span>
                <a
                  href="tel:9067089323"
                  className="font-bold text-teal-950 bg-gold-400 hover:bg-gold-300 px-4 py-1.5 rounded-full transition-all duration-200 shadow-md hover:scale-105"
                >
                  {language === 'mr' ? 'सवलतीबाबत विचारा' : 'Inquire Desk'}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy Quotation 3D Banner */}
        <div className="mt-14 rounded-3xl bg-teal-brand text-white p-8 sm:p-12 shadow-premium relative overflow-hidden reveal-on-scroll delay-150">
          <div
            className="absolute -right-12 -bottom-12 w-64 h-64 rounded-full bg-gold-400/10 blur-2xl pointer-events-none"
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
              <div className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-md text-center max-w-xs transition-transform duration-300 hover:scale-105 shadow-xl">
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
