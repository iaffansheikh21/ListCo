import React from 'react';
import Link from 'next/link';
import LoginNavbar from '../components/LoginNavbar';

const SignupPage: React.FC = () => {
  return (
    <div>
        <LoginNavbar />
    <div className="flex items-center justify-center min-h-screen bg-white mt-4">
      <div className="w-full max-w-md p-8 space-y-6 bg-purple-100 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-primary">Sign Up</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              placeholder="Enter your first name"
              required
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              placeholder="Enter your last name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              placeholder="Enter your email address"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              placeholder="Enter your password"
              required
            />
          </div>
          <div>
          <button
              type="submit"
              className="w-full px-4 py-2 bg-purple-600 hover:bg-purple-700 transform transition-transform duration-500 font-medium text-white bg-primary rounded-md hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Sign Up
            </button>
          </div>
        </form>
        <div className="text-sm text-center text-gray-600">
          Already have an account?{' '}
          <Link href="/LoginPage" legacyBehavior>
            <a className="font-medium text-primary hover:text-secondary">Login</a>
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SignupPage;
