import React from 'react';
import { Mail, Phone, ExternalLink, Sparkles, MessageCircle } from 'lucide-react';
import { SCHOOL_INFO } from '../data';

interface TopBarProps {
  onOpenAdmissions: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ onOpenAdmissions }) => {
  return (
    <div className="bg-[#074528] text-white text-xs border-b border-[#0A5C36]/60 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-between gap-3">
        {/* Contact Links */}
        <div className="flex items-center flex-wrap gap-4 sm:gap-6 text-gray-200">
          <a
            href={`mailto:${SCHOOL_INFO.email}`}
            className="flex items-center gap-1.5 hover:text-[#D4AF37] transition-colors"
            title="Email Ngecha Girls High School"
          >
            <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="hidden sm:inline font-medium">{SCHOOL_INFO.email}</span>
            <span className="sm:hidden font-medium">Email Us</span>
          </a>

          <a
            href={`tel:${SCHOOL_INFO.phone}`}
            className="flex items-center gap-1.5 hover:text-[#D4AF37] transition-colors"
            title="Call the Principal / Admissions Office"
          >
            <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="font-medium">{SCHOOL_INFO.phoneDisplay}</span>
          </a>

          <div className="hidden lg:flex items-center gap-1.5 text-emerald-200/80 border-l border-emerald-700/50 pl-4">
            <span className="font-semibold text-[#D4AF37]">KNEC Code:</span>
            <span>{SCHOOL_INFO.knecCode}</span>
            <span className="mx-1">•</span>
            <span className="font-semibold text-[#D4AF37]">UIC:</span>
            <span>{SCHOOL_INFO.uicCode}</span>
          </div>
        </div>

        {/* Admissions Announcement & Socials */}
        <div className="flex items-center gap-3 sm:gap-4 ml-auto">
          <button
            onClick={onOpenAdmissions}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#D4AF37] hover:bg-[#b89324] text-[#0A5C36] font-bold tracking-wide transition-all shadow-sm cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>Admissions 2027 Open</span>
          </button>

          {/* Social Links */}
          <div className="flex items-center gap-2 text-gray-200 border-l border-emerald-700/60 pl-3">
            {/* Facebook Icon */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 rounded hover:bg-[#0A5C36] hover:text-[#D4AF37] transition-colors"
              title="Official Facebook Page"
              aria-label="Facebook"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>

            {/* WhatsApp Icon */}
            <a
              href={SCHOOL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 rounded hover:bg-[#0A5C36] hover:text-[#25D366] transition-colors"
              title="Chat with Us on WhatsApp (0722947935)"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
