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
            <navbar className="bg-green-500 text-white flex justify-between px-10 h-20 items-center">
                <h1 className="text-2xl font-bold">TrendMart</h1>
                <Button onClick={handleLogin}>Login</Button>
            </navbar>
            <div className="border border-slate-400 flex justify-center items-center flex-col flex-grow background-image drop-shadow-md">
                <div className="flex justify-center items-center flex-col px-8 py-8 radius rounded-lg backdrop-blur-sm">
                    <h1 className="font-bold text-3xl text-black sh">Welcome To TrendMart</h1>
                    <h1 className="font-bold text-3xl text-green-500 mt-2 mb-5">Enjoy Shopping Enjoy Your Life</h1>
                </div>
            </div>
        </div>
    )
}

export default NavbarLogin