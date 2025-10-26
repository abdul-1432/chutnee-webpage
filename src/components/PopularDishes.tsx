import React from 'react';

interface PopularDishesProps {
  onMenuClick: () => void;
}

const dishes = [
  { name: 'CHICKEN BURGER', img: 'https://d64gsuwffb70l.cloudfront.net/68fe45e7ff61bce6635ea1af_1761494879976_ada958a8.png', color: 'bg-[#8B4513]' },
  { name: 'PANNI POORI', img: 'https://d64gsuwffb70l.cloudfront.net/68fe45e7ff61bce6635ea1af_1761494874119_769c65d4.png', color: 'bg-[#D4A574]' },
  { name: 'CHOCOLATE CAKE', img: 'https://d64gsuwffb70l.cloudfront.net/68fe45e7ff61bce6635ea1af_1761494892899_8bb276b7.png', color: 'bg-[#FFB6C1]' },
  { name: 'MANGO SHAKE', img: 'https://d64gsuwffb70l.cloudfront.net/68fe45e7ff61bce6635ea1af_1761494886004_65fa7e01.png', color: 'bg-[#2DD4BF]' }
];

const PopularDishes: React.FC<PopularDishesProps> = ({ onMenuClick }) => {
  return (
    <section id="menu" className="bg-[#FFFBF5] py-20 px-6 md:px-16 relative overflow-hidden">
      <div className="absolute top-20 left-10 w-40 h-40 bg-[#FCD34D] rounded-[50%_60%_70%_40%] opacity-20" />
      
      <div className="max-w-7xl mx-auto">
        <h2 className="font-['Bebas_Neue'] text-4xl md:text-5xl font-bold text-[#E91E8C] text-center tracking-[2px] mb-2">
          MOST POPULAR DISHES
        </h2>
        <p className="font-['Poppins'] text-base text-[#6B7280] text-center mb-12">
          Get a taste of what everyone's talking about...
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {dishes.map((dish, idx) => (
            <div key={idx} className="flex flex-col items-center group cursor-pointer">
              <div className={`w-64 h-64 ${dish.color} rounded-[45%_55%_60%_40%/55%_45%_55%_45%] flex items-center justify-center overflow-hidden group-hover:scale-105 group-hover:rotate-3 transition-all duration-400 shadow-xl`}>
                <img 
                  src={dish.img} 
                  alt={dish.name} 
                  className="w-48 h-48 object-cover rounded-lg"
                />
              </div>
              <h3 className="font-['Bebas_Neue'] text-2xl font-bold text-[#2B2D42] mt-6 tracking-wide">
                {dish.name}
              </h3>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button 
            onClick={onMenuClick}
            className="bg-[#E91E8C] text-white px-10 py-3 rounded-lg font-['Poppins'] text-sm font-semibold uppercase tracking-wide hover:bg-[#d01a7d] hover:-translate-y-1 transition-all duration-300"
          >
            VIEW MENU
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularDishes;
