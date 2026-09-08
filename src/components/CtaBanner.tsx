import React from 'react';
import { Sparkles, ArrowRight, CheckCircle, Calendar, FileText, Phone } from 'lucide-react';
import { SCHOOL_INFO } from '../data';

interface CtaBannerProps {
  onOpenAdmissions: () => void;
  onOpenRequirements: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({
  onOpenAdmissions,
  onOpenRequirements,
}) => {
  return (
    <section className="relative overflow-hidden bg-[#0A5C36] py-16 lg:py-20 text-white shadow-inner">
      {/* Decorative Gold Flourish & Watermark */}
      <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 rounded-full bg-[#D4AF37]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-96 h-96 rounded-full bg-emerald-900/60 blur-2xl pointer-events-none" />

      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
          {/* Main Call to Action Text */}
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#F9E8A2] text-xs font-extrabold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] animate-pulse" />
              <span>Academic Year 2027 Admissions</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif-heading tracking-tight text-white leading-tight">
              Enrollment Now Open 2027{' '}
              <span className="block text-[#D4AF37] font-sans font-bold text-2xl sm:text-3xl lg:text-4xl mt-1">
                — Grade 10 Intake & Limited Transfers
              </span>
            </h2>

            <p className="text-base sm:text-lg text-emerald-100/90 leading-relaxed font-normal">
              Secure your daughter's placement in a disciplined, high-achieving Christian environment.
              Both Boarding and Day scholar positions are available in serene Ngecha Town, Limuru.
            </p>

            {/* Quick Benefits Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-white">
              <div className="flex items-center gap-2 bg-black/20 backdrop-blur-xs px-3 py-2 rounded-md border border-emerald-600/40">
                <CheckCircle className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Full Boarding & Day</span>
              </div>
              <div className="flex items-center gap-2 bg-black/20 backdrop-blur-xs px-3 py-2 rounded-md border border-emerald-600/40">
                <CheckCircle className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>KNEC Code 11211339</span>
              </div>
              <div className="flex items-center gap-2 bg-black/20 backdrop-blur-xs px-3 py-2 rounded-md border border-emerald-600/40">
                <CheckCircle className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Subsidized Public Fees</span>
              </div>
            </div>
          </div>

          {/* Action Box */}
          <div className="lg:shrink-0 flex flex-col sm:flex-row lg:flex-col gap-4">
            <button
              onClick={onOpenAdmissions}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg bg-[#D4AF37] hover:bg-[#c49f2b] text-[#0A5C36] font-extrabold text-base tracking-wide shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Apply for 2027 Intake</span>
              <ArrowRight className="w-5 h-5 text-[#0A5C36]" />
            </button>

            <button
              onClick={onOpenRequirements}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold text-sm backdrop-blur-xs border border-white/20 transition-colors cursor-pointer"
            >
              <FileText className="w-4 h-4 text-[#D4AF37]" />
              <span>Download Requirements & Fees</span>
            </button>

            <div className="text-center sm:text-left lg:text-center text-xs text-emerald-200">
              <span>Have questions? Call Principal: </span>
              <a href={`tel:${SCHOOL_INFO.phone}`} className="font-bold text-[#D4AF37] hover:underline ml-1">
                {SCHOOL_INFO.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
