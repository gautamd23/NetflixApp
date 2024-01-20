// import React, { useEffect } from "react";
// import { API_OPTIONS } from "../utils/constants";

// export default function useSearchMovie(movie) {
//   async function getSearchMovie() {
//     const data = await fetch(
//       `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
//       API_OPTIONS
//     );
//     const json = await data.json();
//     console.log(json.results);
//   }
// //   useEffect(function(){
// //     getSearchMovie()
// //   },[])
// }

// export const {getSearchMovie} = useSearchMovie;
