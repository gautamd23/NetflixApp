import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
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
    <div className="flex items-center justify-between z-10 w-screen absolute px-8 py-1 bg-gradient-to-b from-black">
      <img className="w-[160px] " src={LOGO_NET}></img>
      {user && (
        <div className="flex items-center">
          

          <button
            className="text-white px-2 mr-2 font-bold"
            onClick={handelSearchToggle}
          >
            {!search ? "Search" : "Explore"}
          </button>

          <button className="mr-2 text-white" onClick={handleSignOut}>
            Sign Out
          </button>
          {search  &&<select
            className="px-2 py-1 mr-2 text-sm rounded-md"
            onChange={handleLngChange}
          >
            {LNG_TYPE.map((l) => {
              return <option key={l.name} value={l.lngCode}>{l.name}</option>;
            })}
          </select>}
          <img className="mx-3 mr-4" src={LOGO_PROFILE}></img>
        </div>
      )}
    </div>
  );
}
