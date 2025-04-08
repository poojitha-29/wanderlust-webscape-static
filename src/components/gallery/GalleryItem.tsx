
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { GalleryItem as GalleryItemType } from '@/types/gallery';

interface GalleryItemProps {
  item: GalleryItemType;
  isVisible: boolean;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ item, isVisible }) => {
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

export default GalleryItem;
