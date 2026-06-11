import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const NAV_LINKS = [
  { label: "Home",          path: "/" },
  { label: "About Us",      path: "/about" },
  { label: "Products",      path: "/products" },
  { label: "Our Farm",      path: "/farm" },
  { label: "Process",       path: "/process" },
  { label: "Gallery",       path: "/gallery" },
  { label: "Testimonials",  path: "/testimonials" },
  { label: "Contact Us",    path: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen]     = useState(false);
  const [scrolled, setScrolled]     = useState(false);
  const location                    = useLocation();

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  // Add shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Lato:wght@400;600;700&display=swap');

        .ssdf-nav {
          position: sticky;
          top: 0;
          z-index: 1000;
          background: #ffffff;
          font-family: 'Lato', sans-serif;
          transition: box-shadow 0.3s ease;
        }
        .ssdf-nav.scrolled {
          box-shadow: 0 2px 20px rgba(45, 122, 45, 0.15);
        }

        /* ── Top strip ── */
        .ssdf-top-strip {
          background: linear-gradient(90deg, #1a4a1a, #2d7a2d);
          color: #fff;
          font-size: 12px;
          text-align: center;
          padding: 5px 20px;
          letter-spacing: 0.4px;
        }
        .ssdf-top-strip span { opacity: 0.85; }
        .ssdf-top-strip a { color: #a8f0a8; text-decoration: none; margin-left: 6px; }

        /* ── Main bar ── */
        .ssdf-main-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 32px;
          height: 68px;
          border-bottom: 1px solid #e8f0e8;
          max-width: 1280px;
          margin: 0 auto;
        }

        /* ── Logo ── */
        .ssdf-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          flex-shrink: 0;
        }
        .ssdf-logo-icon {
          width: 46px;
          height: 46px;
          background: linear-gradient(135deg, #1a4a1a, #2d7a2d);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          color: #fff;
          box-shadow: 0 3px 10px rgba(45,122,45,0.3);
          flex-shrink: 0;
        }
        .ssdf-logo-text { line-height: 1.15; }
        .ssdf-logo-text .name {
          font-family: 'Playfair Display', serif;
          font-size: 17px;
          font-weight: 700;
          color: #1a4a1a;
          display: block;
        }
        .ssdf-logo-text .tagline {
          font-size: 9.5px;
          font-weight: 700;
          color: #2d7a2d;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        /* ── Desktop nav links ── */
        .ssdf-links {
          display: flex;
          align-items: center;
          gap: 2px;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .ssdf-links li a {
          display: block;
          padding: 6px 11px;
          font-size: 13.5px;
          font-weight: 600;
          color: #333;
          text-decoration: none;
          border-radius: 6px;
          position: relative;
          transition: color 0.2s, background 0.2s;
          white-space: nowrap;
        }
        .ssdf-links li a::after {
          content: '';
          position: absolute;
          bottom: 2px;
          left: 11px;
          right: 11px;
          height: 2px;
          background: #2d7a2d;
          border-radius: 2px;
          transform: scaleX(0);
          transition: transform 0.25s ease;
        }
        .ssdf-links li a:hover {
          color: #2d7a2d;
          background: #f0f9f0;
        }
        .ssdf-links li a:hover::after,
        .ssdf-links li a.active::after {
          transform: scaleX(1);
        }
        .ssdf-links li a.active {
          color: #2d7a2d;
          background: #edf7ed;
        }

        /* ── "Our Farm" highlight ── */
        .ssdf-links li a.farm-link {
          color: #1a4a1a;
          background: linear-gradient(135deg, #e8f5e8, #d0ecd0);
          border: 1.5px solid #b0ddb0;
        }
        .ssdf-links li a.farm-link:hover,
        .ssdf-links li a.farm-link.active {
          background: linear-gradient(135deg, #2d7a2d, #1a4a1a);
          color: #fff;
          border-color: transparent;
        }
        .ssdf-links li a.farm-link::after { display: none; }

        /* ── Hamburger ── */
        .ssdf-hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          background: none;
          border: none;
          padding: 6px;
          border-radius: 8px;
          transition: background 0.2s;
        }
        .ssdf-hamburger:hover { background: #f0f9f0; }
        .ssdf-hamburger span {
          display: block;
          width: 24px;
          height: 2.5px;
          background: #1a4a1a;
          border-radius: 2px;
          transition: all 0.3s ease;
        }
        .ssdf-hamburger.open span:nth-child(1) {
          transform: translateY(7.5px) rotate(45deg);
        }
        .ssdf-hamburger.open span:nth-child(2) {
          opacity: 0;
          transform: scaleX(0);
        }
        .ssdf-hamburger.open span:nth-child(3) {
          transform: translateY(-7.5px) rotate(-45deg);
        }

        /* ── Mobile drawer ── */
        .ssdf-drawer {
          display: none;
          flex-direction: column;
          padding: 12px 20px 20px;
          border-top: 1px solid #e8f0e8;
          background: #fff;
          gap: 4px;
          animation: slideDown 0.25s ease;
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ssdf-drawer.open { display: flex; }
        .ssdf-drawer a {
          display: flex;
          align-items: center;
          padding: 11px 14px;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 600;
          color: #333;
          text-decoration: none;
          transition: background 0.2s, color 0.2s;
        }
        .ssdf-drawer a:hover,
        .ssdf-drawer a.active {
          background: #edf7ed;
          color: #2d7a2d;
        }
        .ssdf-drawer a.farm-link-mobile {
          background: linear-gradient(135deg, #e8f5e8, #d0ecd0);
          color: #1a4a1a;
          border: 1.5px solid #b0ddb0;
          margin-top: 4px;
        }
        .ssdf-drawer a.farm-link-mobile:hover,
        .ssdf-drawer a.farm-link-mobile.active {
          background: linear-gradient(135deg, #2d7a2d, #1a4a1a);
          color: #fff;
          border-color: transparent;
        }
        .ssdf-drawer a .dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #2d7a2d;
          margin-right: 10px;
          flex-shrink: 0;
        }

        /* ── Responsive breakpoint ── */
        @media (max-width: 900px) {
          .ssdf-links    { display: none; }
          .ssdf-hamburger { display: flex; }
          .ssdf-main-bar { padding: 0 20px; }
        }
      `}</style>

      <nav className={`ssdf-nav${scrolled ? " scrolled" : ""}`} role="navigation" aria-label="Main navigation">

        {/* Top info strip */}
        <div className="ssdf-top-strip">
          <span>🥛 Pure Milk, Healthy Life &nbsp;|&nbsp; 📞 +91 98765 43210 &nbsp;|&nbsp;</span>
          <a href="mailto:info@shreeshyamdairyfarm.com">info@shreeshyamdairyfarm.com</a>
        </div>

        {/* Main bar */}
        <div className="ssdf-main-bar">

          {/* Logo */}
          <NavLink to="/" className="ssdf-logo" aria-label="Shree Shyam Dairy Farm – Home">
            <div className="ssdf-logo-icon">🐄</div>
            <div className="ssdf-logo-text">
              <span className="name">Shree Shyam</span>
              <span className="tagline">Dairy Farm</span>
            </div>
          </NavLink>

          {/* Desktop links */}
          <ul className="ssdf-links" role="menubar">
            {NAV_LINKS.map(({ label, path }) => (
              <li key={path} role="none">
                <NavLink
                  to={path}
                  role="menuitem"
                  end={path === "/"}
                  className={({ isActive }) =>
                    [
                      isActive ? "active" : "",
                      path === "/farm" ? "farm-link" : "",
                    ]
                      .filter(Boolean)
                      .join(" ")
                  }
                >
                  {path === "/farm" && "🌾 "}{label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Hamburger button */}
          <button
            className={`ssdf-hamburger${menuOpen ? " open" : ""}`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {/* Mobile drawer */}
        <div className={`ssdf-drawer${menuOpen ? " open" : ""}`} role="menu">
          {NAV_LINKS.map(({ label, path }) => (
            <NavLink
              key={path}
              to={path}
              role="menuitem"
              end={path === "/"}
              className={({ isActive }) =>
                [
                  isActive ? "active" : "",
                  path === "/farm" ? "farm-link-mobile" : "",
                ]
                  .filter(Boolean)
                  .join(" ")
              }
            >
              {path !== "/farm" && <span className="dot" aria-hidden="true" />}
              {path === "/farm" ? "🌾 " : ""}{label}
            </NavLink>
          ))}
        </div>

      </nav>
    </>
  );
}
