import React from 'react';
import { ShieldCheck, UserCheck, Activity, Building, Sparkles, HeartHandshake } from 'lucide-react';
import { Language } from '../types/clinic';
import { TRANSLATIONS } from '../data/translations';

interface StatsTickerProps {
  language: Language;
}

export const StatsTicker: React.FC<StatsTickerProps> = ({ language }) => {
  const t = TRANSLATIONS[language];

  const badges = [
    { icon: Sparkles, text: 'निरोगी मन, आनंदी जीवन', isMarathiMotto: true },
    { icon: ShieldCheck, text: t.tickConfidential },
    { icon: UserCheck, text: t.tickRegDoctor },
    { icon: Activity, text: t.tickEegMbt },
    { icon: Building, text: t.tickIpdOpd },
    { icon: HeartHandshake, text: t.tickConcession },
  ];

  return (
    <div className="border-y border-teal-900/10 bg-teal-brand text-white py-3.5 overflow-hidden relative shadow-inner">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center lg:justify-between gap-y-2.5 gap-x-5 sm:gap-x-7 text-xs font-semibold tracking-wide text-teal-100">
          {badges.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div
                key={idx}
                className={`flex items-center gap-2 py-0.5 transition-transform duration-300 hover:scale-105 ${
                  b.isMarathiMotto
                    ? 'font-marathi font-bold text-gold-300 bg-white/10 px-2.5 py-1 rounded-full'
                    : ''
                }`}
              >
                <Icon size={14} className="text-gold-400 shrink-0" />
                <span className="text-white/95 font-medium">{b.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
