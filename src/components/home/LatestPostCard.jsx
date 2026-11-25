import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { LuClock, LuChevronLeft } from "react-icons/lu";

function LatestPostCard({ post, index = 0 }) {
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

  return (
    <Link
      to={`/blog/${post.slug}`}
      ref={cardRef}
      className={`group block w-full bg-[#141414] border border-white/[0.07] rounded-[26px] overflow-hidden cursor-pointer flex flex-col h-full transition-all duration-300 hover:-translate-y-1 ${
        index === 2 ? "md:col-span-2 lg:col-span-1" : ""
      } ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{
        transitionDelay: `${index * 100}ms`,
        transitionDuration: "500ms",
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      <div className="relative w-full h-[200px] lg:h-[220px] overflow-hidden shrink-0">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute top-[18px] right-[18px] h-[28px] px-[14px] rounded-full bg-black/60 backdrop-blur-md text-white font-bold text-[14px] inline-flex items-center justify-center z-10 pointer-events-none">
          {post.category}
        </div>
      </div>

      <div className="p-6 lg:p-[26px] flex flex-col flex-1">
        <div className="flex items-center gap-2 text-gray-500 text-[14px] font-normal text-start">
          <LuClock className="w-4 h-4 text-gray-500 shrink-0" />
          <span>{post.readTime}</span>
          <span>•</span>
          <span>{formatDate(post.date)}</span>
        </div>

        <h3 className="text-[20px] lg:text-[22px] leading-[26px] lg:leading-[28px] font-extrabold text-white line-clamp-2 transition-colors duration-300 group-hover:text-[#f97316] mt-4 lg:mt-[20px] text-start">
          {post.title}
        </h3>

        <p className="text-[14px] lg:text-[15px] leading-[22px] lg:leading-[24px] text-gray-400 font-normal line-clamp-2 mt-3 lg:mt-[14px] text-start">
          {post.excerpt}
        </p>

        <div className="w-full border-t border-white/[0.08] mt-4 lg:mt-[20px]" />

        <div className="flex items-center justify-between w-full mt-auto pt-4 lg:pt-[20px]">
          <div className="flex items-center gap-3">
            <img
              src={post.author?.avatar}
              alt={post.author?.name}
              className="w-[40px] h-[40px] rounded-full object-cover shrink-0"
            />
            <div className="flex flex-col text-start">
              <span className="text-[16px] font-bold text-white leading-tight">
                {post.author?.name}
              </span>
              <span className="text-[13px] text-gray-500 mt-0.5 leading-tight">
                {post.author?.role}
              </span>
            </div>
          </div>

          <div className="w-[34px] h-[34px] rounded-full bg-[rgba(249,115,22,0.10)] border border-[rgba(249,115,22,0.35)] flex items-center justify-center transition-all duration-300 group-hover:bg-[#f97316] group-hover:border-[#f97316] shrink-0">
            <LuChevronLeft className="w-4 h-4 text-[#f97316] group-hover:text-white transition-colors duration-300" />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default LatestPostCard;
