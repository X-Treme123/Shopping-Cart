import { useDispatch, useSelector } from "react-redux";
import { Fragment, useEffect, useState } from "react";
import CardProduct from "../Components/Fragments/CardProduct";
import { getProducts } from "../Services/products.service";
import Navbar from "../Components/Layouts/NavbarLayouts";
import Banner from "../Components/Fragments/Banner";
import { useTotalDispathPrice } from "../context/TotalPriceContext";
import { Footer } from "../Components/Layouts/Footer";
import "../style.css";
import { addToCart } from "../redux/slices/cartSlice"; // Import addToCart action

const ProductsPages = () => {
  const cart = useSelector((state) => state.cart.data);
  const dispatch = useDispatch();
  const totalDispatch = useTotalDispathPrice();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      totalDispatch({
        type: "UPDATE",
        payload: {
          total: sum,
        },
      });
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product)); // Dispatch addToCart action
  };

  return (
    <Fragment>
      {/* Navbar */}
      <Navbar type="Products" />
      <div className="container overflow-y-auto">
        {/* Banner */}
        <Banner />
        <div className="flex justify-center items-center flex-col">
          <div className="flex flex-wrap \">
            <div className="w-full h-auto flex flex-wrap justify-start items-center mx-16">
              {/* products */}
              {products.length > 0 &&
                products.map((product) => (
                  <CardProduct key={product.id}>
                    <CardProduct.Header image={product.image} id={product.id} />
                    <CardProduct.Body name={product.title}>
                      {product.description}
                    </CardProduct.Body>
                    <CardProduct.Footer
                      price={product.price}
                      id={product.id}
                      onAddToCart={() => handleAddToCart(product)} // Add this line
                    />
                  </CardProduct>
                ))}
            </div>
          </div>
        </div>
        {/* Footer */}
        <Footer />
      </div>
    </Fragment>
  );
};

export default ProductsPages;
