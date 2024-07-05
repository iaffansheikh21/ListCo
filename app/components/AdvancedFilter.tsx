// components/AdvancedFilter.tsx
"use client" 
import React from 'react';

const AdvancedFilter: React.FC = () => {
  const [showCities, setShowCities] = React.useState(false);
  const [showProvinces, setShowProvinces] = React.useState(false);
  const [showDistances, setShowDistances] = React.useState(false);

  const toggleCities = () => {
    setShowCities(!showCities);
    setShowProvinces(false);
    setShowDistances(false);
  };

  const toggleProvinces = () => {
    setShowProvinces(!showProvinces);
    setShowCities(false);
    setShowDistances(false);
  };

  const toggleDistances = () => {
    setShowDistances(!showDistances);
    setShowCities(false);
    setShowProvinces(false);
  };

  return (
    <div className="col-xl-4 col-lg-4 col-md-6">
      <div className="row">
        <div className="col-12">
          <div className="small-section-tittle2 mb-4">
            <h4 className="text-white">Advanced Filter</h4>
          </div>
        </div>
      </div>

      <div className="category-listing mb-5">
        <div className="single-listing">
          <div className="select-job-items2 relative">
            <button
              className="w-full py-2 px-4 bg-gray-700 text-white border border-gray-600 rounded flex items-center justify-between hover:bg-gray-600 focus:outline-none"
              onClick={toggleCities}
            >
              <span>City</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {showCities && (
              <div className="absolute left-0 mt-2 w-full bg-white text-black rounded shadow-lg z-10">
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">Faisalabad</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">Lahore</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">Islamabad</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">Karachi</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">Rawalpindi</a>
              </div>
            )}
          </div>

          <div className="select-job-items2 relative mt-4">
            <button
              className="w-full py-2 px-4 bg-gray-700 text-white border border-gray-600 rounded flex items-center justify-between hover:bg-gray-600 focus:outline-none"
              onClick={toggleProvinces}
            >
              <span>Province</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {showProvinces && (
              <div className="absolute left-0 mt-2 w-full bg-white text-black rounded shadow-lg z-10">
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">Punjab</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">Sindh</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">Kpk</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">Balochistan</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">Gilgit Baltistan</a>
              </div>
            )}
          </div>

          <div className="select-job-items2 relative mt-4">
            <button
              className="w-full py-2 px-4 bg-gray-700 text-white border border-gray-600 rounded flex items-center justify-between hover:bg-gray-600 focus:outline-none"
              onClick={toggleDistances}
            >
              <span>Near 1 km</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {showDistances && (
              <div className="absolute left-0 mt-2 w-full bg-white text-black rounded shadow-lg z-10">
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">2 km</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">3 km</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">4 km</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">5 km</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">6 km</a>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="price-range mb-5">
        <div className="small-section-tittle2 mb-2">
          <h4 className="text-white">Price range</h4>
        </div>
        <div className="flex flex-col space-y-2">
          <label className="container block mb-2 text-white">
            $50 - $150
            <input type="checkbox" className="ml-2" />
            <span className="checkmark"></span>
          </label>
          <label className="container block mb-2 text-white">
            $150 - $300
            <input type="checkbox" className="ml-2" checked={true} />
            <span className="checkmark"></span>
          </label>
          <label className="container block mb-2 text-white">
            $300 - $500
            <input type="checkbox" className="ml-2" />
            <span className="checkmark"></span>
          </label>
          <label className="container block mb-2 text-white">
            $500 - $1000
            <input type="checkbox" className="ml-2" />
            <span className="checkmark"></span>
          </label>
          <label className="container block mb-2 text-white">
            $1000 - Above
            <input type="checkbox" className="ml-2" />
            <span className="checkmark"></span>
          </label>
        </div>
      </div>

      <div className="tags mb-5">
        <div className="small-section-tittle2 mb-2">
          <h4 className="text-white">Tags</h4>
        </div>
        <div className="flex flex-col space-y-2">
          <label className="container block mb-2 text-white">
            Wireless Internet
            <input type="checkbox" className="ml-2" />
            <span className="checkmark"></span>
          </label>
          <label className="container block mb-2 text-white">
            Accepts Credit Cards
            <input type="checkbox" className="ml-2" checked={true} />
            <span className="checkmark"></span>
          </label>
          <label className="container block mb-2 text-white">
            Smoking Allowed
            <input type="checkbox" className="ml-2" />
            <span className="checkmark"></span>
          </label>
          <label className="container block mb-2 text-white">
            Parking Street
            <input type="checkbox" className="ml-2" />
            <span className="checkmark"></span>
          </label>
          <label className="container block mb-2 text-white">
            Coupons
            <input type="checkbox" className="ml-2" />
            <span className="checkmark"></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default AdvancedFilter;
