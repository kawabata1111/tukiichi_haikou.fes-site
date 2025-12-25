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
                    <p className="text-sm text-gray-600">校庭に無料駐車場がございます（約50台）。<br/>※満車の場合は近隣のコインパーキングをご利用ください。</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-2 rounded-full text-green-600 shrink-0">
                    <Train size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">公共交通機関でお越しの方</h4>
                    <p className="text-sm text-gray-600">西鉄バス「白野江二丁目」バス停より徒歩3分。<br/>JR門司港駅よりバスで約20分。</p>
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

          {/* Map Image/Frame */}
          <div className="lg:w-1/2 w-full order-1 lg:order-2">
            <div className="relative rounded-3xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(255,244,92,1)] border-4 border-white transform rotate-1 hover:rotate-0 transition-transform duration-500">
              {/* Placeholder for Map - In a real app, use Google Maps Embed API */}
              <div className="bg-gray-200 w-full h-[400px] flex items-center justify-center relative">
                 <img 
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80" 
                  alt="Map Location" 
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="bg-white/90 p-4 rounded-xl shadow-lg text-center">
                        <p className="font-bold text-gray-500">Google Maps</p>
                        <p className="text-xs text-gray-400">※ここに実際の地図を埋め込みます</p>
                    </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Venue;