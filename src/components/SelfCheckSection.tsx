import React, { useState } from 'react';
import { Sparkles, ArrowRight, RotateCcw, Heart, Shield, MessageCircle, Calendar } from 'lucide-react';
import { Language } from '../types/clinic';
import { TRANSLATIONS } from '../data/translations';
import { CLINIC_CONTACT } from '../data/clinicData';
import { useTilt3D } from '../hooks/useTilt3D';

interface SelfCheckSectionProps {
  language: Language;
  onOpenBooking: (serviceId?: string) => void;
}

export const SelfCheckSection: React.FC<SelfCheckSectionProps> = ({ language, onOpenBooking }) => {
  const t = TRANSLATIONS[language];
  const containerTilt = useTilt3D(4);

  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [completed, setCompleted] = useState(false);

  const questions = [
    {
      titleEn: '1. How has your sleep and physical energy been over the past two weeks?',
      titleMr: '१. गेल्या दोन आठवड्यांत तुमची झोप आणि शारीरिक ताकद कशी राहिली आहे?',
      optionsEn: [
        'Restful and regular; normal daily energy.',
        'Broken sleep, trouble falling asleep, or frequent fatigue.',
        'Severe insomnia, racing thoughts at night, or overwhelming exhaustion.',
      ],
      optionsMr: [
        'शांत व नियमित झोप; कामासाठी पुरेसा उत्साह.',
        'मध्यरात्री जाग येणे, झोप न लागणे किंवा सतत थकवा जाणवणे.',
        'तीव्र निद्रानाश, डोक्यात सतत विचारांचा गोंधळ किंवा तीव्र गळून गेल्यासारखे वाटणे.',
      ],
    },
    {
      titleEn: '2. How often do you feel anxious, down, or unable to quiet your mind?',
      titleMr: '२. तुम्हाला सतत चिंता, उदास वाटणे किंवा मनातील अस्वस्थतेचा त्रास किती वेळा होतो?',
      optionsEn: [
        'Occasionally, but it passes quickly with rest.',
        'Several times a week; difficult to focus on work or studies.',
        'Almost daily; experiencing panic, dread, or feeling emotionally detached.',
      ],
      optionsMr: [
        'कधीतरी, पण विश्रांती घेतल्यानंतर मन शांत होते.',
        'आठवड्यातून अनेकदा; अभ्यास किंवा कामात लक्ष लागत नाही.',
        'दररोज किंवा सतत; घबराट, भीती किंवा मनातील तीव्र उदासी.',
      ],
    },
    {
      titleEn: '3. What area of support feels most important for you right now?',
      titleMr: '३. सध्याच्या घडीला तुम्हाला कोणत्या प्रकारच्या आधाराची किंवा मदतीची सर्वाधिक गरज वाटते?',
      optionsEn: [
        'A confidential conversation to untangle emotions & life stress.',
        'Medical assessment for anxiety, low mood, sleep or focus issues.',
        'Support for substance use / de-addiction, family conflicts, or child guidance.',
      ],
      optionsMr: [
        'तणाव आणि भावना मोकळेपणाने मांडण्यासाठी एक सुरक्षित समुपदेशन.',
        'चिंता, नैराश्य, झोप किंवा एकाग्रतेच्या त्रासावर डॉक्टरकडून वैद्यकीय तपासणी.',
        'व्यसनमुक्ती, कौटुंबिक वाद किंवा मुलांच्या संगोपनाबद्दल तज्ज्ञांचे मार्गदर्शन.',
      ],
    },
  ];

  const handleSelectOption = (optionIndex: number) => {
    const updatedAnswers = [...answers, optionIndex];
    setAnswers(updatedAnswers);

    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setCompleted(true);
    }
  };

  const handleReset = () => {
    setStep(0);
    setAnswers([]);
    setCompleted(false);
  };

  const getRecommendation = () => {
    const isHighDistress = answers[0] === 2 || answers[1] === 2;
    const preference = answers[2];

    if (preference === 2) {
      return {
        serviceId: 'de-addiction',
        titleEn: 'De-Addiction Support & Family Guidance',
        titleMr: 'व्यसनमुक्ती सल्ला व कौटुंबिक मार्गदर्शन',
        adviceEn:
          'Taking the first step to address substance use or deep relationship strain requires courage. Dr. Shradha provides a dignified, private medical path forward.',
        adviceMr:
          'व्यसनमुक्ती किंवा कौटुंबिक तणावावर मात करण्यासाठी उमेद येथे आदरयुक्त व शास्त्रीय वैद्यकीय उपचार उपलब्ध आहेत.',
      };
    }

    if (isHighDistress || preference === 1) {
      return {
        serviceId: 'psychiatric-consultation',
        titleEn: 'Comprehensive Psychiatric Consultation',
        titleMr: 'सविस्तर मानसोपचार तपासणी',
        adviceEn:
          'Your mind and body are signaling that stress and neurotransmitter levels need balance. An unhurried consultation with Dr. Shradha can bring clarity, relief, and restful sleep.',
        adviceMr:
          'झोप आणि मनाची अस्वस्थता ही मेंदूतील थकव्याचे संकेत आहेत. डॉ. श्रद्धा यांच्याशी शांतपणे चर्चा करून योग्य उपचार घेतल्यास लवकर आराम मिळू शकतो.',
      };
    }

    return {
      serviceId: 'anxiety-mood',
      titleEn: 'Anxiety & Mood Care / Psychotherapy',
      titleMr: 'चिंता निवारण व समुपदेशन विभाग',
      adviceEn:
        'A structured dialogue and calming behavioral therapy (CBT / MBT) can help you regain emotional balance, clarity, and peace in daily routines.',
      adviceMr:
        'समुपदेशन आणि बिहेविअर थेरपीच्या साहाय्याने विचारांची दिशा बदलून मन पुन्हा शांत आणि आनंदी बनवता येईल.',
    };
  };

  const recommendation = completed ? getRecommendation() : null;

  const handleSendWhatsAppSummary = () => {
    if (!recommendation) return;
    const msg = encodeURIComponent(
      `Hello UMED Clinic, I completed the self-reflection on your website. I would like to consult Dr. Shradha regarding: ${recommendation.titleEn}. Please guide me on appointment availability.`
    );
    window.open(`${CLINIC_CONTACT.whatsappBaseUrl}?text=${msg}`, '_blank');
  };

  return (
    <section id="self-check" className="py-20 lg:py-28 bg-[#f3f7f5] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 reveal-on-scroll">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold-600">
            <span className="h-0.5 w-6 bg-gold-500 rounded-full" />
            <Sparkles size={14} className="text-gold-500" />
            <span>{t.selfEyebrow}</span>
            <span className="h-0.5 w-6 bg-gold-500 rounded-full" />
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-teal-brand tracking-tight text-balance">
            {language === 'mr' ? (
              <>
                तुमच्या मनाचे ऐका: <span className="font-serif italic text-gold-600 font-normal">२ मिनिटांचे स्व-चिंतन</span>
              </>
            ) : (
              <>
                Listen to Your Mind: <span className="font-serif italic text-gold-600 font-normal">2-Minute Gentle Check</span>
              </>
            )}
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {t.selfSubtitle}
          </p>
        </div>

        {/* 3D Self Check Card Container */}
        <div
          ref={containerTilt.cardRef}
          onMouseMove={containerTilt.handleMouseMove}
          onMouseLeave={containerTilt.handleMouseLeave}
          style={containerTilt.style}
          className="mt-12 card-3d rounded-3xl p-6 sm:p-10 bg-white border border-slate-200/90 shadow-2xl relative reveal-on-scroll delay-100"
        >
          {!completed ? (
            <div className="space-y-6">
              {/* Progress Indicator */}
              <div className="flex items-center justify-between text-xs font-semibold text-slate-500 pb-4 border-b border-slate-100">
                <span>
                  {language === 'mr' ? `प्रश्न ${step + 1} / ३` : `Question ${step + 1} of 3`}
                </span>
                <span className="text-gold-600 font-bold">
                  {Math.round(((step + 1) / questions.length) * 100)}%
                </span>
              </div>

              {/* Question Title */}
              <h3 className="font-display text-xl sm:text-2xl font-bold text-teal-brand leading-snug">
                {language === 'mr' ? questions[step].titleMr : questions[step].titleEn}
              </h3>

              {/* Options */}
              <div className="space-y-3 pt-2">
                {(language === 'mr' ? questions[step].optionsMr : questions[step].optionsEn).map(
                  (opt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      className="w-full text-left p-4 sm:p-5 rounded-2xl border border-teal-900/10 hover:border-gold-400 hover:bg-gold-50/40 bg-[#fafbf9] transition-all duration-200 flex items-center justify-between gap-4 text-sm font-medium text-slate-700 hover:text-teal-brand group shadow-2xs hover:shadow-md hover:-translate-y-0.5"
                    >
                      <span className="leading-relaxed">{opt}</span>
                      <span className="h-7 w-7 rounded-full border border-teal-200 flex items-center justify-center shrink-0 group-hover:bg-teal-brand group-hover:text-white transition-all group-hover:scale-110">
                        <ArrowRight size={14} />
                      </span>
                    </button>
                  )
                )}
              </div>

              {/* Privacy Notice */}
              <div className="pt-4 flex items-center gap-2 text-[11px] text-slate-400">
                <Shield size={14} className="text-emerald-600" />
                <span>
                  {language === 'mr'
                    ? 'ही तपासणी पूर्णपणे अनामिक व सुरक्षित आहे. कोणताही वैयक्तिक डेटा सेव्ह केला जात नाही.'
                    : 'This reflection is 100% private, anonymous, and stored nowhere.'}
                </span>
              </div>
            </div>
          ) : (
            /* Results & Empathetic Summary */
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-200">
                  <Heart size={14} className="text-emerald-600" />
                  <span>
                    {language === 'mr' ? 'चिंतन पूर्ण झाले' : 'Reflection Complete'}
                  </span>
                </div>

                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-teal-brand transition-colors"
                >
                  <RotateCcw size={13} />
                  <span>{language === 'mr' ? 'पुन्हा सुरू करा' : 'Retake Check'}</span>
                </button>
              </div>

              <div className="space-y-3">
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-teal-brand">
                  {language === 'mr'
                    ? 'तुम्ही एकटे नाही आहात; योग्य आधार उपलब्ध आहे.'
                    : 'You do not have to carry this alone.'}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {language === 'mr'
                    ? 'तुमच्या उत्तरांवर आधारित डॉ. श्रद्धा पत्रिके यांच्या क्लिनिकल मार्गदर्शनाची दिशा खालीलप्रमाणे सुचवली जाते:'
                    : 'Based on your reflection, here is a thoughtful clinical direction for your care journey with Dr. Shradha Patrike:'}
                </p>
              </div>

              {/* Recommendation Card */}
              {recommendation && (
                <div className="p-5 sm:p-6 rounded-2xl bg-teal-50/70 border border-teal-200 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
                      {language === 'mr' ? 'सुचवलेला विभाग' : 'Recommended Care Pathway'}
                    </span>
                    <span className="text-[11px] font-bold text-gold-600 bg-white px-2.5 py-0.5 rounded-full border border-gold-200">
                      Tailored
                    </span>
                  </div>

                  <h4 className="text-lg sm:text-xl font-bold text-teal-brand">
                    {language === 'mr' ? recommendation.titleMr : recommendation.titleEn}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {language === 'mr' ? recommendation.adviceMr : recommendation.adviceEn}
                  </p>
                </div>
              )}

              {/* CTA Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => onOpenBooking(recommendation?.serviceId)}
                  className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-teal-brand hover:bg-teal-800 text-white font-semibold text-xs sm:text-sm shadow-md transition-all hover:-translate-y-0.5 btn-interactive"
                >
                  <Calendar size={15} />
                  <span>
                    {language === 'mr' ? 'तपासणीसाठी वेळ निश्चित करा' : 'Schedule Consultation'}
                  </span>
                </button>

                <button
                  onClick={handleSendWhatsAppSummary}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full border border-emerald-600 text-emerald-800 bg-emerald-50/80 hover:bg-emerald-100 font-semibold text-xs sm:text-sm transition-all shadow-xs"
                >
                  <MessageCircle size={15} className="text-emerald-600" />
                  <span>
                    {language === 'mr' ? 'व्हॉट्सअॅपवर सल्ला विचारा' : 'Chat via WhatsApp'}
                  </span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
