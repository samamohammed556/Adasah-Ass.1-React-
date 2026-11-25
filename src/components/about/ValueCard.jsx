import { useState, useEffect, useRef } from "react";

function ValueCard({ icon: Icon, title, description, index = 0 }) {
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

  const delay = Math.min(index * 60, 400);

  return (
    <div
      ref={cardRef}
      className={`transition-[opacity,transform] duration-500 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="group h-full min-h-[165px] rounded-[25px] bg-[#141414] border border-white/[0.07] p-[20px] sm:p-[26px] flex flex-col items-center justify-center text-center transition-[background-color,border-color] duration-300 [@media(hover:hover)]:hover:bg-[rgba(249,115,22,0.10)] [@media(hover:hover)]:hover:border-[rgba(249,115,22,0.30)]">
        <Icon className="w-[39px] h-[39px] text-[#f97316] shrink-0" />
        <h3 className="mt-[14px] font-tajawal font-extrabold text-[18px] sm:text-[21px] text-white leading-tight transition-colors duration-300 [@media(hover:hover)]:group-hover:text-orange-500">
          {title}
        </h3>
        <p className="mt-[8px] font-tajawal font-normal text-[13px] sm:text-[15px] text-gray-500 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

export default ValueCard;
