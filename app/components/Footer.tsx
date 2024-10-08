// components/Footer.tsx
"use client"
import React from 'react';
import Link from 'next/link';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import Image from 'next/image'

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-gray-700 py-6">
      <div className="container mx-auto text-center px-4">
        <div className="mb-4">
           <Link href="/">
                     <Image src="/logo.svg" alt="logo" width={140} height={140} />
           </Link>
         
          <p className="text-sm mt-2">
            Users and submit their own items. You can create different packages and by connecting
            with your PayPal or Stripe account charge users for registration to your directory portal.
          </p>
        </div>
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://x.com/iaffansheikh21" className="text-purple-500 hover:text-purple-700">
            <FaXTwitter size={24} />
          </a>
          <a href="https://www.linkedin.com/in/muhammad-affan-sheikh-587330250/" className="text-purple-500 hover:text-purple-700">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/iaffansheikh21" className="text-purple-500 hover:text-purple-700">
            <FaGithub size={24} />
          </a>
          <a href="https://www.instagram.com/iaffansheikh21" className="text-purple-500 hover:text-purple-700">
            <FaInstagram size={24} />
          </a>
        </div>
        <div className="text-sm text-gray-500 mb-4">
          <p className="space-y-2 md:space-y-0 md:flex md:justify-center md:space-x-2">
            <Link href="/" legacyBehavior><a className="hover:underline">Home</a></Link>
            <span>|</span>
            <Link href="/categories" legacyBehavior><a className="hover:underline">Categories</a></Link>
            <span>|</span>
            <Link href="/blogs" legacyBehavior><a className="hover:underline">Blogs</a></Link>
            <span>|</span>
            <Link href="/contact" legacyBehavior><a className="hover:underline">Contact</a></Link>
          </p>
        </div>
        <div className="text-xs text-gray-500 mt-4">
          <p>&copy; 2024 All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
