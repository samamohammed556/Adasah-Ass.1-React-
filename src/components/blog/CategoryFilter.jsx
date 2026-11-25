function CategoryFilter({ categories = [], value = "", onChange }) {
  const handleClick = (categoryName) => {
    if (typeof onChange === "function") {
      onChange({ target: { value: categoryName } });
    }
  };

  const isAllActive = !value;

  return (
    <div className="flex flex-wrap items-center gap-2">
      <button
        type="button"
        aria-pressed={isAllActive}
        onClick={() => handleClick("")}
        className={`h-[39px] px-[17px] rounded-[14px] font-tajawal text-[14px] transition-all duration-200 cursor-pointer shrink-0 ${
          isAllActive
            ? "bg-gradient-to-r from-[#f97316] to-[#ea580c] border border-transparent text-white font-bold [@media(hover:hover)]:hover:brightness-110"
            : "bg-[#141414] border border-white/[0.08] text-gray-400 font-medium [@media(hover:hover)]:hover:border-[rgba(249,115,22,0.45)] [@media(hover:hover)]:hover:text-gray-200"
        }`}
      >
        جميع المقالات
      </button>

      {categories.map((cat) => {
        const catName = typeof cat === "string" ? cat : cat.name;
        const isActive = value === catName;
        return (
          <button
            key={cat.id || catName}
            type="button"
            aria-pressed={isActive}
            onClick={() => handleClick(catName)}
            className={`h-[39px] px-[17px] rounded-[14px] font-tajawal text-[14px] transition-all duration-200 cursor-pointer shrink-0 ${
              isActive
                ? "bg-gradient-to-r from-[#f97316] to-[#ea580c] border border-transparent text-white font-bold [@media(hover:hover)]:hover:brightness-110"
                : "bg-[#141414] border border-white/[0.08] text-gray-400 font-medium [@media(hover:hover)]:hover:border-[rgba(249,115,22,0.45)] [@media(hover:hover)]:hover:text-gray-200"
            }`}
          >
            {catName}
          </button>
        );
      })}
    </div>
  );
}

export default CategoryFilter;
