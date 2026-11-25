import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { LuChevronLeft, LuCalendar, LuClock } from "react-icons/lu";

function PostHero({ post }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const formatDateLong = (dateString) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("ar-EG", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
    } catch {
      return dateString;
    }
  };

  return (
    <section className="relative w-full min-h-[480px] md:min-h-[calc(100svh-var(--navbar-height))] overflow-hidden flex flex-col justify-between pt-6 pb-8 md:pt-8 md:pb-5">
      <div className="absolute inset-0 z-0">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover object-center"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10,10,10,0.15) 0%, rgba(10,10,10,0.60) 55%, #0a0a0a 100%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 w-full flex justify-start">
        <nav
          aria-label="Breadcrumb"
          className="h-auto min-h-[38px] py-1.5 md:py-0 px-[17px] rounded-full bg-black/45 backdrop-blur-md border border-white/10 text-[15px] font-tajawal inline-flex flex-wrap items-center gap-2.5 text-white"
        >
          <Link
            to="/"
            className="text-white [@media(hover:hover)]:hover:text-[#f97316] transition-colors duration-200 flex items-center"
            aria-label="الرئيسية"
          >
            <FaHome className="w-4 h-4" />
          </Link>
          <LuChevronLeft className="w-3.5 h-3.5 text-gray-400 shrink-0" />
          <Link
            to="/blog"
            className="text-white [@media(hover:hover)]:hover:text-[#f97316] transition-colors duration-200"
          >
            المدونة
          </Link>
          <LuChevronLeft className="w-3.5 h-3.5 text-gray-400 shrink-0" />
          <Link
            to={`/blog?category=${encodeURIComponent(post.category)}`}
            className="text-[#f97316] font-medium [@media(hover:hover)]:hover:underline transition-colors duration-200"
          >
            {post.category}
          </Link>
        </nav>
      </div>

      <div
        className={`relative z-10 max-w-[1280px] mx-auto px-6 w-full mt-6 transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="w-full ps-0 md:ps-[96px] text-start flex flex-col items-start">
          <div className="flex flex-wrap items-center gap-3.5 text-gray-300 text-[15px] font-tajawal">
            <span className="h-[38px] px-5 rounded-full bg-gradient-to-r from-[#f97316] to-[#ea580c] text-white font-bold text-[15px] inline-flex items-center justify-center shrink-0">
              {post.category}
            </span>
            <div className="flex items-center gap-2">
              <LuCalendar className="w-4 h-4 text-gray-300 shrink-0" />
              <span>{formatDateLong(post.date)}</span>
            </div>
            <div className="flex items-center gap-2">
              <LuClock className="w-4 h-4 text-gray-300 shrink-0" />
              <span>{post.readTime}</span>
            </div>
          </div>

          <h1 className="text-[32px] md:text-[58px] font-extrabold font-tajawal text-white leading-[44px] md:leading-[73px] mt-6 max-w-[17em]">
            {post.title}
          </h1>

          <div className="mt-7 w-full md:w-[190px] p-[18px] rounded-[20px] bg-[rgba(20,20,20,0.7)] backdrop-blur-md border border-white/[0.08] flex items-center gap-3">
            <img
              src={post.author?.avatar}
              alt={post.author?.name}
              className="w-[63px] h-[63px] rounded-full object-cover border-2 border-[rgba(249,115,22,0.8)] shrink-0"
            />
            <div className="flex flex-col text-start">
              <span className="text-white font-bold text-[18px] leading-tight font-tajawal">
                {post.author?.name}
              </span>
              <span className="text-gray-400 text-[14px] leading-tight font-tajawal mt-1">
                {post.author?.role}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PostHero;