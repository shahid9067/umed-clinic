import React, { useState, useEffect } from 'react';
import {
  Ear,
  Sparkles,
  HeartHandshake,
  Compass,
  Activity,
  ArrowUpRight,
  Heart,
  CheckCircle2,
} from 'lucide-react';
import { Language } from '../types/clinic';
import { TRANSLATIONS } from '../data/translations';
import { useTilt3D } from '../hooks/useTilt3D';

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

// 5 Brand New, High-Resolution Mental Wellness & Lifestyle Photos
const ARC_SLIDES: ArcSlideItem[] = [
  {
    id: 'peaceful-meditation',
    image: '/images/arc-calm-meditation.jpg',
    altEn: 'Calm mindfulness and inner peace',
    altMr: 'शांत मन आणि ध्यानधारणा',
    tagEn: 'Inner Peace',
    tagMr: 'मनाची शांतता',
  },
  {
    id: 'freedom-joy',
    image: '/images/arc-freedom-joy.jpg',
    altEn: 'Freedom from anxiety and peaceful living in nature',
    altMr: 'चिंतामुक्ती आणि निसर्गातील शांतता',
    tagEn: 'Emotional Freedom',
    tagMr: 'तणावमुक्ती',
  },
  {
    id: 'confident-smile',
    image: '/images/arc-confident-smile.jpg',
    altEn: 'Confident smiling man with restored vitality',
    altMr: 'पुनर्प्राप्त आत्मविश्वास आणि आनंद',
    tagEn: 'Confidence',
    tagMr: 'आत्मविश्वास',
  },
  {
    id: 'refreshed-walk',
    image: '/images/arc-refreshed-walk.jpg',
    altEn: 'Refreshed active wellness and clarity',
    altMr: 'सकारात्मक ऊर्जा व नवा उत्साह',
    tagEn: 'Daily Vitality',
    tagMr: 'नवा उत्साह',
  },
  {
    id: 'peaceful-nature',
    image: '/images/arc-peaceful-nature.jpg',
    altEn: 'Serene nature and mindful calm',
    altMr: 'निसर्गाच्या सान्निध्यात मनःशांती',
    tagEn: 'Clarity of Mind',
    tagMr: 'विचारांची स्पष्टता',
  },
];

