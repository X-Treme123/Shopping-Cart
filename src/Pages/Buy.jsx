import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdArrowBackIos } from "react-icons/md";
import {
  useTotalDispathPrice,
  useTotalPrice,
} from "../context/TotalPriceContext";
import { getProducts } from "../Services/products.service";
import useLogin from "../hooks/useLogin";
import Bca from "../Components/Elements/icons/Bank/Bca.jsx";
import BNI from "../Components/Elements/icons/Bank/BNI.jsx";
import BRI from "../Components/Elements/icons/Bank/BRI.jsx";
import Mandiri from "../Components/Elements/icons/Bank/Mandiri.jsx";
import Button from "../Components/Elements/Button/Button.jsx";
import { FaShoppingCart } from "react-icons/fa";
import { removeFromCart } from "../redux/slices/cartSlice.js";
import "../style.css";

export const BuyPage = () => {
  const cart = useSelector((state) => state.cart.data);
  const dispatch = useDispatch();
  const { total } = useTotalPrice();
  const [products, setProducts] = useState([]);
  const [totalCart, setTotalCart] = useState();
  const [delivery, setDelivery] = useState(0);
  const [selectDelivery, setSelectDelivery] = useState();
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const username = useLogin();

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  const handleDeliveryChange = (e) => {
    const selectOption = e.target.value;
    setSelectDelivery(selectOption);
    // Update Delivery After Summary
    updateDelivery(selectOption);
  };

  const updateDelivery = (DeliveryOption) => {
    let cost = 0;

    switch (DeliveryOption) {
      case "free":
        cost = 0;
        break;
      case "standard":
        cost = 2;
        break;
      case "express":
        cost = 5;
        break;
      case "next":
        cost = 8;
        break;
      case "same":
        cost = 10;
        break;
      default:
        cost = 0;
    }
    setDelivery(cost);
  };

  const handlePromoCodeChange = (e) => {
    setPromoCode(e.target.value);
  };

  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === "paisal") {
      setDiscount(0.5);
    } else {
      setDiscount(0);
    }
  };

  const handleClick = () => {
    window.location.href = "/products";
  };

  const totalCost = total + delivery - total * discount;

  const handleRemoveProduct = (itemId) => {
    console.log("Attempting to remove item with ID:", itemId); // Log
    // Dispatch action to remove item from cart
    dispatch(removeFromCart({ id: itemId }));
  };

  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
      return acc + item.qty;
    }, 0);
    setTotalCart(sum);
  }, [cart]);

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      dispatch({
        type: "UPDATE",
        payload: {
          total: sum,
        },
      });
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="h-4/5 w-4/5 flex justify-center border-2 rounded-lg">
        <div className="w-4/5 flex flex-col items-start">
          <div className="flex justify-between mx-4 flex-col gap-3">
            <h1 className="text-2xl font-bold py-5 text-green-500">
              Shopping Cart
            </h1>
            <h2 className="font-semibold text-xl font-mono border-b-2 mb-2">
              {totalCart} Items
            </h2>
          </div>
          <div className="container h-[63vh] w-full text-center overflow-y-auto">
            {totalCart > 0 ? (
              <table className="w-full border-collapse border-b items-left font-semibold scroll-snap-type: y var(--tw-scroll-snap-strictness) ">
                <thead>
                  <tr className="text-left">
                    <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Product Detail
                    </th>
                    <th className="px-20 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-20 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Quantity
                    </th>
                    <th className="px-20 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Price
                    </th>
                    <th className="px-20 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Item Selection
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {products.length > 0 &&
                    cart.map((item) => {
                      const product = products.find(
                        (product) => product.id === item.id
                      );
                      return (
                        <tr
                          key={item.id}
                          className={`border-y border-slate-300`}>
                          <td className="px-5 py-3">
                            <img
                              src={product.image}
                              alt={product.title}
                              width="50"
                              className="p-1 w-40 h-40 rounded-t-lg object-contain border-2 "
                            />
                          </td>
                          <td className="px-10 py-3">
                            {product.title.substring(0, 15)}...
                          </td>
                          <td className="px-10 py-3">{item.qty}</td>
                          <td className="px-10 py-3">
                            {(product.price * item.qty).toLocaleString(
                              "en-US",
                              {
                                style: "currency",
                                currency: "USD",
                              }
                            )}
                          </td>
                          <td>
                            <button
                              className="bg-blue-700 px-2 py-1 text-slate-200 rounded-md hover:text-slate-200 hover:bg-blue-500 transition-colors ease-in-out"
                              onClick={() => handleRemoveProduct(item.id)}>
                              Remove
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            ) : (
              <div className="h-full flex flex-col items-center justify-center gap-3">
                <FaShoppingCart className="text-4xl" />
                <p className="text-2xl font-bold font-serif">
                  Your shopping cart is empty
                </p>
                <p className="text-lg text-gray-400 font-bold">
                  Come on, add your favorite products here
                </p>
                <Button
                  classname="bg-green-500 text-white"
                  onClick={handleClick}>
                  Start Shopping
                </Button>
              </div>
            )}
          </div>
          <div className="flex justify-between items-center w-full ">
            <Link
              to="/products"
              className="flex items-center py-5 ml-5 text-slate-500 hover:text-slate-700 font-semibold text-lg transition-colors">
              <MdArrowBackIos />
              Continue Shopping
            </Link>
            <p className="text-black text-semibold font-bold pl-14">
              Total Price :{" "}
              {totalCost.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </p>
          </div>
        </div>
        <div className="w-2/5 flex flex-col items-start gap-3">
          <div className="flex justify-between mx-4 flex-col gap-3">
            <p className="text-2xl font-bold text-green-500 py-5">
              Order Summary
            </p>
            <p className="text-xl font-bold font-mono">Transaction</p>
          </div>
          <div className="w-11/12 ml-4 mt-2">
            <label
              htmlFor="shipping"
              className="block my-2 text-base font-bold text-gray-500">
              Delivery Option
            </label>
            <select
              value={selectDelivery}
              onChange={handleDeliveryChange}
              id="shipping"
              className="text-gray-500 focus:text-black outline-none w-full text-base rounded-lg block p-2 bg-slate-100">
              <option value="default" disabled hidden>
                Choose Delivery
              </option>
              <option value="free">Free Delivery - $0</option>
              <option value="standard">Standard Delivery - $2</option>
              <option value="express">Express Delivery - $5</option>
              <option value="next">Next Day - $8</option>
              <option value="same">Same Day - $10</option>
            </select>
          </div>
          <div className="w-11/12 ml-4 mt-2">
            <p className="text-base font-bold text-gray-500">Payment</p>
            <ul className="w-full">
              {/* BCA */}
              <li className="py-2">
                <input
                  type="radio"
                  id="bca"
                  name="paymentMethod"
                  value="bca"
                  className="hidden peer"
                  required
                />
                <label
                  htmlFor="bca"
                  className="flex items-center justify-between w-full py-1 px-2 text-gray-500 bg-slate-100 border border-gray-200 rounded-lg cursor-pointer peer-checked:border-green-500 peer-checked:text-green-500 hover:text-gray-600 hover:bg-slate-100 ">
                  <div className="flex">
                    <Bca></Bca>
                    <h4 className="flex items-center ml-2 text-base font-semibold">
                      BANK CENTRAL ASIA
                    </h4>
                  </div>
                </label>
              </li>
              {/* BNI */}
              <li className="py-2">
                <input
                  type="radio"
                  id="bni"
                  name="paymentMethod"
                  value="bni"
                  className="hidden peer"
                  required
                />
                <label
                  htmlFor="bni"
                  className="flex items-center justify-between w-full py-1 px-2 text-gray-500 bg-slate-100 border border-gray-200 rounded-lg cursor-pointer peer-checked:border-green-500 peer-checked:text-green-500 hover:text-gray-600 hover:bg-slate-100 ">
                  <div className="flex">
                    <BNI></BNI>
                    <h4 className="flex items-center ml-2 text-base font-semibold">
                      BANK NEGARA INDONESIA
                    </h4>
                  </div>
                </label>
              </li>
              <li className="py-2">
                <input
                  type="radio"
                  id="bri"
                  name="paymentMethod"
                  value="bri"
                  className="hidden peer"
                  required
                />
                <label
                  htmlFor="bri"
                  className="flex items-center justify-between w-full py-1 px-2 text-gray-500 bg-slate-100 border border-gray-200 rounded-lg cursor-pointer peer-checked:border-green-500 peer-checked:text-green-500 hover:text-gray-600 hover:bg-slate-100 ">
                  <div className="flex">
                    <BRI></BRI>
                    <h4 className="flex items-center ml-2 text-base font-semibold">
                      BANK RAKYAT INDONESIA
                    </h4>
                  </div>
                </label>
              </li>
              <li className="py-2">
                <input
                  type="radio"
                  id="mandiri"
                  name="paymentMethod"
                  value="mandiri"
                  className="hidden peer"
                  required
                />
                <label
                  htmlFor="mandiri"
                  className="flex items-center justify-between w-full py-1 px-2 text-gray-500 bg-slate-100 border border-gray-200 rounded-lg cursor-pointer peer-checked:border-green-500 peer-checked:text-green-500 hover:text-gray-600 hover:bg-slate-100 ">
                  <div className="flex">
                    <Mandiri></Mandiri>
                    <h4 className="flex items-center ml-2 text-base font-semibold">
                      BANK MANDIRI
                    </h4>
                  </div>
                </label>
              </li>
            </ul>
          </div>
          <div className="w-11/12 mx-2 flex flex-col gap-3 items-center">
            <div className="flex justify-between w-full mx-2 text-sm">
              <p className="text-xl font-bold mx-2">Total Cost</p>
              <p className="text-xl font-bold ">
                {totalCost.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </p>
            </div>
            <Button classname="text-xs text-white p-2 rounded-sm w-full ml-4 bg-green-500">
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
