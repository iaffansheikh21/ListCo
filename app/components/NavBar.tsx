// components/NavBar.tsx
"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons';

const Navbar: React.FC = () => {
  const [isBlogOpen, setBlogOpen] = useState(false);
  const [isPagesOpen, setPagesOpen] = useState(false);
  const [showCategories, setShowCategories] = useState(false);

  const toggleBlogMenu = () => {
    setBlogOpen(!isBlogOpen);
    if (isPagesOpen) setPagesOpen(false); // Close pages menu if open
  };

  const togglePagesMenu = () => {
    setPagesOpen(!isPagesOpen);
    if (isBlogOpen) setBlogOpen(false); // Close blog menu if open
  };

  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };

  return (
    <div
      className="bg-cover bg-center text-white"
      style={{ backgroundImage: 'url("/h1_hero.png.webp")' }}
    >
      <nav className=" sticky top-0 z-0 flex flex-col md:flex-row justify-between items-center py-4 px-8 text-white bg-opacity-70 bg-slate-800">
        <div className="mb-4 md:mb-0">
          <Image src="/logo.svg" alt="logo" width={230} height={230} />
        </div>
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0">
          <Link href="/" passHref>
            <span className="hover:text-cyan-700 cursor-pointer">Home</span>
          </Link>
          <Link href="/Categories" passHref>
            <span className="hover:text-cyan-700 cursor-pointer">Categories</span>
          </Link>
          <div className="relative">
            <span className="hover:text-cyan-700 cursor-pointer" onClick={toggleBlogMenu}>
              Blog
            </span>
            {isBlogOpen && (
              <div
                className="absolute left-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg"
                onMouseEnter={() => setBlogOpen(true)}
                onMouseLeave={() => setBlogOpen(false)}
              >
                <Link href="/blog" passHref>
                  <span className="block px-4 py-2 hover:text-cyan-700 cursor-pointer">Blog</span>
                </Link>
                <Link href="/blog-menu" passHref>
                  <span className="block px-4 py-2 hover:text-cyan-700 cursor-pointer">Blog Menu</span>
                </Link>
                <Link href="/elements" passHref>
                  <span className="block px-4 py-2 hover:text-cyan-700 cursor-pointer">Elements</span>
                </Link>
              </div>
            )}
          </div>
          <div className="relative">
            <span className="hover:text-cyan-700 cursor-pointer" onClick={togglePagesMenu}>
              Pages
            </span>
            {isPagesOpen && (
              <div
                className="absolute left-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg"
                onMouseEnter={() => setPagesOpen(true)}
                onMouseLeave={() => setPagesOpen(false)}
              >
                <Link href="/page-listing" passHref>
                  <span className="block px-4 py-2 hover:text-cyan-700 cursor-pointer">Page Listing</span>
                </Link>
                <Link href="/Categories" passHref>
                  <span className="block px-4 py-2 hover:text-cyan-700 cursor-pointer">Categories</span>
                </Link>
              </div>
            )}
          </div>
          <Link href="/contact" passHref>
            <span className="hover:text-cyan-700 cursor-pointer">Contact</span>
          </Link>
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add to Listing
          </button>
          <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded flex items-center">
            <FontAwesomeIcon icon={faSignInAlt} className="mr-2" />
            Log In
          </button>
        </div>
      </nav>

      <section className="flex justify-center items-center h-64 bg-opacity-70 bg-slate-800 px-4">
        <div className="flex flex-col md:flex-row md:space-x-2 w-full max-w-xl">
          <input
            type="text"
            className="flex-grow py-2 px-4 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder="What are you finding?"
          />
          <div className="relative mt-2 md:mt-0">
            <button
              className="py-2 px-4 bg-white border border-gray-700 rounded-md flex items-center focus:outline-none focus:ring-2 focus:ring-cyan-500"
              onClick={toggleCategories}
            >
              <span className="mr-2">
                {showCategories ? "Category" : "Which Category"}
              </span>
              <FontAwesomeIcon icon={faCaretDown} />
            </button>
            {showCategories && (
              <div className="absolute left-0 mt-2 w-full bg-white text-black rounded-md shadow-lg">
                <a href="#" className="block px-4 py-2 hover:bg-gray-300 hover:text-cyan-700">Category 1</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-300 hover:text-cyan-700">Category 2</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-300 hover:text-cyan-700">Category 3</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-300 hover:text-cyan-700">Category 4</a>
              </div>
            )}
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md flex items-center mt-2 md:mt-0">
            <FontAwesomeIcon icon={faSearch} className="mr-2" />
            Search
          </button>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
