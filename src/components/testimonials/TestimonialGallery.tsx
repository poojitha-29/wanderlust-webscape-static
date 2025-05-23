
import React from 'react';
import { TestimonialVideo } from './types';
import TestimonialGalleryItem from './TestimonialGalleryItem';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from '@/components/ui/carousel';
import { 
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink
} from '@/components/ui/pagination';

interface TestimonialGalleryProps {
  testimonials: TestimonialVideo[];
  activeVideoId: string;
  selectVideo: (video: TestimonialVideo) => void;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  itemsPerPage: number;
}

const TestimonialGallery: React.FC<TestimonialGalleryProps> = ({
  testimonials,
  activeVideoId,
  selectVideo,
  currentPage,
  setCurrentPage,
  itemsPerPage
}) => {
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);
  const displayTestimonials = testimonials.slice(
    currentPage * itemsPerPage, 
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div className="mt-6 mb-4">
      <h3 className="text-xl font-semibold text-gray-800 mb-3">More Testimonials</h3>
      <Carousel className="w-full">
        <CarouselContent>
          {displayTestimonials.map((video) => (
            <CarouselItem key={video.id} className="md:basis-1/2 lg:basis-1/3">
              <TestimonialGalleryItem 
                video={video}
                isActive={activeVideoId === video.id}
                onSelect={() => selectVideo(video)}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>
      
      {/* Pagination for testimonials */}
      {totalPages > 1 && (
        <Pagination className="mt-4">
          <PaginationContent>
            {Array.from({ length: totalPages }).map((_, index) => (
              <PaginationItem key={index}>
                <PaginationLink
                  onClick={() => setCurrentPage(index)}
                  isActive={currentPage === index}
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
};

export default TestimonialGallery;
