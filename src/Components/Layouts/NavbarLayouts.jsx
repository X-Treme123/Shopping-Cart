import { useContext, useEffect, useState } from "react";
import useLogin from "../../hooks/useLogin";
import Button from "../Elements/Button/Button";
import { useSelector } from "react-redux";
import { DarkMode } from "../../context/DarkMode";
import { useTotalPrice } from "../../context/TotalPriceContext";
import Naruto from "/images/naruto.jpeg";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = (props) => {
  const { type, children } = props;
  const username = useLogin();
  const [totalCart, setTotalCart] = useState(0);
  const cart = useSelector((state) => state.cart.data);
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  const { total } = useTotalPrice();

  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
      return acc + item.qty;
    }, 0);
    setTotalCart(sum);
  }, [cart]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  const handleBack = () => {
    window.location.href = "/products";
  };

  return (
    <div className="bg-blue-700 text-white flex justify-between px-10 h-20 items-center">
      <div className="flex justify-center items-center">
        {children}
        {type === "Products" ? (
          <Link to="/profile">
            <img
              src={Naruto}
              className="w-10 rounded cursor-pointer border-solid border-2 border-black"
            />
          </Link>
        ) : (
          ""
        )}
        {type === "Products" ? (
          <h1 className="ml-3 font-bold">{username}</h1>
        ) : (
          ""
        )}
      </div>
      <h1 className="ml-20 font-bold">
        {type === "Products"
          ? `Total Item: ${totalCart} | Price $${total}`
          : ""}
      </h1>
      <div className={"flex justify-center items-center"}>
        {type === "Products" ? (
          <Link
            to="/buy"
            className="text-3xl mx-5 text-slate-100 hover:text-slate-300 transition duration-300 ease-in-out">
            <FaShoppingCart />
          </Link>
        ) : (
          ""
        )}

        {type === "Products" ? (
          <Button onClick={handleLogout}>Logout</Button>
        ) : (
          <Button onClick={handleBack}>Back</Button>
        )}
        {type === "Profile" ? (
          ""
        ) : (
          <button
            className={
              "px-5 py-2 mx-3 rounded-md bg-black hover:bg-white duration-200 ease-in-out"
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
