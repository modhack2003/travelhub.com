import React from 'react';


function WhoWeAre() {
  return (
    <section className="p-10  font-Poppins ">
      <div className="flex gap-5 max-md:flex-col">
      <div className="flex items-center justify-center w-[44%] max-md:ml-0 max-md:w-full">
      <h2 className=" text-5xl font-medium leading-[73.6px] text-zinc-900 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        Who we are?
      </h2>
    </div>
    <div className="flex flex-col ml-5 w-[56%] max-md:ml-0 max-md:w-full">
      <p className="text-sm leading-8 text-neutral-500 max-md:mt-10 max-md:max-w-full">
        We are dedicated to curating personalized itineraries that showcase Bali's breathtaking landscapes, multicultural, and authentic charm. We are here to guide you on a remarkable journey filled with joy, discovery, and cherished memories. Let us be your gateway to the extraordinary of Bali.
      </p>
    </div>       
      </div>
    </section>
  );
}

export default WhoWeAre;