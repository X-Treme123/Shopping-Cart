import { Link } from "react-router-dom";
import { About } from "../Elements/About";

export const Footer = () => {
  return (
    <div>
      <div className="flex flex-col bg-slate-800 text-white min-h-[50vh] px-7 mt-10">
        <div className="flex flex-wrap justify-between items-center p-8">
          <div className="flex items-center">
            <img
              src="/public/images/logo.png"
              className="w-15 h-15 border-2 rounded-full"
              alt="Logo TrendMart"
              width={100}
            />
            <p className="mx-4 font-bold text-2xl italic font-serif">TrendMart</p>
          </div>
          <div className="flex space-x-5">
            <About to="https://www.linkedin.com/in/faizal-putra-ramadhan-623372268/">
              <img
                src="/public/images/linkedin.png"
                className="w-10 h-10 cursor-pointer rounded-xl border-2"
                alt="LinkedIn"
              />
            </About>
            <About to="https://www.instagram.com/xfzlptr_/">
              <img
                src="/public/images/instagram.jpeg"
                className="w-10 h-10 cursor-pointer rounded-xl border-2"
                alt="Instagram"
              />
            </About>
            <About to="https://x.com/?lang=en">
              <img
                src="/public/images/x.png"
                className="w-10 h-10 cursor-pointer rounded-xl border-2"
                alt="X Application"
              />
            </About>
            <About to="https://www.tiktok.com/@xfzlptr_?lang=en">
              <img
                src="/public/images/tiktok.png"
                className="w-10 h-10 cursor-pointer rounded-xl border-2"
                alt="Tiktok"
              />
            </About>
            <About to="https://github.com/X-Treme123?tab=repositories">
              <img
                src="/public/images/github.png"
                className="w-10 h-10 cursor-pointer rounded-xl border-2"
                alt="Github"
              />
            </About>
          </div>
        </div>
        <div className="m-8">
          <div className="flex flex-wrap justify-between font-bold font-mono text-2xl">
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
          <div className="flex flex-wrap justify-between items-center my-5">
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
            <div className="flex flex-col space-y-3 text-gray-400 font-semibold ml-3">
              <Link to="#">
                <p>Overview</p>
              </Link>
              <Link to="#">
                <p>Premium Plans</p>
              </Link>
              <Link to="#">
                <p>Affiliate Program</p>
              </Link>
              <Link to="#">
                <p>Promotions</p>
              </Link>
            </div>
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
            <div className="flex flex-col items-end space-y-3 text-gray-400 font-semibold">
              <Link to="#">
                <p>LinkedIn</p>
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
