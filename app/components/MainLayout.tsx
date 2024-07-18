import React from 'react';
import DescriptionPic from './DescriptionPic';
import ContactForm from './ContactForm';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <DescriptionPic />
      <ContactForm />
    </div>
  );
};

export default App;
