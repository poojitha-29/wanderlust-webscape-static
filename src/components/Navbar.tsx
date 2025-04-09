
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white shadow py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/2055d84b-f9a3-4a41-a7e7-cdf49c1136ea.png" 
            alt="Sangeetha Holidays Logo" 
            className="h-14 mr-2"
          />
          <a href="#" className="text-2xl font-bold text-ocean-600 font-heading">
            Sangeetha Holidays
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection('home')}
            className="text-gray-800 hover:text-ocean-500 transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('gallery')}
            className="text-gray-800 hover:text-ocean-500 transition-colors"
          >
            Gallery
          </button>
          <button
            onClick={() => scrollToSection('packages')}
            className="text-gray-800 hover:text-ocean-500 transition-colors"
          >
            Packages
          </button>
          <button
            onClick={() => scrollToSection('video')}
            className="text-gray-800 hover:text-ocean-500 transition-colors"
          >
            Testimonials
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-gray-800 hover:text-ocean-500 transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-ocean-500 hover:bg-ocean-600 text-white px-5 py-2 rounded-md transition-colors"
          >
            Contact
          </button>
        </div>
        
        {/* Mobile Navigation Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-800"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-white z-40 pt-20 px-6 flex flex-col items-center space-y-6 md:hidden transition-all duration-300 ease-in-out transform",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <button
          onClick={() => scrollToSection('home')}
          className="text-xl font-medium text-gray-800 hover:text-ocean-500 transition-colors w-full text-center py-2"
        >
          Home
        </button>
        <button
          onClick={() => scrollToSection('gallery')}
          className="text-xl font-medium text-gray-800 hover:text-ocean-500 transition-colors w-full text-center py-2"
        >
          Gallery
        </button>
        <button
          onClick={() => scrollToSection('packages')}
          className="text-xl font-medium text-gray-800 hover:text-ocean-500 transition-colors w-full text-center py-2"
        >
          Packages
        </button>
        <button
          onClick={() => scrollToSection('video')}
          className="text-xl font-medium text-gray-800 hover:text-ocean-500 transition-colors w-full text-center py-2"
        >
          Testimonials
        </button>
        <button
          onClick={() => scrollToSection('about')}
          className="text-xl font-medium text-gray-800 hover:text-ocean-500 transition-colors w-full text-center py-2"
        >
          About
        </button>
        <button
          onClick={() => scrollToSection('contact')}
          className="bg-ocean-500 hover:bg-ocean-600 text-white px-6 py-3 rounded-md transition-colors w-full text-center mt-4"
        >
          Contact
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
