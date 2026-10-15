import React from 'react';
import { MapPin, Phone, Mail, Clock, Building, ExternalLink } from 'lucide-react';
import { SCHOOL_INFO } from '../data';

export const MapAndContact: React.FC = () => {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-gray-50/60 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#E8F5E9] text-[#0A5C36] text-xs font-extrabold uppercase tracking-widest border border-[#0A5C36]/20">
            <span>Location & Office Directory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight font-serif-heading">
            Visit Our School
          </h2>
          <p className="text-base text-gray-600">
            We warmly welcome parents, guardians, and education stakeholders to Ngecha Girls High School.
          </p>
        </div>

        {/* Contact Info Cards & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* School Office Information Box */}
          <div className="lg:col-span-6 bg-white rounded-xl p-6 sm:p-8 border border-gray-200 shadow-sm flex flex-col justify-between space-y-6">
            <div>
              <h3 className="text-xl font-bold font-serif-heading text-[#0A5C36] border-b border-gray-100 pb-3">
                Official School Contacts
              </h3>

              <div className="space-y-5 text-sm mt-5">
                {/* Location */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-[#E8F5E9] text-[#0A5C36] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-gray-400">
                      Physical Location
                    </span>
                    <span className="font-semibold text-gray-900 block mt-0.5">
                      {SCHOOL_INFO.location}
                    </span>
                    <span className="text-xs text-gray-500 block mt-0.5">
                      Off Limuru Road, Kiambu County, Kenya
                    </span>
                  </div>
                </div>

                {/* Postal Address */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-[#E8F5E9] text-[#0A5C36] shrink-0">
                    <Building className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-gray-400">
                      Postal Address
                    </span>
                    <span className="font-semibold text-gray-900 block mt-0.5">
                      {SCHOOL_INFO.postalAddress}
                    </span>
                  </div>
                </div>

                {/* Direct Office Line */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-[#E8F5E9] text-[#0A5C36] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-gray-400">
                      Direct Office Line
                    </span>
                    <a
                      href={`tel:${SCHOOL_INFO.phone}`}
                      className="font-bold text-[#0A5C36] hover:underline text-base block mt-0.5"
                    >
                      {SCHOOL_INFO.phoneDisplay}
                    </a>
                    <span className="text-xs text-gray-500 block">
                      Direct Office Line
                    </span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-[#E8F5E9] text-[#0A5C36] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-gray-400">
                      Official School Email
                    </span>
                    <a
                      href={`mailto:${SCHOOL_INFO.email}`}
                      className="font-medium text-gray-900 hover:text-[#0A5C36] break-all block mt-0.5"
                    >
                      {SCHOOL_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-[#E8F5E9] text-[#0A5C36] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-gray-400">
                      Office Hours
                    </span>
                    <span className="font-semibold text-gray-900 block mt-0.5">
                      Monday – Friday: 8:00 AM – 5:00 PM
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Ministry Accreditation Badge */}
            <div className="p-3.5 rounded-lg bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="font-bold">Accreditation:</span> Registered KNEC Exam Center
              </div>
              <div>
                <span className="font-bold">Sponsor:</span> PCEA Church
              </div>
            </div>
          </div>

          {/* Location Map (Coordinates: -1.168780998659567, 36.67058604955375) */}
          <div className="lg:col-span-6 bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm flex flex-col">
            <div className="p-4 bg-gray-50 border-b border-gray-200 flex items-center justify-between">
              <span className="text-xs font-bold text-gray-700 uppercase tracking-wider flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#0A5C36]" />
                Ngecha Girls High School Location
              </span>
              <a
                href={SCHOOL_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A5C36] hover:text-[#D4AF37] transition-colors"
                title="Open exact coordinates in Google Maps"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
            <div className="relative w-full flex-grow min-h-[360px] bg-gray-200">
              <iframe
                title="Ngecha Girls High School Exact Location Map"
                src="https://maps.google.com/maps?q=-1.168780998659567,36.67058604955375&hl=en&z=17&output=embed"
                className="w-full h-full border-0 filter contrast-[1.02] min-h-[360px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
