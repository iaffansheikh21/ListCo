// // components/ContactForm.tsx
// 'use client'
// import React, { useState } from 'react';

// const ContactForm: React.FC = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Handle form submission
//     console.log('Form Data:', formData);
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-white">
//       <form 
//         onSubmit={handleSubmit}
//         className="p-8 rounded-lg shadow-xl w-full max-w-md bg-purple-100"
//       >
//         <h2 className="text-2xl font-bold mb-6 text-gray-800">Get in touch</h2>
//         <div className="mb-4">
//           <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
//             Name
//           </label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-700"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
//             Email
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-700"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
//             Message
//           </label>
//           <textarea
//             id="message"
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-700"
//             rows={4}
//             required
//           />
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-700 transition duration-300"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ContactForm;


// components/ContactForm.tsx
'use client'
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form Data:', formData);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <form 
        onSubmit={handleSubmit}
        className="p-8 rounded-lg shadow-lg w-full max-w-2xl bg-white mt-6"
      >
        <h2 className="text-2xl font-normla mb-6 text-center text-purple-950">Let&apos;s Talk</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-2">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border-b border-purple-300 focus:outline-none focus:border-purple-700"
              placeholder="Your name"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border-b border-purple-300 focus:outline-none focus:border-purple-700"
              placeholder="Your email"
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="subject" className="block text-gray-700 mb-2">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-3 py-2 border-b border-purple-300 focus:outline-none focus:border-purple-700"
            placeholder="Your subject"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-3 py-2 border-b border-purple-300 focus:outline-none focus:border-purple-700"
            placeholder="Write your message"
            rows={4}
            required
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-900 transition duration-500"
          >
            SEND MESSAGE
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
