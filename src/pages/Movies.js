// import moviedata from "../data/movieData.json";
// import { useEffect, useState } from "react";
import Moviecard from "../components/Moviecard";
import ScrollToTop from "../ScrollToTop";
//import Search from "../components/Search";
import MovieSearch from "../components/MovieSearch";
import Header from "../Header";
import Footer from "../Footer";
import Loader from "../components/Loader";

const Movies = ({
  showSearchList,
  handleCloseSearchList,
  showLoader,
  handleSearchSubmit,
  setShowLoader,
  currentPage,
  moviesFromJson,
  animationsFromJson,
  firstTwenty,
  nextThirty,
  nextForty,
  nextFifty,
  nextSixty,
  display30,
  display40,
  display50,
  display60,
  show30,
  show40,
  show50,
  show60,
}) => {
  return (
    <>
      <Header
        showSearchList={showSearchList}
        handleSearchSubmit={handleSearchSubmit}
        handleCloseSearchList={handleCloseSearchList}
        showLoader={showLoader}
        setShowLoader={setShowLoader}
        currentPage={currentPage}
        moviesFromJson={moviesFromJson}
        animationsFromJson={animationsFromJson}
      />
      <div className="bg-[#020d18] text-slate-100 pt-8 px-4 md:px-[50px]">
        {showLoader && <Loader />}

        <h1 className="w-[fit-content] sm:w-full text-[1.75rem] md:text-[2.2rem] font-[700] mx-auto">
          Movies
        </h1>
        <div className="w-full md:w-[60%] mt-4">
          <MovieSearch
            moviesFromJson={moviesFromJson}
            setShowLoader={setShowLoader}
            showLoader={showLoader}
          />
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
          {firstTwenty?.map((item, index) => {
            return <Moviecard key={index} item={item} />;
          })}
          {display30 &&
            nextThirty?.map((item, index) => {
              return <Moviecard key={index} item={item} />;
            })}
          {display40 &&
            nextForty?.map((item, index) => {
              return <Moviecard key={index} item={item} />;
            })}
          {display50 &&
            nextFifty?.map((item, index) => {
              return <Moviecard key={index} item={item} />;
            })}
          {display60 &&
            nextSixty?.map((item, index) => {
              return <Moviecard key={index} item={item} />;
            })}
        </section>
        <div className="w-full my-12 flex justify-center items-center">
          {!display30 && (
            <button
              onClick={show30}
              className="w-full sm:w-2/5 px-[40px] py-[15px] mt-4 mx-auto rounded-md bg-[#b91c1c] hover:bg-[#b91c1c]/70 hover:translate-y-[6px] transition-all duration-300"
            >
              View more movies
            </button>
          )}
          {display30 && !display40 && (
            <button
              onClick={show40}
              className="w-full sm:w-2/5 px-[40px] py-[15px] mt-4 mx-auto rounded-md bg-[#b91c1c] hover:bg-[#b91c1c]/70 hover:translate-y-[6px] transition-all duration-300"
            >
              View more movies
            </button>
          )}
          {display40 && !display50 && (
            <button
              onClick={show50}
              className="w-full sm:w-2/5 px-[40px] py-[15px] mt-4 mx-auto rounded-md bg-[#b91c1c] hover:bg-[#b91c1c]/70 hover:translate-y-[6px] transition-all duration-300"
            >
              View more movies
            </button>
          )}
          {display50 && !display60 && (
            <button
              onClick={show60}
              className="w-full sm:w-2/5 px-[40px] py-[15px] mt-4 mx-auto rounded-md bg-[#b91c1c] hover:bg-[#b91c1c]/70 hover:translate-y-[6px] transition-all duration-300"
            >
              View more movies
            </button>
          )}
          {display50 && display60 && (
            <div className="w-full flex flex-col items-center gap-12">
              <p className="text-[1.2rem]">
                There's more, goto search through our database.
              </p>
              <button
                onClick={() => window.scrollTo(0, 0)}
                className="w-full sm:w-2/5 px-[40px] py-[15px] mt-4 mx-auto rounded-md bg-[#b91c1c] hover:bg-[#b91c1c]/70 hover:translate-y-[6px] transition-all duration-300"
              >
                Goto search
              </button>
            </div>
          )}
        </div>
        <ScrollToTop />
      </div>
      <Footer />
    </>
  );
};

export default Movies;
