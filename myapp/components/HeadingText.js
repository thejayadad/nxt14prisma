import React from 'react';

const HeadingText = ({ title, description }) => {
  return (
    <div className="cursor-pointer">
      <h1 className="sm:text-3xl text-2xl  title-font text-gray-800 font-mono font-bold">
        {title}
      </h1>
      <p className="text-base leading-relaxed mx-auto text-gray-500 ">
        {description}
      </p>
      <div className="flex">
        <div className="w-16 h-1 rounded-full bg-primary inline-flex"></div>
      </div>
    </div>
  );
};

export default HeadingText;
