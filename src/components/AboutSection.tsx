import React from 'react';
import { Ear, Sparkles, HeartHandshake, Compass, Activity, Users, ArrowUpRight, ShieldCheck, Heart } from 'lucide-react';
import { Language } from '../types/clinic';
import { TRANSLATIONS } from '../data/translations';
import { useTilt3D } from '../hooks/useTilt3D';

interface AboutSectionProps {
  language: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ language }) => {
  const t = TRANSLATIONS[language];
  const cardTilt1 = useTilt3D(6);
  const cardTilt2 = useTilt3D(6);

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#f5f8f6] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-teal-800/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 reveal-on-scroll">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold-600">
            <span className="h-0.5 w-6 bg-gold-500 rounded-full" />
            <span>{t.aboutEyebrow}</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-teal-brand tracking-tight text-balance">
            {language === 'mr' ? (
              <>
                मानसिक स्वास्थ्याचा <span className="font-serif italic text-gold-600 font-normal">विश्वासार्ह आधार</span>
              </>
            ) : (
              <>
                Where Compassion Meets <span className="font-serif italic text-gold-600 font-normal">Clinical Precision</span>
              </>
            )}
          </h2>

          <div className="space-y-3 text-base sm:text-lg text-slate-700 leading-relaxed pt-2">
            <p>{t.aboutP1}</p>
            <p className="text-slate-600 text-sm sm:text-base">{t.aboutP2}</p>
          </div>
        </div>

        {/* 3D Bento Grid Architecture */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          {/* Bento Item 1: Wide Featured Consultation Chamber (7 cols) */}
          <div
            ref={cardTilt1.cardRef}
            onMouseMove={cardTilt1.handleMouseMove}
            onMouseLeave={cardTilt1.handleMouseLeave}
            style={cardTilt1.style}
            className="lg:col-span-7 card-3d rounded-3xl bg-white border border-slate-200/90 shadow-premium overflow-hidden flex flex-col justify-between group reveal-on-scroll"
          >
            <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-teal-950">
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
                <span className="font-medium bg-black/40 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10">
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
                  <span className="font-display text-2xl font-bold text-gold-400/80">01</span>
                </div>

                <h3 className="mt-4 text-xl sm:text-2xl font-bold text-teal-brand tracking-tight">
                  {language === 'mr' ? 'शांतपणे व सविस्तर ऐकून घेणे' : 'Listen with Unhurried Presence'}
                </h3>

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
            className="lg:col-span-5 card-3d rounded-3xl bg-white border border-slate-200/90 shadow-premium p-6 sm:p-8 flex flex-col justify-between group reveal-on-scroll delay-100"
          >
            <div>
              <div className="flex items-center justify-between">
                <div className="h-11 w-11 rounded-2xl bg-teal-50 text-teal-brand flex items-center justify-center border border-teal-100 group-hover:bg-gold-50 group-hover:text-gold-700 transition-colors">
                  <Compass size={22} />
                </div>
                <span className="font-display text-2xl font-bold text-gold-400/80">02</span>
              </div>

              <div className="mt-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-teal-50 text-teal-brand border border-teal-200">
                  <Activity size={12} className="text-gold-600" />
                  {language === 'mr' ? 'अचूक निदान' : 'Neuro-Diagnostics'}
                </span>

                <h3 className="mt-3 text-xl font-bold text-teal-brand tracking-tight">
                  {language === 'mr' ? 'शास्त्रीय व अचूक औषधोपचार' : 'Rational, Science-Backed Treatment'}
                </h3>

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
          <div className="lg:col-span-6 card-3d rounded-3xl bg-white border border-slate-200/90 shadow-premium p-6 sm:p-8 flex flex-col justify-between group reveal-on-scroll delay-150">
            <div>
              <div className="flex items-center justify-between">
                <div className="h-11 w-11 rounded-2xl bg-teal-50 text-teal-brand flex items-center justify-center border border-teal-100 group-hover:bg-gold-50 group-hover:text-gold-700 transition-colors">
                  <HeartHandshake size={22} />
                </div>
                <span className="font-display text-2xl font-bold text-gold-400/80">03</span>
              </div>

              <div className="mt-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-gold-50 text-gold-800 border border-gold-200">
                  <Users size={12} className="text-gold-600" />
                  {language === 'mr' ? 'कुटुंब सहकार्य' : 'Caregiver Alliance'}
                </span>

                <h3 className="mt-3 text-xl font-bold text-teal-brand tracking-tight">
                  {language === 'mr' ? 'कुटुंबाला सोबत घेऊन शाश्वत आरोग्य' : 'Walk Alongside You & Your Family'}
                </h3>

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

          {/* Bento Item 4: Subsidized Care Desk for Marathwada (6 cols) */}
          <div className="lg:col-span-6 card-3d rounded-3xl bg-gradient-to-br from-teal-900 to-teal-950 text-white shadow-premium p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group reveal-on-scroll delay-200">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold-400/10 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <div className="h-11 w-11 rounded-2xl bg-white/10 text-gold-300 flex items-center justify-center border border-white/20">
                  <Heart size={22} />
                </div>
                <span className="font-display text-2xl font-bold text-gold-400/80">04</span>
              </div>

              <div className="mt-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-gold-400/20 text-gold-300 border border-gold-400/40">
                  <ShieldCheck size={12} className="text-gold-300" />
                  {language === 'mr' ? 'सामाजिक बांधिलकी' : 'Social Commitment'}
                </span>

                <h3 className="mt-3 text-xl font-bold text-white tracking-tight">
                  {language === 'mr'
                    ? 'गरीब व गरजू रुग्णांसाठी माफक दरात सुविधा'
                    : 'Subsidized Care Desk for Rural & Farming Families'}
                </h3>

                <p className="mt-3 text-sm text-teal-100/90 leading-relaxed">
                  {language === 'mr'
                    ? 'लातूर, धाराशीव, बीड व संपूर्ण मराठवाड्यातील शेतकरी व गरजू कुटुंबांना पैशांअभावी उपचारांपासून वंचित राहावे लागू नये, यासाठी उमेद क्लिनिक विशेष सवलत व सहकार्य देते.'
                    : 'UMED Clinic firmly believes economic constraints should never prevent access to compassionate psychiatric healing. Subsidized consultations and diagnostics for deserving families across Marathwada.'}
                </p>
              </div>
            </div>

            <div className="relative z-10 mt-6 pt-4 border-t border-white/15 flex items-center justify-between text-xs">
              <span className="text-gold-200 font-medium">
                {language === 'mr' ? 'माफक व पारदर्शक शुल्क' : 'Fair, Transparent & Subsidized'}
              </span>
              <a
                href="tel:9067089323"
                className="font-bold text-white bg-gold-600 hover:bg-gold-500 px-3 py-1 rounded-full transition-colors"
              >
                {language === 'mr' ? 'माहिती विचारा' : 'Inquire Desk'}
              </a>
            </div>
          </div>
        </div>

        {/* Philosophy Quotation 3D Banner */}
        <div className="mt-12 rounded-3xl bg-teal-brand text-white p-8 sm:p-12 shadow-premium relative overflow-hidden reveal-on-scroll delay-150">
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
