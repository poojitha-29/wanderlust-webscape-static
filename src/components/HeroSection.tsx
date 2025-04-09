
import React from 'react';
import { ArrowDownCircle } from 'lucide-react';

const HeroSection = () => {
  const scrollToGallery = () => {
    const element = document.getElementById('gallery');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const scrollToVideo = () => {
    const element = document.getElementById('video');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in leading-tight">
            Let's See The World Together
          </h1>
          <p className="text-xl text-white opacity-90 mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Embark on a journey of discovery, adventure, and unforgettable experiences with Sangeetha Holidays' curated travel guides.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <button
              onClick={scrollToGallery}
              className="bg-ocean-500 hover:bg-ocean-600 text-white px-8 py-3 rounded-md transition-all transform hover:scale-105 font-medium"
            >
              Explore Destinations
            </button>
            <button 
              onClick={scrollToVideo}
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md transition-all transform hover:scale-105 hover:bg-white/10 font-medium"
            >
              Customer Testimonials
            </button>
          </div>
        </div>
      </div>
      
      <button
        onClick={scrollToGallery}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
        aria-label="Scroll to gallery"
      >
        <ArrowDownCircle size={40} />
      </button>
    </section>
  );
};

export default HeroSection;
