"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import nasa_icon from "@/app/assets/icons/nasa.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" onClick={closeMenu} className="flex items-center">
              <Image 
                src={nasa_icon} 
                alt="NASA Logo" 
                className="w-12 h-12 lg:w-16 lg:h-16"
                priority
              />
            </Link>
          </div>

          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8 font-semibold text-gray-900">
              <li>
                <a 
                  href="https://api.nasa.gov/" 
                  className="hover:text-nasa-blue transition-colors duration-200 py-2 border-b-2 border-transparent hover:border-nasa-blue"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  NASA API
                </a>
              </li>
              <li>
                <Link href="/about" className="hover:text-nasa-blue transition-colors duration-200 py-2 border-b-2 border-transparent hover:border-nasa-blue">
                  About
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-nasa-blue transition-colors duration-200 py-2 border-b-2 border-transparent hover:border-nasa-blue">
                  Gallery
                </Link>
              </li>
            </ul>
          </nav>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-700 hover:text-nasa-blue hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-nasa-blue transition-colors duration-200"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <span className={`block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
                <span className={`block h-0.5 w-6 bg-current transition duration-300 ease-in-out ${isMenuOpen ? "opacity-0" : "opacity-100"}`} />
                <span className={`block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
              </div>
            </button>
          </div>
        </div>

        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0"}`}>
          <nav className="border-t border-gray-200 pt-4 pb-3">
            <ul className="flex flex-col space-y-3 font-semibold text-gray-900">
              <li>
                <a 
                  href="https://api.nasa.gov/" 
                  className="block py-3 px-4 rounded-lg hover:text-nasa-blue hover:bg-blue-50 transition-all duration-200 border-l-4 border-transparent hover:border-nasa-blue"
                  onClick={closeMenu}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  NASA API
                </a>
              </li>
              <li>
                <Link href="/about" onClick={closeMenu} className="block py-3 px-4 rounded-lg hover:text-nasa-blue hover:bg-blue-50 transition-all duration-200 border-l-4 border-transparent hover:border-nasa-blue">
                  About
                </Link>
              </li>
              <li>
                <Link href="/gallery" onClick={closeMenu} className="block py-3 px-4 rounded-lg hover:text-nasa-blue hover:bg-blue-50 transition-all duration-200 border-l-4 border-transparent hover:border-nasa-blue">
                  Gallery
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {isMenuOpen && <div className="fixed inset-0 z-40 md:hidden" onClick={closeMenu} />}
    </header>
  );
};

export default Header;
