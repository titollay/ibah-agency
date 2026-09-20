import React from 'react';
import { motion } from "framer-motion";
import aboutVideo from "../../assets/about.mp4";

export default function About() {
  const shapeBgUrl = `${process.env.PUBLIC_URL}/svg/shape.svg`;

  return (
    <section id="about-us" style={{ background: "#F8F7F5", position: "relative" }}>
      <style>{`
        .about-root {
          font-family: 'Montserrat', sans-serif;
          max-width: 1240px;
          margin: 0 auto;
          padding: 110px 40px;
        }

        /* ── Section Header ── */
        .about-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .about-label {
          font-size: 0.75rem;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: #A44C4C;
          font-weight: 700;
          display: inline-block;
          margin-bottom: 8px;
        }

        .about-title {
          font-size: 2.2rem;
          font-weight: 700;
          color: #000000;
          text-transform: uppercase;
          letter-spacing: -0.5px;
          margin: 0 0 16px;
        }

        .about-paragraph {
          font-size: 1rem;
          color: #666666;
          max-width: 650px;
          margin: 0 auto;
          line-height: 1.8;
        }

        /* ── Grid layout ── */
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 55px;
          align-items: center;
        }
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr; gap: 44px; }
          .about-root { padding: 70px 24px; }
          .about-header {
          
          margin-bottom: 35px;
        }
        }

        /* ── Left – Enhanced Video Container ── */
        .about-video-card {
          position: relative;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .about-video-shape-bg {
          position: absolute;
          top: 32%;
          left: 50%;
          transform: translate(-48%, -42%) scale(1.35);
          width: 210%;
          height: 200%;
          // background-image: url("${shapeBgUrl}");
          background-repeat: no-repeat;
          background-position: center center;
          background-size: contain;
          z-index: 0;
          opacity: 0.35;
          pointer-events: none;
        }

        .about-video-glow {
          position: absolute;
          width: 110%;
          height: 110%;
          background: radial-gradient(circle, rgba(164, 76, 76, 0.18) 0%, rgba(255, 255, 255, 0) 70%);
          filter: blur(40px);
          z-index: 0;
          pointer-events: none;
        }

        .about-video-frame {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 800px;
          border-radius: 24px;
          padding: 12px;
          background: #F8F7F5;
          border: 1px solid rgba(164, 76, 76, 0.2);
          box-shadow: 0 20px 48px rgba(0, 0, 0, 0.08), 0 8px 16px rgba(164, 76, 76, 0.08);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }

        .about-video-frame:hover {
          transform: translateY(-4px);
          box-shadow: 0 28px 60px rgba(0, 0, 0, 0.12), 0 12px 24px rgba(164, 76, 76, 0.15);
        }

        .about-video-element {
          width: 100%;
          height: auto;
          max-height: 420px;
          object-fit: cover;
          border-radius: 16px;
          display: block;
        }



        /* ── Right – Content ── */
        .about-content {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .about-philosophy-title {
          font-family: 'Montserrat', sans-serif;
          font-size: 2rem;
          font-weight: 700;
          color: #000000;
          margin: 0 0 6px;
          text-transform: uppercase;
          letter-spacing: -0.5px;
        }

        .about-quote {
          font-family: 'Montserrat', sans-serif;
          font-size: 1.2rem;
          font-style: italic;
          font-weight: 600;
          color: #000000;
          line-height: 1.7;
          border-left: 3px solid #A44C4C;
          padding-left: 20px;
          margin: 0;
        }

        .about-quote-mark {
          color: #A44C4C;
          font-size: 2.2rem;
          line-height: 0;
          vertical-align: -0.4rem;
          font-style: normal;
        }

        .about-desc {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.95rem;
          line-height: 1.85;
          color: #666666;
          margin: 0;
        }
      `}</style>

      <div className="about-root">
        {/* ── Header ── */}
        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="about-label">Qui Sommes-Nous</span>
          <h2 className="about-title">À PROPOS DE NOUS</h2>
          <p className="about-paragraph">
            Une agence créative et digitale dédiée à la transformation numérique et l'innovation sur mesure.
          </p>
        </motion.div>

        {/* ── Content grid ── */}
        <div className="about-grid">

          {/* Left – Enhanced Video */}
          <motion.div
            className="about-video-card"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <div className="about-video-shape-bg" />
            <div className="about-video-glow" />
            <div className="about-video-frame">
              <video
                src={aboutVideo}
                autoPlay
                loop
                muted
                playsInline
                className="about-video-element"
              />
            </div>
          </motion.div>

          {/* Right – Text */}
          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className="about-philosophy-title">Notre Philosophie</h2>
            </div>

            <blockquote className="about-quote">
              <span className="about-quote-mark">«</span>
              &nbsp;IBAH Agency met l'innovation et la transformation numérique directement au service de votre croissance.
              <span className="about-quote-mark">&nbsp;»</span>
            </blockquote>

            <p className="about-desc">
              Développer des solutions digitales performantes et sur mesure ne devrait pas être complexe. IBAH Agency vous accompagne dans la création de logiciels personnalisés, d'applications web modernes et d'expériences numériques d'exception — conçues pour propulser votre entreprise vers l'avenir.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
