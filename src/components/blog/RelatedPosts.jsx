import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaImages } from "react-icons/fa";
import { LuArrowLeft } from "react-icons/lu";

function RelatedPostCard({ post, index = 0 }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
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

  return (
    <Link
      to={`/blog/${post.slug}`}
      ref={cardRef}
      className={`group block w-full bg-[#141414] border border-white/[0.08] rounded-[22px] overflow-hidden cursor-pointer flex flex-col transition-all duration-300 [@media(hover:hover)]:hover:-translate-y-1 [@media(hover:hover)]:hover:border-[rgba(249,115,22,0.35)] ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{
        transitionDelay: `${index * 80}ms`,
        transitionDuration: "500ms",
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      <div className="relative w-full h-[180px] md:h-[200px] overflow-hidden shrink-0">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out [@media(hover:hover)]:group-hover:scale-105"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, #141414 0%, rgba(20,20,20,0) 60%)",
          }}
        />
        <div className="absolute top-[17px] inset-inline-start-[17px] h-[26px] px-3 rounded-full bg-gradient-to-r from-[#f97316] to-[#ea580c] text-white font-bold text-[14px] font-tajawal inline-flex items-center justify-center z-10 pointer-events-none">
          {post.category}
        </div>
      </div>

      <div className="p-[21px] pb-4 flex flex-col text-start">
        <h3 className="text-white text-[17px] font-extrabold font-tajawal leading-[25px] line-clamp-2 transition-colors duration-300 [@media(hover:hover)]:group-hover:text-[#f97316] text-start">
          {post.title}
        </h3>

        <div className="flex items-center justify-between mt-[14px] text-[15px] font-tajawal">
          <div className="flex items-center gap-2">
            <img
              src={post.author?.avatar}
              alt={post.author?.name}
              className="w-[26px] h-[26px] rounded-full object-cover shrink-0"
            />
            <span className="text-gray-400 font-normal">
              {post.author?.name}
            </span>
          </div>

          <span className="text-gray-500 font-normal">{post.readTime}</span>
        </div>
      </div>
    </Link>
  );
}

function RelatedPosts({ posts = [] }) {
  if (!posts || posts.length === 0) return null;

  return (
    <section className="pt-10 pb-4 md:pt-[50px] md:pb-6 mb-0">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-0 mb-[36px]">
        <div className="flex items-center gap-4 text-start">
          <div className="w-[50px] h-[50px] rounded-[14px] bg-[rgba(249,115,22,0.10)] border border-[rgba(249,115,22,0.30)] flex items-center justify-center shrink-0">
            <FaImages className="w-[22px] h-[22px] text-[#f97316]" />
          </div>
          <div className="flex flex-col">
            <h2 className="text-white font-extrabold text-[22px] md:text-[27px] font-tajawal leading-[1.2]">
              مقالات قد تعجبك
            </h2>
            <span className="text-gray-500 text-[15px] font-tajawal mt-1">
              استكشف المزيد من المحتوى المميز
            </span>
          </div>
        </div>

        <Link
          to="/blog"
          className="group inline-flex items-center gap-2 text-[#f97316] font-bold text-[17px] font-tajawal self-start md:self-center mt-4 md:mt-0"
        >
          <span>عرض الكل</span>
          <LuArrowLeft className="w-5 h-5 transition-transform duration-200 [@media(hover:hover)]:group-hover:-translate-x-1" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch mb-0">
        {posts.map((post, index) => (
          <RelatedPostCard key={post.id} post={post} index={index} />
        ))}
      </div>
    </section>
  );
}

export default RelatedPosts;
