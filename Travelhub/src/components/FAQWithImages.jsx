import React, { useState } from 'react';
import image1 from '../assets/image copy 3.webp'
import image2 from '../assets/image copy 4.webp'
import image3 from '../assets/image copy 5.webp'
const FAQWithImages = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What services does Travelhub provide?',
      answer: 'Open the Travelhub app to get started and follow the steps. Travelhub doesn\'t charge a fee to create or maintain your Travelhub main account.'
    },
    {
      question: 'How can Travelhub help me save money on my trip?',
      answer: 'Travelhub offers a variety of deals and discounts to help you save money on your travel expenses.'
    },
    {
      question: 'Does Travelhub charge a fee for their services?',
      answer: 'Travelhub does not charge a fee for most of its services. Some premium services may incur a charge.'
    },
    {
      question: 'What happens if I need to make changes to my travel itinerary booked through Travelhub?',
      answer: 'You can easily make changes to your itinerary through the Travelhub app or website. Some changes may incur a fee.'
    },
    {
      question: 'How does Travelhub stay updated with the latest travel trends and destinations around the globe?',
      answer: 'Travelhub stays updated with the latest travel trends and destinations through continuous research and partnerships with travel experts.'
    },
  ];

  const toggleFAQ = index => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const images = [
image1, image2,image3
  ];

  return (<>
   <div className=' flex justify-center'><h2 className="text-4xl font-semibold mb-6 text-center w-[30%] ">Frequently Asked Questions</h2></div> 
    <div className="w-full py-8 px-4 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
      
      <div className="lg:col-span-1">
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300 pb-4 text-start ">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-start flex justify-start items-center py-2 text-lg font-medium text-purple-600"
            ><p className='mr-6 items-self-start pr-4 text-xl text-rose-500'>{openIndex === index ? '-' : '+'}</p>
              {faq.question}
              
            </button>
            {openIndex === index && (
              <p className="mt-2  ml-8 text-gray-600">{faq.answer}</p>
            )}
          </div>
          ))}
        </div>
      </div>
      <div className="lg:col-span-1 grid grid-cols-2 gap-4">
        {images.slice(0, 2).map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Travel Destination ${index + 1}`}
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
        ))}
        <div className="col-span-2">
          <img
            src={images[2]}
            alt={`Travel Destination 3`}
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
        </div>
    </div>
    </div>
    </>
  );
};

export default FAQWithImages;
