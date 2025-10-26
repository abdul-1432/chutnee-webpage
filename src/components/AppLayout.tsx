import React, { useState } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import WhatWeOffer from './WhatWeOffer';
import PopularDishes from './PopularDishes';
import WhyChoose from './WhyChoose';
import BestSellers from './BestSellers';
import ReserveTable from './ReserveTable';
import SocialMedia from './SocialMedia';
import WatchReels from './WatchReels';
import Gallery from './Gallery';
import Footer from './Footer';
import MenuModal from './MenuModal';
import BookingModal from './BookingModal';

const AppLayout: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navbar onBookingClick={() => setBookingOpen(true)} />
      <Hero onMenuClick={() => setMenuOpen(true)} onBookingClick={() => setBookingOpen(true)} />
      <About />
      <WhatWeOffer />
      <WhyChoose />      
      <BestSellers onMenuClick={() => setMenuOpen(true)} />
      <ReserveTable onBookingClick={() => setBookingOpen(true)} />
      <PopularDishes onMenuClick={() => setMenuOpen(true)} />
      <WatchReels />
      <SocialMedia />
      <Gallery />
      <Footer />
      
      <MenuModal isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
};

export default AppLayout;
