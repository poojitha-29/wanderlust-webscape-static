
import React, { useState } from 'react';
import { Play, Pause } from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from '@/components/ui/carousel';
import { ScrollArea } from '@/components/ui/scroll-area';

// Sample video data
const sampleVideos = [
  {
    id: "MXTvxIhVHe4",
    title: "Beautiful Destinations"
  },
  {
    id: "IV9fbwBQ-xM",
    title: "European Getaways"
  },
  {
    id: "4J9c2VNjC1g",
    title: "Beach Paradises"
  },
  {
    id: "BbvoAkrE7as",
    title: "Mountain Adventures"
  },
  {
    id: "HN9ngcxBnuE",
    title: "Cultural Experiences"
  }
];

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeVideoId, setActiveVideoId] = useState(sampleVideos[0].id);

  const togglePlay = () => {
    setIsPlaying(prev => !prev);
    const videoElement = document.getElementById('travel-video') as HTMLIFrameElement;
    if (videoElement) {
      const iframe = videoElement as HTMLIFrameElement;
      const src = iframe.src;
      if (isPlaying) {
        // Pause by reloading iframe without autoplay
        iframe.src = src.replace('&autoplay=1', '');
      } else {
        // Play by adding autoplay parameter
        if (src.includes('autoplay=1')) {
          // already has autoplay
          iframe.src = src;
        } else {
          iframe.src = src + '&autoplay=1';
        }
      }
    }
  };

  const selectVideo = (videoId: string) => {
    setActiveVideoId(videoId);
    setIsPlaying(false);
  };

  return (
    <section id="video" className="section bg-gray-100">
      <div className="container mx-auto">
        <h2 className="section-title text-gray-900">
          <span className="text-ocean-500">Videos</span>
        </h2>
        
        <div className="relative max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl mb-6">
          <div className="aspect-w-16 aspect-h-9 relative">
            <iframe
              id="travel-video"
              src={`https://www.youtube.com/embed/${activeVideoId}?rel=0&modestbranding=1`}
              title="Travel Video"
              className="absolute inset-0 w-full h-full"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
          
          <button
            onClick={togglePlay}
            className="absolute bottom-4 right-4 bg-ocean-500 hover:bg-ocean-600 text-white p-3 rounded-full transition-colors z-10"
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>
        </div>
        
        <div className="mt-6 mb-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">More Videos</h3>
          <ScrollArea className="h-[200px] w-full rounded-md border p-4">
            <Carousel className="w-full">
              <CarouselContent>
                {sampleVideos.map((video) => (
                  <CarouselItem key={video.id} className="md:basis-1/2 lg:basis-1/3">
                    <div 
                      className={`relative cursor-pointer transition-all duration-300 hover:opacity-90 ${activeVideoId === video.id ? 'ring-2 ring-ocean-500' : ''}`}
                      onClick={() => selectVideo(video.id)}
                    >
                      <div className="aspect-video rounded-md overflow-hidden">
                        <img 
                          src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                          alt={video.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-ocean-500/80 rounded-full p-2">
                          <Play size={20} className="text-white" />
                        </div>
                      </div>
                      <div className="p-2 bg-white/90 absolute bottom-0 w-full">
                        <p className="text-sm font-medium truncate">{video.title}</p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0" />
              <CarouselNext className="right-0" />
            </Carousel>
          </ScrollArea>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
