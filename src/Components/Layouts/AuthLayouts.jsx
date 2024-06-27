import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkMode } from "../../context/DarkMode";
const AuthLayouts = (props) => {
  const { title, children, type } = props;
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  {
    console.log(isDarkMode);
  }
  return (
    <div
      className={`flex gap-4 justify-center min-h-screen items-center ${
        isDarkMode && "bg-black"
      }`}>
      <div className="w-full max-w-xs">
        <button
          className="absolute right-2 top-2 px-5 hover:bg-sky-900 bg-blue-600 transition duration-200 ease-in-out p-2 text-white rounded"
          onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? "🌞" : " 🌙"}
        </button>
        <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
        <p
          className={`font-medium text-slte-500 mb-8 ${
            isDarkMode && "text-white"
          }`}>
          Please enter your details
        </p>
        {children}
        <p className={`mt-3 ${isDarkMode && "text-white"}`}>
          {type === "Login"
            ? "Dont have a account ? "
            : "Already have an account ? "}

          {type === "Login" && (
            <Link to="/register" className="font-bold text-blue-600">
              Register
            </Link>
          )}
          {type === "Register" && (
            <Link to="/login" className="font-bold text-blue-600">
              Login
            </Link>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthLayouts;
