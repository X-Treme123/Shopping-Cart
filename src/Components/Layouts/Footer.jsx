import { Link } from "react-router-dom";
import { About } from "../Elements/About";

export const Footer = () => {
  return (
    <div>
      <div className="flex flex-col bg-slate-800 text-white h-[45vh] px-7 mt-10">
        <div className="flex justify-between items-center p-8">
          <div className="flex items-center">
            <img
              src="/public/images/logo.png"
              width={60}
              alt="Logo TrendMart"
              className="border-2 rounded-full"
            />
            <p className="mx-2 font-bold text-2xl italic font-serif">TrendMart</p>
          </div>
          <div className="flex space-x-5">
            <About to="https://www.linkedin.com/in/faizal-putra-ramadhan-623372268/">
              <img
                src="/public/images/linkedin.png"
                alt="Linked In"
                width={30}
                className="cursor-pointer rounded-xl border-2"
              />
            </About>
            <About to="https://www.instagram.com/xfzlptr_/">
              <img
                src="/public/images/instagram.jpeg"
                alt="Linked In"
                width={30}
                className="cursor-pointer rounded-xl border-2"
              />
            </About>
            <About to="https://x.com/?lang=en">
              <img
                src="/public/images/x.png"
                alt="Linked In"
                width={30}
                className="cursor-pointer rounded-xl border-2"
              />
            </About>
            <About to="https://www.tiktok.com/@xfzlptr_?lang=en">
              <img
                src="/public/images/tiktok.png"
                alt="Linked In"
                width={30}
                className="cursor-pointer rounded-xl border-2"
              />
            </About>
            <About to="https://github.com/X-Treme123?tab=repositories">
              <img
                src="/public/images/github.png"
                alt="Linked In"
                width={30}
                className="cursor-pointer rounded-xl border-2"
              />
            </About>
          </div>
        </div>
        <div className="mx-8">
          <div className="flex justify-between font-bold font-mono text-2xl">
            <Link to="#">
              <p>Resource</p>
            </Link>
            <Link to="#">
              <p>Pricing</p>
            </Link>
            <Link to="#">
              <p>Company</p>
            </Link>
            <Link to="#">
              <p>Social</p>
            </Link>
          </div>
          <div className="flex justify-between items-center my-5">
            {/* Kiri */}
            <div className="flex flex-col space-y-3 text-gray-400 font-semibold">
              <Link to="#">
                <p>Application</p>
              </Link>
              <Link to="#">
                <p>Documentation</p>
              </Link>
              <Link to="#">
                <p>Systems</p>
              </Link>
              <Link to="#">
                <p>FAQ</p>
              </Link>
            </div>
            {/* Tengah */}
            <div className="flex flex-col space-y-3 text-gray-400 font-semibold">
              <Link to="#">
                <p>Overview</p>
              </Link>
              <Link to="#">
                <p>Premium Plans</p>
              </Link>
              <Link to="#">
                <p>Affilate Program</p>
              </Link>
              <Link to="#">
                <p>Promotions</p>
              </Link>
            </div>
            {/* Tengah */}
            <div className="flex flex-col space-y-3 text-gray-400 font-semibold">
              <Link to="#">
                <p>About Us</p>
              </Link>
              <Link to="#">
                <p>Blog</p>
              </Link>
              <Link to="#">
                <p>Partnerships</p>
              </Link>
              <Link to="#">
                <p>Careers</p>
              </Link>
              <Link to="#">
                <p>Press</p>
              </Link>
            </div>
            {/* Kanan */}
            <div className="flex flex-col items-end space-y-3 text-gray-400 font-semibold">
              <Link to="#">
                <p>Linked In</p>
              </Link>
              <Link to="#">
                <p>Instagram</p>
              </Link>
              <Link to="#">
                <p>X Application</p>
              </Link>
              <Link to="#">
                <p>Tiktok</p>
              </Link>
              <Link to="#">
                <p>Github</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
