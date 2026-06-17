import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Our Farm", path: "/farm" },
  { label: "Products", path: "/products" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
        <div className="navbar__inner">

          {/* Logo */}
          <Link to="/" className="navbar__logo">
            <div className="navbar__logo-name">Shree Shyam Dairy</div>
          </Link>

          {/* Desktop Navbar */}
          <ul className="navbar__links">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`navbar__link ${isActive ? "navbar__link--active" : ""}`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Hamburger */}
          <button
            className="navbar__hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`navbar__bar ${menuOpen ? "navbar__bar--top-open" : ""}`} />
            <span className={`navbar__bar ${menuOpen ? "navbar__bar--mid-open" : ""}`} />
            <span className={`navbar__bar ${menuOpen ? "navbar__bar--bot-open" : ""}`} />
          </button>
        </div>

        {/* Mobile Navbar Menu */}
        {menuOpen && (
          <div className="navbar__mobile-menu">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`navbar__mobile-link ${isActive ? "navbar__mobile-link--active" : ""}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        )}
      </nav>

      {/* Spacer */}
      <div className="navbar__spacer" />
    </>
  );
}

export default Navbar;