import React from 'react';
import termsSections from '../../constants/termsContent';

const body = () => {
  return (
    <div className="font-Poppins text-neutral-900 p-6 md:p-16">
      <h1 className="text-4xl md:text-6xl font-bold mb-12">Terms and Conditions</h1>
      {termsSections.map((section, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">{section.title}</h2>
          {section.content.map((paragraph, pIndex) => (
            <p key={pIndex} className="text-base md:text-lg mb-2">{paragraph}</p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default body;
