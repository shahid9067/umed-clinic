import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, User, Phone, MessageSquare, Send, PhoneCall } from 'lucide-react';
import { Language } from '../types/clinic';
import { CARE_ITEMS, CLINIC_CONTACT } from '../data/clinicData';
import { TRANSLATIONS } from '../data/translations';

interface BookingModalProps {
  isOpen: boolean;
  initialServiceId?: string;
  language: Language;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  initialServiceId,
  language,
  onClose,
}) => {
  const t = TRANSLATIONS[language];

  const [service, setService] = useState(initialServiceId || 'psychiatric-consultation');
  const [preferredDay, setPreferredDay] = useState('Today (Earliest available)');
  const [preferredTime, setPreferredTime] = useState('Morning (10:00 AM – 1:00 PM)');
  const [patientName, setPatientName] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    if (initialServiceId) {
      setService(initialServiceId);
    }
  }, [initialServiceId]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const selectedCare = CARE_ITEMS.find((c) => c.id === service);
    const serviceName = selectedCare ? selectedCare.titleEn : 'General Consultation';

    const messageLines = [
      'Hello Dr. Shradha / UMED Clinic,',
      'I would like to book a consultation at UMED Centre for Mental Health, Latur.',
      '',
      `• Patient / Contact: ${patientName.trim() || 'Patient Enquiry'}`,
      `• Consultation Area: ${serviceName}`,
      `• Preferred Day: ${preferredDay}`,
      `• Preferred Time: ${preferredTime}`,
    ];

    if (phone.trim()) {
      messageLines.push(`• Phone: ${phone.trim()}`);
    }

    if (notes.trim()) {
      messageLines.push(`• Notes: ${notes.trim()}`);
    }

    messageLines.push('', 'Kindly confirm available appointment timings. Thank you.');

    const encodedMessage = encodeURIComponent(messageLines.join('\n'));
    const whatsappUrl = `${CLINIC_CONTACT.whatsappBaseUrl}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-teal-950/75 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
    >
      <div
        className="relative w-full max-w-lg max-h-[92vh] overflow-y-auto bg-white rounded-3xl shadow-premium border border-teal-900/10 p-6 sm:p-8 space-y-6 text-left animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-100">
          <div className="space-y-1">
            <h3 id="booking-modal-title" className="font-display text-2xl font-bold text-teal-brand">
              {t.bookModalTitle}
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              {t.bookModalSubtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-teal-brand hover:bg-teal-50 transition-colors"
            aria-label="Close booking modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Booking Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Service Selector */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-teal-brand flex items-center gap-1.5">
              <span>{t.lblService}</span>
            </label>
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-teal-900/15 bg-slate-50/60 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-gold-400"
            >
              {CARE_ITEMS.map((c) => (
                <option key={c.id} value={c.id}>
                  {language === 'mr' ? c.titleMr : c.titleEn}
                </option>
              ))}
              <option value="general">
                {language === 'mr' ? 'इतर / सामान्य विचारपूस' : 'Other / General Enquiry'}
              </option>
            </select>
          </div>

          {/* Preferred Day & Time Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Preferred Day */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-teal-brand flex items-center gap-1.5">
                <Calendar size={13} className="text-gold-600" />
                <span>{t.lblDay}</span>
              </label>
              <select
                value={preferredDay}
                onChange={(e) => setPreferredDay(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-teal-900/15 bg-slate-50/60 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-gold-400"
              >
                <option value="Today (Earliest available)">{t.dayToday}</option>
                <option value="Tomorrow">{t.dayTomorrow}</option>
                <option value="This Week">{t.dayThisWeek}</option>
              </select>
            </div>

            {/* Preferred Time */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-teal-brand flex items-center gap-1.5">
                <Clock size={13} className="text-gold-600" />
                <span>{t.lblTime}</span>
              </label>
              <select
                value={preferredTime}
                onChange={(e) => setPreferredTime(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-teal-900/15 bg-slate-50/60 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-gold-400"
              >
                <option value="Morning (10:00 AM – 1:00 PM)">{t.timeMorning}</option>
                <option value="Afternoon (1:00 PM – 4:00 PM)">{t.timeAfternoon}</option>
                <option value="Evening (4:00 PM – 8:00 PM)">{t.timeEvening}</option>
              </select>
            </div>
          </div>

          {/* Patient Name */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-teal-brand flex items-center gap-1.5">
              <User size={13} className="text-gold-600" />
              <span>{t.lblName}</span>
            </label>
            <input
              type="text"
              required
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              placeholder={language === 'mr' ? 'उदा. राहुल किंवा स्नेहा' : 'e.g. Patient or relative name'}
              className="w-full px-3.5 py-2.5 rounded-xl border border-teal-900/15 bg-white text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-400"
            />
          </div>

          {/* Phone (Optional) */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-teal-brand flex items-center gap-1.5">
              <Phone size={13} className="text-gold-600" />
              <span>{t.lblPhone}</span>
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="e.g. 98XXXXXXXX"
              className="w-full px-3.5 py-2.5 rounded-xl border border-teal-900/15 bg-white text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-400"
            />
          </div>

          {/* Notes (Optional) */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-teal-brand flex items-center gap-1.5">
              <MessageSquare size={13} className="text-gold-600" />
              <span>{t.lblNotes}</span>
            </label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder={
                language === 'mr'
                  ? 'काही विशेष लक्षणे किंवा वेळ (उदा. झोप लागत नाही, भीती वाटते)...'
                  : 'Brief context if comfortable sharing (e.g. first visit, chronic stress)...'
              }
              className="w-full px-3.5 py-2 rounded-xl border border-teal-900/15 bg-white text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-400"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm py-3.5 shadow-medium transition-all duration-200"
            >
              <Send size={16} />
              <span>{t.btnSendWhatsApp}</span>
            </button>
          </div>
        </form>

        {/* Alternative: Call Directly */}
        <div className="pt-4 border-t border-slate-100 text-center space-y-2">
          <p className="text-xs text-slate-500 font-medium">{t.orCallDirectly}</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`tel:${CLINIC_CONTACT.phone1Raw}`}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-brand hover:text-gold-600 px-3 py-1.5 rounded-lg bg-teal-50"
            >
              <PhoneCall size={13} className="text-gold-600" />
              <span>{CLINIC_CONTACT.phone1}</span>
            </a>
            <a
              href={`tel:${CLINIC_CONTACT.phone2Raw}`}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-brand hover:text-gold-600 px-3 py-1.5 rounded-lg bg-teal-50"
            >
              <PhoneCall size={13} className="text-gold-600" />
              <span>{CLINIC_CONTACT.phone2}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
