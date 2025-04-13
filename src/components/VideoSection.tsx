
import React, { useState, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from '@/components/ui/carousel';
import { ScrollArea } from '@/components/ui/scroll-area';

// Function to get testimonial videos from public folder
const getTestimonialVideos = () => {
  // In a real application, this would be dynamically generated from server
  // Here we're hardcoding based on files directly in the public folder
  return [
    // Sample YouTube videos
    {
      id: "MXTvxIhVHe4",
      type: "youtube" as const,
      title: "Manali Trip Review",
      customer: "Ramesh Kumar",
      location: "Delhi",
      thumbnail: "/manali-trip.jpg"
    },
    {
      id: "IV9fbwBQ-xM",
      type: "youtube" as const,
      title: "Kashmir Vacation Experience",
      customer: "Priya Singh",
      location: "Mumbai",
      thumbnail: "/kashmir-vacation.jpg"
    },
    {
      id: "4J9c2VNjC1g",
      type: "youtube" as const,
      title: "Europe Tour Feedback",
      customer: "Suresh Patel",
      location: "Ahmedabad",
      thumbnail: "/europe-tour.jpg"
    },
    {
      id: "BbvoAkrE7as",
      type: "youtube" as const,
      title: "Kerala Backwaters",
      customer: "Lakshmi Menon",
      location: "Bangalore",
      thumbnail: "/kerala-backwaters.jpg"
    },
    {
      id: "HN9ngcxBnuE",
      type: "youtube" as const,
      title: "Thailand Trip Highlights",
      customer: "Vikram Sharma",
      location: "Pune",
      thumbnail: "/thailand-trip.jpg"
    },
    
    // Local video files examples 
    {
      id: "testimonial-1",
      type: "local" as const,
      title: "Goa Beach Vacation",
      customer: "Anjali Mehta",
      location: "Chennai",
      videoSrc: "/testimonial-1.mp4",
      thumbnail: "/goa-beach.jpg"
    },
    {
      id: "testimonial-2",
      type: "local" as const,
      title: "Rajasthan Heritage Tour",
      customer: "Arjun Singh",
      location: "Jaipur",
      videoSrc: "/testimonial-2.mp4",
      thumbnail: "/rajasthan-heritage.jpg"
    }
    // Add more entries as needed based on files in your public folder
  ];
};

// Define the type for testimonial videos
type TestimonialVideo = {
  id: string;
  type: "youtube" | "local";
  title: string;
  customer: string;
  location: string;
  thumbnail: string;
  videoSrc?: string;
};

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [testimonials, setTestimonials] = useState<TestimonialVideo[]>([]);
  const [activeVideoId, setActiveVideoId] = useState('');
  const [activeVideoType, setActiveVideoType] = useState<"youtube" | "local">("youtube");
  const [activeVideoSrc, setActiveVideoSrc] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;

  useEffect(() => {
    // Load testimonial videos
    const videos = getTestimonialVideos();
    setTestimonials(videos);
    
    if (videos.length > 0) {
      const firstVideo = videos[0];
      setActiveVideoId(firstVideo.id);
      setActiveVideoType(firstVideo.type);
      if (firstVideo.type === 'local') {
        setActiveVideoSrc(firstVideo.videoSrc || '');
      }
    }
  }, []);

  const togglePlay = () => {
    setIsPlaying(prev => !prev);
    
    if (activeVideoType === 'youtube') {
      const videoElement = document.getElementById('testimonial-video') as HTMLIFrameElement;
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
    } else {
      // Handle local video play/pause
      const videoElement = document.getElementById('local-testimonial-video') as HTMLVideoElement;
      if (videoElement) {
        if (isPlaying) {
          videoElement.pause();
        } else {
          videoElement.play();
        }
      }
    }
  };

  const selectVideo = (video: TestimonialVideo) => {
    setActiveVideoId(video.id);
    setActiveVideoType(video.type);
    if (video.type === 'local') {
      setActiveVideoSrc(video.videoSrc || '');
    }
    setIsPlaying(false);
  };

  const totalPages = Math.ceil(testimonials.length / itemsPerPage);
  const displayTestimonials = testimonials.slice(
    currentPage * itemsPerPage, 
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section id="video" className="section bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-gray-900">
          <span className="text-ocean-500">Customer Testimonials</span>
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Hear what our satisfied customers have to say about their travel experiences with us.
        </p>
        
        <div className="relative max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl mb-6">
          {activeVideoType === 'youtube' ? (
            <div className="aspect-w-16 aspect-h-9 relative">
              <iframe
                id="testimonial-video"
                src={`https://www.youtube.com/embed/${activeVideoId}?rel=0&modestbranding=1`}
                title="Customer Testimonial"
                className="absolute inset-0 w-full h-full"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>
          ) : (
            <div className="aspect-w-16 aspect-h-9 relative">
              <video
                id="local-testimonial-video"
                src={activeVideoSrc}
                title="Customer Testimonial"
                className="absolute inset-0 w-full h-full object-cover"
                controls={false}
                playsInline
              ></video>
            </div>
          )}
          
          <button
            onClick={togglePlay}
            className="absolute bottom-4 right-4 bg-ocean-500 hover:bg-ocean-600 text-white p-3 rounded-full transition-colors z-10"
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>
        </div>
        
        {/* Video information */}
        {testimonials.length > 0 && (
          <div className="bg-white p-4 rounded-lg shadow-md max-w-4xl mx-auto mb-8">
            <h3 className="text-xl font-semibold text-gray-800">
              {testimonials.find(t => t.id === activeVideoId)?.title || "Customer Testimonial"}
            </h3>
            <p className="text-gray-600">
              {testimonials.find(t => t.id === activeVideoId)?.customer || "Happy Customer"} - 
              {testimonials.find(t => t.id === activeVideoId)?.location || ""}
            </p>
          </div>
        )}
        
        {/* Testimonial gallery */}
        <div className="mt-6 mb-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">More Testimonials</h3>
          <ScrollArea className="h-[240px] w-full rounded-md border p-4">
            <Carousel className="w-full">
              <CarouselContent>
                {displayTestimonials.map((video) => (
                  <CarouselItem key={video.id} className="md:basis-1/2 lg:basis-1/3">
                    <div 
                      className={`relative cursor-pointer transition-all duration-300 hover:opacity-90 ${activeVideoId === video.id ? 'ring-2 ring-ocean-500' : ''}`}
                      onClick={() => selectVideo(video)}
                    >
                      <div className="aspect-video rounded-md overflow-hidden">
                        <img 
                          src={video.thumbnail || (video.type === 'youtube' ? 
                              `https://img.youtube.com/vi/${video.id}/mqdefault.jpg` : 
                              '/placeholder.jpg')}
                          alt={video.title}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = '/placeholder.jpg';
                          }}
                        />
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-ocean-500/80 rounded-full p-2">
                          <Play size={20} className="text-white" />
                        </div>
                      </div>
                      <div className="p-2 bg-white/90 absolute bottom-0 w-full">
                        <p className="text-sm font-medium truncate">{video.title}</p>
                        <p className="text-xs text-gray-600 truncate">{video.customer}</p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </ScrollArea>
          
          {/* Pagination for testimonials */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-4 gap-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    currentPage === index 
                      ? 'bg-ocean-500 text-white' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          )}
        </div>
        
        {/* Instructions for adding more testimonials */}
        <div className="mt-10 bg-gray-50 p-6 rounded-lg border border-gray-200 max-w-2xl mx-auto">
          <h4 className="text-lg font-medium text-gray-800 mb-2">Adding More Testimonials</h4>
          <p className="text-sm text-gray-600 mb-2">
            To add more testimonials, update the <code className="bg-gray-100 px-1 py-0.5 rounded text-pink-600">getTestimonialVideos</code> function in this component.
          </p>
          <p className="text-sm text-gray-600">
            For YouTube videos: Add the video ID (the part after v= in YouTube URL)<br/>
            For local videos: Add video files directly to the public folder
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
