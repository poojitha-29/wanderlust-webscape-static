
import React, { useState, useEffect } from 'react';
import { galleryItems } from '@/data/galleryItems';
import GalleryContainer from './gallery/GalleryContainer';
import GalleryNavigation from './gallery/GalleryNavigation';
import { GalleryRegion } from '@/types/gallery';

const Gallery = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [activeRegion, setActiveRegion] = useState<'all' | GalleryRegion>('all');
  const [currentSlide, setCurrentSlide] = useState(0);

  // Filter items based on active region
  const filteredItems = activeRegion === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.region === activeRegion);

  // Calculate the number of slides (3 items per slide on large screens)
  const totalSlides = Math.ceil(filteredItems.length / 3);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target as HTMLElement;
            setVisibleItems(prev => [...galleryItems.map(item => item.id)]);
            observer.unobserve(section);
          }
        });
      },
      { threshold: 0.1 }
    );

    const gallerySection = document.getElementById('gallery');
    if (gallerySection) {
      observer.observe(gallerySection);
    }

    return () => {
      if (gallerySection) {
        observer.unobserve(gallerySection);
      }
    };
  }, []);

  // Reset current slide when changing regions
  useEffect(() => {
    setCurrentSlide(0);
  }, [activeRegion]);

  const handleNextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(prev => prev + 1);
    } else {
      setCurrentSlide(0); // Loop back to the first slide
    }
  };

  const handlePrevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    } else {
      setCurrentSlide(totalSlides - 1); // Loop to the last slide
    }
  };

  return (
    <section id="gallery" className="section bg-white">
      <div className="container mx-auto">
        <h2 className="section-title text-gray-900">
          Explore <span className="text-ocean-500">Destinations</span>
        </h2>
        <p className="section-subtitle">
          Browse through our collection of the world's most breathtaking locations and start planning your next adventure.
        </p>
        
        <GalleryNavigation 
          activeRegion={activeRegion}
          setActiveRegion={setActiveRegion}
          currentSlide={currentSlide}
          totalSlides={totalSlides}
          handlePrevSlide={handlePrevSlide}
          handleNextSlide={handleNextSlide}
          setCurrentSlide={setCurrentSlide}
        />
        
        {/* Gallery display with error handling */}
        <div className="relative">
          <GalleryContainer 
            filteredItems={filteredItems}
            visibleItems={visibleItems}
            currentSlide={currentSlide}
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
