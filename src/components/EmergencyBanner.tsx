import React from 'react';
import { PhoneCall, Clock, MapPin, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/pharmacyData';

export const EmergencyBanner: React.FC = () => {
  return (
    <div id="emergency-banner" className="bg-gradient-to-r from-emerald-700 via-teal-800 to-blue-900 text-white text-xs sm:text-sm py-2 px-4 shadow-sm">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center space-x-3 text-center sm:text-left">
          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold bg-emerald-400 text-slate-900 animate-pulse">
            <Sparkles className="w-3 h-3 mr-1" /> OPEN NOW
          </span>
          <span className="font-medium flex items-center">
            <Clock className="w-3.5 h-3.5 mr-1 inline text-emerald-300" />
            {BUSINESS_INFO.workingHours}
          </span>
          <span className="hidden md:inline-flex items-center text-slate-200">
            <MapPin className="w-3.5 h-3.5 mr-1 text-emerald-300" />
            {BUSINESS_INFO.location}
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-emerald-200 font-medium hidden lg:inline">Emergency Medicine Assistance:</span>
          <a
            id="emergency-call-btn"
            href={`tel:${BUSINESS_INFO.phone}`}
            className="flex items-center font-bold text-white bg-white/20 hover:bg-white/30 px-3 py-1 rounded-md transition-colors"
          >
            <PhoneCall className="w-3.5 h-3.5 mr-1.5 text-emerald-300" />
            {BUSINESS_INFO.phoneFormatted}
          </a>
        </div>
      </div>
    </div>
  );
};
