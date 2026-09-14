import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, X, ArrowRight, Sparkles, BookOpen, Heart, Shield, GraduationCap, Phone } from 'lucide-react';
import { SchoolBadge } from './SchoolBadge';
import { SCHOOL_INFO } from '../data';

interface NavbarProps {
  onOpenModal: (type: string) => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenModal,
  onNavigateSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (menuName: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(menuName);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  const navItems = [
    {
      label: 'Home',
      action: () => onNavigateSection('hero'),
    },
    {
      label: 'Academics',
      dropdown: [
        { title: 'Academic Departments', desc: 'Sciences, Mathematics, Languages, Humanities', action: () => onOpenModal('departments') },
      ],
    },
    {
      label: 'Student Life',
      dropdown: [
        { title: 'Day & Boarding Facilities', desc: 'Day scholar options & secure boarding dorms', action: () => onOpenModal('boarding') },
        { title: 'Christian Union', desc: 'Spiritual foundation & fellowships', action: () => onOpenModal('christian-union') },
        { title: 'Clubs & Societies', desc: 'Debate, Science & Robotics, Girl Guides, Scouting', action: () => onOpenModal('clubs') },
        { title: 'Sports & Athletics', desc: 'Athletics, Volleyball, Netball & wellness', action: () => onOpenModal('sports') },
      ],
    },
    {
      label: 'Gallery',
      action: () => onNavigateSection('gallery'),
    },
    {
      label: 'Contact Us',
      action: () => onNavigateSection('contact'),
    },
  ];

  return (
    <header
      className={`sticky top-0 z-40 bg-white/95 backdrop-blur-md transition-all duration-300 ${
        isScrolled ? 'shadow-md py-2.5 border-b border-gray-100' : 'py-3.5 border-b border-gray-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & School Name */}
          <button
            onClick={() => onNavigateSection('hero')}
            className="flex items-center gap-3.5 text-left group cursor-pointer focus:outline-none"
            aria-label="Ngecha Girls High School Home"
          >
            <SchoolBadge size={isScrolled ? 'md' : 'lg'} />
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#0A5C36] font-serif-heading">
                  Ngecha Girls
                </span>
                <span className="hidden sm:inline-block px-1.5 py-0.5 rounded text-[10px] font-bold tracking-wider bg-[#E8F5E9] text-[#0A5C36] border border-[#0A5C36]/20 uppercase">
                  High School
                </span>
              </div>
              <div className="text-[11px] sm:text-xs text-gray-500 font-medium tracking-wide flex items-center gap-2">
                <span className="text-[#0A5C36] font-bold">Dream, Persist and Succeed</span>
                <span className="text-gray-300">•</span>
                <span>Limuru, Kiambu</span>
              </div>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1" aria-label="Main Navigation">
            {navItems.map((item) => {
              const hasDropdown = Boolean(item.dropdown);
              const isOpen = activeDropdown === item.label;

              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => hasDropdown && handleMouseEnter(item.label)}
                  onMouseLeave={() => hasDropdown && handleMouseLeave()}
                >
                  <button
                    onClick={() => {
                      if (!hasDropdown && item.action) {
                        item.action();
                      } else {
                        setActiveDropdown(isOpen ? null : item.label);
                      }
                    }}
                    className={`flex items-center gap-1 px-3 py-2 text-sm font-semibold rounded-md transition-colors duration-150 cursor-pointer ${
                      isOpen
                        ? 'text-[#0A5C36] bg-[#E8F5E9]'
                        : 'text-gray-700 hover:text-[#0A5C36] hover:bg-gray-50'
                    }`}
                  >
                    <span>{item.label}</span>
                    {hasDropdown && (
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 text-gray-400 ${
                          isOpen ? 'rotate-180 text-[#0A5C36]' : ''
                        }`}
                      />
                    )}
                  </button>

