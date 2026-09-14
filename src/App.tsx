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
      <TopBar />

      {/* 2. Sticky Header / Navigation */}
      <Navbar
        onOpenModal={handleOpenModal}
        onNavigateSection={handleNavigateSection}
      />

      {/* Main Content Sections (Strictly in ordered structure) */}
      <main className="flex-grow">
        {/* Section 1: Hero Slider with Cross & Empowering Young Women in Faith & Knowledge */}
        <HeroSlider
          onOpenContact={() => handleNavigateSection('contact')}
          onNavigateSection={handleNavigateSection}
        />

        {/* Section 2: Welcome from Principal Hellen Kahoro with official address */}
        <PrincipalWelcome
          onOpenContact={() => handleNavigateSection('contact')}
        />

        {/* Section 3: About Snippet + Stats Bar */}
        <AboutAndStats
          onOpenModal={handleOpenModal}
        />

        {/* Gallery Section: Authentic Kenyan school life */}
        <GallerySection />

        {/* Section 4: Location Map (Ngecha Town, Limuru) + Contact form */}
        <MapAndContact />
      </main>

      {/* 4. Footer (Trust style - dark green): 4 columns */}
      <Footer
        onOpenModal={handleOpenModal}
        onNavigateSection={handleNavigateSection}
      />

      {/* WhatsApp Floating Button linked to 0770245635 */}
      <WhatsAppFloating />

      {/* Dynamic Institutional Modals */}
      <InfoModals
        modalType={activeModal}
        onClose={handleCloseModal}
      />
    </div>
  );
}

