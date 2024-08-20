import React from "react";

const GetInTouch = () => {
  return (
    <div className="w-full md:w-[20%] mt-8 md:mt-0">
      <h2 className="text-lg sm:text-xl font-semibold text-white">Get in Touch</h2>
      <p className="mt-4 text-sm sm:text-base">
        We will send you a weekly newsletter and of course, all promo and travel ideas.
      </p>
      <div className="mt-4 flex items-center relative">
        <input
          type="email"
          placeholder="Your email"
          className="bg-white text-black focus:outline-none p-2 pl-3 w-full md:w-[95%] rounded-xl text-sm sm:text-base"
        />
        <button className="p-2 bg-black text-white rounded-xl absolute right-0 md:right-3">
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6"
            viewBox="1 -5 14 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.862793 16.5L15.8628 1.5M15.8628 1.5H4.61279M15.8628 1.5V12.75"
              stroke="#FAFAFA"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default GetInTouch;
