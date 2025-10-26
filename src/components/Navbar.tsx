import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onBookingClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onBookingClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [showTopBar, setShowTopBar] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      // Hide top bar after scrolling 50px
      setShowTopBar(scrollPosition < 50);
      
      // Make navbar solid after scrolling 100px
      setScrolled(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Top Info Bar - Disappears on scroll */}
      <div 
        className={`fixed top-0 left-0 right-0 z-50 bg-[#009688] text-white text-sm transition-all duration-300 ease-in-out ${
          showTopBar ? 'h-10 opacity-100' : 'h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center">
          {/* Left side - Contact info */}
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <span>📍</span>
              <span className="text-white">124 THE BROADWAY, SOUTHALL, LONDON, UB1 1QF</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📞</span>
              <span className="text-white">02085711888</span>
            </div>
          </div>
          
          {/* Right side - Social media icons */}
          <div className="flex items-center gap-4">
            <a 
              href="https://facebook.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 bg-white text-[#009688] rounded-full flex items-center justify-center text-xs font-bold hover:bg-[#FFD700] hover:text-white transition-colors duration-300"
            >
              f
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 bg-[#E91E63] text-white rounded-full flex items-center justify-center text-xs hover:bg-[#FFD700] transition-colors duration-300"
            >
              📷
            </a>
            <a 
              href="https://tiktok.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 bg-[#000] text-white rounded-full flex items-center justify-center text-xs hover:bg-[#FFD700] transition-colors duration-300"
            >
              🎵
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav 
        className={`fixed left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? 'bg-[#2DD4BF] shadow-lg' : 'bg-transparent'
        }`}
        style={{
          top: showTopBar ? '40px' : '0px',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <span className="text-white font-['Bebas_Neue'] text-2xl tracking-wider">CHUTNEE</span>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-10">
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-white text-sm font-medium hover:text-[#FFD700] transition-colors uppercase tracking-wide"
              >
                OUR STORY
              </button>
              <button 
                onClick={() => scrollToSection('menu')} 
                className="text-white text-sm font-medium hover:text-[#FFD700] transition-colors uppercase tracking-wide"
              >
                MENU
              </button>
              <button 
                onClick={() => scrollToSection('afternoon-tea')} 
                className="text-white text-sm font-medium hover:text-[#FFD700] transition-colors uppercase tracking-wide"
              >
                AFTERNOON TEA
              </button>
              <button 
                onClick={() => scrollToSection('events')} 
                className="text-white text-sm font-medium hover:text-[#FFD700] transition-colors uppercase tracking-wide"
              >
                EVENTS
              </button>
              <button 
                onClick={() => scrollToSection('family')} 
                className="text-white text-sm font-medium hover:text-[#FFD700] transition-colors uppercase tracking-wide"
              >
                CHUTNÉE FAMILY
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-white text-sm font-medium hover:text-[#FFD700] transition-colors uppercase tracking-wide"
              >
                CONTACT
              </button>
              <button 
                onClick={onBookingClick}
                className="bg-[#E91E8C] text-white px-6 py-2 rounded-lg font-['Poppins'] text-sm font-semibold uppercase tracking-wide hover:bg-[#d01a7d] hover:shadow-lg transform hover:-translate-y-1 transition-all"
              >
                RESERVATION
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="lg:hidden text-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div 
            className="absolute inset-0 bg-black/70 backdrop-blur-sm" 
            onClick={() => setMobileMenuOpen(false)} 
          />
          <div className="absolute right-0 top-0 bottom-0 w-72 bg-[#2DD4BF] p-6 shadow-2xl transform transition-transform duration-300">
            <button 
              onClick={() => setMobileMenuOpen(false)} 
              className="absolute top-4 right-4 text-white hover:text-[#FFD700] transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="flex flex-col gap-4 mt-16">
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-white text-left py-3 px-4 hover:bg-white/10 rounded-lg transition-all uppercase tracking-wide font-medium"
              >
                OUR STORY
              </button>
              <button 
                onClick={() => scrollToSection('menu')} 
                className="text-white text-left py-3 px-4 hover:bg-white/10 rounded-lg transition-all uppercase tracking-wide font-medium"
              >
                MENU
              </button>
              <button 
                onClick={() => scrollToSection('afternoon-tea')} 
                className="text-white text-left py-3 px-4 hover:bg-white/10 rounded-lg transition-all uppercase tracking-wide font-medium"
              >
                AFTERNOON TEA
              </button>
              <button 
                onClick={() => scrollToSection('events')} 
                className="text-white text-left py-3 px-4 hover:bg-white/10 rounded-lg transition-all uppercase tracking-wide font-medium"
              >
                EVENTS
              </button>
              <button 
                onClick={() => scrollToSection('family')} 
                className="text-white text-left py-3 px-4 hover:bg-white/10 rounded-lg transition-all uppercase tracking-wide font-medium"
              >
                CHUTNÉE FAMILY
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-white text-left py-3 px-4 hover:bg-white/10 rounded-lg transition-all uppercase tracking-wide font-medium"
              >
                CONTACT
              </button>
              <button 
                onClick={() => { 
                  onBookingClick(); 
                  setMobileMenuOpen(false); 
                }}
                className="bg-[#E91E8C] text-white px-6 py-3 rounded-lg font-['Poppins'] text-sm font-semibold uppercase tracking-wide hover:bg-[#d01a7d] transition-all mt-4"
              >
                RESERVATION
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
