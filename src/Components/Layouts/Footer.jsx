import { TbClover } from "react-icons/tb";
import { AboutMe } from "../Fragments/AboutMe";

export const Footer = () => {
  return (
    <div>
      <div className="w-full flex text-justify px-16 py-24 text-sm">
        {/* Tentang Kami */}
        <div className="w-1/5 ml-8">
          <p className="font-bold mb-2 text-xl">About Me</p>
          <AboutMe />
        </div>
        <div className="w-4/5 mx-6">
          <p className="font-bold mb-2 text-xl">
            TrendMart - Enjoy Shopping Enjoy Your Life
          </p>
          <p className="text-base">
            TrendMart takes you to the world of online shopping with a local
            touch rich and limitless experience. As an e-commerce platform
            superior in the archipelago region, we invite you to exploring
            cultural riches through a collection of quality products high which
            displays the beauty and diversity of the archipelago's heritage.
          </p>
          <br />
          <p className="font-bold pb-2 text-base">Why Choose TrendMart?</p>
          <ol className="list-decimal text-base">
            <li>
              289 / 5.000 Boundless Cultural Exploration TrendMart is the
              gateway virtual experience of the beauty and richness of
              Indonesian culture. Every product what we offer is a combination
              of tradition and modernity, providing a unique and meaningful
              shopping experience.
            </li>
            <li>
              Shop with Peace of Mind: We understand the importance Trust in
              online shopping TrendMart provides security transactions as a top
              priority, ensuring every purchase You are done with a calm heart.
            </li>
            <li>
              Inspirational Community: Join the Nusantara community Shop and be
              part of our journey in preserving and promote cultural richness.
              By registering your product or explore exciting offers, you
              contribute to inspiring community growth.
            </li>
          </ol>
        </div>
      </div>
      <div className="pb-5 px-10 flex items-center justify-between text-sm font-semibold">
        <p className="flex items-center">
          Made With <TbClover /> | Copyright &copy; 2024 Faizal Putra .
        </p>
        <div className="flex">
          <p className="mx-1">Cookies |</p>
          <p className="mx-1">Security |</p>
          <p className="mx-1">Term of Service |</p>
          <p className="mx-1">Privacy Statement</p>
        </div>
      </div>
    </div>
  );
};
