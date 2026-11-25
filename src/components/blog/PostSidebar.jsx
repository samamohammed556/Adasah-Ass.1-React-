import { Link } from "react-router-dom";
import { LuClock, LuCalendar, LuMail } from "react-icons/lu";
import TableOfContents from "./TableOfContents.jsx";

function PostSidebar({ post, sections = [] }) {
  const formatDateShort = (dateString) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("ar-EG", {
        day: "numeric",
        month: "long",
      });
    } catch {
      return dateString;
    }
  };

  return (
    <aside className="flex flex-col gap-[26px] lg:sticky lg:top-[calc(var(--navbar-height)+24px)] self-start w-full">
      <TableOfContents sections={sections} />

      <div className="rounded-[20px] p-[26px] bg-[#141414] border border-white/[0.07]">
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-[15px] bg-[#0f0f0f] p-3.5 text-center flex flex-col items-center justify-center">
            <LuClock className="w-[22px] h-[22px] text-[#f97316] mb-1.5 shrink-0" />
            <span className="text-white font-bold text-[18px] font-tajawal leading-tight">
              {post.readTime}
            </span>
            <span className="text-gray-500 text-[13px] font-tajawal mt-1">
              وقت القراءة
            </span>
          </div>

          <div className="rounded-[15px] bg-[#0f0f0f] p-3.5 text-center flex flex-col items-center justify-center">
            <LuCalendar className="w-[22px] h-[22px] text-[#f97316] mb-1.5 shrink-0" />
            <span className="text-white font-bold text-[18px] font-tajawal leading-tight">
              {formatDateShort(post.date)}
            </span>
            <span className="text-gray-500 text-[13px] font-tajawal mt-1">
              تاريخ النشر
            </span>
          </div>
        </div>
      </div>

      <div
        className="rounded-[20px] p-[26px] text-center flex flex-col items-center justify-center border border-[rgba(249,115,22,0.30)]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(249,115,22,0.10), rgba(249,115,22,0.04))",
        }}
      >
        <div className="w-[59px] h-[59px] rounded-[17px] bg-[rgba(249,115,22,0.15)] border border-[rgba(249,115,22,0.30)] flex items-center justify-center shrink-0">
          <LuMail className="w-[26px] h-[26px] text-[#f97316]" />
        </div>

        <h3 className="text-white font-bold text-[18px] font-tajawal mt-4 leading-tight">
          لا تفوّت جديدنا
        </h3>

        <p className="text-gray-400 text-[15px] font-tajawal mt-2 leading-tight">
          اشترك للحصول على أحدث المقالات
        </p>

        <Link
          to="/blog"
          className="relative overflow-hidden group w-full h-[50px] rounded-[13px] text-white font-bold text-[17px] font-tajawal shadow-none cursor-pointer bg-gradient-to-r from-[#f97316] to-[#ea580c] flex items-center justify-center shrink-0 mt-5"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-[#e04a0b] to-[#b82e08] opacity-0 [@media(hover:hover)]:group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          <span className="relative z-10">تصفح المزيد</span>
        </Link>
      </div>
    </aside>
  );
}

export default PostSidebar;
