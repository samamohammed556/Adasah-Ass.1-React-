import { useState, useEffect, useRef } from "react";
import { LuMail } from "react-icons/lu";

function NewsletterSection({ posts = [] }) {
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

  const distinctAuthors = [];
  const seenAuthors = new Set();
  for (const post of posts) {
    if (post?.author?.avatar && !seenAuthors.has(post.author.name)) {
      seenAuthors.add(post.author.name);
      distinctAuthors.push(post.author);
      if (distinctAuthors.length === 3) break;
    }
  }

  return (
    <section className="relative w-full bg-[#0a0a0a] border-t border-b border-white/[0.06] py-16 md:py-[100px] overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] pointer-events-none bg-[radial-gradient(ellipse_at_top,_rgba(249,115,22,0.10)_0%,_transparent_70%)]" />

      <div className="relative w-full max-w-[880px] mx-auto px-4 md:px-0 z-10">
        <div
          ref={cardRef}
          className={`w-full bg-[#141414] border border-white/[0.07] rounded-[28px] md:rounded-[36px] px-5 pt-9 pb-10 md:px-12 md:pt-16 md:pb-[72px] text-center flex flex-col items-center transition-all ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{
            transitionDuration: "600ms",
            transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <div className="w-[56px] h-[56px] md:w-[68px] md:h-[68px] rounded-[16px] md:rounded-[20px] bg-gradient-to-br from-[#f97316] to-[#ea580c] flex items-center justify-center shrink-0">
            <LuMail className="w-6 h-6 md:w-[30px] md:h-[30px] text-white stroke-[1.75]" />
          </div>

          <h2 className="text-[26px] md:text-[36px] font-extrabold font-tajawal text-white leading-[1.3] text-center mt-5 md:mt-[28px]">
            <span>اشترك في </span>
            <span className="text-[#f59e0b]">نشرتنا الإخبارية</span>
          </h2>

          <p className="text-[15px] md:text-[18px] text-gray-400 font-normal font-tajawal max-w-[600px] leading-relaxed text-center mt-3 md:mt-[16px]">
            احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك الإلكتروني
          </p>

          <div className="w-full max-w-[540px] mx-auto flex flex-col md:flex-row gap-3 items-stretch mt-6 md:mt-[38px]">
            <input
              type="email"
              placeholder="أدخل بريدك الإلكتروني"
              aria-label="البريد الإلكتروني"
              className="w-full flex-1 h-[56px] md:h-[60px] bg-[#0a0a0a] border border-white/[0.08] rounded-[18px] px-[22px] text-white text-[16px] text-start placeholder:text-gray-500 placeholder:text-[16px] outline-none focus:outline-none focus:border-[rgba(249,115,22,0.5)] focus:ring-[3px] focus:ring-[rgba(249,115,22,0.15)] [@media(hover:hover)]:hover:border-[rgba(249,115,22,0.25)] caret-[#f97316] transition-all duration-200"
            />
            <button
              type="button"
              className="relative overflow-hidden group w-full md:w-[150px] h-[56px] md:h-[60px] rounded-[18px] text-white font-bold text-[16px] shadow-none cursor-pointer bg-gradient-to-r from-[#f97316] to-[#ea580c] flex items-center justify-center shrink-0"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#e04a0b] to-[#b82e08] opacity-0 [@media(hover:hover)]:group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <span className="relative z-10">اشترك الآن</span>
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-y-2 text-gray-500 text-[14px] font-normal leading-normal mt-6 md:mt-[30px]">
            <div className="w-full md:w-auto flex items-center justify-center gap-2.5">
              <div className="flex items-center shrink-0">
                {distinctAuthors.map((author, idx) => (
                  <img
                    key={author.name || idx}
                    src={author.avatar}
                    alt={author.name || ""}
                    className={`w-[30px] h-[30px] rounded-full border-2 border-[#141414] object-cover shrink-0 ${
                      idx > 0 ? "-ms-2" : ""
                    }`}
                    style={{ zIndex: 10 + idx }}
                  />
                ))}
              </div>
              <span>
                انضم لـ <span className="text-white font-bold">10,000+</span> مصور
              </span>
            </div>

            <span className="hidden md:inline mx-3 text-gray-600">•</span>

            <div className="w-full md:w-auto flex items-center justify-center gap-2.5">
              <span>بدون إزعاج</span>
              <span className="text-gray-600">•</span>
              <span>إلغاء الاشتراك في أي وقت</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsletterSection;