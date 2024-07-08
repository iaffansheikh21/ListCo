// components/Footer.tsx
"use client"
import React from 'react';
import Link from 'next/link';
import { FaTwitter, FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa';
import Image from 'next/image'
const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-gray-700 py-6">
      <div className="container mx-auto text-center px-4">
        <div className="mb-4">
        <Image src="/logo2_footer.svg" alt="logo" width={140} height={140} />
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
          <a href="#" className="text-purple-500 hover:text-purple-700">
            <FaGithub size={24} />
          </a>
          <a href="#" className="text-purple-500 hover:text-purple-700">
            <FaInstagram size={24} />
          </a>
        </div>
        <div className="text-sm text-gray-500 mb-4">
          <p className="space-y-2 md:space-y-0 md:flex md:justify-center md:space-x-2">
            <Link href="/" legacyBehavior><a className="hover:underline">Home</a></Link>
            <span>|</span>
            <Link href="/Categories" legacyBehavior><a className="hover:underline">Categories</a></Link>
            <span>|</span>
            <Link href="/pages" legacyBehavior><a className="hover:underline">Pages</a></Link>
            <span>|</span>
            <Link href="/blog" legacyBehavior><a className="hover:underline">Blog</a></Link>
            <span>|</span>
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
