import React, { useState } from 'react';
import { Calendar, User, ArrowRight, X, Sparkles, BookOpen } from 'lucide-react';
import { LATEST_NEWS } from '../data';
import { NewsArticle } from '../types';

interface NewsSectionProps {
  onOpenAdmissions: () => void;
}

export const NewsSection: React.FC<NewsSectionProps> = ({ onOpenAdmissions }) => {
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);

  const getCategoryColor = (cat: NewsArticle['category']) => {
    switch (cat) {
      case 'Admissions':
        return 'bg-amber-100 text-amber-900 border-amber-300';
      case 'Academics':
        return 'bg-emerald-100 text-emerald-900 border-emerald-300';
      case 'Christian Union':
        return 'bg-blue-100 text-blue-900 border-blue-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  return (
    <section id="news" className="py-20 lg:py-28 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#E8F5E9] text-[#0A5C36] text-xs font-extrabold uppercase tracking-widest border border-[#0A5C36]/20 mb-3">
              <span>Campus Bulletins</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight font-serif-heading">
              Latest News & Events
            </h2>
            <p className="text-sm sm:text-base text-gray-500 mt-1">
              Official announcements, intake information, and campus bulletins.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-gray-400">Termly Archive 2027</span>
          </div>
        </div>

        {/* Featured Enrollment Article Layout */}
        {LATEST_NEWS.length === 1 ? (
          <div className="max-w-4xl mx-auto">
            {LATEST_NEWS.map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200/90 shadow-md hover:shadow-xl transition-all duration-300 grid grid-cols-1 md:grid-cols-12 group hover:-translate-y-1"
              >
                {/* Image Container */}
                <div className="relative md:col-span-5 aspect-[16/10] md:aspect-auto overflow-hidden bg-gray-100 min-h-[240px]">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span
                      className={`text-xs font-bold px-3 py-1 rounded-full border shadow-sm ${getCategoryColor(
                        article.category
                      )}`}
                    >
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-8 md:col-span-7 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[#0A5C36]" />
                        {article.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <User className="w-3.5 h-3.5 text-[#0A5C36]" />
                        {article.author}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-[#0A5C36] transition-colors font-serif-heading leading-snug mb-3">
                      {article.title}
                    </h3>

                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="mt-6 pt-5 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
                    <button
                      onClick={() => setSelectedArticle(article)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0A5C36] hover:bg-[#074528] text-white text-xs font-bold shadow-sm transition-all cursor-pointer"
                    >
                      <span>Read Full Notice</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#D4AF37]" />
                    </button>

                    {article.category === 'Admissions' && (
                      <button
                        onClick={onOpenAdmissions}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A5C36] hover:text-[#074528] underline underline-offset-4 cursor-pointer"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                        <span>Apply Online &rarr;</span>
                      </button>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {LATEST_NEWS.map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-xl overflow-hidden border border-gray-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span
                      className={`text-[11px] font-bold px-2.5 py-1 rounded-full border shadow-sm ${getCategoryColor(
                        article.category
                      )}`}
                    >
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 text-xs text-gray-400 mb-2.5">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[#0A5C36]" />
                        {article.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <User className="w-3.5 h-3.5 text-[#0A5C36]" />
                        {article.author}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#0A5C36] transition-colors font-serif-heading line-clamp-2 leading-snug mb-3">
                      {article.title}
                    </h3>

                    <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedArticle(article)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A5C36] group-hover:text-[#074528] cursor-pointer"
                    >
                      <span>Read Full Story</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>

                    {article.category === 'Admissions' && (
                      <button
                        onClick={onOpenAdmissions}
                        className="text-[11px] font-bold text-[#D4AF37] hover:underline cursor-pointer"
                      >
                        Apply Online &rarr;
                      </button>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200 p-6 sm:p-8 relative">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-4 right-4 p-2 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 cursor-pointer transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-4">
              <span
                className={`text-xs font-bold px-3 py-1 rounded-full border ${getCategoryColor(
                  selectedArticle.category
                )}`}
              >
                {selectedArticle.category}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold font-serif-heading text-gray-900 leading-tight mb-3">
              {selectedArticle.title}
            </h3>

            <div className="flex items-center gap-4 text-xs text-gray-500 mb-6 pb-4 border-b border-gray-100">
              <span>Published: {selectedArticle.date}</span>
              <span>•</span>
              <span>By: {selectedArticle.author}</span>
              <span>•</span>
              <span className="text-[#0A5C36] font-semibold">Ngecha Girls High School</span>
            </div>

            <div className="rounded-xl overflow-hidden mb-6 aspect-[16/9]">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
              {selectedArticle.content.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-5 py-2.5 rounded-md border border-gray-300 text-gray-700 font-semibold text-xs hover:bg-gray-50 cursor-pointer"
              >
                Close Article
              </button>

              {selectedArticle.category === 'Admissions' && (
                <button
                  onClick={() => {
                    setSelectedArticle(null);
                    onOpenAdmissions();
                  }}
                  className="px-5 py-2.5 rounded-md bg-[#0A5C36] hover:bg-[#074528] text-white font-bold text-xs cursor-pointer shadow"
                >
                  Proceed to 2027 Admissions
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
