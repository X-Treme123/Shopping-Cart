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
        <div className="flex flex-col justify-between items-start w-[27%] h-full border-l-2 rounded-lg ">
          <div className="py-5 px-5 text-left">
            <p className="text-lg text-slate-500 font-semibold ">
              Have a Promo Code ?
            </p>
            <form className="py-2 " onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Apply a promo code here"
                className="w-full py-1 px-2 rounded-md border border-slate-400 outline-none hover:border-slate-700 focus:border-slate-700"
                value={promoCode}
                onChange={handlePromoCodeChange}
              />
              <button
                className="bg-blue-700 mt-2 px-2 py-1 text-slate-200 rounded-md hover:text-slate-200 hover:bg-blue-500 transition-colors ease-in-out"
                onClick={applyPromoCode}
              >
                Apply
              </button>
            </form>
          </div>
          <div className="flex flex-col justify-start items-start w-full border-t-2 rounded-t-lg ">
            <h2 className="text-lg font-semibold font-mono py-5 px-5 text-slate-500">
              Shipping Method
            </h2>
            <form className="w-full px-5 text-slate-500 ">
              <label className="py-1 flex justify-between items-center">
                <input
                  type="radio"
                  name="delivery"
                  value="free"
                  onChange={handleDeliveryChange}
                />
                <span>Free Delivery</span>
                <span>Free</span>
              </label>
              <label className="py-1 flex justify-between items-center">
                <input
                  type="radio"
                  name="delivery"
                  value="standard"
                  onChange={handleDeliveryChange}
                />
                <span>Standard Delivery</span>
                <span>2 USD</span>
              </label>
              <label className="py-1 flex justify-between items-center">
                <input
                  type="radio"
                  name="delivery"
                  value="express"
                  onChange={handleDeliveryChange}
                />
                <span>Express Delivery</span>
                <span>5 USD</span>
              </label>
              <label className="py-1 flex justify-between items-center">
                <input
                  type="radio"
                  name="delivery"
                  value="next"
                  onChange={handleDeliveryChange}
                />
                <span>Next Day Delivery</span>
                <span>8 USD</span>
              </label>
              <label className="py-1 flex justify-between items-center">
                <input
                  type="radio"
                  name="delivery"
                  value="same"
                  onChange={handleDeliveryChange}
                />
                <span>Same Day Delivery</span>
                <span>10 USD</span>
              </label>
            </form>
          </div>
          <div className="py-5 px-5 text-left w-full">
            <p className="text-lg font-semibold font-mono text-slate-500 ">
              Payment Method
            </p>
            <div className="flex justify-between items-center py-2 px-2 rounded-md border border-slate-400 ">
              <label className="text-xs flex gap-2 items-center">
                <input type="radio" name="payment" value="bca" />
                <Bca />
                <p>Bank BCA</p>
              </label>
              <label className="text-xs flex gap-2 items-center">
                <input type="radio" name="payment" value="bni" />
                <BNI />
                <p>Bank BNI</p>
              </label>
              <label className="text-xs flex gap-2 items-center">
                <input type="radio" name="payment" value="bri" />
                <BRI />
                <p>Bank BRI</p>
              </label>
              <label className="text-xs flex gap-2 items-center">
                <input type="radio" name="payment" value="mandiri" />
                <Mandiri />
                <p>Bank Mandiri</p>
              </label>
            </div>
            <Button classname="bg-green-500 text-white w-full mt-5">
              Pay
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
