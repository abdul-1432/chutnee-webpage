import React, { useState } from 'react';

interface ReserveTableProps {
  onBookingClick: () => void;
}

const ReserveTable: React.FC<ReserveTableProps> = ({ onBookingClick }) => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section id="reserve" className="relative py-24 px-8 md:px-20 overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://d64gsuwffb70l.cloudfront.net/68fe0596af09f392841ecaee_1761478112721_54bc7918.webp" 
          alt="Restaurant interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/70" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-7">
          <h2 className="font-['Bebas_Neue'] text-[56px] md:text-[64px] font-normal text-[#2B2D42] tracking-[3px] leading-[1.1]">
            RESERVE YOUR<br />TABLE AT CHUTNÉE
          </h2>
          <p className="font-['Poppins'] text-[15px] text-[#4B5563] leading-[1.8] font-light max-w-md">
            Whether you're planning a cozy breakfast, a family dinner, or a stylish catch-up with friends — we've got the perfect seat waiting for you.
          </p>
          <button 
            onClick={onBookingClick}
            className="bg-[#E91E8C] text-white px-9 py-[18px] rounded-md font-['Poppins'] text-[14px] font-medium uppercase tracking-[1.5px] hover:bg-[#d01a7d] transition-all duration-300 mt-2"
          >
            BOOK A TABLE →
          </button>
        </div>

        <div className="relative flex justify-center items-center">
          {!showVideo ? (
            <button 
              onClick={() => setShowVideo(true)}
              className="w-[100px] h-[100px] rounded-full bg-[#E91E8C] flex items-center justify-center shadow-xl hover:scale-105 transition-transform border-4 border-white"
            >
              <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          ) : (
            <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
              <button 
                onClick={() => setShowVideo(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/95 flex items-center justify-center hover:bg-white transition-all"
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
      </div>
    </section>
  );
};

export default ReserveTable;
