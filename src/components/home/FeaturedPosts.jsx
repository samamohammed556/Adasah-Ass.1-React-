import { Link } from "react-router-dom";
import { LuChevronLeft } from "react-icons/lu";
import SectionBadge from "./SectionBadge.jsx";
import FeaturedPostCard from "./FeaturedPostCard.jsx";

function FeaturedPosts({ posts = [] }) {
  const featured = posts.filter((post) => post.featured).slice(0, 3);
  if (featured.length === 0) return null;

  return (
    <section className="relative bg-[#0a0a0a] pt-16 pb-12 sm:pt-20 sm:pb-16 lg:pt-[90px] lg:pb-[80px] overflow-hidden">
      <div className="absolute top-1/4 right-0 w-[400px] h-[600px] pointer-events-none rounded-full blur-3xl bg-[radial-gradient(ellipse_at_right,_rgba(249,115,22,0.08)_0%,_transparent_70%)]" />

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10 lg:mb-[48px]">
          <div className="text-start">
            <SectionBadge
              label="مميز"
              className="w-[110px] h-[42px] px-3.5 justify-center mb-5"
              bigDotClassName="w-[10px] h-[10px]"
              textClassName="text-[16px]"
            />
            <h2 className="text-[36px] sm:text-[44px] lg:text-[56px] font-extrabold text-white leading-[1.2] mb-4 lg:mb-[16px]">
              مقالات مختارة
            </h2>
            <p className="text-[16px] sm:text-[18px] lg:text-[20px] text-gray-500 font-normal leading-normal">
              محتوى منتقى لبدء رحلة تعلمك
            </p>
          </div>

          <div className="w-full md:w-auto">
            <Link
              to="/blog"
              className="group inline-flex items-center justify-center gap-2.5 w-full md:w-[150px] h-[48px] md:h-[50px] rounded-xl bg-gradient-to-r from-[#f97316] to-[#ea580c] text-white font-bold text-base lg:text-[17px] transition-all duration-200 hover:brightness-110"
            >
              <LuChevronLeft className="w-[18px] h-[18px] transition-transform duration-200 group-hover:-translate-x-1" />
              <span>عرض الكل</span>
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-6 lg:gap-[32px]">
          {featured.map((post) => (
            <FeaturedPostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedPosts;
