const Loader = () => {
  return (
    <div className="w-full h-screen bg-black/90 flex justify-center items-center absolute top-0 left-0 z-50">
      <div className="w-[80%] md:w-1/4 py-12 bg-[#020d18] font-bold text-[1.2rem] md:text-[2rem] rounded-2xl flex justify-center items-center">
        <p className="load">Loading...</p>
      </div>
    </div>
  );
};

export default Loader;
