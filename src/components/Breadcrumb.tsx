import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { NavPage } from '../types';

interface BreadcrumbProps {
  currentPage: NavPage;
  onNavigate: (page: NavPage) => void;
  customTitle?: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ currentPage, onNavigate, customTitle }) => {
  if (currentPage === 'home') return null;

  const pageNames: Record<NavPage, string> = {
    home: 'Home',
    about: 'About Us',
    services: 'Our Services',
    gallery: 'Store Gallery',
    testimonials: 'Testimonials',
    faq: 'FAQ & Help',
    contact: 'Contact Us'
  };

  const label = customTitle || pageNames[currentPage] || currentPage;

  return (
    <nav id="breadcrumb-nav" aria-label="Breadcrumb" className="bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 py-3 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex items-center space-x-2 text-sm text-slate-600 dark:text-slate-400">
        <button
          id="breadcrumb-home-btn"
          onClick={() => onNavigate('home')}
          className="flex items-center hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-medium"
        >
          <Home className="w-4 h-4 mr-1" />
          Home
        </button>
        <ChevronRight className="w-4 h-4 text-slate-400 dark:text-slate-600" />
        <span className="text-emerald-600 dark:hover:text-emerald-400 font-semibold truncate">{label}</span>
      </div>
    </nav>
  );
};
