import React from 'react';

interface HeroProps {
  onMenuClick: () => void;
  onBookingClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onMenuClick, onBookingClick }) => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Images Grid */}
      <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-3">
        <div className="relative h-full overflow-hidden">
          <img 
            src="https://d64gsuwffb70l.cloudfront.net/68fe45e7ff61bce6635ea1af_1761494877844_f2862e44.png" 
            alt="Afternoon tea" 
            className="w-full h-full object-cover transition-transform duration-[8000ms] hover:scale-105"
          />
        </div>
        <div className="relative h-full overflow-hidden">
          <img 
            src="https://d64gsuwffb70l.cloudfront.net/68fe45e7ff61bce6635ea1af_1761494891147_36a0e503.png" 
            alt="Matilda Cake" 
            className="w-full h-full object-cover transition-transform duration-[8000ms] hover:scale-105"
          />
        </div>
        <div className="relative h-full overflow-hidden">
          <img 
            src="https://d64gsuwffb70l.cloudfront.net/68fe45e7ff61bce6635ea1af_1761494871116_1a847f41.png" 
            alt="Cherry blossom tea" 
            className="w-full h-full object-cover transition-transform duration-[8000ms] hover:scale-105"
          />
        </div>
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content - Left Aligned */}
      <div className="relative z-10 h-full flex items-center px-8 md:px-16 lg:px-24">
        <div className="max-w-2xl">
          {/* Heading - Bebas Neue with specific styling */}
          <h1 
            className="text-white leading-[0.95] mb-12"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(60px, 8vw, 100px)',
              fontWeight: 400,
              letterSpacing: '0.05em',
              textShadow: '2px 4px 12px rgba(0, 0, 0, 0.7)',
            }}
          >
            WELCOME TO<br />CHUTNÉE
          </h1>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-5">
            {/* View Menu Button */}
            <button 
              onClick={onMenuClick}
              className="group bg-[#2DD4BF] text-white px-10 py-4 rounded-lg uppercase tracking-wider hover:bg-[#1fb5a0] hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: '16px',
                fontWeight: 600,
                letterSpacing: '0.08em'
              }}
            >
              <span className="relative z-10">VIEW MENU</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
            
            {/* Book a Table Button */}
            <button 
              onClick={onBookingClick}
              className="group bg-[#E91E8C] text-white px-10 py-4 rounded-lg uppercase tracking-wider hover:bg-[#c21675] hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: '16px',
                fontWeight: 600,
                letterSpacing: '0.08em'
              }}
            >
              <span className="relative z-10">BOOK A TABLE</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
