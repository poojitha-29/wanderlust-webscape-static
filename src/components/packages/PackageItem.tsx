
import React from 'react';
import { Package } from '@/types/package';

interface PackageItemProps {
  item: Package;
}

const PackageItem: React.FC<PackageItemProps> = ({ item }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
      <div className="h-48 overflow-hidden">
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=500";
          }}
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-xl text-gray-800 mb-2">{item.title}</h3>
        <p className="text-gray-600">{item.description}</p>
        <button className="mt-4 bg-ocean-500 hover:bg-ocean-600 text-white px-4 py-2 rounded-md transition-colors w-full">
          View Details
        </button>
      </div>
    </div>
  );
};

export default PackageItem;
