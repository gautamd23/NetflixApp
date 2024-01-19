import React from "react";
import SearchBar from "./SearchBar";
import { BG_IMG } from "../utils/constants";

export default function Search() {
  return (
    <div>
      <div className="absolute -z-10 ">
        <img className="object-cover  w-screen h-svh" src={BG_IMG}></img>
      </div>
      <SearchBar />
    </div>
  );
}
