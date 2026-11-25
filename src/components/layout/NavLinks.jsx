import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "الرئيسية", end: true },
  { to: "/blog", label: "المدونة", end: false },
  { to: "/about", label: "من نحن", end: false },
];

function NavLinks({ onLinkClick }) {
  return (
    <>
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          end={link.end}
          onClick={onLinkClick}
          className={({ isActive }) =>
            `px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              isActive
                ? "bg-gradient-to-r from-primary-from to-primary-to text-text font-bold"
                : "text-text-muted hover:text-text"
            }`
          }
        >
          {link.label}
        </NavLink>
      ))}
    </>
  );
}

export default NavLinks;
