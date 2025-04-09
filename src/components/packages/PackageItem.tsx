
import React, { useState } from 'react';
import { Package } from '@/types/package';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface PackageItemProps {
  item: Package;
}

const PackageItem: React.FC<PackageItemProps> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
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
          <button 
            className="mt-4 bg-ocean-500 hover:bg-ocean-600 text-white px-4 py-2 rounded-md transition-colors w-full"
            onClick={() => setIsOpen(true)}
          >
            View Details
          </button>
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold mb-4">{item.title}</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col items-center">
            <div className="w-full h-[60vh] relative rounded-lg overflow-hidden mb-4">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=500";
                }}
              />
            </div>
            <p className="text-lg text-gray-700 mt-4">{item.description}</p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PackageItem;
