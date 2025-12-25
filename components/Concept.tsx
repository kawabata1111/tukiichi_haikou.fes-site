import React from 'react';
import { Utensils, ShoppingBag, BookOpen, Smile } from 'lucide-react';

const Concept: React.FC = () => {
  const points = [
    {
      title: "食べる",
      en: "EAT",
      icon: <Utensils className="w-8 h-8 text-white" />,
      desc: "地域のグルメやキッチンカーが大集合。懐かしい給食メニューも登場するかも？",
      color: "bg-orange-400",
      img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=400&q=80",
      rotate: "rotate-2"
    },
    {
      title: "買う",
      en: "BUY",
      icon: <ShoppingBag className="w-8 h-8 text-white" />,
      desc: "ハンドメイド雑貨や地元の野菜マルシェ。ここでしか出会えない一点物を探そう。",
      color: "bg-blue-400",
      img: "/images/buy.png",
      rotate: "-rotate-1"
    },
    {
      title: "学ぶ",
      en: "LEARN",
      icon: <BookOpen className="w-8 h-8 text-white" />,
      desc: "大人も子供も夢中になれるワークショップや体験教室。新しい趣味が見つかる場所。",
      color: "bg-green-400",
      img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=400&q=80",
      rotate: "rotate-3"
    },
    {
      title: "遊ぶ",
      en: "PLAY",
      icon: <Smile className="w-8 h-8 text-white" />,
      desc: "広い校庭や体育館を使ったアクティビティ。校舎全体を使った謎解き探検も！",
      color: "bg-pink-400",
      img: "https://images.unsplash.com/photo-1540479859555-17af45c78602?auto=format&fit=crop&w=400&q=80",
      rotate: "-rotate-2"
    }
  ];

  return (
    <section id="concept" className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-paper-pattern opacity-50 z-0"></div>
      <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-yellow/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 -left-10 w-80 h-80 bg-brand-blue/30 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="block text-brand-accent font-bold tracking-widest mb-2">CONCEPT</span>
          <h2 className="text-4xl md:text-5xl font-black text-brand-text mb-8">
            <span className="relative inline-block">
              どんなイベント？
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-yellow -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-6 text-lg md:text-xl leading-relaxed text-gray-700">
            <p>
              廃校となった旧門司特別支援学校を舞台に、
              <span className="font-bold text-brand-accent text-2xl">「月に一度、行きたくなる場所」</span>をコンセプトとした体験型・参加型の地域文化祭です。
            </p>
            <p>
              単なるイベントではなく、地域の人・お店・学生・企業が交わる<span className="font-bold bg-yellow-100 px-2">"地域のテーマパーク"</span>のような居場所づくりを目指し、継続的なにぎわいと関係人口の創出に取り組んでいます。
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {points.map((point, index) => (
            <div key={index} className="group relative">
              {/* Polaroid Card */}
              <div className={`bg-white p-3 pb-8 shadow-xl rounded-sm transform transition-transform duration-300 hover:scale-105 hover:z-10 hover:rotate-0 ${point.rotate}`}>
                <div className="relative overflow-hidden mb-4 aspect-[4/3] bg-gray-100">
                   <img src={point.img} alt={point.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                   <div className={`absolute top-0 right-0 p-2 ${point.color} rounded-bl-xl shadow-md`}>
                     {point.icon}
                   </div>
                </div>
                <div className="text-center px-2">
                  <h3 className="text-2xl font-bold text-gray-800 mb-1 flex items-center justify-center gap-2">
                    <span className={`inline-block w-2 h-2 rounded-full ${point.color}`}></span>
                    {point.title}
                  </h3>
                  <span className="block text-xs font-bold text-gray-400 tracking-widest mb-3">{point.en}</span>
                  <p className="text-sm text-gray-600 text-left leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              </div>
              
              {/* Tape Effect */}
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-24 h-8 bg-yellow-100/80 rotate-1 shadow-sm"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Concept;