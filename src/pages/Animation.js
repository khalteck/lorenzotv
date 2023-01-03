import ScrollToTop from "../ScrollToTop";
import Animationcard from "../components/Animationcard";
import AnimationSearch from "../components/AnimationSearch";
import Header from "../Header";
import Footer from "../Footer";
import Loader from "../components/Loader";

const Animation = ({
  showSearchList,
  handleCloseSearchList,
  showLoader,
  handleSearchSubmit,
  setShowLoader,
  animationsFromJson,
  moviesFromJson,
  firstTwentyA,
  nextThirtyA,
  nextFortyA,
  nextFiftyA,
  nextSixtyA,
  displayA30,
  displayA40,
  displayA50,
  displayA60,
  showA30,
  showA40,
  showA50,
  showA60,
}) => {
  //to shuffle the movie array

  return (
    <>
      <Header
        showSearchList={showSearchList}
        handleSearchSubmit={handleSearchSubmit}
        handleCloseSearchList={handleCloseSearchList}
        showLoader={showLoader}
        setShowLoader={setShowLoader}
        moviesFromJson={moviesFromJson}
        animationsFromJson={animationsFromJson}
      />
      <div className="bg-[#020d18] text-slate-100 pt-8 px-4 md:px-[50px]">
        {showLoader && <Loader />}

        <h1 className="w-[fit-content] sm:w-full text-[1.75rem] md:text-[2.2rem] font-[700] mx-auto">
          Animations
        </h1>
        <div className="w-full md:w-[60%] mt-4">
          <AnimationSearch animationsFromJson={animationsFromJson} />
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
          {firstTwentyA?.map((item, index) => {
            return (
              <Animationcard
                key={index}
                item={item}
                handleCloseSearchList={handleCloseSearchList}
              />
            );
          })}
          {displayA30 &&
            nextThirtyA?.map((item, index) => {
              return (
                <Animationcard
                  key={index}
                  item={item}
                  handleCloseSearchList={handleCloseSearchList}
                />
              );
            })}
          {displayA40 &&
            nextFortyA?.map((item, index) => {
              return (
                <Animationcard
                  key={index}
                  item={item}
                  handleCloseSearchList={handleCloseSearchList}
                />
              );
            })}
          {displayA50 &&
            nextFiftyA?.map((item, index) => {
              return (
                <Animationcard
                  key={index}
                  item={item}
                  handleCloseSearchList={handleCloseSearchList}
                />
              );
            })}
          {displayA60 &&
            nextSixtyA?.map((item, index) => {
              return (
                <Animationcard
                  key={index}
                  item={item}
                  handleCloseSearchList={handleCloseSearchList}
                />
              );
            })}
        </section>
        <div className="w-full my-12 flex justify-center items-center">
          {!displayA30 && (
            <button
              onClick={showA30}
              className="w-full sm:w-2/5 px-[40px] py-[15px] mt-4 mx-auto rounded-md bg-[#b91c1c] hover:bg-[#b91c1c]/70 hover:translate-y-[6px] transition-all duration-300"
            >
              View more movies
            </button>
          )}
          {displayA30 && !displayA40 && (
            <button
              onClick={showA40}
              className="w-full sm:w-2/5 px-[40px] py-[15px] mt-4 mx-auto rounded-md bg-[#b91c1c] hover:bg-[#b91c1c]/70 hover:translate-y-[6px] transition-all duration-300"
            >
              View more movies
            </button>
          )}
          {displayA40 && !displayA50 && (
            <button
              onClick={showA50}
              className="w-full sm:w-2/5 px-[40px] py-[15px] mt-4 mx-auto rounded-md bg-[#b91c1c] hover:bg-[#b91c1c]/70 hover:translate-y-[6px] transition-all duration-300"
            >
              View more movies
            </button>
          )}
          {displayA50 && !displayA60 && (
            <button
              onClick={showA60}
              className="w-full sm:w-2/5 px-[40px] py-[15px] mt-4 mx-auto rounded-md bg-[#b91c1c] hover:bg-[#b91c1c]/70 hover:translate-y-[6px] transition-all duration-300"
            >
              View more movies
            </button>
          )}
          {displayA50 && displayA60 && (
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

export default Animation;
