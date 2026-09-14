import React from 'react';
import { Award, Users, BookOpen, MapPin, CheckCircle, ShieldCheck } from 'lucide-react';
import { SCHOOL_INFO, STATS } from '../data';

interface AboutAndStatsProps {
  onOpenModal?: (key: string) => void;
}

export const AboutAndStats: React.FC<AboutAndStatsProps> = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Snippet Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#E8F5E9] text-[#0A5C36] text-xs font-extrabold uppercase tracking-widest border border-[#0A5C36]/20">
              <span>About Ngecha Girls</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight font-serif-heading">
              A Public Center of Excellence in Limuru, Kiambu
            </h2>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Established in the heart of Ngecha Town, Limuru, <strong>Ngecha Girls High School</strong> is a premier
              Public Sub-County Secondary School dedicated to transforming young women into disciplined, confident, and
              academically capable citizens.
            </p>

            <div className="space-y-3.5 text-sm text-gray-600">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#E8F5E9] text-[#0A5C36] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle className="w-3.5 h-3.5" />
                </div>
                <span>
                  <strong>Sponsored by PCEA Church:</strong> Grounded in Christian principles under Presbyterian Church of East Africa pastoral care, Christian Union fellowships, and mentoring rooted in our motto, <em>Dream, Persist and Succeed</em>.
                </span>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#E8F5E9] text-[#0A5C36] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle className="w-3.5 h-3.5" />
                </div>
                <span>
                  <strong>Boarding & Day Scholars:</strong> Flexible options providing hygienic dormitories, round-the-clock security, and well-managed daily commutes.
                </span>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#E8F5E9] text-[#0A5C36] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle className="w-3.5 h-3.5" />
                </div>
                <span>
                  <strong>Accredited Examination Hub:</strong> Registered KNEC Examination Center with consistent university and college placement.
                </span>
              </div>
            </div>

            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-lg bg-gray-50 border-l-3 border-[#0A5C36]">
                <h4 className="text-xs font-bold text-[#0A5C36] uppercase tracking-wider mb-1">
                  Our Mission
                </h4>
                <p className="text-xs text-gray-700 leading-relaxed">
                  {SCHOOL_INFO.mission}
                </p>
              </div>

              <div className="p-4 rounded-lg bg-gray-50 border-l-3 border-[#D4AF37]">
                <h4 className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-1">
                  Our Vision
                </h4>
                <p className="text-xs text-gray-700 leading-relaxed">
                  {SCHOOL_INFO.vision}
                </p>
              </div>
            </div>
          </div>

          {/* Right Image Collage */}
          <div className="lg:col-span-6">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="/images/school-students.jpg"
                  alt="Ngecha Girls High School Students"
                  className="w-full h-[400px] object-cover"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    if (e.currentTarget.src !== 'https://raw.githubusercontent.com/oliviabancroft0-prog/ngechagirlshighschool/main/a00d3ef9-15a4-44b1-8ce4-4f229cdb47fa.jfif') {
                      e.currentTarget.src = 'https://raw.githubusercontent.com/oliviabancroft0-prog/ngechagirlshighschool/main/a00d3ef9-15a4-44b1-8ce4-4f229cdb47fa.jfif';
                    }
                  }}
                />
              </div>

              {/* Floating Trust Accent Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-xl shadow-xl border border-gray-100 max-w-xs hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-[#0A5C36] text-white">
                    <ShieldCheck className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-gray-900">Dream, Persist and Succeed</h5>
                    <p className="text-xs text-gray-500">Official School Motto</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar (Multi-Academy Trust Style) */}
        <div className="bg-[#0A5C36] rounded-2xl p-8 lg:p-12 shadow-xl border border-emerald-800 text-white">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold tracking-widest text-[#D4AF37] uppercase">
              Our Track Record & Community
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-serif-heading mt-1 text-white">
              Ngecha Girls at a Glance
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-emerald-700/50">
            {STATS.map((stat, idx) => (
              <div
                key={stat.label}
                className={`text-center ${
                  idx === 0
                    ? 'sm:pr-6'
                    : idx === STATS.length - 1
                    ? 'pt-6 sm:pt-0 sm:pl-6'
                    : 'pt-6 sm:pt-0 sm:px-6'
                }`}
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F9E8A2] tracking-tight font-serif-heading">
                  {stat.value}
                </div>
                <div className="text-base font-bold text-white mt-2">
                  {stat.label}
                </div>
                <p className="text-xs text-emerald-100/80 mt-1 leading-normal max-w-[220px] mx-auto">
                  {stat.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-8 border-t border-emerald-700/50 flex flex-wrap items-center justify-between gap-4 text-xs text-emerald-100">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#D4AF37]" />
              <span>Location: {SCHOOL_INFO.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-[#D4AF37]">Affiliation:</span>
              <span>{SCHOOL_INFO.affiliation}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
