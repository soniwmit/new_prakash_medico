import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../data/pharmacyData';
import { GalleryItem } from '../types';
import { Maximize2, X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

export const GalleryPage: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const categories = ['All', 'Store Front', 'Store Interior', 'Medicine Shelves', 'Products', 'Medical Equipment'];

  const filteredImages = GALLERY_IMAGES.filter(
    (img) => selectedFilter === 'All' || img.category === selectedFilter
  );

  const activeImage = activeImageIndex !== null ? filteredImages[activeImageIndex] : null;

  const handlePrev = () => {
    if (activeImageIndex !== null) {
      setActiveImageIndex(
        activeImageIndex === 0 ? filteredImages.length - 1 : activeImageIndex - 1
      );
    }
  };

  const handleNext = () => {
    if (activeImageIndex !== null) {
      setActiveImageIndex(
        activeImageIndex === filteredImages.length - 1 ? 0 : activeImageIndex + 1
      );
    }
  };

  return (
    <div id="gallery-page-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
          STORE VISUAL GALLERY
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white">
          New Prakash Medico Store Facilities
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          Take a look at our clean medicine counters, well-stocked racks, and modern diagnostic devices.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-center space-x-2 overflow-x-auto pb-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedFilter(cat)}
            className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-colors ${
              selectedFilter === cat
                ? 'bg-emerald-600 text-white shadow-md'
                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-emerald-500'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry / Grid Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredImages.map((img, index) => (
          <div
            key={img.id}
            onClick={() => setActiveImageIndex(index)}
            className="group relative cursor-pointer rounded-2xl overflow-hidden bg-slate-900 shadow-sm hover:shadow-xl transition-all h-72 border border-slate-200 dark:border-slate-800"
          >
            <img
              src={img.imageUrl}
              alt={img.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/20 to-transparent p-5 flex flex-col justify-end text-white">
              <span className="text-[10px] font-extrabold text-emerald-400 uppercase tracking-widest">
                {img.category}
              </span>
              <h3 className="text-base font-bold text-white flex items-center justify-between">
                <span>{img.title}</span>
                <ZoomIn className="w-5 h-5 text-emerald-300 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-xs text-slate-300 line-clamp-1 mt-0.5">{img.caption}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Lightbox Modal */}
      {activeImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md">
          <button
            onClick={() => setActiveImageIndex(null)}
            className="absolute top-6 right-6 p-2 text-white bg-white/10 hover:bg-white/20 rounded-full"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={handlePrev}
            className="absolute left-4 p-3 text-white bg-white/10 hover:bg-white/20 rounded-full"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="max-w-4xl w-full space-y-3 text-center">
            <img
              src={activeImage.imageUrl}
              alt={activeImage.title}
              className="max-h-[75vh] w-auto mx-auto rounded-2xl shadow-2xl object-contain"
              referrerPolicy="no-referrer"
            />
            <div className="text-white space-y-1">
              <h3 className="text-xl font-bold">{activeImage.title}</h3>
              <p className="text-xs text-slate-300">{activeImage.caption}</p>
            </div>
          </div>

          <button
            onClick={handleNext}
            className="absolute right-4 p-3 text-white bg-white/10 hover:bg-white/20 rounded-full"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}

    </div>
  );
};
