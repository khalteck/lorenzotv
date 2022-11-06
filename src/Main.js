import hero from "./images/lorenzo apple touch.jpeg";
import arcs from "./images/jelly-two-red-lines-1.png";
import three from "./images/jelly-three-red-lines-2.png";
//import movieImg from "./images/red-lorenzo-bg.jpg";
import moviedata from "./movieData.json";
import { useState } from "react";
import Moviecard from "./Moviecard";
import Form from "./Form";
import contact from "./images/matey-man-and-woman-work-in-support-service.png";
import popcorn from "./images/linus-mimietz-uWjBqbCHY7g-unsplash.jpg";

const Main = () => {
  const [movies] = useState(moviedata);
  let moviesCopy = [...movies];

  //to shuffle the movie array
  const random = moviesCopy.sort(() => 0.5 - Math.random());

  //to select first five movies of randomized movie array
  let five = random.slice(0, 5);
  console.log(five);
  return (
    <main className="text-slate-100">
      <section className="w-full min-h-screen bg-[url('./images/lorenzo-bg-image.png')] bg-no-repeat">
        <div className="w-full min-h-screen bg-[#020d18]/95 px-4 py-[100px] md:p-[50px] block md:flex justify-between items-center">
          <div className="w-full md:w-1/2">
            <h1 className="text-[1.5rem] text-red-600 font-[700]">
              LORENZO TV
            </h1>

            <p className="text-[2.3rem] md:text-[3.5rem] font-[700]">
              Unlimited <span className="text-red-600">Movies</span>,<br />
              TV Series, Animes, & lots more.
            </p>
          </div>
          <div className="w-full mt-12 md:mt-0 md:w-[40%] relative">
            {/**vector art */}
            <img
              alt="art"
              src={arcs}
              className="w-[80px] h-[80px] md:w-[200px] md:h-[200px] absolute top-[-10px] left-[-10px] md:top-[-30px] md:left-[-30px]"
            />
            {/**vector art */}
            <img
              alt="hero"
              src={hero}
              className="w-[70%] md:w-full h-auto rounded-full"
            />
          </div>
        </div>
      </section>

      <section className="w-full px-4 md:px-[50px] pt-[80px] pb-[100px] md:pb-[250px] relative">
        <div className="w-full block md:flex justify-between">
          <div className="w-full md:w-[fit-content] relative">
            <h2 className="text-[1.75rem] md:text-[2.2rem] font-[700]">
              Trending Movies
            </h2>
            <img
              alt="three-red"
              src={three}
              className="w-[40px] h-[40px] absolute top-[-20px] right-[70px] md:right-[-30px]"
            />
          </div>
          <div className="text-right mt-8 md:mt-0">
            <h3 className="text-[1.5rem] font-[600]">Categories</h3>
            <div className="w-full md:w-[fit-content] mt-4 md:mt-10 flex justify-end gap-4 md:gap-8 text-[0.75rem] md:text-[1rem]">
              <button className="px-[10px] py-1 h-[fit-content] md:py-2 rounded-md border-red-700 border-[2px] hover:bg-[#b91c1c] hover:translate-y-[6px] transition-all duration-300">
                Movie
              </button>
              <button className="px-[10px] py-1 h-[fit-content] md:py-2 rounded-md border-red-700 border-[2px] hover:bg-[#b91c1c] hover:translate-y-[6px] transition-all duration-300">
                Series
              </button>
              <button className="px-[10px] py-1 h-[fit-content] md:py-2 rounded-md border-red-700 border-[2px] hover:bg-[#b91c1c] hover:translate-y-[6px] transition-all duration-300">
                Anime
              </button>
              <button className="px-[10px] py-1 h-[fit-content] md:py-2 rounded-md border-red-700 border-[2px] hover:bg-[#b91c1c] hover:translate-y-[6px] transition-all duration-300">
                Cartoon
              </button>
            </div>
          </div>
        </div>
        <div className="w-full bg-black/30 mt-10 mb-8 p-5 gap-5 rounded-lg grid grid-flow-col place-items-center scroll-auto overflow-y-auto overscroll-x-contain snap-mandatory snap-x no-scrollbar">
          {five?.map((item, index) => {
            return <Moviecard key={index} item={item} />;
          })}
        </div>
        <button className="px-[40px] py-[15px] mt-4 rounded-md bg-[#b91c1c] hover:translate-y-[6px] transition-all duration-300">
          More movies
        </button>
        <svg
          className="absolute bottom-0 left-0 block z-[-1]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 319"
        >
          <path
            fill="#010911"
            fillOpacity="1"
            d="M0,160L48,181.3C96,203,192,245,288,234.7C384,224,480,160,576,117.3C672,75,768,53,864,85.3C960,117,1056,203,1152,224C1248,245,1344,203,1392,181.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </section>

      <section className="w-full bg-black/30 px-4 md:px-[50px] pb-[80px] text-[2rem]">
        <div className="w-full flex flex-col-reverse md:flex-row items-center justify-between">
          <img
            alt=""
            src={popcorn}
            className="w-[35%] h-[500px] object-cover rounded-full mx-auto hidden md:block"
          />
          <div className="w-full md:w-1/2 text-right text-[1.4rem] mt-8 md:mt-0">
            <div className="w-full text-right">
              <h2 className=" text-[2.2rem] font-[700] mb-5">
                Download Movies.
                <br /> Watch Offline.
              </h2>
            </div>
            <img
              alt=""
              src={popcorn}
              className="w-full my-6 h-[500px] object-cover rounded-full mx-auto md:hidden block"
            />
            <p>
              Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod
              There are many variations of passages of lorem Ipsum available,
              but the majority have suffered alteration.
            </p>
            <p className="text-[4rem] text-[#b91c1c] font-bold">HD 4K</p>
            <button className="px-[40px] py-[15px] mt-4 rounded-md bg-[#b91c1c] hover:translate-y-[6px] transition-all duration-300">
              Explore Movies
            </button>
          </div>
        </div>
      </section>
      <section className="w-full bg-[#020d18] bg-home text-[2rem]">
        <div className="overlay w-full h-full bg-[#020d18]/80 px-4 md:px-[50px] py-[80px] block md:flex justify-between text-[1rem]">
          <div className="w-full md:w-[40%] text-center">
            <h2 className="text-[2.5rem] font-bold">Get in Touch</h2>
            <p className="text-[1.4rem]">
              Contact us and we will get back to you soon
            </p>
            <div className="relative">
              <img
                alt="three-red"
                src={three}
                className="w-8 h-auto md:w-[60px] md:h-[60px] absolute top-[20px] right-[30px]"
              />
              <img alt="" src={contact} className="w-[80%] mx-auto" />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <Form />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
