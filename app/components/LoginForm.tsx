import React from 'react';
import Link from 'next/link';

const LoginForm: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="w-full max-w-md p-8 space-y-6 bg-purple-100 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-primary">Login</h2>
        <form className="space-y-6">
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
            <button
              type="submit"
              className="w-full px-4 py-2 bg-purple-600 hover:bg-purple-700 transform transition-transform duration-500 font-medium text-white bg-primary rounded-md hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Login
            </button>
          </div>
        </form>
        <div className="text-sm text-center text-gray-600">
          Don&apos;t have an account?{' '}
          <Link href="/SignUp" legacyBehavior>
            <a className="font-medium text-primary hover:text-secondary">Sign Up</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
