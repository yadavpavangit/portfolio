import { NavLink } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { useState, useEffect } from "react";

function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkStyle =
    "relative hover:text-yellow-400 transition-colors duration-300";

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/70 backdrop-blur-xl shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-10 lg:px-20 py-5">
        {/* LOGO */}
        <h2 className="text-2xl font-bold text-white tracking-wide">
          Pavan <span className="text-yellow-400">Dev.</span>
        </h2>

        {/* DESKTOP NAV */}
        <div className="hidden sm:flex items-center gap-8 text-white font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${navLinkStyle} ${isActive ? "text-yellow-400" : ""}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${navLinkStyle} ${isActive ? "text-yellow-400" : ""}`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `${navLinkStyle} ${isActive ? "text-yellow-400" : ""}`
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${navLinkStyle} ${isActive ? "text-yellow-400" : ""}`
            }
          >
            Contact
          </NavLink>
        </div>

        {/* MOBILE ICONS */}
        <div className="sm:hidden text-white text-2xl cursor-pointer z-50">
          {menuIsOpen ? (
            <RxCross1 onClick={() => setMenuIsOpen(false)} />
          ) : (
            <CiMenuFries onClick={() => setMenuIsOpen(true)} />
          )}
        </div>
      </nav>

      {menuIsOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm sm:hidden"
          onClick={() => setMenuIsOpen(false)}
        />
      )}

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 right-0 h-screen w-64 bg-gray-900 shadow-2xl transform transition-transform duration-500 sm:hidden ${
          menuIsOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col mt-24 items-center gap-8 text-white text-lg font-medium">
          <NavLink to="/" onClick={() => setMenuIsOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/about" onClick={() => setMenuIsOpen(false)}>
            About
          </NavLink>
          <NavLink to="/projects" onClick={() => setMenuIsOpen(false)}>
            Projects
          </NavLink>
          <NavLink to="/contact" onClick={() => setMenuIsOpen(false)}>
            Contact
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default Header;
