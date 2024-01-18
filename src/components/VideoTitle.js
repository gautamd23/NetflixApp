import React from "react";

export default function VideoTitle({ title, overview }) {
  return (
    <div className="w-screen aspect-video pt-60 px-10 absolute bg-gradient-to-r from-black text-white ">
      <h1 className="font-bold text-4xl py-3 w-1/2">{title}</h1>
      <p className=" py-3 w-1/3 text-sm ">{overview}</p>
      <div className="flex gap-3 mt-3">
        <button className="py-2 px-10 font-bold text-xl bg-white text-black rounded-lg hover:bg-gray-400">Play</button>
        <button className="py-2 px-6 font-bold text-xl bg-gray-100 text-white rounded-lg bg-opacity-20 hover:bg-opacity-15">More Info</button>
      </div>
    </div>
  );
}
