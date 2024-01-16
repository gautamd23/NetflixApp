import React from "react";

export default function CheckIsValidate(email, password) {
  const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    

  if (!isEmailValid) return "Email is not valid!";
  if (!isPasswordValid) return "Password is not valid!";
  
  return null;
}
