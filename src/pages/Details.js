import ScrollToTop from "../ScrollToTop";
import { useParams } from "react-router-dom";
import moviedata from "../data/movieData.json";
import cinema from "../images/icons8-cinema-50.png"
import file from "../images/icons8-file-64.png"

const Details = () => {
  const { title } = useParams();
  const movie = moviedata?.filter((movie) => movie.title === title)[0];

  return (
    <div className="bg-gradient-to-b from-[#020d18] to-[#111827] md:bg-[#020d18] text-slate-100 px-4 md:px-[50px] pt-8 pb-4 ">
      <h1 className="w-[fit-content] sm:w-full text-[1.75rem] md:text-[2.2rem] font-[700] mx-auto">
        {movie?.title}
      </h1>
      <div className="w-full bg-black/30 mt-10 mb-8 p-5 block sm:flex gap-5 rounded-lg">
        <img
          alt=""
          src={movie?.coverImage}
          className="w-[220px] h-auto rounded-md mx-auto mb-8 sm:mb-0"
        />
        <div className="text-start">
          <h2 className="w-full sm:w-full text-[1rem] md:text-[1.25rem] mx-auto mb-3">
            <span className="text-red-600 font-[700]">TITLE:</span>{" "}
            {movie?.title}
          </h2>
          <h2 className="w-full sm:w-full text-[1rem] md:text-[1.25rem] mx-auto mb-3">
            <span className="text-red-600 font-[700]">CATEGORY:</span>{" "}
            {movie?.category}
          </h2>
          <h2 className="w-full sm:w-full text-[1rem] md:text-[1.25rem] mx-auto mb-3">
            <span className="text-red-600 font-[700]">GENRE:</span>{" "}
            {movie?.genre}
          </h2>
          <h2 className="w-full sm:w-full text-[1rem] md:text-[1.25rem] mx-auto mb-3">
            <span className="text-red-600 font-[700]">STORY LINE:</span>{" "}
            {movie?.storyLine}
          </h2>
          <div className="w-full text-center block sm:flex gap-8">
            <a href={`${movie?.downloadLink}`}>
              <button className="px-[40px] py-[15px] font-bold mt-4 rounded-md bg-[#b91c1c] hover:translate-y-[6px] transition-all duration-300 flex items-center gap-2">
                <p>Download {movie?.category}</p> <img alt="" src={cinema} className="w-5 h-5"/>
              </button>
            </a>
            <a href={`${movie?.subtitleLink}`}>
              <button className="px-[40px] py-[15px] font-bold mt-4 rounded-md bg-[#b91c1c] hover:translate-y-[6px] transition-all duration-300 flex items-center gap-2">
                <p>Download Subtitle</p> <img alt="" src={file} className="w-5 h-5"/>
              </button>
            </a>
          </div>
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
};

export default Details;
