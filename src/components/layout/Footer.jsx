import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub, FaLinkedin, FaYoutube, FaHeart } from "react-icons/fa";
import { LuChevronLeft } from "react-icons/lu";
import { useFetch } from "../../hooks/useFetch.js";

function Footer({ siteInfo: propSiteInfo, categories: propCategories }) {
  const { data } = useFetch(`${import.meta.env.BASE_URL}data/posts.json`);
  const siteInfo = propSiteInfo || data?.siteInfo || {};
  const categories = propCategories || data?.categories || [];

  const displayCategories = (categories && categories.length > 0
    ? categories.slice(0, 4)
    : [
        { name: "إضاءة" },
        { name: "بورتريه" },
        { name: "مناظر طبيعية" },
        { name: "تقنيات" },
      ]
  ).map((cat) => ({
    label: cat.name,
    href: `/blog?category=${encodeURIComponent(cat.name)}`,
  }));

  const exploreLinks = [
    { label: "الرئيسية", href: "/" },
    { label: "المدونة", href: "/blog" },
    { label: "من نحن", href: "/about" },
  ];

  const socialItems = [
    {
      label: "x/twitter",
      href: siteInfo.social?.twitter || "https://twitter.com/adasah",
      icon: FaXTwitter,
    },
    {
      label: "github",
      href: siteInfo.social?.github || "https://github.com/adasah",
      icon: FaGithub,
    },
    {
      label: "linkedin",
      href: siteInfo.social?.linkedin || "https://linkedin.com/company/adasah",
      icon: FaLinkedin,
    },
    {
      label: "youtube",
      href: siteInfo.social?.youtube || "https://youtube.com/@adasah",
      icon: FaYoutube,
    },
  ];

  return (
    <footer className="relative w-full bg-[#0a0a0a] border-t border-white/[0.06] overflow-hidden">
      <div className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] pointer-events-none bg-[radial-gradient(ellipse,_rgba(249,115,22,0.07)_0%,_transparent_70%)]" />

      <div className="relative max-w-[1280px] mx-auto px-6 z-10">
        <div className="pt-12 pb-10 md:pt-[68px] md:pb-[64px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 lg:gap-16">
          <div className="col-span-1 md:col-span-2 lg:col-span-1 text-start">
            <Link to="/" className="group inline-flex items-center gap-3">
              <div
                className="w-[46px] h-[46px] rounded-[14px] bg-gradient-to-br from-[#f97316] to-[#ea580c] flex items-center justify-center shrink-0 transition-all duration-300 shadow-[0_6px_18px_rgba(249,115,22,0.30)] [@media(hover:hover)]:group-hover:scale-[1.08] [@media(hover:hover)]:group-hover:shadow-[0_8px_24px_rgba(249,115,22,0.45)]"
              >
                <span className="text-white font-tajawal font-extrabold text-[26px] leading-none select-none">
                  ع
                </span>
              </div>
              <span className="text-white font-tajawal font-extrabold text-[22px] tracking-wide">
                عدسة
              </span>
            </Link>

            <p className="text-gray-500 text-[15px] leading-[24px] max-w-[260px] font-tajawal font-normal mt-[25px]">
              {siteInfo.description ||
                "مدونة متخصصة في فن التصوير الفوتوغرافي. نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم."}
            </p>

            <div className="flex items-center gap-2 mt-[28px]">
              {socialItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="group relative w-[42px] h-[42px] rounded-[13px] bg-[#151515] border border-white/[0.07] flex items-center justify-center transition-all duration-300 [@media(hover:hover)]:hover:border-transparent [@media(hover:hover)]:hover:scale-110 [@media(hover:hover)]:hover:shadow-[0_8px_20px_rgba(249,115,22,0.35)] overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-br from-[#f97316] to-[#ea580c] opacity-0 [@media(hover:hover)]:group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <item.icon className="relative z-10 w-[21px] h-[21px] text-gray-500 [@media(hover:hover)]:group-hover:text-white transition-colors duration-300 shrink-0" />
                </a>
              ))}
            </div>
          </div>

          <div className="col-span-1 text-start">
            <div className="flex items-center gap-[10px]">
              <h3 className="text-white font-tajawal font-bold text-[16px] leading-tight">
                استكشف
              </h3>
              <span className="w-[34px] h-[2px] bg-[#f59e0b] rounded-full shrink-0" />
            </div>

            <div className="flex flex-col gap-[14px] mt-[28px] ps-2">
              {exploreLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="group inline-flex items-center text-gray-500 [@media(hover:hover)]:hover:text-[#f97316] text-[15px] font-normal font-tajawal transition-colors duration-250 w-fit"
                >
                  <span className="w-0 opacity-0 overflow-hidden inline-flex items-center justify-center transition-all duration-250 [@media(hover:hover)]:group-hover:w-[12px] [@media(hover:hover)]:group-hover:opacity-100 [@media(hover:hover)]:group-hover:me-[6px] shrink-0 text-[#f97316]">
                    <LuChevronLeft className="w-3 h-3 shrink-0" />
                  </span>
                  <span className="transition-transform duration-200">
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="col-span-1 text-start">
            <div className="flex items-center gap-[10px]">
              <h3 className="text-white font-tajawal font-bold text-[16px] leading-tight">
                التصنيفات
              </h3>
              <span className="w-[34px] h-[2px] bg-[#f59e0b] rounded-full shrink-0" />
            </div>

            <div className="flex flex-col gap-[14px] mt-[28px] ps-2">
              {displayCategories.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="group inline-flex items-center text-gray-500 [@media(hover:hover)]:hover:text-[#f97316] text-[15px] font-normal font-tajawal transition-colors duration-250 w-fit"
                >
                  <span className="w-0 opacity-0 overflow-hidden inline-flex items-center justify-center transition-all duration-250 [@media(hover:hover)]:group-hover:w-[12px] [@media(hover:hover)]:group-hover:opacity-100 [@media(hover:hover)]:group-hover:me-[6px] shrink-0 text-[#f97316]">
                    <LuChevronLeft className="w-3 h-3 shrink-0" />
                  </span>
                  <span className="transition-transform duration-200">
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="col-span-1 text-start">
            <div className="flex items-center gap-[10px]">
              <h3 className="text-white font-tajawal font-bold text-[16px] leading-tight">
                ابق على اطلاع
              </h3>
              <span className="w-[34px] h-[2px] bg-[#f59e0b] rounded-full shrink-0" />
            </div>

            <p className="text-gray-500 text-[15px] leading-[21px] font-tajawal font-normal mt-[28px]">
              اشترك للحصول على أحدث المقالات والتحديثات.
            </p>

            <div className="w-full mt-[18px]">
              <input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                aria-label="البريد الإلكتروني"
                className="w-full h-[48px] rounded-[13px] bg-[#111111] border border-white/[0.08] px-4 text-white text-[14px] text-start placeholder:text-gray-600 placeholder:text-[14px] outline-none focus:outline-none focus:border-[rgba(249,115,22,0.5)] focus:ring-[3px] focus:ring-[rgba(249,115,22,0.15)] focus:ring-offset-0 [@media(hover:hover)]:hover:border-[rgba(249,115,22,0.25)] caret-[#f97316] transition-all duration-200 font-tajawal"
              />
            </div>

            <div className="w-full mt-[12px]">
              <button
                type="button"
                className="relative overflow-hidden group w-full h-[52px] md:h-[55px] rounded-full text-white font-bold text-[17px] font-tajawal shadow-none cursor-pointer bg-gradient-to-r from-[#f97316] to-[#ea580c] flex items-center justify-center shrink-0"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#e04a0b] to-[#b82e08] opacity-0 [@media(hover:hover)]:group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <span className="relative z-10">اشترك</span>
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.06]">
          <div className="py-[28px] flex flex-col md:flex-row justify-between items-center gap-3 md:gap-0 text-gray-600 text-[14px] font-tajawal">
            <div className="flex items-center justify-center md:justify-start">
              <span>© 2026 عدسة. صنع بكل</span>
              <FaHeart className="w-[14px] h-[14px] text-[#f97316] inline-block mx-1 shrink-0" />
              <span>جميع الحقوق محفوظة.</span>
            </div>

            <div className="flex items-center gap-6">
              <Link
                to="/privacy"
                className="text-gray-600 [@media(hover:hover)]:hover:text-[#f97316] transition-colors duration-200"
              >
                سياسة الخصوصية
              </Link>
              <Link
                to="/terms"
                className="text-gray-600 [@media(hover:hover)]:hover:text-[#f97316] transition-colors duration-200"
              >
                شروط الخدمة
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
