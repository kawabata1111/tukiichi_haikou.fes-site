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
import { SectionId } from './types';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionId>('top');

  useEffect(() => {
    const handleScroll = () => {
      const sections: SectionId[] = ['top', 'concept', 'organization', 'venue', 'schedule', 'recruit', 'contact'];
      
      // Find the current section being viewed
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust offset to trigger slightly before the top hits the viewport
          if (rect.top <= 300 && rect.bottom >= 300) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full min-h-screen bg-white text-brand-text font-maru">
      <SideNav activeSection={activeSection} />
      
      <main className="w-full">
        <Hero />
        <Concept />
        <Organization />
        <Venue />
        <Info />
        <Recruit />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;