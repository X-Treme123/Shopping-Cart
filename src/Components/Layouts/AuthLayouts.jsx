import React from "react";
import { Link } from "react-router-dom";
import "../Layouts/Image.css";

const AuthLayouts = (props) => {
  const { title, children, type } = props;
  // const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  // {
  //   console.log(isDarkMode);
  // }
  return (
    <div
      className="custom-background flex gap-4 justify-center min-h-screen items-center">
      <div className="custom-border p-10 bg-slate-100 flex items-center rounded-xl border-2 border-slate-300">
        <div className="flex flex-col justify-center items-center">
          <img src="/images/shopping.png" alt="shopping" width={300} />
          <p className="text-xl font-bold pr-10 text-white">Enjoy <span className="text-green-400">Shopping</span></p>
        </div>
        <div className="w-full max-w-xs">
          {/* <button
            className="absolute right-2 top-2 px-5 hover:bg-green-700 bg-green-500 transition duration-200 ease-in-out p-2 text-green-500 rounded"
            onClick={() => setIsDarkMode(!isDarkMode)}>
            {isDarkMode ? "🌞" : " 🌙"}
          </button> */}
          <h1 className="text-3xl font-bold mb-2 text-white">{title}</h1>
          <p className="font-medium text-slte-500 mb-8 text-white">
            Please enter your details
          </p>
          {children}
          <p className="my-8 font-semibold text-white">
            {type === "Login"
              ? "Dont have a account ? "
              : "Already have an account ? "}

            {type === "Login" && (
              <Link to="/register" className="font-bold text-green-400">
                Register
              </Link>
            )}
            {type === "Register" && (
              <Link to="/login" className="font-bold text-green-400">
                Login
              </Link>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthLayouts;
