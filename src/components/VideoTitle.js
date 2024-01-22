import React from "react";
import play from "../utils/play.png";
import info from "../utils/info.png";

export default function VideoTitle({ title, overview }) {
  return (
    <div className="mt-0 w-screen aspect-video pt-28 md:pt-60 px-5 md:px-10 absolute bg-gradient-to-r from-black text-white ">
      <h1 className="text-xl md:text-4xl font-bold py-1md:py-3 w-1/2">{title}</h1>
      <p className=" md:inline-block py-3 w-full md:w-1/3 text-xs md:text-sm ">{overview}</p>
      <div className="flex gap-3 mt-1 md:mt-3">
        <div className="  ">
          <button className="flex items-center py-1 md:py-2 px-3 md:px-8 font-bold text-sm md:text-lg bg-white text-black rounded-lg hover:bg-gray-400">
            <img className=" w-3 md:w-6 mr-2" src={play}></img>
            Play
          </button>
        </div>

        <button className="flex items-center py-1 md:py-2 px-2 md:px-6 font-bold text-sm md:text-lg bg-gray-100 text-white rounded-lg bg-opacity-20 hover:bg-opacity-15"><img className="w-4 md:w-6 mr-2" src={info}></img>
          More Info
        </button>
      </div>
    </div>
  );
}
