import Moviecard from "./Moviecard";

const SearchList = ({ filteredItems, handleCloseSearchList, searchField }) => {
  const filtered = filteredItems.map((item, index) => (
    <Moviecard
      key={index}
      item={item}
      handleCloseSearchList={handleCloseSearchList}
    />
  ));
  return (
    <div className="w-[100vw] min-h-[100vh] pt-[40px] pb-[100px] px-4 md:px-10 bg-[#020d18] fixed left-0 top-[85px] lg:top-[80px] z-[50] overflow-y-scroll overflow-x-hidden no-scrollbar">
      <h2 className="w-[fit-content] text-[1.1rem] text-slate-100 mx-auto md:text-[1.5rem] mb-8 mt-4 lg:mt-0">
        The keyword "{searchField}" yielded {filtered ? filtered.length : "No"}{" "}
        search Result
        {filtered.length < 2 ? "" : "s"}:
      </h2>
      <div className="w-full bg-black/30 mt-10 mb-8 p-5 gap-5 rounded-lg grid grid-flow-col place-items-center justify-start scroll-auto overflow-y-auto overscroll-x-contain snap-mandatory md:snap-none snap-x no-scrollbar">
        <button
          onClick={handleCloseSearchList}
          className={`px-[10px] lg:px-[20px] py-1 h-[fit-content] md:py-2 rounded-md border-red-700 border-[2px] hover:bg-[#b91c1c] hover:translate-y-[6px] transition-all duration-300 absolute top-0 lg:top-[30px] right-[20px] lg:right-[50px]`}
        >
          Back
        </button>
        {filtered}
      </div>
    </div>
  );
};

export default SearchList;