export const AboutSection: React.FC<AboutSectionProps> = ({ language }) => {
  const t = TRANSLATIONS[language];
  const cardTilt1 = useTilt3D(6);
  const cardTilt2 = useTilt3D(6);
  const cardTilt3 = useTilt3D(6);
  const cardTilt4 = useTilt3D(6);

  // Active center card for the smooth sliding arc transition
  const [activeSlideIndex, setActiveSlideIndex] = useState(2); // Center card (Confidence man) is focal
  const [isPaused, setIsPaused] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  // Automatic smooth slide animation every 3.2 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveSlideIndex((prev) => (prev + 1) % ARC_SLIDES.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [isPaused]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
    setIsPaused(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX !== null) {
      const diff = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(diff) > 40) {
        if (diff > 0) {
          setActiveSlideIndex((prev) => (prev - 1 + ARC_SLIDES.length) % ARC_SLIDES.length);
        } else {
          setActiveSlideIndex((prev) => (prev + 1) % ARC_SLIDES.length);
        }
      }
    }
    setTouchStartX(null);
    setIsPaused(false);
  };

  return (
    <section
      id="about"
      className="py-16 lg:py-24 bg-[#f5f8f6] relative overflow-hidden scroll-mt-24 sm:scroll-mt-28"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-teal-800/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ==========================================================
            GRAND SEMI-CIRCULAR ARC DIAL SHOWCASE
            ========================================================== */}
        <div
          className="relative pt-4 pb-12 text-center max-w-5xl mx-auto reveal-on-scroll"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Radial Arc Dial Geometry */}
          <div className="relative mx-auto w-full max-w-5xl h-[300px] sm:h-[370px] lg:h-[410px] flex items-end justify-center overflow-visible">
            {/* SVG Precision Dial Arch with Radial Tick Marks */}
            <svg
              className="absolute inset-x-0 bottom-0 w-full h-[270px] sm:h-[340px] lg:h-[380px] pointer-events-none overflow-visible"
              viewBox="0 0 1000 500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 60 480 A 440 440 0 0 1 940 480"
                stroke="rgba(184, 142, 56, 0.28)"
                strokeWidth="1.5"
                strokeDasharray="4 6"
              />
              <path
                d="M 110 480 A 390 390 0 0 1 890 480"
                stroke="rgba(15, 61, 67, 0.18)"
                strokeWidth="2"
              />
              {Array.from({ length: 73 }).map((_, i) => {
                const angle = 180 + (i / 72) * 180;
                const rad = (angle * Math.PI) / 180;
                const cx = 500;
                const cy = 480;
                const isMajor = i % 6 === 0;
                const rInner = isMajor ? 370 : 382;
                const rOuter = 400;
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
                    stroke={isMajor ? 'rgba(184, 142, 56, 0.75)' : 'rgba(15, 61, 67, 0.2)'}
                    strokeWidth={isMajor ? '2' : '1'}
                  />
                );
              })}
            </svg>

            {/* Desktop / Tablet Fanned Arc of 5 Cards with AUTOMATIC SLIDING ANIMATION */}
            <div className="hidden md:flex absolute top-0 inset-x-0 h-full items-center justify-center pointer-events-none">
              <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
                {ARC_SLIDES.map((slide, idx) => {
                  const angles = [-26, -13, 0, 13, 26];
                  const xPositions = [-300, -150, 0, 150, 300];
                  const yPositions = [36, 10, 0, 10, 36];

                  const slot = (idx - activeSlideIndex + 2 + 5 * 10) % 5;
                  const angle = angles[slot];
                  const x = xPositions[slot];
                  const y = yPositions[slot];
                  const isFocal = slot === 2;

                  return (
                    <div
                      key={slide.id}
                      onClick={() => setActiveSlideIndex(idx)}
                      className="absolute pointer-events-auto cursor-pointer group"
                      style={{
                        transform: `translateX(${x}px) translateY(${y}px) rotate(${angle}deg) ${
                          isFocal ? 'scale(1.08)' : 'scale(0.96)'
                        }`,
                        zIndex: isFocal ? 30 : 20 - Math.abs(slot - 2),
                        transformOrigin: 'center 320px',
                        transition: 'transform 0.9s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.9s ease, border-color 0.5s ease',
                      }}
                    >
                      <div
                        className={`w-36 sm:w-40 lg:w-44 h-52 sm:h-56 lg:h-64 rounded-3xl overflow-hidden p-1.5 bg-white border-2 transition-all duration-500 shadow-xl group-hover:scale-105 group-hover:-translate-y-2 group-hover:shadow-2xl ${
                          isFocal
                            ? 'border-gold-400 ring-4 ring-gold-400/30 shadow-2xl'
                            : 'border-white/90 hover:border-gold-300'
                        }`}
                      >
                        <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-100">
                          <img
                            src={slide.image}
                            alt={language === 'mr' ? slide.altMr : slide.altEn}
                            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-teal-950/70 via-transparent to-transparent pointer-events-none" />

                          <div className="absolute bottom-2.5 left-2 right-2 text-center">
                            <span className="inline-block px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-bold border border-white/20 line-clamp-1">
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

            {/* Mobile Arc View (< 768px): Left and Right images tilted ("little bit cross"), Center upright! */}
            <div
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              className="md:hidden relative w-full h-[270px] flex items-center justify-center overflow-visible pointer-events-auto select-none"
            >
              {ARC_SLIDES.map((slide, idx) => {
                const slot = (idx - activeSlideIndex + 2 + 5 * 10) % 5;
                const isLeft = slot === 1;
                const isCenter = slot === 2;
                const isRight = slot === 3;
                const isVisible = isLeft || isCenter || isRight;

                if (!isVisible) return null;

                const mobileX = isLeft ? -104 : isRight ? 104 : 0;
                const mobileY = isCenter ? -8 : 16;
                const mobileRotate = isLeft ? -15 : isRight ? 15 : 0; // Left & Right tilted cross
                const mobileScale = isCenter ? 1.06 : 0.88;
                const mobileZ = isCenter ? 30 : 10;
                const mobileOpacity = isCenter ? 1 : 0.85;

                return (
                  <div
                    key={slide.id}
                    onClick={() => setActiveSlideIndex(idx)}
                    className="absolute cursor-pointer"
                    style={{
                      transform: `translateX(${mobileX}px) translateY(${mobileY}px) rotate(${mobileRotate}deg) scale(${mobileScale})`,
                      zIndex: mobileZ,
                      opacity: mobileOpacity,
                      transformOrigin: '50% 125%',
                      transition: 'transform 0.65s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.45s ease',
                    }}
                  >
                    <div
                      className={`w-36 h-52 rounded-3xl overflow-hidden p-1.5 bg-white border-2 shadow-xl ${
                        isCenter
                          ? 'border-gold-400 ring-4 ring-gold-400/30 shadow-2xl'
                          : 'border-white/90 shadow-md'
                      }`}
                    >
                      <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-100">
                        <img
                          src={slide.image}
                          alt={language === 'mr' ? slide.altMr : slide.altEn}
                          className="w-full h-full object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-teal-950/70 via-transparent to-transparent pointer-events-none" />
                        <div className="absolute bottom-2 left-1 right-1 text-center">
                          <span className="inline-block px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-white text-[9.5px] font-bold border border-white/20 line-clamp-1">
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

          {/* Automatic Slide Indicator Dots */}
          <div className="flex items-center justify-center gap-2 mt-4 sm:mt-6">
            {ARC_SLIDES.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setActiveSlideIndex(dotIdx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeSlideIndex === dotIdx ? 'w-7 bg-gold-500 shadow-xs' : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Slide ${dotIdx + 1}`}
              />
            ))}
          </div>

          {/* Central Hub (Minimal, Clean, Editorial) */}
          <div className="mt-10 max-w-2xl mx-auto space-y-3 px-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-teal-900/10 shadow-2xs text-[11px] font-bold uppercase tracking-widest text-gold-700">
              <Sparkles size={12} className="text-gold-500" />
              <span>{language === 'mr' ? 'उमेद मानसोपचार केंद्र' : 'About UMED Clinic'}</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-teal-brand tracking-tight text-balance leading-tight">
              {language === 'mr' ? (
                <>
                  शांत मन, स्पष्ट विचार आणि <br className="hidden sm:inline" />
                  <span className="italic font-serif text-gold-600 font-normal">
                    आत्मविश्वासाची नवी उमेद
                  </span>
                </>
              ) : (
                <>
                  Helping People Find Calm, <br className="hidden sm:inline" />
                  <span className="italic font-serif text-gold-600 font-normal">
                    Clarity & Confidence
                  </span>
                </>
              )}
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-lg mx-auto">
              {language === 'mr'
                ? 'शांतपणे ऐकून घेणे हेच उपचारांचे पहिले पाऊल. चिंता, नैराश्य व ताणतणावातून मुक्तीसाठी आम्ही सोबत आहोत.'
                : 'Meaningful healing begins with listening. We guide you toward lasting peace from anxiety, stress, and mood challenges.'}
            </p>

            <div className="pt-2 flex justify-center">
              <a
                href="#doctor"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gold-600 hover:bg-gold-500 text-white font-semibold text-xs sm:text-sm shadow-md transition-all duration-300 hover:-translate-y-0.5 btn-interactive"
              >
                <span>{language === 'mr' ? 'तज्ज्ञांबद्दल जाणून घ्या' : 'Learn More About Us'}</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* ==========================================================
            4 CORE CLINICAL STANDARDS (MINIMAL & IMPACTFUL)
            ========================================================== */}
        <div className="mt-8 pt-10 border-t border-slate-200/80">
          <div className="max-w-2xl space-y-2 mb-8 reveal-on-scroll">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold-600">
              <span className="h-0.5 w-6 bg-gold-500 rounded-full" />
              <span>{t.aboutEyebrow}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-teal-brand tracking-tight">
              {language === 'mr' ? '४ प्रमुख उपचार मूल्ये' : '4 Pillars of UMED Care'}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6">
            {/* Pillar 1: Unhurried Consultations */}
            <div
              ref={cardTilt1.cardRef}
              onMouseMove={cardTilt1.handleMouseMove}
              onMouseLeave={cardTilt1.handleMouseLeave}
              style={cardTilt1.style}
              className="lg:col-span-6 card-3d card-3d-white rounded-3xl bg-white border border-slate-200/90 shadow-soft p-6 flex flex-col justify-between group reveal-on-scroll"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="h-10 w-10 rounded-xl bg-teal-50 text-teal-brand flex items-center justify-center border border-teal-100 group-hover:bg-gold-50 group-hover:text-gold-700 transition-colors">
                    <Ear size={20} />
                  </div>
                  <span className="font-display text-xl font-bold text-gold-500">01</span>
                </div>

                <h4 className="mt-4 text-lg font-bold text-teal-brand tracking-tight">
                  {language === 'mr' ? 'शांतपणे व सविस्तर ऐकून घेणे' : 'Listen with Unhurried Presence'}
                </h4>

                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {language === 'mr'
                    ? 'कोणतीही घाई न करता रुग्णाचे विचार व वेदना समजून घेणे. येथे कोणावरही टीका किंवा लेबल लावले जात नाही.'
                    : 'Every consultation provides ample time to express what hurts in complete privacy, without rush or judgment.'}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-gold-700 font-semibold">
                <span className="flex items-center gap-1">
                  <Sparkles size={12} className="text-gold-500" />
                  <span>३०–४५ मिनिटे सविस्तर संवाद</span>
                </span>
                <span className="text-slate-400">100% Privacy</span>
              </div>
            </div>

            {/* Pillar 2: Rational Neuro-Diagnostics */}
            <div
              ref={cardTilt2.cardRef}
              onMouseMove={cardTilt2.handleMouseMove}
              onMouseLeave={cardTilt2.handleMouseLeave}
              style={cardTilt2.style}
              className="lg:col-span-6 card-3d card-3d-white rounded-3xl bg-white border border-slate-200/90 shadow-soft p-6 flex flex-col justify-between group reveal-on-scroll delay-100"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="h-10 w-10 rounded-xl bg-teal-50 text-teal-brand flex items-center justify-center border border-teal-100 group-hover:bg-gold-50 group-hover:text-gold-700 transition-colors">
                    <Compass size={20} />
                  </div>
                  <span className="font-display text-xl font-bold text-gold-500">02</span>
                </div>

                <h4 className="mt-4 text-lg font-bold text-teal-brand tracking-tight">
                  {language === 'mr' ? 'शास्त्रीय व अचूक औषधोपचार' : 'Rational, Science-Backed Treatment'}
                </h4>

                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {language === 'mr'
                    ? 'जागतिक वैद्यकीय निकषांनुसार मोजकी औषधे आणि इन-हाउस डिजिटल ३२-चॅनेल ईईजी द्वारे अचूक निदान.'
                    : 'Calibrated minimum effective medication combined with in-house 32-channel digital EEG brain mapping.'}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-teal-700 font-semibold">
                <span className="flex items-center gap-1">
                  <Activity size={12} className="text-gold-600" />
                  <span>Digital EEG & MBT</span>
                </span>
                <span className="text-emerald-700 font-medium">Safe Dosages</span>
              </div>
            </div>

            {/* Pillar 3: Caregiver Partnership */}
            <div
              ref={cardTilt3.cardRef}
              onMouseMove={cardTilt3.handleMouseMove}
              onMouseLeave={cardTilt3.handleMouseLeave}
              style={cardTilt3.style}
              className="lg:col-span-6 card-3d card-3d-white rounded-3xl bg-white border border-slate-200/90 shadow-soft p-6 flex flex-col justify-between group reveal-on-scroll delay-150"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="h-10 w-10 rounded-xl bg-teal-50 text-teal-brand flex items-center justify-center border border-teal-100 group-hover:bg-gold-50 group-hover:text-gold-700 transition-colors">
                    <HeartHandshake size={20} />
                  </div>
                  <span className="font-display text-xl font-bold text-gold-500">03</span>
                </div>

                <h4 className="mt-4 text-lg font-bold text-teal-brand tracking-tight">
                  {language === 'mr' ? 'कुटुंबाला सोबत घेऊन शाश्वत आरोग्य' : 'Walk Alongside You & Your Family'}
                </h4>

                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {language === 'mr'
                    ? 'औषधांसोबतच कुटुंबाचे सहकार्य, समुपदेशन व टप्प्याटप्प्याने औषध कमी करून शाश्वत स्वास्थ्य मिळवून देणे.'
                    : 'Caregiver counseling, positive home environment guidance, and structured medicine tapering pathways.'}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600 font-semibold">
                <span>Family Counseling</span>
                <span className="text-emerald-700">Sustainable Recovery</span>
              </div>
            </div>

            {/* Pillar 4: Subsidized Care Desk */}
            <div
              ref={cardTilt4.cardRef}
              onMouseMove={cardTilt4.handleMouseMove}
              onMouseLeave={cardTilt4.handleMouseLeave}
              style={{ ...cardTilt4.style, backgroundColor: '#0f3d43' }}
              className="lg:col-span-6 card-3d card-3d-dark rounded-3xl !bg-[#0f3d43] text-white shadow-xl p-6 flex flex-col justify-between relative overflow-hidden group reveal-on-scroll delay-200 border-2 border-gold-400/40"
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <div className="h-10 w-10 rounded-xl bg-white/15 text-gold-300 flex items-center justify-center border border-white/20">
                    <Heart size={20} className="text-gold-300" />
                  </div>
                  <span className="font-display text-xl font-bold text-gold-400">04</span>
                </div>

                <h4 className="mt-4 text-lg font-bold text-white tracking-tight">
                  {language === 'mr'
                    ? 'गरीब व गरजू रुग्णांसाठी माफक दरात सुविधा'
                    : 'Subsidized Care Desk for Farming Families'}
                </h4>

                <p className="mt-2 text-xs sm:text-sm text-teal-50 leading-relaxed font-normal">
                  {language === 'mr'
                    ? 'मराठवाड्यातील शेतकरी व गरजू कुटुंबांना पैशांअभावी उपचारांपासून वंचित राहावे लागू नये यासाठी विशेष सवलत.'
                    : 'Subsidized consultations, diagnostics, and inpatient care for farming and economically weaker families.'}
                </p>
              </div>

              <div className="relative z-10 mt-5 pt-3 border-t border-white/20 flex items-center justify-between text-xs">
                <span className="text-gold-300 font-semibold flex items-center gap-1">
                  <CheckCircle2 size={13} className="text-gold-400" />
                  <span>Fair & Subsidized</span>
                </span>
                <a
                  href="tel:9067089323"
                  className="font-bold text-teal-950 bg-gold-400 hover:bg-gold-300 px-3.5 py-1 rounded-full transition-colors"
                >
                  {language === 'mr' ? 'माहिती विचारा' : 'Inquire Desk'}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy Quotation Banner */}
        <div className="mt-12 rounded-3xl bg-teal-brand text-white p-7 sm:p-10 shadow-premium relative overflow-hidden reveal-on-scroll">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-3">
              <p className="font-marathi text-2xl sm:text-3xl text-gold-300 font-bold leading-snug">
                “निरोगी मन, आनंदी जीवन”
              </p>
              <p className="text-base sm:text-lg text-white font-medium italic leading-relaxed">
                {language === 'mr'
                  ? 'निरोगी मन आणि आनंदी जीवन हा प्रत्येकाचा मूलभूत अधिकार आहे. संकोच सोडून संवाद साधणे हेच आरोग्याचे पहिले पाऊल.'
                  : 'A healthy mind is the foundation for a joyful life. Healing begins the moment you feel genuinely heard and understood.'}
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-md text-center max-w-xs shadow-lg">
                <img
                  src="/images/omed_logo.jpeg"
                  alt="UMED Emblem"
                  className="h-14 w-14 mx-auto rounded-full object-cover object-top border-2 border-gold-400 shadow-sm"
                />
                <p className="mt-2 font-marathi font-bold text-gold-300 text-xs">
                  “निरोगी मन, आनंदी जीवन”
                </p>
                <p className="text-[10px] text-teal-100 font-medium">
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
