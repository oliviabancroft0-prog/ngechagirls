import React, { useState, useEffect, useCallback } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Award, Shield, BookOpen } from 'lucide-react';
import { HERO_SLIDES, SCHOOL_INFO } from '../data';

interface HeroSliderProps {
  onOpenAdmissions: () => void;
  onOpenResults: () => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({
  onOpenAdmissions,
  onOpenResults,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 6500);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden bg-gray-900 min-h-[580px] lg:min-h-[660px] flex items-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Slides */}
      {HERO_SLIDES.map((slide, index) => (
        <div
          key={slide.title}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 pointer-events-none z-0'
          }`}
          style={{ transitionProperty: 'opacity, transform' }}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover object-center filter brightness-[0.78] contrast-[1.05]"
            loading={index === 0 ? 'eager' : 'lazy'}
            referrerPolicy="no-referrer"
            onError={(e) => {
              if (slide.fallbackImage && e.currentTarget.src !== slide.fallbackImage) {
                e.currentTarget.src = slide.fallbackImage;
              }
            }}
          />
          {/* Multi-Academy Trust Gradient Overlay: subtle dark green vignette with clean contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#074528]/80 via-transparent to-black/30" />
        </div>
      ))}

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="max-w-3xl">
          {/* Cross & Motto at the top */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0A5C36]/80 backdrop-blur-md border border-[#D4AF37]/50 text-white mb-6 shadow-md">
            {/* Small Gold Latin Cross */}
            <svg
              className="w-3.5 h-4 text-[#D4AF37]"
              viewBox="0 0 24 28"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 2h4v7h7v4h-7v13h-4V13H3V9h7V2z" />
            </svg>
            <span className="text-xs font-bold tracking-widest uppercase text-[#F9E8A2]">
              {SCHOOL_INFO.mottoUpper}
            </span>
          </div>

          {/* Main Title - Stamford Park Trust style large typography */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight sm:leading-[1.15] font-serif-heading drop-shadow-sm">
            Ngecha Girls High School
            <span className="block mt-2 text-2xl sm:text-3xl md:text-4xl text-[#F9E8A2] font-sans font-semibold">
              Empowering Young Women in Faith & Knowledge
            </span>
          </h1>

          {/* Description */}
          <p className="mt-5 text-base sm:text-lg text-gray-200 leading-relaxed max-w-2xl font-normal drop-shadow">
            A distinguished public Christian-based secondary institution in Ngecha Town, Limuru, Kiambu County.
            Nurturing holistic academic achievement, deep Christian character, and confident female leadership.
          </p>

          {/* Key Quick Badges */}
          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs sm:text-sm text-gray-300">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-black/40 backdrop-blur-sm border border-white/10">
              <Shield className="w-3.5 h-3.5 text-[#D4AF37]" />
              Girls Only • Boarding & Day
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-black/40 backdrop-blur-sm border border-white/10">
              <Award className="w-3.5 h-3.5 text-[#D4AF37]" />
              KNEC Center 11211339
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-black/40 backdrop-blur-sm border border-white/10">
              <BookOpen className="w-3.5 h-3.5 text-[#D4AF37]" />
              Grade 10 Admissions 2027
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenAdmissions}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded bg-[#D4AF37] hover:bg-[#b89324] text-[#0A5C36] font-extrabold text-base tracking-wide transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Apply Now</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={onOpenResults}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded bg-white/95 hover:bg-white text-gray-900 font-bold text-base transition-all shadow-md hover:shadow-lg backdrop-blur-sm hover:text-[#0A5C36] cursor-pointer"
            >
              <span>Our Results</span>
              <Award className="w-5 h-5 text-[#0A5C36]" />
            </button>
          </div>
        </div>
      </div>

      {/* Slide Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/35 hover:bg-[#0A5C36] text-white backdrop-blur-sm transition-colors cursor-pointer border border-white/20 hidden sm:flex items-center justify-center"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/35 hover:bg-[#0A5C36] text-white backdrop-blur-sm transition-colors cursor-pointer border border-white/20 hidden sm:flex items-center justify-center"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Slide Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`transition-all rounded-full cursor-pointer ${
              i === currentSlide ? 'w-8 h-2.5 bg-[#D4AF37]' : 'w-2.5 h-2.5 bg-white/50 hover:bg-white'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
