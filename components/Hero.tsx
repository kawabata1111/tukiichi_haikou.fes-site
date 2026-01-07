import React from 'react';
import { Calendar, MapPin, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSchedule = () => {
    const element = document.getElementById('schedule');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="top" className="relative h-screen min-h-[600px] w-full overflow-hidden flex items-center justify-center">
      {/* 次回開催バナー - 画面上部固定 */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <button
          onClick={scrollToSchedule}
          className="w-full bg-brand-yellow hover:bg-yellow-300 transition-colors py-2 md:py-3 px-3 md:px-4 flex items-center justify-center gap-1.5 md:gap-2 group border-b-2 border-brand-text/20 shadow-md"
        >
          <Calendar className="w-4 h-4 md:w-5 md:h-5 text-brand-text" />
          <span className="text-brand-text font-bold text-sm md:text-base">
            次回：<span className="text-base md:text-xl">1月10日（金）</span>
            <span className="ml-1 md:ml-2 text-brand-text/80 text-xs md:text-base">11:00〜</span>
          </span>
          <span className="bg-brand-text/10 rounded-full px-2 md:px-3 py-0.5 md:py-1 text-brand-text text-xs md:text-sm font-bold ml-1 md:ml-2 group-hover:bg-brand-text/20 transition-colors flex items-center">
            詳細 <ChevronRight className="w-3 h-3 md:w-4 md:h-4" />
          </span>
        </button>
      </div>

      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.png"
          alt="ツキイチはいこう文化祭"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-yellow-50/20 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-12 pb-24 lg:pb-0 -mt-2 md:-mt-1 lg:mt-0">
        <div className="inline-block mb-6 mt-8 md:mt-0 animate-bounce">
          <span className="bg-brand-blue text-white px-4 md:px-6 py-1.5 md:py-2 rounded-full text-sm md:text-xl font-bold shadow-lg transform -rotate-2 inline-block whitespace-nowrap">
            \ 廃校を活用した地域のテーマパーク /
          </span>
        </div>

        <h1 className="font-maru font-black text-5xl md:text-7xl lg:text-8xl text-brand-text mb-4 drop-shadow-xl tracking-wider leading-tight">
          <span className="block text-brand-yellow drop-shadow-md text-stroke-white mb-2">ツキイチ</span>
          <span className="inline-block bg-white/80 px-4 py-1 rounded-lg transform rotate-1">はいこう</span>
          <span className="inline-block transform -rotate-1">文化祭</span>
        </h1>

        <p className="text-xl md:text-3xl font-bold text-gray-700 mt-6 mb-8 bg-white/70 inline-block px-6 py-2 rounded-full shadow-sm backdrop-blur-sm">
          月に一度、行きたくなる場所
        </p>

        {/* Info Badge */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
          <div className="bg-white border-2 border-brand-text px-6 py-3 rounded-2xl shadow-[4px_4px_0px_0px_rgba(74,74,74,1)] flex items-center gap-2">
            <MapPin className="w-6 h-6 text-brand-accent" />
            <span className="font-bold text-lg">旧門司特別支援学校</span>
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={scrollToSchedule}
          className="bg-brand-yellow hover:bg-yellow-300 border-4 border-brand-text text-brand-text font-black text-lg md:text-xl px-8 py-4 rounded-full shadow-[6px_6px_0px_0px_rgba(74,74,74,1)] hover:shadow-[4px_4px_0px_0px_rgba(74,74,74,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center gap-3 mx-auto"
        >
          <Calendar className="w-6 h-6" />
          開催情報をチェック！
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;