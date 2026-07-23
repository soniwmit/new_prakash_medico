import React, { useState } from 'react';
import { 
  Phone, MessageCircle, MapPin, ShieldCheck, Award, Zap, HeartPulse, 
  ChevronRight, ArrowRight, CheckCircle2, UserCheck, Tag, FileText, 
  Sparkles, Pill, Activity, Stethoscope, Store, FileUp, CreditCard, ChevronDown, HelpCircle, Cross
} from 'lucide-react';
import { 
  BUSINESS_INFO, WHY_CHOOSE_US, SERVICES, CATEGORIES, 
  TRUST_REASONS, WORKING_PROCESS, FAQS 
} from '../data/pharmacyData';
import { GoogleReviews } from '../components/GoogleReviews';
import { NavPage } from '../types';

interface HomePageProps {
  onNavigate: (page: NavPage) => void;
  onOpenWhatsAppModal: (medicineName?: string) => void;
  onOpenSearch: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenWhatsAppModal,
  onOpenSearch,
}) => {
  const [openFaqId, setOpenFaqId] = useState<string>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? '' : id);
  };

  return (
    <div id="home-page-container" className="space-y-16 lg:space-y-24">
      
      {/* 2. HERO SECTION */}
      <section id="hero-section" className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-6 pb-12">
        
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={BUSINESS_INFO.heroImage}
            alt="New Prakash Medico Pharmacy Interior Kurtha"
            className="w-full h-full object-cover object-center scale-105 filter brightness-90"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/85 to-blue-950/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-white text-center lg:text-left">
              
              {/* Trust Badge Pill */}
              <div className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 mr-1.5 text-emerald-400 animate-spin" />
                Licensed Pharmacy • Serving Kurtha Since 2012
              </div>

              {/* Main Headline */}
              <div className="space-y-2">
                <h2 className="text-emerald-400 font-extrabold text-lg sm:text-xl tracking-wide uppercase">
                  Nishant Medical Hall
                </h2>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white">
                  {BUSINESS_INFO.name}
                </h1>
                <p className="text-xl sm:text-2xl font-semibold text-emerald-300 pt-1">
                  Your Trusted Pharmacy in Kurtha
                </p>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-slate-200 max-w-2xl leading-relaxed">
                Providing 100% genuine medicines, healthcare products, surgical supplies, baby care, personal care, and daily medical essentials at affordable prices at Karpi Bus Stand.
              </p>

              {/* Hero Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
                <a
                  id="hero-call-btn"
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-xl flex items-center justify-center space-x-2 transition-all transform hover:-translate-y-0.5"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now ({BUSINESS_INFO.phoneFormatted})</span>
                </a>

                <button
                  id="hero-whatsapp-btn"
                  onClick={() => onOpenWhatsAppModal()}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-xl flex items-center justify-center space-x-2 transition-all transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>WhatsApp Order</span>
                </button>

                <a
                  id="hero-directions-btn"
                  href={BUSINESS_INFO.mapQueryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 backdrop-blur-md flex items-center justify-center space-x-2 transition-all"
                >
                  <MapPin className="w-4 h-4 text-emerald-400" />
                  <span>Get Directions</span>
                </a>
              </div>

              {/* Quick Search Launcher Bar */}
              <div className="pt-4 max-w-xl mx-auto lg:mx-0">
                <div 
                  onClick={onOpenSearch}
                  className="p-3 bg-white/10 hover:bg-white/15 border border-white/20 rounded-2xl backdrop-blur-md cursor-pointer flex items-center justify-between text-slate-300 transition-all"
                >
                  <div className="flex items-center space-x-2 text-xs sm:text-sm">
                    <Pill className="w-4 h-4 text-emerald-400" />
                    <span>Search Paracetamol, BP Monitor, Diapers...</span>
                  </div>
                  <span className="px-3 py-1 bg-emerald-500 text-slate-950 font-bold text-xs rounded-xl">
                    Search Catalog
                  </span>
                </div>
              </div>

            </div>

            {/* Right Card / Store Highlight */}
            <div className="lg:col-span-5">
              <div className="glass-card p-6 sm:p-8 rounded-3xl shadow-2xl border border-white/20 text-slate-900 dark:text-white space-y-6">
                <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
                  <div>
                    <h3 className="text-lg font-bold">Store Opening Hours</h3>
                    <p className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold">{BUSINESS_INFO.location}</p>
                  </div>
                  <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 text-xs font-bold rounded-lg">
                    7 Days
                  </span>
                </div>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="flex justify-between items-center py-1 border-b border-slate-100 dark:border-slate-800">
                    <span className="text-slate-600 dark:text-slate-400">Monday - Sunday</span>
                    <span className="font-bold text-slate-900 dark:text-white">7:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-slate-100 dark:border-slate-800">
                    <span className="text-slate-600 dark:text-slate-400">Emergency Support</span>
                    <span className="font-bold text-emerald-600 dark:text-emerald-400">Available via Phone</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-slate-600 dark:text-slate-400">WhatsApp Prescription Order</span>
                    <span className="font-bold text-emerald-600 dark:text-emerald-400">24/7 Accepted</span>
                  </div>
                </div>

                <div className="p-4 bg-emerald-50 dark:bg-emerald-950/60 rounded-2xl border border-emerald-200 dark:border-emerald-800/80 flex items-center space-x-3">
                  <Award className="w-8 h-8 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-emerald-900 dark:text-emerald-200">
                      100% Guaranteed Batch Authenticity
                    </p>
                    <p className="text-[11px] text-emerald-700 dark:text-emerald-300">
                      All products sourced strictly from licensed pharma suppliers.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 3. WHY CHOOSE US */}
      <section id="why-choose-us" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
            OUR COMMITMENT TO KURTHA
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
            Why Choose New Prakash Medico
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            We combine authentic healthcare standards with fast, friendly local service.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-slate-800/80 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-emerald-500 hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>


      {/* 4. OUR SERVICES */}
      <section id="our-services-section" className="bg-slate-100/70 dark:bg-slate-900/60 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div className="space-y-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300">
                COMPREHENSIVE PHARMACY CARE
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
                Our Healthcare & Pharmacy Services
              </h2>
            </div>
            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((srv) => (
              <div
                key={srv.id}
                className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={srv.image}
                      alt={srv.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    {srv.popular && (
                      <span className="absolute top-3 right-3 px-2.5 py-1 bg-emerald-600 text-white text-[10px] font-extrabold uppercase rounded-full shadow-md">
                        Popular
                      </span>
                    )}
                  </div>
                  <div className="p-6 space-y-3">
                    <span className="text-[11px] font-extrabold text-emerald-600 dark:text-emerald-400 tracking-wider uppercase">
                      {srv.category}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {srv.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {srv.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => onOpenWhatsAppModal(srv.title)}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-emerald-600 text-slate-800 hover:text-white dark:bg-slate-700 dark:hover:bg-emerald-600 dark:text-slate-200 font-bold text-xs transition-colors flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Inquire / Order via WhatsApp</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* 5. FEATURED CATEGORIES */}
      <section id="featured-categories" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
            BROWSE BY CATEGORY
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
            Healthcare Products & Medicine Categories
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Find exactly what you need from our neatly organized inventory.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onOpenWhatsAppModal(`Category Inquiry: ${cat.name}`)}
              className="group cursor-pointer bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-emerald-500 hover:shadow-lg transition-all space-y-3"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-700 text-emerald-600 dark:text-emerald-400 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <Pill className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700/60 px-2 py-0.5 rounded-full">
                  {cat.itemCount}
                </span>
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 transition-colors">
                  {cat.name}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mt-1">
                  {cat.description}
                </p>
              </div>
              <div className="pt-2 flex items-center text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                <span>Inquire Category</span>
                <ChevronRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* 6. WHY CUSTOMERS TRUST US */}
      <section id="trust-reasons" className="bg-gradient-to-br from-emerald-900 via-slate-900 to-blue-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Why Local Customers Trust Us
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              For over a decade, Nishant Medical Hall has stood for reliability, authenticity, and compassionate healthcare.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TRUST_REASONS.map((r, i) => (
              <div key={i} className="p-6 bg-white/10 rounded-2xl border border-white/15 backdrop-blur-md space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">{r.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* 7. WORKING PROCESS */}
      <section id="working-process" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
            SIMPLE & FAST
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
            How to Get Your Medicines
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WORKING_PROCESS.map((p) => (
            <div
              key={p.step}
              className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 relative space-y-3"
            >
              <span className="text-4xl font-black text-emerald-600/20 dark:text-emerald-400/20 absolute top-4 right-4">
                {p.step}
              </span>
              <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <Store className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">{p.title}</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </section>


      {/* 8. CUSTOMER TESTIMONIALS & GOOGLE REVIEWS */}
      <GoogleReviews />


      {/* 9. FAQ SECTION */}
      <section id="faq-section" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-10">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300">
            COMMON QUESTIONS
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 text-left font-bold text-sm sm:text-base text-slate-900 dark:text-white flex items-center justify-between gap-4"
                >
                  <span className="flex items-center">
                    <HelpCircle className="w-4 h-4 mr-2.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    {faq.question}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>


      {/* 10. GOOGLE MAP SECTION */}
      <section id="google-map-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-700 grid grid-cols-1 lg:grid-cols-12">
          
          <div className="lg:col-span-5 p-8 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                STORE LOCATION
              </span>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                Visit Us at Karpi Bus Stand
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {BUSINESS_INFO.location}
              </p>

              <div className="space-y-2 text-xs pt-2">
                <div className="flex items-center text-slate-700 dark:text-slate-300">
                  <Phone className="w-4 h-4 mr-2 text-emerald-600" />
                  <strong>Phone:</strong> &nbsp;{BUSINESS_INFO.phoneFormatted}
                </div>
                <div className="flex items-center text-slate-700 dark:text-slate-300">
                  <Store className="w-4 h-4 mr-2 text-emerald-600" />
                  <strong>Hours:</strong> &nbsp;{BUSINESS_INFO.workingHours}
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a
                href={BUSINESS_INFO.mapQueryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center space-x-2 shadow-md"
              >
                <MapPin className="w-4 h-4" />
                <span>Open in Google Maps App</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 h-80 lg:h-auto min-h-[320px] bg-slate-200">
            <iframe
              title="New Prakash Medico Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14457.1234!2d84.81!3d25.04!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398d25d123456789%3A0x123456789abcdef!2sKarpi%20Bus%20Stand%2C%20Kurtha%2C%20Bihar%20804421!5e0!3m2!1sen!2sin!4v1700000000000"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>
      </section>


      {/* 11. CONTACT CTA */}
      <section id="contact-cta" className="bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-700 text-white py-12 rounded-3xl max-w-7xl mx-auto mx-4 sm:mx-6 lg:mx-8 px-6 sm:px-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <h3 className="text-2xl sm:text-3xl font-black">Need Urgent Medicines or Advice?</h3>
          <p className="text-xs sm:text-sm text-emerald-100">Call or WhatsApp us now for immediate medicine check and counter reservation.</p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white text-slate-900 font-extrabold text-xs shadow-md hover:bg-slate-100 flex items-center justify-center space-x-2"
          >
            <Phone className="w-4 h-4 text-emerald-600" />
            <span>Call {BUSINESS_INFO.phoneFormatted}</span>
          </a>

          <button
            onClick={() => onOpenWhatsAppModal()}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-950 text-white font-extrabold text-xs shadow-md hover:bg-slate-900 flex items-center justify-center space-x-2 border border-emerald-400/30"
          >
            <MessageCircle className="w-4 h-4 fill-current text-emerald-400" />
            <span>WhatsApp Us Now</span>
          </button>
        </div>
      </section>

    </div>
  );
};
