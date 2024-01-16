import React, { useRef, useState } from "react";
import Header from "./Header";
import CheckIsValidate from "../utils/validate";

export default function Login() {
  const [showSignIn, setShowSignIn] = useState(true);
  const email = useRef(null);
  const password = useRef(null);
  const userName = useRef(null);
  const [errorMsg, setErrorMsg] = useState(null);

  function handleToggleSignIn() {
    setShowSignIn(!showSignIn);
  }
  function handleSubmit() {
    const msg = CheckIsValidate(
      email.current.value,
      password.current.value,
      userName.current.value
    );
    setErrorMsg(msg);
  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/594f8025-139a-4a35-b58d-4ecf8fdc507c/d3c4e455-f0bf-4003-b7cd-511dda6da82a/IN-en-20240108-popsignuptwoweeks-perspective_alpha_website_large.jpg"></img>
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col gap-3 absolute bg-black mx-auto mt-[150px] w-4/12 right-0 left-0 py-14 px-16 text-white bg-opacity-80 rounded-lg"
      >
        <h1 className="font-bold text-3xl text-white my-3">
          {showSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!showSignIn && (
          <input
          ref={userName}
            type="text"
            placeholder="Full Name"
            className="px-3 py-3 rounded-sm bg-slate-800"
          ></input>
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="px-3 py-3 rounded-sm bg-slate-800"
        ></input>

        <input
          ref={password}
          type="password"
          placeholder="password"
          className="px-3 py-3 rounded-sm bg-slate-800"
        ></input>
        {errorMsg && <p className="text-orange-500 text-sm">{errorMsg}</p>}
        <button
          className="mt-5 w-full px-3 py-3 bg-red-700 rounded-sm"
          onClick={handleSubmit}
        >
          {showSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="cursor-pointer text-sm py-3" onClick={handleToggleSignIn}>
          {showSignIn
            ? "New to Netflix? Sign up now."
            : "Already have an acount? Sign In now"}
        </p>
      </form>
    </div>
  );
}
