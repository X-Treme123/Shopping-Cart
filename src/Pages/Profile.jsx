import Navbar from "../Components/Layouts/NavbarLayouts";
import useLogin from "../hooks/useLogin";
import Naruto from "/images/profile3.png";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { DarkMode } from "../context/DarkMode";

const ProfilePage = () => {
  const username = useLogin();
  const { isDarkMode } = useContext(DarkMode);

  //   useEffect(() => {
  //     const sum = cart.reduce((acc, item) => {
  //       return acc + item.qty;
  //     }, 0);
  //     setTotalCart(sum);
  //   }, [cart]);

  return (
    <div>
      <Navbar type="Profile" />
      <div className="p-5 lg:h-[91.8vh] w-auto text-white flex justify-center items-center bg-white">
        <div className="w-[95%] lg:w-2/4 lg:p-6 flex flex-col item rounded-xl bg-white text-black border-slate-100 lg:border-4">
          <p className="text-2xl font-bold">Your Account</p>
          <div className="my-3 text-xl">
            <p className="text-gray-400 font-semibold py-5">Profile Picture</p>
            <img
              src={Naruto}
              alt="Profile"
              width={150}
              className="rounded-full"
            />
          </div>
          <div className="my-3 w-auto">
            <p className="font-bold text-2xl">Name</p>
            <p className="text-xl text-gray-400 font-semibold py-3 border-b-2">
              {username}
            </p>
          </div>
          <div className="my-3 w-auto">
            <p className="text-2xl font-bold">Email Address</p>
            <p className="text-xl text-gray-400 font-semibold py-3 border-b-2">
              example@gmail.com
            </p>
          </div>
          <div className="my-3 w-auto">
            <p className="text-2xl font-bold">Address</p>
            <p className="text-xl text-gray-400 font-semibold py-3 border-b-2">
              Jakarta, Indonesia
            </p>
          </div>
          <div className="my-3 w-auto">
            <p className="text-2xl font-bold">Phone Number</p>
            <p className="text-xl text-gray-400 font-semibold py-3 border-b-2">
              +62 123456789
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
