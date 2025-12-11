import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        return savedTheme === "dark";
      }
      return true; // Default to dark
    }
    return true;
  });

  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const toggleDarkMode = () => setIsDark(!isDark);

  return (
    <header className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-md shadow-md border-b border-gray-800 transition-colors duration-300">
      <nav className="container mx-auto flex items-center justify-between px-4 py-3">
        <h2 className="text-2xl font-bold text-blue-400 font-mono">
          &lt;Akash /&gt;
        </h2>
        <div className="hidden md:flex space-x-6 items-center">
          <ScrollLink
            to="mainy"
            spy={true}
            smooth={true}
            offset={-80}
            duration={600}
            className="cursor-pointer text-gray-300 hover:text-blue-400 transition font-medium text-sm uppercase tracking-wide"
          >
            Home
          </ScrollLink>
          <ScrollLink
            to="aboutMey"
            spy={true}
            smooth={true}
            offset={-80}
            duration={600}
            className="cursor-pointer text-gray-300 hover:text-blue-400 transition font-medium text-sm uppercase tracking-wide"
          >
            About Me
          </ScrollLink>
          <ScrollLink
            to="services"
            spy={true}
            smooth={true}
            offset={-80}
            duration={600}
            className="cursor-pointer text-gray-300 hover:text-blue-400 transition font-medium text-sm uppercase tracking-wide"
          >
            Services
          </ScrollLink>
          <ScrollLink
            to="skills"
            spy={true}
            smooth={true}
            offset={-80}
            duration={600}
            className="cursor-pointer text-gray-300 hover:text-blue-400 transition font-medium text-sm uppercase tracking-wide"
          >
            Skills
          </ScrollLink>
          <ScrollLink
            to="project"
            spy={true}
            smooth={true}
            offset={-80}
            duration={600}
            className="cursor-pointer text-gray-300 hover:text-blue-400 transition font-medium text-sm uppercase tracking-wide"
          >
            Projects
          </ScrollLink>
          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            offset={-80}
            duration={600}
            className="cursor-pointer text-gray-300 hover:text-blue-400 transition font-medium text-sm uppercase tracking-wide"
          >
            Contact
          </ScrollLink>

          {/* Toggle Button */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-800 text-yellow-400 hover:bg-gray-700 transition"
            aria-label="Toggle Theme"
          >
            {isDark ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.95l-.71.71M21 12h-1M4 12H3m16.66 5.66l-.71-.71M4.05 4.05l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
        </div>

        {/* Hamburger for mobile */}
        <button
          className="md:hidden flex flex-col space-y-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="w-6 h-0.5 bg-gray-200"></span>
          <span className="w-6 h-0.5 bg-gray-200"></span>
          <span className="w-6 h-0.5 bg-gray-200"></span>
        </button>
        {/* Mobile menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-gray-900 shadow-md flex flex-col items-center py-4 md:hidden">
            <ScrollLink
              to="mainy"
              spy={true}
              smooth={true}
              offset={-80}
              duration={600}
              className="py-2 w-full text-center text-gray-200 hover:text-blue-400 transition font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </ScrollLink>
            <ScrollLink
              to="aboutMey"
              spy={true}
              smooth={true}
              offset={-80}
              duration={600}
              className="py-2 w-full text-center text-gray-200 hover:text-blue-400 transition font-medium"
              onClick={() => setMenuOpen(false)}
            >
              About Me
            </ScrollLink>
            <ScrollLink
              to="skills"
              spy={true}
              smooth={true}
              offset={-80}
              duration={600}
              className="py-2 w-full text-center text-gray-200 hover:text-blue-400 transition font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Skills
            </ScrollLink>
            <ScrollLink
              to="project"
              spy={true}
              smooth={true}
              offset={-80}
              duration={600}
              className="py-2 w-full text-center text-gray-200 hover:text-blue-400 transition font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </ScrollLink>
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              offset={-80}
              duration={600}
              className="py-2 w-full text-center text-gray-200 hover:text-blue-400 transition font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Contact Me
            </ScrollLink>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
