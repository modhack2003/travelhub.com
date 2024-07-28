import React from "react";


export function SeeMoreButton() {
  return (<>
    <button className="  justify-center p-3 px-4  bg-black text-white flex  h-auto rounded-xl ">
      <span className="mr-2">See more</span>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f0913e90ebd16afc2a8139f243742405e1a37adddd2f57e286ac088fb93b279?apiKey=3720b0d9de5c4a81b101c572fd5bc12a&&apiKey=3720b0d9de5c4a81b101c572fd5bc12a"
        className="shrink-0 w-6 aspect-square"
        alt=""
      />
    </button>
    </>
  );
}