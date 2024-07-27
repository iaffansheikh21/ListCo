import React from 'react';
import Link from 'next/link';

const LoginForm: React.FC = () => {
  return (
      <div className="flex flex-col items-center justify-start flex-grow mt-6">
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-2xl">
          <h2 className="text-2xl font-bold text-center text-primary mb-4">Login</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
              />
            </div>
            <div>
              <Link href={'/dashboard'}>
              <button
                type="submit"
                className="w-full px-4 py-2 font-medium text-white bg-purple-600 rounded-md hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition duration-500"
              >
                Login
              </button>
              </Link>
            </div>
          </form>
          <div className="text-sm text-center text-gray-600 mt-4">
            Don&apos;t have an account?{' '}
            <Link href="/signup" legacyBehavior>
              <a className="font-medium text-primary hover:text-secondary">Sign Up</a>
            </Link>
          </div>
        </div>
      </div>
  );
};

export default LoginForm;
