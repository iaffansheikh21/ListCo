import React from 'react';
import Image from 'next/image';

// const newsItems = [
//   {
//     id: 1,
//     image: '/news1.webp',
//     alt: 'News 1',
//     date: '12 March',
//     author: 'Alan',
//     title: 'The Best SPA Salons For Your Relaxation',
//     category: 'Tips',
//   },
//   {
//     id: 2,
//     image: '/news2.jpg',
//     alt: 'News 2',
//     date: '12 March',
//     author: 'Alan',
//     title: 'The Best SPA Salons For Your Relaxation',
//     category: 'Tips',
//   },
// ];

const newsItems = [
  {
    id: 1,
    image: '/news1.webp',
    alt: 'ニュース 1',
    date: '3月12日',
    author: 'アラン',
    title: 'リラクゼーションに最適なSPAサロン',
    category: 'ティップス',
  },
  {
    id: 2,
    image: '/news2.jpg',
    alt: 'ニュース 2',
    date: '3月12日',
    author: 'アラン',
    title: 'リラクゼーションに最適なSPAサロン',
    category: 'ティップス',
  },
];

const NewsSection: React.FC = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800">News & Updates</h2>
        <p className="text-gray-600 mb-8">Let&apos;s uncover the best places to eat, drink, and shop nearest to you.</p>
        <div className="flex flex-wrap justify-center space-y-6 md:space-y-0 md:space-x-6">
          {newsItems.map((news) => (
            <div key={news.id} className="max-w-xs bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 mx-2">
              <Image
                src={news.image}
                alt={news.alt}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <span className="bg-purple-500 text-white text-xs font-semibold rounded-full px-2 py-1">{news.category}</span>
                <p className="text-gray-500 text-sm mt-2">{news.date} | by {news.author}</p>
                <h3 className="text-lg font-semibold text-gray-800 mt-2">{news.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewsSection;
