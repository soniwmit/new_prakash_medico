import React, { useState, useEffect } from 'react';
import { 
  Plus, Phone, Search, Sun, Moon, Menu, X, 
  MessageCircle, HeartPulse, ChevronRight 
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/pharmacyData';
import { NavPage } from '../types';

interface HeaderProps {
  currentPage: NavPage;
  onNavigate: (page: NavPage) => void;
  onOpenSearch: () => void;
  onOpenWhatsAppModal: () => void;
  darkMode: boolean;
  onToggleDarkMode: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenSearch,
  onOpenWhatsAppModal,
  darkMode,
  onToggleDarkMode,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: NavPage; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page: NavPage) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-md py-3'
          : 'bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Business Branding */}
          <div 
            id="header-brand"
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
              <Plus className="w-6 h-6 sm:w-7 sm:h-7 stroke-[3]" />
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="text-lg sm:text-xl font-black tracking-tight text-slate-900 dark:text-white">
                  {BUSINESS_INFO.name}
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 rounded-full border border-emerald-200 dark:border-emerald-800">
                  EST. 2012
                </span>
              </div>
              <p className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold tracking-wide">
                Nishant Medical Hall • Kurtha
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav" className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400 shadow-xs'
                      : 'text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Action Buttons & Controls */}
          <div className="hidden sm:flex items-center space-x-2.5">
            {/* Search Trigger */}
            <button
              id="header-search-btn"
              onClick={onOpenSearch}
              title="Search Medicines"
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Dark Mode Toggle */}
            <button
              id="header-dark-toggle"
              onClick={onToggleDarkMode}
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-700" />}
            </button>

            {/* Call Now Button */}
            <a
              id="header-call-btn"
              href={`tel:${BUSINESS_INFO.phone}`}
              className="hidden md:inline-flex items-center px-3.5 py-2 rounded-lg text-xs font-bold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors border border-slate-300 dark:border-slate-700"
            >
              <Phone className="w-3.5 h-3.5 mr-1.5 text-emerald-600 dark:text-emerald-400" />
              Call Now
            </a>

            {/* WhatsApp Order Button */}
            <button
              id="header-whatsapp-btn"
              onClick={onOpenWhatsAppModal}
              className="flex items-center px-4 py-2 rounded-lg text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-600 dark:hover:bg-emerald-500 shadow-sm transition-all transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4 mr-1.5 fill-current" />
              WhatsApp Order
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              id="mobile-search-btn"
              onClick={onOpenSearch}
              className="p-2 text-slate-700 dark:text-slate-200"
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              id="mobile-dark-toggle"
              onClick={onToggleDarkMode}
              className="p-2 text-slate-700 dark:text-slate-200"
            >
              {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5" />}
            </button>

            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-800 dark:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div id="mobile-nav-drawer" className="lg:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 space-y-3">
          <div className="grid grid-cols-1 gap-1">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  id={`mobile-nav-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-semibold text-left transition-colors ${
                    isActive
                      ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </button>
              );
            })}
          </div>

          <div className="pt-2 border-t border-slate-200 dark:border-slate-800 grid grid-cols-2 gap-2">
            <a
              id="mobile-call-btn"
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center justify-center px-4 py-2.5 rounded-lg text-xs font-bold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700"
            >
              <Phone className="w-4 h-4 mr-1.5 text-emerald-600" />
              Call Now
            </a>
            <button
              id="mobile-whatsapp-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenWhatsAppModal();
              }}
              className="flex items-center justify-center px-4 py-2.5 rounded-lg text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700"
            >
              <MessageCircle className="w-4 h-4 mr-1.5" />
              WhatsApp
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
