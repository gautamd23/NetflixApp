import React, { useRef } from "react";
import { languageOptions } from "../utils/languageConstant";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";

import { API_OPTIONS } from "../utils/constants";
import { addSearchedMovies, clearSearch, searchQuery } from "../utils/moviesSlice";

export default function SearchBar() {
    const dispatch = useDispatch()
    const searchMovies = useSelector((store)=>store.movie?.searchMovies);
   
  const query = useRef(null);
  const lang = useSelector((store) => store.lang.lang);

  async function handleSearch() {
    if(!query.current.value) return null
    const data = await fetch(
        `https://api.themoviedb.org/3/search/multi?query=${query.current.value}&include_adult=false&language=en-US&page=1`
      ,
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json.results);
    dispatch(addSearchedMovies(json.results))
    dispatch(searchQuery(query.current.value))
  }
//   if(!query.current?.value) dispatch(clearSearch())

  return (
    <div className="pt-[45%]  md:pt-[12%] flex justify-center items-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex justify-center w-full py-3 px-3 "
      >
        <input
          ref={query}
          className="py-2 px-3 w-full md:w-1/3 rounded-sm mr-4 shadow-2xl outline-none"
          type="text"
          placeholder={languageOptions[lang].placeholder}
        ></input>
        <button
          className="bg-red-700 py-2 px-5 rounded-sm text-white shadow-2xl"
          onClick={handleSearch}
        >
          {languageOptions[lang].search}
        </button>
      </form>
    </div>
  );
}
