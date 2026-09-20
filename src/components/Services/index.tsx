import React from 'react';
import { motion } from 'framer-motion';
import ServicesHeader from './Header';
import ServicesBody from './Body';

interface ServicesProps {
  onServiceClick?: (serviceTitle: string) => void;
}

const Services: React.FC<ServicesProps> = ({ onServiceClick }) => {
  const dynamiteBg = `${process.env.PUBLIC_URL}/svg/dynamite.svg`;
  const dynamite2Bg = `${process.env.PUBLIC_URL}/svg/dynamite2.svg`;
  const waveBg = `${process.env.PUBLIC_URL}/svg/wave.svg`;

  return (
    <section className="services" id="services" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Decorative SVG Shapes */}
      <img src={dynamiteBg} alt="" className="services-deco-left" />
      <img src={dynamite2Bg} alt="" className="services-deco-right" />

      <style>{`
        .services {
          position: relative;
          padding: 110px 40px 140px;
          font-family: 'Montserrat', sans-serif;
          background-color: #F8F7F5;
        }
        @media (max-width: 630px) {
          .services-header {
            margin-top: 15px;
          }
        }

        .services::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("${waveBg}");
          background-repeat: no-repeat;
          background-position: bottom center;
          background-size: cover;
          opacity: 0.9;
          pointer-events: none;
          z-index: 0;
        }

        .services-deco-left {
          position: absolute;
          top: 60px;
          width: 180px;
          height: 180px;
          opacity: 0.8;
          pointer-events: none;
          z-index: 1;
          transform: rotate(-12deg);
          transition: transform 0.5s ease;
        }

        .services-deco-right {
          position: absolute;
          bottom: 40px;
          right: 10px;
          width: 240px;
          height: 240px;
          opacity: 0.8;
          pointer-events: none;
          z-index: 1;
          transform: rotate(15deg);
          transition: transform 0.5s ease;
        }

        @media (max-width: 768px) {
          .services-deco-left {
            width: 110px;
            height: 110px;
            left: -20px;
          }
          .services-deco-right {
            width: 140px;
            height: 140px;
            right: -20px;
          }
        }

        .services-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .services-label {
          font-size: 0.75rem;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: #FFFFFF;
          font-weight: 700;
          display: inline-block;
          margin-bottom: 8px;
          opacity: 0.95;
        }

        .services-title {
          font-size: 2.2rem;
          font-weight: 700;
          color: #FFFFFF;
          text-transform: uppercase;
          letter-spacing: -0.5px;
          margin: 0 0 16px;
        }

        .services-paragraph {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.92);
          max-width: 650px;
          margin: 0 auto;
          line-height: 1.8;
        }

        /* ── Services Grid ── */
        .services-container {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          max-width: 1240px;
          margin: 0 auto;
        }

        @media (max-width: 1100px) {
          .services-container {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }
        }

        @media (max-width: 640px) {
          .services-container {
            grid-template-columns: 1fr;
            gap: 20px;
            
          }
          .services {
            padding: 70px 20px 100px;
          }
        }

        /* ── Services Card ── */
        .services-card {
          position: relative;
          background-color: #18181C;
          padding: 32px 24px 36px;
          border-radius: 26px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 14px 40px rgba(0, 0, 0, 0.25);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .services-card.highlighted {
          background: linear-gradient(145deg, #A44C4C, #883838);
          border-color: rgba(255, 255, 255, 0.25);
          box-shadow: 0 20px 50px rgba(164, 76, 76, 0.4);
        }

        .services-link {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 5;
        }

        /* Top Title */
        .card-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: #FFFFFF;
          margin: 0 0 16px;
          line-height: 1.35;
          min-height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          width: 100%;
          letter-spacing: -0.2px;
        }

        /* Center Illustration Container */
        .card-illustration {
          position: relative;
          width: 100%;
          height: 210px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        .card-blob-svg {
          position: absolute;
          width: 260px;
          height: 230px;
          z-index: 1;
          transition: transform 0.5s ease;
        }

        .card-svg-image {
          position: relative;
          z-index: 2;
          width: 82%;
          max-width: 170px;
          height: 135px;
          object-fit: contain;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.2));
        }

        /* Bottom Paragraph */
        .card-paragraph {
          font-size: 0.9rem;
          line-height: 1.65;
          color: rgba(255, 255, 255, 0.78);
          margin: 0;
          text-align: center;
        }

        .services-card.highlighted .card-paragraph {
          color: rgba(255, 255, 255, 0.95);
        }

        /* ── Hover Effects ── */
        .services-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 24px 50px rgba(0, 0, 0, 0.4);
          border-color: rgba(164, 76, 76, 0.5);
        }

        .services-card.highlighted:hover {
          box-shadow: 0 28px 60px rgba(164, 76, 76, 0.55);
        }

        .services-card:hover .card-blob-svg {
          transform: scale(1.08) rotate(4deg);
        }

        .services-card:hover .card-svg-image {
          transform: scale(1.06);
        }
      `}</style>

      <div className="container" style={{ maxWidth: '1240px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <ServicesHeader header={{
            title: "NOS SERVICES",
            body: "Des solutions numériques sur mesure conçues pour propulser votre entreprise vers l'excellence."
          }} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          viewport={{ once: true }}
        >
          <ServicesBody onServiceClick={onServiceClick} />
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
