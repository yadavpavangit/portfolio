import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black text-gray-300 pt-16 pb-8 px-6 md:px-16 lg:px-24 border-t border-gray-800">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Logo / Brand */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-white">
            Pavan <span className="text-yellow-500">Dev.</span>
          </h2>
          <p className="text-sm text-gray-400 mt-2 max-w-sm">
            Building modern, responsive and interactive web experiences using
            React & Tailwind.
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex gap-8 text-sm font-medium">
          <NavLink
            to="/"
            className="hover:text-yellow-400 transition duration-300"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="hover:text-yellow-400 transition duration-300"
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className="hover:text-yellow-400 transition duration-300"
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className="hover:text-yellow-400 transition duration-300"
          >
            Contact
          </NavLink>
        </nav>

        {/* Social Icons */}
        <div className="flex gap-5 text-xl">
          <a
            href="https://github.com/yadavpavangit"
            target="_blank"
            className="p-3 rounded-full bg-gray-800 hover:bg-yellow-500 hover:text-black transition duration-300 shadow-md hover:scale-110"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/yadavpavan77/"
            target="_blank"
            className="p-3 rounded-full bg-gray-800 hover:bg-yellow-500 hover:text-black transition duration-300 shadow-md hover:scale-110"
          >
            <FaLinkedin />
          </a>
          <a
            href="#"
            className="p-3 rounded-full bg-gray-800 hover:bg-yellow-500 hover:text-black transition duration-300 shadow-md hover:scale-110"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Pavan Yadav. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
