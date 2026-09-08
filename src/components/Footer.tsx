import React, { useState } from 'react';
import { SchoolBadge } from './SchoolBadge';
import { SCHOOL_INFO } from '../data';
import { Mail, Phone, MapPin, Send, CheckCircle2, ArrowRight, Heart } from 'lucide-react';

interface FooterProps {
  onOpenAdmissions: () => void;
  onOpenModal: (key: string) => void;
  onNavigateSection: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenAdmissions,
  onOpenModal,
  onNavigateSection,
}) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <footer className="bg-[#052b19] text-white border-t-4 border-[#D4AF37]">
      {/* Upper Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
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
              A Public Sub-County Secondary School empowering young women through holistic academic rigor,
              disciplined Christian character, and transformative life competencies in Kiambu County.
            </p>

            <div className="text-[11px] text-emerald-300/85 space-y-1">
              <div><strong>KNEC Examination Code:</strong> {SCHOOL_INFO.knecCode}</div>
              <div><strong>UIC Identifier:</strong> {SCHOOL_INFO.uicCode}</div>
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
                  onClick={() => onOpenModal('curriculum')}
                  className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowRight className="w-3 h-3 text-[#D4AF37]" />
                  <span>Curriculum & Departments</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenAdmissions}
                  className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowRight className="w-3 h-3 text-[#D4AF37]" />
                  <span>Admissions 2027 (Boarding & Day)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenModal('fees')}
                  className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowRight className="w-3 h-3 text-[#D4AF37]" />
                  <span>Fees Structure & Subsidies</span>
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
              Contact Directorate
            </h4>
            <div className="space-y-3.5 text-xs text-emerald-100/90">
              <div>
                <span className="block font-bold text-white">Principal:</span>
                <span className="text-[#F9E8A2] font-semibold">{SCHOOL_INFO.principal}</span>
              </div>

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

          {/* Column 4: Newsletter Signup */}
          <div>
            <h4 className="text-sm font-bold tracking-wider uppercase text-[#D4AF37] border-b border-emerald-800 pb-2 mb-4">
              School Circulars & News
            </h4>
            <p className="text-xs text-emerald-100/80 mb-4 leading-relaxed">
              Subscribe to receive term dates, fee payment reminders, Christian Union conference notices, and examination reports.
            </p>

            {newsletterSubscribed ? (
              <div className="p-4 rounded-lg bg-emerald-900/60 border border-emerald-600 text-xs text-emerald-200 flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0" />
                <span>Thank you for subscribing! You will receive our termly newsletter.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2.5">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-md bg-emerald-950/80 border border-emerald-700 text-xs text-white placeholder-emerald-400/60 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 rounded-md bg-[#D4AF37] hover:bg-[#b89324] text-[#0A5C36] font-bold text-xs tracking-wider uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Subscribe to Circulars</span>
                </button>
              </form>
            )}

            <div className="mt-6 pt-4 border-t border-emerald-800/60 text-[11px] text-emerald-300/80">
              <span>Category: </span>
              <strong className="text-white">Girls Only (Boarding & Day)</strong>
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
              onClick={() => onOpenModal('requirements')}
              className="hover:text-[#D4AF37] transition-colors cursor-pointer"
            >
              Admission Policy
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenModal('fees')}
              className="hover:text-[#D4AF37] transition-colors cursor-pointer"
            >
              Fee Guidelines
            </button>
            <span>•</span>
            <button
              onClick={() => onNavigateSection('contact')}
              className="hover:text-[#D4AF37] transition-colors cursor-pointer"
            >
              Limuru, Kenya
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
