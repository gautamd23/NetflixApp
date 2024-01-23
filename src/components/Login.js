import React, { useRef, useState } from "react";
import Header from "./Header";
import CheckIsValidate from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_IMG } from "../utils/constants";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showSignIn, setShowSignIn] = useState(true);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const [errorMsg, setErrorMsg] = useState(null);

  function handleToggleSignIn() {
    setShowSignIn(!showSignIn);
  }
  function handleSubmit() {
    const msg = CheckIsValidate(email.current?.value, password.current?.value);
    setErrorMsg(msg);

    if (msg) return;

    if (!showSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current?.value,
        password.current?.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
              navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              // ...
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(error.message);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(error.message);
        });
    }
  }
  return (
    <div>
      <Header />
      <div className="absolute  ">
        <img className="object-cover  w-screen h-svh" src={BG_IMG}></img>
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col gap-3 absolute bg-black mx-auto mt-[140px] w-[320px] justify-center right-0 left-0 py-10 px-8  text-white bg-opacity-80 rounded-lg"
      >
        <h1 className="font-bold font-sans text-3xl text-white my-3 mx-2">
          {showSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!showSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="px-4 py-3 mx-2 rounded-sm bg-slate-800"
          ></input>
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className=" px-4 py-3 mx-2 rounded-sm bg-slate-800"
        ></input>

        <input
          ref={password}
          type="password"
          placeholder="password"
          className="px-4 py-3 mx-2 rounded-sm bg-slate-800"
        ></input>
        {errorMsg && <p className="text-orange-500 text-sm mx-2">{errorMsg}</p>}
        <button
          className="mt-5  px-3 py-3 mx-2 bg-red-700 rounded-sm"
          onClick={handleSubmit}
        >
          {showSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="cursor-pointer text-xs py-3 mx-2"
          onClick={handleToggleSignIn}
        >
          {showSignIn
            ? "New to Netflix? Sign up now."
            : "Already have an acount? Sign In now"}
        </p>
      </form>
    </div>
  );
}
