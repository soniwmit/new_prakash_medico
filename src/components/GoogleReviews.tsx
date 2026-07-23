import React from 'react';
import { Star, CheckCircle, Quote, ThumbsUp } from 'lucide-react';
import { TESTIMONIALS, BUSINESS_INFO } from '../data/pharmacyData';

export const GoogleReviews: React.FC = () => {
  return (
    <section id="google-reviews-section" className="py-16 bg-slate-100/60 dark:bg-slate-900/60 border-y border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Google Badge */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6 bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <span className="text-xl font-extrabold text-blue-600 dark:text-blue-400">Google</span>
              <span className="text-sm font-semibold text-slate-500">Customer Rating</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
              Trusted by 10,000+ Local Families
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Honest ratings & genuine feedback from patients and buyers in Kurtha, Karpi & Khemkaran Saray.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 shrink-0">
            <div className="flex items-center space-x-1 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-amber-400 fill-amber-400" />
              ))}
            </div>
            <span className="text-3xl font-black text-slate-900 dark:text-white">{BUSINESS_INFO.googleRating} / 5.0</span>
            <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center mt-1">
              <CheckCircle className="w-3.5 h-3.5 mr-1" /> Based on {BUSINESS_INFO.googleReviewCount}+ Verified Reviews
            </span>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex space-x-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs text-slate-400">{review.date}</span>
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300 italic relative pl-3 border-l-2 border-emerald-500">
                  "{review.comment}"
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">{review.name}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{review.location}</p>
                </div>
                {review.verified && (
                  <span className="inline-flex items-center text-[10px] font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-2 py-1 rounded-md">
                    <CheckCircle className="w-3 h-3 mr-1 text-emerald-500" /> Verified
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
