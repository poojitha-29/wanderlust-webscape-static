
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { ArrowLeft, ArrowRight } from 'lucide-react';

type GalleryItem = {
  id: number;
  image: string;
  title: string;
  location: string;
  region: 'india' | 'international';
};

const galleryItems: GalleryItem[] = [
  // Indian Destinations
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800',
    title: 'Taj Mahal',
    location: 'Agra, India',
    region: 'india'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1514222134-b57cbb8ce073?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800',
    title: 'Hawa Mahal',
    location: 'Jaipur, India',
    region: 'india'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdbc75?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800',
    title: 'Varanasi Ghats',
    location: 'Varanasi, India',
    region: 'india'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800',
    title: 'Kerala Backwaters',
    location: 'Kerala, India',
    region: 'india'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1585116938581-05301f348853?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800',
    title: 'Golden Temple',
    location: 'Amritsar, India',
    region: 'india'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1564019472231-4586c552dc27?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800',
    title: 'Gateway of India',
    location: 'Mumbai, India',
    region: 'india'
  },
  
  // International Destinations
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800',
    title: 'Eiffel Tower',
    location: 'Paris, France',
    region: 'international'
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1523592121529-f6dde35f079e?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800',
    title: 'Santorini',
    location: 'Greece',
    region: 'international'
  },
  {
    id: 9,
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800',
    title: 'Amalfi Coast',
    location: 'Italy',
    region: 'international'
  },
  {
    id: 10,
    image: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800',
    title: 'Kyoto Gardens',
    location: 'Japan',
    region: 'international'
  },
  {
    id: 11,
    image: 'https://images.unsplash.com/photo-1597000710656-de95785906d8?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800',
    title: 'Machu Picchu',
    location: 'Peru',
    region: 'international'
  },
  {
    id: 12,
    image: 'https://images.unsplash.com/photo-1533348922293-cec6736cd228?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800',
    title: 'Maldives Beach Resort',
    location: 'Maldives',
    region: 'international'
  },
];

const GalleryItem = ({ item, isVisible }: { item: GalleryItem; isVisible: boolean }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      setImageLoaded(true);
    }
  }, []);

  return (
    <div 
      className={cn(
        "relative group cursor-pointer overflow-hidden rounded-lg transition-all duration-500 transform hover:scale-[1.02]",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
      style={{ 
        transitionDelay: `${(item.id % 3) * 100}ms`,
        aspectRatio: '4/3' 
      }}
    >
      {!imageLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <span className="text-gray-500">Loading...</span>
        </div>
      )}
      <img 
        ref={imgRef}
        src={item.image} 
        alt={item.title}
        className={cn(
          "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110",
          imageLoaded ? "opacity-100" : "opacity-0"
        )}
        loading="lazy"
        onLoad={() => setImageLoaded(true)}
        onError={(e) => {
          console.error(`Failed to load image for ${item.title}`, e);
          // Attempt to reload with a fallback image
          (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800';
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
        <h3 className="text-xl font-bold">{item.title}</h3>
        <p className="text-sm text-white/80">{item.location}</p>
      </div>
    </div>
  );
};

const Gallery = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [activeRegion, setActiveRegion] = useState<'all' | 'india' | 'international'>('all');
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideContainerRef = useRef<HTMLDivElement>(null);

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
        
        {/* Gallery display with error handling */}
        <div className="relative">
          <div className="overflow-hidden" ref={slideContainerRef}>
            <div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              style={{ transform: `translateX(-${currentSlide * 100}%)`, transition: 'transform 500ms ease' }}
            >
              {filteredItems.map(item => (
                <GalleryItem 
                  key={item.id} 
                  item={item}
                  isVisible={visibleItems.includes(item.id)}
                />
              ))}
            </div>
          </div>
          
          {/* Navigation arrows */}
          <button 
            onClick={handlePrevSlide}
            className="absolute top-1/2 -left-12 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md text-ocean-500 hover:bg-ocean-500 hover:text-white transition-colors"
            aria-label="Previous destinations"
          >
            <ArrowLeft size={24} />
          </button>
          <button 
            onClick={handleNextSlide}
            className="absolute top-1/2 -right-12 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md text-ocean-500 hover:bg-ocean-500 hover:text-white transition-colors"
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
      </div>
    </section>
  );
};

export default Gallery;
