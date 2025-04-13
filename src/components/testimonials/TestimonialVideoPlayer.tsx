
import React, { useState, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';
import { TestimonialVideo } from './types';

interface TestimonialVideoPlayerProps {
  activeVideo: TestimonialVideo;
  isPlaying: boolean;
  togglePlay: () => void;
}

const TestimonialVideoPlayer: React.FC<TestimonialVideoPlayerProps> = ({
  activeVideo,
  isPlaying,
  togglePlay
}) => {
  return (
    <div className="relative max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl mb-6">
      {activeVideo.type === 'youtube' ? (
        <div className="aspect-w-16 aspect-h-9 relative">
          <iframe
            id="testimonial-video"
            src={`https://www.youtube.com/embed/${activeVideo.id}?rel=0&modestbranding=1`}
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
            src={activeVideo.videoSrc}
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
  );
};

export default TestimonialVideoPlayer;
