import React, { useState } from 'react';

const About: React.FC = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section id="about" className="bg-[#FEF9F3] py-20 md:py-28 px-6 md:px-16 relative overflow-hidden">
      <div className="absolute top-10 left-10 w-32 h-32 bg-[#FCD34D] rounded-full opacity-30 blur-3xl" />
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="font-['Bebas_Neue'] text-4xl md:text-5xl font-bold text-[#E91E8C] tracking-[2px] leading-tight">
            WHERE TRADITION MEETS INNOVATION IN EVERY BITE.
          </h2>
          <p className="font-['Poppins'] text-base text-[#6B7280] leading-relaxed">
            Founded by a passionate husband-and-wife duo, Chutnée is London's go-to for a bold and refreshing twist on South Asian street food. Our dishes are crafted from cherished family recipes using hand-picked ingredients and authentic spices.
          </p>
          <p className="font-['Poppins'] text-base text-[#6B7280] leading-relaxed">
            From signature chai to inventive plates paired with our vibrant chutney, every bite is made to surprise and comfort. More than a café, Chutnée is a celebration of South Asian food, art, and fusion delights bring the warmth of home to every dish.
          </p>
          <button className="bg-[#E91E8C] text-white px-8 py-3 rounded-lg font-['Poppins'] text-sm font-semibold uppercase tracking-wide hover:bg-[#d01a7d] hover:-translate-y-1 transition-all duration-300 flex items-center gap-2">
            VIEW ABOUT
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="relative">
          <div className="relative w-full aspect-square rounded-[40%_60%_70%_30%/60%_40%_60%_40%] overflow-hidden bg-[#E91E8C]/10">
            <img 
              src="https://d64gsuwffb70l.cloudfront.net/68fe45e7ff61bce6635ea1af_1761494884119_f627055c.png" 
              alt="Food preparation" 
              className="w-full h-full object-cover"
            />
            {!showVideo && (
              <button 
                onClick={() => setShowVideo(true)}
                className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-all group"
              >
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-[#E91E8C] ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </button>
            )}
            {showVideo && (
              <div className="absolute inset-0 bg-black">
                <button 
                  onClick={() => setShowVideo(false)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-all"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <iframe 
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
                  className="w-full h-full"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              </div>
            )}
          </div>
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#FCD34D] rounded-full opacity-40 blur-2xl" />
        </div>
      </div>
    </section>
  );
};

export default About;
