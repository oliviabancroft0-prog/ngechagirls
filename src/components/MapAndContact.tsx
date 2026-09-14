import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, AlertCircle, Building, Shield } from 'lucide-react';
import { SCHOOL_INFO } from '../data';

export const MapAndContact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    studentLevel: 'Secondary School Inquiry',
    subject: 'General School Inquiry',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate responsive submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-gray-50/60 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#E8F5E9] text-[#0A5C36] text-xs font-extrabold uppercase tracking-widest border border-[#0A5C36]/20">
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight font-serif-heading">
            Visit Us or Inquire Today
          </h2>
          <p className="text-base text-gray-600">
            We warmly welcome parents, prospective students, and education stakeholders to Ngecha Town, Limuru.
          </p>
        </div>

        {/* Contact Info Cards + Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Official Institutional Directory & Map */}
          <div className="lg:col-span-5 space-y-6">
            {/* School Office Information Box */}
            <div className="bg-white rounded-xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-6">
              <h3 className="text-xl font-bold font-serif-heading text-[#0A5C36] border-b border-gray-100 pb-3">
                Official School Contacts
              </h3>

              <div className="space-y-4 text-sm">
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
                      Off Limuru Road, Kiambu County
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

                {/* Principal & Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-[#E8F5E9] text-[#0A5C36] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-gray-400">
                      Telephone / Principal: Hellen Kahoro
                    </span>
                    <a
                      href={`tel:${SCHOOL_INFO.phone}`}
                      className="font-bold text-[#0A5C36] hover:underline text-base block mt-0.5"
                    >
                      {SCHOOL_INFO.phoneDisplay}
                    </a>
                    <span className="text-xs text-gray-500 block">
                      Direct Principal's Office Line
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
                    <span className="text-xs text-gray-500 block">
                      Saturday (Office Desk): 9:00 AM – 1:00 PM
                    </span>
                  </div>
                </div>
              </div>

              {/* Ministry Accreditation Badge */}
              <div className="p-3.5 rounded-lg bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 flex items-center justify-between">
                <div>
                  <span className="font-bold">Accreditation:</span> Registered KNEC Exam Center
                </div>
                <div>
                  <span className="font-bold">Sponsor:</span> PCEA Church
                </div>
              </div>
            </div>

            {/* Location Map (Ngecha Town, Limuru) */}
            <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm">
              <div className="p-4 bg-gray-50 border-b border-gray-200 flex items-center justify-between">
                <span className="text-xs font-bold text-gray-700 uppercase tracking-wider flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#0A5C36]" />
                  Ngecha Town Map (Limuru, Kiambu)
                </span>
                <span className="text-[11px] font-semibold text-[#0A5C36]">Kenya</span>
              </div>
              <div className="relative aspect-[16/10] w-full bg-gray-200">
                <iframe
                  title="Ngecha Girls High School Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15956.166687498305!2d36.678385!3d-1.155716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f23cfcf570f71%3A0x6b4f74d0dbd34a47!2sNgecha%2C%20Kenya!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske"
                  className="w-full h-full border-0 filter contrast-[1.02]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Contact & Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-xl p-8 sm:p-10 border border-gray-200 shadow-sm">
              <div className="mb-6">
                <h3 className="text-2xl font-bold font-serif-heading text-gray-900">
                  Send an Inquiry
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  Fill out the form below and the school administration will respond via phone or email.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-4 animate-in fade-in">
                  <div className="w-14 h-14 rounded-full bg-[#0A5C36] text-white flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-8 h-8 text-[#D4AF37]" />
                  </div>
                  <h4 className="text-xl font-bold font-serif-heading text-[#0A5C36]">
                    Inquiry Received Successfully!
                  </h4>
                  <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>. Your inquiry regarding{' '}
                    <em>{formData.subject}</em> has been forwarded to Principal Hellen Kahoro and the administrative office.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          phone: '',
                          email: '',
                          studentLevel: 'Secondary School Inquiry',
                          subject: 'General School Inquiry',
                          message: '',
                        });
                      }}
                      className="px-5 py-2 rounded-md bg-[#0A5C36] text-white text-xs font-bold cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Parent / Guardian Name */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                        Parent / Guardian Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Mary Wanjiku"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0A5C36] focus:border-transparent text-sm transition-all"
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 07XXXXXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0A5C36] focus:border-transparent text-sm transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Email Address */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. parent@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0A5C36] focus:border-transparent text-sm transition-all"
                      />
                    </div>

                    {/* Level / Class of Interest */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                        Area of Interest
                      </label>
                      <select
                        value={formData.studentLevel}
                        onChange={(e) => setFormData({ ...formData, studentLevel: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0A5C36] focus:border-transparent text-sm bg-white"
                      >
                        <option value="Secondary School Inquiry">Secondary School Program</option>
                        <option value="Boarding Facilities Inquiry">Boarding Facilities</option>
                        <option value="Day Scholar Program">Day Scholar Program</option>
                        <option value="General Inquiry">General Information</option>
                      </select>
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                      Inquiry Category
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0A5C36] focus:border-transparent text-sm bg-white"
                    >
                      <option value="General School Inquiry">General School Inquiry</option>
                      <option value="Curriculum & CBE / KCSE">Curriculum & Academic Inquiries</option>
                      <option value="Boarding Accommodation">Boarding Accommodation</option>
                      <option value="Christian Union & Student Life">Christian Union & Student Life</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                      Detailed Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Please share any specific inquiries or messages for the administration..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0A5C36] focus:border-transparent text-sm transition-all"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-lg bg-[#0A5C36] hover:bg-[#074528] text-white font-bold text-sm shadow-md transition-all cursor-pointer disabled:opacity-70"
                    >
                      {loading ? (
                        <span>Submitting...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-[#D4AF37]" />
                          <span>Submit Official Inquiry</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
