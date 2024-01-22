import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LNG_TYPE, LOGO_NET, LOGO_PROFILE } from "../utils/constants";
import { toggleSearch } from "../utils/searchSlice";
import { addLng } from "../utils/config";

export default function Header() {
  const search = useSelector((store) => store.search.searchToggle);
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const detailToggle = useSelector((store)=> store.details?.detailToggle)

  function handleSignOut() {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  }
  useEffect(function () {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        // ...

        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);
  function handelSearchToggle() {
    dispatch(toggleSearch());
  }
  function handleLngChange(e) {
    dispatch(addLng(e.target.value));
   
  }

  return (
    <div className="flex  items-center  z-10 w-screen absolute  py-1 bg-gradient-to-b from-black sm: md:flex-row px-8 justify-between">
      <img className="w-[80px] md:w-[160px] " src={LOGO_NET}></img>
      {user && (
        <div className="flex md:flex items-center ">
          

          <button
            className="text-xs md:text-lg  text-white px-0 md:px-2 mr-2 font-bold"
            onClick={handelSearchToggle}
          >
            {!search ? "Search" : "Explore"}
          </button>
          <div>
          <Link to="/my-list">
            <button className="text-white text-xs md:text-lg  mr-2 md:mr-2">My List</button>
          </Link>
          </div>
          <button className="text-xs md:text-lg p-0 mr-2 text-white md:mr-2 " onClick={handleSignOut}>
            Sign Out
          </button>
          {search  &&<select
            className="w-2 md:w-16 px-2 py-0 md:py-1 mr-1 md:mr-2 text-xs md:text-lg rounded-md "
            onChange={handleLngChange}
          >
            {LNG_TYPE.map((l) => {
              return <option key={l.name} value={l.lngCode}>{l.name}</option>;
            })}
          </select>}
          <img className="   md:mx-3 mr-4 sm:" src={LOGO_PROFILE}></img>
        </div>
      )}
    </div>
  );
}
