import React, { useState } from 'react';
import { X, Send, Phone, Upload, CheckCircle2, FileText, AlertCircle, Sparkles } from 'lucide-react';
import { BUSINESS_INFO, buildWhatsAppUrl } from '../data/pharmacyData';
import { OrderFormData } from '../types';

interface WhatsAppOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledMedicine?: string;
}

export const WhatsAppOrderModal: React.FC<WhatsAppOrderModalProps> = ({
  isOpen,
  onClose,
  prefilledMedicine = '',
}) => {
  const [formData, setFormData] = useState<OrderFormData>({
    customerName: '',
    mobileNumber: '',
    email: '',
    address: '',
    medicineName: prefilledMedicine,
    hasPrescription: 'No',
    prescriptionFile: null,
    prescriptionFileName: '',
    message: '',
    preferredTime: 'As soon as possible',
  });

  const [prescriptionPreview, setPrescriptionPreview] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        hasPrescription: 'Yes',
        prescriptionFile: file,
        prescriptionFileName: file.name,
      }));
      const reader = new FileReader();
      reader.onloadend = () => {
        setPrescriptionPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const url = buildWhatsAppUrl({
      customerName: formData.customerName,
      mobileNumber: formData.mobileNumber,
      address: formData.address,
      medicineName: formData.medicineName,
      hasPrescription: formData.hasPrescription,
      message: formData.message,
      preferredTime: formData.preferredTime,
    });
    window.open(url, '_blank');
    onClose();
  };

  return (
    <div
      id="whatsapp-order-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm overflow-y-auto"
    >
      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden my-8">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-600 via-teal-700 to-emerald-800 p-6 text-white flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 bg-white/20 rounded-xl">
              <Sparkles className="w-6 h-6 text-emerald-200" />
            </div>
            <div>
              <h3 className="text-xl font-bold tracking-tight">WhatsApp Medicine Order</h3>
              <p className="text-xs text-emerald-100">{BUSINESS_INFO.name} • {BUSINESS_INFO.shortLocation}</p>
            </div>
          </div>
          <button
            id="close-whatsapp-modal"
            onClick={onClose}
            className="p-2 text-emerald-100 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form Content */}
        <form onSubmit={handleSendWhatsApp} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
          
          <div className="bg-emerald-50 dark:bg-emerald-950/40 p-3 rounded-xl border border-emerald-200 dark:border-emerald-800 text-xs text-emerald-800 dark:text-emerald-300 flex items-start space-x-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
            <span>
              Fill in your medicine details below. Clicking <strong>Send via WhatsApp</strong> opens a prefilled message directly to <strong>{BUSINESS_INFO.phoneFormatted}</strong> for fast reservation or pickup!
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Customer Name */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                Customer Name *
              </label>
              <input
                type="text"
                name="customerName"
                required
                value={formData.customerName}
                onChange={handleChange}
                placeholder="e.g. Ramesh Kumar"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
              />
            </div>

            {/* Mobile Number */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                Mobile / WhatsApp Number *
              </label>
              <input
                type="tel"
                name="mobileNumber"
                required
                value={formData.mobileNumber}
                onChange={handleChange}
                placeholder="e.g. 9931075521"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Address */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                Delivery / Village Address
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="e.g. Karpi / Kurtha Main Market"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
              />
            </div>

            {/* Preferred Delivery/Pickup Time */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                Preferred Time
              </label>
              <select
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
              >
                <option value="Immediate (Within 1 hour)">Immediate (Within 1 hour)</option>
                <option value="Today Evening">Today Evening</option>
                <option value="Tomorrow Morning">Tomorrow Morning</option>
                <option value="Store Counter Pickup">Store Counter Pickup</option>
              </select>
            </div>
          </div>

          {/* Medicine Name(s) */}
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
              Medicine Required *
            </label>
            <textarea
              name="medicineName"
              required
              rows={2}
              value={formData.medicineName}
              onChange={handleChange}
              placeholder="e.g. Paracetamol 650mg - 2 strips, Pantoprazole 40mg - 1 strip, Omron BP Monitor"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
            />
          </div>

          {/* Prescription Upload Simulator */}
          <div className="border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-xl p-4 text-center bg-slate-50/50 dark:bg-slate-800/50">
            <div className="flex flex-col items-center justify-center space-y-2">
              <Upload className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
              <div>
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                  Upload Doctor Prescription Slip (Optional)
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  PNG, JPG or PDF up to 5MB. You can also send the photo directly in WhatsApp.
                </p>
              </div>
              <label className="cursor-pointer inline-flex items-center px-4 py-2 bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-bold rounded-lg hover:bg-emerald-200 transition-colors">
                <FileText className="w-4 h-4 mr-1.5" />
                Select Prescription Image
                <input type="file" accept="image/*" onChange={handleFileUpload} className="hidden" />
              </label>
              {formData.prescriptionFileName && (
                <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center">
                  <CheckCircle2 className="w-3.5 h-3.5 mr-1" /> Attached: {formData.prescriptionFileName}
                </p>
              )}
            </div>
            {prescriptionPreview && (
              <div className="mt-3 relative inline-block border rounded-lg overflow-hidden max-h-32">
                <img src={prescriptionPreview} alt="Prescription Preview" className="h-32 object-contain" referrerPolicy="no-referrer" />
              </div>
            )}
          </div>

          {/* Additional Message */}
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
              Special Instructions / Remarks
            </label>
            <input
              type="text"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="e.g. Please check if brand substitutes are acceptable"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
            />
          </div>

          {/* Submit Actions */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-end gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="w-full sm:w-auto px-5 py-3 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold text-sm flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <Phone className="w-4 h-4 mr-2 text-blue-600" />
              Call Now ({BUSINESS_INFO.phone})
            </a>
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-lg flex items-center justify-center space-x-2 transition-all transform hover:-translate-y-0.5"
            >
              <Send className="w-4 h-4" />
              <span>Send via WhatsApp</span>
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};
