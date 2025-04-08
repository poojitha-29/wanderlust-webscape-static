
import React, { useState } from 'react';
import { Play, Pause } from 'lucide-react';

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = "MXTvxIhVHe4"; // A beautiful travel video compilation

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

  return (
    <section id="video" className="section bg-gray-100">
      <div className="container mx-auto">
        <h2 className="section-title text-gray-900">
          Travel <span className="text-ocean-500">Inspiration</span>
        </h2>
        <p className="section-subtitle">
          Immerse yourself in breathtaking landscapes and cultural experiences from around the globe.
        </p>
        
        <div className="relative max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl">
          <div className="aspect-w-16 aspect-h-9 relative">
            <iframe
              id="travel-video"
              src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
              title="Travel Inspiration Video"
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
        
        <div className="mt-10 text-center">
          <p className="text-lg text-gray-700">
            Discover more travel videos in our extensive collection and get inspired for your next journey.
          </p>
          <button className="mt-4 bg-ocean-500 hover:bg-ocean-600 text-white px-6 py-3 rounded-md transition-colors">
            Watch More
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
