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
      <div className="custom-border p-10 flex items-center rounded-xl border-2 border-slate-400">
        <div className="flex flex-col justify-center items-center">
          <img src="/images/shopping.png" alt="shopping" width={400} />
          <p className="absolute bottom-16 bg-green-400 rounded-xl mr-20 p-3 text-xl font-bold text-white">Enjoy Shopping</p>
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
              <Link to="/register" className="font-bold text-green-400 hover:text-green-300 transition duration-200 ease-in-out">
                Register
              </Link>
            )}
            {type === "Register" && (
              <Link to="/login" className="font-bold text-green-400 hover:text-green-300 transition duration-200 ease-in-out">
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
