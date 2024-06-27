import Button from "../Elements/Button/Button"
import '../Fragments/NavbarLogin.css'
const NavbarLogin =  () => {

    // const email = localStorage.getItem("username")

    const handleLogin = () => {
        window.location.href = '/login'
    }

    const handleAbout = () => {
        window.location.href = "/about"
    }

    return(
        <div className="h-screen">
            <navbar className="bg-blue-700 text-white flex justify-between px-10 h-20 items-center">
                <h1 className="text-2xl font-bold">TrendMart</h1>
                <Button onClick={handleLogin}>Login</Button>
            </navbar>
            <div className="flex justify-center items-center flex-col flex-grow h-3/4 background-image drop-shadow-md">
                <h1 className="font-bold text-3xl text-white sh">Welcome To TrendMart</h1>
                <h1 className="font-bold text-3xl text-blue-400 mt-2 mb-5">Enjoy Shopping Enjoy Your Life</h1>
                <button className="text-2xl bg-black hover:bg-slate-600 shadow-lg transition duration-500 ease-in-out px-7 py-3 text-white rounded-xl" onClick={handleAbout}>About Website</button>
            </div>
        </div>
    )
}

export default NavbarLogin