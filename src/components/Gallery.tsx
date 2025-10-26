import React from 'react';

const images = [
  'https://d64gsuwffb70l.cloudfront.net/68fe45e7ff61bce6635ea1af_1761494871116_1a847f41.png',
  'https://d64gsuwffb70l.cloudfront.net/68fe45e7ff61bce6635ea1af_1761494874119_769c65d4.png',
  'https://d64gsuwffb70l.cloudfront.net/68fe45e7ff61bce6635ea1af_1761494877844_f2862e44.png',
  'https://d64gsuwffb70l.cloudfront.net/68fe45e7ff61bce6635ea1af_1761494879976_ada958a8.png',
  'https://d64gsuwffb70l.cloudfront.net/68fe45e7ff61bce6635ea1af_1761494882314_78af8e84.png',
  'https://d64gsuwffb70l.cloudfront.net/68fe45e7ff61bce6635ea1af_1761494886004_65fa7e01.png',
  'https://d64gsuwffb70l.cloudfront.net/68fe45e7ff61bce6635ea1af_1761494891147_36a0e503.png',
  'https://d64gsuwffb70l.cloudfront.net/68fe45e7ff61bce6635ea1af_1761494892899_8bb276b7.png',
  'https://d64gsuwffb70l.cloudfront.net/68fe45e7ff61bce6635ea1af_1761494884119_f627055c.png'
];

const Gallery: React.FC = () => {
  const allImages = [...images, ...images];

  return (
    <section className="bg-[#FFFBF5] py-20 px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto mb-12">
        <h2 className="font-['Bebas_Neue'] text-4xl md:text-5xl font-bold text-[#E91E8C] tracking-[2px]">
          OUR GALLERY
        </h2>
      </div>

      <div className="relative">
        <div className="flex gap-6 animate-scroll-gallery hover:pause-animation">
          {allImages.map((img, idx) => (
            <div 
              key={idx}
              className="flex-shrink-0 w-80 h-80 rounded-xl overflow-hidden shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              <img 
                src={img} 
                alt={`Gallery ${idx + 1}`} 
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
