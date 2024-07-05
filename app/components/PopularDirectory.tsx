import React from 'react';

const directories = [
  { name: 'Urban areas', description: "Let's uncover the best places to eat, drink", category: 'Food & Restaurant', image: '/properties1' },
  { name: 'Urban areas', description: "Let's uncover the best places to eat, drink", category: 'Food & Restaurant', image: '/properties2' },
  { name: 'Urban areas', description: "Let's uncover the best places to eat, drink", category: 'Food & Restaurant', image: '/properties3' },
];

const PopularDirectory: React.FC = () => {
  return (
    <section className="py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Popular Directory</h2>
        <p className="text-gray-600">Lets uncover the best places to eat, drink, and shop nearest to you.</p>
      </div>
      <div className="flex space-x-4 overflow-x-auto">
        {directories.map((directory, index) => (
          <div key={index} className="flex-shrink-0 w-80">
            <div className="relative">
              <img src={"properties1.png"} alt={"Directory 1"} className="w-full h-48 object-cover rounded-lg" />
              <div className="absolute top-0 left-0 bg-black bg-opacity-50 text-white rounded-tr-lg rounded-bl-lg px-4 py-2">$$$</div>
              <div className="absolute top-0 right-0 bg-black bg-opacity-50 text-white rounded-tl-lg rounded-br-lg px-4 py-2">CLOSED</div>
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-xl font-semibold">{directory.name}</h3>
              <p className="text-gray-600">{directory.description}</p>
              <div className="mt-2 text-orange-600">{directory.category}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularDirectory;
