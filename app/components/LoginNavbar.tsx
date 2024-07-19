'use client'
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faCaretDown, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useRouter, usePathname } from "next/navigation";

const LoginNavbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLanguages, setShowLanguages] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("Japanese");
  const router = useRouter();
  const pathname = usePathname();

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
      case "English":
        return "En";
      case "Japanese":
        return "Jp";
      default:
        return language;
    }
  };

  const handleLoginClick = () => {
    router.push('/LoginPage');
  };

  return (
    <div className="sticky top-0 z-50">
      <nav className="bg-slate-900 w-full flex justify-between items-center py-4 px-8 text-white">
        <Link href={'/'}>
        <div className="flex items-center">
          <Image src="/logo.svg" alt="logo" width={140} height={140} />
        </div>
        </Link>
        <div className="hidden md:flex md:items-center space-x-4">
          <Link href="/" passHref>
            <span className="hover:text-purple-300 cursor-pointer">Home</span>
          </Link>
          <Link href="/Categories" passHref>
            <span className="hover:text-purple-300 cursor-pointer">Categories</span>
          </Link>
          <Link href="/Blogs" passHref>
            <span className="hover:text-purple-300 cursor-pointer">Blogs</span>
          </Link>
          <Link href="/Contact" passHref>
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
              className="hover:bg-purple-900 text-black transition duration-500 py-2 px-4 rounded-md flex items-center text-sm md:text-base bg-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-700 hover:text-white"
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
                  onClick={() => selectLanguage("English")}
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-purple-700 cursor-pointer"
                >
                  English
                </a>
                <a
                  onClick={() => selectLanguage("Japanese")}
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-purple-700 cursor-pointer"
                >
                  Japanese
                </a>
              </div>
            )}
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          {pathname !== '/LoginPage' && (
            <button
              className="bg-purple-600 hover:bg-purple-800 transition duration-500 text-white py-2 px-4 rounded-md flex items-center text-sm md:text-base"
              onClick={handleLoginClick}
            >
              <FontAwesomeIcon icon={faSignInAlt} className="mr-2" />
              Log In
            </button>
          )}
          <div className="relative">
            <button
              onClick={toggleLanguages}
              className="hover:bg-purple-700 text-black transition duration-500 py-2 px-4 rounded-md flex items-center text-sm md:text-base bg-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-700 hover:text-white"
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
                  onClick={() => selectLanguage("English")}
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-purple-700 cursor-pointer"
                >
                  English
                </a>
                <a
                  onClick={() => selectLanguage("Japanese")}
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
        className={`${isMenuOpen ? "block" : "hidden"} md:hidden fixed inset-0 bg-gray-900 bg-opacity-150 z-50`}
      >
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
          <Link href="/Categories" passHref>
            <span onClick={toggleMenu} className="block py-2 text-white hover:text-purple-300 cursor-pointer">
              Categories
            </span>
          </Link>
          <Link href="/Blogs" passHref>
            <span onClick={toggleMenu} className="block py-2 text-white hover:text-purple-300 cursor-pointer">
              Blogs
            </span>
          </Link>
          <Link href="/Contact" passHref>
            <span onClick={toggleMenu} className="block py-2 text-white hover:text-purple-300 cursor-pointer">
              Contact
            </span>
          </Link>
          {pathname !== '/LoginPage' && (
            <button
              className="bg-purple-600 hover:bg-purple-700 text-white transition duration-500 py-2 px-4 rounded-md flex items-center text-sm md:text-base"
              onClick={handleLoginClick}
            >
              <FontAwesomeIcon icon={faSignInAlt} className="mr-2" />
              Log In
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginNavbar;
