import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ─── Testimonials Data ───────────────────────────────────────────────────────
const testimonials = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300",
    name: "Sarah Benali",
    role: "CEO — ALLZY E-Commerce",
    date: "Février 2026",
    stars: 5,
    text: "Excellente plateforme e-commerce ! L'équipe IBAH Agency a totalement réinventé notre boutique en ligne. Les performances et le design sur mesure ont permis de doubler nos conversions en un temps record."
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=300",
    name: "Dr. Karim Alami",
    role: "Directeur — AnalyseMed",
    date: "Janvier 2026",
    stars: 5,
    text: "Une plateforme d'IA médicale intuitive et extrêmement performante. La rapidité de traitement des données et le soin apporté au design de l'interface sont tout simplement remarquables."
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300",
    name: "Leila Tazi",
    role: "Fondatrice — MyCVForge",
    date: "Mars 2026",
    stars: 5,
    text: "Très satisfaite de la création de notre générateur de CV optimisé par l'IA. Le processus a été fluide, l'équipe très réactive et le rendu final dépasse largement nos attentes !"
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300",
    name: "Youssef Berrada",
    role: "Opérations — BusWay App",
    date: "Mars 2026",
    stars: 5,
    text: "Une application mobile de suivi de bus en temps réel d'une réactivité incroyable. Design moderne, code stable et une expérience utilisateur parfaite."
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
    name: "Amal Rochdi",
    role: "Directrice — CRFR Formations",
    date: "Avril 2026",
    stars: 5,
    text: "Le système de gestion des événements et formations créé par IBAH Agency a simplifié l'ensemble de notre workflow. Une qualité de service irréprochable !"
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300",
    name: "Omar Drissi",
    role: "Fondateur — VetCare System",
    date: "Avril 2026",
    stars: 4,
    text: "Excellente méthode de travail, respect des délais et accompagnement technique sur mesure. Notre application Web de gestion vétérinaire fonctionne à la perfection."
  }
];

// ─── Star Rating Helper ──────────────────────────────────────────────────────
function StarRating({ stars }: { stars: number }) {
  return (
    <div className="star-rating">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < stars ? "star active" : "star"}>
          ★
        </span>
      ))}
    </div>
  );
}

// ─── Card Component ──────────────────────────────────────────────────────────
function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <div className="testimonial-card">
      {/* Quote Icon */}
      <span className="card-quote-icon">“</span>

      {/* Stars */}
      <StarRating stars={t.stars} />

      {/* Text */}
      <p className="card-text">{t.text}</p>

      {/* Divider Line */}
      <div className="card-divider" />

      {/* Author Info Row */}
      <div className="card-author-row">
        <img src={t.img} alt={t.name} className="card-avatar" />
        <div className="card-author-info">
          <p className="card-author-name">{t.name}</p>
          <p className="card-author-role">{t.role}</p>
        </div>
        <span className="card-author-date">{t.date}</span>
      </div>
    </div>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────
