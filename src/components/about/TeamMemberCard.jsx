import { useState, useEffect, useRef } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LuCheck } from "react-icons/lu";

function TeamMemberCard({ member, social = {}, index = 0 }) {
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
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const delay = Math.min(index * 60, 400);

  const socialLinks = [
    {
      href: social.linkedin || "https://linkedin.com/company/adasah",
      label: "لينكدإن",
      icon: FaLinkedin,
      hoverClass: "[@media(hover:hover)]:hover:bg-[#0A66C2]",
    },
    {
      href: social.github || "https://github.com/adasah",
      label: "جيت هب",
      icon: FaGithub,
      hoverClass: "[@media(hover:hover)]:hover:bg-[#3F3F46]",
    },
    {
      href: social.twitter || "https://twitter.com/adasah",
      label: "إكس",
      icon: FaXTwitter,
      hoverClass: "[@media(hover:hover)]:hover:bg-[#F97316]",
    },
  ];

  return (
    <div
      ref={cardRef}
      className={`transition-[opacity,transform] duration-500 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="group h-full rounded-[25px] bg-[#141414] border border-white/[0.07] p-[26px] flex flex-col items-center text-center transition-colors duration-300 [@media(hover:hover)]:hover:border-[rgba(249,115,22,0.40)]">
        <div className="relative w-[109px] h-[109px] rounded-full border-[3px] border-[#262626] shrink-0 transition-colors duration-300 [@media(hover:hover)]:group-hover:border-orange-500">
          <img
            src={member.avatar}
            alt={member.name}
            loading="lazy"
            className="w-full h-full rounded-full object-cover"
          />
          <span className="absolute -bottom-[2px] -start-[2px] w-[21px] h-[21px] rounded-full bg-[#f97316] border-[3px] border-[#141414] flex items-center justify-center">
            <LuCheck className="w-[12px] h-[12px] text-white stroke-[3]" />
          </span>
        </div>

        <h3 className="mt-[16px] font-tajawal font-extrabold text-[24px] text-white leading-tight">
          {member.name}
        </h3>

        <p className="mt-[4px] font-tajawal font-normal text-[15px] text-orange-500 leading-snug">
          {member.role}
        </p>

        <div className="mt-[16px] flex items-center justify-center gap-[12px]">
          {socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className={`w-[38px] h-[38px] rounded-[10px] bg-[#262626] flex items-center justify-center text-gray-400 transition-colors duration-200 [@media(hover:hover)]:hover:text-white ${item.hoverClass}`}
            >
              <item.icon className="w-[18px] h-[18px] shrink-0" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TeamMemberCard;
