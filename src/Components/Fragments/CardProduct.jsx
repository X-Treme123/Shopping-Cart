import { Link } from "react-router-dom";
import Button from "../Elements/Button/Button";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";
import Modal from "react-modal";
import { useState } from "react";

Modal.setAppElement('#root');

const CardProduct = (props) => {
  const { children } = props;
  return (
    <div className="container flex flex-col min-w-auto min-h-auto justify-center rounded-xl m-10 max-w-xs border-gray-200 shadow-xl hover:shadow-2xl border-2 hover:border-gray-300 transition duration-300 ease-in-outbg-white">
      {children}
    </div>
  );
};

const Header = (props) => {
  const { image, id } = props;
  return (
    <Link to={`/products/${id}`}>
      <img
        src={image}
        alt="products"
        className="p-5 rounded-t-lg w-full h-60 object-contain"
      />
    </Link>
  );
};

const Body = (props) => {
  const { children, name } = props;
  return (
    <div className="px-5 pb-5 h-full">
      <a href="#">
        <h5 className={`text-xl font-bold tracking-tight mb-2`}>
          {name.substring(0, 15)}...
        </h5>
        <p className="text-m">{children.substring(0, 80)}...</p>
      </a>
    </div>
  );
};

const Footer = (props) => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const { price, id } = props;
  const handleAddToCart = () => {
    dispatch(addToCart({ id, qty: 1 }));
    setShowModal(true);
  };

  return (
    <div className="flex items-center justify-around pb-5">
      <span className="font-bold text-xl">
        ${" "}
        {price.toLocaleString("en-US", { styles: "currency", currency: "USD" })}
      </span>
      <Button classname="bg-green-500 text-white" onClick={handleAddToCart}>
        Add To Cart
      </Button>
      <Modal
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        contentLabel="Success Pop-up"
        className="modal"
        overlayClassName="modal-overlay border-4 border-slate-500 shadow-3xl">
        <div className="flex flex-col items-center">
          <img src="/public/images/verified.gif" 
          alt="image pop-up" 
          className="w-40 h-auto"/>
          <h2 className="text-2xl font-bold mb-3">Item Added to Cart</h2>
          <p>The item has been added to your cart.</p>
          <button
            className="mt-5 bg-blue-600 text-white font-bold px-20 py-2 rounded hover:bg-blue-500 transition duration-100 ease-in-out"
            onClick={() => setShowModal(false)}>
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
