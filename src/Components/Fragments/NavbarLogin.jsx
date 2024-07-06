import Button from "../Elements/Button/Button";
import "../Fragments/NavbarLogin.css";
const NavbarLogin = () => {
  // const email = localStorage.getItem("username")

  const handleLogin = () => {
    window.location.href = "/login";
  };

  return (
    <div className="h-screen">
      <nav className="bg-green-500 backdrop-blur-lg text-white flex justify-between px-10 h-20 items-center">
        <h1 className="text-2xl text-white font-bold">TrendMart</h1>
        <Button onClick={handleLogin}>Login</Button>
      </nav>
      <div className="border border-slate-400 flex justify-center items-start flex-col flex-grow bg-cover bg-center background-image drop-shadow-md min-h-screen">
        <div className="flex flex-col md:w-1/2 p-3 mx-8">
          <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-white">
            Welcome To TrendMart
          </h1>
          <h1 className="font-normal text-sm md:text-base  my-3 text-white">
            Nikmati pengalaman berbelanja produk kecantikan dan kosmetik terbaik
            yang pernah Anda rasakan di sini. Kami dengan bangga menawarkan
            berbagai macam produk berkualitas tinggi dari brand ternama yang
            telah terpercaya oleh banyak pengguna. Dengan berbagai pilihan yang
            tersedia, kami memastikan bahwa setiap produk yang Anda pilih akan
            membuat Anda tampil lebih menawan, percaya diri, dan selalu siap
            menghadapi hari dengan penuh semangat. Kami berkomitmen untuk
            memberikan yang terbaik, sehingga Anda dapat merasakan perawatan
            kecantikan yang luar biasa setiap hari.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default NavbarLogin;
