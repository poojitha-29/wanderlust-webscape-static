
import React from 'react';
import { Play } from 'lucide-react';

/**
 * Individual testimonial gallery item
 * @param {Object} props
 * @param {import('./types').TestimonialVideo} props.video
 * @param {boolean} props.isActive
 * @param {Function} props.onSelect
 */
const TestimonialGalleryItem = ({
  video,
  isActive,
  onSelect
}) => {
  return (
    <div 
      className={`relative cursor-pointer transition-all duration-300 hover:opacity-90 ${isActive ? 'ring-2 ring-ocean-500' : ''}`}
      onClick={onSelect}
    >
      <div className="aspect-video rounded-md overflow-hidden">
        <img 
          src={video.thumbnail || (video.type === 'youtube' ? 
              `https://img.youtube.com/vi/${video.id}/mqdefault.jpg` : 
              '/placeholder.jpg')}
          alt={video.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target;
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
  );
};

export default TestimonialGalleryItem;
