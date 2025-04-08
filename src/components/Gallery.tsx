
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

type GalleryItem = {
  id: number;
  image: string;
  title: string;
  location: string;
};

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800',
    title: 'Paris Cityscape',
    location: 'France'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1523592121529-f6dde35f079e?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800',
    title: 'Santorini Sunset',
    location: 'Greece'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800',
    title: 'Amalfi Coast',
    location: 'Italy'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800',
    title: 'Kyoto Gardens',
    location: 'Japan'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1597000710656-de95785906d8?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800',
    title: 'Machu Picchu',
    location: 'Peru'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1533348922293-cec6736cd228?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800',
    title: 'Maldives Beach Resort',
    location: 'Maldives'
  },
];

const GalleryItem = ({ item, isVisible }: { item: GalleryItem; isVisible: boolean }) => {
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
      <img 
        src={item.image} 
        alt={item.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
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

  return (
    <section id="gallery" className="section bg-white">
      <div className="container mx-auto">
        <h2 className="section-title text-gray-900">
          Explore <span className="text-ocean-500">Destinations</span>
        </h2>
        <p className="section-subtitle">
          Browse through our collection of the world's most breathtaking locations and start planning your next adventure.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map(item => (
            <GalleryItem 
              key={item.id} 
              item={item}
              isVisible={visibleItems.includes(item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
