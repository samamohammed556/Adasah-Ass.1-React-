import { LuChevronRight, LuChevronLeft } from "react-icons/lu";

function PostsPagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <nav className="flex justify-center items-center gap-2 mt-12" aria-label="التنقل بين الصفحات">
      <button
        type="button"
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="w-[39px] h-[39px] rounded-[12px] flex items-center justify-center bg-[#141414] border border-white/[0.08] text-gray-400 font-tajawal transition-all duration-200 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none [@media(hover:hover)]:hover:border-[rgba(249,115,22,0.45)] [@media(hover:hover)]:hover:text-gray-200"
        aria-label="الصفحة السابقة"
      >
        <LuChevronRight className="w-4 h-4" />
      </button>

      <div className="flex items-center gap-2">
        {pages.map((p) => (
          <button
            key={p}
            type="button"
            onClick={() => onPageChange(p)}
            className={`w-[39px] h-[39px] rounded-[12px] flex items-center justify-center text-[14px] font-tajawal transition-all duration-200 cursor-pointer ${
              p === currentPage
                ? "bg-gradient-to-r from-[#f97316] to-[#ea580c] border border-transparent text-white font-bold"
                : "bg-[#141414] border border-white/[0.08] text-gray-400 font-medium [@media(hover:hover)]:hover:border-[rgba(249,115,22,0.45)] [@media(hover:hover)]:hover:text-gray-200"
            }`}
          >
            {p}
          </button>
        ))}
      </div>

      <button
        type="button"
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="w-[39px] h-[39px] rounded-[12px] flex items-center justify-center bg-[#141414] border border-white/[0.08] text-gray-400 font-tajawal transition-all duration-200 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none [@media(hover:hover)]:hover:border-[rgba(249,115,22,0.45)] [@media(hover:hover)]:hover:text-gray-200"
        aria-label="الصفحة التالية"
      >
        <LuChevronLeft className="w-4 h-4" />
      </button>
    </nav>
  );
}

export default PostsPagination;
