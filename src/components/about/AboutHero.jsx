import { useState, useEffect } from "react";
import { FaUsers, FaNewspaper, FaPenNib, FaBookOpen } from "react-icons/fa";
import SectionBadge from "../home/SectionBadge.jsx";
import StatCard from "./StatCard.jsx";

const stats = [
  { icon: FaUsers, valuePrefix: "2+", valueSuffix: "مليون", label: "قارئ شهرياً" },
  { icon: FaNewspaper, valuePrefix: "500+", label: "مقالة منشورة" },
  { icon: FaPenNib, valuePrefix: "50+", label: "كاتب خبير" },
  { icon: FaBookOpen, valuePrefix: "15+", label: "تصنيف" },
];

function AboutHero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setVisible(true);
      return;
    }
    const timer = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full bg-[#0a0a0a] pt-[64px] pb-[56px] md:pt-[79px] md:pb-[84px] overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{
          maskImage: "linear-gradient(to bottom, black 45%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 45%, transparent 100%)",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.045) 1px, transparent 1px)",
            backgroundSize: "90px 90px",
          }}
        />
        <div className="absolute top-20 left-10 w-72 h-72 bg-glow-1 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-glow-2 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-glow-1 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div
        className={`relative z-10 max-w-[1280px] mx-auto px-6 flex flex-col items-center text-center transition-all duration-700 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <SectionBadge
          label="من نحن"
          dotsCount={2}
          className="!mb-0 px-4 py-1.5 justify-center border border-[rgba(249,115,22,0.30)] bg-[rgba(249,115,22,0.10)] rounded-full"
          bigDotClassName="w-2 h-2"
          textClassName="!text-[#f97316] text-[14px] font-medium"
        />

        <h1 className="mt-[28px] font-tajawal font-extrabold text-[34px] md:text-[66px] leading-[1.2] text-center">
          <span className="text-white">مهمتنا هي </span>
          <span className="bg-gradient-to-r from-[#f59e0b] to-[#f97316] bg-clip-text text-transparent">
            الإعلام والإلهام
          </span>
        </h1>

        <p className="mt-[24px] max-w-[820px] mx-auto font-tajawal font-normal text-[16px] md:text-[20px] leading-[28px] md:leading-[34px] text-gray-400 text-center">
          مدونة متخصصة في فن التصوير الفوتوغرافي. نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة المصورين على تنمية مهاراتهم من خلال محتوى عالي الجودة.
        </p>

        <div className="mt-[40px] md:mt-[56px] w-full max-w-[940px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-[14px] md:gap-[18px]">
          {stats.map((stat) => (
            <StatCard
              key={stat.label}
              icon={stat.icon}
              valuePrefix={stat.valuePrefix}
              valueSuffix={stat.valueSuffix}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutHero;
