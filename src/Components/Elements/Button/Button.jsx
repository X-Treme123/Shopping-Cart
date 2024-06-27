const Button = (props) => {
  const { children, classname = "bg-black", onClick, type = "button" } = props;
  return (
    <button
      className={`h-10 px-8 font-semibold ${classname} rounded-md text-white hover:bg-sky-900 shadow-lg transition duration-200 ease-in-out`}
      type={type}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
