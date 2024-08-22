import React from 'react';
import BookingInfo from '../constants/Bookinginfo';

const bookingData = [
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b6dcb97d8d4c15c37053751c89c0e12f0722c41881f3eef84381e85180e1dabb?apiKey=3720b0d9de5c4a81b101c572fd5bc12a&&apiKey=3720b0d9de5c4a81b101c572fd5bc12a", title: "Location", value: "Benaras, India" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/38c62890039ab3e5534939c4a027619276d3c879c2286573eb6a9d8f749e2a16?apiKey=3720b0d9de5c4a81b101c572fd5bc12a&&apiKey=3720b0d9de5c4a81b101c572fd5bc12a", title: "Date", value: "23-30 July 2023" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b6dcb97d8d4c15c37053751c89c0e12f0722c41881f3eef84381e85180e1dabb?apiKey=3720b0d9de5c4a81b101c572fd5bc12a&&apiKey=3720b0d9de5c4a81b101c572fd5bc12a", title: "Traveler", value: "2 adults" }
];

function TravelBookingCard() {
  return (
    <section className="flex flex-col md:flex-row gap-4 md:gap-6 justify-between items-center px-4  mx-4  sm:mx-6  md:mx-16 lg:mx-24 xl:mx-40  py-3  my-4 bg-neutral-50 border-2 border-solid border-zinc-900 rounded-2xl">
      {bookingData.map((item, index) => (
        <BookingInfo key={index} icon={item.icon} title={item.title} value={item.value} />
      ))}
      <button className="mt-4 md:mt-0 md:self-stretch p-4 text-base bg-black rounded-lg text-neutral-50">
        Booking now
      </button>
    </section>
  );
}

export default TravelBookingCard;
