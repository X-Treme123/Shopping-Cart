import { Link } from "react-router-dom";
import Button from "../Elements/Button/Button";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";

const CardProduct = (props) => {
  const { children } = props;
  return (
    <div className="w-full max-w-xs bg-gray-700 border border-gray-200 rounded-lg shadow mx-2 flex flex-col justify-between my-2">
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
        className="p-8 rounded-t-lg w-full h-60 object-cover"
      />
    </Link>
  );
};

const Body = (props) => {
  const { children, name } = props;
  return (
    <div className="px-5 pb-5 h-full">
      <a href="#">
        <h5 className="text-white text-xl font-bold tracking-tight mb-2">
          {name.substring(0, 15)}...
        </h5>
        <p className="text-m text-white">{children.substring(0, 80)}...</p>
      </a>
    </div>
  );
};

const Footer = (props) => {
  const dispatch = useDispatch();
  const { price, id } = props;
  return (
    <div className="flex items-center justify-around pb-5">
      <span className="text-white font-bold text-xl">
        ${" "}
        {price.toLocaleString("en-US", { styles: "currency", currency: "USD" })}
      </span>
      <Button
        className="bg-blue-600"
        onClick={() => dispatch(addToCart({ id, qty: 1 }))}>
        Add To Cart
      </Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
