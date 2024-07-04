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
          <div className="small-section-tittle2 mb-45">
            <h4>Advanced Filter</h4>
          </div>
        </div>
      </div>

      <div className="category-listing mb-50">
        <div className="single-listing">
          <div className="select-job-items2">
            <button
              className="py-2 px-4 bg-white border border-gray-700 rounded-l-md rounded-r-md flex items-center"
              onClick={toggleCities}
            >
              <span className="mr-2">City</span>
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
              <div className="absolute left-0 mt-2 w-full bg-white text-black rounded-l-md rounded-r-md shadow-lg">
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                  Faisalabad
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                  Lahore
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                  Islamabad
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                  Karachi
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                  Rawalpindi
                </a>
              </div>
            )}
          </div>

          <div className="select-job-items2">
            <button
              className="py-2 px-4 bg-white border border-gray-700 rounded-l-md rounded-r-md flex items-center"
              onClick={toggleProvinces}
            >
              <span className="mr-2">Province</span>
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
              <div className="absolute left-0 mt-2 w-full bg-white text-black rounded-l-md rounded-r-md shadow-lg">
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                  Punjab
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                  Sindh
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                  Kpk
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                  Balochistan
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                  Gilgit Baltistan
                </a>
              </div>
            )}
          </div>

          <div className="select-job-items2">
            <button
              className="py-2 px-4 bg-white border border-gray-700 rounded-l-md rounded-r-md flex items-center"
              onClick={toggleDistances}
            >
              <span className="mr-2">Near 1 km</span>
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
              <div className="absolute left-0 mt-2 w-full bg-white text-black rounded-l-md rounded-r-md shadow-lg">
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                  2 km
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                  3 km
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                  4 km
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                  5 km
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                  6 km
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="price-range mb-50">
        <div className="small-section-tittle2 mb-20">
          <h4>Price range</h4>
        </div>
        <label className="container block mb-2">
          $50 - $150
          <input type="checkbox" className="ml-2" />
          <span className="checkmark"></span>
        </label>
        <label className="container block mb-2">
          $150 - $300
          <input type="checkbox" className="ml-2" checked={true} />
          <span className="checkmark"></span>
        </label>
        <label className="container block mb-2">
          $300 - $500
          <input type="checkbox" className="ml-2" />
          <span className="checkmark"></span>
        </label>
        <label className="container block mb-2">
          $500 - $1000
          <input type="checkbox" className="ml-2" />
          <span className="checkmark"></span>
        </label>
        <label className="container block mb-2">
          $1000 - Above
          <input type="checkbox" className="ml-2" />
          <span className="checkmark"></span>
        </label>
      </div>

      <div className="tags mb-50">
        <div className="small-section-tittle2 mb-20">
          <h4>Tags</h4>
        </div>
        <label className="container block mb-2">
          Wireless Internet
          <input type="checkbox" className="ml-2" />
          <span className="checkmark"></span>
        </label>
        <label className="container block mb-2">
          Accepts Credit Cards
          <input type="checkbox" className="ml-2" checked={true} />
          <span className="checkmark"></span>
        </label>
        <label className="container block mb-2">
          Smoking Allowed
          <input type="checkbox" className="ml-2" />
          <span className="checkmark"></span>
        </label>
        <label className="container block mb-2">
          Parking Street
          <input type="checkbox" className="ml-2" />
          <span className="checkmark"></span>
        </label>
        <label className="container block mb-2">
          Coupons
          <input type="checkbox" className="ml-2" />
          <span className="checkmark"></span>
        </label>
      </div>
    </div>
  );
};

export default AdvancedFilter;
