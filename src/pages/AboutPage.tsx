import React from 'react';
import { 
  Award, ShieldCheck, Heart, Users, Target, Eye, 
  Store, Clock, CheckCircle2, MessageSquare, MapPin 
} from 'lucide-react';
import { 
  BUSINESS_INFO, TIMELINE_MILESTONES, OWNER_MESSAGE, 
  TRUST_REASONS 
} from '../data/pharmacyData';

interface AboutPageProps {
  onOpenWhatsAppModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenWhatsAppModal }) => {
  return (
    <div id="about-page-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      
      {/* Hero Banner Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
          ABOUT NEW PRAKASH MEDICO
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white">
          Nishant Medical Hall & New Prakash Medico
        </h1>
        <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          Serving the families of Kurtha, Karpi, and Khemkaran Saray Panchayat with genuine pharmaceuticals, health monitoring devices, and compassionate care since 2012.
        </p>
      </div>

      {/* Business Story */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white dark:bg-slate-800/80 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm">
        <div className="lg:col-span-6 space-y-4">
          <span className="text-xs font-extrabold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
            Our Business Story
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Rooted in Community Trust & Health Integrity
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Founded by certified pharmacist Nishant Kumar, New Prakash Medico (Nishant Medical Hall) was established with a simple yet essential objective: to ensure no family in Kurtha ever has to worry about counterfeit or expired medicines.
          </p>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Located prominently at Karpi Bus Stand, our pharmacy has expanded into a complete healthcare destination providing doctor-prescribed drugs, surgical equipment, baby nutrition, and digital diagnostic devices.
          </p>
          <div className="pt-2 flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200">100% Genuine Supplies</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200">Licensed Pharmacist</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6">
          <img
            src={BUSINESS_INFO.storefrontImage}
            alt="New Prakash Medico Store Front Kurtha"
            className="w-full h-80 object-cover rounded-2xl shadow-md"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-emerald-900 text-white p-8 rounded-3xl space-y-3 relative overflow-hidden">
          <div className="w-12 h-12 rounded-2xl bg-white/10 text-emerald-300 flex items-center justify-center">
            <Target className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold">Our Mission</h3>
          <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed">
            To provide 100% authentic, affordable medicines and compassionate healthcare services to every family in Kurtha and surrounding villages without delay.
          </p>
        </div>

        <div className="bg-blue-900 text-white p-8 rounded-3xl space-y-3 relative overflow-hidden">
          <div className="w-12 h-12 rounded-2xl bg-white/10 text-blue-300 flex items-center justify-center">
            <Eye className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold">Our Vision</h3>
          <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
            To be the most reliable, modern, and accessible local pharmacy destination in Bihar — bridging rural access to high-quality healthcare essentials.
          </p>
        </div>
      </div>

      {/* Core Values */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Our Guiding Values</h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">The pillars that define every counter interaction.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-2">
            <ShieldCheck className="w-8 h-8 text-emerald-600" />
            <h4 className="text-base font-bold text-slate-900 dark:text-white">100% Authenticity</h4>
            <p className="text-xs text-slate-600 dark:text-slate-300">Direct distributor sourcing with strict temperature-controlled storage.</p>
          </div>

          <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-2">
            <Heart className="w-8 h-8 text-emerald-600" />
            <h4 className="text-base font-bold text-slate-900 dark:text-white">Customer First</h4>
            <p className="text-xs text-slate-600 dark:text-slate-300">Taking time to explain dosages, precautions, and dietary guidance.</p>
          </div>

          <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-2">
            <Award className="w-8 h-8 text-emerald-600" />
            <h4 className="text-base font-bold text-slate-900 dark:text-white">Affordable Healthcare</h4>
            <p className="text-xs text-slate-600 dark:text-slate-300">Fair MRP conscious pricing and genuine generic medicine choices.</p>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Our Journey & Milestones</h2>
        </div>

        <div className="relative border-l-2 border-emerald-500 ml-4 sm:ml-8 space-y-8">
          {TIMELINE_MILESTONES.map((m, idx) => (
            <div key={idx} className="relative pl-6 sm:pl-8">
              <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-emerald-600 border-2 border-white dark:border-slate-900"></span>
              <span className="text-xs font-black text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-2 py-0.5 rounded-md">
                {m.year}
              </span>
              <h4 className="text-base font-bold text-slate-900 dark:text-white mt-1">{m.title}</h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Owner Message Card */}
      <div className="bg-gradient-to-r from-emerald-800 to-teal-900 text-white p-8 rounded-3xl shadow-xl flex flex-col md:flex-row items-center gap-6">
        <div className="w-24 h-24 rounded-full bg-emerald-500/30 border-2 border-emerald-300 flex items-center justify-center shrink-0">
          <Users className="w-12 h-12 text-emerald-200" />
        </div>
        <div className="space-y-3 text-center md:text-left">
          <h3 className="text-2xl font-bold">Message from the Owner</h3>
          <p className="text-xs sm:text-sm italic text-emerald-100 leading-relaxed">
            "{OWNER_MESSAGE.message}"
          </p>
          <div>
            <h4 className="text-sm font-bold">{OWNER_MESSAGE.name}</h4>
            <p className="text-xs text-emerald-300">{OWNER_MESSAGE.role}</p>
          </div>
        </div>
      </div>

    </div>
  );
};
