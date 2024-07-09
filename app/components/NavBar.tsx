"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignInAlt,
  faSearch,
  faCaretDown,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

const Navbar: React.FC = () => {
  const [isBlogOpen, setBlogOpen] = useState(false);
  const [isPagesOpen, setPagesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [showLanguages, setShowLanguages] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("Japanese");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };

  const toggleBlogMenu = () => {
    setBlogOpen(!isBlogOpen);
    if (isPagesOpen) setPagesOpen(false);
  };

  const togglePagesMenu = () => {
    setPagesOpen(!isPagesOpen);
    if (isBlogOpen) setBlogOpen(false);
  };

  const toggleLanguages = () => {
    setShowLanguages(!showLanguages);
  };

  const selectLanguage = (language: string) => {
    setSelectedLanguage(language);
    setShowLanguages(false);
  };

  return (
    <div className="relative">
      <nav
        className={`fixed top-0 left-0 w-full z-50 flex flex-col md:flex-row justify-between items-center py-4 px-8 text-white transition-all duration-300 ${
          isScrolled ? "bg-slate-800" : "bg-transparent"
        }`}
      >
        <div className="mb-4 md:mb-0 flex-shrink-0">
          <Image src="/logo.svg" alt="logo" width={140} height={140} />
        </div>
        <div className="flex md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <FontAwesomeIcon icon={faBars} size="lg" />
          </button>
        </div>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex md:items-center justify-center space-y-4 md:space-y-0 md:space-x-4 mt-4 md:mt-0 w-full md:w-auto`}
        >
          <Link href="/" passHref>
            <span className="hover:text-purple-300 cursor-pointer">Home</span>
          </Link>
          <Link href="/Categories" passHref>
            <span className="hover:text-purple-300 cursor-pointer">
              Categories
            </span>
          </Link>
          {/* <div className="relative">
            <span
              className="hover:text-purple-300 cursor-pointer"
              onClick={togglePagesMenu}
            >
              Pages
            </span>
            {isPagesOpen && (
              <div
                className="absolute left-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg"
                onMouseEnter={() => setPagesOpen(true)}
                onMouseLeave={() => setPagesOpen(false)}
              >
                <Link href="/Pages" passHref>
                  <span className="block px-4 py-2 hover:text-purple-300 cursor-pointer">
                    Page Listing
                  </span>
                </Link>
                <Link href="/Categories" passHref>
                  <span className="block px-4 py-2 hover:text-purple-300 cursor-pointer">
                    Categories
                  </span>
                </Link>
              </div>
            )}
          </div> */}
          {/* <div className="relative">
            <span
              className="hover:text-purple-300 cursor-pointer"
              onClick={toggleBlogMenu}
            >
              Blog
            </span>
            {isBlogOpen && (
              <div
                className="absolute left-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg"
                onMouseEnter={() => setBlogOpen(true)}
                onMouseLeave={() => setBlogOpen(false)}
              >
                <Link href="/blog" passHref>
                  <span className="block px-4 py-2 hover:text-purple-300 cursor-pointer">
                    Blog
                  </span>
                </Link>
                <Link href="/blog-menu" passHref>
                  <span className="block px-4 py-2 hover:text-purple-300 cursor-pointer">
                    Blog Menu
                  </span>
                </Link>
                <Link href="/elements" passHref>
                  <span className="block px-4 py-2 hover:text-purple-300 cursor-pointer">
                    Elements
                  </span>
                </Link>
              </div>
            )}
          </div> */}
          {/* <Link href="/contact" passHref>
            <span className="hover:text-purple-300 cursor-pointer">Contact</span>
          </Link> */}
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          {/* <button className="bg-purple-600 hover:bg-purple-700 transform transition-transform duration-500 text-white py-2 px-4 md:px-6 rounded-md text-sm md:text-base">
            Add Listing
          </button> */}
          <button className="bg-purple-600 hover:bg-purple-700 transform transition-transform duration-500 text-white py-2 px-4 md:px-6 rounded-md flex items-center text-sm md:text-base">
            <FontAwesomeIcon icon={faSignInAlt} className="mr-2" />
            Log In
          </button>
          <div className="relative">
            <button
              onClick={toggleLanguages}
              className="hover:bg-purple-700 text-black transform transition-transform duration-500 py-2 px-4 md:px-6 rounded-md flex items-center text-sm md:text-base bg-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600 hover:text-white"
            >
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

      <section
        className="flex flex-col justify-center items-center h-96 bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("/h1_hero.png.webp")',
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
        }}
      >
        <div className="text-center text-white mb-8">
          <h1 className="text-3xl md:text-4xl font-extralight mt-32">
            あなたが探しているものを見つけましょう
          </h1>
        </div>
        <div
          className="w-full max-w-xl px-4 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-2 p-4 rounded-lg"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
        >
          <input
            type="text"
            className="w-full md:flex-1 py-2 px-4 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
            placeholder="What are you finding?"
          />
          <div className="relative w-full md:flex-1">
            <button
              className="w-full py-2 px-4 md:px-6 bg-white border border-gray-700 rounded-md flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-purple-600"
              onClick={toggleCategories}
            >
              <span>{showCategories ? "Category" : "In where?"}</span>
              <FontAwesomeIcon icon={faCaretDown} />
            </button>
            {showCategories && (
              <div className="absolute left-0 mt-2 w-full bg-white text-black rounded-md shadow-lg">
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-purple-700"
                >
                  Category 1
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-purple-700"
                >
                  Category 2
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-purple-700"
                >
                  Category 3
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-purple-700"
                >
                  Category 4
                </a>
              </div>
            )}
          </div>
          <button className="w-full md:w-auto bg-purple-600 hover:bg-purple-700 text-white transform transition-transform duration-500 py-2 px-4 md:px-6 rounded-md flex items-center justify-center text-sm md:text-base">
            <FontAwesomeIcon icon={faSearch} className="mr-2" />
            Search
          </button>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
