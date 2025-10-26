import React from 'react';

const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#2DD4BF] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center">
                <span className="font-bold text-sm">C</span>
              </div>
              <span className="font-['Bebas_Neue'] text-2xl tracking-wider">CHUTNEE</span>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="font-['Poppins'] text-sm">124 The Broadway, Southall, London, UB1 1QF</p>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:02085711688" className="font-['Poppins'] text-sm hover:underline">02085711688</a>
            </div>
          </div>

          <div>
            <h3 className="font-['Poppins'] text-base font-semibold mb-4 uppercase">Quick Links</h3>
            <div className="flex flex-col gap-3">
              <button onClick={() => scrollToSection('about')} className="text-sm text-left hover:underline font-['Poppins']">OUR STORY</button>
              <button onClick={() => scrollToSection('menu')} className="text-sm text-left hover:underline font-['Poppins']">MENU</button>
              <button className="text-sm text-left hover:underline font-['Poppins']">AFTERNOON TEA</button>
              <button className="text-sm text-left hover:underline font-['Poppins']">EVENTS</button>
              <button className="text-sm text-left hover:underline font-['Poppins']">CHUTNÉE FAMILY</button>
              <button onClick={() => scrollToSection('contact')} className="text-sm text-left hover:underline font-['Poppins']">CONTACT</button>
            </div>
          </div>

          <div>
            <h3 className="font-['Poppins'] text-base font-semibold mb-4 uppercase">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 hover:scale-110 transition-all">
                <span className="text-lg">📷</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 hover:scale-110 transition-all">
                <span className="text-lg">🎵</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 hover:scale-110 transition-all">
                <span className="text-lg">👻</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#26b8a6] py-4">
        <p className="text-center font-['Poppins'] text-xs">
          COPYRIGHT 2024 © ALL RIGHT RESERVED. DEVELOPED BY FOODO.AI
        </p>
      </div>
    </footer>
  );
};

export default Footer;
