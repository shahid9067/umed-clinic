import React, { useState, useEffect } from 'react';
import { Language, CareItem } from './types/clinic';
import { useScrollReveal } from './hooks/useScrollReveal';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { StatsTicker } from './components/StatsTicker';
import { AboutSection } from './components/AboutSection';
import { DoctorSection } from './components/DoctorSection';
import { CareSection } from './components/CareSection';
import { FacilitiesSection } from './components/FacilitiesSection';
import { SelfCheckSection } from './components/SelfCheckSection';
import { ApproachSection } from './components/ApproachSection';
import { FaqSection } from './components/FaqSection';
import { VisitSection } from './components/VisitSection';
import { CrisisNotice } from './components/CrisisNotice';
import { Footer } from './components/Footer';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { BookingModal } from './components/BookingModal';
import { CareDetailModal } from './components/CareDetailModal';

export function App() {
  useScrollReveal();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [language, setLanguage] = useState<Language>('en');
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedBookingService, setSelectedBookingService] = useState<string | undefined>(undefined);
  const [selectedCareDetail, setSelectedCareDetail] = useState<CareItem | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        setScrollProgress((totalScroll / windowHeight) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenBooking = (serviceId?: string) => {
    setSelectedBookingService(serviceId);
    setBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingModalOpen(false);
    setSelectedBookingService(undefined);
  };

  const handleSelectCare = (item: CareItem) => {
    setSelectedCareDetail(item);
  };

  const handleCloseCareDetail = () => {
    setSelectedCareDetail(null);
  };

  const handleBookFromCareDetail = (serviceId: string) => {
    setSelectedCareDetail(null);
    setSelectedBookingService(serviceId);
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fafaf7] text-[#102a2d] antialiased selection:bg-gold-200 selection:text-teal-900">
      {/* Luxury Scroll Reading Progress Indicator */}
      <div
        className="fixed top-0 left-0 h-[2.5px] bg-gradient-to-r from-teal-brand via-gold-500 to-gold-400 z-[60] pointer-events-none transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      {/* Navigation Header */}
      <Header
        language={language}
        setLanguage={setLanguage}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Main Landmark Flow */}
      <main id="main-content" className="flex-1">
        <Hero language={language} onOpenBooking={() => handleOpenBooking()} />
        <StatsTicker language={language} />
        <AboutSection language={language} />
        <DoctorSection language={language} onOpenBooking={() => handleOpenBooking()} />
        <CareSection
          language={language}
          onSelectCare={handleSelectCare}
          onOpenBooking={handleOpenBooking}
        />
        <FacilitiesSection language={language} />
        <SelfCheckSection language={language} onOpenBooking={handleOpenBooking} />
        <ApproachSection language={language} />
        <FaqSection language={language} onOpenBooking={() => handleOpenBooking()} />
        <VisitSection language={language} onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* Responsible Healthcare & Emergency Helplines */}
      <CrisisNotice language={language} />

      {/* Comprehensive Medical Practice Footer */}
      <Footer language={language} />

      {/* Always-available Accessible WhatsApp Enquiry */}
      <WhatsAppFloat language={language} />

      {/* Interactive Appointment Scheduling Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        initialServiceId={selectedBookingService}
        language={language}
        onClose={handleCloseBooking}
      />

      {/* Deep-Dive Clinical Care Details Modal */}
      <CareDetailModal
        item={selectedCareDetail}
        language={language}
        onClose={handleCloseCareDetail}
        onBookThisService={handleBookFromCareDetail}
      />
    </div>
  );
}

export default App;
