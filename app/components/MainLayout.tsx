import React from 'react';
import DescriptionPic from './DescriptionPic';
import ContactForm from './ContactForm';

const MainLayout: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-4">
      <div className="w-full md:w-8/12">
        <DescriptionPic />
      </div>
      <div className="w-full md:w-4/12">
        <ContactForm />
      </div>
    </div>
  );
};

export default MainLayout;
