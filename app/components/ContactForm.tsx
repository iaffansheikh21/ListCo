import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <div className="flex items-center justify-center p-0 md:p-6">
      <form className="w-full max-w-lg bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold mb-6">Contact</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">Your Name</label>
          <input type="text" id="name" className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email Address</label>
          <input type="email" id="email" className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
        </div>
        <div className="mb-4">
          <label htmlFor="comment" className="block text-gray-700">Comment</label>
          <textarea id="comment" className="w-full px-3 py-2 border border-gray-300 rounded-lg h-24"></textarea>
        </div>
        <button type="submit" className="w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-700 transition duration-300">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
