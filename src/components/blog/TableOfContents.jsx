import { FaListUl } from "react-icons/fa";

function TableOfContents({ sections = [] }) {
  if (!sections || sections.length === 0) return null;

  return (
    <div className="rounded-[20px] p-[26px] bg-[#141414] border border-white/[0.07] text-start">
      <div className="flex items-center gap-3">
        <div className="w-[42px] h-[42px] rounded-[12px] bg-[rgba(249,115,22,0.10)] border border-[rgba(249,115,22,0.30)] flex items-center justify-center shrink-0">
          <FaListUl className="w-[18px] h-[18px] text-[#f97316]" />
        </div>
        <h3 className="text-white font-bold text-[18px] font-tajawal">
          محتويات المقال
        </h3>
      </div>

      <nav aria-label="محتويات المقال" className="flex flex-col gap-[9px] mt-6">
        {sections.map((sec, idx) => (
          <a
            key={sec.id}
            href={`#${sec.id}`}
            className="group w-full h-[50px] rounded-[13px] px-3 flex items-center gap-3 bg-transparent transition-all duration-200 [@media(hover:hover)]:hover:bg-[rgba(249,115,22,0.10)]"
          >
            <span className="w-[25px] h-[25px] rounded-[7px] bg-[#1f1f1f] text-gray-500 font-bold text-[13px] flex items-center justify-center shrink-0 transition-all duration-200 [@media(hover:hover)]:group-hover:bg-[rgba(249,115,22,0.20)] [@media(hover:hover)]:group-hover:text-[#f97316]">
              {idx + 1}
            </span>
            <span className="text-gray-400 text-[15px] font-tajawal transition-colors duration-200 [@media(hover:hover)]:group-hover:text-[#f97316] line-clamp-1 text-start">
              {sec.heading}
            </span>
          </a>
        ))}
      </nav>
    </div>
  );
}

export default TableOfContents;
