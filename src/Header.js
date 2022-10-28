import logo from "./images/logo-lorenzo.jpg";
import search from "./images/icons8-search-50.png";

const Header = () => {
  return (
    <header className="w-full h-[80px] px-[50px] text-slate-100 bg-[#020d18] flex items-center border-slate-700 border-b fixed top-0 left-0 z-[100]">
      {/**logo div */}
      <div className="flex items-center">
        <img alt="logo" src={logo} className="w-[40px] h-[40px] rounded-lg" />
        <p className="font-[700] tracking-wider text-[1.85rem] ml-2">
          LORENZO TV
        </p>
      </div>
      {/**logo div */}

      {/**nav bar */}
      <nav className="font-[600] flex gap-[30px] ml-[100px] mr-auto">
        <a
          href="h"
          className="px-[10px] py-[5px] rounded-md bg-[#b91c1c] hover:bg-[#b91c1c] hover:translate-y-[6px] transition-all duration-300"
        >
          Home
        </a>
        <a
          href="h"
          className="px-[10px] py-[5px] rounded-md hover:bg-[#b91c1c] hover:translate-y-[6px] transition-all duration-300"
        >
          Movies
        </a>
        <a
          href="h"
          className="px-[10px] py-[5px] rounded-md hover:bg-[#b91c1c] hover:translate-y-[6px] transition-all duration-300"
        >
          About Us
        </a>
        <a
          href="http://Lorenzotvblog.netlify.app"
          target="_blank"
          rel="noreferrer"
          className="px-[10px] py-[5px] rounded-md hover:bg-[#b91c1c] hover:translate-y-[6px] transition-all duration-300"
        >
          Blog
        </a>
      </nav>
      {/**nav bar */}

      <div className="bg-black/50 px-[15px] py-[10px] border-red-700 border-[2px] flex gap-[20px] items-center rounded-lg">
        <input
          typeof="text"
          className="w-[200px] bg-black/10 text-[0.75rem] text-slate-100 px-1 outline-none"
          placeholder="Search for movie"
        />
        <img
          alt="search-icon"
          src={search}
          className="w-[20px] h-[20px] cursor-pointer"
        />
      </div>
    </header>
  );
};

export default Header;
