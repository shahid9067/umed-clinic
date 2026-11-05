import React, { useState } from 'react';
import { ChevronDown, Search, HelpCircle, MessageCircle } from 'lucide-react';
import { Language } from '../types/clinic';
import { FAQS } from '../data/clinicData';
import { TRANSLATIONS } from '../data/translations';

interface FaqSectionProps {
  language: Language;
  onOpenBooking: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ language, onOpenBooking }) => {
  const t = TRANSLATIONS[language];
  const [activeCategory, setActiveCategory] = useState<'all' | 'general' | 'treatment' | 'practical'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaqId, setOpenFaqId] = useState<string | null>(FAQS[0].id);

  const filterTabs = [
    { id: 'all', label: t.faqFilterAll },
    { id: 'general', label: t.faqFilterGeneral },
    { id: 'treatment', label: t.faqFilterTreatment },
    { id: 'practical', label: t.faqFilterPractical },
  ] as const;

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const query = searchQuery.toLowerCase().trim();
    if (!query) return matchesCategory;

    const matchesQuery =
      faq.questionEn.toLowerCase().includes(query) ||
      faq.questionMr.toLowerCase().includes(query) ||
      faq.answerEn.toLowerCase().includes(query) ||
      faq.answerMr.toLowerCase().includes(query);

    return matchesCategory && matchesQuery;
  });

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#f7f9f7] relative">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 reveal-on-scroll">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold-600">
            <span className="h-px w-8 bg-gold-500" />
            <span>{t.faqEyebrow}</span>
            <span className="h-px w-8 bg-gold-500" />
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-teal-brand tracking-tight text-balance">
            {t.faqHeading}
          </h2>

          <p className="text-base text-slate-600 leading-relaxed max-w-2xl mx-auto pt-1">
            {language === 'mr'
              ? 'मानसोपचार, औषधोपचार आणि पहिल्या भेटीविषयी वारंवार विचारल्या जाणाऱ्या प्रश्नांची स्पष्ट उत्तरे.'
              : 'Honest, reassuring clarity about confidentiality, medications, appointments, and care.'}
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="mt-12 space-y-4 reveal-on-scroll delay-100">
          {/* Search Box */}
          <div className="relative max-w-md mx-auto">
            <Search
              size={17}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                language === 'mr'
                  ? 'प्रश्न किंवा विषय शोधा (उदा. औषधे, वेळ, गोपनीयता)...'
                  : 'Search questions (e.g. medicines, privacy, fees)...'
              }
              className="w-full pl-11 pr-4 py-2.5 rounded-full border border-teal-900/15 bg-white text-xs sm:text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent shadow-2xs"
            />
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                  activeCategory === tab.id
                    ? 'bg-teal-brand text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:bg-cream-200 border border-teal-900/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* FAQs Accordion List */}
        <div className="mt-10 space-y-3">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              const question = language === 'mr' ? faq.questionMr : faq.questionEn;
              const answer = language === 'mr' ? faq.answerMr : faq.answerEn;

              return (
                <div
                  key={faq.id}
                  className="rounded-2xl border border-teal-900/10 bg-white overflow-hidden transition-all duration-200 shadow-2xs"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 group"
                  >
                    <span className="font-display text-base sm:text-lg font-bold text-teal-brand group-hover:text-gold-700 transition-colors">
                      {question}
                    </span>
                    <span
                      className={`h-8 w-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen ? 'bg-teal-brand text-white rotate-180' : 'bg-teal-50 text-teal-brand'
                      }`}
                    >
                      <ChevronDown size={16} />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-slate-700 leading-relaxed border-t border-slate-100 animate-slide-up">
                      <p>{answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 rounded-2xl bg-white border border-teal-900/10 p-8 space-y-3">
              <HelpCircle size={32} className="mx-auto text-gold-500" />
              <p className="text-sm font-semibold text-slate-700">
                {language === 'mr'
                  ? 'कोणताही प्रश्न सापडला नाही. क्लिनिकशी थेट संपर्क साधा.'
                  : 'No matching questions found. Feel free to contact our clinic directly.'}
              </p>
              <button
                onClick={() => setSearchQuery('')}
                className="text-xs font-bold text-teal-brand underline"
              >
                {language === 'mr' ? 'सर्व प्रश्न दाखवा' : 'Reset search filter'}
              </button>
            </div>
          )}
        </div>

        {/* Quick Contact Prompt */}
        <div className="mt-12 rounded-2xl bg-cream-100 border border-teal-900/10 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <p className="font-bold text-teal-brand text-sm sm:text-base">
              {language === 'mr' ? 'अजूनही काही शंका किंवा प्रश्न आहेत का?' : 'Still have a question on your mind?'}
            </p>
            <p className="text-xs text-slate-600">
              {language === 'mr'
                ? 'आमच्या क्लिनिकशी व्हॉट्सअ‍ॅपवर बोला किंवा थेट ९०६७० ८९३२३ वर फोन करा.'
                : 'Connect with our reception desk on WhatsApp or call 90670 89323.'}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-teal-brand text-white text-xs font-semibold hover:bg-teal-800 transition-colors"
            >
              <MessageCircle size={14} className="text-emerald-400" />
              <span>{language === 'mr' ? 'थेट विचारा' : 'Ask Directly'}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
