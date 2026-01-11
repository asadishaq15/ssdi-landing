// src/pages/HomePage.tsx
import React from 'react';
import Navbar from '../Components/Navbar';

import Footer from '../Components/Footer';
import HeroSection from '../Components/HeroSection';
import BenefitsSection from '../Components/BenefitsSection';
import TestimonialsSection from '../Components/TestimonialsSection';
import CookieConsent from '../Components/CookieConsent';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <BenefitsSection />
        <TestimonialsSection />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default HomePage;