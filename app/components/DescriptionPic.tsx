import React from 'react';

const images = [
  "/gallery1.png",
  "/gallery2.png",
  "/gallery3.png",
  "/gallery4.png",
];

const DescriptionPic: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-0 md:p-6">
      <h2 className="text-2xl font-semibold mb-4">Description</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {images.map((src, index) => (
          <div key={index} className="relative overflow-hidden group">
            <img
              src={src}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-auto rounded-lg shadow-md object-cover transition-transform duration-300 transform-gpu group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DescriptionPic;
