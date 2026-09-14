import React from 'react';
import { Quote, Phone, Mail, CheckCircle2, ArrowRight } from 'lucide-react';
import { SCHOOL_INFO } from '../data';
import { SchoolBadge } from './SchoolBadge';

interface PrincipalWelcomeProps {
  onOpenContact: () => void;
}

export const PrincipalWelcome: React.FC<PrincipalWelcomeProps> = ({
  onOpenContact,
}) => {
  return (
    <section id="principal" className="py-20 lg:py-28 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Institutional Credential & Leadership Card (Picture Removed) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Trust Border Frame */}
              <div className="absolute -inset-3 rounded-2xl bg-gradient-to-tr from-[#0A5C36]/15 via-transparent to-[#D4AF37]/20 -z-10" />
              <div className="relative rounded-xl overflow-hidden border-2 border-[#0A5C36]/30 shadow-xl bg-[#0A5C36] text-white">
                {/* Institutional Crest Header */}
                <div className="p-8 text-center space-y-4 bg-gradient-to-b from-[#074528] to-[#0A5C36] border-b border-emerald-700/60">
                  <div className="flex justify-center">
                    <SchoolBadge size="lg" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-serif-heading text-[#F9E8A2]">
                      Hellen Kahoro
                    </h3>
                    <p className="text-xs text-emerald-200 uppercase tracking-widest font-semibold mt-0.5">
                      Principal & BOM Secretary
                    </p>
                    <p className="text-xs text-emerald-300/80 mt-1">
                      Ngecha Girls High School
                    </p>
                  </div>
                  <div className="inline-block px-3 py-1 rounded bg-black/25 border border-[#D4AF37]/30 text-[11px] font-bold text-[#F9E8A2] tracking-wider uppercase">
                    Dream, Persist and Succeed
                  </div>
                </div>

                {/* Direct Administrative Credentials */}
                <div className="p-6 bg-white space-y-3 text-xs text-gray-700">
                  <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                    <span className="font-bold text-[#0A5C36]">Church Sponsor:</span>
                    <span className="font-semibold text-gray-900">PCEA Church</span>
                  </div>
                  <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                    <span className="font-bold text-[#0A5C36]">Administrative Office:</span>
                    <span>Ngecha Town, Limuru</span>
                  </div>
                  <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                    <span className="font-bold text-[#0A5C36]">Direct Office Line:</span>
                    <a href={`tel:${SCHOOL_INFO.phone}`} className="font-bold text-[#0A5C36] hover:underline">
                      {SCHOOL_INFO.phoneDisplay}
                    </a>
                  </div>
                  <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                    <span className="font-bold text-[#0A5C36]">Ministry Status:</span>
                    <span className="font-medium text-emerald-800">Public Sub-County (Girls)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-[#0A5C36]">Church Sponsor:</span>
                    <span className="font-semibold text-gray-800">PCEA Church</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Principal's Official Welcome Message */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#E8F5E9] text-[#0A5C36] text-xs font-extrabold uppercase tracking-widest border border-[#0A5C36]/20">
                <span>Principal's Address</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight font-serif-heading">
                Welcome to Ngecha Girls High School
              </h2>
              <p className="text-sm font-semibold text-[#0A5C36] uppercase tracking-wider">
                Dream, Persist and Succeed
              </p>
            </div>

            {/* Featured Quote */}
            <div className="relative pl-6 border-l-4 border-[#0A5C36] py-1 bg-gray-50/70 rounded-r-lg">
              <Quote className="absolute -top-3 -left-3.5 w-7 h-7 text-[#D4AF37] fill-[#D4AF37]/20" />
              <p className="text-base sm:text-lg italic text-gray-800 font-serif leading-relaxed">
                "We believe every young woman has been endowed by God with boundless potential. Sponsored by the PCEA Church,
                we pair spiritual grounding with unapologetic academic rigor so that our girls leave not just with good grades,
                but with the moral courage to transform our nation."
              </p>
            </div>

            {/* Message Body */}
            <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
              <p>
                On behalf of the Board of Management, dedicated teaching faculty, support staff, and student body,
                it gives me immense pleasure to welcome you to the official portal of <strong>Ngecha Girls High School</strong>.
                Located in the cool, serene heights of Ngecha Town, Limuru, our school offers a secure and conducive sanctuary
                for holistic secondary education.
              </p>
              <p>
                As a Christian-based public institution proudly sponsored by the Presbyterian Church of East Africa (PCEA),
                our cardinal anchor is our school motto, <em>Dream, Persist and Succeed</em>.
                We understand that academic brilliance without moral fortitude is incomplete. Whether our girls join us as
                full boarders or day scholars, they are enveloped in an environment of strict pastoral care, spiritual mentorship through
                the Christian Union, and focused preparation for national assessments and examinations.
              </p>
              <p>
                Our teachers give their all, conducting remedial support, continuous assessments, and practical laboratory investigations
                that give our students an undeniable edge. We invite parents, guardians, and education stakeholders to walk this transformative
                journey with us.
              </p>
            </div>

            {/* Key Commitments Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#0A5C36] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-gray-700">
                  Comprehensive KCSE & CBE Curriculum delivery
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#0A5C36] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-gray-700">
                  Safe boarding dormitories & supervised prep
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#0A5C36] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-gray-700">
                  Strong Christian discipleship & character mentoring
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#0A5C36] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-gray-700">
                  PCEA church sponsorship & dedicated faculty
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 px-6 py-3 rounded bg-[#0A5C36] hover:bg-[#074528] text-white font-bold text-sm shadow transition-all cursor-pointer"
              >
                <span>Contact the Principal</span>
                <Phone className="w-4 h-4 text-[#D4AF37]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
