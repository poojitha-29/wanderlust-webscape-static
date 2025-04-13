
/**
 * Function to get testimonial videos from public folder
 * @returns {import('./types').TestimonialVideo[]}
 */
export const getTestimonialVideos = () => {
  // In a real application, this would be dynamically generated from server
  // Here we're hardcoding based on files directly in the public folder
  return [
    // Sample YouTube videos
    {
      id: "MXTvxIhVHe4",
      type: "youtube",
      title: "Manali Trip Review",
      customer: "Ramesh Kumar",
      location: "Delhi",
      thumbnail: "/manali-trip.jpg"
    },
    {
      id: "IV9fbwBQ-xM",
      type: "youtube",
      title: "Kashmir Vacation Experience",
      customer: "Priya Singh",
      location: "Mumbai",
      thumbnail: "/kashmir-vacation.jpg"
    },
    {
      id: "4J9c2VNjC1g",
      type: "youtube",
      title: "Europe Tour Feedback",
      customer: "Suresh Patel",
      location: "Ahmedabad",
      thumbnail: "/europe-tour.jpg"
    },
    {
      id: "BbvoAkrE7as",
      type: "youtube",
      title: "Kerala Backwaters",
      customer: "Lakshmi Menon",
      location: "Bangalore",
      thumbnail: "/kerala-backwaters.jpg"
    },
    {
      id: "HN9ngcxBnuE",
      type: "youtube",
      title: "Thailand Trip Highlights",
      customer: "Vikram Sharma",
      location: "Pune",
      thumbnail: "/thailand-trip.jpg"
    },
    
    // Local video files examples 
    {
      id: "testimonial-1",
      type: "local",
      title: "Goa Beach Vacation",
      customer: "Anjali Mehta",
      location: "Chennai",
      videoSrc: "/testimonial-1.mp4",
      thumbnail: "/goa-beach.jpg"
    },
    {
      id: "testimonial-2",
      type: "local",
      title: "Rajasthan Heritage Tour",
      customer: "Arjun Singh",
      location: "Jaipur",
      videoSrc: "/testimonial-2.mp4",
      thumbnail: "/rajasthan-heritage.jpg"
    }
    // Add more entries as needed based on files in your public folder
  ];
};
