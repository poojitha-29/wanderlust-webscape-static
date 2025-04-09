
import React from 'react';
import { packageItems } from '@/data/packageItems';
import PackageItem from './packages/PackageItem';

const PackagesSection = () => {
  return (
    <section id="packages" className="section bg-gray-50">
      <div className="container mx-auto">
        <h2 className="section-title text-gray-900">
          Our <span className="text-ocean-500">Packages</span>
        </h2>
        <p className="section-subtitle">
          Discover our specially curated travel packages designed to give you the ultimate travel experience.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {packageItems.map(item => (
            <PackageItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
