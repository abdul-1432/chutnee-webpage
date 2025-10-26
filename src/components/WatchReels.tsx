import React, { useState } from 'react';

const reels = [
  { img: 'https://d64gsuwffb70l.cloudfront.net/68fe45e7ff61bce6635ea1af_1761494882314_78af8e84.png', video: 'dQw4w9WgXcQ' },
  { img: 'https://d64gsuwffb70l.cloudfront.net/68fe45e7ff61bce6635ea1af_1761494892899_8bb276b7.png', video: 'dQw4w9WgXcQ' },
  { img: 'https://d64gsuwffb70l.cloudfront.net/68fe45e7ff61bce6635ea1af_1761494891147_36a0e503.png', video: 'dQw4w9WgXcQ' },
  { img: 'https://d64gsuwffb70l.cloudfront.net/68fe45e7ff61bce6635ea1af_1761494886004_65fa7e01.png', video: 'dQw4w9WgXcQ' }
];

const WatchReels: React.FC = () => {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#FFFBF5] py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-['Bebas_Neue'] text-4xl md:text-5xl font-bold text-[#E91E8C] text-center tracking-[2px] mb-4">
          WATCH OUR REELS
        </h2>
        <p className="font-['Poppins'] text-base text-[#6B7280] text-center mb-12">
          Get a taste of what everyone's talking about. These are the Chutnée favourites our guests keep coming back for.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reels.map((reel, idx) => (
            <div key={idx} className="relative aspect-[9/16] rounded-xl overflow-hidden shadow-xl group">
              {playingIndex !== idx ? (
                <>
                  <img src={reel.img} alt="Reel thumbnail" className="w-full h-full object-cover" />
                  <button 
                    onClick={() => setPlayingIndex(idx)}
                    className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-2xl animate-pulse">
                      <svg className="w-8 h-8 text-[#E91E8C] ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </button>
                </>
              ) : (
                <div className="relative w-full h-full bg-black">
                  <button 
                    onClick={() => setPlayingIndex(null)}
                    className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-all"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  <iframe 
                    src={`https://www.youtube.com/embed/${reel.video}?autoplay=1`}
                    className="w-full h-full"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WatchReels;
