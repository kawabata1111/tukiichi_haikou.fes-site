import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Footer from './Footer';

type PageType = 'home' | 'privacy' | 'legal' | 'about';

interface PrivacyPolicyProps {
  onBack: () => void;
  onNavigate: (page: PageType) => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack, onNavigate }) => {
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
          プライバシーポリシー
        </h1>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <section>
            <h2 className="text-xl font-bold text-brand-text border-b-2 border-brand-yellow pb-2 mb-4">
              1. 個人情報の取り扱いについて
            </h2>
            <p className="leading-relaxed">
              ツキイチはいこう文化祭実行委員会（以下「当委員会」）は、お客様の個人情報の保護に細心の注意を払い、以下の方針に基づき個人情報の保護に努めます。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-text border-b-2 border-brand-yellow pb-2 mb-4">
              2. 収集する個人情報
            </h2>
            <p className="leading-relaxed">
              当委員会は、以下の場合に個人情報を収集することがあります。
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>出店申込時（氏名、連絡先、メールアドレス等）</li>
              <li>ボランティア応募時（氏名、連絡先、メールアドレス等）</li>
              <li>お問い合わせ時（氏名、メールアドレス、お問い合わせ内容）</li>
              <li>メールマガジン登録時（メールアドレス）</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-text border-b-2 border-brand-yellow pb-2 mb-4">
              3. 個人情報の利用目的
            </h2>
            <p className="leading-relaxed">
              収集した個人情報は、以下の目的で利用いたします。
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>イベント運営に関するご連絡</li>
              <li>出店・ボランティアに関する連絡調整</li>
              <li>お問い合わせへの回答</li>
              <li>イベント情報のご案内</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-text border-b-2 border-brand-yellow pb-2 mb-4">
              4. 個人情報の第三者提供
            </h2>
            <p className="leading-relaxed">
              当委員会は、法令に基づく場合を除き、お客様の同意なく個人情報を第三者に提供することはありません。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-text border-b-2 border-brand-yellow pb-2 mb-4">
              5. 個人情報の管理
            </h2>
            <p className="leading-relaxed">
              当委員会は、個人情報の漏洩、滅失、毀損の防止その他の個人情報の安全管理のために必要かつ適切な措置を講じます。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-text border-b-2 border-brand-yellow pb-2 mb-4">
              6. お問い合わせ
            </h2>
            <p className="leading-relaxed">
              個人情報の取り扱いに関するお問い合わせは、下記までご連絡ください。
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mt-4">
              <p>ツキイチはいこう文化祭実行委員会</p>
              <p>Email: monthlyhaikoufestival@gmail.com</p>
            </div>
          </section>

          <p className="text-sm text-gray-500 mt-12">
            制定日：2025年1月1日
          </p>
        </div>
      </div>
      </div>
      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default PrivacyPolicy;
