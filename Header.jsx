import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-gradient-to-r from-orange-600 to-orange-500 shadow-lg">
      {/* Logo */}
      <Link
        to="/"
        className="font-bold text-2xl text-white tracking-wide hover:text-yellow-200 transition"
      >
        Venkat Basket
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:block">
        <ul className="flex space-x-8 text-white font-medium">
          <li>
            <Link className="hover:text-yellow-200 transition" to="/home">
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:text-yellow-200 transition" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="hover:text-yellow-200 transition" to="/blogs">
              Blogs
            </Link>
          </li>
          
        </ul>
      </nav>

      {/* Mobile Nav */}
      {toggleMenu && (
        <nav className="absolute top-16 left-0 w-full bg-gradient-to-r from-orange-600 to-orange-500 md:hidden shadow-lg animate-slideDown">
          <ul className="flex flex-col items-center space-y-6 py-8 text-white font-medium text-lg">
            <li>
              <Link className="hover:text-yellow-200 transition" to="/" onClick={() => setToggleMenu(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:text-yellow-200 transition" to="/about" onClick={() => setToggleMenu(false)}>
                About
              </Link>
            </li>
            <li>
              <Link className="hover:text-yellow-200 transition" to="/blogs" onClick={() => setToggleMenu(false)}>
                Blogs
              </Link>
            </li>
            
          </ul>
        </nav>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setToggleMenu(!toggleMenu)}
        className="block md:hidden text-white focus:outline-none"
        aria-label="Toggle Menu"
      >
        {toggleMenu ? (
          <XMarkIcon className="h-7 w-7" />
        ) : (
          <Bars3Icon className="h-7 w-7" />
        )}
      </button>
    </header>
  );
}
