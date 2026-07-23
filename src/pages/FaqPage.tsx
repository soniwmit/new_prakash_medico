import React, { useState } from 'react';
import { FAQS } from '../data/pharmacyData';
import { HelpCircle, ChevronDown, MessageCircle, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/pharmacyData';

interface FaqPageProps {
  onOpenWhatsAppModal: () => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onOpenWhatsAppModal }) => {
  const [activeId, setActiveId] = useState<string>('faq-1');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Store', 'Ordering', 'Prescription', 'General'];

  const filteredFaqs = FAQS.filter(
    (f) => selectedCategory === 'All' || f.category === selectedCategory
  );

  return (
    <div id="faq-page-container" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
          HELP CENTER & FAQ
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white">
          Frequently Asked Questions
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          Everything you need to know about ordering medicines, prescription policies, store hours, and genuine guarantees.
        </p>
      </div>

      {/* Category Pills */}
      <div className="flex items-center justify-center space-x-2 overflow-x-auto pb-1">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-colors ${
              selectedCategory === cat
                ? 'bg-emerald-600 text-white shadow-md'
                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-emerald-500'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* FAQ Accordion */}
      <div className="space-y-3">
        {filteredFaqs.map((faq) => {
          const isOpen = activeId === faq.id;
          return (
            <div
              key={faq.id}
              className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-xs transition-all"
            >
              <button
                onClick={() => setActiveId(isOpen ? '' : faq.id)}
                className="w-full p-5 text-left font-bold text-sm sm:text-base text-slate-900 dark:text-white flex items-center justify-between gap-4"
              >
                <span className="flex items-center">
                  <HelpCircle className="w-4 h-4 mr-2.5 text-emerald-600 shrink-0" />
                  {faq.question}
                </span>
                <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
              </button>
              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-700">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Help CTA Box */}
      <div className="bg-emerald-950 text-white p-8 rounded-3xl border border-emerald-800 text-center space-y-4">
        <h3 className="text-xl font-bold">Have a specific question not answered here?</h3>
        <p className="text-xs sm:text-sm text-emerald-200 max-w-xl mx-auto">
          Contact our pharmacist team directly on WhatsApp or Call for instant assistance.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={onOpenWhatsAppModal}
            className="w-full sm:w-auto px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl flex items-center justify-center space-x-2"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Ask on WhatsApp</span>
          </button>
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="w-full sm:w-auto px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-bold text-xs rounded-xl border border-white/20 flex items-center justify-center space-x-2"
          >
            <Phone className="w-4 h-4 text-emerald-300" />
            <span>Call {BUSINESS_INFO.phoneFormatted}</span>
          </a>
        </div>
      </div>

    </div>
  );
};
