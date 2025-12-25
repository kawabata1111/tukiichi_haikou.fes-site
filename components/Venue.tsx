import React from 'react';
import { MapPin, Car, Train } from 'lucide-react';

const Venue: React.FC = () => {
  return (
    <section id="venue" className="py-20 md:py-32 bg-[#F9F9F9] relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:w-1/2 order-2 lg:order-1">
             <span className="block text-brand-accent font-bold tracking-widest mb-2">ACCESS</span>
            <h2 className="text-4xl md:text-5xl font-black text-brand-text mb-8">
              <span className="bg-brand-yellow/50 px-2">どこで開催？</span>
            </h2>
            
            <div className="bg-white p-8 rounded-3xl shadow-lg border-2 border-dashed border-gray-200">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <MapPin className="text-red-500" />
                旧門司特別支援学校
              </h3>
              <p className="text-lg mb-6 text-gray-600">
                〒801-0802<br />
                福岡県北九州市門司区白野江3丁目28-1
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-2 rounded-full text-blue-600 shrink-0">
                    <Car size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">お車でお越しの方</h4>
                    <p className="text-sm text-gray-600">校庭に無料駐車場がございます（約50台）。満車の場合は近隣のコインパーキングをご利用ください。</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-2 rounded-full text-green-600 shrink-0">
                    <Train size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">公共交通機関でお越しの方</h4>
                    <p className="text-sm text-gray-600">西鉄バス「白野江二丁目」バス停より徒歩3分。JR門司港駅よりバスで約20分。</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <p className="text-sm text-gray-500 bg-gray-50 p-4 rounded-xl">
                  <span className="font-bold block mb-1">💡 会場の特徴</span>
                  海と山に囲まれた自然豊かな廃校です。懐かしい教室や長い廊下、広い校庭がそのまま残っています。上履きをご持参いただくと、より校内探索を楽しめます！
                </p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="lg:w-1/2 w-full order-1 lg:order-2">
            <div className="relative rounded-3xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(255,244,92,1)] border-4 border-white transform rotate-1 hover:rotate-0 transition-transform duration-500">
              <iframe
                src="https://maps.google.com/maps?q=%E7%A6%8F%E5%B2%A1%E7%9C%8C%E5%8C%97%E4%B9%9D%E5%B7%9E%E5%B8%82%E9%96%80%E5%8F%B8%E5%8C%BA%E7%99%BD%E9%87%8E%E6%B1%9F3%E4%B8%81%E7%9B%AE28-1&output=embed&hl=ja"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="旧門司特別支援学校の地図"
                className="w-full h-[400px]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Venue;