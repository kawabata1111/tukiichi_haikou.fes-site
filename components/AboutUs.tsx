import React from 'react';
import { ArrowLeft, Users, Building, Briefcase, MapPin, Phone, Mail } from 'lucide-react';
import Footer from './Footer';

type PageType = 'home' | 'privacy' | 'legal' | 'about';

interface AboutUsProps {
  onBack: () => void;
  onNavigate: (page: PageType) => void;
}

const AboutUs: React.FC<AboutUsProps> = ({ onBack, onNavigate }) => {
  return (
    <div className="min-h-screen bg-white">
      <div className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-brand-accent font-bold mb-8 hover:underline"
        >
          <ArrowLeft size={20} />
          トップに戻る
        </button>

        <h1 className="text-3xl md:text-4xl font-black text-brand-text mb-8">
          運営概要
        </h1>

        {/* 組織情報 */}
        <div className="bg-brand-yellow/10 rounded-3xl p-8 md:p-12 mb-12">
          <h2 className="text-2xl font-bold text-brand-text mb-6 flex items-center gap-3">
            <Building className="text-brand-accent" />
            組織情報
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-sm font-bold text-gray-500 mb-2">団体名</h3>
              <p className="text-lg font-bold text-brand-text">
                ツキイチはいこう文化祭実行委員会
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-sm font-bold text-gray-500 mb-2">代表者</h3>
              <p className="text-lg font-bold text-brand-text">
                市丸 裕也
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-sm font-bold text-gray-500 mb-2">設立年</h3>
              <p className="text-lg font-bold text-brand-text">
                2025年
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-sm font-bold text-gray-500 mb-2">メンバー数</h3>
              <p className="text-lg font-bold text-brand-text">
                約10名
              </p>
              <p className="text-sm text-gray-500 mt-1">
                （学生・地域メンバー・ボランティア含む）
              </p>
            </div>
          </div>
        </div>

        {/* 事業内容 */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-brand-text mb-6 flex items-center gap-3">
            <Briefcase className="text-brand-accent" />
            事業内容
          </h2>

          <div className="space-y-4">
            <div className="bg-gray-50 rounded-xl p-6 flex items-start gap-4">
              <span className="bg-brand-yellow text-brand-text font-bold w-8 h-8 rounded-full flex items-center justify-center shrink-0">
                1
              </span>
              <div>
                <h3 className="font-bold text-brand-text text-lg mb-1">
                  イベント企画運営
                </h3>
                <p className="text-gray-600">
                  廃校を活用した月1回の体験型文化祭「ツキイチはいこう文化祭」の企画・運営
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 flex items-start gap-4">
              <span className="bg-brand-yellow text-brand-text font-bold w-8 h-8 rounded-full flex items-center justify-center shrink-0">
                2
              </span>
              <div>
                <h3 className="font-bold text-brand-text text-lg mb-1">
                  地域創生・まちづくり
                </h3>
                <p className="text-gray-600">
                  地域事業者・クリエイター・学生による出店・体験コンテンツのプロデュース、関係人口の創出
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 flex items-start gap-4">
              <span className="bg-brand-yellow text-brand-text font-bold w-8 h-8 rounded-full flex items-center justify-center shrink-0">
                3
              </span>
              <div>
                <h3 className="font-bold text-brand-text text-lg mb-1">
                  教育・体験コンテンツ
                </h3>
                <p className="text-gray-600">
                  親子・学生・若者向けの教育・探究・ワークショップの実施
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ミッション */}
        <div className="bg-brand-text text-white rounded-3xl p-8 md:p-12 mb-12">
          <h2 className="text-2xl font-bold mb-6">私たちのミッション</h2>
          <p className="text-xl md:text-2xl font-bold leading-relaxed mb-4">
            「ツキイチは、いこう！」という文化を<br className="hidden md:block" />
            北九州から全国へ。
          </p>
          <p className="text-gray-300 leading-relaxed">
            人が集い、挑戦が生まれ、地域が好きになる循環をつくります。
            廃校という場所を活かし、地域の人々が主体的に関われる「居場所」を
            持続的に運営することを目指しています。
          </p>
        </div>

        {/* 連絡先 */}
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
          <h2 className="text-2xl font-bold text-brand-text mb-6 flex items-center gap-3">
            <Users className="text-brand-accent" />
            連絡先
          </h2>

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <MapPin className="text-brand-accent shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-brand-text mb-1">所在地</h3>
                <p className="text-gray-600">
                  〒801-0802<br />
                  福岡県北九州市門司区白野江3丁目28-1<br />
                  （旧門司特別支援学校）
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="text-brand-accent shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-brand-text mb-1">電話番号</h3>
                <p className="text-gray-600">
                  <a href="tel:080-6467-6879" className="hover:text-brand-accent">
                    080-6467-6879
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="text-brand-accent shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-brand-text mb-1">メールアドレス</h3>
                <p className="text-gray-600">
                  <a href="mailto:monthlyhaikoufestival@gmail.com" className="hover:text-brand-accent">
                    monthlyhaikoufestival@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default AboutUs;
