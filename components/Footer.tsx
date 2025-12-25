import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-brand-text text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          
          {/* Org Info */}
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-4 font-maru">ツキイチはいこう文化祭</h2>
            <p className="text-gray-400 mb-6 font-medium leading-relaxed">
              「ツキイチは、いこう！」という文化を北九州から全国へ。<br/>
              人が集い、挑戦が生まれ、地域が好きになる循環をつくります。
            </p>
            <div className="space-y-2 text-sm text-gray-300">
                <p>運営：ツキイチはいこう文化祭実行委員会</p>
                <p>代表：市丸 裕也</p>
                <p>所在地：福岡県北九州市門司区白野江3丁目28-1</p>
                <p>Email: monthlyhaikoufestival@gmail.com</p>
            </div>
          </div>

          {/* Links */}
          <div className="md:w-1/2 flex flex-col items-start md:items-end">
             <div className="flex gap-4 mb-8">
                <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-yellow hover:text-brand-text transition-colors">
                    <Instagram size={24} />
                </a>
                <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-blue hover:text-white transition-colors">
                    <Facebook size={24} />
                </a>
                <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-gray-600 hover:text-white transition-colors">
                    <Twitter size={24} />
                </a>
             </div>
             
             <ul className="flex flex-wrap gap-6 text-sm font-bold text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">プライバシーポリシー</a></li>
                <li><a href="#" className="hover:text-white transition-colors">特定商取引法に基づく表記</a></li>
                <li><a href="#" className="hover:text-white transition-colors">運営概要</a></li>
             </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-xs text-gray-500">
            &copy; 2025 Tsuki-ichi Haikou Bunkasai. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;