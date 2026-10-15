import React from 'react';
import { X, Phone, CheckCircle, Award, BookOpen, Heart, Users, Shield, Sparkles, MapPin, FileCode, ExternalLink, Compass } from 'lucide-react';
import { SCHOOL_INFO, ACADEMIC_DEPARTMENTS } from '../data';
import { SchoolBadge } from './SchoolBadge';

interface InfoModalsProps {
  modalType: string | null;
  onClose: () => void;
}

export const InfoModals: React.FC<InfoModalsProps> = ({
  modalType,
  onClose,
}) => {
  if (!modalType) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200 relative p-6 sm:p-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 cursor-pointer transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Content Switcher */}
        {modalType === 'boarding' && (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <SchoolBadge size="sm" />
              <div>
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider">
                  Student Accommodation & Care
                </span>
                <h3 className="text-2xl font-bold font-serif-heading text-[#0A5C36]">
                  Day and Boarding Facilities
                </h3>
              </div>
            </div>

            <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
              <p>
                Ngecha Girls High School provides modern day and boarding scholar facilities designed to nurture academic excellence,
                discipline, and holistic personal development in a serene learning atmosphere in Ngecha Town, Limuru.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-xl border border-gray-200 bg-gray-50 space-y-1.5">
                  <h4 className="font-bold text-[#0A5C36] flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-[#D4AF37]" />
                    Day Scholar Support
                  </h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Accessible location in Ngecha Town, Limuru</li>
                    <li>Healthy hot lunch program for all day students</li>
                    <li>Equal access to laboratories and library</li>
                  </ul>
                </div>

                <div className="p-3.5 rounded-xl border border-gray-200 bg-gray-50 space-y-1.5">
                  <h4 className="font-bold text-[#0A5C36] flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-[#D4AF37]" />
                    Boarding Amenities
                  </h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Spacious, well-ventilated dormitories with hot water</li>
                    <li>24/7 dedicated matrons and professional security team</li>
                    <li>Supervised evening prep and silent study halls</li>
                    <li>Balanced, nutritious meals prepared by trained kitchen staff</li>
                  </ul>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={`tel:${SCHOOL_INFO.phone}`}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#0A5C36] hover:bg-[#074528] text-white font-semibold text-xs shadow-sm transition-all"
                >
                  <Phone className="w-4 h-4 text-[#D4AF37]" />
                  <span>Contact Administration: {SCHOOL_INFO.phoneDisplay}</span>
                </a>
              </div>
            </div>
          </div>
        )}

        {modalType === 'uniform' && (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <SchoolBadge size="sm" />
              <div>
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider">
                  Student Presentation
                </span>
                <h3 className="text-2xl font-bold font-serif-heading text-[#0A5C36]">
                  School Uniform & Presentation Guidelines
                </h3>
              </div>
            </div>

            <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
              <p>
                At Ngecha Girls High School, smartness and decency are core values. Our students wear the bottle-green attire with dignity:
              </p>

              <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 space-y-2 text-xs">
                <h4 className="font-bold text-[#0A5C36] text-sm">Official Uniform Specifications:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1.5">
                  <li>Official bottle-green blazer with embroidered school badge and motto</li>
                  <li>Pleated skirts of approved knee-length cut</li>
                  <li>Crisp white short-sleeved shirts and official school tie</li>
                  <li>Branded bottle-green sweater and fleece jacket for cooler Limuru weather</li>
                  <li>Official sports kit for physical education and games</li>
                </ul>
              </div>

              <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-xs text-emerald-900">
                Official uniform items are fitted directly at the school uniform distribution center in Ngecha Town.
              </div>
            </div>
          </div>
        )}

        {modalType === 'departments' && (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <SchoolBadge size="sm" />
              <div>
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider">
                  Academic Departments
                </span>
                <h3 className="text-2xl font-bold font-serif-heading text-[#0A5C36]">
                  Academic Departments & Subject Offerings
                </h3>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-sm text-gray-600">
                Our curriculum spans 5 core academic departments managed by experienced educators:
              </p>

              <div className="space-y-3">
                {ACADEMIC_DEPARTMENTS.map((dept) => (
                  <div key={dept.name} className="p-3.5 rounded-xl border border-gray-200 bg-gray-50/70">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-sm text-[#0A5C36]">{dept.name}</h4>
                      <span className="text-[11px] font-medium text-gray-500">{dept.head}</span>
                    </div>
                    <p className="text-xs text-gray-600 mt-1">{dept.description}</p>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {dept.subjects.map((sub) => (
                        <span key={sub} className="px-2 py-0.5 rounded text-[10px] font-semibold bg-white border border-gray-200 text-gray-700">
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {modalType === 'history' && (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <SchoolBadge size="sm" />
              <div>
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider">
                  Heritage & Sponsorship
                </span>
                <h3 className="text-2xl font-bold font-serif-heading text-[#0A5C36]">
                  Our History & PCEA Church Sponsorship
                </h3>
              </div>
            </div>

            <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
              <p>
                <strong>Ngecha Girls High School</strong> was founded in Ngecha Town, Limuru, Kiambu County
                out of a vision to provide quality, value-based secondary education for young women.
                The institution is proudly sponsored by the <strong>Presbyterian Church of East Africa (PCEA)</strong>,
                which continues to provide spiritual guidance, moral mentorship, and community leadership.
              </p>

              <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 space-y-2 text-xs">
                <h4 className="font-bold text-[#0A5C36] text-sm">Governance & Community Stewardship:</h4>
                <p>
                  The school operates under the leadership of the Board of Management, the PCEA church sponsorship,
                  and the Ministry of Education, uniting teachers, parents, and community members.
                </p>
              </div>

              <p className="text-xs text-gray-500">
                School Motto: <em>Dream, Persist and Succeed</em>.
              </p>
            </div>
          </div>
        )}

        {modalType === 'board' && (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <SchoolBadge size="sm" />
              <div>
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider">
                  School Governance
                </span>
                <h3 className="text-2xl font-bold font-serif-heading text-[#0A5C36]">
                  Board of Management & Administration
                </h3>
              </div>
            </div>

            <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
              <p>
                The <strong>Board of Management (BOM)</strong> of Ngecha Girls High School oversees institutional policy,
                infrastructure expansion, academic programs, and moral standards in accordance with the Basic Education Act.
              </p>

              <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 space-y-3 text-xs">
                <h4 className="font-bold text-[#0A5C36] text-sm">Key Administrative Leadership:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 font-medium text-gray-700">
                  <div className="p-2.5 rounded bg-white border border-gray-200">
                    <strong className="block text-gray-900">Principal & BOM Secretary:</strong>
                    <span>Chief Executive & Institutional Head</span>
                  </div>
                  <div className="p-2.5 rounded bg-white border border-gray-200">
                    <strong className="block text-gray-900">Parents Association (PA) Chair:</strong>
                    <span>Elected Parent Representative</span>
                  </div>
                  <div className="p-2.5 rounded bg-white border border-gray-200 sm:col-span-2">
                    <strong className="block text-gray-900">Church Sponsor Representative:</strong>
                    <span>Presbyterian Church of East Africa (PCEA) Pastoral Oversight</span>
                  </div>
                </div>
              </div>

              <p className="text-xs text-gray-500">
                School Motto: <em>Dream, Persist and Succeed</em>.
              </p>
            </div>
          </div>
        )}

        {modalType === 'mission' && (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <SchoolBadge size="sm" />
              <div>
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider">
                  Guiding Philosophy
                </span>
                <h3 className="text-2xl font-bold font-serif-heading text-[#0A5C36]">
                  Mission, Vision & School Motto
                </h3>
              </div>
            </div>

            <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
              {/* Official Motto Banner */}
              <div className="p-5 rounded-xl bg-[#0A5C36] text-white text-center space-y-2">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#D4AF37]">
                  Official School Motto
                </span>
                <h4 className="text-2xl sm:text-3xl font-extrabold font-serif-heading text-white tracking-wide">
                  "DREAM, PERSIST AND SUCCEED"
                </h4>
                <p className="text-xs text-emerald-100 max-w-md mx-auto">
                  Encouraging every girl to envision bold futures, persevere through challenges with discipline, and achieve ultimate academic and moral triumph.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-gray-50 border-l-4 border-[#0A5C36]">
                  <h4 className="text-xs font-bold text-[#0A5C36] uppercase tracking-wider mb-1">
                    Our Mission
                  </h4>
                  <p className="text-xs text-gray-700 leading-relaxed">
                    {SCHOOL_INFO.mission}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-gray-50 border-l-4 border-[#D4AF37]">
                  <h4 className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-1">
                    Our Vision
                  </h4>
                  <p className="text-xs text-gray-700 leading-relaxed">
                    {SCHOOL_INFO.vision}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {modalType === 'christian-union' && (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <SchoolBadge size="sm" />
              <div>
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider">
                  Spiritual Life
                </span>
                <h3 className="text-2xl font-bold font-serif-heading text-[#0A5C36]">
                  Christian Union & Spiritual Life
                </h3>
              </div>
            </div>

            <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
              <p>
                Spiritual nourishment and moral uprightness are cornerstones of life at Ngecha Girls High School.
                Proudly sponsored by the <strong>Presbyterian Church of East Africa (PCEA)</strong>, our school nurtures students in biblical virtues, integrity, humility, and love for God and neighbor.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-lg border border-gray-200 bg-gray-50 space-y-1.5">
                  <h4 className="font-bold text-[#0A5C36]">Fellowship & Praise:</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Fellowships, worship sessions, praise rallies, and devotional gatherings are held for all students under PCEA church sponsorship.
                  </p>
                </div>

                <div className="p-3.5 rounded-lg border border-gray-200 bg-gray-50 space-y-1.5">
                  <h4 className="font-bold text-[#0A5C36]">Mentorship & Bible Study:</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Discipleship circles and Bible study groups where students discuss faith, character development, life choices, and mutual encouragement.
                  </p>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-xs text-emerald-950">
                <em>"Train up a child in the way she should go, and when she is old she will not depart from it."</em> (Proverbs 22:6)
              </div>
            </div>
          </div>
        )}

        {modalType === 'clubs' && (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <SchoolBadge size="sm" />
              <div>
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider">
                  Co-Curriculars
                </span>
                <h3 className="text-2xl font-bold font-serif-heading text-[#0A5C36]">
                  Student Clubs & Societies
                </h3>
              </div>
            </div>

            <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
              <p>
                Beyond the classroom, every girl is encouraged to join clubs to build public speaking,
                leadership, teamwork, and humanitarian service:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                <div className="p-3 rounded border border-gray-200">
                  <strong className="text-[#0A5C36]">Debate & Public Speaking Society:</strong> Regular participation in county debate championships.
                </div>
                <div className="p-3 rounded border border-gray-200">
                  <strong className="text-[#0A5C36]">Journalism & Creative Arts Club:</strong> School chronicle, creative writing, photography, and public address presentation.
                </div>
                <div className="p-3 rounded border border-gray-200">
                  <strong className="text-[#0A5C36]">Girl Guides & Scouting:</strong> Leadership camps, outdoor skills, and national parade drills.
                </div>
              </div>
            </div>
          </div>
        )}

        {modalType === 'sports' && (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <SchoolBadge size="sm" />
              <div>
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider">
                  Physical Wellness
                </span>
                <h3 className="text-2xl font-bold font-serif-heading text-[#0A5C36]">
                  Sports, Games & Athletics
                </h3>
              </div>
            </div>

            <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
              <p>
                Ngecha Girls High School promotes physical fitness, teamwork, and healthy competition
                through a rich athletics and games calendar:
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs font-bold">
                <div className="p-3 bg-gray-50 rounded border border-gray-200 text-gray-800">Football</div>
                <div className="p-3 bg-gray-50 rounded border border-gray-200 text-gray-800">Volleyball</div>
                <div className="p-3 bg-gray-50 rounded border border-gray-200 text-gray-800">Netball</div>
                <div className="p-3 bg-gray-50 rounded border border-gray-200 text-gray-800">Track & Athletics</div>
              </div>
            </div>
          </div>
        )}

        {modalType === 'sitemap' && (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <SchoolBadge size="sm" />
              <div>
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5" />
                  Website Architecture & Index
                </span>
                <h3 className="text-2xl font-bold font-serif-heading text-[#0A5C36]">
                  School Website Sitemap & Directory
                </h3>
              </div>
            </div>

            <div className="space-y-6 text-sm text-gray-600 leading-relaxed">
              <p>
                Browse all sections, academic resources, student life programs, and official contact channels of Ngecha Girls High School:
              </p>

              {/* Main Sections */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#0A5C36]" />
                  Main Portal Sections
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <a
                    href="#home"
                    onClick={onClose}
                    className="p-3 rounded-lg border border-gray-200 hover:border-[#0A5C36] hover:bg-emerald-50/50 transition-colors block"
                  >
                    <div className="font-bold text-gray-900">Home & Hero Banner</div>
                    <div className="text-gray-500">Christian foundation, motto & slider highlights</div>
                  </a>
                  <a
                    href="#principal"
                    onClick={onClose}
                    className="p-3 rounded-lg border border-gray-200 hover:border-[#0A5C36] hover:bg-emerald-50/50 transition-colors block"
                  >
                    <div className="font-bold text-gray-900">Principal's Welcome Address</div>
                    <div className="text-gray-500">Official message from the Office of the Principal</div>
                  </a>
                  <a
                    href="#about"
                    onClick={onClose}
                    className="p-3 rounded-lg border border-gray-200 hover:border-[#0A5C36] hover:bg-emerald-50/50 transition-colors block"
                  >
                    <div className="font-bold text-gray-900">About Our School & Pillars</div>
                    <div className="text-gray-500">Mission, Vision, PCEA sponsorship & values</div>
                  </a>
                  <a
                    href="#gallery"
                    onClick={onClose}
                    className="p-3 rounded-lg border border-gray-200 hover:border-[#0A5C36] hover:bg-emerald-50/50 transition-colors block"
                  >
                    <div className="font-bold text-gray-900">Campus Photo Gallery</div>
                    <div className="text-gray-500">Authentic Kenyan school life, science labs & sports</div>
                  </a>
                  <a
                    href="#contact"
                    onClick={onClose}
                    className="p-3 rounded-lg border border-gray-200 hover:border-[#0A5C36] hover:bg-emerald-50/50 transition-colors block sm:col-span-2"
                  >
                    <div className="font-bold text-gray-900">Location Map & Direct Office Directory</div>
                    <div className="text-gray-500">Campus coordinates (-1.168781, 36.670586), postal address & Direct Office Line</div>
                  </a>
                </div>
              </div>

              {/* Information Modals & Policy Pages */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-[#0A5C36]" />
                  Institutional Information & Guidelines
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                  <div className="p-2.5 rounded-lg bg-gray-50 border border-gray-200">
                    <span className="font-semibold text-gray-800">Day & Boarding Care</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-gray-50 border border-gray-200">
                    <span className="font-semibold text-gray-800">School Uniform Guide</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-gray-50 border border-gray-200">
                    <span className="font-semibold text-gray-800">Academic Departments</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-gray-50 border border-gray-200">
                    <span className="font-semibold text-gray-800">School Heritage & History</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-gray-50 border border-gray-200">
                    <span className="font-semibold text-gray-800">Board of Management</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-gray-50 border border-gray-200">
                    <span className="font-semibold text-gray-800">Christian Union (C.U.)</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-gray-50 border border-gray-200">
                    <span className="font-semibold text-gray-800">Clubs & Societies</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-gray-50 border border-gray-200">
                    <span className="font-semibold text-gray-800">Sports & Athletics</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-gray-50 border border-gray-200">
                    <span className="font-semibold text-gray-800">PCEA Church Sponsorship</span>
                  </div>
                </div>
              </div>

              {/* Machine-Readable XML Sitemap & Search Engine Links */}
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="font-bold text-xs text-emerald-950 flex items-center gap-1.5">
                    <FileCode className="w-4 h-4 text-[#0A5C36]" />
                    Search Engine XML Sitemap
                  </div>
                  <p className="text-[11px] text-emerald-800 mt-0.5">
                    Standard XML sitemap formatted for Google, Bing, and search crawlers.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href="/sitemap.xml"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#0A5C36] hover:bg-[#074528] text-white text-xs font-bold transition-colors"
                  >
                    <span>View sitemap.xml</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="/robots.txt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md bg-white border border-emerald-300 text-emerald-900 text-xs font-semibold hover:bg-emerald-100/50 transition-colors"
                  >
                    <span>robots.txt</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Modal Bottom Action */}
        <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-md bg-gray-100 text-xs font-semibold text-gray-700 hover:bg-gray-200 cursor-pointer transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
