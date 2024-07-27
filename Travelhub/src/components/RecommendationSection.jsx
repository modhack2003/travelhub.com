// src/RecommendationSection.js
import React from 'react';
import image from '../assets/image.png'
import image2 from '../assets/image copy.png'
import image3 from '../assets/image copy 2.png'
import { CiLocationOn } from "react-icons/ci";
import { FaRegStar } from "react-icons/fa";


const RecommendationSection = () => {
  const recommendations = [
    {
      title: 'Tanah Lot',
      description: 'Explore the temple  fire dances at sunset, or simply grounds, stroll along the scenic coastline, and soak in the mystical ambiance.',
      location: 'Baraban, Tabanan',
      rating: 5,
      imageUrl: image, 
    },
    {
      title: 'Kelingking Beach',
      description: "Discover stunning natural attractions like Angel's Billabong, Kelingking Beach, and Crystal Bay, where turquoise waters meet...",
      location: 'Nusa Penida, Klungkung',
      rating: 4.7,
      imageUrl: image2, 
    },
    {
      title: 'Cliffside Serenity',
      description: 'Explore the iconic Uluwatu Temple, watch mesmerizing Keack fire dances at sunset, or simply soak in the breatht...',
      location: 'Uluwatu, Badung',
      rating: 4.9,
      imageUrl: image3, 
    }, {
        title: 'Cliffside Serenity',
        description: 'Explore the iconic Uluwatu Temple, watch mesmerizing Keack fire dances at sunset, or simply soak in the breatht...',
        location: 'Uluwatu, Badung',
        rating: 4.9,
        imageUrl: image3, 
      },
      {
        title: 'Cliffside Serenity',
        description: 'Explore the iconic Uluwatu Temple, watch mesmerizing Keack fire dances at sunset, or simply soak in the breatht...',
        location: 'Uluwatu, Badung',
        rating: 4.9,
        imageUrl: image3, 
      },
      {
        title: 'Kelingking Beach',
        description: "Discover stunning natural attractions like Angel's Billabong, Kelingking Beach, and Crystal Bay, where turquoise waters meet...",
        location: 'Nusa Penida, Klungkung',
        rating: 4.7,
        imageUrl: image2, 
      },
    // Add more recommendations as needed
  ];

  return (
    <div className="w-full py-8 mx-4 px-4 font-Poppins">
      <h2 className="text-3xl  mb-8 ">Our recommendation</h2>
      <div className="scrol flex overflow-x-auto space-x-4 scrollbar-hide ">
        {recommendations.map((rec, index) => (
          <div key={index} className="min-w-[250px] max-w-[300px] bg-white rounded-xl shadow-md overflow-hidden  border-gray-700 border-2 ">
            <img src={rec.imageUrl} alt={rec.title} className="w-full h-40 object-cover" />
            <div className="p-4 h-full ">
              <h3 className="text-lg ">{rec.title}</h3>
              <p className="text-gray-600 text-sm">{rec.description}</p>
              <div className="flex justify-between items-center mt-2 ">
              <CiLocationOn />
                <span className="text-gray-400 text-sm">{rec.location}</span>
                
                <span className="text-gray-800 text-xs ">{rec.rating} </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendationSection;
