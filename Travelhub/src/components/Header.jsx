import React from "react";
import image from "../assets/image copy 7.webp";
import { SeeMoreButton } from "../constants/seemore";
import ProgressBarWrapper from "./progressBar";

const Header = () => {
  return (
    <header className=" font-Poppins mb-  pb-12 h-screen  overflow-hidden ">
      <div className="absolute top-44 left-5 w-[54%] h-auto pl-8 leading-snug">
        <h1 className=" text-white  text-6xl ">
          Discover the Beauty and the Tropical Heaven places around the globe
        </h1>
        <p className="text-white mt-6 text-xl w-[75%]">
          we are dedicated to curating personalized itineraries that showcase
          Bali's breathtaking landscapes, multicultural, and authentic charm.
        </p>
      </div>
      <div className=" mx-6 px-6 w-[97%] flex justify-between absolute gap-80 top-[80vh] ">
        <SeeMoreButton />
        <ProgressBarWrapper />
      </div>
      <img src={image} className="object-cover" />
    </header>
  );
};

export default Header;
