import { About } from "../Elements/About";

export const AboutMe = () => {
  return (
    <div className="w-12">
      {/* Instagram */}
      <About to="https://www.instagram.com/accounts/login/">
        <img src="/images/instagram.png" alt="Instagram" className="my-2 border-2 rounded-2xl"/>
        <p>Instagram</p>
      </About>
      <About to="https://www.instagram.com/accounts/login/">
        <img src="/images/x.png" alt="X" className="my-2 rounded-full border-2"/>
        <p>X Aplication</p>
      </About>
      <About to="https://www.instagram.com/accounts/login/">
        <img src="/images/linkedin.png" alt="Linked In" className="py-2"/>
      </About>
      <About to="https://www.instagram.com/accounts/login/">
        <img src="/images/tiktok.png" alt="" className="py-2"/>
      </About>
    </div>
  );
};
