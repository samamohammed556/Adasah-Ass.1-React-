import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks.jsx";
import MobileMenu from "./MobileMenu.jsx";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-[var(--navbar-height)] transition-all duration-500 backdrop-blur-xl ${
        isScrolled
          ? "bg-bg/95 border-b border-border"
          : "bg-bg-header/95 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 rounded-xl overflow-hidden group-hover:scale-105 transition-all duration-300">
              <img
                src={`${import.meta.env.BASE_URL}logo.png`}
                alt="عدسة"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col text-start">
              <span className="text-xl font-bold bg-gradient-to-r from-text to-neutral-300 bg-clip-text text-transparent leading-none">
                عدسة
              </span>
              <span className="text-xs text-accent hidden sm:block tracking-wide mt-1">
                عالم التصوير الفوتوغرافي
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center">
            <div className="flex items-center bg-surface rounded-full p-1.5 border border-border">
              <NavLinks />
            </div>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/blog"
              aria-label="بحث في المدونة"
              className="p-3 text-text-muted hover:text-primary hover:bg-surface rounded-xl transition-all duration-300 border border-transparent hover:border-border"
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
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </Link>

            <Link to="/blog" className="btn-primary text-sm">
              ابدأ القراءة
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="القائمة"
            className="md:hidden p-3 text-text-muted hover:text-text hover:bg-surface rounded-xl transition-all duration-300 border border-transparent hover:border-border"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </nav>
  );
}

export default Navbar;
