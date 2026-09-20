import React, { useState, useEffect } from "react";
import logo from "../../assets/img/logo.png";
import logo1 from "../../assets/img/logo-1.png";

const servicesList = [
  { label: "Développement Web & Mobile", href: "#services" },
  { label: "Solutions IA & Data", href: "#services" },
  { label: "Automatisation", href: "#services" },
  { label: "Conseil & Audit Digital", href: "#services" },
];

const navigationList = [
  { label: "À propos", href: "#about-us" },
  { label: "Nos Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Témoignages", href: "#testimonial" },
  { label: "Contact", href: "#contact" },
];

const companyList = [
  { label: "IBAH Agency", href: "#" },
  { label: "Politique de confidentialité", href: "#" },
  { label: "Conditions d'utilisation", href: "#" },
  { label: "Mentions Légales", href: "#" },
];

const socials = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "X (Twitter)",
    href: "https://twitter.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/taha-allay-baa0a72a9/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };

    // Initial check
    checkDarkMode();

    // Listen for custom event from dark mode toggle
    window.addEventListener('darkModeChange', checkDarkMode);

    // Also listen for DOM changes (mutation observer)
    const observer = new MutationObserver(() => {
      checkDarkMode();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => {
      window.removeEventListener('darkModeChange', checkDarkMode);
      observer.disconnect();
    };
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <>
      <style>{`
        .footer-root {
          background: #f8fafc;
          color: #475569;
          font-family: 'Montserrat', sans-serif;
          position: relative;
          overflow: hidden;
          padding-top: 80px;
          padding-bottom: 32px;
          border-top: 1px solid #e2e8f0;
        }

        .footer-root::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #A44C4C, transparent);
        }

        .footer-glow {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 600px;
          height: 160px;
          pointer-events: none;
          background: radial-gradient(ellipse, rgba(164, 76, 76, 0.06) 0%, transparent 70%);
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
          position: relative;
          z-index: 10;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 4fr 2fr 2fr 2fr 3fr;
          gap: 40px;
          margin-bottom: 60px;
        }

        .footer-brand-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }

        .footer-logo-img {
          height: 44px;
          width: auto;
          object-fit: contain;
        }

        .footer-logo-text {
          font-size: 1.5rem;
          font-weight: 700;
          color: #0f172a;
          letter-spacing: -0.5px;
          text-transform: uppercase;
        }

        .footer-desc {
          font-size: 0.88rem;
          color: #64748b;
          line-height: 1.7;
          margin-bottom: 24px;
          max-width: 320px;
        }

        .footer-socials {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .footer-social-btn {
          width: 38px;
          height: 38px;
          border-radius: 8px;
          border: 1px solid #cbd5e1;
          background: #F8F7F5;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #475569;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);
        }

        .footer-social-btn svg {
          width: 16px;
          height: 16px;
        }

        .footer-social-btn:hover {
          border-color: #A44C4C;
          color: #A44C4C;
          background: rgba(164, 76, 76, 0.1);
          transform: translateY(-3px);
          box-shadow: 0 4px 10px rgba(164, 76, 76, 0.15);
        }

        .footer-heading {
          font-size: 0.72rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #A44C4C;
          font-weight: 700;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .footer-heading::after {
          content: '';
          flex: 1;
          height: 1px;
          background: rgba(164, 76, 76, 0.3);
        }

        .footer-links-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-links-list li {
          margin-bottom: 8px;
        }

        .footer-link {
          display: inline-block;
          font-size: 0.85rem;
          color: #475569;
          text-decoration: none;
          transition: all 0.25s ease;
          position: relative;
          font-weight: 500;
        }

        .footer-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background: #A44C4C;
          transition: width 0.3s ease;
        }

        .footer-link:hover {
          color: #A44C4C;
          transform: translateX(4px);
        }

        .footer-link:hover::after {
          width: 100%;
        }

        .footer-newsletter-text {
          font-size: 0.7rem;
          color: #0f172a;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .footer-input {
          background: #F8F7F5;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          padding: 12px 14px;
          width: 100%;
          color: #0f172a;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.85rem;
          outline: none;
          transition: all 0.3s ease;
          box-sizing: border-box;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02);
        }

        .footer-input::placeholder {
          color: #94a3b8;
        }

        .footer-input:focus {
          border-color: #A44C4C;
          box-shadow: 0 0 0 3px rgba(164, 76, 76, 0.15);
        }

        .footer-sub-btn {
          background: #A44C4C;
          color: #ffffff;
          border: none;
          border-radius: 8px;
          padding: 12px;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 10px;
          width: 100%;
        }

        .footer-sub-btn:hover {
          background: #883838;
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(164, 76, 76, 0.25);
        }

        .footer-subscribed-msg {
          font-size: 0.75rem;
          color: #A44C4C;
          margin-top: 10px;
          font-weight: 600;
        }

        .footer-bottom {
          border-top: 1px solid #e2e8f0;
          padding-top: 28px;
          text-align: center;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: #64748b;
        }

        .footer-year {
          color: #A44C4C;
          font-weight: 700;
        }

        .footer-author-link {
          color: #A44C4C;
          text-decoration: none;
          text-transform: none;
          font-weight: 600;
          transition: color 0.3s ease;
        }

        .footer-author-link:hover {
          color: #0f172a;
        }

        @media (max-width: 992px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 36px;
          }
          .footer-container {
            padding: 0 24px;
          }
        }

        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .footer-root {
            padding-top: 60px;
          }
        }
      `}</style>

      <footer className="footer-root">
        <div className="footer-glow" />

        <div className="footer-container">
          <div className="footer-grid">
            {/* ── Brand Col ── */}
            <div>
              <div className="footer-brand-logo">
                <img
                  key={isDarkMode ? 'dark' : 'light'}
                  src={isDarkMode ? logo1 : logo}
                  alt="IBAH Agency Logo"
                  className="footer-logo-img"
                />
                <h2 className="footer-logo-text">IBAH Agency</h2>
              </div>
              <p className="footer-desc">
                Votre partenaire digital d'excellence. Nous concevons des applications sur mesure, des plateformes e-commerce et des solutions web innovantes.
              </p>
              <div className="footer-socials">
                {socials.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    className="footer-social-btn"
                    aria-label={s.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* ── Services ── */}
            <div>
              <h5 className="footer-heading">Services</h5>
              <ul className="footer-links-list">
                {servicesList.map((item, i) => (
                  <li key={i}>
                    <a href={item.href} className="footer-link">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Navigation ── */}
            <div>
              <h5 className="footer-heading">Navigation</h5>
              <ul className="footer-links-list">
                {navigationList.map((item, i) => (
                  <li key={i}>
                    <a href={item.href} className="footer-link">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Company ── */}
            <div>
              <h5 className="footer-heading">Agence</h5>
              <ul className="footer-links-list">
                {companyList.map((item, i) => (
                  <li key={i}>
                    <a href={item.href} className="footer-link">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Newsletter ── */}
            <div>
              <h5 className="footer-heading">Newsletter</h5>
              <p className="footer-newsletter-text">Restez informé de nos actualités</p>
              <form onSubmit={handleSubscribe}>
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="footer-input"
                />
                <button type="submit" className="footer-sub-btn">
                  S'ABONNER
                </button>
              </form>
              {subscribed && (
                <p className="footer-subscribed-msg">✓ Merci pour votre inscription !</p>
              )}
            </div>
          </div>

          {/* ── Bottom Bar ── */}
          <div className="footer-bottom">
            <p>
              &copy; {year} <span className="footer-year">IBAH Agency</span>. Tous droits réservés. | Développé par{" "}
              <a
                href="https://www.linkedin.com/in/taha-allay-baa0a72a9/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-author-link"
              >
                Taha Allay
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
