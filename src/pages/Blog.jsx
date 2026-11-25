import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { LuNewspaper, LuX } from "react-icons/lu";
import { useFetch } from "../hooks/useFetch.js";
import { getCategoryCounts, filterPosts } from "../utils/helpers.js";
import Loader from "../components/common/Loader.jsx";
import ErrorMessage from "../components/common/ErrorMessage.jsx";
import EmptyState from "../components/common/EmptyState.jsx";
import SearchBar from "../components/blog/SearchBar.jsx";
import CategoryFilter from "../components/blog/CategoryFilter.jsx";
import ViewToggle from "../components/blog/ViewToggle.jsx";
import PostList from "../components/blog/PostList.jsx";
import PostsPagination from "../components/blog/PostsPagination.jsx";
import SectionBadge from "../components/home/SectionBadge.jsx";

const POSTS_PER_PAGE = 6;

function Blog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [view, setView] = useState("grid");
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setHeroVisible(true);
      return;
    }
    const timer = setTimeout(() => setHeroVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const q = searchParams.get("q") || "";
  const category = searchParams.get("category") || "";
  const page = Math.max(1, parseInt(searchParams.get("page") || "1", 10));

  const [searchInput, setSearchInput] = useState(q);

  useEffect(() => {
    setSearchInput(q);
  }, [q]);

  useEffect(() => {
    if (searchInput === q) return;
    const timer = setTimeout(() => {
      const next = new URLSearchParams(searchParams);
      if (searchInput) next.set("q", searchInput);
      else next.delete("q");
      next.set("page", "1");
      setSearchParams(next);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchInput, q, searchParams, setSearchParams]);

  const handleCategoryChange = (eventOrValue) => {
    const value = typeof eventOrValue === "string" ? eventOrValue : eventOrValue?.target?.value ?? "";
    const next = new URLSearchParams(searchParams);
    if (value) next.set("category", value);
    else next.delete("category");
    next.set("page", "1");
    setSearchParams(next);
  };

  const handleClearFilters = () => {
    setSearchInput("");
    setSearchParams(new URLSearchParams());
  };

  const handlePageChange = (nextPage) => {
    const next = new URLSearchParams(searchParams);
    next.set("page", String(nextPage));
    setSearchParams(next);
  };

  const { data, loading, error } = useFetch(`${import.meta.env.BASE_URL}data/posts.json`);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error.message} onRetry={() => window.location.reload()} />;

  const posts = data.posts;
  const categories = getCategoryCounts(posts, data.categories);

  const filtered = filterPosts(posts, q, category);
  const totalPages = Math.max(1, Math.ceil(filtered.length / POSTS_PER_PAGE));
  const currentPage = Math.min(page, totalPages);
  const paginated = filtered.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE);

  const hasActiveFilter = Boolean(searchInput.trim() || category);

  return (
    <div className="w-full bg-[#0a0a0a] min-h-screen">
      <section className="relative w-full min-h-[350px] pt-16 pb-12 md:pt-[84px] md:pb-[64px] bg-[#0a0a0a] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none overflow-hidden"
          style={{
            maskImage: "linear-gradient(to bottom, black 40%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 40%, transparent 100%)",
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
          <div className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[radial-gradient(ellipse,_rgba(249,115,22,0.16)_0%,_transparent_70%)]" />
        </div>

        <div
          className={`relative max-w-[1280px] mx-auto px-6 z-10 flex flex-col items-center justify-center text-center transition-all duration-700 ease-out ${
            heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <SectionBadge
            label="مدونتنا"
            icon={LuNewspaper}
            dotsCount={1}
            className="w-[118px] h-[39px] justify-center border border-[rgba(249,115,22,0.30)] bg-[rgba(249,115,22,0.10)] rounded-full mb-0"
            bigDotClassName="w-2 h-2"
            textClassName="text-[#f97316] text-[14px] font-medium"
          />

          <h1 className="text-[36px] md:text-[64px] font-extrabold font-tajawal text-center leading-[1.2] mt-7">
            <span className="text-white">استكشف </span>
            <span className="bg-gradient-to-r from-[#f59e0b] to-[#f97316] bg-clip-text text-transparent">
              مقالاتنا
            </span>
          </h1>

          <p className="text-[16px] md:text-[20px] text-gray-400 font-normal font-tajawal text-center mt-[22px] max-w-2xl mx-auto">
            اكتشف الدروس والرؤى وأفضل الممارسات للتصوير الحديث
          </p>
        </div>
      </section>

      <div className="w-full bg-[rgba(10,10,10,0.92)] backdrop-blur-[12px] border-b border-white/[0.06] py-[17px] relative lg:sticky lg:top-[var(--navbar-height)] z-40">
        <div className="max-w-[1280px] mx-auto px-6 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-[14px] md:gap-6">
          <SearchBar value={searchInput} onChange={setSearchInput} />
          <CategoryFilter
            categories={categories}
            value={category}
            onChange={handleCategoryChange}
          />
        </div>
      </div>

      <section className="w-full bg-[#0a0a0a] pt-12 pb-20 min-h-[500px]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-0 mb-8">
            <span className="text-gray-500 text-[17px] font-tajawal text-start">
              عرض <span className="font-bold text-white">{filtered.length}</span> مقالات
            </span>

            <div className="flex items-center gap-4">
              <ViewToggle view={view} onViewChange={setView} />
              {hasActiveFilter && (
                <button
                  type="button"
                  onClick={handleClearFilters}
                  className="inline-flex items-center gap-1.5 text-gray-500 [@media(hover:hover)]:hover:text-[#f97316] transition-colors duration-200 cursor-pointer font-tajawal font-medium text-[15px] animate-filter-clear"
                >
                  <LuX className="w-4 h-4 shrink-0" />
                  <span>مسح الفلاتر</span>
                </button>
              )}
            </div>
          </div>

          {filtered.length === 0 ? (
            <EmptyState
              title="لا توجد نتائج"
              description="لم نعثر على أي مقالات تطابق معايير البحث أو التصفية الحالية. جرب تعديل كلمات البحث أو اختيار قسم آخر."
              actionLabel="مسح الفلاتر"
              onAction={handleClearFilters}
            />
          ) : (
            <>
              <PostList posts={paginated} view={view} />
              <PostsPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </>
          )}
        </div>
      </section>
    </div>
  );
}

export default Blog;
