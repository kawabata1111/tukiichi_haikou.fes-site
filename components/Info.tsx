import React from 'react';
import { Clock, CalendarDays, Ticket, Instagram, ArrowRight } from 'lucide-react';

const Info: React.FC = () => {
  return (
    <section id="schedule" className="py-20 md:py-32 bg-brand-yellow/10">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
            <span className="block text-brand-accent font-bold tracking-widest mb-2">INFORMATION</span>
            <h2 className="text-4xl md:text-5xl font-black text-brand-text">
                開催情報
            </h2>
            <p className="mt-6 text-xl text-gray-600 font-bold bg-white/80 inline-block px-6 py-2 rounded-full shadow-sm">
              次回の開催に向けて、ワクワクする企画を準備中です！
            </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1: Date */}
            <div className="bg-white rounded-3xl p-8 text-center shadow-lg border-b-8 border-gray-300 transform hover:-translate-y-2 transition-transform">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-500">
                    <CalendarDays size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">開催日程</h3>
                <p className="text-brand-accent font-black text-2xl my-4">
                    調整中
                </p>
                <p className="text-sm text-gray-500">
                    決まり次第、公式サイト・SNSでお知らせします
                </p>
            </div>

            {/* Card 2: Time */}
            <div className="bg-white rounded-3xl p-8 text-center shadow-lg border-b-8 border-gray-300 transform hover:-translate-y-2 transition-transform delay-100">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-500">
                    <Clock size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">開催時間</h3>
                <p className="text-brand-accent font-black text-2xl my-4">
                    調整中
                </p>
                <p className="text-sm text-gray-500">
                    詳細なタイムテーブルは後日公開予定です
                </p>
            </div>

            {/* Card 3: Fee */}
            <div className="bg-white rounded-3xl p-8 text-center shadow-lg border-b-8 border-green-400 transform hover:-translate-y-2 transition-transform delay-200">
                 <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-500">
                    <Ticket size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">入場料</h3>
                <p className="text-green-500 font-black text-3xl my-2">
                    無料<span className="text-base font-normal ml-1">(予定)</span>
                </p>
                <p className="text-sm text-gray-500 mt-2">
                    ※一部有料コンテンツがある場合があります
                </p>
            </div>
        </div>

        {/* Notice / SNS Link */}
        <div className="mt-12 bg-white p-10 rounded-2xl border-2 border-brand-text shadow-[4px_4px_0px_0px_rgba(74,74,74,1)] text-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow/20 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-brand-blue/20 rounded-tr-full -ml-6 -mb-6 transition-transform group-hover:scale-110"></div>

            <h3 className="text-2xl font-bold mb-4 relative z-10">最新情報はSNSで<br className="md:hidden" />チェック！</h3>
            <p className="text-gray-600 mb-8 relative z-10 leading-relaxed">
                開催日程や出店者情報、イベントの準備の様子などは公式Instagramでいち早くお届けしています。ぜひフォローしてください！
            </p>
            
            <a 
              href="https://www.instagram.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white font-bold text-sm md:text-base py-3 px-6 md:px-8 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all relative z-10 whitespace-nowrap"
            >
                <Instagram size={20} />
                公式Instagramを見る
                <ArrowRight size={20} />
            </a>
        </div>
      </div>
    </section>
  );
};

export default Info;