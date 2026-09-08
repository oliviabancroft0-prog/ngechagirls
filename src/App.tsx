import React, { useState } from 'react';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { HeroSlider } from './components/HeroSlider';
import { PrincipalWelcome } from './components/PrincipalWelcome';
import { AboutAndStats } from './components/AboutAndStats';
import { GallerySection } from './components/GallerySection';
import { MapAndContact } from './components/MapAndContact';
import { Footer } from './components/Footer';
import { WhatsAppFloating } from './components/WhatsAppFloating';
import { InfoModals } from './components/InfoModals';

export default function App() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const handleOpenAdmissions = () => {
    setActiveModal('admissions');
  };

  const handleOpenResults = () => {
    setActiveModal('kcse');
  };

  const handleOpenModal = (modalKey: string) => {
    setActiveModal(modalKey);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };

  const handleNavigateSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#1A1A1A]">
      {/* 1. Top Bar */}
      <TopBar onOpenAdmissions={handleOpenAdmissions} />

      {/* 2. Sticky Header / Navigation with Multi-Academy Trust style dropdowns */}
      <Navbar
        onOpenAdmissions={handleOpenAdmissions}
        onOpenModal={handleOpenModal}
        onNavigateSection={handleNavigateSection}
      />

      {/* Main Content Sections (Strictly in ordered structure) */}
      <main className="flex-grow">
        {/* Section 1: Hero Slider with Cross & Empowering Young Women in Faith & Knowledge */}
        <HeroSlider
          onOpenAdmissions={handleOpenAdmissions}
          onOpenResults={handleOpenResults}
        />

        {/* Section 2: Welcome from Principal Hellen Kahoro with official address */}
        <PrincipalWelcome
          onOpenAdmissions={handleOpenAdmissions}
          onOpenContact={() => handleNavigateSection('contact')}
        />

        {/* Section 3: About Snippet + Stats Bar (100% Transition, Accredited Center, Pastoral Care) */}
        <AboutAndStats
          onOpenAdmissions={handleOpenAdmissions}
          onOpenModal={handleOpenModal}
        />

        {/* Gallery Section: Authentic Kenyan school life */}
        <GallerySection />

        {/* Section 7: Location Map (Ngecha Town, Limuru) + Contact form */}
        <MapAndContact />
      </main>

      {/* 4. Footer (Trust style - dark green): 4 columns */}
      <Footer
        onOpenAdmissions={handleOpenAdmissions}
        onOpenModal={handleOpenModal}
        onNavigateSection={handleNavigateSection}
      />

      {/* WhatsApp Floating Button linked to 0722947935 */}
      <WhatsAppFloating />

      {/* Dynamic Institutional Modals */}
      <InfoModals
        modalType={activeModal}
        onClose={handleCloseModal}
        onOpenAdmissions={handleOpenAdmissions}
      />
    </div>
  );
}

