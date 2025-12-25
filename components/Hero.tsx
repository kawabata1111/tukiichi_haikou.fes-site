import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="top" className="relative h-screen min-h-[600px] w-full overflow-hidden flex items-center justify-center">
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
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="inline-block mb-6 animate-bounce">
          <span className="bg-brand-blue text-white px-6 py-2 rounded-full text-lg md:text-xl font-bold shadow-lg transform -rotate-2 inline-block">
            \ 廃校を活用した地域のテーマパーク /
          </span>
        </div>

        <h1 className="font-maru font-black text-5xl md:text-7xl lg:text-8xl text-brand-text mb-4 drop-shadow-xl tracking-wider leading-tight">
          <span className="block text-brand-yellow drop-shadow-md text-stroke-white mb-2">ツキイチ</span>
          <span className="inline-block bg-white/80 px-4 py-1 rounded-lg transform rotate-1">はいこう</span>
          <span className="inline-block transform -rotate-1">文化祭</span>
        </h1>

        <p className="text-xl md:text-3xl font-bold text-gray-700 mt-6 mb-10 bg-white/70 inline-block px-6 py-2 rounded-full shadow-sm backdrop-blur-sm">
          月に一度、行きたくなる場所
        </p>

        {/* Info Badge */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <div className="bg-brand-yellow border-2 border-brand-text px-6 py-3 rounded-2xl shadow-[4px_4px_0px_0px_rgba(74,74,74,1)] flex items-center gap-2 transform hover:-translate-y-1 transition-transform">
            <Calendar className="w-6 h-6 text-brand-text" />
            <span className="font-bold text-lg">毎月開催！</span>
          </div>
          <div className="bg-white border-2 border-brand-text px-6 py-3 rounded-2xl shadow-[4px_4px_0px_0px_rgba(74,74,74,1)] flex items-center gap-2 transform hover:-translate-y-1 transition-transform">
            <MapPin className="w-6 h-6 text-brand-accent" />
            <span className="font-bold text-lg">旧門司特別支援学校</span>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;