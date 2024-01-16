import React from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { UseSelector, useSelector } from "react-redux";

export default function Header() {
    const user = useSelector((store)=> store.user)
    const navigate = useNavigate()

    function handleSignOut() {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/")

          }).catch((error) => {
            // An error happened.
            navigate('/error')
          });
    }
  return (
    <div className="flex items-center justify-between z-10 w-screen absolute px-3 py-3 bg-gradient-to-b from-black">
      <img
        className="w-[180px] "
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      ></img>
      {user &&<div className="flex items-center">
        <img className="mx-3" src="https://occ-0-3213-3646.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"></img>
        <button  onClick={handleSignOut}>Sign Out</button>
      </div>}
    </div>
  );
}
