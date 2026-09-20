import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import config from "../../config";
import allzyImage from "../../assets/img/mokkup.webp";
import dash2 from "../../assets/img/dash2.webp";
import vet from "../../assets/img/vett.webp";
import mycv from "../../assets/img/mycvforge.webp";
import bus from "../../assets/img/bus.webp";
import crfr from "../../assets/img/crfr.webp";
import ana from "../../assets/img/med.webp";



const ITEMS_PER_PAGE = 6;

export interface ProjectItem {
  id: number;
  title: string;
  category: string;
  subtitle?: string;
  image: string;
  description: string;
  link?: string;
}

const defaultProjects: ProjectItem[] = [
  {
    id: 1,
    title: "ALLZY — E-COMMERCE",
    category: "Web Development",
    subtitle: "DESIGN WEB / DÉVELOPPEMENT",
    image: allzyImage,
    description: "Boutique e-commerce moderne et haute performance offrant une expérience d'achat fluide et intuitive.",
    link: "https://allzy.gt.tc"
  },
  {
    id: 2,
    title: "ALLZY — TABLEAU DE BORD",
    category: "Web Development",
    subtitle: "PANNEAU ADMIN / GESTION",
    image: dash2,
    description: "Tableau de bord d'administration complet pour le contrôle des stocks, des commandes et des statistiques.",
    link: "https://allzy.gt.tc/login"
  },
  {
    id: 3,
    title: "VETCARE — SYSTÈME VÉTÉRINAIRE",
    category: "Web Development",
    subtitle: "APP WEB / SYSTÈME DE GESTION",
    image: vet,
    description: "Système web sur mesure pour la gestion des cliniques vétérinaires, des dossiers patients et des rendez-vous.",
    link: "https://vetcare.wuaze.com/vett"
  },
  {
    id: 4,
    title: "MYCVFORGE — CRÉATEUR CV IA",
    category: "Web Development",
    subtitle: "DESIGN WEB / IA",
    image: mycv,
    description: "Générateur intelligent de curriculum vitae personnalisé propulsé par des algorithmes d'IA.",
    link: "https://mycvforge.vercel.app/"
  },
  {
    id: 5,
    title: "BUSWAY — APP SUIVI DE BUS",
    category: "Web Development",
    subtitle: "DESIGN PRODUIT / MOBILE & WEB",
    image: bus,
    description: "Application interactive de géolocalisation et suivi en temps réel du réseau de bus urbains.",
    link: "#"
  },
  {
    id: 6,
    title: "CRFR — GESTION FORMATIONS",
    category: "Web Development",
    subtitle: "APPLICATION WEB / GESTION ÉVÉNEMENTS",
    image: crfr,
    description: "Plateforme web de planification, réservation et gestion globale des sessions de formation et événements.",
    link: "#"
  },
  {
    id: 7,
    title: "ANALYSEMED — IA MÉDICALE",
    category: "Web Development",
    subtitle: "PLATEFORME IA MÉDICALE / WEB",
    image: ana,
    description: "Plateforme d'analyse intelligente de données médicales et d'assistance au diagnostic clinique.",
    link: "#"
  },
  {
    id: 8,
    title: "SMARTNAV — SUIVI EN TEMPS RÉEL",
    category: "Mobile Apps",
    subtitle: "APPLICATION MOBILE / IOS & ANDROID",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
    description: "Application mobile intuitive de navigation urbaine et de géolocalisation haute précision.",
    link: "#"
  },
  {
    id: 9,
    title: "FITLIFE — COACHING PERSONNALISÉ",
    category: "Mobile Apps",
    subtitle: "APP MOBILE / SANTÉ & FITNESS",
    image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=800&q=80",
    description: "Suivi d'entraînements, nutrition sur mesure et programmes de remise en forme interactifs.",
    link: "#"
  },
  {
    id: 10,
    title: "NEUROFLOW — IA PRÉDICTIVE",
    category: "AI & Automation",
    subtitle: "AUTOMATISATION / MACHINE LEARNING",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    description: "Moteur d'analyse prédictive et d'automatisation intelligente des flux de données d'entreprise.",
    link: "#"
  },
  {
    id: 11,
    title: "BOTCRAFT — AGENT IA",
    category: "AI & Automation",
    subtitle: "INTELLIGENCE ARTIFICIELLE / CHATBOT",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=800&q=80",
    description: "Assistant virtuel intelligent intégré aux canaux de support client pour réponse instantanée 24/7.",
    link: "#"
  }
];

