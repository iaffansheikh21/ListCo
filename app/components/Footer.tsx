// components/Footer.tsx
"use client"
import React from 'react';
import Link from 'next/link';
import { FaTwitter, FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-6">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <a href="#" className="text-purple-500 text-xl font-bold">TravelWithMAS</a>
          <p className="text-sm mt-2">
            Users and submit their own items. You can create different packages and by connecting
            with your PayPal or Stripe account charge users for registration to your directory portal.
          </p>
        </div>
        <div className="flex justify-center space-x-4 mb-4">
          <a href="#" className="text-purple-500 hover:text-purple-700">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="text-purple-500 hover:text-purple-700">
            <FaFacebook size={24} />
          </a>
          <a href="https://github.com/iaffansheikh21" className="text-purple-500 hover:text-purple-700">
            <FaGithub size={24} />
          </a>
          <a href="#" className="text-purple-500 hover:text-purple-700">
            <FaInstagram size={24} />
          </a>
        </div>
        <div className="text-sm text-gray-500">
          <p>
            <Link href="/" legacyBehavior><a className="hover:underline">Home</a></Link> | 
            <Link href="/Categories" legacyBehavior><a className="hover:underline">Categories</a></Link> | 
            <Link href="/pages" legacyBehavior><a className="hover:underline">Pages</a></Link> | 
            <Link href="/blog" legacyBehavior><a className="hover:underline">Blog</a></Link> | 
            <Link href="/contact" legacyBehavior><a className="hover:underline">Contact</a></Link>
          </p>
        </div>
        <div className="text-xs text-gray-500 mt-4">
          <p>&copy; 2024 All rights reserved | This template is made with <span className="text-purple-500">💜</span> by Colorlib</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
