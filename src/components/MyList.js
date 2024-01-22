import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import { LOGO_NET, LOGO_PROFILE } from "../utils/constants";
import { Link } from "react-router-dom";

export default function MyList() {
  const user = useSelector((store) => store?.user);
  const myList = useSelector((store) => store.list?.myList);
  console.log(myList);
  return (
    <div className="bg-black pb-4 w-[100%] min-h-[1000px]">
      <div className="flex items-center justify-between z-10 w-screen fixed md:absolute px-4 md:px-8 py-1 bg-gradient-to-b from-black">
        <img className="w-[80px] md:w-[160px] " src={LOGO_NET}></img>
        <div className="flex items-center">
          {/* <Link to="/my-list">
            <button>My List</button>
          </Link> */}
          <button
            className="text-white px-2 mr-1 md:mr-2 font-bold text-xs md:text-lg"
            // onClick={handelSearchToggle}
          >
            <Link to="/">Explore</Link>
          </button>
          <div className="flex items-center">
              <img
                className="w-5 md:w-8 mx-0 md:mx-3 mr-0 md:mr-4 sm:"
                src={LOGO_PROFILE}
              ></img>
              </div>
          {/* {user && (
            <div className="flex items-center">
              <img
                className="w-5 md:w-8 mx-0 md:mx-3 mr-0 md:mr-4 sm:"
                src={LOGO_PROFILE}
              ></img>
            </div>
          )} */}
        </div>
      </div>
      <div className="pt-24 px-14 flex flex-col justify-center ">
        <h1 className="text-white py-10 text-3xl">My List</h1>
        <div className="grid grid-cols-3 md:grid-cols-7  gap-1 ">
          {myList?.map((movie) => {
            return <MovieCard posterPath={movie.poster_path} />;
          })}
        </div>
      </div>
    </div>
  );
}
