import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Force dark mode on mount
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-md shadow-md border-b border-gray-800">
      <nav className="container mx-auto flex items-center justify-between px-4 py-3">
        <h2 className="text-2xl font-bold text-blue-400">
          Portfolio
        </h2>
        <div className="hidden md:flex space-x-6">
          <ScrollLink
            to="mainy"
            spy={true}
            smooth={true}
            offset={-80}
            duration={600}
            className="cursor-pointer text-gray-300 hover:text-blue-400 transition font-medium"
          >
            Home
          </ScrollLink>
          <ScrollLink
            to="aboutMey"
            spy={true}
            smooth={true}
            offset={-80}
            duration={600}
            className="cursor-pointer text-gray-200 hover:text-blue-400 transition font-medium"
          >
            About Me
          </ScrollLink>
          <ScrollLink
            to="skills"
            spy={true}
            smooth={true}
            offset={-80}
            duration={600}
            className="cursor-pointer text-gray-200 hover:text-blue-400 transition font-medium"
          >
            Skills
          </ScrollLink>
          <ScrollLink
            to="project"
            spy={true}
            smooth={true}
            offset={-80}
            duration={600}
            className="cursor-pointer text-gray-200 hover:text-blue-400 transition font-medium"
          >
            Projects
          </ScrollLink>
          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            offset={-80}
            duration={600}
            className="cursor-pointer text-gray-200 hover:text-blue-400 transition font-medium"
          >
            Contact Me
          </ScrollLink>
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
