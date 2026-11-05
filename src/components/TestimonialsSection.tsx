import React from 'react';
import { Star, ShieldCheck, Quote, CheckCircle2, ArrowRight } from 'lucide-react';
import { Language } from '../types/clinic';
import { useTilt3D } from '../hooks/useTilt3D';

interface TestimonialsSectionProps {
  language: Language;
  onOpenBooking: () => void;
}

interface TestimonialData {
  id: string;
  nameEn: string;
  nameMr: string;
  locationEn: string;
  locationMr: string;
  conditionEn: string;
  conditionMr: string;
  timelineEn: string;
  timelineMr: string;
  quoteEn: string;
  quoteMr: string;
  outcomeEn: string;
  outcomeMr: string;
}

const TESTIMONIALS: TestimonialData[] = [
  {
    id: 'panic-recovery',
    nameEn: 'P. K. (Software Engineer)',
    nameMr: 'पी. के. (सॉफ्टवेअर इंजिनिअर)',
    locationEn: 'Pune / Latur',
    locationMr: 'पुणे / लातूर',
    conditionEn: 'Severe Panic Attacks & Agoraphobia',
    conditionMr: 'तीव्र पॅनिक अटॅक व भीती',
    timelineEn: '5 Months Treatment',
    timelineMr: '५ महिन्यांचे उपचार',
    quoteEn: 'I could not step into my office or even drive without feeling like I was going to collapse. Dr. Shradha listened for a full 45 minutes on day one. She explained that my body was stuck in fight-or-flight mode. Today I am back working in Pune with zero panic episodes.',
    quoteMr: 'ऑफिसमध्ये जाणे किंवा गाडी चालवणेही माझ्यासाठी अशक्य झाले होते; अचानक छातीत धडधड वाढून चक्कर यायची. डॉ. श्रद्धा यांनी पहिल्याच दिवशी ४५ मिनिटे माझे म्हणणे ऐकून घेतले. आज मी पूर्णपणे बरा होऊन पुण्यात पुन्हा आत्मविश्वासाने काम करत आहे.',
    outcomeEn: 'Returned to work full-time · Tapered medication',
    outcomeMr: 'पूर्णवेळ कामावर रुजू · औषधे हळूहळू कमी',
  },
  {
    id: 'deaddiction-recovery',
    nameEn: 'Family of S. M. (Businessman)',
    nameMr: 'एस. एम. यांचे कुटुंब (व्यावसायिक)',
    locationEn: 'Dharashiv',
    locationMr: 'धाराशीव',
    conditionEn: 'Alcohol Dependence & Withdrawal',
    conditionMr: 'दारूचे व्यसन व तीव्र नैराश्य',
    timelineEn: 'IPD Detox + 6 Months Care',
    timelineMr: 'अंतररुग्ण विभाग + ६ महिने पाठपुरावा',
    quoteEn: 'Our family was breaking apart due to addiction. UMED provided medical detoxification with extreme dignity and zero judgment. They counseled our whole family on how to support him at home. He has been completely sober for over 8 months now.',
    quoteMr: 'व्यसनामुळे आमचे संपूर्ण कुटुंब उद्ध्वस्त होण्याच्या मार्गावर होते. उमेद क्लिनिकने अत्यंत आदराने आणि वैद्यकीय देखरेखीखाली व्यसनमुक्ती उपचार केले. संपूर्ण कुटुंबाला समुपदेशन मिळाले. आज माझे यजमान ८ महिन्यांपासून पूर्णपणे व्यसनमुक्त आहेत.',
    outcomeEn: '8+ Months sober · Family peace restored',
    outcomeMr: '८+ महिने व्यसनमुक्त · घरात पूर्ववत शांतता',
  },
  {
    id: 'student-stress',
    nameEn: 'A. D. (MPSC Aspirant)',
    nameMr: 'ए. डी. (स्पर्धा परीक्षा विद्यार्थी)',
    locationEn: 'Latur Study Hub',
    locationMr: 'लातूर अभ्यास केंद्र',
    conditionEn: 'Exam Burnout & Sleep Disorder',
    conditionMr: 'परीक्षेचा अतिताण व निद्रानाश',
    timelineEn: '6 Weeks Program',
    timelineMr: '६ आठवड्यांचे सत्र',
    quoteEn: 'After failing my preliminary exams, I stopped sleeping and started feeling completely hopeless. The doctor used cognitive therapy and minimal safe medication to break my anxiety loop. My focus is back and I sleep peacefully every night.',
    quoteMr: 'स्पर्धा परीक्षेत अपयश आल्यानंतर मला रात्री झोपच येत नव्हती आणि सतत नकारात्मक विचार येत होते. उमेद येथे मिळालेल्या योग्य मार्गदर्शनामुळे आणि मोजक्या औषधांमुळे माझ्या मनातील भीती दूर झाली. आता मी नव्या जोमाने अभ्यास करत आहे.',
    outcomeEn: 'Restful 8h sleep · Cleared preliminary exam',
    outcomeMr: 'शांत झोप पूर्ववत · पुढील परीक्षेची पूर्वतयारी',
  },
  {
    id: 'depression-geriatric',
    nameEn: 'V. R. (Retired Teacher, 64)',
    nameMr: 'व्ही. आर. (सेवानिवृत्त शिक्षक, वय ६४)',
    locationEn: 'Beed',
    locationMr: 'बीड',
    conditionEn: 'Severe Depression & Chronic Tremors',
    conditionMr: 'तीव्र नैराश्य व हातांची थरथर',
    timelineEn: 'EEG Diagnosis + 3 Months',
    timelineMr: 'ईईजी तपासणी + ३ महिने उपचार',
    quoteEn: 'Other clinics kept switching my medicines without explaining anything. Here, they did an in-house EEG, ruled out neurological issues, and gave precise, rational medication. Within 4 weeks, my appetite and enthusiasm for gardening returned.',
    quoteMr: 'अनेकांनी वेगवेगळ्या गोळ्या दिल्या, पण फरक पडत नव्हता. उमेद क्लिनिकमध्ये मेंदूची ईईजी चाचणी करून मूळ कारण शोधले आणि योग्य औषधे दिली. महिनाभरात माझी भूक आणि जगण्याचा आनंद परत मिळाला.',
    outcomeEn: 'Regained vital mood · Active daily routine',
    outcomeMr: 'उत्साह पूर्ववत · आनंददायी दैनंदिन जीवन',
  },
];

