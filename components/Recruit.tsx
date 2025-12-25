import React from 'react';
import { Mail, ArrowRight, UserPlus, Store } from 'lucide-react';

const Recruit: React.FC = () => {
  return (
    <section id="recruit" className="py-20 md:py-32 bg-brand-blue/20 relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-20 left-0 w-64 h-64 bg-white/40 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-20 right-0 w-80 h-80 bg-brand-yellow/30 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
            <span className="block text-brand-accent font-bold tracking-widest mb-2">JOIN US</span>
            <h2 className="text-4xl md:text-5xl font-black text-brand-text">
              仲間になりませんか？
            </h2>
            <p className="mt-4 text-gray-600">
                一緒に文化祭を盛り上げてくれる出店者さん、ボランティアさんを募集しています。
            </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
            {/* Vendor Recruit */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl group hover:shadow-2xl transition-all duration-300">
                <div className="h-48 overflow-hidden relative">
                    <img src="/images/vendor.png" alt="出店者募集" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <Store className="text-white w-12 h-12" />
                    </div>
                </div>
                <div className="p-8">
                    <h3 className="text-2xl font-bold mb-3 text-brand-text">出店者募集</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        飲食店、ハンドメイド雑貨、ワークショップなど、あなたの「好き」や「得意」を表現してみませんか？初めての方もサポートします。
                    </p>
                    <button className="w-full bg-brand-yellow text-brand-text font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 hover:bg-yellow-300 transition-colors shadow-sm">
                        出店要項を見る <ArrowRight size={20} />
                    </button>
                </div>
            </div>

            {/* Volunteer Recruit */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl group hover:shadow-2xl transition-all duration-300">
                <div className="h-48 overflow-hidden relative">
                    <img src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=600&q=80" alt="Volunteers" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <UserPlus className="text-white w-12 h-12" />
                    </div>
                </div>
                <div className="p-8">
                    <h3 className="text-2xl font-bold mb-3 text-brand-text">ボランティア募集</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        会場設営、受付、キッズエリアの見守りなど。学生からシニアまで、幅広い世代のメンバーが活躍しています。友達作りにも！
                    </p>
                    <button className="w-full bg-brand-blue text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 hover:bg-blue-300 transition-colors shadow-sm">
                        ボランティアに応募する <ArrowRight size={20} />
                    </button>
                </div>
            </div>
        </div>
        
        <div className="mt-16 text-center">
             <div className="inline-block bg-white p-8 rounded-3xl shadow-[8px_8px_0px_0px_rgba(255,142,60,1)] border-2 border-brand-accent max-w-2xl w-full">
                <h3 className="text-xl font-bold mb-4 flex items-center justify-center gap-2">
                    <Mail className="text-brand-accent" />
                    お問い合わせ
                </h3>
                <p className="mb-6 text-sm text-gray-500">
                    ご質問や取材のご依頼は、下記フォームまたはメールにてご連絡ください。
                </p>
                <a href="mailto:monthlyhaikoufestival@gmail.com" className="block w-full bg-gray-800 text-white font-bold py-3 rounded-lg hover:bg-gray-700 transition-colors">
                    お問い合わせフォームへ
                </a>
             </div>
        </div>
      </div>
    </section>
  );
};

export default Recruit;