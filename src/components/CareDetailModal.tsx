import React, { useEffect } from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { CareItem, Language } from '../types/clinic';
import { TRANSLATIONS } from '../data/translations';

interface CareDetailModalProps {
  item: CareItem | null;
  language: Language;
  onClose: () => void;
  onBookThisService: (serviceId: string) => void;
}

export const CareDetailModal: React.FC<CareDetailModalProps> = ({
  item,
  language,
  onClose,
  onBookThisService,
}) => {
  const t = TRANSLATIONS[language];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  const title = language === 'mr' ? item.titleMr : item.titleEn;
  const category = language === 'mr' ? item.categoryMr : item.categoryEn;
  const fullDesc = language === 'mr' ? item.fullDescMr : item.fullDescEn;
  const symptoms = language === 'mr' ? item.symptomsMr : item.symptomsEn;
  const treatments = language === 'mr' ? item.treatmentMr : item.treatmentEn;
  const suitableFor = language === 'mr' ? item.suitableForMr : item.suitableForEn;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-teal-950/70 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="care-modal-title"
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-premium border border-teal-900/10 p-6 sm:p-8 space-y-6 text-left animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-100">
          <div className="space-y-1">
            <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-teal-50 text-teal-brand border border-teal-100">
              {category}
            </span>
            <h3 id="care-modal-title" className="font-display text-2xl sm:text-3xl font-bold text-teal-brand">
              {title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-teal-brand hover:bg-teal-50 transition-colors"
            aria-label="Close care details"
          >
            <X size={22} />
          </button>
        </div>

        {/* Narrative Description */}
        <div className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
          <p>{fullDesc}</p>
        </div>

        {/* Symptoms Section */}
        <div className="space-y-3 p-5 rounded-2xl bg-cream-100 border border-teal-900/10">
          <div className="flex items-center gap-2 text-teal-brand font-bold text-sm">
            <Sparkles size={16} className="text-gold-600 shrink-0" />
            <span>{t.modalSymptomsTitle}</span>
          </div>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
            {symptoms.map((symptom, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <CheckCircle2 size={15} className="text-gold-500 mt-0.5 shrink-0" />
                <span className="leading-snug">{symptom}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Clinical Treatment Approach */}
        <div className="space-y-3 p-5 rounded-2xl bg-teal-50/60 border border-teal-200/60">
          <div className="flex items-center gap-2 text-teal-brand font-bold text-sm">
            <ShieldCheck size={16} className="text-emerald-600 shrink-0" />
            <span>{t.modalTreatmentTitle}</span>
          </div>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
            {treatments.map((treatment, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-brand mt-2 shrink-0" />
                <span className="leading-snug">{treatment}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Who Can Benefit */}
        <div className="text-xs sm:text-sm text-slate-600 border-l-2 border-gold-400 pl-4 py-1">
          <span className="font-bold text-teal-brand">{t.modalSuitableTitle}: </span>
          <span>{suitableFor}</span>
        </div>

        {/* Bottom Modal Actions */}
        <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-full text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
          >
            {language === 'mr' ? 'बंद करा' : 'Close'}
          </button>

          <button
            onClick={() => {
              onClose();
              onBookThisService(item.id);
            }}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gold-500 hover:bg-gold-600 text-white font-semibold text-xs sm:text-sm shadow-gold-glow transition-all duration-200"
          >
            <span>{t.modalBookThisService}</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};
