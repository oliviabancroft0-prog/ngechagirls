import React from 'react';
import { SchoolBadge } from './SchoolBadge';
import { SCHOOL_INFO } from '../data';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

interface FooterProps {
  onOpenModal: (key: string) => void;
  onNavigateSection: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenModal,
  onNavigateSection,
}) => {
  return (
    <footer className="bg-[#052b19] text-white border-t-4 border-[#D4AF37]">
      {/* Upper Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
          {/* Column 1: School Logo + Identity + Motto */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <SchoolBadge size="lg" />
              <div>
                <h3 className="text-xl font-bold font-serif-heading text-[#F9E8A2]">
                  Ngecha Girls
                </h3>
                <p className="text-xs text-emerald-300 uppercase tracking-wider font-semibold">
                  High School • Limuru
                </p>
              </div>
            </div>

            <div className="pt-1">
              <span className="inline-block px-3.5 py-1.5 rounded bg-emerald-900/90 border border-[#D4AF37]/50 text-[#F9E8A2] font-extrabold text-xs tracking-wider uppercase">
                Motto: {SCHOOL_INFO.mottoUpper}
              </span>
            </div>

            <p className="text-xs text-emerald-100/80 leading-relaxed">
              A recognized Public Sub-County Girls Secondary School in Ngecha Town, Limuru, Kiambu County.
              Proudly sponsored by the Presbyterian Church of East Africa (PCEA). Empowering young women through
              holistic academic rigor, Christian character, and leadership.
            </p>

            <div className="text-[11px] text-emerald-300/85 space-y-1 pt-1">
              <div><strong>Sponsor:</strong> Presbyterian Church of East Africa (PCEA)</div>
              <div><strong>Accreditation:</strong> Registered KNEC Examination Center</div>
              <div><strong>Category:</strong> Girls Only (Day & Boarding)</div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold tracking-wider uppercase text-[#D4AF37] border-b border-emerald-800 pb-2 mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-emerald-100/90">
              <li>
                <button
                  onClick={() => onNavigateSection('hero')}
                  className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowRight className="w-3 h-3 text-[#D4AF37]" />
                  <span>Home Page</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenModal('history')}
                  className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowRight className="w-3 h-3 text-[#D4AF37]" />
                  <span>About Us & Heritage</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenModal('departments')}
                  className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowRight className="w-3 h-3 text-[#D4AF37]" />
                  <span>Academic Departments</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenModal('boarding')}
                  className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowRight className="w-3 h-3 text-[#D4AF37]" />
                  <span>Day & Boarding Facilities</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenModal('christian-union')}
                  className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowRight className="w-3 h-3 text-[#D4AF37]" />
                  <span>Christian Union & Spiritual Life</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('gallery')}
                  className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowRight className="w-3 h-3 text-[#D4AF37]" />
                  <span>Campus Photo Gallery</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('contact')}
                  className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowRight className="w-3 h-3 text-[#D4AF37]" />
                  <span>Contact & Map</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div>
            <h4 className="text-sm font-bold tracking-wider uppercase text-[#D4AF37] border-b border-emerald-800 pb-2 mb-4">
              Contact & Office Information
            </h4>
            <div className="space-y-3.5 text-xs text-emerald-100/90">
              <div>
                <span className="block font-bold text-white">Direct Phone:</span>
                <a
                  href={`tel:${SCHOOL_INFO.phone}`}
                  className="hover:text-[#D4AF37] transition-colors font-medium text-white flex items-center gap-1.5 mt-0.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>{SCHOOL_INFO.phoneDisplay}</span>
                </a>
              </div>

              <div>
                <span className="block font-bold text-white">Official Email:</span>
                <a
                  href={`mailto:${SCHOOL_INFO.email}`}
                  className="hover:text-[#D4AF37] transition-colors font-medium break-all flex items-center gap-1.5 mt-0.5"
                >
                  <Mail className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                  <span>{SCHOOL_INFO.email}</span>
                </a>
              </div>

              <div>
                <span className="block font-bold text-white">Postal Address:</span>
                <span className="flex items-start gap-1.5 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span>{SCHOOL_INFO.postalAddress}</span>
                </span>
              </div>

              <div>
                <span className="block font-bold text-white">Location:</span>
                <span className="text-emerald-200">
                  {SCHOOL_INFO.location}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright and Attribution */}
      <div className="bg-[#031d10] border-t border-emerald-900 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-300/80">
          <div className="text-center sm:text-left">
            <span>© 2027 Ngecha Girls High School. Public Christian-Based Institution.</span>
            <span className="hidden sm:inline mx-2">•</span>
            <span className="block sm:inline mt-1 sm:mt-0 text-emerald-400">
              All Rights Reserved.
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <button
              onClick={() => onNavigateSection('principal')}
              className="hover:text-[#D4AF37] transition-colors cursor-pointer"
            >
              Principal's Office
            </button>
            <span>•</span>
            <button
              onClick={() => onNavigateSection('contact')}
              className="hover:text-[#D4AF37] transition-colors cursor-pointer"
            >
              Limuru, Kiambu
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
