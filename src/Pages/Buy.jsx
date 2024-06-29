import { useSelector } from "react-redux";
import Button from "../Components/Elements/Button/Button";
import { useContext, useEffect } from "react";
import Navbar from "../Components/Layouts/NavbarLayouts";
import { DarkMode } from "../context/DarkMode";
import { Link } from "react-router-dom";

export const BuyPage = (props) => {
  const { products } = props;
  const cart = useSelector((state) => state.cart.data);
  const { isDarkMode } = useContext(DarkMode)

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart, products]);

  return (
    <div>
      <Navbar type="Details"></Navbar>
      <div className={`h-screen w-full flex flex-col items-center justify-center border-2 ${isDarkMode? "bg-black text-white" : "bg-white text-black"}`}>
        <div className="w-4/5 flex flex-col items-start gap-5 shadow-2xl shadow-gray-700 border-blue-500 border-2 bg-slate-200">
          <div className="flex justify-between mx-4 border-b border-gray-400 pb-2">
            <h1 className="text-xl font-bold">Shopping Cart</h1>
            <h2 className="font-bold">3 Items</h2>
          </div>
          <div className="flex justify-between gap-5 mx-5 mt-4 text-gray-500 font-semibold text-xs italic uppercase">
            <h4>Product details</h4>
            <h4>Quantity</h4>
            <h4>Price</h4>
            <h4>Total</h4>
          </div>
          <div className="flex items-end mt-8">
              <Link
                to="/products"
                className="flex items-center ml-5 text-slate-600 hover:text-slate-700 font-semibold text-sm">
                Continue Shopping
              </Link>
            </div>

        </div>
      </div>
    </div>
  );
};
