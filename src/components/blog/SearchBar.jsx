import { LuSearch } from "react-icons/lu";

function SearchBar({ value, onChange }) {
  return (
    <div className="relative w-full md:w-[336px]">
      <input
        id="search-posts"
        type="text"
        placeholder="ابحث في المقالات..."
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full h-[48px] md:h-[52px] bg-[#141414] border border-white/[0.08] text-white text-[15px] placeholder:text-gray-500 placeholder:text-[15px] font-tajawal rounded-[14px] ps-[50px] pe-[45px] text-start outline-none focus:outline-none focus:border-[rgba(249,115,22,0.8)] focus:ring-[3px] focus:ring-[rgba(249,115,22,0.15)] focus:ring-offset-0 caret-white transition-all duration-200"
      />
      <LuSearch className="absolute left-[17px] top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-gray-500 pointer-events-none" />
    </div>
  );
}

export default SearchBar;
