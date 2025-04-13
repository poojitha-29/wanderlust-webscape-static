
// Define the type for testimonial videos
export type TestimonialVideo = {
  id: string;
  type: "youtube" | "local";
  title: string;
  customer: string;
  location: string;
  thumbnail: string;
  videoSrc?: string;
};
