const Moviecard = (props) => {
  return (
    <div className="bg-[#020d18] w-1/5 h-[470px] p-[15px] rounded-lg text-center relative">
      <img
        alt=""
        src={props.item.coverImage}
        className="w-[200px] h-[300px] object-cover mb-[20px]"
      />
      <p className="text-[1rem] font-[600] mb-[10px]">{props.item.title}</p>
      <div className="w-full flex justify-center gap-[10px] text-[0.65rem] tracking-wider absolute bottom-[15px] left-[50%] translate-x-[-50%]">
        <div className="px-[10px] py-[5px] bg-black/50 rounded-md">PG-18</div>
        <div className="px-[10px] py-[5px] bg-black/50 rounded-md">HD</div>
        <div className="px-[10px] py-[5px] bg-black/50 rounded-md">English</div>
      </div>
    </div>
  );
};

export default Moviecard;
