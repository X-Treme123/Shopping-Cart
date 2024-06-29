import { Fragment, useContext, useEffect, useState } from "react";
import CardProduct from "../Components/Fragments/CardProduct";
import { getProducts } from "../Services/products.service";
import TableCart from "../Components/Fragments/TableCart";
import Navbar from "../Components/Layouts/NavbarLayouts";
import { DarkMode } from "../context/DarkMode";

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
      <div className={`flex justify-center py-5 ${isDarkMode && "bg-black"}`}>
        <div className="flex flex-wrap">
          <div className="w-4/6 flex flex-wrap">
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
          <div className="w-2/6 pl-20">
            <h1 className="font-bold text-blue-700 text-2xl ml-5 mb-2">Cart</h1>
            <TableCart products={products} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductsPages;
