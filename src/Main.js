import hero from "./images/lorenzo apple touch.jpeg";
import arcs from "./images/jelly-two-red-lines-1.png";
import three from "./images/jelly-three-red-lines-2.png";
//import movieImg from "./images/red-lorenzo-bg.jpg";
import moviedata from "./movieData.json";
import { useState } from "react";
import Moviecard from "./Moviecard";

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
        <div className="w-full min-h-screen bg-[#020d18]/95 p-[50px] flex justify-between items-center">
          <div className="w-1/2">
            <h1 className="text-[1.5rem] text-red-600 font-[700]">
              LORENZO TV
            </h1>

            <p className="text-[3.5rem] font-[700]">
              Unlimited <span className="text-red-600">Movies</span>,<br />
              TV Series, Animes, & lots more.
            </p>
          </div>
          <div className="w-[40%] relative">
            {/**vector art */}
            <img
              alt="art"
              src={arcs}
              className="w-[200px] h-[200px] absolute top-[-30px] left-[-30px]"
            />
            {/**vector art */}
            <img alt="hero" src={hero} className="w-full h-auto rounded-full" />
          </div>
        </div>
      </section>

      <section className="w-full px-[50px] py-[80px]">
        <div className="w-full flex justify-between">
          <div className="w-[fit-content] relative">
            <h2 className="text-[2.2rem] font-[700]">Trending Movies</h2>
            <img
              alt="three-red"
              src={three}
              className="w-[40px] h-[40px] absolute top-[-20px] right-[-30px]"
            />
          </div>
          <div className="text-right">
            <h3 className="text-[1.5rem] font-[600]">Categories</h3>
            <div className="mt-[40px] flex gap-[30px]">
              <button className="px-[20px] py-[5px] rounded-md border-red-700 border-[2px] hover:bg-[#b91c1c] hover:translate-y-[6px] transition-all duration-300">
                Movie
              </button>
              <button className="px-[20px] py-[5px] rounded-md border-red-700 border-[2px] hover:bg-[#b91c1c] hover:translate-y-[6px] transition-all duration-300">
                TV Series
              </button>
              <button className="px-[20px] py-[5px] rounded-md border-red-700 border-[2px] hover:bg-[#b91c1c] hover:translate-y-[6px] transition-all duration-300">
                Anime
              </button>
              <button className="px-[20px] py-[5px] rounded-md border-red-700 border-[2px] hover:bg-[#b91c1c] hover:translate-y-[6px] transition-all duration-300">
                Cartoon
              </button>
            </div>
          </div>
        </div>
        <div className="w-full bg-black/30 mt-[50px] p-[30px] rounded-xl flex gap-[30px] mb-[30px]">
          {five?.map((item, index) => {
            return <Moviecard key={index} item={item} />;
          })}
        </div>
        <button className="px-[20px] py-[10px] rounded-md bg-[#b91c1c] hover:translate-y-[6px] transition-all duration-300">
          More movies
        </button>
      </section>

      <section className="w-full bg-black/30 px-[50px] py-[80px] text-[2rem]">
        <div className="w-full flex items-center justify-between">
          <div className="w-[40%] h-[250px] text-center flex place-items-center border-[3px] border-[#b91c1c]">
            vector image here
          </div>
          <div className="w-1/2 text-right text-[1.4rem]">
            <div className="w-full text-right">
              <h2 className=" text-[2.2rem] font-[700] mb-5">
                Download Movies.
                <br /> Watch Offline.
              </h2>
            </div>
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
      <section className="w-full h-[250px] bg-[#020d18] bg-home text-[2rem]">
        <div className="overlay w-full h-full bg-[#020d18]/80 px-[50px] py-[80px] flex items-center justify-between text-[1rem]">
          <div>
            <h2 className="text-[2rem] font-bold">Get in Touch</h2>
            <p>Lorem ipsum dolor sit amet, consecetur adipiscing</p>
          </div>
          <input className="w-[550px] h-[60px]" />
          <button className="px-[40px] py-[15px] h-[60px] mt-4 rounded-md bg-[#b91c1c] hover:translate-y-[6px] transition-all duration-300">
            Explore Movies
          </button>
        </div>
      </section>
    </main>
  );
};

export default Main;
