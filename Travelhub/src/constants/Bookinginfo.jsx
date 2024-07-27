import React from 'react';

function BookingInfo({ icon, title, value }) {
  return (
    <div className="flex gap-5 justify-between self-stretch my-auto">
      <img loading="lazy" src={icon} alt="" className="shrink-0 w-12 aspect-square" />
      <div className="flex flex-col my-auto">
        <div className="text-sm text-neutral-500">{title}</div>
        <div className="text-xl leading-5 text-zinc-900">{value}</div>
      </div>
    </div>
  );
}

export default BookingInfo;