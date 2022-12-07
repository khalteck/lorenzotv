import moviedata from "../data/movieData.json";
import { useState } from "react";
import Moviecard from "../components/Moviecard";
import ScrollToTop from "../ScrollToTop";
//import Search from "../components/Search";
import MovieSearch from "../components/MovieSearch";

const Movies = () => {
  const [movies] = useState(moviedata);
  let moviesCopy = [...movies];
  //to shuffle the movie array
  const randomMovies = moviesCopy.sort(() => 0.5 - Math.random());

  return (
    <div className="bg-[#020d18] text-slate-100 pt-8 px-4 md:px-[50px]">
      <h1 className="w-[fit-content] sm:w-full text-[1.75rem] md:text-[2.2rem] font-[700] mx-auto">
        Movies
      </h1>
      <div className="w-full md:w-[60%] mt-4">
        <MovieSearch moviedata={moviedata} />
        {/* <input
          type="text"
          className="w-[80%] bg-black/10 text-[0.75rem] text-slate-100 px-1 outline-none"
          placeholder="Search for movie"
        />
        <button className="py-1 px-4 md:px-8 bg-red-700 rounded-md text-[0.85rem] absolute right-3">
          Search
        </button> */}
      </div>
      <section className="w-full py-[50px] grid justify-center place-items-center grid-lg gap-6 lg:gap-8">
        {randomMovies?.map((item, index) => {
          return <Moviecard key={index} item={item} />;
        })}
      </section>
      <ScrollToTop />
    </div>
  );
};

export default Movies;