const categories = ["Tous", "Web Development", "Mobile Apps", "AI & Automation"];

export default function Portfolio({ className = "" }: { className?: string }) {
  const [category, setCategory] = useState("");
  const [categoriesList, setCategoriesList] = useState([]);
  const [products, setProducts] = useState<ProjectItem[]>(defaultProjects);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);

  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const visibleProducts = products.slice(
    page * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  );

  const filteredProjects = category === "" || category === "Tous" 
    ? products 
    : products.filter(p => p.category === category);

  const displayedProjects = filteredProjects.slice(
    page * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  );

  const handleProjectClick = (project: ProjectItem) => {
    if (project.link && project.link !== "#") {
      window.open(project.link, '_blank', 'noopener,noreferrer');
    } else {
      window.location.href = '/coming-soon';
    }
  };

  return (
    <>
      <style>{`
        .cat-root {
          background: #000000;
          position: relative;
          overflow: hidden;
        }

        .cat-select-wrapper {
          position: relative;
          display: inline-block;
        }

        .cat-select-wrapper::after {
          content: '';
          position: absolute;
          right: 14px;
          top: 50%;
          transform: translateY(-50%);
          width: 0; height: 0;
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-top: 5px solid #A44C4C;
          pointer-events: none;
        }

        .cat-select {
          appearance: none;
          -webkit-appearance: none;
          background: #F8F7F5;
          border: 1px solid rgba(26,26,26,0.15);
          color: #1a1a1a;
          padding: 10px 40px 10px 16px;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.78rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          cursor: pointer;
          outline: none;
          transition: border-color 0.3s ease;
          min-width: 180px;
        }

        .cat-select:focus {
          border-color: #A44C4C;
          box-shadow: 0 0 0 3px rgba(164,76,76,0.08);
        }

        .prod-card {
          position: relative;
          border-radius: 15px;
          overflow: hidden;
          cursor: pointer;
          background: #111;
          width: 100%;
          height: 460px;
        }

        .prod-card-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
          filter: brightness(0.8);
        }

        .prod-card:hover .prod-card-img {
          transform: scale(1.06);
          filter: brightness(0.55);
        }

        .prod-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.2) 55%, transparent 100%);
          z-index: 1;
        }

        .prod-card-body {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          padding: 28px;
          z-index: 2;
        }

        .prod-card-num {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.7rem;
          letter-spacing: 0.25em;
          color: rgba(164,76,76,0.7);
          display: block;
          margin-bottom: 6px;
        }

        .prod-card-title {
          font-family: 'Montserrat', sans-serif;
          font-size: 1.85rem;
          font-weight: 400;
          color: #fff;
          line-height: 1.2;
          transform: translateY(56px);
          transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .prod-card:hover .prod-card-title { transform: translateY(0); }

        .prod-card-bar {
          width: 40px;
          height: 2px;
          background: #A44C4C;
          margin: 10px 0;
          transform: translateY(56px);
          transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1) 0.04s;
        }

        .prod-card:hover .prod-card-bar { transform: translateY(0); }

        .prod-card-reveal {
          opacity: 0;
          transform: translateY(12px);
          transition: opacity 0.4s ease 0.1s, transform 0.4s ease 0.1s;
        }

        .prod-card:hover .prod-card-reveal { opacity: 1; transform: translateY(0); }

        .prod-card-desc {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.82rem;
          color: rgba(255,255,255,0.6);
          line-height: 1.65;
          margin-bottom: 14px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .prod-card-btn {
          position: relative;
          overflow: hidden;
          width: 100%;
          background: transparent;
          border: 1px solid rgba(164,76,76,0.5);
          color: #A44C4C;
          padding: 10px 0;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.72rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          cursor: pointer;
          transition: color 0.35s ease;
          text-align: center;
          display: block;
          text-decoration: none;
        }

        .prod-card-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: #A44C4C;
          transform: translateX(-101%);
          transition: transform 0.35s cubic-bezier(0.22,1,0.36,1);
        }

        .prod-card-btn:hover::before { transform: translateX(0); }
        .prod-card-btn:hover { color: #fff; }
        .prod-card-btn span { position: relative; z-index: 1; }

        .prod-card-topline {
          position: absolute;
          top: 0; left: 0;
          height: 2px;
          background: #A44C4C;
          width: 0%;
          transition: width 0.5s cubic-bezier(0.22,1,0.36,1);
          z-index: 3;
        }

        .prod-card:hover .prod-card-topline { width: 100%; }

        /* ── Pagination ── */
        .pag-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 8px;
          border: 2px solid rgba(164, 76, 76, 0.2);
          background: #F8F7F5;
          color: #333333;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .pag-btn:hover:not(:disabled) {
          border-color: #A44C4C;
          background: #A44C4C;
          color: #ffffff;
          transform: translateY(-2px);
        }

        .pag-btn.active {
          background: #A44C4C;
          border-color: #A44C4C;
          color: #ffffff;
        }

        .pag-btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
          border-color: #e5e5e5;
        }

        .pag-arrow {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px 24px;
          border-radius: 8px;
          border: 2px solid rgba(164, 76, 76, 0.2);
          background: #F8F7F5;
          color: #333333;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.3s ease;
          gap: 8px;
        }

        .pag-arrow:hover:not(:disabled) {
          background: #A44C4C;
          border-color: #A44C4C;
          color: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(164, 76, 76, 0.3);
        }

        .pag-arrow:disabled {
          opacity: 0.4;
          cursor: not-allowed;
          border-color: #e5e5e5;
          background: #f9f9f9;
        }

        /* ── Skeleton ── */
        .skeleton {
          background: linear-gradient(90deg, #e8e5e0 25%, #f2f0ed 50%, #e8e5e0 75%);
          background-size: 200% 100%;
          animation: shimmer 1.4s infinite;
        }

        @keyframes shimmer {
          0%   { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }

        /* ── Layout Classes ── */
        .portfolio-section {
          padding: 110px 40px;
          background-color: #F8F7F5;
          font-family: 'Montserrat', sans-serif;
          overflow: hidden;
          position: relative;
        }

        

        @media (max-width: 768px) {
          .portfolio-section {
            padding: 70px 24px;
          }
        }

        .portfolio-deco-left {
          position: absolute;
          top: 60px;
          left: 10px;
          width: 200px;
          height: 200px;
          opacity: 0.85;
          pointer-events: none;
          z-index: 1;
          transform: rotate(-10deg);
          transition: transform 0.5s ease;
        }

        .portfolio-deco-right {
          position: absolute;
          bottom: 40px;
          right: 10px;
          width: 220px;
          height: 220px;
          opacity: 0.85;
          pointer-events: none;
          z-index: 1;
          transform: rotate(15deg);
          transition: transform 0.5s ease;
        }

        @media (max-width: 768px) {
          .portfolio-deco-left {
            width: 120px;
            height: 120px;
            left: -20px;
          }
          .portfolio-deco-right {
            width: 130px;
            height: 130px;
            right: -20px;
          }
        }

        .portfolio-container {
          position: relative;
          z-index: 2;
          max-width: 1280px;
          margin: 0 auto;
        }

        .ambient-glow {
          position: absolute;
          top: 0;
          right: 0;
          width: 500px;
          height: 280px;
          pointer-events: none;
          background: radial-gradient(ellipse at top right, rgba(164,76,76,0.07) 0%, transparent 65%);
        }

        .header-wrapper {
          margin-bottom: 56px;
        }

        .header-content {
          text-align: center;
        }

        .header-label {
          font-size: 0.75rem;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: #A44C4C;
          font-weight: 700;
          display: inline-block;
          margin-bottom: 8px;
        }

        .header-title {
          font-size: 2.2rem;
          font-weight: 700;
          color: #000000;
          text-transform: uppercase;
          letter-spacing: -0.5px;
          margin: 0 0 16px;
        }

        .header-title em {
          color: #A44C4C;
          font-style: normal;
        }

        .header-desc {
          font-size: 1rem;
          color: #666666;
          max-width: 650px;
          margin: 0 auto;
          line-height: 1.8;
        }

        .filter-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 50px;
        }

        .filter-btn {
          position: relative;
          background: transparent;
          border: 1px solid rgba(164, 76, 76, 0.25);
          color: #444444;
          padding: 10px 24px;
          border-radius: 30px;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          outline: none;
          font-family: 'Montserrat', sans-serif;
        }

        .filter-btn:hover {
          color: #A44C4C;
          border-color: #A44C4C;
          transform: translateY(-2px);
        }

        .filter-btn.active {
          background-color: #A44C4C;
          color: #FFFFFF;
          border-color: #A44C4C;
          box-shadow: 0 8px 20px rgba(164, 76, 76, 0.3);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }

        @media (min-width: 768px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1280px) {
          .projects-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .skeleton-card {
          height: 460px;
          
        }

        .btn-wrapper {
          position: relative;
          padding: 12px 12px;
          overflow: hidden;
          border-radius: 8px;
          border: 1px solid #A44C4C;
          width: 100%;
          text-align: center;
          background: transparent;
        }

        .btn-wrapper::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 0;
          height: 100%;
          background: #A44C4C;
          transition: width 0.5s ease;
        }

        .btn-wrapper:hover::before {
          width: 100%;
        }

        .btn-text {
          position: relative;
          z-index: 10;
          font-size: 0.75rem;
          color: #A44C4C;
          font-weight: 600;
          transition: color 0.3s ease;
        }

        @media (min-width: 1280px) {
          .btn-text {
            font-size: 0.875rem;
          }
        }

        .btn-wrapper:hover .btn-text {
          color: #ffffff;
        }

        .pagination-wrapper {
          margin-top: 50px;
          text-align: center;
        }

        .pagination-counter {
          font-size: 0.75rem;
          color: #666666;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 20px;
          font-family: 'Montserrat', sans-serif;
        }

        .pagination-counter span {
          color: #A44C4C;
          font-weight: 700;
        }

        .pagination-counter .total {
          color: #333333;
          font-weight: 600;
        }

        .pagination-buttons {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .pagination-dots {
          display: flex;
          gap: 6px;
        }

        .pagination-dot {
          width: 6px;
          height: 6px;
          border-radius: 3px;
          background: rgba(164, 76, 76, 0.3);
          border: none;
          cursor: pointer;
          padding: 0;
          transition: all 0.3s ease;
        }

        .pagination-dot.active {
          width: 24px;
          background: #A44C4C;
        }

        .no-pagination {
          margin-top: 32px;
          padding-top: 24px;
          border-top: 1px solid #e5e7eb;
        }

        .no-pagination p {
          font-size: 0.75rem;
          color: #d1d5db;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }
      `}</style>

      <section
        id="portfolio"
        className={`portfolio-section ${className}`}
        ref={ref}
      >
        {/* Decorative SVG Shapes */}
        <img src={`${process.env.PUBLIC_URL}/svg/dd.svg`} alt="" className="portfolio-deco-left" />
        <img src={`${process.env.PUBLIC_URL}/svg/dd1.svg`} alt="" className="portfolio-deco-right" />

        <div className="portfolio-container">
          {/* ── HEADER ── */}
          <motion.div
            className="header-wrapper"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="header-content">
              <p className="header-label">NOTRE PORTFOLIO</p>
              <h2 className="header-title">
                NOS PROJETS
                <em>RÉCENTS</em>
              </h2>
              <p className="header-desc">
                Découvrez une sélection de nos réalisations sur mesure conçues avec passion et précision pour nos clients.
              </p>
            </div>
          </motion.div>

          {/* ── SELECT FILTER ── */}
          <motion.div
            className="filter-wrapper"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${category === cat ? 'active' : ''}`}
                onClick={() => {
                  setCategory(cat);
                  setPage(0);
                }}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* ── PRODUCT GRID ── */}
          <AnimatePresence>
            {loading ? (
              <motion.div
                key="skeleton"
                className="projects-grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {[1, 2, 3].map((i) => (
                  <div key={i} className="skeleton skeleton-card" />
                ))}
              </motion.div>
            ) : (
              <motion.div
                key={`${category}-${page}`}
                className="projects-grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
              >
                {displayedProjects.map((p, i) => (
                  <motion.div
                    key={p.id}
                    initial={{ opacity: 0, y: 35 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.65,
                      delay: i * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <div className="prod-card" onClick={() => handleProjectClick(p)}>
                      <img
                        src={p.image}
                        alt={p.title}
                        loading="lazy"
                        decoding="async"
                        className="prod-card-img"
                      />
                      <div className="prod-card-overlay" />
                      <div className="prod-card-topline" />
                      <div className="prod-card-body">
                        <h3 className="prod-card-title">{p.title}</h3>
                        <div className="prod-card-bar" />
                        <div className="prod-card-reveal">
                          <p className="prod-card-desc">{p.description}</p>
                          <div className="btn-wrapper">
                            <span className="btn-text">
                              Visiter le projet →
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* ── PAGINATION ── */}
          {!loading && filteredProjects.length > ITEMS_PER_PAGE && (
            <motion.div
              className="pagination-wrapper"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {/* Counter */}
              <p className="pagination-counter">
                Affichage{" "}
                <span>
                  {page * ITEMS_PER_PAGE + 1}–
                  {Math.min((page + 1) * ITEMS_PER_PAGE, filteredProjects.length)}
                </span>{" "}
                sur{" "}
                <span className="total">
                  {filteredProjects.length}
                </span>{" "}
                projets
              </p>

              {/* Page buttons */}
              <div className="pagination-buttons">
                {/* Prev arrow */}
                <button
                  className="pag-arrow"
                  onClick={() => setPage((p) => p - 1)}
                  disabled={page === 0}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                  Précédent
                </button>

                {/* Page numbers */}
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    className={`pag-btn ${page === i ? "active" : ""}`}
                    onClick={() => setPage(i)}
                  >
                    {i + 1}
                  </button>
                ))}

                {/* Next arrow */}
                <button
                  className="pag-arrow"
                  onClick={() => setPage((p) => p + 1)}
                  disabled={page === totalPages - 1}
                >
                  Suivant
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>

              {/* Dots indicator */}
              <div className="pagination-dots">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setPage(i)}
                    className={`pagination-dot ${page === i ? 'active' : ''}`}
                  />
                ))}
              </div>
            </motion.div>
          )}

          {/* No pagination needed — just count */}
          {!loading && filteredProjects.length <= ITEMS_PER_PAGE && filteredProjects.length > 0 && (
            <div className="no-pagination">
              <p>
                {filteredProjects.length} projet{filteredProjects.length !== 1 ? "s" : ""}{" "}
                trouvé{filteredProjects.length !== 1 ? "s" : ""}
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
