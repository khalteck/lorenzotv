import logo from "./images/logo-lorenzo.jpg";
import twitter from "./images/icons8-twitter-squared-48.png";
import whatsapp from "./images/icons8-whatsapp-48.png";
import facebook from "./images/icons8-facebook-48.png";
import instagram from "./images/icons8-instagram-48.png";
import youtube from "./images/icons8-youtube-logo-48.png";

const Footer = () => {
  return (
    <footer className="w-full bg-black/30 pt-[80px] text-[1rem] text-slate-300">
      <div className="w-full mb-[60px] px-[80px] flex gap-8 justify-between">
        <ul className="w-[fit-content]">
          <li className="mb-4">
            <div className="flex items-center">
              <img
                alt="logo"
                src={logo}
                className="w-[20px] h-[20px] rounded-lg"
              />
              <p className="font-[700] tracking-wider text-[1.2rem] ml-2">
                LORENZO TV
              </p>
            </div>
          </li>
          <li className="w-[fit-content] mb-2 cursor-pointer hover:text-red-500">
            About Us
          </li>
          <li className="w-[fit-content] mb-2 cursor-pointer hover:text-red-500">
            Contact
          </li>
          <li className="w-[fit-content] mb-2 cursor-pointer hover:text-red-500">
            Blog
          </li>
        </ul>

        <ul>
          <li className="font-[700] tracking-wider text-[1.2rem] mb-4">
            Terms of use
          </li>
          <li className="w-[fit-content] mb-2 cursor-pointer hover:text-red-500">
            Privacy policy
          </li>
        </ul>

        <div className="text-center">
          <h3 className="font-[700] tracking-wider text-[1.2rem] mb-4">
            Follow us
          </h3>
          <div className="flex gap-3">
            <img
              alt=""
              src={twitter}
              className="w-[30px] h-[30px] cursor-pointer hover:translate-y-[6px] transition-all duration-300"
            />
            <img
              alt=""
              src={whatsapp}
              className="w-[30px] h-[30px] cursor-pointer hover:translate-y-[6px] transition-all duration-300"
            />
            <img
              alt=""
              src={instagram}
              className="w-[30px] h-[30px] cursor-pointer hover:translate-y-[6px] transition-all duration-300"
            />
            <img
              alt=""
              src={facebook}
              className="w-[30px] h-[30px] cursor-pointer hover:translate-y-[6px] transition-all duration-300"
            />
            <img
              alt=""
              src={youtube}
              className="w-[30px] h-[30px] cursor-pointer hover:translate-y-[6px] transition-all duration-300"
            />
          </div>
        </div>

        <div className="w-[500px]">
          <h3 className="font-[700] tracking-wider text-[1.2rem] mb-4">
            Newsletter
          </h3>
          <p>
            Subscribe to our newsletter system now to get the latest news from
            us
          </p>
          <form>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-[300px] h-[60px] px-5 text-[0.85rem] mr-5 bg-inherit border border-red-600 rounded-lg outline-none"
              required
            />
            <button className="h-[60px] px-[40px] py-[15px] mt-4 rounded-md bg-[#b91c1c] hover:translate-y-[6px] transition-all duration-300">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="w-full h-[80px] flex justify-center items-center text-[0.75rem] border-t border-slate-700">
        Copyright © 2022 All Rights Reserved By LORENZOTV
      </div>
    </footer>
  );
};

export default Footer;
