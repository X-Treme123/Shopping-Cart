import { About } from "../Elements/About";
import { FaInstagram } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";

export const AboutMe = () => {
  return (
    <div className="text-base">
      {/* Instagram */}
      <About to="https://www.instagram.com/accounts/login/">
        <p className="flex items-center"><FaInstagram /> <span className="px-2">Instagram</span></p>
      </About>
      <About to="https://www.instagram.com/accounts/login/">
        <p className="flex items-center"><FaSquareFacebook /> <span className="px-2">Facebook</span></p>
      </About>
      <About to="https://www.instagram.com/accounts/login/">
        <p className="flex items-center"><FaTwitterSquare /> <span className="px-2">Twitter</span></p>
      </About>
      <About to="https://www.instagram.com/accounts/login/">
        <p className="flex items-center"><FaWhatsapp /> <span className="px-2">Whatsapp</span></p>
      </About>
      <About to="https://www.instagram.com/accounts/login/">
        <p className="flex items-center"><FaTelegram /> <span className="px-2">Telegram</span></p>
      </About>
    </div>
  );
};
