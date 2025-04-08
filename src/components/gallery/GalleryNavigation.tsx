
import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { GalleryRegion } from '@/types/gallery';

interface GalleryNavigationProps {
  activeRegion: 'all' | GalleryRegion;
  setActiveRegion: (region: 'all' | GalleryRegion) => void;
  currentSlide: number;
  totalSlides: number;
  handlePrevSlide: () => void;
  handleNextSlide: () => void;
  setCurrentSlide: (slide: number) => void;
}

const GalleryNavigation: React.FC<GalleryNavigationProps> = ({
  activeRegion,
  setActiveRegion,
  currentSlide,
  totalSlides,
  handlePrevSlide,
  handleNextSlide,
  setCurrentSlide
}) => {
  return (
    <>
      {/* Filter buttons */}
      <div className="flex justify-center gap-4 mb-10">
        <button 
          onClick={() => setActiveRegion('all')}
          className={cn(
            "px-5 py-2 rounded-md font-medium transition-colors",
            activeRegion === 'all' 
              ? "bg-ocean-500 text-white" 
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          )}
        >
          All Destinations
        </button>
        <button 
          onClick={() => setActiveRegion('india')}
          className={cn(
            "px-5 py-2 rounded-md font-medium transition-colors",
            activeRegion === 'india' 
              ? "bg-ocean-500 text-white" 
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          )}
        >
          Indian Destinations
        </button>
        <button 
          onClick={() => setActiveRegion('international')}
          className={cn(
            "px-5 py-2 rounded-md font-medium transition-colors",
            activeRegion === 'international' 
              ? "bg-ocean-500 text-white" 
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          )}
        >
          International Destinations
        </button>
      </div>

      {/* Navigation arrows */}
      <div className="flex items-center justify-between absolute top-1/2 left-0 right-0 -mx-12 transform -translate-y-1/2 pointer-events-none">
        <button 
          onClick={handlePrevSlide}
          className="bg-white rounded-full p-2 shadow-md text-ocean-500 hover:bg-ocean-500 hover:text-white transition-colors pointer-events-auto"
          aria-label="Previous destinations"
        >
          <ArrowLeft size={24} />
        </button>
        <button 
          onClick={handleNextSlide}
          className="bg-white rounded-full p-2 shadow-md text-ocean-500 hover:bg-ocean-500 hover:text-white transition-colors pointer-events-auto"
          aria-label="Next destinations"
        >
          <ArrowRight size={24} />
        </button>
      </div>

      {/* Slide indicators */}
      <div className="flex justify-center mt-8 gap-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-colors",
              currentSlide === index 
                ? "bg-ocean-500" 
                : "bg-gray-300 hover:bg-gray-400"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </>
  );
};

export default GalleryNavigation;
