import React from 'react';
import policySections from '../../constants/policyList'



const body = () => {
  return (
    <div className="font-Poppins text-neutral-900 px-6 md:px-40 py-10">
      <h1 className="text-4xl md:text-5xl font-semibold mb-8">Privacy Policy</h1>
      
      {policySections.map((section, index) => (
        <section key={index} className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">{section.title}</h2>
          {section.content.map((paragraph, i) => (
            <p key={i} className="mb-4">{paragraph}</p>
          ))}
        </section>
      ))}
    </div>
  );
};

export default body;
