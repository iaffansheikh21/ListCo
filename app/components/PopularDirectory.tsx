"use client"

import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// const directories = [
//   { name: 'Urban Areas1', description: "Let&apos;s uncover the best places to eat, drink", category: 'Food & Restaurant', image: '/properties1.png' },
//   { name: 'Urban Areas2', description: "Let&apos;s uncover the best places to eat, drink", category: 'Food & Restaurant', image: '/properties2.png' },
//   { name: 'Urban Areas3', description: "Let&apos;s uncover the best places to eat, drink", category: 'Food & Restaurant', image: '/properties3.png' },
//   { name: 'Urban Areas4', description: "Let&apos;s uncover the best places to eat, drink", category: 'Food & Restaurant', image: '/properties2.png' },
//   { name: 'Urban Areas5', description: "Let&apos;s uncover the best places to eat, drink", category: 'Food & Restaurant', image: '/properties3.png' },
// ];

const directories = [
  { name: '都市エリア1', description: "最高の飲食店を見つけましょう", category: 'フード＆レストラン', image: '/properties1.png' },
  { name: '都市エリア2', description: "最高の飲食店を見つけましょう", category: 'フード＆レストラン', image: '/properties2.png' },
  { name: '都市エリア3', description: "最高の飲食店を見つけましょう", category: 'フード＆レストラン', image: '/properties3.png' },
  { name: '都市エリア4', description: "最高の飲食店を見つけましょう", category: 'フード＆レストラン', image: '/properties2.png' },
  { name: '都市エリア5', description: "最高の飲食店を見つけましょう", category: 'フード＆レストラン', image: '/properties3.png' },
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
    autoplay: false,
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-extralight text-purple-800">Popular Directory</h2>
          <p className="text-gray-600">Let&apos;s uncover the best places to eat, drink, and shop nearest to you.</p>
        </div>
        <Slider ref={sliderRef} {...settings}>
          {directories.map((directory, index) => (
            <div key={index} className="px-2 sm:px-4">
              <div className="group border rounded-lg overflow-hidden shadow-lg">
                <div className="relative overflow-hidden">
                  <img
                    src={directory.image}
                    alt={directory.name}
                    className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-0 left-0 bg-black bg-opacity-50 text-white rounded-tr-lg rounded-bl-lg px-4 py-2">$$$</div>
                  <div className="absolute top-0 right-0 bg-black bg-opacity-50 text-white rounded-tl-lg rounded-br-lg px-4 py-2">CLOSED</div>
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-xl font-semibold">{directory.name}</h3>
                  <p className="text-gray-600">{directory.description}</p>
                  <div className="mt-2 text-orange-600">{directory.category}</div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default PopularDirectory;
