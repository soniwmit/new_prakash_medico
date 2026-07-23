import React, { useState } from 'react';
import { Search, X, Pill, ShieldAlert, ArrowRight, MessageCircle, CheckCircle2 } from 'lucide-react';
import { FEATURED_MEDICINES, CATEGORIES } from '../data/pharmacyData';
import { MedicineItem } from '../types';

interface MedicineSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOrderMedicine: (medicineName: string) => void;
}

export const MedicineSearchModal: React.FC<MedicineSearchModalProps> = ({
  isOpen,
  onClose,
  onOrderMedicine,
}) => {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  if (!isOpen) return null;

  const categories = ['All', 'Tablets', 'Syrups', 'Medical Equipment', 'Diabetic Care', 'Vitamins', 'Baby Care', 'Orthopedic Support'];

  const filteredMedicines = FEATURED_MEDICINES.filter((med) => {
    const matchesCategory = selectedCategory === 'All' || med.category === selectedCategory;
    const matchesQuery =
      med.name.toLowerCase().includes(query.toLowerCase()) ||
      med.uses.toLowerCase().includes(query.toLowerCase()) ||
      med.description.toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div
      id="medicine-search-backdrop"
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 bg-slate-900/70 backdrop-blur-sm overflow-y-auto"
    >
      <div className="relative w-full max-w-3xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden my-6">
        
        {/* Search Header */}
        <div className="p-4 sm:p-6 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/80">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center">
              <Pill className="w-5 h-5 mr-2 text-emerald-600 dark:text-emerald-400" />
              Search Genuine Medicines & Equipment
            </h3>
            <button
              id="close-search-modal"
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-white rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Search Input */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by medicine name, symptom, e.g. Paracetamol, Acidity, Omron BP..."
              className="w-full pl-12 pr-10 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none shadow-xs"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Pill Filters */}
          <div className="mt-3 flex items-center space-x-2 overflow-x-auto pb-1 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                  selectedCategory === cat
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-emerald-500'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results List */}
        <div className="p-4 sm:p-6 max-h-[60vh] overflow-y-auto space-y-3">
          {filteredMedicines.length > 0 ? (
            filteredMedicines.map((med) => (
              <div
                key={med.id}
                className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/60 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-slate-900 dark:text-white text-base">
                      {med.name}
                    </span>
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                      {med.dosageForm}
                    </span>
                    {med.prescriptionRequired && (
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                        Rx Required
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300">
                    <strong>Uses:</strong> {med.uses}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">
                    {med.description}
                  </p>
                </div>

                <div className="flex items-center space-x-2 shrink-0 pt-2 sm:pt-0">
                  <button
                    onClick={() => {
                      onClose();
                      onOrderMedicine(med.name);
                    }}
                    className="flex items-center px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-xs transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 mr-1.5" />
                    Order on WhatsApp
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-10 space-y-2">
              <ShieldAlert className="w-12 h-12 text-slate-400 mx-auto" />
              <p className="text-base font-bold text-slate-800 dark:text-slate-200">
                No matching medicine found in quick catalog
              </p>
              <p className="text-xs text-slate-500 max-w-md mx-auto">
                Don't worry! We stock thousands of prescription and OTC medicines at our store. You can inquire directly on WhatsApp.
              </p>
              <button
                onClick={() => {
                  onClose();
                  onOrderMedicine(query || 'Inquiry about Medicine Availability');
                }}
                className="inline-flex items-center px-4 py-2 mt-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl"
              >
                Inquire "{query}" on WhatsApp
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
