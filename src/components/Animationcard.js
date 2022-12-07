import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Animationcard = (props) => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <Link to={`/animations/${props.item.title}`}>
      <div
        data-aos="fade-up"
        data-aos-duration="900"
        onClick={props.handleCloseSearchList}
        className="bg-[#0f172a] w-[220px] h-[420px] p-4 rounded-lg text-center snap-center snap-always relative"
      >
        <img
          alt=""
          src={props.item.coverImage}
          className="w-full h-[270px] object-cover mb-[15px]"
        />
        <p className="text-[.9rem] font-[600] mb-[10px]">{props.item.title}</p>
        <div className="w-full flex justify-center gap-[10px] text-[0.65rem] tracking-wider absolute bottom-3 left-[50%] translate-x-[-50%]">
          <div className="px-[10px] py-[5px] bg-black/50 rounded-md">PG-18</div>
          <div className="px-[10px] py-[5px] bg-black/50 rounded-md">HD</div>
          <div className="px-[10px] py-[5px] bg-black/50 rounded-md">
            English
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Animationcard;
