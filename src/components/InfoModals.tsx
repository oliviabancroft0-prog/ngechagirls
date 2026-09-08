import React from 'react';
import { X, ExternalLink, Download, Phone, CheckCircle, Award, BookOpen, Heart, Users, Shield, Sparkles } from 'lucide-react';
import { SCHOOL_INFO, ACADEMIC_DEPARTMENTS } from '../data';
import { SchoolBadge } from './SchoolBadge';

interface InfoModalsProps {
  modalType: string | null;
  onClose: () => void;
  onOpenAdmissions: () => void;
}

export const InfoModals: React.FC<InfoModalsProps> = ({
  modalType,
  onClose,
  onOpenAdmissions,
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
        {modalType === 'admissions' && (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <SchoolBadge size="sm" />
              <div>
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider">
                  2027 Academic Year
                </span>
                <h3 className="text-2xl font-bold font-serif-heading text-[#0A5C36]">
                  Admissions: Grade 10 Intake & Transfers
                </h3>
              </div>
            </div>

            <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
              <p>
                Ngecha Girls High School welcomes prospective students for the <strong>2027 Academic Year</strong>.
                As a Christian-based Public Sub-County Secondary School located in Ngecha Town, Limuru,
                we offer both <strong>Boarding</strong> and <strong>Day Scholar</strong> placements.
              </p>

              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 space-y-2 text-xs text-emerald-950">
                <div className="font-bold text-sm text-[#0A5C36] flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                  <span>How to Apply:</span>
                </div>
                <p>
                  1. Fill out the official online application form via Google Forms or contact the school office directly.
                </p>
                <p>
                  2. Visit the school administration block in Ngecha Town with student birth certificate, KCPE/Assessment result slip, and recent passport photos.
                </p>
                <p>
                  3. Join our boarding or day scholar family under the loving mentorship of our dedicated faculty.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-wrap items-center gap-3">
                <a
                  href={SCHOOL_INFO.admissionsFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#0A5C36] hover:bg-[#074528] text-white font-bold text-xs shadow cursor-pointer"
                >
                  <span>Open Google Form Application</span>
                  <ExternalLink className="w-4 h-4 text-[#D4AF37]" />
                </a>

                <a
                  href={`tel:${SCHOOL_INFO.phone}`}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-gray-300 text-gray-700 font-semibold text-xs hover:bg-gray-50"
                >
                  <Phone className="w-4 h-4 text-[#0A5C36]" />
                  <span>Call Admissions Office: {SCHOOL_INFO.phoneDisplay}</span>
                </a>
              </div>
            </div>
          </div>
        )}

        {modalType === 'fees' && (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <SchoolBadge size="sm" />
              <div>
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider">
                  Financial Transparency
                </span>
                <h3 className="text-2xl font-bold font-serif-heading text-[#0A5C36]">
                  Approved Fees Structure & Guidelines
                </h3>
              </div>
            </div>

            <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
              <p>
                Ngecha Girls High School adheres strictly to the Ministry of Education fee guidelines
                for Public Secondary Schools. The Kenyan Government provides Free Day Secondary Education (FDSE)
                tuition capitation for all enrolled students.
              </p>

              <div className="border border-gray-200 rounded-xl overflow-hidden shadow-xs">
                <table className="w-full text-xs text-left">
                  <thead className="bg-[#0A5C36] text-white">
                    <tr>
                      <th className="p-3">Category</th>
                      <th className="p-3">Government Capitation</th>
                      <th className="p-3">Parent Boarding / Lunch Fee</th>
                      <th className="p-3">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="p-3 font-bold text-gray-900">Day Scholars</td>
                      <td className="p-3 text-emerald-700 font-semibold">100% Subsidized Tuition</td>
                      <td className="p-3 font-semibold text-gray-800">Approved Termly Lunch Levy Only</td>
                      <td className="p-3"><span className="px-2 py-0.5 rounded bg-green-100 text-green-800 font-bold">Open</span></td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="p-3 font-bold text-gray-900">Boarding Scholars</td>
                      <td className="p-3 text-emerald-700 font-semibold">100% Subsidized Tuition</td>
                      <td className="p-3 font-semibold text-gray-800">MoE Gazette Boarding Cap (Accommodation & Meals)</td>
                      <td className="p-3"><span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">Limited Slots</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-4 rounded-lg bg-gray-50 border-l-4 border-[#0A5C36] text-xs text-gray-700 space-y-1">
                <p><strong>Payment Channels:</strong> All school fees are payable directly through official School Bank Accounts or the designated Lipa Na M-Pesa School Paybill.</p>
                <p><strong>Fee Inquiries:</strong> Contact the Bursar or Principal Hellen Kahoro at <strong>{SCHOOL_INFO.phoneDisplay}</strong> for the official joining fees circular.</p>
              </div>
            </div>
          </div>
        )}

        {modalType === 'requirements' && (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <SchoolBadge size="sm" />
              <div>
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider">
                  Admission Requirements
                </span>
                <h3 className="text-2xl font-bold font-serif-heading text-[#0A5C36]">
                  Grade 10 Joining Checklist & Uniform
                </h3>
              </div>
            </div>

            <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
              <p>
                Upon selection or admission offer, candidates must present the following documentation
                and items during reporting day:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-lg border border-gray-200 bg-gray-50 space-y-1.5">
                  <h4 className="font-bold text-[#0A5C36] flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-[#D4AF37]" />
                    Academic & Identity Documents
                  </h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Original & Copy of Assessment / KCPE Slip</li>
                    <li>Birth Certificate (Certified Copy)</li>
                    <li>Previous School Leaving Certificate</li>
                    <li>4 Recent Passport Size Photographs</li>
                  </ul>
                </div>

                <div className="p-3 rounded-lg border border-gray-200 bg-gray-50 space-y-1.5">
                  <h4 className="font-bold text-[#0A5C36] flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-[#D4AF37]" />
                    Personal & Medical Care
                  </h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Certified Medical Examination Form</li>
                    <li>National Health Insurance (SHA) Details</li>
                    <li>Emergency Guardian Contact Details</li>
                    <li>Prescription notices (if applicable)</li>
                  </ul>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-amber-50 border border-amber-200 text-xs text-amber-900">
                <strong>School Uniform:</strong> Official bottle-green blazers, pleated skirts, ties, and branded sweaters are fitted directly at the school uniform distribution center in Ngecha.
              </div>
            </div>
          </div>
        )}

        {modalType === 'kcse' && (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <SchoolBadge size="sm" />
              <div>
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider">
                  Academic Achievement
                </span>
                <h3 className="text-2xl font-bold font-serif-heading text-[#0A5C36]">
                  KCSE Performance & Academic Standards
                </h3>
              </div>
            </div>

            <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
              <p>
                At Ngecha Girls High School, our academic program focuses on subject mastery,
                scientific inquiry, and consistent examination preparedness.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-center">
                  <div className="text-3xl font-extrabold text-[#0A5C36] font-serif-heading">100%</div>
                  <div className="text-xs font-bold text-gray-800 mt-1">Transition Focus</div>
                  <p className="text-[11px] text-gray-500 mt-0.5">Every student guided to University, TVET, or Professional College</p>
                </div>

                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-center">
                  <div className="text-3xl font-extrabold text-[#D4AF37] font-serif-heading">11211339</div>
                  <div className="text-xs font-bold text-gray-800 mt-1">KNEC Center Code</div>
                  <p className="text-[11px] text-gray-500 mt-0.5">Fully accredited national examination venue with modern labs</p>
                </div>

                <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-center">
                  <div className="text-3xl font-extrabold text-blue-700 font-serif-heading">100%</div>
                  <div className="text-xs font-bold text-gray-800 mt-1">Syllabus Coverage</div>
                  <p className="text-[11px] text-gray-500 mt-0.5">Early completion allowing intensive termly revisions and test clinics</p>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-gray-50 border border-gray-200 text-xs text-gray-700 space-y-2">
                <h4 className="font-bold text-[#0A5C36]">Academic Support Strategies:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Weekend and evening supervised preps for boarding scholars</li>
                  <li>Dedicated science practicals in Biology, Chemistry, and Physics</li>
                  <li>Inter-school academic symposia across Kiambu County</li>
                  <li>Mentorship talks from university alumni and female STEM professionals</li>
                </ul>
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
                  Academic Faculties
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
                  Heritage & Governance
                </span>
                <h3 className="text-2xl font-bold font-serif-heading text-[#0A5C36]">
                  Our History, Leadership & Board
                </h3>
              </div>
            </div>

            <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
              <p>
                <strong>Ngecha Girls High School</strong> was founded in Ngecha Town, Limuru, Kiambu County
                out of a community vision to create an accessible, high-standard secondary school for young women.
                Through close partnership with the local community, Christian churches, and the Ministry of Education,
                the school has grown into a beacon of hope and discipline.
              </p>

              <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 space-y-2 text-xs">
                <h4 className="font-bold text-[#0A5C36] text-sm">Board of Management (BOM) & Governance:</h4>
                <p>
                  The Board of Management comprises respected professionals, community leaders, church sponsors,
                  and educational experts who provide strategic oversight, financial stewardship, and infrastructural development.
                </p>
                <div className="grid grid-cols-2 gap-2 pt-1 font-medium text-gray-700">
                  <div>• Principal & Secretary: Hellen Kahoro</div>
                  <div>• Parents Association (PA) Chair</div>
                  <div>• Church Sponsor Representative</div>
                  <div>• Ministry of Education Representative</div>
                </div>
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
                infrastructure expansion, academic performance, and moral standards in accordance with the Basic Education Act.
              </p>

              <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 space-y-3 text-xs">
                <h4 className="font-bold text-[#0A5C36] text-sm">Key Administrative Leadership:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 font-medium text-gray-700">
                  <div className="p-2.5 rounded bg-white border border-gray-200">
                    <strong className="block text-gray-900">Principal & BOM Secretary:</strong>
                    <span>Hellen Kahoro</span>
                  </div>
                  <div className="p-2.5 rounded bg-white border border-gray-200">
                    <strong className="block text-gray-900">Parents Association (PA) Chair:</strong>
                    <span>Elected Parent Representative</span>
                  </div>
                  <div className="p-2.5 rounded bg-white border border-gray-200">
                    <strong className="block text-gray-900">Church Sponsor Representative:</strong>
                    <span>Christian Pastoral Oversight</span>
                  </div>
                  <div className="p-2.5 rounded bg-white border border-gray-200">
                    <strong className="block text-gray-900">Sub-County Education Director:</strong>
                    <span>Ministry of Education, Limuru</span>
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

              <div className="p-4 rounded-lg bg-emerald-50 border border-emerald-200 text-xs text-emerald-900">
                <strong>Core Identity:</strong> Public Christian-Based Secondary School for Girls, Limuru, Kiambu County.
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
                  Christian Union & Pastoral Ministry
                </h3>
              </div>
            </div>

            <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
              <p>
                Spiritual growth is at the center of life at Ngecha Girls. Grounded in Christian principles,
                our students are encouraged to build a personal walk of faith, integrity, and love for God and neighbor.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-lg border border-gray-200 bg-gray-50 space-y-1">
                  <h4 className="font-bold text-[#0A5C36]">Weekly Fellowship & Praise:</h4>
                  <p className="text-gray-600">
                    Sunday morning worship services, Friday evening praise rallies, and daily morning devotionals led by student chaplains.
                  </p>
                </div>

                <div className="p-3 rounded-lg border border-gray-200 bg-gray-50 space-y-1">
                  <h4 className="font-bold text-[#0A5C36]">Peer Mentorship & Bible Study:</h4>
                  <p className="text-gray-600">
                    Small group discipleship circles where girls discuss faith, character, peer pressure, and academic diligence.
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
                Beyond the classroom, every girl is encouraged to join at least two clubs to build public speaking,
                leadership, teamwork, and humanitarian service:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                <div className="p-3 rounded border border-gray-200">
                  <strong className="text-[#0A5C36]">Debate & Public Speaking Society:</strong> Regular participation in county debate championships.
                </div>
                <div className="p-3 rounded border border-gray-200">
                  <strong className="text-[#0A5C36]">Science & STEM Club:</strong> Robotics, chemistry practical exhibitions, and Kenya Science and Engineering Fair.
                </div>
                <div className="p-3 rounded border border-gray-200">
                  <strong className="text-[#0A5C36]">Red Cross Society:</strong> First aid, community outreach, and blood donation drives.
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
                <div className="p-3 bg-gray-50 rounded border border-gray-200 text-gray-800">Volleyball</div>
                <div className="p-3 bg-gray-50 rounded border border-gray-200 text-gray-800">Netball</div>
                <div className="p-3 bg-gray-50 rounded border border-gray-200 text-gray-800">Track & Athletics</div>
                <div className="p-3 bg-gray-50 rounded border border-gray-200 text-gray-800">Table Tennis & Badminton</div>
              </div>

              <p className="text-xs text-gray-500">
                Our teams compete actively in Sub-County and Kiambu County secondary school sports associations.
              </p>
            </div>
          </div>
        )}

        {/* Modal Bottom Action */}
        <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-md border border-gray-300 text-xs font-semibold text-gray-700 hover:bg-gray-50 cursor-pointer"
          >
            Close
          </button>

          <button
            onClick={() => {
              onClose();
              onOpenAdmissions();
            }}
            className="px-5 py-2 rounded-md bg-[#0A5C36] hover:bg-[#074528] text-white text-xs font-bold shadow cursor-pointer"
          >
            Apply for 2027 Admissions
          </button>
        </div>
      </div>
    </div>
  );
};
