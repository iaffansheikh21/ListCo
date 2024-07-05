"use client"

import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const directories = [
  { name: 'Urban areas1', description: "Let's uncover the best places to eat, drink", category: 'Food & Restaurant', image: '/properties1.png' },
  { name: 'Urban areas2', description: "Let's uncover the best places to eat, drink", category: 'Food & Restaurant', image: '/properties2.png' },
  { name: 'Urban areas3', description: "Let's uncover the best places to eat, drink", category: 'Food & Restaurant', image: '/properties3.png' },
  { name: 'Urban areas4', description: "Let's uncover the best places to eat, drink", category: 'Food & Restaurant', image: '/properties2.png' },
  { name: 'Urban areas5', description: "Let's uncover the best places to eat, drink", category: 'Food & Restaurant', image: '/properties3.png' },
];

const PopularDirectory: React.FC = () => {
  const sliderRef = useRef<Slider>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    }, 5000); // 5 seconds delay

    return () => clearInterval(interval);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false, // Disable autoplay as we manually trigger it
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Popular Directory</h2>
        <p className="text-gray-600">Lets uncover the best places to eat, drink, and shop nearest to you.</p>
      </div>
      <div className="max-w-7xl mx-auto">
        <Slider ref={sliderRef} {...settings}>
          {directories.map((directory, index) => (
            <div key={index} className="flex-shrink-0 w-80 group">
              <div className="relative overflow-hidden">
                <img src={"/properties1.png"} alt={directory.name} className="w-full h-48 object-cover rounded-lg transform transition-transform duration-300 group-hover:scale-110" />
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
        </Slider>
      </div>
    </section>
  );
};

export default PopularDirectory;
