import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Footer from './Footer';

type PageType = 'home' | 'privacy' | 'legal' | 'about';

interface LegalNoticeProps {
  onBack: () => void;
  onNavigate: (page: PageType) => void;
}

const LegalNotice: React.FC<LegalNoticeProps> = ({ onBack, onNavigate }) => {
  return (
    <div className="min-h-screen bg-white">
      <div className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-brand-accent font-bold mb-8 hover:underline"
        >
          <ArrowLeft size={20} />
          トップに戻る
        </button>

        <h1 className="text-3xl md:text-4xl font-black text-brand-text mb-8">
          特定商取引法に基づく表記
        </h1>

        <div className="bg-gray-50 rounded-2xl overflow-hidden">
          <table className="w-full">
            <tbody>
              <tr className="border-b border-gray-200">
                <th className="bg-brand-yellow/30 px-6 py-4 text-left font-bold text-brand-text w-1/3">
                  事業者名
                </th>
                <td className="px-6 py-4 text-gray-700">
                  ツキイチはいこう文化祭実行委員会
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <th className="bg-brand-yellow/30 px-6 py-4 text-left font-bold text-brand-text">
                  代表者
                </th>
                <td className="px-6 py-4 text-gray-700">
                  市丸 裕也
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <th className="bg-brand-yellow/30 px-6 py-4 text-left font-bold text-brand-text">
                  所在地
                </th>
                <td className="px-6 py-4 text-gray-700">
                  〒801-0802<br />
                  福岡県北九州市門司区白野江3丁目28-1<br />
                  （旧門司特別支援学校）
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <th className="bg-brand-yellow/30 px-6 py-4 text-left font-bold text-brand-text">
                  電話番号
                </th>
                <td className="px-6 py-4 text-gray-700">
                  080-6467-6879
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <th className="bg-brand-yellow/30 px-6 py-4 text-left font-bold text-brand-text">
                  メールアドレス
                </th>
                <td className="px-6 py-4 text-gray-700">
                  monthlyhaikoufestival@gmail.com
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <th className="bg-brand-yellow/30 px-6 py-4 text-left font-bold text-brand-text">
                  販売価格
                </th>
                <td className="px-6 py-4 text-gray-700">
                  各商品・サービスページに表示された価格（税込）
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <th className="bg-brand-yellow/30 px-6 py-4 text-left font-bold text-brand-text">
                  支払方法
                </th>
                <td className="px-6 py-4 text-gray-700">
                  現金、各種キャッシュレス決済（出店者により異なります）
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <th className="bg-brand-yellow/30 px-6 py-4 text-left font-bold text-brand-text">
                  商品の引渡し時期
                </th>
                <td className="px-6 py-4 text-gray-700">
                  イベント当日、購入時に即時お渡し
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <th className="bg-brand-yellow/30 px-6 py-4 text-left font-bold text-brand-text">
                  返品・キャンセル
                </th>
                <td className="px-6 py-4 text-gray-700">
                  商品の性質上、お客様都合による返品・キャンセルはお受けできません。<br />
                  商品に不備があった場合は、その場でお申し出ください。
                </td>
              </tr>
              <tr>
                <th className="bg-brand-yellow/30 px-6 py-4 text-left font-bold text-brand-text">
                  その他
                </th>
                <td className="px-6 py-4 text-gray-700">
                  イベント内での販売・サービスは各出店者が責任を持って行います。<br />
                  詳細は各出店者にお問い合わせください。
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        </div>
      </div>
      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default LegalNotice;
