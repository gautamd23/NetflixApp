import React, { useState } from "react";
import Header from "./Header";

export default function Login() {
    const [showSignIn, setShowSignIn] = useState(true);

    function handleToggleSignIn() {
        setShowSignIn(!showSignIn)
    }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/594f8025-139a-4a35-b58d-4ecf8fdc507c/d3c4e455-f0bf-4003-b7cd-511dda6da82a/IN-en-20240108-popsignuptwoweeks-perspective_alpha_website_large.jpg"></img>
      </div>

      <form className="flex flex-col gap-3 absolute bg-black mx-auto mt-[150px] w-4/12 right-0 left-0 py-14 px-16 text-white bg-opacity-80 rounded-lg">
      <h1 className="font-bold text-3xl text-white my-3">{showSignIn ? "Sign In": "Sign Up"}</h1>
      {!showSignIn && <input
          type="text"
          placeholder="Full Name"
          className="px-3 py-3 rounded-sm bg-slate-800"
        ></input>}
        <input
          type="text"
          placeholder="Email Address"
          className="px-3 py-3 rounded-sm bg-slate-800"
        ></input>
        <input
          type="password"
          placeholder="password"
          className="px-3 py-3 rounded-sm bg-slate-800"
        ></input>
        <button className="mt-5 w-full px-3 py-3 bg-red-700 rounded-sm">{showSignIn ? "Sign In": "Sign Up"}</button>
        <p className="cursor-pointer text-sm py-3" onClick={handleToggleSignIn}>{showSignIn ?"New to Netflix? Sign up now.":"Already have an acount? Sign In now"}</p>
      </form>
    </div>
  );
} 
