import React from "react";
import image from "../assets/image copy 7.webp";
import { SeeMoreButton } from "../constants/seemore";
import ProgressBarWrapper from "./progressBar/index";

const Header = () => {
  return (
    <header className="font-Poppins mb- pb-12 h-screen relative overflow-hidden">
      <img src={image} className="object-cover w-full h-full absolute top-0 left-0" alt="Background" />
      <div className="relative z-10 top-44 left-5 w-[54%] h-auto pl-8 leading-snug max-md:w-[90%] max-md:left-4 max-md:pl-0 max-md:top-32">
        <h1 className="text-white text-6xl max-md:text-4xl">
          Discover the Beauty and the Tropical Heaven places around the globe
        </h1>
        <p className="text-white mt-6 text-xl w-[75%] max-md:w-full max-md:text-base">
          We are dedicated to curating personalized itineraries that showcase
          Bali's breathtaking landscapes, multicultural, and authentic charm.
        </p>
      </div>
      <div className=" z-10 mx-6 px-6 md:w-[97%] flex justify-between absolute gap-80 md:top-[80vh] top-[80vh] max-md:flex-col max-md:gap-4  ">
        <SeeMoreButton />
        <ProgressBarWrapper /> {/* Hidden on mobile */}
      </div>
    </header>
  );
};

export default Header;
