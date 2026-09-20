import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Loader from '../Loader';

const ComingSoon: React.FC = () => {
  const dynamiteBg = `${process.env.PUBLIC_URL}/svg/dynamite.svg`;
  const dynamite2Bg = `${process.env.PUBLIC_URL}/svg/dynamite2.svg`;
  const waveBg = `${process.env.PUBLIC_URL}/svg/wave.svg`;

  return (
    <>
      <style>{`
        .coming-soon-root {
          min-height: 100vh;
          background: #F8F7F5;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;
          font-family: 'Montserrat', sans-serif;
          position: relative;
        }

        .coming-soon-deco-left {
          position: absolute;
          top: 60px;
          left: 10px;
          width: 180px;
          height: 180px;
          opacity: 0.8;
          pointer-events: none;
          z-index: 1;
          transform: rotate(-12deg);
          transition: transform 0.5s ease;
        }

        .coming-soon-deco-right {
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

       
        .coming-soon-container {
          text-align: center;
          color: #333333;
          position: relative;
          z-index: 10;
          max-width: 600px;
        }

        .coming-soon-title {
          font-size: 4rem;
          font-weight: 800;
          margin-bottom: 24px;
          line-height: 1.1;
          color: #000000;
          letter-spacing: -2px;
        }

        .coming-soon-subtitle {
          font-size: 1.25rem;
          color: #666666;
          margin-bottom: 48px;
          line-height: 1.6;
          font-weight: 400;
        }

        .coming-soon-loader-wrapper {
          width: 100%;
          height: auto;
          min-height: 500px;
          margin: 0 auto 48px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .coming-soon-back-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: #A44C4C;
          color: #ffffff;
          text-decoration: none;
          padding: 16px 40px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(164, 76, 76, 0.3);
        }

        .coming-soon-back-btn:hover {
          background: #883838;
          transform: translateY(-2px);
          box-shadow: 0 6px 30px rgba(164, 76, 76, 0.4);
        }

        @media (max-width: 768px) {
          .coming-soon-title {
            font-size: 2.5rem;
          }

          .coming-soon-subtitle {
            font-size: 1rem;
          }

          .coming-soon-loader-wrapper {
            height: 300px;
          }

          .coming-soon-deco-left {
            width: 110px;
            height: 110px;
            left: -20px;
          }

          .coming-soon-deco-right {
            width: 140px;
            height: 140px;
            right: -20px;
          }
        }
      `}</style>

      <div className="coming-soon-root">
        <img src={dynamiteBg} alt="" className="coming-soon-deco-left" />
        <img src={dynamite2Bg} alt="" className="coming-soon-deco-right" />
        <div className="coming-soon-wave" />
        <motion.div
          className="coming-soon-container"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="coming-soon-loader-wrapper">
            <Loader />
          </div>

          <h1 className="coming-soon-title">Bientôt Disponible</h1>
          
          <p className="coming-soon-subtitle">
            Ce projet est actuellement en développement. Nous travaillons dur pour vous offrir une expérience exceptionnelle.
          </p>

          <Link to="/#portfolio" className="coming-soon-back-btn">
            ← Retour au Portfolio
          </Link>
        </motion.div>
      </div>
    </>
  );
};

export default ComingSoon;
