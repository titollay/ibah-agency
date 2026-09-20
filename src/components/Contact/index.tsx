import React, { useState } from "react";
import { motion } from "framer-motion";
import img1 from "../../assets/webp/ibah.webp";

const contactInfo = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
        />
      </svg>
    ),
    label: "Téléphone",
    value: "0676892376",
    href: "tel:0676892376",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
        />
      </svg>
    ),
    label: "Email",
    value: "tahaallay123@gmail.com",
    href: "mailto:tahaallay123@gmail.com",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    label: "LinkedIn",
    value: "Taha Allay",
    href: "https://www.linkedin.com/in/taha-allay-baa0a72a9/",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
        />
      </svg>
    ),
    label: "Localisation",
    value: "Oujda, Maroc",
    href: "#",
  },
];

const socials = [
  {
    label: "FB",
    href: "#!",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "#!",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "LI",
    href: "https://www.linkedin.com/in/taha-allay-baa0a72a9/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
      <style>{`
        .contact-root {
          font-family: 'Montserrat', sans-serif;
          background: #F8F7F5;
          color: #111827;
          position: relative;
          overflow: hidden;
          padding: 90px 40px;
        }

        .contact-container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 10;
        }

        /* ── Section Header (Styled to match Services & About) ── */
        .contact-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .contact-label {
          font-size: 0.75rem;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: #A44C4C;
          font-weight: 700;
          display: inline-block;
          margin-bottom: 8px;
        }

        .contact-title {
          font-size: 2.2rem;
          font-weight: 700;
          color: #000000;
          text-transform: uppercase;
          letter-spacing: -0.5px;
          margin: 0 0 16px;
        }

        .contact-subtitle {
          font-size: 1rem;
          color: #666666;
          max-width: 650px;
          margin: 0 auto;
          line-height: 1.8;
        }

        .contact-grid-top {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          margin-bottom: 80px;
        }

        .map-wrapper {
          height: 380px;
          border-radius: 16px;
          overflow: hidden;
          position: relative;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
        }

        .map-wrapper::after {
          content: '';
          position: absolute;
          inset: 0;
          border: 1px solid rgba(164, 76, 76, 0.3);
          border-radius: 16px;
          pointer-events: none;
          z-index: 2;
        }

        .map-wrapper iframe {
          width: 100%;
          height: 100%;
          border: 0;
          filter: grayscale(1) contrast(0.9) brightness(0.95);
        }

        .contact-info-column {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .contact-info-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 12px;
          color: #111827;
          text-transform: uppercase;
          letter-spacing: -0.3px;
        }

        .contact-info-desc {
          font-size: 0.95rem;
          color: #666666;
          margin-bottom: 24px;
          line-height: 1.6;
        }

        .contact-info-item {
          padding: 18px 0;
          border-bottom: 1px solid #e2e8f0;
          display: flex;
          align-items: center;
          gap: 16px;
          text-decoration: none;
          color: inherit;
          transition: all 0.3s ease;
        }

        .contact-info-item:hover {
          border-bottom-color: #A44C4C;
        }

        .contact-info-item:hover .info-icon {
          background: #A44C4C;
          color: #ffffff;
          border-color: #A44C4C;
        }

        .contact-info-item:hover .info-value {
          color: #A44C4C;
        }

        .info-icon {
          width: 42px;
          height: 42px;
          border: 1px solid #cbd5e1;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.3s ease;
          color: #A44C4C;
          border-radius: 8px;
        }

        .info-icon svg {
          width: 20px;
          height: 20px;
        }

        .info-label {
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #64748b;
          margin-bottom: 2px;
          font-weight: 600;
        }

        .info-value {
          font-size: 14px;
          color: #334155;
          transition: color 0.3s ease;
          font-weight: 500;
        }

        .socials-row {
          display: flex;
          gap: 12px;
          margin-top: 32px;
        }

        .social-btn {
          width: 40px;
          height: 40px;
          border: 1px solid #cbd5e1;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #64748b;
          text-decoration: none;
          transition: all 0.3s ease;
          border-radius: 8px;
        }

        .social-btn svg {
          width: 16px;
          height: 16px;
        }

        .social-btn:hover {
          border-color: #A44C4C;
          color: #A44C4C;
          background: rgba(164, 76, 76, 0.08);
        }

        .contact-grid-bottom {
          display: grid;
          grid-template-columns: 7fr 5fr;
          gap: 48px;
          align-items: start;
        }

        .contact-form-section {
          border-top: 1px solid #e2e8f0;
          padding-top: 40px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          margin-bottom: 32px;
        }

        .input-group {
          display: flex;
          flex-direction: column;
        }

        .input-label {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: #64748b;
          margin-bottom: 12px;
          font-weight: 600;
        }

        .line-input {
          background: transparent;
          border: none;
          border-bottom: 1px solid #cbd5e1;
          outline: none;
          width: 100%;
          padding: 12px 0;
          color: #0f172a;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.9rem;
          transition: border-color 0.3s ease;
        }

        .line-input::placeholder {
          color: #94a3b8;
        }

        .line-input:focus {
          border-bottom-color: #A44C4C;
        }

        .line-textarea {
          background: transparent;
          border: none;
          border-bottom: 1px solid #cbd5e1;
          outline: none;
          width: 100%;
          padding: 12px 0;
          color: #0f172a;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.9rem;
          resize: none;
          transition: border-color 0.3s ease;
          margin-bottom: 32px;
        }

        .line-textarea::placeholder {
          color: #94a3b8;
        }

        .line-textarea:focus {
          border-bottom-color: #A44C4C;
        }

        .submit-btn {
          position: relative;
          display: inline-block;
          padding: 14px 36px;
          overflow: hidden;
          border-radius: 8px;
          border: 1px solid #A44C4C;
          background: transparent;
          cursor: pointer;
          font-family: 'Montserrat', sans-serif;
        }

        .submit-btn-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 0%;
          height: 100%;
          background: #A44C4C;
          transition: width 0.4s ease;
        }

        .submit-btn:hover .submit-btn-bg {
          width: 100%;
        }

        .submit-btn-text {
          position: relative;
          z-index: 10;
          font-size: 13px;
          font-weight: 700;
          color: #A44C4C;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          transition: color 0.4s ease;
        }

        .submit-btn:hover .submit-btn-text {
          color: #ffffff;
        }

        .success-box {
          border: 1px solid rgba(164, 76, 76, 0.4);
          background: rgba(164, 76, 76, 0.08);
          padding: 32px;
          text-align: center;
          border-radius: 12px;
        }

        .success-title {
          font-size: 20px;
          font-weight: 700;
          color: #A44C4C;
          margin-bottom: 8px;
        }

        .success-desc {
          font-size: 14px;
          color: #64748b;
        }

        .image-card {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
        }

        .image-corner-tl {
          position: absolute;
          top: -12px;
          left: -12px;
          width: 96px;
          height: 96px;
          border-top: 2px solid rgba(164, 76, 76, 0.6);
          border-left: 2px solid rgba(164, 76, 76, 0.6);
          pointer-events: none;
          z-index: 10;
        }

        .image-corner-br {
          position: absolute;
          bottom: -12px;
          right: -12px;
          width: 96px;
          height: 96px;
          border-bottom: 2px solid rgba(164, 76, 76, 0.6);
          border-right: 2px solid rgba(164, 76, 76, 0.6);
          pointer-events: none;
          z-index: 10;
        }

        .image-card img {
          width: 100%;
          height: 440px;
          object-fit: cover;
          filter: grayscale(30%) brightness(0.85);
          display: block;
        }

        .image-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 24px;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
        }

        .image-overlay-text {
          font-size: 13px;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.9);
          text-transform: uppercase;
          letter-spacing: 0.25em;
        }

        @media (max-width: 992px) {
          .contact-root {
            padding: 60px 20px;
          }
          .contact-grid-top, .contact-grid-bottom {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .form-row {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .contact-title {
            font-size: 1.8rem;
          }
          .image-card img {
            height: 320px;
          }
        }
      `}</style>

      <section id="contact" className="contact-root">
        <div className="contact-container">
          {/* ── HEADER (Aligned with Services & About design) ── */}
          <motion.div
            className="contact-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="contact-label">CONTACTEZ-NOUS</span>
            <h2 className="contact-title">PARLONS DE VOTRE PROJET</h2>
            <p className="contact-subtitle">
              Des questions sur nos services ou votre projet digital ? Contactez l'équipe IBAH Agency dès aujourd'hui. Nous sommes à votre écoute pour concrétiser vos idées.
            </p>
          </motion.div>

          {/* ── TOP GRID: Map + Contact Info ── */}
          <div className="contact-grid-top">
            {/* Map */}
            <motion.div
              className="map-wrapper"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <iframe
                title="Google Maps Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.4239849201!2d-1.9213500000000002!3d34.68141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7864a66a7a0000%3A0x0!2zT3VqZGEsIE1hcm9j!5e0!3m2!1sfr!2sma!4v1693123456789"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="contact-info-column"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div>
                <h3 className="contact-info-title">RESTONS EN CONTACT</h3>
                <p className="contact-info-desc">
                  Notre équipe est à votre entière disposition pour répondre à toutes vos demandes et vous accompagner dans la réussite de vos projets digitaux.
                </p>

                <div>
                  {contactInfo.map((item, i) => (
                    <a
                      key={i}
                      href={item.href}
                      className="contact-info-item"
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      <div className="info-icon">{item.icon}</div>
                      <div>
                        <div className="info-label">{item.label}</div>
                        <div className="info-value">{item.value}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Socials */}
              <div className="socials-row">
                {socials.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    className="social-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── BOTTOM: Form + Image ── */}
          <div className="contact-grid-bottom">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="contact-form-section">
                <span className="contact-label" style={{ marginBottom: "12px" }}>ENVOYEZ UN MESSAGE</span>
                <h3 className="contact-info-title" style={{ fontSize: "28px", marginBottom: "28px" }}>
                  ÉCRIVEZ-NOUS
                </h3>

                {submitted ? (
                  <motion.div
                    className="success-box"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <p className="success-title">Merci !</p>
                    <p className="success-desc">
                      Votre message a été envoyé avec succès. L'équipe IBAH Agency vous répondra dans les plus brefs délais.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="form-row">
                      <div className="input-group">
                        <label className="input-label">NOM COMPLET</label>
                        <input
                          type="text"
                          placeholder="Ex: Jean Dupont"
                          required
                          className="line-input"
                          value={formState.name}
                          onChange={(e) =>
                            setFormState({ ...formState, name: e.target.value })
                          }
                        />
                      </div>
                      <div className="input-group">
                        <label className="input-label">ADRESSE EMAIL</label>
                        <input
                          type="email"
                          placeholder="exemple@email.com"
                          required
                          className="line-input"
                          value={formState.email}
                          onChange={(e) =>
                            setFormState({
                              ...formState,
                              email: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>

                    <div className="input-group">
                      <label className="input-label">VOTRE MESSAGE</label>
                      <textarea
                        rows={5}
                        placeholder="Expliquez-nous votre projet ou votre besoin..."
                        required
                        className="line-textarea"
                        value={formState.message}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            message: e.target.value,
                          })
                        }
                      />
                    </div>

                    <button type="submit" className="submit-btn">
                      <span className="submit-btn-bg" />
                      <span className="submit-btn-text">ENVOYER LE MESSAGE →</span>
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                delay: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="image-card">
                <div className="image-corner-tl" />
                <div className="image-corner-br" />
                <img src={img1} alt="Contact IBAH Agency" />
                <div className="image-overlay">
                  <p className="image-overlay-text">IBAH AGENCY</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
