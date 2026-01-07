import React, { useState } from 'react';
import { SectionId, SECTIONS } from '../types';
import { Menu, X, Calendar, Home, Lightbulb, Users, MapPin, Info, UserPlus, Mail } from 'lucide-react';

interface SideNavProps {
  activeSection: SectionId;
}

const sectionIcons: Record<SectionId, React.ReactNode> = {
  top: <Home className="w-5 h-5" />,
  concept: <Lightbulb className="w-5 h-5" />,
  organization: <Users className="w-5 h-5" />,
  venue: <MapPin className="w-5 h-5" />,
  schedule: <Info className="w-5 h-5" />,
  recruit: <UserPlus className="w-5 h-5" />,
  contact: <Mail className="w-5 h-5" />,
};

const SideNav: React.FC<SideNavProps> = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = (id: string) => {
    if (id === 'contact') {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const scrollToSchedule = () => {
    const element = document.getElementById('schedule');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Desktop Side Navigation */}
      <nav className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 hidden lg:flex flex-col gap-3">
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
                w-12 h-12 rounded-full flex items-center justify-center font-bold border-2 transition-all duration-300 shadow-lg
                ${
                  activeSection === section.id
                    ? 'bg-brand-yellow border-brand-text text-brand-text scale-110'
                    : 'bg-white border-gray-300 text-gray-400 group-hover:border-brand-yellow group-hover:text-brand-text group-hover:bg-brand-yellow/20'
                }
              `}
            >
              {sectionIcons[section.id]}
            </div>
            <span
              className={`
                ml-3 px-4 py-2 rounded-full text-sm font-bold bg-white shadow-lg border border-gray-100 transition-all duration-300
                ${
                  activeSection === section.id
                    ? 'opacity-100 text-brand-text translate-x-0'
                    : 'opacity-0 group-hover:opacity-100 text-gray-600 -translate-x-2 group-hover:translate-x-0'
                }
              `}
            >
              {section.label}
            </span>
          </button>
        ))}
      </nav>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white border-t-2 border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
        <div className="flex justify-around items-center py-2 px-1">
          {SECTIONS.slice(0, 5).map((section) => (
            <button
              key={section.id}
              onClick={() => handleClick(section.id)}
              className={`flex flex-col items-center justify-center py-1 px-2 rounded-lg transition-all ${
                activeSection === section.id
                  ? 'text-brand-accent'
                  : 'text-gray-400'
              }`}
            >
              <div className={`p-1.5 rounded-full ${activeSection === section.id ? 'bg-brand-yellow' : ''}`}>
                {sectionIcons[section.id]}
              </div>
              <span className="text-[10px] font-bold mt-0.5 whitespace-nowrap">
                {section.id === 'organization' ? '運営' : section.id === 'schedule' ? '開催' : section.label}
              </span>
            </button>
          ))}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="flex flex-col items-center justify-center py-1 px-2 rounded-lg text-gray-400"
          >
            <div className="p-1.5">
              <Menu className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold mt-0.5">その他</span>
          </button>
        </div>
      </nav>

      {/* Mobile Full Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsMenuOpen(false)} />
          <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl p-6 animate-slide-up">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-brand-text">メニュー</h3>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {SECTIONS.map((section) => (
                <button
                  key={section.id}
                  onClick={() => handleClick(section.id)}
                  className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all ${
                    activeSection === section.id
                      ? 'bg-brand-yellow border-brand-text'
                      : 'bg-gray-50 border-gray-200 hover:border-brand-yellow'
                  }`}
                >
                  <div className={`p-2 rounded-full ${activeSection === section.id ? 'bg-white' : 'bg-white'}`}>
                    {sectionIcons[section.id]}
                  </div>
                  <span className="font-bold text-sm text-brand-text">{section.label}</span>
                </button>
              ))}
            </div>
            <button
              onClick={() => {
                scrollToSchedule();
                setIsMenuOpen(false);
              }}
              className="w-full mt-6 bg-brand-yellow border-2 border-brand-text text-brand-text font-bold py-4 rounded-xl flex items-center justify-center gap-2 shadow-[4px_4px_0px_0px_rgba(74,74,74,1)]"
            >
              <Calendar className="w-5 h-5" />
              次回開催：1月10日（金）を見る
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SideNav;
