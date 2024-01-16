import React from "react";

export default function CheckIsValidate(email, password, userName) {
  const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const isUserNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(userName)

  if (!isEmailValid) return "Email is not valid!";
  if (!isPasswordValid) return "Password is not valid!";
  if(!isUserNameValid) return "Please enter a valid name!"
  
}
