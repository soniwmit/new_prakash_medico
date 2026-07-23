import React, { useState, useEffect } from 'react';
import { NavPage } from './types';
import { SeoHead } from './components/SeoHead';
import { EmergencyBanner } from './components/EmergencyBanner';
import { Header } from './components/Header';
import { Breadcrumb } from './components/Breadcrumb';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { WhatsAppOrderModal } from './components/WhatsAppOrderModal';
import { MedicineSearchModal } from './components/MedicineSearchModal';
import { PolicyModals } from './components/PolicyModals';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { FaqPage } from './pages/FaqPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<NavPage>('home');
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState<boolean>(false);
  const [prefilledMedicine, setPrefilledMedicine] = useState<string>('');
  const [isSearchModalOpen, setIsSearchModalOpen] = useState<boolean>(false);
  const [activePolicyModal, setActivePolicyModal] = useState<'privacy' | 'terms' | 'disclaimer' | null>(null);

  // Sync Dark Mode class on document
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleOpenWhatsAppModal = (medicineName: string = '') => {
    setPrefilledMedicine(medicineName);
    setIsWhatsAppModalOpen(true);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage
            onNavigate={setCurrentPage}
            onOpenWhatsAppModal={handleOpenWhatsAppModal}
            onOpenSearch={() => setIsSearchModalOpen(true)}
          />
        );
      case 'about':
        return <AboutPage onOpenWhatsAppModal={() => handleOpenWhatsAppModal()} />;
      case 'services':
        return <ServicesPage onOpenWhatsAppModal={handleOpenWhatsAppModal} />;
      case 'gallery':
        return <GalleryPage />;
      case 'testimonials':
        return (
          <HomePage
            onNavigate={setCurrentPage}
            onOpenWhatsAppModal={handleOpenWhatsAppModal}
            onOpenSearch={() => setIsSearchModalOpen(true)}
          />
        );
      case 'faq':
        return <FaqPage onOpenWhatsAppModal={() => handleOpenWhatsAppModal()} />;
      case 'contact':
        return <ContactPage />;
      default:
        return (
          <HomePage
            onNavigate={setCurrentPage}
            onOpenWhatsAppModal={handleOpenWhatsAppModal}
            onOpenSearch={() => setIsSearchModalOpen(true)}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300">
      
      {/* Dynamic SEO & Schema Tags */}
      <SeoHead currentPage={currentPage} />

      {/* Top Emergency Announcement Bar */}
      <EmergencyBanner />

      {/* Sticky Navigation Header */}
      <Header
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        onOpenSearch={() => setIsSearchModalOpen(true)}
        onOpenWhatsAppModal={() => handleOpenWhatsAppModal()}
        darkMode={darkMode}
        onToggleDarkMode={toggleDarkMode}
      />

      {/* Breadcrumb Navigation for Inner Pages */}
      <Breadcrumb currentPage={currentPage} onNavigate={setCurrentPage} />

      {/* Main Content Area */}
      <main className="flex-grow">
        {renderCurrentPage()}
      </main>

      {/* Comprehensive Footer */}
      <Footer
        onNavigate={setCurrentPage}
        onOpenWhatsAppModal={() => handleOpenWhatsAppModal()}
        onOpenPolicyModal={setActivePolicyModal}
      />

      {/* Floating Action Controls (WhatsApp, Call, Back To Top) */}
      <FloatingActions onOpenWhatsAppModal={() => handleOpenWhatsAppModal()} />

      {/* WhatsApp Order Modal */}
      <WhatsAppOrderModal
        isOpen={isWhatsAppModalOpen}
        onClose={() => setIsWhatsAppModalOpen(false)}
        prefilledMedicine={prefilledMedicine}
      />

      {/* Medicine Live Search Modal */}
      <MedicineSearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
        onOrderMedicine={(med) => handleOpenWhatsAppModal(med)}
      />

      {/* Legal & Policy Modals */}
      <PolicyModals
        activeModal={activePolicyModal}
        onClose={() => setActivePolicyModal(null)}
      />

    </div>
  );
}
