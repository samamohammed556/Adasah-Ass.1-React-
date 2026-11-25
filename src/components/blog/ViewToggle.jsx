import { LuLayoutGrid, LuList } from "react-icons/lu";

function ViewToggle({ view, onViewChange }) {
  return (
    <div className="inline-flex items-center gap-1 bg-[#141414] border border-white/[0.08] rounded-[14px] p-1">
      <button
        type="button"
        onClick={() => onViewChange("grid")}
        className={`w-[36px] h-[36px] rounded-[10px] flex items-center justify-center transition-all duration-200 cursor-pointer ${
          view === "grid"
            ? "bg-gradient-to-r from-[#f97316] to-[#ea580c] text-white"
            : "bg-transparent text-gray-500 [@media(hover:hover)]:hover:text-white"
        }`}
        title="عرض شبكة"
        aria-label="عرض شبكة"
      >
        <LuLayoutGrid className="w-[18px] h-[18px]" />
      </button>
      <button
        type="button"
        onClick={() => onViewChange("list")}
        className={`w-[36px] h-[36px] rounded-[10px] flex items-center justify-center transition-all duration-200 cursor-pointer ${
          view === "list"
            ? "bg-gradient-to-r from-[#f97316] to-[#ea580c] text-white"
            : "bg-transparent text-gray-500 [@media(hover:hover)]:hover:text-white"
        }`}
        title="عرض قائمة"
        aria-label="عرض قائمة"
      >
        <LuList className="w-[18px] h-[18px]" />
      </button>
    </div>
  );
}

export default ViewToggle;
