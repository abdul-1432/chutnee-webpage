import React from 'react';

const WhyChoose: React.FC = () => {
  return (
    <section className="bg-[#FEF9F3] py-20 px-6 md:px-16 relative overflow-hidden">
      <div className="absolute top-10 left-10 w-32 h-32 text-[#2DD4BF] opacity-30">
        <svg viewBox="0 0 100 100" fill="currentColor">
          <path d="M50,10 L60,40 L90,40 L65,60 L75,90 L50,70 L25,90 L35,60 L10,40 L40,40 Z" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="relative order-2 md:order-1">
          <div className="relative w-full aspect-square rounded-[50%_50%_60%_40%/60%_40%_50%_50%] overflow-hidden bg-[#2DD4BF]/10">
            <img 
              src="https://d64gsuwffb70l.cloudfront.net/68fe45e7ff61bce6635ea1af_1761494889273_e7f6e10b.png" 
              alt="Drinks" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#FCD34D] rounded-[60%_40%_50%_50%] opacity-40" />
        </div>

        <div className="space-y-6 order-1 md:order-2">
          <h2 className="font-['Bebas_Neue'] text-4xl md:text-5xl font-bold text-[#E91E8C] tracking-[2px]">
            WHY CHOOSE CHUTNÉE
          </h2>
          <h3 className="font-['Poppins'] text-2xl font-semibold text-[#2B2D42]">
            Fresh Flavours. Authentic Vibes.
          </h3>
          <p className="font-['Poppins'] text-base text-[#6B7280] leading-relaxed">
            Discover bold, South Asian-inspired cuisine in the heart of Southall. From indulgent halal breakfasts to refined fusion lunches, every dish is prepared with love in a vibrant, modern flair—all served in a vibrant, welcoming space.
          </p>

          <div className="grid grid-cols-3 gap-6 pt-6">
            <div className="text-center">
              <div className="font-['Bebas_Neue'] text-5xl font-bold text-[#E91E8C]">100%</div>
              <p className="font-['Poppins'] text-sm text-[#6B7280] mt-2">Locally Sourced Ingredients</p>
            </div>
            <div className="text-center">
              <div className="font-['Bebas_Neue'] text-5xl font-bold text-[#E91E8C]">98%</div>
              <p className="font-['Poppins'] text-sm text-[#6B7280] mt-2">Friendly, Attentive Service</p>
            </div>
            <div className="text-center">
              <div className="font-['Bebas_Neue'] text-5xl font-bold text-[#E91E8C]">99%</div>
              <p className="font-['Poppins'] text-sm text-[#6B7280] mt-2">Perfect for Social Gatherings</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
