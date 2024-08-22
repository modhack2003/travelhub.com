import React, { useState, useEffect } from "react";
import image1 from "../assets/image copy 7.webp";
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
    <header className="font-Poppins xl:px-32 lg:px-24 md:px-16 sm:px-10 px-4 pb-12 h-screen relative overflow-hidden">
      <img
        src={images[currentImageIndex]}
        className="object-cover w-full h-full absolute top-0 left-0"
        alt="Background"
      />
      <div className="relative z-10 top-36 left-9 w-[54%] h-auto leading-snug max-lg:w-[65%] max-md:w-[90%] max-md:left-4 max-md:top-32 max-sm:top-24 max-sm:w-[95%]">
        <h1 className="text-white xl:text-6xl lg:text-5xl md:text-4xl sm:text-5xl text-4xl">
          Discover the Beauty and the Tropical Heaven places around the globe
        </h1>
        <p className="text-white mt-6 xl:text-xl lg:text-lg md:text-base sm:text-sm text-sm w-[75%] max-md:w-full">
          We are dedicated to curating personalized itineraries that showcase
          Bali's breathtaking landscapes, multicultural, and authentic charm.
        </p>
      </div>
      <div className="relative z-10  px-4 sm:px-6 md:px-8 w-full max-w-screen-2xl flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center  gap-4 md:gap-6 lg:gap-8 mt-60 md:mt-64 lg:mt-72">
  <SeeMoreButton />
  <ProgressBarWrapper progress={progress} total={totalImages} />
</div>



    </header>
  );
};

export default Header;
