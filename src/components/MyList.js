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
    <div className="bg-black pb-4 ">
      <div className="flex items-center justify-between z-10 w-screen absolute px-8 py-1 bg-gradient-to-b from-black">
        <img className="w-[160px] " src={LOGO_NET}></img>
        <div className="flex items-center">
          {/* <Link to="/my-list">
            <button>My List</button>
          </Link> */}
          <Link to="/">
            <button
              className="text-white px-2 mr-2 font-bold"
              // onClick={handelSearchToggle}
            >
              Explore
            </button>
          </Link>
          {user && (
            <div className="flex items-center">
              <img className="mx-3 mr-4" src={LOGO_PROFILE}></img>
            </div>
          )}
        </div>
      </div>
      <div className="pt-24 px-14">
        <h1 className="text-white py-10 text-3xl">My List</h1>
        <div className="flex flex-wrap gap-2">
          {myList?.map((movie) => {
            return <MovieCard posterPath={movie.poster_path} />;
          })}
        </div>
      </div>
    </div>
  );
}
