import { useState } from 'react';
import { Bars3CenterLeftIcon } from '@heroicons/react/24/outline';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="navbar font-medium flex justify-between items-center">
      <div className="logo">
        <Link to="/">APRN</Link>
      </div>

      <button className="md:hidden" title="Menu" onClick={toggleMenu}>
        <Bars3CenterLeftIcon className="h-6 w-6 rotate-180" />
      </button>

      <ul className="hidden md:flex gap-6">
        <li
          className={`relative group ${
            isActive('/') || isActive('/home')
              ? 'text-purple-900 border-b-2 border-purple-900'
              : ''
          }`}
        >
          <Link to="/" className="navbar-li-text">
            Home
          </Link>
          <div className="navbar-li-hover"></div>
        </li>
        <li
          className={`relative group ${
            isActive('/about')
              ? 'text-purple-900 border-b-2 border-purple-900'
              : ''
          }`}
        >
          <Link to="/about" className="navbar-li-text">
            About
          </Link>
          <div className="navbar-li-hover"></div>
        </li>
        <li
          className={`relative group ${
            isActive('/people')
              ? 'text-purple-900 border-b-2 border-purple-900'
              : ''
          }`}
        >
          <Link to="/people" className="navbar-li-text">
            People
          </Link>
          <div className="navbar-li-hover"></div>
        </li>
        <li
          className={`relative group ${
            isActive('/publications')
              ? 'text-purple-900 border-b-2 border-purple-900'
              : ''
          }`}
        >
          <Link to="/publications" className="navbar-li-text">
            Publications
          </Link>
          <div className="navbar-li-hover"></div>
        </li>
        <li
          className={`relative group ${
            isActive('/contact')
              ? 'text-purple-900 border-b-2 border-purple-900'
              : ''
          }`}
        >
          <Link to="/contact" className="navbar-li-text">
            Contact
          </Link>
          <div className="navbar-li-hover"></div>
        </li>
      </ul>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 p-4 md:hidden">
          <div className="flex justify-end">
            <button
              onClick={toggleMenu}
              className="bg-orange-50 p-2 rounded-lg"
            >
              Close
            </button>
          </div>
          <ul className="flex flex-col gap-4 mt-6">
            <li>
              <Link
                to="/"
                onClick={toggleMenu}
                className="hover:text-purple-900"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={toggleMenu}
                className={`hover:text-purple-900 `}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/people"
                onClick={toggleMenu}
                className="hover:text-purple-900"
              >
                People
              </Link>
            </li>
            <li>
              <Link
                to="/publications"
                onClick={toggleMenu}
                className="hover:text-purple-900"
              >
                Publications
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={toggleMenu}
                className="hover:text-purple-900"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
