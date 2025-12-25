import React from 'react';
import { Users, Building, PenTool, Lightbulb } from 'lucide-react';

const Organization: React.FC = () => {
  return (
    <section id="organization" className="py-20 md:py-32 bg-brand-yellow/20 relative">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <span className="block text-brand-accent font-bold tracking-widest mb-2">ABOUT US</span>
          <h2 className="text-4xl md:text-5xl font-black text-brand-text mb-6">
            運営について
          </h2>
        </div>

        {/* Vision / Slogan */}
        <div className="bg-white rounded-3xl p-10 md:p-16 shadow-xl relative overflow-hidden mb-12">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-yellow via-brand-accent to-brand-blue"></div>
            
            <div className="text-center relative z-10">
                <h3 className="text-2xl md:text-3xl font-black text-brand-text mb-8 leading-normal">
                    <span className="inline-block border-b-4 border-brand-yellow pb-2">
                    「ツキイチは、いこう！」
                    </span><br/>
                    という文化を北九州から全国へ。
                </h3>
                <p className="text-lg md:text-xl font-medium text-gray-600">
                    人が集い、挑戦が生まれ、<br className="md:hidden"/>地域が好きになる循環をつくります。
                </p>
            </div>
            
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-yellow/10 rounded-full blur-2xl"></div>
            <div className="absolute top-10 left-10 w-20 h-20 bg-brand-blue/10 rounded-full blur-xl"></div>
        </div>

        {/* Organization Info & Business Activities */}
        <div className="grid md:grid-cols-1 gap-8">
            <div className="bg-[#FFFDF5] p-8 md:p-12 rounded-sm shadow-md border border-gray-200 relative">
                {/* Notebook holes decoration */}
                <div className="absolute left-4 top-0 bottom-0 w-8 flex flex-col justify-between py-4 pointer-events-none opacity-50 hidden md:flex">
                    {[...Array(10)].map((_, i) => (
                        <div key={i} className="w-4 h-4 rounded-full bg-gray-200 shadow-inner"></div>
                    ))}
                </div>

                <div className="md:pl-12">
                    <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-3 border-b-2 border-gray-200 pb-2">
                        <Users className="text-brand-accent" />
                        実行委員会について
                    </h3>
                    <p className="text-gray-700 leading-loose mb-10">
                        ツキイチはいこう文化祭 実行委員会は、廃校となった旧門司特別支援学校を拠点に活動しています。
                        単にイベントを開催するだけでなく、地域の方々、事業者様、そして未来を担う学生たちが主体的に関われる
                        「地域の居場所」を持続的に運営することを使命としています。
                    </p>

                    <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-3 border-b-2 border-gray-200 pb-2">
                        <Building className="text-brand-blue" />
                        主な事業内容
                    </h3>
                    
                    <ul className="space-y-6">
                        <li className="flex items-start gap-4">
                            <span className="bg-brand-yellow text-brand-text font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-1">1</span>
                            <div>
                                <h4 className="font-bold text-gray-800 text-lg">廃校を活用した月1回の体験型文化祭の企画・運営</h4>
                                <p className="text-gray-600 text-sm mt-1">「ツキイチはいこう文化祭」の全体統括および運営管理</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <span className="bg-brand-yellow text-brand-text font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-1">2</span>
                            <div>
                                <h4 className="font-bold text-gray-800 text-lg">出店・体験コンテンツのプロデュース</h4>
                                <p className="text-gray-600 text-sm mt-1">地域事業者・クリエイター・学生によるチャレンジの場づくり</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <span className="bg-brand-yellow text-brand-text font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-1">3</span>
                            <div>
                                <h4 className="font-bold text-gray-800 text-lg">教育・探究・ワークショップの実施</h4>
                                <p className="text-gray-600 text-sm mt-1">親子・学生・若者向けの学びの場、体験活動の提供</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <span className="bg-brand-yellow text-brand-text font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-1">4</span>
                            <div>
                                <h4 className="font-bold text-gray-800 text-lg">地域創生モデルの構築・実証</h4>
                                <p className="text-gray-600 text-sm mt-1">行政・企業・学校と連携した持続可能な廃校活用の仕組みづくり</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Organization;