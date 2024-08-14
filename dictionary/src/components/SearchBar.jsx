import { CiSearch } from "react-icons/ci";

const SearchBar = ({handleChange}) => {
  return (
    <div className="mt-[10rem] mx-6">
      <h1 className="font-bold text-[3rem]">Dictionary</h1>
      <div className="relative">
        <CiSearch className="ml-1 text-[#B6B6B6] absolute bottom-3  text-3xl font-bold " />

        <input
        onChange={handleChange}
          type="text"
          placeholder="Search here"
          className="w-full pl-8  py-4 rounded-sm bg-[#EBEBEA]"
        />
      </div>
      <button  className="mt-2"><a href="#_" className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block">
<span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"></span>
<span className="relative group-hover:text-white">Search</span>
</a></button>
    </div> 
  );
};
export default SearchBar;
