import { useSelector } from "react-redux";
import Button from "../Components/Elements/Button/Button";
import { useContext, useEffect } from "react";
import Navbar from "../Components/Layouts/NavbarLayouts";
import { DarkMode } from "../context/DarkMode";

export const BuyPage = (props) => {
  const { products } = props;
  const cart = useSelector((state) => state.cart.data);
  const { isDarkMode } = useContext(DarkMode);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart, products]);

  return (
    <div>
      <Navbar></Navbar>
      <div className="h-screen flex flex-col items-center justify-center border-2 bg-black text-white">
        <div className="h-20 w-[70%] border-2 flex justify-around items-center">
          <h1>Shopping Cart</h1>
          <p>Payment</p>
        </div>
        <div className="h-80 w-[70%] border-2 flex justify-around items-center">
          <p>Payment</p>
          <p>Test</p>
        </div>
        <div className="h-20 w-[70%] border-2 flex justify-around items-center">
          continue
          <Button classname="bg-blue-600">CheckOut</Button>
        </div>
      </div>
    </div>
  );
};
