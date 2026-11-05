import React from 'react';
import {
  LucideIcon,
  Brain,
  Wind,
  ShieldCheck,
  HeartHandshake,
  Sparkles,
  Zap,
  ArrowRight,
  Calendar,
} from 'lucide-react';
import { CareItem, Language } from '../types/clinic';
import { CARE_ITEMS } from '../data/clinicData';
import { TRANSLATIONS } from '../data/translations';

interface CareSectionProps {
  language: Language;
  onSelectCare: (item: CareItem) => void;
  onOpenBooking: (serviceId?: string) => void;
}

const iconMap: Record<string, LucideIcon> = {
  Brain,
  Wind,
  ShieldCheck,
  HeartHandshake,
  Sparkles,
  Zap,
};

export const CareSection: React.FC<CareSectionProps> = ({
  language,
  onSelectCare,
  onOpenBooking,
}) => {
  const t = TRANSLATIONS[language];

  return (
    <section id="care" className="py-20 lg:py-28 bg-[#f8faf8] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-96 h-96 bg-teal-800/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header styled cleanly like the reference */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14 sm:mb-16 reveal-on-scroll">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold-600">
            <span className="h-0.5 w-6 bg-gold-500 rounded-full" />
            <span>{t.careEyebrow}</span>
            <span className="h-0.5 w-6 bg-gold-500 rounded-full" />
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance text-teal-brand">
            {language === 'mr' ? (
              <span>मानसिक आरोग्य सेवा <span className="text-gold-600">तुमच्या गरजेनुसार</span></span>
            ) : (
              <span>Specialized Care Areas <span className="text-gold-600">Tailored To Your Needs</span></span>
            )}
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            {t.careSubtitle}
          </p>
        </div>

        {/* 6 Care Cards Grid - Matching Reference with Top Image, Circular Badge, Title, Info, Action */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CARE_ITEMS.map((item, idx) => {
            const IconComponent = iconMap[item.iconName] || Brain;
            const title = language === 'mr' ? item.titleMr : item.titleEn;
            const shortDesc = language === 'mr' ? item.shortDescMr : item.shortDescEn;
            const isFeatured = idx === 0;

            const delayClasses = ['delay-75', 'delay-150', 'delay-200', 'delay-100', 'delay-200', 'delay-300'];

            return (
              <article
                key={item.id}
                className={`card-premium group relative bg-white rounded-2xl overflow-hidden flex flex-col justify-between border ${
                  isFeatured ? 'border-gold-300 shadow-md ring-1 ring-gold-200' : 'border-slate-200/90 shadow-soft'
                } hover:shadow-2xl hover:border-gold-400 transition-all duration-300 reveal-on-scroll ${delayClasses[idx % delayClasses.length]}`}
              >
                <div>
                  {/* Top Image Panel with Architectural Cut Corner & Clean Gradient */}
                  <div
                    className="relative h-52 w-full overflow-hidden bg-slate-100"
                    style={{
                      clipPath: 'polygon(0 36px, 36px 0, 100% 0, 100% 100%, 0 100%)',
                    }}
                  >
                    <img
                      src={item.imageUrl}
                      alt={item.imageAltEn}
                      className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                      loading="eager"
                    />

                    {/* Gradient Overlay for Depth (matching reference) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-teal-950/80 via-teal-950/20 to-transparent pointer-events-none" />
                  </div>

                  {/* Circular Service Icon Badge Overlapping Lower-Left Boundary (Exactly like reference) */}
                  <div className="relative -mt-7 ml-6 z-20">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-teal-brand text-white shadow-lg transition-all duration-300 group-hover:bg-gold-500 group-hover:scale-110 group-hover:-rotate-6 group-hover:shadow-gold-500/30">
                      <IconComponent size={24} strokeWidth={2.2} />
                    </div>
                  </div>

                  {/* Card Content: Title & Small Description */}
                  <div className="px-6 pt-3 pb-4">
                    <h3 className="font-display text-xl font-bold text-teal-brand group-hover:text-gold-700 transition-colors duration-200 leading-snug">
                      {title}
                    </h3>

                    <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal line-clamp-3">
                      {shortDesc}
                    </p>
                  </div>
                </div>

                {/* Bottom Action Footer */}
                <div className="px-6 pb-5 pt-3 border-t border-slate-100/90 flex items-center justify-between gap-3 text-xs bg-slate-50/50">
                  <button
                    type="button"
                    onClick={() => onSelectCare(item)}
                    className="inline-flex items-center gap-1.5 font-bold text-teal-brand group-hover:text-gold-700 transition-colors group/btn"
                  >
                    <span>{language === 'mr' ? 'सविस्तर माहिती पहा' : 'Learn More'}</span>
                    <ArrowRight
                      size={14}
                      className="transition-transform duration-200 group-hover/btn:translate-x-1 text-gold-600"
                    />
                  </button>

                  <button
                    type="button"
                    onClick={() => onOpenBooking(item.id)}
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-600 hover:text-teal-brand px-3 py-1 rounded-full hover:bg-white border border-transparent hover:border-slate-200 transition-all"
                  >
                    <Calendar size={12} className="text-gold-600" />
                    <span>{language === 'mr' ? 'वेळ बुक करा' : 'Quick Book'}</span>
                  </button>
                </div>

                {/* Accent bottom border line (active on hover or featured card) */}
                <div
                  className={`h-1 w-full transition-all duration-300 ${
                    isFeatured
                      ? 'bg-gold-500'
                      : 'bg-transparent group-hover:bg-gold-500'
                  }`}
                />
              </article>
            );
          })}
        </div>

        {/* Bottom Action Callout */}
        <div className="mt-14 text-center reveal-on-scroll">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 p-2 bg-white rounded-2xl border border-slate-200/90 shadow-sm max-w-xl mx-auto">
            <span className="text-xs sm:text-sm text-slate-600 px-4 py-1">
              {language === 'mr'
                ? 'कोणत्याही मानसिक त्रासावर मार्गदर्शन हवे आहे का?'
                : 'Unsure which treatment fits your symptoms?'}
            </span>
            <button
              onClick={() => onOpenBooking()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-teal-brand text-white text-xs font-bold uppercase tracking-wider hover:bg-teal-900 transition-all shadow-sm hover:shadow"
            >
              <span>{t.bookConsultation}</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
