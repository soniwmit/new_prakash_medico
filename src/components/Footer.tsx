import React from 'react';
import { 
  Plus, MapPin, Phone, MessageCircle, Clock, Mail, 
  ExternalLink, ChevronRight, ShieldCheck, Heart 
} from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data/pharmacyData';
import { NavPage } from '../types';

interface FooterProps {
  onNavigate: (page: NavPage) => void;
  onOpenWhatsAppModal: () => void;
  onOpenPolicyModal: (modal: 'privacy' | 'terms' | 'disclaimer') => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenWhatsAppModal,
  onOpenPolicyModal,
}) => {
  return (
    <footer id="main-footer" className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Business Identity */}
          <div className="space-y-4">
            <div 
              onClick={() => onNavigate('home')}
              className="flex items-center space-x-3 cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-slate-950 shadow-md">
                <Plus className="w-6 h-6 stroke-[3]" />
              </div>
              <div>
                <span className="text-xl font-black text-white tracking-tight">
                  {BUSINESS_INFO.name}
                </span>
                <p className="text-xs text-emerald-400 font-semibold">
                  Nishant Medical Hall • Kurtha
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              {BUSINESS_INFO.tagline}. Serving Kurtha, Karpi, and Khemkaran Saray Panchayat with 100% genuine pharmaceuticals, surgical supplies & baby care.
            </p>

            <div className="pt-2 flex items-center space-x-3">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="p-2.5 bg-slate-800 hover:bg-emerald-600 text-white rounded-lg transition-colors"
                title="Call Pharmacy"
              >
                <Phone className="w-4 h-4" />
              </a>
              <button
                onClick={onOpenWhatsAppModal}
                className="p-2.5 bg-slate-800 hover:bg-emerald-600 text-white rounded-lg transition-colors"
                title="WhatsApp Order"
              >
                <MessageCircle className="w-4 h-4" />
              </button>
              <a
                href={BUSINESS_INFO.mapQueryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-slate-800 hover:bg-emerald-600 text-white rounded-lg transition-colors"
                title="Google Maps Location"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-l-2 border-emerald-500 pl-2.5">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                { id: 'home', label: 'Home Page' },
                { id: 'about', label: 'About Nishant Medical Hall' },
                { id: 'services', label: 'Pharmacy Services' },
                { id: 'gallery', label: 'Store Gallery' },
                { id: 'testimonials', label: 'Customer Reviews' },
                { id: 'faq', label: 'FAQ & Medicine Help' },
                { id: 'contact', label: 'Contact & Directions' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      onNavigate(link.id as NavPage);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="flex items-center text-slate-400 hover:text-emerald-400 transition-colors"
                  >
                    <ChevronRight className="w-3.5 h-3.5 mr-1.5 text-emerald-500" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Core Pharmacy Services */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-l-2 border-emerald-500 pl-2.5">
              Core Services
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {SERVICES.slice(0, 7).map((srv) => (
                <li key={srv.id} className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2"></span>
                  {srv.title}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Address & Working Hours */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-l-2 border-emerald-500 pl-2.5">
              Visit Store
            </h4>

            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.location}</span>
              </div>

              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{BUSINESS_INFO.workingHours}</span>
              </div>

              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-emerald-400 transition-colors font-semibold">
                  {BUSINESS_INFO.phoneFormatted}
                </a>
              </div>

              <a
                href={BUSINESS_INFO.mapQueryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-2 mt-2 bg-slate-800 hover:bg-slate-700 text-emerald-300 font-semibold rounded-lg text-xs transition-colors"
              >
                <span>Get Google Map Directions</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Footer Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} {BUSINESS_INFO.name} ({BUSINESS_INFO.alternateName}). All Rights Reserved. | <a href="#" class="wmit-popup-trigger">Developed by WMIT</a></p>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={() => onOpenPolicyModal('privacy')}
              className="hover:text-slate-300 transition-colors"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenPolicyModal('terms')}
              className="hover:text-slate-300 transition-colors"
            >
              Terms & Conditions
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenPolicyModal('disclaimer')}
              className="hover:text-slate-300 transition-colors"
            >
              Medical Disclaimer
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
