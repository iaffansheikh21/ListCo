// components/NewsSection.tsx

import React from 'react';
import Image from 'next/image';

const NewsSection: React.FC = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800">News & Updates</h2>
        <p className="text-gray-600 mb-8">Lets uncover the best places to eat, drink, and shop nearest to you.</p>
        <div className="flex flex-wrap justify-center space-y-6 md:space-y-0 md:space-x-6">
          <div className="max-w-xs bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
            <Image
              src="/news1.webp"
              alt="News 1"
              width={400}
              height={250}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <span className="bg-purple-500 text-white text-xs font-semibold rounded-full px-2 py-1">Tips</span>
              <p className="text-gray-500 text-sm mt-2">12 March | by Alan</p>
              <h3 className="text-lg font-semibold text-gray-800 mt-2">The Best SPA Salons For Your Relaxation</h3>
            </div>
          </div>
          <div className="max-w-xs bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
            <Image
              src="/news2.jpg"
              alt="News 2"
              width={400}
              height={250}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <span className="bg-purple-500 text-white text-xs font-semibold rounded-full px-2 py-1">Tips</span>
              <p className="text-gray-500 text-sm mt-2">12 March | by Alan</p>
              <h3 className="text-lg font-semibold text-gray-800 mt-2">The Best SPA Salons For Your Relaxation</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsSection;
