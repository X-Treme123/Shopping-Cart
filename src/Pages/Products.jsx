import { Fragment, useContext, useEffect, useState } from "react";
import CardProduct from "../Components/Fragments/CardProduct";
import { getProducts } from "../Services/products.service";
import Navbar from "../Components/Layouts/NavbarLayouts";
import { DarkMode } from "../context/DarkMode";
import Banner from "../Components/Fragments/Banner";

const ProductsPages = () => {
  const { isDarkMode } = useContext(DarkMode);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <Fragment>
      <Navbar type="Products" />
      <div className={`${isDarkMode && "bg-black text-white"}`}>
        <Banner />
        {/* <div className="flex justify-around">
          <p className="text-3xl font-bold py-3">Product Trend<span className="text-red-600">Mart</span></p>
        </div> */}
        <div className={`flex justify-center`}>
          <div className="flex flex-wrap">
            <div className="w-full h-auto flex flex-wrap justify-center">
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
