import { useState, useEffect } from 'react';

const SUPPORTED_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp'];

export const useTestimonialImages = (folderPath = '/testimonials') => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      setIsLoading(true);
      try {
        // In a real production environment, you would implement server-side 
        // directory reading. For this example, we'll simulate it with the testimonialData
        const response = await fetch(`${folderPath}/index.json`).catch(() => {
          // If index.json doesn't exist, we'll fall back to our hardcoded list
          // In a real app, this would be replaced with a directory scan API endpoint
          return { ok: false };
        });

        if (response.ok && response.json) {
          // If an index.json exists, use it
          const data = await response.json();
          setImages(data);
        } else {
          // Otherwise use the following logic to scan for images in the public folder
          // This is a simulation - in a production environment, this would be done server-side
          
          // For demo purposes, we'll create image entries for all files in the public folder 
          // with supported extensions
          const simulatedImages = [];
          
          // Check for files that match image patterns in the public folder
          const fileNames = [
            'beach-vacation.jpg',
            'mountain-trip.jpg',
            'city-tour.jpg',
            'safari-adventure.png',
            'cruise-vacation.jpg',
            'desert-expedition.webp',
            'forest-hike.jpg',
            'island-hopping.jpg',
            'manali-trip.jpg',
            'kashmir-vacation.jpg',
            'europe-tour.jpg',
            'kerala-backwaters.jpg',
            'thailand-trip.jpg',
            'goa-beach.jpg',
            'rajasthan-heritage.jpg'
          ];
          
          // Generate image objects for each found file
          fileNames.forEach((fileName, index) => {
            const ext = fileName.substring(fileName.lastIndexOf('.'));
            if (SUPPORTED_EXTENSIONS.includes(ext.toLowerCase())) {
              simulatedImages.push({
                id: `img-${index}`,
                src: `${folderPath}/${fileName}`,
                alt: `Travel testimonial ${index + 1}`
              });
            }
          });
          
          setImages(simulatedImages);
        }
      } catch (err) {
        console.error('Error fetching testimonial images:', err);
        setError('Failed to load testimonial images');
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [folderPath]);

  return { images, isLoading, error };
};
