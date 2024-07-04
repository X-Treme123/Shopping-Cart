import { About } from "../Elements/About";
import { FaInstagram } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";

export const AboutMe = () => {
  return (
    <div>
      {/* Instagram */}
      <About to="https://www.instagram.com/accounts/login/">
        <FaInstagram /> Instagram
      </About>
      {/* facebook */}
      <About to="https://id-id.facebook.com/login/device-based/regular/login/?login_attempt=1">
        <FaSquareFacebook /> Facebook
      </About>
      {/* Twitter */}
      <About to="https://twitter.com/">
        <FaTwitterSquare /> Twitter
      </About>
      {/* WhatsApp */}
      <About to="https://web.whatsapp.com/">
        <FaWhatsapp /> WhatsApp
      </About>
      {/* Telegram */}
      <About to="https://web.telegram.org/a/">
        <FaTelegram /> Telegram
      </About>
    </div>
  );
};
