import React from "react";
import play from "../utils/play.png";
import info from "../utils/info.png";

export default function VideoTitle({ title, overview }) {
  return (
    <div className="w-screen aspect-video pt-60 px-10 absolute bg-gradient-to-r from-black text-white ">
      <h1 className="font-bold text-4xl py-3 w-1/2">{title}</h1>
      <p className=" py-3 w-1/3 text-sm ">{overview}</p>
      <div className="flex gap-3 mt-3">
        <div className="  ">
          <button className="flex items-center py-2 px-8 font-bold text-lg bg-white text-black rounded-lg hover:bg-gray-400">
            <img className="w-6 mr-2" src={play}></img>
            Play
          </button>
        </div>

        <button className="flex items-center py-2 px-6 font-bold text-lg bg-gray-100 text-white rounded-lg bg-opacity-20 hover:bg-opacity-15"><img className="w-6 mr-2" src={info}></img>
          More Info
        </button>
      </div>
    </div>
  );
}
