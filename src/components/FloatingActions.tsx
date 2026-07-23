import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO } from '../data/pharmacyData';

interface FloatingActionsProps {
  onOpenWhatsAppModal: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenWhatsAppModal }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="floating-actions-container" className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3 pointer-events-auto">
      
      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          id="back-to-top-btn"
          onClick={scrollToTop}
          title="Back to Top"
          aria-label="Back to Top"
          className="p-3 bg-slate-800 text-white dark:bg-slate-700 hover:bg-slate-900 rounded-full shadow-lg transition-all transform hover:scale-110 focus:outline-none"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Direct Call Floating Button */}
      <a
        id="floating-call-btn"
        href={`tel:${BUSINESS_INFO.phone}`}
        title="Call New Prakash Medico"
        aria-label="Call New Prakash Medico"
        className="flex items-center justify-center p-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-xl transition-all transform hover:scale-110"
      >
        <Phone className="w-6 h-6" />
      </a>

      {/* WhatsApp Floating Button with Tooltip */}
      <div className="relative group">
        <span className="absolute right-16 top-1/2 -translate-y-1/2 hidden group-hover:block bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap shadow-md">
          Order via WhatsApp 💬
        </span>
        <button
          id="floating-whatsapp-btn"
          onClick={onOpenWhatsAppModal}
          title="Order Medicines via WhatsApp"
          aria-label="Order Medicines via WhatsApp"
          className="relative flex items-center justify-center p-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-2xl transition-all transform hover:scale-110 focus:outline-none"
        >
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400"></span>
          </span>
          <MessageCircle className="w-7 h-7 fill-current" />
        </button>
      </div>

    </div>
  );
};
