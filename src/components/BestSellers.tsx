import React, { useState } from 'react';

interface BestSellersProps {
  onMenuClick: () => void;
}

const items = [
  { name: 'CHICKEN BURGER', img: 'https://d64gsuwffb70l.cloudfront.net/68fe45e7ff61bce6635ea1af_1761494879976_ada958a8.png', color: 'bg-[#D4A574]' },
  { name: 'COLD COFFEE', img: 'https://d64gsuwffb70l.cloudfront.net/68fe45e7ff61bce6635ea1af_1761494882314_78af8e84.png', color: 'bg-[#2DD4BF]' },
  { name: 'CHOCOLATE CAKE', img: 'https://d64gsuwffb70l.cloudfront.net/68fe45e7ff61bce6635ea1af_1761494892899_8bb276b7.png', color: 'bg-[#FFB6C1]' },
  { name: 'MANGO LASSI', img: 'https://d64gsuwffb70l.cloudfront.net/68fe45e7ff61bce6635ea1af_1761494886004_65fa7e01.png', color: 'bg-[#FCD34D]' },
  { name: 'BIRYANI', img: 'https://d64gsuwffb70l.cloudfront.net/68fe45e7ff61bce6635ea1af_1761494891147_36a0e503.png', color: 'bg-[#D4A574]' },
  { name: 'PANI PURI', img: 'https://d64gsuwffb70l.cloudfront.net/68fe45e7ff61bce6635ea1af_1761494874119_769c65d4.png', color: 'bg-[#FFB6C1]' }
];

const BestSellers: React.FC<BestSellersProps> = ({ onMenuClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % items.length);
  const prev = () => setCurrentIndex((curr) => (curr - 1 + items.length) % items.length);

  const getVisibleItems = () => {
    const visible = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + items.length) % items.length;
      visible.push({ ...items[index], position: i });
    }
    return visible;
  };

  return (
    <section className="bg-[#2DD4BF] py-20 px-6 relative overflow-hidden">
      <h2 className="font-['Bebas_Neue'] text-4xl md:text-6xl font-bold text-white text-center tracking-[2px] mb-16">
        BEST SELLERS
      </h2>

      <div className="relative max-w-6xl mx-auto h-[500px] flex items-center justify-center">
        <button 
          onClick={prev}
          className="absolute left-0 md:left-10 z-20 w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
        >
          <svg className="w-6 h-6 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="flex items-center justify-center gap-8">
          {getVisibleItems().map((item, idx) => (
            <div 
              key={idx}
              className={`transition-all duration-500 ${
                item.position === 0 ? 'scale-100 z-10' : 'scale-75 opacity-60'
              }`}
            >
              <div className={`w-64 h-64 ${item.color} rounded-[45%_55%_60%_40%/55%_45%_55%_45%] flex items-center justify-center overflow-hidden shadow-2xl`}>
                <img src={item.img} alt={item.name} className="w-48 h-48 object-cover rounded-lg" />
              </div>
              {item.position === 0 && (
                <div className="text-center mt-6">
                  <h3 className="font-['Bebas_Neue'] text-3xl font-bold text-white tracking-wide">{item.name}</h3>
                  <button 
                    onClick={onMenuClick}
                    className="mt-4 bg-white text-[#2DD4BF] px-8 py-2 rounded-lg font-['Poppins'] text-sm font-semibold uppercase tracking-wide hover:bg-gray-100 transition-all"
                  >
                    VIEW MENU
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        <button 
          onClick={next}
          className="absolute right-0 md:right-10 z-20 w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
        >
          <svg className="w-6 h-6 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default BestSellers;
