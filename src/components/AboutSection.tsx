
import React from 'react';
import { Map, Compass, Globe, Briefcase } from 'lucide-react';

type FeatureProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const Feature = ({ icon, title, description }: FeatureProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="mb-4 text-ocean-500">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const AboutSection = () => {
  const features = [
    {
      icon: <Map size={36} />,
      title: "Curated Destinations",
      description: "Handpicked locations from around the world, featuring hidden gems and popular attractions."
    },
    {
      icon: <Compass size={36} />,
      title: "Expert Guides",
      description: "Travel guides written by experienced explorers who know the destinations intimately."
    },
    {
      icon: <Globe size={36} />,
      title: "Cultural Immersion",
      description: "Experience authentic local cultures, traditions, and cuisines on your journey."
    },
    {
      icon: <Briefcase size={36} />,
      title: "Hassle-Free Planning",
      description: "Comprehensive resources to plan your perfect trip with confidence and ease."
    }
  ];

  return (
    <section id="about" className="section bg-white">
      <div className="container mx-auto">
        <h2 className="section-title text-gray-900">
          About <span className="text-ocean-500">Wanderlust</span>
        </h2>
        <p className="section-subtitle">
          We're passionate about helping you discover the world's most amazing destinations and creating unforgettable travel experiences.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <Feature 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
        
        <div className="bg-ocean-50 p-8 rounded-lg">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-700 mb-4">
                At Wanderlust, we believe that travel is more than just visiting new places—it's about immersing yourself in different cultures, creating lasting memories, and growing as an individual.
              </p>
              <p className="text-gray-700 mb-4">
                Our mission is to inspire and empower travelers to explore the world with confidence, curiosity, and respect for local cultures and environments.
              </p>
              <p className="text-gray-700">
                Whether you're an experienced globetrotter or planning your first international trip, our resources are designed to help you discover, plan, and embark on journeys that will stay with you for a lifetime.
              </p>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800" 
                alt="Team of travel enthusiasts"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
