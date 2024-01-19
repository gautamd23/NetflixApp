import React from "react";
import { languageOptions } from "../utils/languageConstant";
import { useSelector } from "react-redux";

export default function () {
  const lang = useSelector((store) => store.lang.lang);
  
  return (
    <div className="pt-[12%] flex justify-center items-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex justify-center w-full py-3 px-3 "
      >
        <input
          className="py-2 px-3 w-1/3 rounded-sm mr-4 shadow-2xl outline-none"
          type="text"
          placeholder={languageOptions[lang].placeholder}
        ></input>
        <button className="bg-red-700 py-2 px-5 rounded-sm text-white shadow-2xl">
          {languageOptions[lang].search}
        </button>
      </form>
    </div>
  );
}
