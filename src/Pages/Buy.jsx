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
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  setCartFromLocalStorage,
} from "../redux/slices/cartSlice.js";
import "../style.css";

export const BuyPage = () => {
  const cart = useSelector((state) => state.cart.data);
  const dispatch = useDispatch();
  const { total } = useTotalPrice();
  const dispatchTotalPrice = useTotalDispathPrice();
  const [products, setProducts] = useState([]);
  const [totalCart, setTotalCart] = useState(0);
  const [delivery, setDelivery] = useState(0);
  const [selectDelivery, setSelectDelivery] = useState();
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const username = useLogin();

  useEffect(() => {
    const localCart = JSON.parse(localStorage.getItem("cart"));
    if (localCart) {
      dispatch(setCartFromLocalStorage(localCart));
    }
  }, [dispatch]);

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  const handleDeliveryChange = (e) => {
    const selectOption = e.target.value;
    setSelectDelivery(selectOption);
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
    if (promoCode.toLowerCase() === "faisal") {
      setDiscount(0.5);
    } else {
      setDiscount(0);
    }
  };

  const handleClick = () => {
    window.location.href = "/products";
  };

  const handleRemoveProduct = (itemId) => {
    dispatch(removeFromCart({ id: itemId }));
  };

  const handleIncrementQty = (itemId) => {
    dispatch(incrementQuantity({ id: itemId }));
  };

  const handleDecrementQty = (itemId) => {
    dispatch(decrementQuantity({ id: itemId }));
  };

  useEffect(() => {
    const sum = cart.reduce((acc, item) => acc + item.qty, 0);
    setTotalCart(sum);
  }, [cart]);

  useEffect(() => {
    if (products.length > 0) {
      if (cart.length > 0) {
        const sum = cart.reduce((acc, item) => {
          const product = products.find((product) => product.id === item.id);
          return acc + product.price * item.qty;
        }, 0);
        dispatchTotalPrice({ type: "UPDATE", payload: { total: sum } });
      } else {
        dispatchTotalPrice({ type: "UPDATE", payload: { total: 0 } });
      }
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products, dispatchTotalPrice]);

  const totalCost = total + delivery - total * discount;

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="h-auto w-11/12 flex justify-center border-2 rounded-lg">
        <div className="w-3/4 flex flex-col items-start">
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
              <table className="w-full border-collapse border-b items-left font-semibold scroll-snap-type: y var(--tw-scroll-snap-strictness)">
                <thead>
                  <tr className="text-left">
                    <th className="pl-10 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Product Detail
                    </th>
                    <th className="pl-28 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
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
                        <tr key={item.id} className="border-y border-slate-300">
                          <td className="px-5 py-3">
                            <img
                              src={product.image}
                              alt={product.title}
                              width="50"
                              className="p-1 w-40 h-40 rounded-t-lg object-contain border-2"
                            />
                          </td>
                          <td className="px-10 py-3">
                            {product.title.substring(0, 25)}...
                          </td>
                          <td className="px-5 py-3 flex items-center justify-center mt-16 space-x-3">
                            <button
                              className="bg-green-500 px-3 pb-1 rounded-lg text-white text-2xl hover:bg-green-400 transition ease-in-out"
                              onClick={() => handleIncrementQty(item.id)}>
                              +
                            </button>
                            <span className="font-semibold text-xl">
                              {item.qty}
                            </span>
                            <button
                              className="bg-green-500 px-3 pb-1 rounded-lg text-white text-2xl hover:bg-green-400 transition ease-in-out"
                              onClick={() => handleDecrementQty(item.id)}>
                              -
                            </button>
                          </td>
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
          <div className="flex justify-between items-center w-full">
            <Link
              to="/products"
              className="flex items-center py-5 ml-5 text-slate-500 hover:text-slate-700 font-semibold text-lg transition-colors">
              <MdArrowBackIos />
              Continue Shopping
            </Link>
          </div>
        </div>
        <div className="w-2/4 flex flex-col items-start gap-3 border-2">
          <div className="flex justify-between mx-4 flex-col gap-3">
            <p className="text-2xl font-bold text-green-500 py-5">
              Order Summary
            </p>
            <p className="mb-2 text-lg font-bold text-gray-900">Transaction</p>
          </div>
          <div className="w-11/12 ml-4 mt-2 flex justify-between">
            <div className="flex flex-col">
              <label htmlFor="shippingMethod" className="text-lg font-medium">
                Select delivery:
              </label>
              <select
                id="shippingMethod"
                name="shippingMethod"
                className="text-lg p-2 mt-2 w-full border-2 rounded-md"
                value={selectDelivery}
                onChange={handleDeliveryChange}>
                <option value="free">Free Shipping - Free</option>
                <option value="standard">Standard Shipping - $2.00</option>
                <option value="express">Express Shipping - $5.00</option>
                <option value="next">Next Day Delivery - $8.00</option>
                <option value="same">Same Day Delivery - $10.00</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="promoCode" className="text-lg font-medium">
                Promo code:
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  id="promoCode"
                  name="promoCode"
                  className="text-lg p-2 mt-2 w-full border-2 rounded-md"
                  value={promoCode}
                  onChange={handlePromoCodeChange}
                  placeholder="Enter promo code"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      applyPromoCode();
                    }
                  }}
                />
                <button
                  onClick={applyPromoCode}
                  className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-md hover:bg-blue-400 transition-colors">
                  Apply
                </button>
              </div>
            </div>
          </div>
          <div className="w-11/12 ml-4 mt-2">
            <h3 className="mb-2 text-lg font-bold text-gray-900">Payment</h3>
            <div className="w-full">
              <div className="flex justify-between gap-5 pb-5">
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
                  className="inline-flex items-center justify-between w-full py-1 px-2 text-gray-500 bg-slate-200 border border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-slate-300 ">
                  <div className="flex">
                    <Bca></Bca>
                    <h4 className="flex items-center ml-2 text-xs">
                      BANK CENTRAL ASIA
                    </h4>
                  </div>
                </label>
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
                  className="inline-flex items-center justify-between w-full py-1 px-2 text-gray-500 bg-slate-200 border border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-slate-300 ">
                  <div className="flex">
                    <Mandiri></Mandiri>
                    <h4 className="flex items-center ml-2 text-xs">
                      BANK MANDIRI
                    </h4>
                  </div>
                </label>
              </div>
              <div className="flex justify-between gap-5">
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
                  className="inline-flex items-center justify-between w-full py-1 px-2 text-gray-500 bg-slate-200 border border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-slate-300 ">
                  <div className="flex">
                    <BRI></BRI>
                    <h4 className="flex items-center ml-2 text-xs">
                      BANK RAKYAT INDONESIA
                    </h4>
                  </div>
                </label>
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
                  className="inline-flex items-center justify-between w-full py-1 px-2 text-gray-500 bg-slate-200 border border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-slate-300 ">
                  <div className="flex">
                    <BNI></BNI>
                    <h4 className="flex items-center ml-2 text-xs">
                      BANK NEGARA INDONESIA
                    </h4>
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div className="w-11/12 ml-5 mt-2 flex justify-between">
            <p className="text-lg font-bold">Total price</p>
            <p className="text-lg font-bold">
              {totalCost.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </p>
          </div>
          <div className="w-11/12 ml-5 mt-2 flex justify-between">
              <Button classname="w-full bg-green-500 text-lg text-white">Confirm Payment</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
