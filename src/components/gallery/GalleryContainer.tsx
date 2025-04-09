
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

  // Determine number of items per slide based on screen size
  // For mobile: 1 item, tablet: 2 items, desktop: 3 items per slide
  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(filteredItems.length / itemsPerSlide);
  
  // Ensure current slide doesn't exceed total slides
  const safeCurrentSlide = Math.min(currentSlide, totalSlides - 1);

  // Group items into slides
  const itemsToShow = filteredItems.slice(
    safeCurrentSlide * itemsPerSlide,
    (safeCurrentSlide + 1) * itemsPerSlide
  );

  return (
    <div className="overflow-hidden" ref={slideContainerRef}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {itemsToShow.map(item => (
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
