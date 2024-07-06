// components/HowItWorks.tsx

import React from 'react';

const HowItWorks: React.FC = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">How it works</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Let&apos;s uncover the best places to eat, drink, and shop nearest to you.
          </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 gap-x-8">
            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mx-auto">
                <span>01</span>
              </div>
              <h3 className="mt-5 text-lg leading-6 font-medium text-gray-900">Find Businesses</h3>
              <p className="mt-2 text-base text-gray-500">
                Discover & connect with great local businesses in your local neighborhood like dentists, hair stylists and more.
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mx-auto">
                <span>02</span>
              </div>
              <h3 className="mt-5 text-lg leading-6 font-medium text-gray-900">Review Listings</h3>
              <p className="mt-2 text-base text-gray-500">
                Discover & connect with great local businesses in your local neighborhood like dentists, hair stylists and more.
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mx-auto">
                <span>03</span>
              </div>
              <h3 className="mt-5 text-lg leading-6 font-medium text-gray-900">Make a Reservation</h3>
              <p className="mt-2 text-base text-gray-500">
                Discover & connect with great local businesses in your local neighborhood like dentists, hair stylists and more.
              </p>
            </div>
          </div>
          <div className="mt-10 flex justify-center">
            <button className="px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
              Explore Listing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;