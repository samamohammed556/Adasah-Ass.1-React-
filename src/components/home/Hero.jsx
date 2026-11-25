import { Link } from "react-router-dom";
import { FaPenNib, FaFolderOpen, FaUsers, FaNewspaper } from "react-icons/fa6";
import HeroBadge from "./HeroBadge.jsx";
import HeroStatCard from "./HeroStatCard.jsx";

const stats = [
  { value: "+50", label: "مقالة", icon: FaNewspaper },
  { value: "+10ألف", label: "قارئ", icon: FaUsers },
  { value: "4", label: "تصنيفات", icon: FaFolderOpen },
  { value: "6", label: "كاتب", icon: FaPenNib },
];

function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-bg hero-grid-pattern">
      <div className="absolute top-20 left-10 w-72 h-72 bg-glow-1 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-glow-2 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-glow-1 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-28">
        <div className="text-center max-w-4xl mx-auto">
          <HeroBadge />

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-text mb-6 leading-tight tracking-tight">
            اكتشف <span className="gradient-text">فن</span>
            <br />
            التصوير الفوتوغرافي
          </h1>

          <p className="text-xl md:text-2xl text-text-muted mb-9 max-w-2xl mx-auto leading-relaxed">
            انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <Link
              to="/blog"
              className="btn-primary inline-flex items-center justify-center gap-2 group"
            >
              <span>استكشف المقالات</span>
              <svg
                className="w-5 h-5 group-hover:-translate-x-1 transition-transform rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>

            <Link
              to="/about"
              className="btn-secondary inline-flex items-center justify-center gap-2"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>اعرف المزيد</span>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <HeroStatCard key={index} stat={stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
