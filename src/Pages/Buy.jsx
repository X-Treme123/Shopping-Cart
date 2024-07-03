import { useSelector } from "react-redux";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdArrowBackIos } from "react-icons/md";
import {
  useTotalDispathPrice,
  useTotalPrice,
} from "../context/TotalPriceContext";
import { DarkMode } from "../context/DarkMode";
import { getProducts } from "../Services/products.service";
import useLogin from "../hooks/useLogin";

export const BuyPage = () => {
  const cart = useSelector((state) => state.cart.data);
  const dispatch = useTotalDispathPrice();
  const { total } = useTotalPrice();
  const [products, setProducts] = useState([]);
  const [totalCart, setTotalCart] = useState();
  const username = useLogin()

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  const handleRemoveProduct = (item) => {
    const updatedProducts = products.filter((_, i) => i !== item);

    // Menyimpan data yang sudah diupdate ke local storage
    localStorage.removeItem("cart", JSON.stringify(updatedProducts));

    // Mengupdate state dengan data yang baru
    setProducts(updatedProducts);
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
      <div className="h-4/5 w-4/5 flex justify-center">
        <div className="w-4/5 flex flex-col items-start gap-5 shadow-2xl shadow-gray-400 border-r-2 border-slate-400 bg-white">
          <div className="flex justify-between mx-4 border-b border-gray-400 flex-col gap-3">
            <h1 className="text-xl font-bold py-5 text-blue-700">
              Shopping Cart
            </h1>
            <h2 className="font-semibold">{totalCart} Items</h2>
          </div>
          <div className="h-[63vh] text-center overflow-y-auto">
            <table className="w-full border-collapse items-left font-semibold">
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
                        className={item % 2 === 0 ? "bg-gray-50" : ""}>
                        <td className="px-5 py-3">
                          <img
                            src={product.image}
                            alt={product.title}
                            width="50"
                            className="p-1 w-40 h-40 rounded-t-lg object-cover"
                          />
                        </td>
                        <td className="px-10 py-3">
                          {product.title.substring(0, 15)}...
                        </td>
                        <td className="px-10 py-3">{item.qty}</td>
                        <td className="px-10 py-3">
                          {(product.price * item.qty).toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                          })}
                        </td>
                        <td>
                          <button
                            className="bg-blue-700 px-2 py-1 text-slate-200 rounded-md hover:text-slate-200 hover:bg-blue-500 transition-colors ease-in-out"
                            onClick={() => handleRemoveProduct(item)}>
                            Remove
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
          <div className="flex justify-between items-center border-t-2 border-gray-400 w-full ">
            <Link
              to="/products"
              className="flex items-center py-5 ml-5 text-slate-500 hover:text-slate-700 font-semibold text-lg transition-colors">
              <MdArrowBackIos />
              Continue Shopping
            </Link>
            <p className="text-black text-semibold font-bold pl-14">
              Total Price :{" "}
              {total.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </p>
            ""
          </div>
        </div>
        <div className="w-2/5 flex flex-col items-start gap-5 shadow-2xl shadow-gray-400 bg-white">
          <div className="flex justify-between mx-4 border-b border-gray-400 flex-col gap-3">
            <p className="text-xl font-bold text-blue-700 py-5">Status Order</p>
            <p className="">Total Items</p>
          </div>
        </div>
      </div>
    </div>
  );
};