const TestimonialCard: React.FC<{
  item: TestimonialData;
  language: Language;
  delayClass: string;
}> = ({ item, language, delayClass }) => {
  const cardTilt = useTilt3D(6);

  return (
    <div
      ref={cardTilt.cardRef}
      onMouseMove={cardTilt.handleMouseMove}
      onMouseLeave={cardTilt.handleMouseLeave}
      style={cardTilt.style}
      className={`card-3d rounded-3xl bg-white border border-slate-200/90 shadow-premium p-6 sm:p-7 flex flex-col justify-between group reveal-on-scroll ${delayClass}`}
    >
      <div>
        {/* Header Ribbon */}
        <div className="flex items-center justify-between gap-2 pb-4 border-b border-slate-100">
          <div className="flex items-center gap-1 text-gold-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} fill="currentColor" />
            ))}
          </div>

          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
            <CheckCircle2 size={11} />
            {language === 'mr' ? 'तपासणीकृत सुधारणा' : 'Verified Recovery'}
          </span>
        </div>

        {/* Condition & Timeline Tags */}
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold text-teal-brand bg-teal-50 px-2.5 py-1 rounded-lg border border-teal-100">
            {language === 'mr' ? item.conditionMr : item.conditionEn}
          </span>
          <span className="text-[11px] font-medium text-slate-500 bg-slate-50 px-2 py-1 rounded-lg">
            {language === 'mr' ? item.timelineMr : item.timelineEn}
          </span>
        </div>

        {/* Patient Quote */}
        <div className="mt-4 relative">
          <Quote size={20} className="text-gold-400/40 absolute -top-1 -left-1" />
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-5 font-normal">
            {language === 'mr' ? item.quoteMr : item.quoteEn}
          </p>
        </div>
      </div>

      {/* Footer Info */}
      <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs">
        <div>
          <p className="font-bold text-teal-brand">
            {language === 'mr' ? item.nameMr : item.nameEn}
          </p>
          <p className="text-[11px] text-slate-500">
            {language === 'mr' ? item.locationMr : item.locationEn}
          </p>
        </div>

        <div className="text-[11px] font-semibold text-emerald-800 bg-emerald-50/80 px-2.5 py-1 rounded-lg border border-emerald-100">
          ✓ {language === 'mr' ? item.outcomeMr : item.outcomeEn}
        </div>
      </div>
    </div>
  );
};

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  language,
  onOpenBooking,
}) => {
  return (
    <section id="stories" className="py-20 lg:py-28 bg-[#fbfdfa] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-800/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 reveal-on-scroll">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold-600">
            <span className="h-0.5 w-6 bg-gold-500 rounded-full" />
            <span>{language === 'mr' ? 'रुग्ण अनुभव व यशोगाथा' : 'Patient Recovery Stories'}</span>
            <span className="h-0.5 w-6 bg-gold-500 rounded-full" />
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-teal-brand tracking-tight text-balance">
            {language === 'mr' ? (
              <>
                अंधाराकडून प्रकाशाकडे: <span className="font-serif italic text-gold-600 font-normal">पुनर्प्राप्त जीवनाचे अनुभव</span>
              </>
            ) : (
              <>
                Real Stories of Healing, Dignity & <span className="font-serif italic text-gold-600 font-normal">Reclaimed Peace</span>
              </>
            )}
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            {language === 'mr'
              ? 'लातूर, धाराशीव, बीड व संपूर्ण महाराष्ट्रातील शेकडो रुग्णांनी उमेद क्लिनिकच्या मदतीने पुन्हा स्वास्थ्याचा मार्ग मिळवला आहे.'
              : 'Over 5,000+ individuals and families across Marathwada have found lasting emotional recovery through compassionate listening and scientific medical care.'}
          </p>

          <div className="inline-flex items-center gap-2 text-xs font-medium text-slate-500 bg-white px-3.5 py-1.5 rounded-full border border-slate-200/80 shadow-xs">
            <ShieldCheck size={14} className="text-gold-600" />
            <span>
              {language === 'mr'
                ? '१००% गोपनीयता संरक्षण · रुग्णांची ओळख संरक्षित करण्यासाठी नावे संक्षेपात दिली आहेत.'
                : '100% Strict Confidentiality · Patient names abbreviated to protect dignity & privacy.'}
            </span>
          </div>
        </div>

        {/* 4 Cards 2x2 Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {TESTIMONIALS.map((item, idx) => {
            const delayClasses = ['delay-75', 'delay-150', 'delay-200', 'delay-250'];
            return (
              <TestimonialCard
                key={item.id}
                item={item}
                language={language}
                delayClass={delayClasses[idx % delayClasses.length]}
              />
            );
          })}
        </div>

        {/* Reassurance Callout Card */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-teal-brand text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 reveal-on-scroll">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-display text-xl sm:text-2xl font-bold text-white">
              {language === 'mr'
                ? 'तुमच्या मनातही काही प्रश्न किंवा संकोच आहे का?'
                : 'Ready to take the first step toward lasting peace?'}
            </h4>
            <p className="text-xs sm:text-sm text-teal-100 max-w-xl">
              {language === 'mr'
                ? 'संकोच सोडून आजच मानसोपचार तज्ज्ञांशी संवाद साधा. आम्ही तुमच्यासोबत आहोत.'
                : 'You don’t have to struggle alone. Schedule a confidential, unhurried consultation with Dr. Shradha today.'}
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="shrink-0 inline-flex items-center gap-2 rounded-full bg-gold-500 hover:bg-gold-600 text-white font-semibold text-xs sm:text-sm px-6 py-3.5 shadow-md transition-all hover:scale-105 btn-interactive"
          >
            <span>{language === 'mr' ? 'तपासणीसाठी वेळ घ्या' : 'Schedule Consultation'}</span>
            <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </section>
  );
};
