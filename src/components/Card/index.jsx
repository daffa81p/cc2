// components/Card.js
import React from 'react';

const Card = ({ logo, title, description}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
      <img src={logo} alt="logo" className="h-16 mb-4" />
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap justify-center gap-2 mb-4">
      </div>
      
    </div>
  );
};

export default Card;
