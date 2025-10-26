import React from 'react';

const socialPlatforms = [
  { 
    name: 'TIKTOK', 
    img: 'https://d64gsuwffb70l.cloudfront.net/68fe45e7ff61bce6635ea1af_1761494891147_36a0e503.png',
    color: 'bg-[#FF6B35]',
    shape: 'rounded-[60%_40%_30%_70%/60%_30%_70%_40%]'
  },
  { 
    name: 'IG', 
    img: 'https://d64gsuwffb70l.cloudfront.net/68fe45e7ff61bce6635ea1af_1761494879976_ada958a8.png',
    color: 'bg-[#E91E8C]',
    shape: 'rounded-[50%_50%_50%_50%/60%_60%_40%_40%]'
  },
  { 
    name: 'SNAP', 
    img: 'https://d64gsuwffb70l.cloudfront.net/68fe45e7ff61bce6635ea1af_1761494892899_8bb276b7.png',
    color: 'bg-[#2B2D42]',
    shape: 'rounded-[40%_60%_60%_40%/50%_50%_50%_50%]'
  }
];

const SocialMedia: React.FC = () => {
  return (
    <section className="bg-[#FFE8F5] py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-['Bebas_Neue'] text-3xl md:text-5xl font-bold text-[#E91E8C] text-center tracking-[2px] mb-16 leading-tight">
          STAY CONNECTED & SHARE<br/>YOUR EXPERIENCE WITH US!
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {socialPlatforms.map((platform, idx) => (
            <a 
              key={idx}
              href="#"
              className="group cursor-pointer flex flex-col items-center"
            >
              <div className={`relative w-72 h-72 ${platform.color} ${platform.shape} overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-2xl`}>
                <img 
                  src={platform.img} 
                  alt={platform.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <span className="font-['Bebas_Neue'] text-5xl font-bold text-white tracking-[3px]">
                    {platform.name}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
