import React from 'react';

const categories = [
  { 
    name: 'BREAKFAST', 
    color: 'bg-[#FFECD1]', // Light peachy-orange
    img: 'https://d64gsuwffb70l.cloudfront.net/68fe45e7ff61bce6635ea1af_1761494879976_ada958a8.png' 
  },
  { 
    name: 'STREET FOOD', 
    color: 'bg-[#FFD4E8]', // Light pink
    img: 'https://d64gsuwffb70l.cloudfront.net/68fe45e7ff61bce6635ea1af_1761494874119_769c65d4.png' 
  },
  { 
    name: 'DESSERTS', 
    color: 'bg-[#FFE0CC]', // Peachy beige
    img: 'https://d64gsuwffb70l.cloudfront.net/68fe45e7ff61bce6635ea1af_1761494892899_8bb276b7.png' 
  },
  { 
    name: 'CHAI', 
    color: 'bg-[#D4F1F4]', // Light cyan/turquoise
    img: 'https://d64gsuwffb70l.cloudfront.net/68fe45e7ff61bce6635ea1af_1761494871116_1a847f41.png' 
  },
  { 
    name: 'HOT DRINKS', 
    color: 'bg-[#FFE8D6]', // Light cream/beige
    img: 'https://d64gsuwffb70l.cloudfront.net/68fe45e7ff61bce6635ea1af_1761494882314_78af8e84.png' 
  },
  { 
    name: 'COLD DRINKS', 
    color: 'bg-[#FFF4CC]', // Light yellow
    img: 'https://d64gsuwffb70l.cloudfront.net/68fe45e7ff61bce6635ea1af_1761494886004_65fa7e01.png' 
  }
];

const WhatWeOffer: React.FC = () => {
  return (
    <section className="bg-[#FFFBF5] py-20 px-6 md:px-16 relative overflow-hidden">
      {/* Decorative elements - light outline shapes */}
      <div className="absolute top-10 left-10 w-24 h-24 border-2 border-gray-200 rounded-[40%_60%_70%_30%/60%_40%_60%_40%] opacity-30" />
      <div className="absolute bottom-20 right-20 w-32 h-32 border-2 border-gray-200 rounded-[60%_40%_30%_70%/40%_60%_40%_60%] opacity-30" />

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 
          className="text-center mb-16"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(40px, 5vw, 56px)',
            fontWeight: 400,
            color: '#E91E8C',
            letterSpacing: '0.08em',
          }}
        >
          WHAT WE OFFER
        </h2>
        
        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
          {categories.map((cat, idx) => (
            <div 
              key={idx} 
              className="flex flex-col items-center group cursor-pointer"
            >
              {/* Organic Blob Shape Container */}
              <div 
                className={`relative w-56 h-56 ${cat.color} flex items-center justify-center overflow-hidden transition-all duration-500 ease-out shadow-md group-hover:shadow-xl`}
                style={{
                  borderRadius: '40% 60% 70% 30% / 60% 40% 60% 40%',
                  transition: 'all 0.5s ease-out',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'rotate(5deg) scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'rotate(0deg) scale(1)';
                }}
              >
                {/* Image - Only food visible (transparent background PNG) */}
                <img 
                  src={cat.img} 
                  alt={cat.name} 
                  className="w-40 h-40 object-contain transition-all duration-500 group-hover:scale-110"
                  style={{
                    filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))',
                  }}
                />
              </div>

              {/* Category Name */}
              <h3 
                className="mt-6 text-center"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: '22px',
                  fontWeight: 400,
                  color: '#5D4E6D',
                  letterSpacing: '0.06em',
                }}
              >
                {cat.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