export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const featuredTestimonials = testimonials.slice(0, 3);
  const wave1Bg = `${process.env.PUBLIC_URL}/svg/wave1.svg`;
  const starBg = `${process.env.PUBLIC_URL}/svg/star.svg`;
  const ppBg = `${process.env.PUBLIC_URL}/svg/pp.svg`;

  // Auto-play slider
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % featuredTestimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [featuredTestimonials.length]);

  return (
    <section id="testimonial" className="testimonials-root">
      {/* Decorative SVG Shapes */}
      <img src={starBg} alt="" className="testimonials-deco-left" />
      <img src={ppBg} alt="" className="testimonials-deco-right" />

      <style>{`
        .testimonials-root {
          position: relative;
          background-color: #F8F7F5;
          padding: 60px 40px 70px;
          font-family: 'Montserrat', sans-serif;
          color: #111827;
          overflow: hidden;
        }

        .testimonials-root::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("${wave1Bg}");
          background-repeat: no-repeat;
          background-position: top center;
          background-size: 100% 60%;
          opacity: 0.9;
          pointer-events: none;
          z-index: 0;
        }

        .testimonials-deco-left {
          position: absolute;
          top: 30px;
          left: 20px;
          width: 150px;
          height: 150px;
          opacity: 0.8;
          pointer-events: none;
          z-index: 2;
          transform: rotate(-10deg);
          transition: transform 0.5s ease;
        }

        .testimonials-deco-right {
          position: absolute;
          top: 30px;
          right: 20px;
          width: 180px;
          height: 180px;
          opacity: 0.8;
          pointer-events: none;
          z-index: 2;
          transform: rotate(15deg);
          transition: transform 0.5s ease;
        }

        .testimonials-wrapper {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 5;
        }

        /* ── Header Layout (Centered like Services & About) ── */
        .testimonials-header {
          text-align: center;
          margin-bottom: 35px;
        }

        .testimonials-subtitle {
          font-size: 0.75rem;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: #FFFFFF;
          font-weight: 700;
          display: inline-block;
          margin-bottom: 10px;
          opacity: 0.9;
        }

        .testimonials-title {
          font-size: 2.2rem;
          font-weight: 800;
          color: #FFFFFF;
          text-transform: uppercase;
          letter-spacing: -0.5px;
          margin: 0 0 16px;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        }

        .testimonials-desc {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.88);
          max-width: 650px;
          margin: 0 auto;
          line-height: 1.8;
          font-weight: 400;
        }

        /* ── Featured Slider Section ── */
        .featured-slider-card {
          position: relative;
          background: #F8F7F5;
          border-radius: 28px;
          margin-bottom: 28px;
          padding: 32px 40px;
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.4);
        }

        .featured-slider-inner {
          display: flex;
          align-items: center;
          gap: 48px;
        }

        @media (max-width: 850px) {
          .testimonials-deco-left {
            width: 90px;
            height: 90px;
            left: -15px;
            top: 25px;
          }
          .testimonials-deco-right {
            width: 110px;
            height: 110px;
            right: -15px;
            bottom: 25px;
          }
          .featured-slider-card {
            padding: 28px 24px;
          }
          .featured-slider-inner {
            flex-direction: column;
            align-items: flex-start;
            gap: 28px;
          }
          .testimonials-root {
            padding: 60px 20px 100px;
          }
          .testimonials-title {
            font-size: 1.8rem;
          }
        }

        /* Avatar Container with Floating Badge */
        .featured-avatar-box {
          position: relative;
          flex-shrink: 0;
        }

        .featured-avatar-img {
          width: 170px;
          height: 170px;
          border-radius: 24px;
          object-fit: cover;
          border: 4px solid #A44C4C;
          box-shadow: 0 14px 35px rgba(164, 76, 76, 0.22);
          display: block;
        }

        .featured-badge {
          position: absolute;
          bottom: -10px;
          right: -10px;
          background-color: #A44C4C;
          color: #FFFFFF;
          font-size: 0.72rem;
          font-weight: 700;
          padding: 5px 14px;
          border-radius: 30px;
          box-shadow: 0 4px 14px rgba(164, 76, 76, 0.35);
          white-space: nowrap;
        }

        /* Text Block */
        .featured-content {
          flex: 1;
        }

        .featured-quote-mark {
          font-size: 3.5rem;
          line-height: 0.6;
          color: #A44C4C;
          font-family: Georgia, serif;
          display: block;
          margin-bottom: 12px;
        }

        .featured-stars {
          margin-bottom: 14px;
        }

        .featured-quote-text {
          font-size: 1.35rem;
          font-weight: 700;
          color: #1F2937;
          line-height: 1.6;
          margin: 0 0 16px;
        }

        .featured-author-meta {
          font-size: 0.95rem;
          font-weight: 700;
          color: #111827;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .featured-date {
          font-weight: 400;
          color: #9CA3AF;
          font-size: 0.88rem;
        }

        /* Dots Pagination */
        .featured-dots {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 18px;
        }

        .featured-dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background-color: #CBD5E1;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .featured-dot.active {
          background-color: #A44C4C;
          width: 22px;
          border-radius: 12px;
        }

        /* ── Grid Layout ── */
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          margin-top: 30px;
        }

        @media (max-width: 960px) {
          .testimonials-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .testimonials-grid {
            grid-template-columns: 1fr;
          }
        }

        /* ── Card Styling ── */
        .testimonial-card {
          background: #F8F7F5;
          border-radius: 24px;
          padding: 32px 28px;
          border: 1px solid #E2E8F0;
          display: flex;
          flex-direction: column;
          height: 100%;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
          transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
        }

        .testimonial-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.07);
          border-color: rgba(164, 76, 76, 0.3);
        }

        .card-quote-icon {
          font-size: 2.8rem;
          line-height: 0.6;
          color: #A44C4C;
          font-family: Georgia, serif;
          display: block;
          margin-bottom: 14px;
        }

        .star-rating {
          display: flex;
          gap: 3px;
          font-size: 1.15rem;
          margin-bottom: 16px;
        }

        .star {
          color: #CBD5E1;
        }

        .star.active {
          color: #A44C4C;
        }

        .card-text {
          font-size: 0.94rem;
          line-height: 1.7;
          color: #4B5563;
          flex: 1;
          margin: 0 0 24px;
        }

        .card-divider {
          height: 1px;
          background-color: #E2E8F0;
          margin-bottom: 20px;
        }

        .card-author-row {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .card-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid #A44C4C;
        }

        .card-author-info {
          flex: 1;
        }

        .card-author-name {
          font-size: 0.92rem;
          font-weight: 700;
          color: #111827;
          margin: 0;
        }

        .card-author-role {
          font-size: 0.78rem;
          color: #A44C4C;
          margin: 2px 0 0;
          font-weight: 600;
        }

        .card-author-date {
          font-size: 0.75rem;
          color: #9CA3AF;
          font-weight: 500;
        }
      `}</style>

      <div className="testimonials-wrapper">
        {/* ── Header ── */}
        <motion.div
          className="testimonials-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="testimonials-subtitle">Témoignages</span>
          <h2 className="testimonials-title">CE QUE DISENT NOS CLIENTS</h2>
          <p className="testimonials-desc">
            Découvrez pourquoi les entreprises et startups font confiance à IBAH Agency pour le développement et la transformation numérique de leurs projets sur mesure.
          </p>
        </motion.div>

        {/* ── Featured Hero Slider ── */}
        <div className="featured-slider-card">
          <AnimatePresence exitBeforeEnter>
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="featured-slider-inner"
            >
              {/* Left Avatar */}
              <div className="featured-avatar-box">
                <img
                  src={featuredTestimonials[activeIndex].img}
                  alt={featuredTestimonials[activeIndex].name}
                  className="featured-avatar-img"
                />
                <span className="featured-badge">
                  {featuredTestimonials[activeIndex].role}
                </span>
              </div>

              {/* Right Content */}
              <div className="featured-content">
                <span className="featured-quote-mark">“</span>
                <div className="featured-stars">
                  <StarRating stars={featuredTestimonials[activeIndex].stars} />
                </div>
                <h3 className="featured-quote-text">
                  {featuredTestimonials[activeIndex].text}
                </h3>
                <div className="featured-author-meta">
                  <span>{featuredTestimonials[activeIndex].name}</span>
                  <span style={{ color: '#D1D5DB' }}>•</span>
                  <span className="featured-date">{featuredTestimonials[activeIndex].date}</span>
                </div>

                {/* Dots Pagination */}
                <div className="featured-dots">
                  {featuredTestimonials.map((_, idx) => (
                    <button
                      key={idx}
                      className={`featured-dot ${idx === activeIndex ? 'active' : ''}`}
                      onClick={() => setActiveIndex(idx)}
                      aria-label={`Slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── 3-Column Grid ── */}
        <div className="testimonials-grid">
          {testimonials.slice(3).map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <TestimonialCard t={t} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