                  {/* Dropdown Menu */}
                  {hasDropdown && item.dropdown && isOpen && (
                    <div className="absolute top-full left-0 w-72 bg-white rounded-lg shadow-xl border border-gray-100 py-2 mt-1 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                      <div className="px-3 py-1.5 border-b border-gray-100 mb-1">
                        <span className="text-[10px] font-bold tracking-wider uppercase text-[#0A5C36]">
                          {item.label} Overview
                        </span>
                      </div>
                      {item.dropdown.map((subItem) => (
                        <button
                          key={subItem.title}
                          onClick={() => {
                            setActiveDropdown(null);
                            subItem.action();
                          }}
                          className="w-full text-left px-3.5 py-2.5 hover:bg-[#E8F5E9]/60 group transition-colors flex flex-col cursor-pointer"
                        >
                          <span className="text-sm font-bold text-gray-800 group-hover:text-[#0A5C36] flex items-center justify-between">
                            {subItem.title}
                            <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#D4AF37]" />
                          </span>
                          {subItem.desc && (
                            <span className="text-xs text-gray-500 mt-0.5 line-clamp-1">
                              {subItem.desc}
                            </span>
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Header Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onNavigateSection('contact')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#0A5C36] hover:bg-[#074528] text-white text-sm font-bold shadow-sm hover:shadow-md transition-all cursor-pointer border border-[#0A5C36]"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={() => onNavigateSection('contact')}
              className="sm:hidden px-3 py-1.5 rounded text-xs font-bold bg-[#0A5C36] text-white"
            >
              Contact
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-[#0A5C36] hover:bg-gray-100 focus:outline-none cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-gray-200 shadow-xl max-h-[85vh] overflow-y-auto px-4 pt-3 pb-6 animate-in slide-in-from-top-3 duration-200">
          <div className="space-y-1">
            {navItems.map((item) => {
              const hasDropdown = Boolean(item.dropdown);
              const isExpanded = mobileExpanded === item.label;

              return (
                <div key={item.label} className="border-b border-gray-100 last:border-none py-1">
                  {hasDropdown ? (
                    <div>
                      <button
                        onClick={() => setMobileExpanded(isExpanded ? null : item.label)}
                        className="w-full flex items-center justify-between py-2 text-base font-semibold text-gray-800"
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isExpanded ? 'rotate-180 text-[#0A5C36]' : 'text-gray-400'
                          }`}
                        />
                      </button>
                      {isExpanded && item.dropdown && (
                        <div className="pl-3 py-1 space-y-1 bg-[#E8F5E9]/30 rounded-md my-1">
                          {item.dropdown.map((sub) => (
                            <button
                              key={sub.title}
                              onClick={() => {
                                setMobileMenuOpen(false);
                                sub.action();
                              }}
                              className="w-full text-left py-2 px-2 text-sm text-gray-700 hover:text-[#0A5C36] flex items-center justify-between"
                            >
                              <div>
                                <div className="font-medium text-gray-900">{sub.title}</div>
                                {sub.desc && <div className="text-xs text-gray-500">{sub.desc}</div>}
                              </div>
                              <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <button
                      onClick={() => {
                        setMobileMenuOpen(false);
                        if (item.action) item.action();
                      }}
                      className="w-full text-left py-2 text-base font-semibold text-gray-800 hover:text-[#0A5C36]"
                    >
                      {item.label}
                    </button>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-5 pt-4 border-t border-gray-200 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigateSection('contact');
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-md bg-[#0A5C36] text-white font-bold shadow hover:bg-[#074528] cursor-pointer"
            >
              <Phone className="w-4 h-4 text-[#D4AF37]" />
              <span>Contact Administration</span>
            </button>
            <div className="flex justify-center text-xs text-gray-500 gap-4">
              <span>Principal's Office</span>
              <span>•</span>
              <a href={`tel:${SCHOOL_INFO.phone}`} className="text-[#0A5C36] font-semibold">
                {SCHOOL_INFO.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
