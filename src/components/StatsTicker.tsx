import React from 'react';
import { ShieldCheck, UserCheck, Activity, Building, Sparkles, Clock, LucideIcon } from 'lucide-react';
import { Language } from '../types/clinic';
import { useCountUp } from '../hooks/useCountUp';

interface StatsTickerProps {
  language: Language;
}

interface StatConfig {
  end: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  fallbackValue: string;
  labelEn: string;
  labelMr: string;
  icon: LucideIcon;
}

const TickerItem: React.FC<{
  config: StatConfig;
  language: Language;
}> = ({ config, language }) => {
  const { ref, value } = useCountUp({
    end: config.end,
    suffix: config.suffix || '',
    prefix: config.prefix || '',
    decimals: config.decimals || 0,
    duration: 2200,
  });

  const Icon = config.icon;

  return (
    <div
      ref={ref}
      className="group relative rounded-2xl bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 p-4 sm:p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gold-400/40 hover:shadow-lg"
    >
      <div className="flex items-center justify-between mb-2">
        <span className="font-display text-2xl sm:text-3xl font-bold text-white group-hover:text-gold-300 transition-colors tracking-tight">
          {value}
        </span>
        <div className="h-8 w-8 rounded-xl bg-teal-800/60 border border-teal-700/50 flex items-center justify-center text-gold-400 group-hover:scale-110 transition-transform">
          <Icon size={16} />
        </div>
      </div>
      <p className="text-xs text-teal-100/80 font-medium leading-snug">
        {language === 'mr' ? config.labelMr : config.labelEn}
      </p>
      {/* Bottom subtle gold glow indicator */}
      <div className="absolute bottom-0 inset-x-4 h-0.5 bg-gradient-to-r from-transparent via-gold-500/0 to-transparent group-hover:via-gold-400 transition-all duration-500" />
    </div>
  );
};

export const StatsTicker: React.FC<StatsTickerProps> = ({ language }) => {
  const statConfigs: StatConfig[] = [
    {
      end: 5000,
      suffix: '+',
      fallbackValue: '5,000+',
      labelEn: 'Patients & Families Guided',
      labelMr: 'उपचार घेतलेले समाधानी रुग्ण',
      icon: UserCheck,
    },
    {
      end: 100,
      suffix: '%',
      fallbackValue: '100%',
      labelEn: 'Strict Patient Privacy',
      labelMr: 'संपूर्ण गोपनीयता व सुरक्षा',
      icon: ShieldCheck,
    },
    {
      end: 10,
      suffix: '+',
      fallbackValue: '10+ Yrs',
      labelEn: 'Years Clinical Experience',
      labelMr: 'वर्षांचा समर्पित वैद्यकीय अनुभव',
      icon: Activity,
    },
    {
      end: 24,
      suffix: '/7',
      fallbackValue: '24/7',
      labelEn: 'Inpatient & Emergency Support',
      labelMr: 'आयपीडी (IPD) व आपत्कालीन कक्ष',
      icon: Building,
    },
  ];

  return (
    <div className="border-y border-teal-900/15 bg-gradient-to-r from-teal-950 via-teal-brand to-teal-950 text-white py-6 overflow-hidden relative shadow-xl">
      {/* Subtle gold grid reflection */}
      <div className="absolute inset-0 bg-[radial-gradient(#b88e38_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Live Status Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-5 border-b border-teal-800/40 text-xs">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-semibold">
              {language === 'mr' ? 'आज ओपीडी सुरू: सकाळी १० ते रात्री ८' : 'OPD Consultations Active Today · 10:00 AM – 8:00 PM'}
            </span>
          </div>

          <div className="flex items-center gap-3 text-teal-200/90 text-xs font-medium">
            <span className="inline-flex items-center gap-1.5 font-marathi text-gold-300 font-bold bg-white/5 px-2.5 py-0.5 rounded-full border border-gold-400/20">
              <Sparkles size={13} className="text-gold-400" />
              <span>निरोगी मन, आनंदी जीवन</span>
            </span>
            <span className="hidden sm:inline-block text-teal-400">·</span>
            <span className="hidden sm:inline-flex items-center gap-1 text-[11px] text-teal-300">
              <Clock size={12} className="text-gold-400" />
              <span>Shivaji Chowk, Latur</span>
            </span>
          </div>
        </div>

        {/* 4 Interactive 3D Stat Blocks with Counting Animation */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {statConfigs.map((cfg, idx) => (
            <TickerItem key={idx} config={cfg} language={language} />
          ))}
        </div>
      </div>
    </div>
  );
};
