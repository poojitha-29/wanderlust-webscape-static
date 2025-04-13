
import React from 'react';
import { TestimonialVideo } from './types';

interface TestimonialInfoProps {
  activeVideo: TestimonialVideo;
}

const TestimonialInfo: React.FC<TestimonialInfoProps> = ({ activeVideo }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md max-w-4xl mx-auto mb-8">
      <h3 className="text-xl font-semibold text-gray-800">
        {activeVideo.title || "Customer Testimonial"}
      </h3>
      <p className="text-gray-600">
        {activeVideo.customer || "Happy Customer"} 
        {activeVideo.location && ` - ${activeVideo.location}`}
      </p>
    </div>
  );
};

export default TestimonialInfo;
