import { Link } from "react-router-dom";
import "./Footer.css";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Our Farm", path: "/farm" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" },
];

const contactInfo = [
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    text: "Shree Shyam Dairy, Dudli Gaon, Dehradun",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.65 3.38 2 2 0 0 1 3.62 1.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l.83-.83a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.73 17z" />
      </svg>
    ),
    text: "+91 8791395799",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    text: "Mon–Sun: 6:00 AM – 8:00 PM",
  },
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__grid">

        {/* Brand Info */}
        <div className="footer__brand">
          <div className="footer__logo">
            <div className="footer__logo-name">Shree Shyam Dairy</div>
          </div>
          <p className="footer__desc">
          Pure, fresh cow milk, straight from our farm to your home. With a focus on quality, hygiene, and freshness, we are proud to provide milk that families can enjoy and trust every day.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer__col">
          <h3 className="footer__heading">Quick Links</h3>
          <nav>
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path} className="footer__link">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div className="footer__col">
          <h3 className="footer__heading">Get In Touch</h3>
          {contactInfo.map((item, i) => (
            <div key={i} className="footer__contact-row">
              <span className="footer__contact-icon">{item.icon}</span>
              <span className="footer__contact-text">{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom-wrap">
        <div className="footer__bottom">
          <p className="footer__copy">© {year} Shree Shyam Dairy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
