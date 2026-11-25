import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import { LuClock, LuArrowLeft } from "react-icons/lu";

function FeaturedPostCard({ post }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const formatDate = (dateString) => {
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

  const formatReadTime = (readTime) => {
    if (!readTime) return "";
    const str = String(readTime).trim();
    if (str.includes("دقائق")) return str;
    return `${str} دقائق للقراءة`;
  };

  return (
    <Link
      to={`/blog/${post.slug}`}
      ref={cardRef}
      className={`group block w-full bg-[#141414] rounded-[22px] sm:rounded-[24px] lg:rounded-[28px] border border-white/[0.07] hover:border-[rgba(249,115,22,0.35)] transition-all duration-300 overflow-hidden cursor-pointer ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{
        transitionDuration: "700ms",
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      <div className="flex flex-col lg:flex-row h-auto lg:h-[440px] w-full">
        <div className="w-full lg:w-1/2 aspect-[16/10] lg:aspect-auto lg:h-full relative overflow-hidden shrink-0">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover object-center origin-center transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute top-3.5 right-3.5 lg:top-[18px] lg:right-[18px] inline-flex items-center gap-1.5 h-[30px] lg:h-[34px] px-3.5 lg:px-4 rounded-full bg-gradient-to-r from-[#f59e0b] to-[#f97316] text-white z-10 pointer-events-none">
            <FaStar className="w-3 h-3 lg:w-[14px] lg:h-[14px] text-white fill-current shrink-0" />
            <span className="font-bold text-xs lg:text-[15px]">مميز</span>
          </div>
        </div>

        <div className="w-full lg:w-1/2 p-5 sm:p-6 lg:p-[40px] flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-[28px] lg:h-[32px] px-3.5 lg:px-4 rounded-full bg-[rgba(249,115,22,0.10)] border border-[rgba(249,115,22,0.30)] text-[#f97316] font-bold text-xs lg:text-[15px] inline-flex items-center justify-center shrink-0">
                {post.category}
              </span>
              <div className="inline-flex items-center gap-1.5 text-gray-500 text-xs lg:text-[15px] font-normal shrink-0">
                <LuClock className="w-3.5 h-3.5 lg:w-[16px] lg:h-[16px] text-gray-500 shrink-0" />
                <span>{formatReadTime(post.readTime)}</span>
              </div>
            </div>

            <h3 className="text-[20px] sm:text-[24px] leading-[30px] sm:leading-[34px] lg:text-[32px] lg:leading-[42px] font-extrabold text-white line-clamp-2 transition-colors duration-300 group-hover:text-[#f97316] mt-4 lg:mt-[20px]">
              {post.title}
            </h3>

            <p className="text-[13px] sm:text-[15px] leading-[22px] sm:leading-[26px] lg:text-[17px] lg:leading-[30px] text-gray-400 font-normal line-clamp-2 mt-2.5 lg:mt-[16px]">
              {post.excerpt}
            </p>
          </div>

          <div className="flex items-center justify-between w-full mt-6 lg:mt-auto pt-3">
            <div className="flex items-center">
              <div className="relative w-[44px] h-[44px] lg:w-[56px] lg:h-[56px] rounded-full shrink-0">
                <img
                  src={post.author?.avatar}
                  alt={post.author?.name}
                  className="w-full h-full rounded-full object-cover"
                />
                <span className="absolute bottom-0 left-0 w-[12px] h-[12px] lg:w-[14px] lg:h-[14px] rounded-full bg-[#f97316] border-[2px] lg:border-[3px] border-[#141414]" />
              </div>
              <div className="flex flex-col ms-2.5 lg:ms-3 text-start">
                <span className="text-sm lg:text-[17px] font-bold text-white leading-tight">
                  {post.author?.name}
                </span>
                <span className="text-[11px] lg:text-[13px] text-gray-500 mt-0.5">
                  {formatDate(post.date)}
                </span>
              </div>
            </div>

            <div className="inline-flex items-center gap-1.5 lg:gap-2 text-[#f97316] font-bold text-sm lg:text-[17px] shrink-0">
              <LuArrowLeft className="w-4 h-4 lg:w-[20px] lg:h-[20px] transition-transform duration-300 group-hover:-translate-x-[6px]" />
              <span>اقرأ المقال</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default FeaturedPostCard;
