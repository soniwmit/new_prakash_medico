import React from 'react';
import { X, ShieldCheck, FileText, AlertTriangle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/pharmacyData';

interface PolicyModalsProps {
  activeModal: 'privacy' | 'terms' | 'disclaimer' | null;
  onClose: () => void;
}

export const PolicyModals: React.FC<PolicyModalsProps> = ({ activeModal, onClose }) => {
  if (!activeModal) return null;

  return (
    <div
      id="policy-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm overflow-y-auto"
    >
      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden my-8 p-6">
        
        <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center">
            {activeModal === 'privacy' && <ShieldCheck className="w-5 h-5 text-emerald-600 mr-2" />}
            {activeModal === 'terms' && <FileText className="w-5 h-5 text-blue-600 mr-2" />}
            {activeModal === 'disclaimer' && <AlertTriangle className="w-5 h-5 text-amber-500 mr-2" />}
            {activeModal === 'privacy' && 'Privacy Policy'}
            {activeModal === 'terms' && 'Terms & Conditions'}
            {activeModal === 'disclaimer' && 'Medical Disclaimer'}
          </h3>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="py-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-3 max-h-[60vh] overflow-y-auto leading-relaxed">
          {activeModal === 'privacy' && (
            <>
              <p>
                <strong>{BUSINESS_INFO.name}</strong> is committed to preserving the privacy of our patients and customers in Kurtha, Bihar.
              </p>
              <p>
                <strong>Information Collected:</strong> Name, phone number, village address, and prescription photos provided for WhatsApp orders or inquiries are used strictly to fulfill medicine requirements.
              </p>
              <p>
                <strong>Data Security:</strong> We do not sell, leak, or share your personal contact numbers or medical prescription photos with third-party advertisers. All information remains confidential between you and certified pharmacy staff.
              </p>
            </>
          )}

          {activeModal === 'terms' && (
            <>
              <p>
                Welcome to <strong>{BUSINESS_INFO.name}</strong> (Nishant Medical Hall). By ordering or using this website, you agree to the following terms:
              </p>
              <p>
                <strong>Prescription Requirement:</strong> Schedule H and H1 medications require a valid registered doctor prescription before dispensing.
              </p>
              <p>
                <strong>Returns & Exchange:</strong> Sealed, un-damaged medicine strips with original bill can be exchanged within 3 days. Refrigerated products like insulin are non-returnable once taken out of store cold chain.
              </p>
              <p>
                <strong>Pricing:</strong> All products are sold at or below Maximum Retail Price (MRP).
              </p>
            </>
          )}

          {activeModal === 'disclaimer' && (
            <>
              <p className="p-3 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 rounded-xl text-amber-900 dark:text-amber-200 font-medium">
                <strong>Important Medical Advice Disclaimer:</strong> Information on this website is provided for general educational purposes and store availability checking only. It is NOT a substitute for professional medical advice, diagnosis, or treatment.
              </p>
              <p>
                Always consult a registered medical practitioner or physician before starting any new medicine or altering your dosage. In case of acute medical emergency, visit the nearest hospital or emergency health center immediately.
              </p>
            </>
          )}
        </div>

        <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 text-white font-bold text-xs"
          >
            I Understand & Close
          </button>
        </div>

      </div>
    </div>
  );
};
