import ScrollToTop from "../ScrollToTop";
import { useParams } from "react-router-dom";
import moviedata from "../data/movieData.json";

const Details = () => {
  const { title } = useParams();
  const movie = moviedata?.filter((movie) => movie.title === title)[0];

  return (
    <div className="bg-[#020d18] text-slate-100 h-[300px] px-4 md:px-[50px]">
      <h1 className="text-[2.5rem]">Movie: {movie.title}</h1>
      <ScrollToTop />
    </div>
  );
};

export default Details;
