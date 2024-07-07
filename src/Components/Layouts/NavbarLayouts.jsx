import { useContext, useEffect, useState } from "react";
import useLogin from "../../hooks/useLogin";
import Button from "../Elements/Button/Button";
import { DarkMode } from "../../context/DarkMode";
import Picture from "/images/profile.png";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { TotalPriceProvider, useTotalDispathPrice } from "../../context/TotalPriceContext";

const Navbar = (props) => {
  const { type, children } = props;
  const username = useLogin();
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  const handleBack = () => {
    window.location.href = "/products";
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scroll ke bawah
        setIsVisible(false);
      } else {
        // Scroll ke atas
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`bg-green-500 text-white flex justify-between px-10 h-20 items-center sticky top-0 z-50 transition-transform duration-300 ${
        isVisible ? "transform translate-y-0" : "transform -translate-y-full"
      }`}>
      <div className="flex justify-center items-center">
        {children}
        {type === "Products" && (
          <Link to="/profile">
            <img src={Picture} className="w-9 rounded-full cursor-pointer" />
          </Link>
        )}
        {type === "Profile" && <p className="font-bold text-2xl">TrendMart</p>}
        {type === "Products" && <h1 className="ml-3 font-bold">{username}</h1>}
      </div>
      <h1 className="ml-20 font-extrabold text-2xl">
        {type === "Products" && "TrendMart"}
      </h1>
      <div className={"flex justify-center items-center"}>
        {type === "Products" && (
          <Link
            to="/buy"
            className="text-3xl mx-5 text-slate-100 hover:text-slate-300 transition duration-300 ease-in-out">
            <p className="absolute bg-orange-500 rounded-full p-1 mx-3 right-20 text-sm ">t</p>
            <FaShoppingCart />
          </Link>
        )}

        {type === "Products" ? (
          <Button onClick={handleLogout}>Logout</Button>
        ) : (
          <Button
            onClick={handleBack}
            classname="bg-slate-800 hover:bg-slate-600">
            Back
          </Button>
        )}
        {type == "Products" && (
          <button
            className={
              "px-5 py-2 mx-3 rounded-md bg-black hover:bg-white duration-200 ease-in-out"
            }
            onClick={() => setIsDarkMode(!isDarkMode)}>
            {isDarkMode ? "🌞" : "🌙"}
          </button>
        )}
        {type == "Profile" && (
          <button
            className={
              "px-5 py-2 mx-3 rounded-md bg-slate-600 hover:bg-slate-500 duration-200 ease-in-out"
            }
            onClick={() => setIsDarkMode(!isDarkMode)}>
            {isDarkMode ? "🌞" : "🌙"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
