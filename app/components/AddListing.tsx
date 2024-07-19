'use client'
import React, { useState } from 'react';

// Define a type for a Service
type Service = {
  title: string;
  description: string;
};

const AddListingPage: React.FC = () => {
  const [companyName, setCompanyName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [businessDescription, setBusinessDescription] = useState('');
  const [website, setWebsite] = useState('');
  const [files, setFiles] = useState<FileList[]>([new DataTransfer().files]);
  const [services, setServices] = useState<Service[]>([{ title: '', description: '' }]);

  // Update this function to use type assertion
  const handleServiceChange = (index: number, field: keyof Service, value: string) => {
    const newServices = [...services];
    newServices[index] = { ...newServices[index], [field]: value };
    setServices(newServices);
  };

  const addService = () => {
    setServices([...services, { title: '', description: '' }]);
  };

  const removeService = (index: number) => {
    if (services.length > 1) {
      const newServices = services.filter((_, i) => i !== index);
      setServices(newServices);
    }
  };

  const handleFileChange = (index: number, newFiles: FileList | null) => {
    if (newFiles) {
      const newFilesList = [...files];
      newFilesList[index] = newFiles;
      setFiles(newFilesList);
    }
  };

  const addFileInput = () => {
    setFiles([...files, new DataTransfer().files]);
  };

  const removeFileInput = (index: number) => {
    if (files.length > 1) {
      const newFilesList = files.filter((_, i) => i !== index);
      setFiles(newFilesList);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({
      companyName,
      address,
      phoneNumber,
      email,
      businessDescription,
      website,
      files,
      services,
    });
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="bg-white p-8 shadow-sm rounded-lg mt-8 w-full max-w-7xl mb-2">
        {/* <h1 className="text-2xl font-bold mb-6">Add Listing</h1> */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
                Company Name
              </label>
              <input
                type="text"
                id="companyName"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="mt-1 block w-full border-b border-purple-300 focus:outline-none focus:border-purple-700"
              />
            </div>
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <input
                type="text"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="mt-1 block w-full border-b border-purple-300 focus:outline-none focus:border-purple-700"
              />
            </div>
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="text"
                id="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="mt-1 block w-full border-b border-purple-300 focus:outline-none focus:border-purple-700"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full border-b border-purple-300 focus:outline-none focus:border-purple-700"
              />
            </div>
            <div>
              <label htmlFor="businessDescription" className="block text-sm font-medium text-gray-700">
                Business Description
              </label>
              <textarea
                id="businessDescription"
                value={businessDescription}
                onChange={(e) => setBusinessDescription(e.target.value)}
                className="mt-1 block w-full border-b border-purple-300 focus:outline-none focus:border-purple-700"
              />
            </div>
            <div>
              <label htmlFor="website" className="block text-sm font-medium text-gray-700">
                Website
              </label>
              <input
                type="url"
                id="website"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                className="mt-1 block w-full border-b border-purple-300 focus:outline-none focus:border-purple-700"
              />
            </div>
          </div>
          <div>
            <label className="block text-md font-semibold text-gray-700">Files (Photos and Videos)</label>
            {files.map((fileList, index) => (
              <div key={index} className="space-y-2">
                <input
                  type="file"
                  multiple
                  onChange={(e) => handleFileChange(index, e.target.files)}
                  className="mt-2 block w-auto border-purple-300 rounded-sm shadow-sm"
                />
                {files.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeFileInput(index)}
                    className="text-red-500 text-sm"
                  >
                    Remove Files
                  </button>
                )}
              </div>
            ))}
            {files.length > 0 && (
              <button
                type="button"
                onClick={addFileInput}
                className="mt-4 px-4 py-2 rounded-md bg-purple-600 hover:bg-purple-800 transition duration-400 text-white"
              >
                Add More Files
              </button>
            )}
          </div>
          <div>
            <label className="block text-md font-semibold text-gray-700">Services Offered</label>
            {services.map((service, index) => (
              <div key={index} className="space-y-2">
                <div>
                  <label htmlFor={`serviceTitle-${index}`} className="block text-sm font-medium ">
                    Title
                  </label>
                  <input
                    type="text"
                    id={`serviceTitle-${index}`}
                    value={service.title}
                    onChange={(e) => handleServiceChange(index, 'title', e.target.value)}
                    className="mt-1 block border-b border-purple-300 focus:outline-none focus:border-purple-700"
                  />
                </div>
                <div>
                  <label htmlFor={`serviceDescription-${index}`} className="block text-sm font-medium text-gray-700">
                    Description
                  </label>
                  <textarea
                    id={`serviceDescription-${index}`}
                    value={service.description}
                    onChange={(e) => handleServiceChange(index, 'description', e.target.value)}
                    className="mt-1 block border-b border-purple-300 focus:outline-none focus:border-purple-700"
                  />
                </div>
                {services.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeService(index)}
                    className="text-red-500 text-sm"
                  >
                    Remove Service
                  </button>
                )}
              </div>
            ))}
            {services.length > 0 && (
              <button
                type="button"
                onClick={addService}
                className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-800 transition duration-400"
              >
                Add More Services
              </button>
            )}
          </div>
          <div>
            <button
              type="submit"
              className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-800 transition duration-400"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddListingPage;
