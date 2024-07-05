import React from 'react';

const cities = [
  { name: 'New York', listings: '65+', image: '/newyork.jpg' },
  { name: 'Paris', listings: '60+', image: '/paris.jpg' },
  { name: 'Rome', listings: '50+', image: '/rome.jpg' },
  { name: 'Italy', listings: '28+', image: '/italy.jpg' },
  { name: 'Nepal', listings: '99+', image: '/nepal.jpg' },
];

const TopCities: React.FC = () => {
  return (
    <section className="py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Explore Top Cities</h2>
        <p className="text-gray-600">Lets uncover the best places to eat, drink, and shop nearest to you.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cities.map((city) => (
          <div key={city.name} className="relative">
            <img src={"/NewYork.png"} alt={"New York"} className="w-full h-64 object-cover rounded-lg" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white rounded-lg">
              <h3 className="text-2xl font-semibold">{city.name}</h3>
              <p className="mt-2 bg-purple-600 px-4 py-2 rounded-full">{city.listings} Listing</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopCities;
