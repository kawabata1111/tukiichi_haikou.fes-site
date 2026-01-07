import React, { useState, useEffect } from 'react';
import SideNav from './components/SideNav';
import Hero from './components/Hero';
import Concept from './components/Concept';
import Organization from './components/Organization';
import Venue from './components/Venue';
import Info from './components/Info';
import Recruit from './components/Recruit';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import PrivacyPolicy from './components/PrivacyPolicy';
import LegalNotice from './components/LegalNotice';
import AboutUs from './components/AboutUs';
import { SectionId } from './types';

type PageType = 'home' | 'privacy' | 'legal' | 'about';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionId>('top');
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  useEffect(() => {
    const handleScroll = () => {
      if (currentPage !== 'home') return;

      // Check if scrolled to bottom for contact section
      const isAtBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 100;
      if (isAtBottom) {
        setActiveSection('contact');
        return;
      }

      const sections: SectionId[] = ['top', 'concept', 'organization', 'venue', 'schedule', 'recruit'];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 300 && rect.bottom >= 300) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  const navigateTo = (page: PageType) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const goHome = () => {
    setCurrentPage('home');
    window.scrollTo(0, 0);
  };

  if (currentPage === 'privacy') {
    return <PrivacyPolicy onBack={goHome} onNavigate={navigateTo} />;
  }

  if (currentPage === 'legal') {
    return <LegalNotice onBack={goHome} onNavigate={navigateTo} />;
  }

  if (currentPage === 'about') {
    return <AboutUs onBack={goHome} onNavigate={navigateTo} />;
  }

  return (
    <div className="w-full min-h-screen bg-white text-brand-text font-maru">
      <SideNav activeSection={activeSection} />

      <main className="w-full pb-20 lg:pb-0">
        <Hero />
        <Concept />
        <Organization />
        <Venue />
        <Info />
        <Recruit />
      </main>

      <Footer onNavigate={navigateTo} />
      <ScrollToTop />
    </div>
  );
};

export default App;