import React from 'react';
import { SectionId, SECTIONS } from '../types';

interface SideNavProps {
  activeSection: SectionId;
}

const SideNav: React.FC<SideNavProps> = ({ activeSection }) => {
  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 hidden md:flex flex-col gap-4">
      {SECTIONS.map((section) => (
        <button
          key={section.id}
          onClick={() => handleClick(section.id)}
          className={`group flex items-center transition-all duration-300 ${
            activeSection === section.id ? 'translate-x-2' : ''
          }`}
          aria-label={`Go to section ${section.label}`}
        >
          <div
            className={`
              w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold border-2 transition-all duration-300 shadow-md
              ${
                activeSection === section.id
                  ? 'bg-brand-yellow border-brand-text text-brand-text scale-110'
                  : 'bg-white border-gray-300 text-gray-400 group-hover:border-brand-yellow group-hover:text-brand-yellow'
              }
            `}
          >
            {section.number}
          </div>
          <span
            className={`
              ml-3 px-3 py-1 rounded-full text-sm font-bold bg-white/90 backdrop-blur-sm shadow-sm transition-opacity duration-300
              ${
                activeSection === section.id
                  ? 'opacity-100 text-brand-text'
                  : 'opacity-0 group-hover:opacity-100 text-gray-500'
              }
            `}
          >
            {section.label}
          </span>
        </button>
      ))}
      <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gray-200 -z-10 h-full hidden" /> 
    </nav>
  );
};

export default SideNav;