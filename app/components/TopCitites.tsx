import React from 'react';

const cities = [
  { name: 'New York', listings: '65+', image: '/NewYork.png' },
  { name: 'Paris', listings: '60+', image: '/Paris.png' },
  { name: 'Rome', listings: '50+', image: '/Rome.png' },
  { name: 'Italy', listings: '28+', image: '/Italy.png' },
  { name: 'Nepal', listings: '99+', image: '/Nepal.png' },
  { name: 'London', listings: '50+', image: '/Paris.png' },
];

const TopCities: React.FC = () => {
  return (
    <section className="py-12">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-extralight text-purple-800">Explore Top Cities</h2>
        <p className="text-gray-900">Let&apos;s uncover the best places to eat, drink, and shop nearest to you.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8 lg:px-12">
        {cities.map((city) => (
          <div key={city.name} className="relative rounded-lg overflow-hidden shadow-lg group">
            <div className="overflow-hidden rounded-lg">
              <img src={city.image} alt={city.name} className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white rounded-lg">
              <h3 className="text-2xl font-semibold">{city.name}</h3>
              <p className="mt-2 bg-purple-600 px-4 py-2 rounded-full transform transition-transform duration-500 hover:bg-purple-700 hover:scale-105">{city.listings} Listings</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopCities;
