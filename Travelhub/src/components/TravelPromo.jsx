import React from 'react';
import image from '../assets/image copy 6.webp';

const TravelPromo = () => {
  return (
    <div className="max-w-screen-2xl mx-4 sm:mx-6 md:mx-16 lg:mx-24 xl:mx-40 my-14 p-4 sm:p-6 md:p-8 flex flex-col md:flex-row gap-8 md:gap-16 bg-white font-Poppins">
      <div className="flex-1 flex flex-col justify-start items-start">
        <img src={image} alt="Bali" className="w-full rounded-lg object-cover" />
        <p className="text-pink-600 mt-4 text-center md:text-left">Discover the wonder of Bali</p>
        <h2 className="text-2xl sm:text-3xl mt-2 text-center md:text-left">Easy to Find Travel Perfection with Us</h2>
        <p className="mt-4 text-center md:text-left">At our travel agency, we pride ourselves on being your ultimate companion for crafting exceptional journeys to anywhere. Join more than 100 users who already use our services.</p>
        <button className="mt-4 bg-black text-white py-2 px-4 rounded ">Plan a tour</button>
      </div>
      <div className="border-b md:border-r border-gray-500 text-center md:text-left border-2 md:border-0 md:border-gray-500"></div>
      <div className="flex-1 flex flex-col">
        <div className="border-b border-gray-300 py-4">
          <p className="text-[#3A0CA3]">7 July 2023 - 2 days 3 Nights</p>
          <h3 className="text-lg sm:text-xl font-bold mt-2">Find the Nature</h3>
          <p className="mt-2">Discover Bali’s breathtaking nature. Find serenity in lush landscapes and pristine wilderness.</p>
        </div>
        <div className="border-b border-gray-300 py-4">
          <p className="text-[#3A0CA3]">14 August 2023 - 1 day 1 night</p>
          <h3 className="text-lg sm:text-xl font-bold mt-2">Nightlife in Bali</h3>
          <p className="mt-2">Immerse in Bali’s vibrant nightlife. Dance, party, and make unforgettable memories.</p>
        </div>
        <div className="border-b border-gray-300 py-4">
          <p className="text-[#3A0CA3]">17 August 2023 - 7 days 6 nights</p>
          <h3 className="text-lg sm:text-xl font-bold mt-2">One Week of Cultural Journey</h3>
          <p className="mt-2">Dive deep into Bali’s traditions, arts, and immerse yourself in its cultural tapestry.</p>
        </div>
        <div className="py-4">
          <p className="text-[#3A0CA3]">30 July 2023 - 2 days 3 nights</p>
          <h3 className="text-lg sm:text-xl font-bold mt-2">Hidden Gems of Bali</h3>
          <p className="mt-2">Discover Bali’s best-kept secrets and unveil its hidden gems off the beaten path.</p>
        </div>
      </div>
    </div>
  );
};

export default TravelPromo;
