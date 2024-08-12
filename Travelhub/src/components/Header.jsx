import React, { useState, useEffect } from "react";
import image1 from "../assets/image copy 7.webp"; // Add multiple images
import image2 from "../assets/alla-havriushenko-7LpEmYW9YUE-unsplash copy.webp";
import image3 from "../assets/ishan-seefromthesky-rj8fMHNPXbg-unsplash copy.webp";
import { SeeMoreButton } from "../constants/seemore";
import ProgressBarWrapper from "./progressBar/index";

const Header = () => {
  const images = [image1, image2, image3]; 
  const totalImages = images.length;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [progress, setProgress] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= totalImages) {
          return 1; 
        }
        return prev + 1;
      });
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setCurrentImageIndex(progress - 1);
  }, [progress]);

  return (
    <header className="font-Poppins md:px-32 px-6  pb-12 h-screen relative overflow-hidden">
      <img
        src={images[currentImageIndex]}
        className="object-cover w-full h-full absolute top-0 left-0"
        alt="Background"
      />
      <div className="relative z-10 top-44 left-5 w-[54%] h-auto pl-8 leading-snug max-md:w-[90%] max-md:left-4 max-md:pl-0 max-md:top-32">
        <h1 className="text-white text-6xl max-md:text-4xl">
          Discover the Beauty and the Tropical Heaven places around the globe
        </h1>
        <p className="text-white mt-6 text-xl w-[75%] max-md:w-full max-md:text-base">
          We are dedicated to curating personalized itineraries that showcase
          Bali's breathtaking landscapes, multicultural, and authentic charm.
        </p>
      </div>
      <div className=" z-10 mx-6 px-6 md:w-[75%] flex justify-between absolute gap-80 md:top-[80vh] top-[80vh] max-md:flex-col max-md:gap-4">
        <SeeMoreButton />
        <ProgressBarWrapper progress={progress} total={totalImages} />
      </div>
    </header>
  );
};

export default Header;
