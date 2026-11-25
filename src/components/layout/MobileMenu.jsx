import { Link, NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "الرئيسية", end: true },
  { to: "/blog", label: "المدونة", end: false },
  { to: "/about", label: "من نحن", end: false },
];

function MobileMenu({ isOpen, onClose }) {
  return (
    <div
      className={`md:hidden overflow-hidden transition-all duration-300 ${
        isOpen ? "max-h-80 pb-6 px-4" : "max-h-0"
      }`}
    >
      <div className="bg-surface backdrop-blur-xl rounded-2xl p-4 border border-border">
        <div className="flex flex-col space-y-1">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              onClick={onClose}
              className={({ isActive }) =>
                `px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-primary-tint text-primary border border-primary-border-tint"
                    : "text-text-muted hover:bg-surface-secondary hover:text-text"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/blog"
            onClick={onClose}
            className="btn-primary text-sm text-center mt-2"
          >
            ابدأ القراءة
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
