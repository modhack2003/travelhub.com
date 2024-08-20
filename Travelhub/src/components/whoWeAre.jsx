import React from 'react';

function WhoWeAre() {
  return (
    <section className="p-4 sm:px-8 md:px-16 lg:px-28 xl:px-40 font-Poppins">
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <div className="flex-1 flex items-center justify-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium leading-snug text-zinc-900 text-center md:text-left">
            Who we are?
          </h2>
        </div>
        <div className="flex-1 flex flex-col">
          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-neutral-500">
            We are dedicated to curating personalized itineraries that showcase Bali's breathtaking landscapes, multicultural, and authentic charm. We are here to guide you on a remarkable journey filled with joy, discovery, and cherished memories. Let us be your gateway to the extraordinary of Bali.
          </p>
        </div>       
      </div>
    </section>
  );
}

export default WhoWeAre;
