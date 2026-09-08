import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { SCHOOL_INFO } from '../data';

export const WhatsAppFloating: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <aside aria-label="WhatsApp quick chat" className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Friendly Tooltip */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white text-gray-800 text-xs py-2 px-3.5 rounded-full shadow-lg border border-gray-200 animate-in fade-in slide-in-from-right-3">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span className="font-semibold text-gray-700">Admissions Chat (0722947935)</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-gray-400 hover:text-gray-600 p-0.5 ml-1 cursor-pointer"
            aria-label="Dismiss chat tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={SCHOOL_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
        title="Chat on WhatsApp with Ngecha Girls High School (0722947935)"
        aria-label="WhatsApp Chat"
      >
        {/* Pulsing ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />

        {/* WhatsApp SVG Icon */}
        <svg
          className="w-7 h-7 fill-current transition-transform group-hover:rotate-12"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.031 0c-6.627 0-12 5.373-12 12 0 2.159.57 4.187 1.564 5.941l-1.595 5.825 5.973-1.567c1.703.929 3.652 1.467 5.727 1.467 6.627 0 12-5.373 12-12s-5.373-12-12-12zm6.279 17.086c-.261.734-1.298 1.34-1.799 1.393-.483.051-1.096.074-1.767-.142-.429-.138-.981-.321-1.691-.63-2.969-1.293-4.908-4.321-5.056-4.519-.148-.198-1.207-1.606-1.207-3.064 0-1.458.762-2.176 1.033-2.473.271-.297.591-.371.788-.371.197 0 .394.002.566.01.183.008.428-.069.668.508.249.599.851 2.079.925 2.231.074.152.123.329.025.526-.099.197-.148.32-.295.493-.148.173-.31.387-.443.52-.148.148-.303.31-.131.606.172.296.764 1.258 1.637 2.036 1.124 1.002 2.073 1.312 2.368 1.46.295.148.468.123.64-.074.172-.197.739-.861.936-1.157.197-.296.394-.247.665-.148.271.099 1.724.813 2.02 961.296.148.493.222.566.345.074.123.074.714-.187 1.448z" />
        </svg>
      </a>
    </aside>
  );
};
