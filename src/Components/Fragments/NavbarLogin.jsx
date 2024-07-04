import Button from "../Elements/Button/Button";
import "../Fragments/NavbarLogin.css";
const NavbarLogin = () => {
  // const email = localStorage.getItem("username")

  const handleLogin = () => {
    window.location.href = "/login";
  };

  return (
    <div className="h-screen">
      <nav className="bg-green-500 bg-opacity-50 backdrop-blur-lg text-white flex justify-between px-10 h-20 items-center">
        <h1 className="outline-text text-2xl text-white font-bold">TrendMart</h1>
        <Button onClick={handleLogin}>Login</Button>
      </nav>
      <div className="border border-slate-400 flex justify-center items-center flex-col flex-grow bg-cover bg-center background-image drop-shadow-md">
        <div className="flex justify-center items-center flex-col px-8 py-8 radius rounded-lg backdrop-blur-2xl">
          <h1 className="font-bold text-3xl text-green-500">
            Welcome To TrendMart
          </h1>
          <h1 className="font-bold text-3xl text-white mt-2 mb-5">
            Enjoy Shopping Enjoy Your Life
          </h1>
        </div>
      </div>
    </div>
  );
};

export default NavbarLogin;
