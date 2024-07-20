'use client'; // Ensure this is at the very top of the file

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faCaretDown, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useRouter, usePathname } from 'next/navigation';

const DashboardNavbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLanguages, setShowLanguages] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('Japanese');
  const router = useRouter();
  const pathname = usePathname();

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
    router.push('/login');
  };

  return (
    <div className="relative">
      <nav
        className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center py-4 px-8 text-white transition-all duration-300 ${
          isScrolled ? 'bg-slate-900' : 'bg-transparent'
        }`}
      >
        <Link href={'/'}>
        <div className="flex items-center">
          <Image src="/logo.svg" alt="logo" width={140} height={140} />
        </div>
        </Link>

        <div className="hidden md:flex md:items-center space-x-4">
          <Link href="/" passHref>
            <span className="hover:text-purple-300 cursor-pointer">Home</span>
          </Link>
          <Link href="/categories" passHref>
            <span className="hover:text-purple-300 cursor-pointer">Categories</span>
          </Link>
          <Link href="/blogs" passHref>
            <span className="hover:text-purple-300 cursor-pointer">Blogs</span>
          </Link>
          <Link href="/contact" passHref>
            <span className="hover:text-purple-300 cursor-pointer">Contact</span>
          </Link>
        </div>

        <div className="flex items-center md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none mr-2">
            <FontAwesomeIcon icon={faBars} size="lg" />
          </button>
          <div className="relative">
            <button
              onClick={toggleLanguages}
              className="hover:bg-purple-700 text-black transform transition-transform duration-500 py-2 px-4 rounded-md flex items-center text-sm md:text-base bg-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600 hover:text-white"
            >
              <span className="md:hidden">{getLanguageAbbreviation(selectedLanguage)}</span>
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
            className="bg-purple-600 hover:bg-purple-800 transition duration-500 text-white py-2 px-4 rounded-md flex items-center text-sm md:text-base"
            onClick={handleLoginClick}
          >
            <FontAwesomeIcon icon={faSignInAlt} className="mr-2" />
            Log In
          </button>
          <div className="relative">
            <button
              onClick={toggleLanguages}
              className="hover:bg-purple-700 text-black transition duration-500 py-2 px-4 rounded-md flex items-center text-sm md:text-base bg-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600 hover:text-white"
            >
              <span className="md:hidden">{getLanguageAbbreviation(selectedLanguage)}</span>
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
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden fixed inset-0 bg-gray-900 bg-opacity-150 z-50`}>
        <div className="flex justify-between items-center py-4 px-8 text-white">
          <Image src="/logo.svg" alt="logo" width={140} height={140} />
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <FontAwesomeIcon icon={faTimes} size="lg" /> {/* Close (cross) icon */}
          </button>
        </div>
        <div className="flex flex-col items-start space-y-4 py-8 pl-8">
          <Link href="/" passHref>
            <span onClick={toggleMenu} className="block py-2  text-white hover:text-purple-300 cursor-pointer">
              Home
            </span>
          </Link>
          <Link href="/categories" passHref>
            <span onClick={toggleMenu} className="block py-2 text-white hover:text-purple-300 cursor-pointer">
              Categories
            </span>
          </Link>
          <Link href="/blogs" passHref>
            <span onClick={toggleMenu} className="block py-2 text-white hover:text-purple-300 cursor-pointer">
              Blogs
            </span>
          </Link>
          <Link href="/contact" passHref>
            <span onClick={toggleMenu} className="block py-2 text-white hover:text-purple-300 cursor-pointer">
              Contact
            </span>
          </Link>
          <button
            className="bg-purple-600 hover:bg-purple-900 text-white transition duration-500 py-2 px-4 rounded-md flex items-center text-sm md:text-base"
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
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
        }}
      >
        <div className="text-center text-white mb-8 mt-4">
          <h1 className="text-5xl md:text-5xl font-bold mt-32">
            {pathname === '/add-listing' ? 'Add Listing' : 'Your Profile'}
          </h1>
        </div>
      </section>
    </div>
  );
};

export default DashboardNavbar;
