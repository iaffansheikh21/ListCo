// 'use client'
// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';

// const blogs = [
//   {
//     id: 1,
//     image: '/blog1.jpg',
//     alt: 'ニュース 1',
//     date: '3月12日',
//     author: 'アラン',
//     title: 'リラクゼーションに最適なSPAサロン',
//     category: 'ティップス',
//     slug: 'blog1',
//     description: 'Discover the best SPA salons for relaxation and rejuvenation.'
//   },
//   {
//     id: 2,
//     image: '/blog2.jpg',
//     alt: 'ニュース 2',
//     date: '3月12日',
//     author: 'アラン',
//     title: 'リラクゼーションに最適なSPAサロン',
//     category: 'ティップス',
//     slug: 'blog2',
//     description: 'Find out the top tips for choosing the best SPA salon for your needs.'
//   },
//   // Add more blogs here
// ];

// const Blogs = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 2) % blogs.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="bg-white py-12">
//       <div className="container mx-auto text-center">
//         <h2 className="text-4xl font-extralight text-purple-800">Blogs</h2>
//         <p className="text-gray-600 mb-8">Discover the Latest Insights, Tips, and Trends from Our Blog.</p>
//         <div className="flex flex-wrap justify-center space-y-6 md:space-y-0 md:space-x-6">
//           {blogs.slice(currentIndex, currentIndex + 2).map((blog) => (
//             <Link href={'/Blogss'} legacyBehavior key={blog.id}>
//               <a className="max-w-xs bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 mx-2">
//                 <Image
//                   src={blog.image}
//                   alt={blog.alt}
//                   width={400}
//                   height={250}
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="p-4">
//                   <span className="bg-purple-500 text-white text-xs font-semibold rounded-full px-2 py-1">{blog.category}</span>
//                   <p className="text-gray-500 text-sm mt-2">{blog.date} | by {blog.author}</p>
//                   <h3 className="text-lg font-semibold text-gray-800 mt-2">{blog.title}</h3>
//                   <p className="text-gray-600 text-sm mt-1">{blog.description}</p>
//                 </div>
//               </a>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Blogs;

'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const blogs = [
  {
    id: 1,
    image: '/blog1.jpg',
    alt: 'ニュース 1',
    date: '3月12日',
    author: 'アラン',
    title: 'リラクゼーションに最適なSPAサロン',
    category: 'ティップス',
    slug: 'blog1',
    description: 'Discover the best SPA salons for relaxation and rejuvenation.'
  },
  {
    id: 2,
    image: '/blog2.jpg',
    alt: 'ニュース 2',
    date: '3月12日',
    author: 'アラン',
    title: 'リラクゼーションに最適なSPAサロン',
    category: 'ティップス',
    slug: 'blog2',
    description: 'Find out the top tips for choosing the best SPA salon for your needs.'
  },
  // Add more blogs here
];

const Blogs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 2) % blogs.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extralight text-purple-800">Blogs</h2>
        <p className="text-gray-600 mb-8">Discover the Latest Insights, Tips, and Trends from Our Blog.</p>
        <div className="flex flex-wrap justify-center space-y-6 md:space-y-0 md:space-x-6">
          {blogs.slice(currentIndex, currentIndex + 2).map((blog) => (
            <Link href={`/Blogss/${blog.slug}`} legacyBehavior key={blog.id}>
              <a className="max-w-xs bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 mx-2">
                <Image
                  src={blog.image}
                  alt={blog.alt}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <span className="bg-purple-500 text-white text-xs font-semibold rounded-full px-2 py-1">{blog.category}</span>
                  <p className="text-gray-500 text-sm mt-2">{blog.date} | by {blog.author}</p>
                  <h3 className="text-lg font-semibold text-gray-800 mt-2">{blog.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{blog.description}</p>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
