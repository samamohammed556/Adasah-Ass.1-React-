import { Link } from "react-router-dom";
import { LuArrowLeft } from "react-icons/lu";
import SectionBadge from "./SectionBadge.jsx";
import LatestPostCard from "./LatestPostCard.jsx";

function LatestPosts({ posts = [] }) {
  const latest = [...posts]
    .filter((post) => !post.featured)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  if (latest.length === 0) return null;

  return (
    <section className="relative bg-[#0a0a0a] border-t border-b border-white/[0.06] py-16 lg:py-[100px] overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] pointer-events-none rounded-full blur-3xl bg-[radial-gradient(circle,_rgba(249,115,22,0.07)_0%,_transparent_70%)]" />

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-10 lg:mb-[52px]">
          <div className="text-start">
            <SectionBadge
              label="الأحدث"
              className="w-[110px] h-[42px] px-3.5 justify-center mb-5"
              bigDotClassName="w-[10px] h-[10px]"
              textClassName="text-[16px]"
            />
            <h2 className="text-[36px] sm:text-[44px] lg:text-[56px] font-extrabold text-white leading-[1.2] mb-4 lg:mb-[16px]">
              أحدث المقالات
            </h2>
            <p className="text-[17px] sm:text-[18px] lg:text-[20px] text-gray-500 font-normal leading-normal">
              محتوى جديد طازج من المطبعة
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <Link
              to="/blog"
              className="group inline-flex items-center gap-2 text-[#f97316] font-bold text-base lg:text-[18px] transition-colors duration-200"
            >
              <span>عرض جميع المقالات</span>
              <LuArrowLeft className="w-5 h-5 transition-transform duration-200 group-hover:-translate-x-1" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {latest.map((post, index) => (
            <LatestPostCard key={post.id} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default LatestPosts;
