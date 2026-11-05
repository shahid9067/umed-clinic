import React from 'react';
import { AlertCircle, Phone } from 'lucide-react';
import { Language } from '../types/clinic';
import { CRISIS_HELPLINES } from '../data/clinicData';
import { TRANSLATIONS } from '../data/translations';

interface CrisisNoticeProps {
  language: Language;
}

export const CrisisNotice: React.FC<CrisisNoticeProps> = ({ language }) => {
  const t = TRANSLATIONS[language];

  return (
    <aside
      className="bg-slate-900 text-slate-300 py-6 border-t border-slate-800 text-xs"
      aria-label="Emergency and Crisis Support"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-3">
        <div className="flex items-start gap-2.5 text-amber-400 font-semibold">
          <AlertCircle size={16} className="shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            {t.crisisNotice}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-[11px] text-slate-400 pt-1">
          <span className="font-semibold text-slate-300">
            {language === 'mr' ? '२४/७ मोफत राष्ट्रीय हेल्पलाईन:' : '24/7 National Emergency Helplines:'}
          </span>
          {CRISIS_HELPLINES.map((h, idx) => (
            <div key={idx} className="flex items-center gap-1.5">
              <Phone size={11} className="text-emerald-400" />
              <span className="font-medium text-slate-200">{h.name}:</span>
              <span className="text-emerald-400 font-bold">{h.number}</span>
              <span className="text-slate-500">({h.note})</span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};
