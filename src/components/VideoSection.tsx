
import React, { useState, useEffect } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import TestimonialVideoPlayer from './testimonials/TestimonialVideoPlayer';
import TestimonialInfo from './testimonials/TestimonialInfo';
import TestimonialGallery from './testimonials/TestimonialGallery';
import { getTestimonialVideos } from './testimonials/testimonialData';
import { TestimonialVideo } from './testimonials/types';

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [testimonials, setTestimonials] = useState<TestimonialVideo[]>([]);
  const [activeVideoId, setActiveVideoId] = useState('');
  const [activeVideoType, setActiveVideoType] = useState<"youtube" | "local">("youtube");
  const [activeVideoSrc, setActiveVideoSrc] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [activeVideo, setActiveVideo] = useState<TestimonialVideo | null>(null);
  const itemsPerPage = 5;

  useEffect(() => {
    // Load testimonial videos
    const videos = getTestimonialVideos();
    setTestimonials(videos);
    
    if (videos.length > 0) {
      const firstVideo = videos[0];
      setActiveVideoId(firstVideo.id);
      setActiveVideoType(firstVideo.type);
      setActiveVideo(firstVideo);
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
    setActiveVideo(video);
    if (video.type === 'local') {
      setActiveVideoSrc(video.videoSrc || '');
    }
    setIsPlaying(false);
  };

  return (
    <section id="video" className="section bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-gray-900">
          <span className="text-ocean-500">Customer Testimonials</span>
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Hear what our satisfied customers have to say about their travel experiences with us.
        </p>
        
        {activeVideo && (
          <>
            <TestimonialVideoPlayer 
              activeVideo={activeVideo}
              isPlaying={isPlaying}
              togglePlay={togglePlay}
            />
            
            <TestimonialInfo activeVideo={activeVideo} />
          </>
        )}
        
        <ScrollArea className="h-[300px] w-full rounded-md border p-4">
          <TestimonialGallery
            testimonials={testimonials}
            activeVideoId={activeVideoId}
            selectVideo={selectVideo}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            itemsPerPage={itemsPerPage}
          />
        </ScrollArea>
        
        {/* Instructions for adding more testimonials */}
        <div className="mt-10 bg-gray-50 p-6 rounded-lg border border-gray-200 max-w-2xl mx-auto">
          <h4 className="text-lg font-medium text-gray-800 mb-2">Adding More Testimonials</h4>
          <p className="text-sm text-gray-600 mb-2">
            To add more testimonials, update the <code className="bg-gray-100 px-1 py-0.5 rounded text-pink-600">getTestimonialVideos</code> function in the testimonialData.ts file.
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
