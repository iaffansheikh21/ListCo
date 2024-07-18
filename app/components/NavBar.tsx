'use client'; // Ensure this is at the very top of the file

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSignInAlt,
  faSearch,
  faCaretDown,
  faBars,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';

const Navbar: React.FC = () => {
  const [isBlogOpen, setBlogOpen] = useState(false);
  const [isPagesOpen, setPagesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [showLanguages, setShowLanguages] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('Japanese');
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };

  const toggleLanguages = () => {
    setShowLanguages(!showLanguages);
  };

  const selectLanguage = (language: string) => {
    setSelectedLanguage(language);
    setShowLanguages(false);
  };

  const getLanguageAbbreviation = (language: string) => {
    switch (language) {
      case 'English':
        return 'En';
      case 'Japanese':
        return 'Jp';
      default:
        return language;
    }
  };

  const handleLoginClick = () => {
    router.push('/LoginPage');
  };

  return (
    <div className="relative">
      <nav
        className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center py-4 px-8 text-white transition-all duration-300 ${
          isScrolled ? 'bg-slate-900' : 'bg-transparent'
        }`}
      >
        <div className="flex items-center">
          <Image src="/logo.svg" alt="logo" width={140} height={140} />
        </div>

        <div className="hidden md:flex md:items-center space-x-4">
          <Link href="/" passHref>
            <span className="hover:text-purple-300 cursor-pointer">Home</span>
          </Link>
          <Link href="/Categories" passHref>
            <span className="hover:text-purple-300 cursor-pointer">
              Categories
            </span>
          </Link>
          <Link href="/Blogs" passHref>
            <span className="hover:text-purple-300 cursor-pointer">
              Blogs
            </span>
          </Link>
          <Link href="/Contact" passHref>
            <span className="hover:text-purple-300 cursor-pointer">
              Contact
            </span>
          </Link>
        </div>

        <div className="flex items-center md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none mr-2"
          >
            <FontAwesomeIcon icon={faBars} size="lg" />
          </button>
          <div className="relative">
            <button
              onClick={toggleLanguages}
              className="hover:bg-purple-700 text-black transform transition-transform duration-500 py-2 px-4 rounded-md flex items-center text-sm md:text-base bg-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600 hover:text-white"
            >
              <span className="md:hidden">
                {getLanguageAbbreviation(selectedLanguage)}
              </span>
              <span className="hidden md:inline">{selectedLanguage}</span>
              <FontAwesomeIcon icon={faCaretDown} className="ml-2" />
            </button>
            {showLanguages && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg">
                <a
                  onClick={() => selectLanguage('English')}
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-purple-700 cursor-pointer"
                >
                  English
                </a>
                <a
                  onClick={() => selectLanguage('Japanese')}
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-purple-700 cursor-pointer"
                >
                  Japanese
                </a>
              </div>
            )}
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <button
            className="bg-purple-600 hover:bg-purple-700 transform transition-transform duration-500 text-white py-2 px-4 rounded-md flex items-center text-sm md:text-base"
            onClick={handleLoginClick}
          >
            <FontAwesomeIcon icon={faSignInAlt} className="mr-2" />
            Log In
          </button>
          <div className="relative">
            <button
              onClick={toggleLanguages}
              className="hover:bg-purple-700 text-black transform transition-transform duration-500 py-2 px-4 rounded-md flex items-center text-sm md:text-base bg-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600 hover:text-white"
            >
              <span className="md:hidden">
                {getLanguageAbbreviation(selectedLanguage)}
              </span>
              <span className="hidden md:inline">{selectedLanguage}</span>
              <FontAwesomeIcon icon={faCaretDown} className="ml-2" />
            </button>
            {showLanguages && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg">
                <a
                  onClick={() => selectLanguage('English')}
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-purple-700 cursor-pointer"
                >
                  English
                </a>
                <a
                  onClick={() => selectLanguage('Japanese')}
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-purple-700 cursor-pointer"
                >
                  Japanese
                </a>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Sidebar Menu for Small Screens */}
      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } md:hidden fixed inset-0 bg-gray-900 bg-opacity-150 z-50`}
      >
        <div className="flex justify-between items-center py-4 px-8 text-white">
          <Image src="/logo.svg" alt="logo" width={140} height={140} />
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <FontAwesomeIcon icon={faTimes} size="lg" /> {/* Close (cross) icon */}
          </button>
        </div>
        <div className="flex flex-col items-start space-y-4 py-8 pl-8">
          <Link href="/" passHref>
            <span
              onClick={toggleMenu}
              className="block py-2  text-white hover:text-purple-300 cursor-pointer"
            >
              Home
            </span>
          </Link>
          <Link href="/Categories" passHref>
            <span
              onClick={toggleMenu}
              className="block py-2 text-white hover:text-purple-300 cursor-pointer"
            >
              Categories
            </span>
          </Link>
          <Link href="/Blogs" passHref>
            <span
              onClick={toggleMenu}
              className="block py-2 text-white hover:text-purple-300 cursor-pointer"
            >
              Blogs
            </span>
          </Link>
          <Link href="/Contact" passHref>
            <span
              onClick={toggleMenu}
              className="block py-2 text-white hover:text-purple-300 cursor-pointer"
            >
              Contact
            </span>
          </Link>
          <button
            className="bg-purple-600 hover:bg-purple-700 text-white transform transition-transform duration-500 py-2 px-4 rounded-md flex items-center text-sm md:text-base"
            onClick={handleLoginClick}
          >
            <FontAwesomeIcon icon={faSignInAlt} className="mr-2" />
            Log In
          </button>
        </div>
      </div>

      <section
        className="flex flex-col justify-center items-center h-96 bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("/h1_hero.png.webp")',
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
        }}
      >
        <div className="text-center text-white mb-8 mt-4">
          <h1 className="text-3xl md:text-4xl font-extralight mt-32">
            あなたが探しているものを見つけましょう
          </h1>
        </div>
        <div
          className="w-full max-w-xl mb-14 px-4 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-2 p-4 rounded-lg"
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
        >
          <div className="flex-grow w-full md:w-auto mb-2 md:mb-0 relative">
            <input
              type="text"
              className="w-full py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="キーワードで検索"
            />
            <FontAwesomeIcon
              icon={faSearch}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"
            />
          </div>
          <div className="flex-grow w-full md:w-auto mb-2 md:mb-0 relative">
            <select className="w-full py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600">
              <option value="地域">地域</option>
              <option value="地域1">地域1</option>
              <option value="地域2">地域2</option>
            </select>
          </div>
          <button className="w-full md:w-auto bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-purple-600 transform transition-transform duration-500">
            <FontAwesomeIcon icon={faSearch} className="mr-2" />
            Search
          </button>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
