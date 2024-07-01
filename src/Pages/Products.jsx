import { Fragment, useContext, useEffect, useState } from "react";
import CardProduct from "../Components/Fragments/CardProduct";
import { getProducts } from "../Services/products.service";
import Navbar from "../Components/Layouts/NavbarLayouts";
import { DarkMode } from "../context/DarkMode";

const ProductsPages = () => {
  const { isDarkMode } = useContext(DarkMode);
  const [products, setProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  const images = ["/images/banner3.jpg", "/images/banner2.jpg"];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // 3 detik

    return () => clearInterval(intervalId); // Bersihkan interval saat komponen di-unmount
  }, [images]);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <Fragment>
      <Navbar type="Products" />
      <div className={`${
            isDarkMode && "bg-black text-white"
          }`}>
        <div
          className={`flex justify-evenly items-center px-10`}>
          <div className="relative w-[65%] h-full flex overflow-hidden flex-col shadow-xl">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(${currentIndex * -100}%)` }}>
              {images.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`image${index + 1}`}
                  className="object-cover w-full h-full cursor-pointer"
                />
              ))}
            </div>
            <div className="absolute bottom-4 right-1/2 transform -translate-x-1/2 flex space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleClick(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === currentIndex ? "bg-blue-500" : "bg-gray-300"
                  }`}></button>
              ))}
            </div>
          </div>
          <div className="w-[29%] h-full flex flex-col justify-center items-center shadow-sm">
            <img src="/images/banner.png" alt="banner" />
            <img src="/images/banner.png" alt="banner" />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center ">
          <p className="text-3xl font-bold text-blue-500 p-3">Products</p>
          <p className="text-xl font-semibold">
            Produk-produk kami dipilih dengan cermat untuk memastikan kualitas
            terbaik bagi Anda.
          </p>
        </div>
        <div className={`flex justify-center py-5`}>
          <div className="flex flex-wrap">
            <div className="w-6/6 flex flex-wrap">
              {products.length > 0 &&
                products.map((product) => (
                  <CardProduct key={product.id}>
                    <CardProduct.Header image={product.image} id={product.id} />
                    <CardProduct.Body name={product.title}>
                      {product.description}
                    </CardProduct.Body>
                    <CardProduct.Footer price={product.price} id={product.id} />
                  </CardProduct>
                ))}
            </div>
            {/* <div className="w-2/6 pl-20">
            <h1 className="font-bold text-blue-700 text-2xl ml-5 mb-2">Cart</h1>
            <TableCart products={products} />
          </div> */}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductsPages;
