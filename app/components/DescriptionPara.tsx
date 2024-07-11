import React from 'react';

const DescriptionPara: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:space-x-8 items-start">
        <div className="md:flex-1">
          <h2 className="text-2xl font-semibold mb-4">Description</h2>
          <p className="text-gray-700 leading-relaxed">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn&apos;t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.
          </p>
        </div>
        {/* <div className="md:flex-1 mt-8 md:mt-0">
          <div className="relative pb-9/16 h-0 overflow-hidden">
            <img
              src="/MAP.png" // Replace with your image path
              alt="Map"
              className="absolute inset-0 w-full h-full rounded-md shadow-md object-cover"
            />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default DescriptionPara;
