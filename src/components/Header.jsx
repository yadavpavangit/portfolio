import { NavLink } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { useState, useEffect } from "react";

function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`w-full sticky top-0 z-50 backdrop-blur-md transition-all duration-300 ${
        isScrolled ? "bg-[#557372]/20 shadow-lg" : "bg-gray-900"
      }`}
    >
      <nav className="flex justify-between px-3 md:px-10 lg:px-20 py-5">
        <h2
          className={`text-xl font-semibold transition-colors duration-300 ${
            isScrolled ? "text-[#F3EFEA]" : "text-white/80"
          }`}
        >
          Pavan <span className="text-lg font-medium">Dev.</span>
        </h2>
        <div
          className={`hidden sm:flex items-center gap-5 text-xl font-semibold transition-colors duration-300 ${
            isScrolled ? "text-[#F3EFEA]" : "text-white/80"
          }`}
        >
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/projects">projects</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
        </div>
        {menuIsOpen ? (
          <RxCross1
            className={`block sm:hidden transition-colors duration-300 ${
              isScrolled ? "text-[#F3EFEA]" : "text-white/80"
            }`}
            onClick={() => setMenuIsOpen(!menuIsOpen)}
          />
        ) : (
          <CiMenuFries
            className={`block sm:hidden transition-colors duration-300 ${
              isScrolled ? "text-[#F3EFEA]" : "text-white/80"
            }`}
            onClick={() => setMenuIsOpen(!menuIsOpen)}
          />
        )}
      </nav>
      {/* MOBILE NAVBAR BACKDROP */}
      {menuIsOpen && (
        <div
          className="fixed inset-0 backdrop-blur-sm z-40 sm:hidden"
          onClick={() => setMenuIsOpen(false)}
        />
      )}
      {/* MOBILE NAVBAR */}
      <div
        className={`flex flex-col w-full h-109 justify-center bg-blue-400/90 sm:hidden fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-5 transition-all duration-500 z-50 text-xl font-semibold ${menuIsOpen ? "opacity-100 top-70" : "translate-x-full opacity-0 pointer-events-none"} ${
          isScrolled ? "text-[#F3EFEA]" : "text-white/80"
        }`}
      >
        <NavLink to="/" onClick={() => setMenuIsOpen(false)}>
          Home
        </NavLink>
        <NavLink to="/about" onClick={() => setMenuIsOpen(false)}>
          About
        </NavLink>
        <NavLink to="/projects" onClick={() => setMenuIsOpen(false)}>
          projects
        </NavLink>
        <NavLink to="/contact" onClick={() => setMenuIsOpen(false)}>
          Contact Us
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
