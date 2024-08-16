import React from 'react';
import BookingInfo from '../constants/Bookinginfo';

const bookingData = [
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b6dcb97d8d4c15c37053751c89c0e12f0722c41881f3eef84381e85180e1dabb?apiKey=3720b0d9de5c4a81b101c572fd5bc12a&&apiKey=3720b0d9de5c4a81b101c572fd5bc12a", title: "Location", value: "Benaras, India" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/38c62890039ab3e5534939c4a027619276d3c879c2286573eb6a9d8f749e2a16?apiKey=3720b0d9de5c4a81b101c572fd5bc12a&&apiKey=3720b0d9de5c4a81b101c572fd5bc12a", title: "Date", value: "23-30 July 2023" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b6dcb97d8d4c15c37053751c89c0e12f0722c41881f3eef84381e85180e1dabb?apiKey=3720b0d9de5c4a81b101c572fd5bc12a&&apiKey=3720b0d9de5c4a81b101c572fd5bc12a", title: "Traveler", value: "2 adults" }
];

function TravelBookingCard() {
  return (
    <section className="flex gap-5 justify-between items-center px-4 py-3  md:mx-48 mx-8 m-2 my-3 font-medium rounded-2xl border-2 border-solid bg-neutral-50 border-zinc-900 max-md:flex-wrap max-md:px-5">
      {bookingData.map((item, index) => (
        <BookingInfo key={index} icon={item.icon} title={item.title} value={item.value} />
      ))}
      <button className="self-stretch p-4 text-base bg-black rounded-lg text-neutral-50">
        Booking now
      </button>
    </section>
  );
}

export default TravelBookingCard;