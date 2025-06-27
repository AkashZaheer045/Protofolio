import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(() =>
    typeof window !== "undefined"
      ? document.documentElement.classList.contains("dark")
      : false
  );

  const toggleDarkMode = () => {
    const html = document.documentElement;
    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      setIsDark(false);
    } else {
      html.classList.add("dark");
      setIsDark(true);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur shadow-md">
      <nav className="container mx-auto flex items-center justify-between px-4 py-3">
        <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          Portfolio
        </h2>
        <div className="hidden md:flex space-x-6">
          <ScrollLink
            to="mainy"
            spy={true}
            smooth={true}
            offset={-80}
            duration={600}
            className="cursor-pointer text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition font-medium"
          >
            Home
          </ScrollLink>
          <ScrollLink
            to="aboutMey"
            spy={true}
            smooth={true}
            offset={-80}
            duration={600}
            className="cursor-pointer text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition font-medium"
          >
            About Me
          </ScrollLink>
          <ScrollLink
            to="skills"
            spy={true}
            smooth={true}
            offset={-80}
            duration={600}
            className="cursor-pointer text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition font-medium"
          >
            Skills
          </ScrollLink>
          <ScrollLink
            to="project"
            spy={true}
            smooth={true}
            offset={-80}
            duration={600}
            className="cursor-pointer text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition font-medium"
          >
            Projects
          </ScrollLink>
          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            offset={-80}
            duration={600}
            className="cursor-pointer text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition font-medium"
          >
            Contact Me
          </ScrollLink>
        </div>
        {/* Dark/Light mode toggle button */}
        <button
          onClick={toggleDarkMode}
          className="ml-4 p-2 rounded-full border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          aria-label="Toggle dark mode"
        >
          {isDark ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.95l-.71.71M21 12h-1M4 12H3m16.66 5.66l-.71-.71M4.05 4.05l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
              />
            </svg>
          )}
        </button>
        {/* Hamburger for mobile */}
        <button
          className="md:hidden flex flex-col space-y-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="w-6 h-0.5 bg-gray-700 dark:bg-gray-200"></span>
          <span className="w-6 h-0.5 bg-gray-700 dark:bg-gray-200"></span>
          <span className="w-6 h-0.5 bg-gray-700 dark:bg-gray-200"></span>
        </button>
        {/* Mobile menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-md flex flex-col items-center py-4 md:hidden">
            <ScrollLink
              to="mainy"
              spy={true}
              smooth={true}
              offset={-80}
              duration={600}
              className="py-2 w-full text-center text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition font-medium"
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
              className="py-2 w-full text-center text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition font-medium"
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
              className="py-2 w-full text-center text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition font-medium"
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
              className="py-2 w-full text-center text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition font-medium"
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
              className="py-2 w-full text-center text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition font-medium"
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
