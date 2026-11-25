import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaGear, FaUser, FaMountainSun, FaSliders, FaCamera } from "react-icons/fa6";
import { LuChevronLeft } from "react-icons/lu";

const getCategoryIcon = (name) => {
  switch (name) {
    case "إضاءة":
      return FaGear;
    case "بورتريه":
      return FaUser;
    case "مناظر طبيعية":
      return FaMountainSun;
    case "تقنيات":
      return FaSliders;
    case "معدات":
      return FaGear;
    default:
      return FaCamera;
  }
};

const getCategoryGradient = (name) => {
  switch (name) {
    case "إضاءة":
      return "linear-gradient(135deg, #f5a30b, #f26a10)";
    case "بورتريه":
      return "linear-gradient(135deg, #e0420a, #f08a10)";
    case "مناظر طبيعية":
      return "linear-gradient(135deg, #f26a10, #eab308)";
    case "تقنيات":
      return "linear-gradient(135deg, #ea580c, #f59e0b)";
    case "معدات":
      return "linear-gradient(135deg, #f59e0b, #ea580c)";
    default:
      return "linear-gradient(135deg, #f97316, #ea580c)";
  }
};

function CategoryCard({ category, index = 0 }) {
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

  const IconComponent = getCategoryIcon(category.name);
  const gradient = getCategoryGradient(category.name);

  return (
    <Link
      to={`/blog?category=${encodeURIComponent(category.name)}`}
      ref={cardRef}
      className={`group relative block w-full h-auto min-h-[148px] lg:h-[172px] p-[18px] sm:p-5 lg:p-[26px] rounded-[20px] lg:rounded-[22px] bg-[#141414] border border-white/[0.07] overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:border-transparent ${
        index === 4 ? "col-span-2 sm:col-span-1" : ""
      } ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{
        transitionDelay: `${index * 80}ms`,
        transitionDuration: "500ms",
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      <div
        className="absolute inset-0 rounded-[20px] lg:rounded-[22px] opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none z-0"
        style={{ background: gradient }}
      />

      <div className="relative z-10 flex flex-col items-start text-start">
        <div className="w-[44px] h-[44px] lg:w-[50px] lg:h-[50px] rounded-[12px] lg:rounded-[14px] bg-[rgba(249,115,22,0.12)] border border-[rgba(249,115,22,0.25)] flex items-center justify-center group-hover:bg-white/20 group-hover:border-white/30 transition-all duration-300">
          <IconComponent className="text-[18px] lg:text-[22px] text-[#f97316] group-hover:text-white transition-colors duration-300" />
        </div>

        <h3 className="text-[18px] lg:text-[21px] font-extrabold text-white mt-3 lg:mt-[18px] leading-tight">
          {category.name}
        </h3>

        <p className="text-[14px] lg:text-[16px] text-gray-500 font-normal mt-1 lg:mt-[6px] group-hover:text-white/85 transition-colors duration-300">
          {category.count} مقالة
        </p>
      </div>

      <div className="hidden sm:flex absolute left-6 top-6 lg:left-[50px] lg:top-[50px] w-[34px] h-[34px] rounded-full bg-white/25 items-center justify-center opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none z-20">
        <LuChevronLeft className="w-4 h-4 text-white" />
      </div>
    </Link>
  );
}

export default CategoryCard;
