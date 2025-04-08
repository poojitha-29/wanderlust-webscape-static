
import React, { useRef } from 'react';
import GalleryItem from './GalleryItem';
import { GalleryItem as GalleryItemType } from '@/types/gallery';

interface GalleryContainerProps {
  filteredItems: GalleryItemType[];
  visibleItems: number[];
  currentSlide: number;
}

const GalleryContainer: React.FC<GalleryContainerProps> = ({ 
  filteredItems, 
  visibleItems, 
  currentSlide 
}) => {
  const slideContainerRef = useRef<HTMLDivElement>(null);

  return (
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
  );
};

export default GalleryContainer;
