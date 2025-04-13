
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { useIsMobile } from '@/hooks/use-mobile';

/**
 * Testimonial image slider component
 * @param {Object} props
 * @param {import('./types').TestimonialImage[]} props.images
 * @param {number} [props.autoplaySpeed]
 * @param {boolean} [props.isPaused]
 */
const TestimonialImageSlider = ({
  images,
  autoplaySpeed = 5000,
  isPaused = false
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const autoplayTimerRef = useRef(null);
  const sliderRef = useRef(null);
  const isMobile = useIsMobile();

  const totalImages = images.length;
  const visibleItems = isMobile ? 1 : Math.min(3, totalImages);

  const nextSlide = () => {
    if (isTransitioning || images.length <= visibleItems) return;
    
    setIsTransitioning(true);
    setCurrentIndex(prev => (prev + 1) % (totalImages - visibleItems + 1));
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  const prevSlide = () => {
    if (isTransitioning || images.length <= visibleItems) return;
    
    setIsTransitioning(true);
    setCurrentIndex(prev => (prev === 0 ? totalImages - visibleItems : prev - 1));
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  const goToSlide = (index) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex(Math.min(index, totalImages - visibleItems));
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  // Set up autoplay
  useEffect(() => {
    if (isPaused || images.length <= visibleItems) {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
        autoplayTimerRef.current = null;
      }
      return;
    }

    autoplayTimerRef.current = setInterval(() => {
      nextSlide();
    }, autoplaySpeed);

    return () => {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
        autoplayTimerRef.current = null;
      }
    };
  }, [isPaused, currentIndex, images.length, autoplaySpeed, visibleItems]);

  // Handle slider progress
  const sliderValue = [Math.min(100, (currentIndex / (totalImages - visibleItems)) * 100 || 0)];
  
  const handleSliderChange = (value) => {
    const targetIndex = Math.round((value[0] / 100) * (totalImages - visibleItems));
    goToSlide(targetIndex);
  };

  if (images.length === 0) {
    return (
      <div className="flex items-center justify-center h-64 bg-gray-100 rounded-md">
        <p className="text-gray-500">No testimonial images found</p>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-lg w-full">
      {/* Main slider container */}
      <div className="relative">
        <div 
          ref={sliderRef}
          className="flex transition-transform duration-500 ease-in-out"
          style={{ 
            transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`,
          }}
        >
          {images.map((image) => (
            <div 
              key={image.id} 
              className="w-full shrink-0 px-2"
              style={{ flex: `0 0 ${100 / visibleItems}%` }}
            >
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-md">
                <img 
                  src={image.src.startsWith('/') ? image.src : `/${image.src}`} 
                  alt={image.alt || 'Testimonial'} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  onError={(e) => {
                    const target = e.target;
                    target.src = '/placeholder.svg';
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        
        {/* Navigation arrows */}
        {images.length > visibleItems && (
          <>
            <Button 
              variant="outline" 
              size="icon" 
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 hover:bg-white"
              onClick={prevSlide}
              disabled={isTransitioning}
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous</span>
            </Button>
            
            <Button 
              variant="outline" 
              size="icon" 
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 hover:bg-white"
              onClick={nextSlide}
              disabled={isTransitioning}
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next</span>
            </Button>
          </>
        )}
      </div>
      
      {/* Progress slider */}
      {images.length > visibleItems && (
        <div className="mt-4 px-2">
          <Slider
            value={sliderValue}
            onValueChange={handleSliderChange}
            max={100}
            step={1}
            className="w-full"
          />
        </div>
      )}
    </div>
  );
};

export default TestimonialImageSlider;
