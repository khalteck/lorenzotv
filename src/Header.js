import logo from "./images/logo-lorenzo.jpg";
import search from "./images/icons8-search-50.png";
import menu from "./images/icons8-menu-squared-50.png";
import close from "./images/icons8-close-window-50.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import up from "./images/icons8-up-24.png";
import down from "./images/icons8-chevron-24.png";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  function handleClick() {
    setOpenMenu((prevState) => !prevState);
    setOpenSearch(false);
  }

  //to close the dropdown after clicking a div
  const hideDropdown = () => {
    setOpenMenu(false);
  };

  //to toggle display serach bar on mobile
  const [openSearch, setOpenSearch] = useState(false);
  function toggleSearch() {
    setOpenSearch((prevState) => !prevState);
  }
  function searchBox() {
    setOpenSearch(true);
  }

  const [movieHover, setMovieHover] = useState(false);
  function handleMovieHover() {
    setMovieHover(true);
  }
  function handleMovieClick() {
    setMovieHover((prevState) => !prevState);
  }
  function handleMouseOut() {
    setMovieHover(false);
  }

  return (
    <header>
      {/**Desktop header */}
      <div className="w-full h-[80px] px-[50px] text-slate-100 bg-[#020d18] hidden lg:flex items-center border-slate-700 border-b fixed top-0 left-0 z-[100]">
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
          <Link
            to="/"
            onMouseOver={handleMouseOut}
            className="px-[10px] py-[5px] rounded-md bg-[#b91c1c] hover:bg-[#b91c1c] hover:translate-y-[6px] transition-all duration-300"
          >
            Home
          </Link>
          <div onMouseOver={handleMovieHover} className={`relative`}>
            <div className="px-[10px] py-[5px] rounded-md hover:bg-[#b91c1c] hover:translate-y-[6px] transition-all duration-300 cursor-pointer relative">
              Movies
            </div>
            {movieHover && (
              <div
                onMouseOut={handleMouseOut}
                className="w-[150px] p-3 bg-[#020d18] text-center absolute top-[40px] left-[-30px] rounded-md"
              >
                <Link to="/movies">
                  <div className="py-2 hover:bg-red-700 border-b border-b-slate-600">
                    Movies
                  </div>
                </Link>
                <Link to="/series">
                  <div className="py-2 hover:bg-red-700 border-b border-b-slate-600">
                    Series
                  </div>
                </Link>
                <Link to="/anime">
                  <div className="py-2 hover:bg-red-700 border-b border-b-slate-600">
                    Animes
                  </div>
                </Link>
                <Link to="/animation">
                  <div className="py-2 hover:bg-red-700 ">Animations</div>
                </Link>
              </div>
            )}
          </div>
          <Link
            to="/about"
            onMouseOver={handleMouseOut}
            className="px-[10px] py-[5px] rounded-md hover:bg-[#b91c1c] hover:translate-y-[6px] transition-all duration-300"
          >
            About Us
          </Link>
          <a
            onMouseOver={handleMouseOut}
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
            type="text"
            className="w-[200px] bg-black/10 text-[0.75rem] text-slate-100 px-1 outline-none"
            placeholder="Search for movie"
          />
          <img
            alt="search-icon"
            src={search}
            className="w-[20px] h-[20px] cursor-pointer"
          />
        </div>
      </div>

      {/*mobile header */}
      <div
        className={` w-full h-[80px] px-[20px] bg-[#020d18] text-slate-100 fixed top-0 left-0 z-[100] lg:hidden flex items-center`}
      >
        <img
          alt="hamburger"
          src={menu}
          onClick={handleClick}
          className="w-7 h-7 cursor-pointer mr-auto"
        />

        {/**logo div */}
        <Link to="/" className="mr-auto">
          <div className="flex items-center">
            <img alt="logo" src={logo} className="w-6 h-6 rounded-lg" />
            <p className="font-[700] tracking-wider text-[1.5rem] ml-2">
              LORENZO TV
            </p>
          </div>
        </Link>
        {/**logo div */}

        <img
          alt="search-icon"
          src={search}
          className="w-7 h-7 cursor-pointer"
          onClick={toggleSearch}
          onMouseOut={toggleSearch}
        />

        {openSearch && (
          <div
            onClick={searchBox}
            onMouseOut={toggleSearch}
            className="w-full absolute top-[80px] left-0"
          >
            <div className="bg-black/50 px-[15px] py-[10px] border-red-700 border-[2px] flex gap-[20px] items-center rounded-lg relative">
              <input
                type="text"
                className="w-[80%] bg-black/10 text-[0.75rem] text-slate-100 px-1 outline-none"
                placeholder="Search for movie"
              />
              <button className="py-1 px-2 bg-red-700 rounded-md text-[0.85rem] absolute right-3">
                Search
              </button>
            </div>
          </div>
        )}
        <div
          className={`w-full ${
            openMenu ? "block" : "hidden"
          } h-[100vh] z-[200] bg-black/60 fixed top-0 left-0`}
        >
          <img
            className="w-7 h-7 cursor-pointer mr-[25px] absolute top-[30px] left-[30px]"
            alt=""
            src={close}
            onClick={handleClick}
          />
          <ul className="slide float-left w-[65%] h-full bg-[#020d18] px-[30px] text-[1.25rem] font-[700] text-slate-100 pt-[100px]">
            <li className="my-4">
              <Link to="/" onClick={hideDropdown}>
                <div className="w-full">Home</div>
              </Link>
            </li>
            <li
              onClick={handleMovieClick}
              onMouseOut={handleMouseOut}
              className={` my-4 relative`}
            >
              <div className="w-full flex items-center gap-3">
                <div className="">Movies</div>
                <img alt="" src={movieHover ? up : down} className="w-4 h-4" />
              </div>
            </li>
            <li lassName="my-4">
              <Link to="/movies" onClick={hideDropdown}>
                <div className="w-full">Movies test</div>
              </Link>
            </li>
            {movieHover && (
              <li className="w-[150px] p-3 text-center">
                <Link to="/movies" onClick={hideDropdown}>
                  <div className="py-2 hover:bg-red-700 border-b border-t border-b-slate-600 border-t-slate-600">
                    Movies
                  </div>
                </Link>
                <Link to="/series" onClick={hideDropdown}>
                  <div className="py-2 hover:bg-red-700 border-b border-b-slate-600">
                    Series
                  </div>
                </Link>
                <Link to="/anime" onClick={hideDropdown}>
                  <div className="py-2 hover:bg-red-700 border-b border-b-slate-600">
                    Animes
                  </div>
                </Link>
                <Link to="/animation" onClick={hideDropdown}>
                  <div className="py-2 hover:bg-red-700 border-b border-b-slate-600">
                    Animations
                  </div>
                </Link>
              </li>
            )}
            <li className="my-4">
              <Link to="/about" onClick={hideDropdown}>
                <div className="w-full">About Us</div>
              </Link>
            </li>
            <li className="my-4">
              <a href="http://Lorenzotvblog.netlify.app" onClick={hideDropdown}>
                <div className="w-full">Blog</div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/*mobile header */}
    </header>
  );
};

export default Header;
