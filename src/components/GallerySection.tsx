import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { GALLERY_ITEMS } from '../data';
import { GalleryItem } from '../types';

export const GallerySection: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight font-serif-heading">
            Our Vibrant Community
          </h2>
          <p className="text-sm sm:text-base text-gray-500 mt-2">
            Glimpses into student life.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group relative rounded-2xl overflow-hidden bg-gray-100 aspect-[4/3] cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200/80 hover:-translate-y-1"
            >
              <img
                src={item.imageUrl}
                alt={item.alt || 'Ngecha Girls High School Community'}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  if (item.fallbackUrl && e.currentTarget.src !== item.fallbackUrl) {
                    e.currentTarget.src = item.fallbackUrl;
                  }
                }}
              />

              {/* Minimal Zoom Indicator on hover */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="p-3 rounded-full bg-white/90 text-[#0A5C36] shadow-lg backdrop-blur-xs transform scale-90 group-hover:scale-100 transition-transform">
                  <ZoomIn className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gallery Lightbox Modal */}
      {selectedItem && (
        <div
          onClick={() => setSelectedItem(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xs animate-in fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center justify-center rounded-2xl overflow-hidden bg-black shadow-2xl"
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white cursor-pointer transition-colors shadow-md"
              aria-label="Close photo"
            >
              <X className="w-6 h-6" />
            </button>

            <img
              src={selectedItem.imageUrl}
              alt={selectedItem.alt || 'Ngecha Girls High School Community'}
              className="max-h-[85vh] w-auto max-w-full object-contain rounded-lg"
              referrerPolicy="no-referrer"
              onError={(e) => {
                if (selectedItem.fallbackUrl && e.currentTarget.src !== selectedItem.fallbackUrl) {
                  e.currentTarget.src = selectedItem.fallbackUrl;
                }
              }}
            />
          </div>
        </div>
      )}
    </section>
  );
};
