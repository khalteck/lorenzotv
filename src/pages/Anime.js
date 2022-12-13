import ScrollToTop from "../ScrollToTop";
import coming from "../images/coming-soon.png";

const Anime = () => {
  return (
    <div className="bg-[#020d18] min-h-[70vh] text-slate-100 px-4 py-14 md:px-[50px]">
      <h1 className="text-[2rem] font-bold text-center mb-8">Animes</h1>
      <img alt="" src={coming} className="w-[260px] h-auto mx-auto" />
      <ScrollToTop />
    </div>
  );
};

export default Anime;
