
import React from 'react';

/**
 * Testimonial information component
 * @param {Object} props
 * @param {import('./types').TestimonialVideo} [props.activeVideo]
 * @param {string} [props.title]
 * @param {string} [props.subtitle]
 */
const TestimonialInfo = ({ 
  activeVideo,
  title = "Customer Testimonials",
  subtitle = "See what our travelers have experienced on their journeys"
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md max-w-4xl mx-auto mb-8">
      <h3 className="text-xl font-semibold text-gray-800">
        {activeVideo ? activeVideo.title : title}
      </h3>
      <p className="text-gray-600">
        {activeVideo 
          ? `${activeVideo.customer || "Happy Customer"} ${activeVideo.location ? `- ${activeVideo.location}` : ''}`
          : subtitle
        }
      </p>
    </div>
  );
};

export default TestimonialInfo;
