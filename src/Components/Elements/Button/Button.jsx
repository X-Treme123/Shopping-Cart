const Button = (props) => {
  const { children, classname = "bg-green-500", onClick, type = "button" } = props;
  return (
    <button
      className={`h-10 w-auto px-8 font-bold ${classname} rounded-lg hover:bg-green-400 hover:shadow-lg transition duration-100 ease-in-out`}
      type={type}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
