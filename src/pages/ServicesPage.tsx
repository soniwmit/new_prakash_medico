import React from 'react';
import { 
  Pill, Activity, Heart, Cross, Scissors, Baby, Sparkles, 
  Shield, Thermometer, Home, MessageCircle, CheckCircle2 
} from 'lucide-react';
import { SERVICES } from '../data/pharmacyData';

interface ServicesPageProps {
  onOpenWhatsAppModal: (serviceTitle?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenWhatsAppModal }) => {
  return (
    <div id="services-page-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
          OUR FULL PHARMACY CATALOG
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white">
          Pharmacy & Healthcare Services
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          Explore our complete range of certified pharmaceutical services, home healthcare devices, and daily personal care supplies.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((srv) => (
          <div
            key={srv.id}
            className="bg-white dark:bg-slate-800 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
          >
            <div>
              <div className="relative h-48 overflow-hidden">
                <img
                  src={srv.image}
                  alt={srv.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-3 left-3 px-3 py-1 bg-slate-900/80 text-white text-[10px] font-bold rounded-full backdrop-blur-md">
                  {srv.category}
                </span>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {srv.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {srv.description}
                </p>

                <div className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-700">
                  <p className="text-xs font-bold text-slate-800 dark:text-slate-200">Key Offerings:</p>
                  <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-400">
                    {srv.details.map((item, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle2 className="w-3.5 h-3.5 mr-2 text-emerald-500 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-6 pt-0">
              <button
                onClick={() => onOpenWhatsAppModal(srv.title)}
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center space-x-2 shadow-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Order / Inquire via WhatsApp</span>
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
