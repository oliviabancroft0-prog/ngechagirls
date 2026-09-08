import React from 'react';
import { Quote, Phone, Mail, CheckCircle2, ArrowRight } from 'lucide-react';
import { SCHOOL_INFO } from '../data';
import { SchoolBadge } from './SchoolBadge';

interface PrincipalWelcomeProps {
  onOpenAdmissions: () => void;
  onOpenContact: () => void;
}

export const PrincipalWelcome: React.FC<PrincipalWelcomeProps> = ({
  onOpenAdmissions,
  onOpenContact,
}) => {
  return (
    <section id="principal" className="py-20 lg:py-28 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Principal Portrait & Institutional Credential Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Trust Border Frame */}
              <div className="absolute -inset-3 rounded-2xl bg-gradient-to-tr from-[#0A5C36]/15 via-transparent to-[#D4AF37]/20 -z-10" />
              <div className="relative rounded-xl overflow-hidden border-2 border-[#0A5C36]/20 shadow-xl bg-[#0A5C36]">
                {/* Photo of Principal Hellen Kahoro */}
                <div className="relative aspect-[4/5] overflow-hidden bg-[#0A5C36]">
                  <img
                    src={SCHOOL_INFO.principalImage}
                    alt={`Principal ${SCHOOL_INFO.principal}, Ngecha Girls High School`}
                    className="w-full h-full object-cover object-top filter contrast-[1.03]"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      if (SCHOOL_INFO.principalImageFallback && e.currentTarget.src !== SCHOOL_INFO.principalImageFallback) {
                        e.currentTarget.src = SCHOOL_INFO.principalImageFallback;
                      }
                    }}
                  />
                  {/* Bottom Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Overlay Identity Bar */}
                  <div className="absolute bottom-0 inset-x-0 p-5 text-white">
                    <div className="flex items-center gap-3">
                      <SchoolBadge size="sm" />
                      <div>
                        <h4 className="text-lg font-bold font-serif-heading text-[#F9E8A2]">
                          Hellen Kahoro
                        </h4>
                        <p className="text-xs text-gray-200 uppercase tracking-wider font-medium">
                          Principal
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sub-card with direct administrative credentials */}
                <div className="p-5 bg-white border-t-2 border-[#D4AF37] space-y-2 text-xs">
                  <div className="flex items-center justify-between text-gray-700">
                    <span className="font-semibold text-[#0A5C36]">Administrative Office:</span>
                    <span>Ngecha Town, Limuru</span>
                  </div>
                  <div className="flex items-center justify-between text-gray-700">
                    <span className="font-semibold text-[#0A5C36]">Direct Office Line:</span>
                    <a href={`tel:${SCHOOL_INFO.phone}`} className="font-bold text-[#0A5C36] hover:underline">
                      {SCHOOL_INFO.phoneDisplay}
                    </a>
                  </div>
                  <div className="flex items-center justify-between text-gray-700">
                    <span className="font-semibold text-[#0A5C36]">Ministry Status:</span>
                    <span className="font-medium text-emerald-800">Public Sub-County (Girls)</span>
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
                "We believe every young woman has been endowed by God with boundless potential. Here in Ngecha,
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
                As a Christian-based public institution, our cardinal anchor is our school motto, <em>Dream, Persist and Succeed</em>.
                We understand that academic brilliance without moral fortitude is incomplete. Whether our girls join us as
                full boarders or day scholars, they are enveloped in an environment of strict pastoral care, spiritual mentorship through
                the Christian Union, and focused preparation for the Kenya Certificate of Secondary Education (KCSE).
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
                  Comprehensive KCSE & CBC Curriculum delivery
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
                  Affordable government-subsidized public school fees
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenAdmissions}
                className="inline-flex items-center gap-2 px-6 py-3 rounded bg-[#0A5C36] hover:bg-[#074528] text-white font-bold text-sm shadow transition-all cursor-pointer"
              >
                <span>2027 Admissions Information</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
              </button>

              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 px-6 py-3 rounded border border-gray-300 hover:border-[#0A5C36] text-gray-700 hover:text-[#0A5C36] font-semibold text-sm transition-all cursor-pointer"
              >
                <span>Contact the Principal</span>
                <Phone className="w-4 h-4 text-[#0A5C36]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
