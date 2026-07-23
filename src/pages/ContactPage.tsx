import React, { useState } from 'react';
import { 
  MapPin, Phone, Mail, Clock, Send, MessageCircle, 
  CheckCircle2, Store, Sparkles 
} from 'lucide-react';
import { BUSINESS_INFO, buildWhatsAppUrl } from '../data/pharmacyData';
import { ContactFormData } from '../types';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleSendWhatsAppDirect = () => {
    const url = buildWhatsAppUrl({
      customerName: formData.name,
      mobileNumber: formData.phone,
      message: formData.message,
    });
    window.open(url, '_blank');
  };

  return (
    <div id="contact-page-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
          GET IN TOUCH
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white">
          Contact New Prakash Medico
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          Visit our medical store at Karpi Bus Stand, Kurtha or send an online inquiry anytime.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Col: Contact Details & Working Hours */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Business Information
            </h3>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900 dark:text-white">Store Address</strong>
                  <p className="text-slate-600 dark:text-slate-300">{BUSINESS_INFO.location}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900 dark:text-white">Phone / WhatsApp</strong>
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline">
                    {BUSINESS_INFO.phoneFormatted}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900 dark:text-white">Email Address</strong>
                  <p className="text-slate-600 dark:text-slate-300">{BUSINESS_INFO.email}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900 dark:text-white">Working Hours</strong>
                  <p className="text-slate-600 dark:text-slate-300">{BUSINESS_INFO.workingHours}</p>
                  <span className="text-[11px] font-bold text-emerald-600">Open 7 Days a Week</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-700 space-y-3">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl flex items-center justify-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call Store ({BUSINESS_INFO.phoneFormatted})</span>
              </a>

              <a
                href={BUSINESS_INFO.mapQueryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 text-slate-800 dark:text-white font-bold text-xs rounded-xl flex items-center justify-center space-x-2"
              >
                <MapPin className="w-4 h-4 text-emerald-600" />
                <span>Get Google Map Directions</span>
              </a>
            </div>

          </div>

        </div>

        {/* Right Col: Contact Form */}
        <div className="lg:col-span-7">
          <div className="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              Send Quick Message
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
              Have a medicine availability query, bulk requirement, or feedback? Send us a message directly.
            </p>

            {submitted ? (
              <div className="p-6 bg-emerald-50 dark:bg-emerald-950/60 rounded-2xl border border-emerald-200 dark:border-emerald-800 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="text-lg font-bold text-emerald-900 dark:text-emerald-200">
                  Message Sent Successfully!
                </h4>
                <p className="text-xs text-emerald-700 dark:text-emerald-300 max-w-md mx-auto">
                  Thank you for contacting New Prakash Medico. Our team will get back to your phone number shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 bg-emerald-600 text-white font-bold text-xs rounded-xl"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Nishant Kumar"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 9931075521"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. ramesh@gmail.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                    Your Message / Inquiry *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Inquire about medicine stock, prices or doctor prescriptions..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-md flex items-center justify-center space-x-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleSendWhatsAppDirect}
                    className="flex-1 py-3 px-4 bg-emerald-950 hover:bg-slate-900 text-emerald-300 font-bold text-xs rounded-xl border border-emerald-800 flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="w-4 h-4 fill-current text-emerald-400" />
                    <span>Or Send via WhatsApp</span>
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>

      </div>

      {/* Embedded Map */}
      <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700 h-96">
        <iframe
          title="New Prakash Medico Store Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14457.1234!2d84.81!3d25.04!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398d25d123456789%3A0x123456789abcdef!2sKarpi%20Bus%20Stand%2C%20Kurtha%2C%20Bihar%20804421!5e0!3m2!1sen!2sin!4v1700000000000"
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

    </div>
  );
};
