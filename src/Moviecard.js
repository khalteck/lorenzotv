const Moviecard = (props) => {
  return (
    <div className="bg-[#020d18] w-[220px] h-[470px] p-4 rounded-lg text-center snap-center snap-always relative">
      <img
        alt=""
        src={props.item.coverImage}
        className="w-full h-[300px] object-cover mb-[20px]"
      />
      <p className="text-[1rem] font-[600] mb-[10px]">{props.item.title}</p>
      <div className="w-full flex justify-center gap-[10px] text-[0.65rem] tracking-wider absolute bottom-3 left-[50%] translate-x-[-50%]">
        <div className="px-[10px] py-[5px] bg-black/50 rounded-md">PG-18</div>
        <div className="px-[10px] py-[5px] bg-black/50 rounded-md">HD</div>
        <div className="px-[10px] py-[5px] bg-black/50 rounded-md">English</div>
      </div>
    </div>
  );
};

export default Moviecard;
