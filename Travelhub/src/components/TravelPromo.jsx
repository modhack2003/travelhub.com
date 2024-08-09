import React from 'react';
import image from '../assets/image copy 6.webp'

const TravelPromo = () => {
  return (
    
    <div className="max-w-screen-2xl  mx-auto my-14 p-8 flex flex-col md:flex-row gap-24 bg-white font-Poppins">
      <div className="flex-1 ">
        <img src={image} alt="Bali" className="w-full rounded-lg" />
        <p className="text-pink-600 mt-4">Discover the wonder of Bali</p>
        <h2 className="text-3xl  mt-2">Easy to Find Travel Perfection with Us</h2>
        <p className="mt-4">At our travel agency, we pride ourselves on being your ultimate companion for crafting exceptional journeys to anywhere. Join more than 100 users who already use our services.</p>
        <button className="mt-4 bg-black text-white py-2 px-4 rounded">Plan a tour</button>
      </div>
      <div className="border-r border-gray-500  text-center border-2" ></div>
      <div className="flex-1">
        <div className="border-b border-gray-300 py-4">
          <p className="text-[#3A0CA3]">7 July 2023 - 2 days 3 Nights</p>
          <h3 className="text-xl font-bold mt-2">Find the Nature</h3>
          <p className="mt-2">Discover Bali’s breathtaking nature. Find serenity in lush landscapes and pristine wilderness.</p>
        </div>
        <div className="border-b border-gray-300 py-4">
          <p className="text-[#3A0CA3]">14 August 2023 - 1 day 1 night</p>
          <h3 className="text-xl font-bold mt-2">Nightlife in Bali</h3>
          <p className="mt-2">Immerse in Bali’s vibrant nightlife. Dance, party, and make unforgettable memories.</p>
        </div>
        <div className="border-b border-gray-300 py-4">
          <p className="text-[#3A0CA3]">17 August 2023 - 7 days 6 nights</p>
          <h3 className="text-xl font-bold mt-2">One weeks of Cultural Journey</h3>
          <p className="mt-2">Dive deep into Bali’s traditions, arts, and immerse yourself in its cultural tapestry.</p>
        </div>
        <div className="py-4">
          <p className="text-[#3A0CA3]">30 July 2023 - 2 days 3 nights</p>
          <h3 className="text-xl font-bold mt-2">Hidden Gems of Bali</h3>
          <p className="mt-2">Discover Bali’s best-kept secrets and unveil its hidden gems off the beaten path.</p>
        </div>
      </div>
    </div>
  );
};

export default TravelPromo;
