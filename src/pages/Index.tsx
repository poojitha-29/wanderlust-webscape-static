
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Gallery from '../components/Gallery';
import VideoSection from '../components/VideoSection';
import PackagesSection from '../components/PackagesSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Update page title
    document.title = 'Sangeetha Holidays - Let\'s See The World Together';
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <Gallery />
      <PackagesSection />
      <VideoSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
