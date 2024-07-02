import Navbar from "../Components/Layouts/NavbarLayouts";
import useLogin from "../hooks/useLogin"
import Naruto from "/images/profile.png"
import { Link } from "react-router-dom";
import { FaAddressCard } from "react-icons/fa";
import { useTotalPrice } from "../context/TotalPriceContext";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";



const ProfilePage = (props) => {
    const {children} = props
    const username = useLogin();
    const {total} = useTotalPrice()
    const cart = useSelector((state) => state.cart.data)
    const [totalCart, setTotalCart] = useState()

    useEffect(() => {
        const sum = cart.reduce((acc, item) => {
            return acc + item.qty;
        }, 0)
        setTotalCart(sum)
    }, [cart]) 


    return(
        <div>
            <Navbar type="Profile"/>
            <div className="h-80 flex justify-evenly items-center bg-slate-200">
                {children}
                <Link 
                to={""}><img className="rounded-full absolute mx-10 h-80" src={Naruto} alt="Pictures" /></Link>
                <div className="text-black mx-40">
                    <h1 className="font-extrabold text-4xl my-3">{username}</h1>
                    <h1 className="text-3xl font-semibold">Founder of TrendMart</h1>
                </div>
                <div className="text-black font-bold text-2xl flex">
                    <h1>Instagram</h1>
                    <h1>Instagram</h1>
                    <h1>Instagram</h1>
                </div>
            </div>
            <div className="h-80 flex justify-end p-40 items-center text-3xl">
                <div className="flex flex-col items-center p-6 px-20 mx-5 text-white font-bold bg-blue-700 hover:bg-blue-500 cursor-pointer rounded-3xl">
                    <p className="text-6xl my-3"><FaAddressCard /></p>
                    <h1>Price Total</h1>
                    {total.toLocaleString("en-US", {style: "currency", currency: "USD"})}
                </div>
                <div className="flex flex-col items-center p-6  px-20 mx-5 text-white font-bold bg-blue-700 hover:bg-blue-500 cursor-pointer rounded-3xl">
                    <p className="text-6xl my-3"><FaAddressCard /></p>
                    <h1>Item Total</h1>
                    <h1>{totalCart}</h1>
                </div>
                <div className="flex flex-col items-center p-6 px-12 mx-5 text-white font-bold bg-blue-700 hover:bg-blue-500 cursor-pointer rounded-3xl">
                    <p className="text-6xl my-3"><FaAddressCard /></p>
                    <h1>Card Member</h1>
                    <h1>Active</h1>
                </div>
            </div>
            <div className="h-[26.8vh] bg-white"></div>
        </div>
    )
}

export default ProfilePage