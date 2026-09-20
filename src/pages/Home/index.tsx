import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Parallax from 'parallax-js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

import juice from '../../assets/img/juice.png';
import juice3 from '../../assets/img/juice3.png';

import leafOne from '../../assets/img/leaf01.png';
import leafTwo from '../../assets/img/leaf02.png';
import leafThree from '../../assets/img/leaf03.png';
import leafFour from '../../assets/img/leaf04.png';
import leafFive from '../../assets/img/leaf05.png';

import juiceOptimized from '../../assets/webp/juice.webp';
import juice3Optimized from '../../assets/webp/juice3.webp';

import leafOneOptimized from '../../assets/webp/leaf01.webp';
import leafTwoOptimized from '../../assets/webp/leaf02.webp';
import leafThreeOptimized from '../../assets/webp/leaf03.webp';
import leafFourOptimized from '../../assets/webp/leaf04.webp';
import leafFiveOptimized from '../../assets/webp/leaf05.webp';

import Header from '../../components/Header';
import About from '../../components/About';
import Services from '../../components/Services';
import Portfolio from '../../components/Portfolio';
import Testimonials from '../../components/Testimonials';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import ScrollButton from '../../components/ScrollButton';
import QuoteModal from '../../components/QuoteModal';

import {
  Wrapper,
  TextWithOpacity,
  Title,
  More,
  Desc,
  Arrow,
  Juice,
  Leaves,
} from './styles';

const heroSlides = [
  {
    id: 0,
    tag: "DIGITAL PRODUCTS & SOLUTIONS",
    title: "IBAH AGENCY",
    titleHtml: "IBAH <span style='color: #A44C4C !important'>AGENCY</span>",
    descTitle: "Transformation",
    highlightWord: "numérique",
    descSubtitle: "sur mesure",
    descBody: "Agence moderne offrant une transformation numérique sur mesure, des logiciels personnalisés et des solutions intelligentes pour entreprises.",
    ctaText: "Découvrir nos solutions",
    ctaLink: "#about-us",
    juicePng: juice,
    juiceWebp: juiceOptimized
  },
  {
    id: 1,
    tag: "SOLUTIONS IA & DATA",
    title: "INTELLIGENCE ARTIFICIELLE",
    descTitle: "Solutions",
    highlightWord: "intelligentes",
    descSubtitle: "& automatisées",
    descBody: "Intégration d'agents IA, d'outils d'analyse prédictive et d'automatisation des données pour démultiplier l'efficacité de votre entreprise.",
    ctaText: "Explorer les services IA",
    ctaLink: "#services",
    juicePng: juice3,
    juiceWebp: juice3Optimized
  },
  {
    id: 2,
    tag: "DEVELOPPEMENT WEB & MOBILE",
    title: "INNOVATION WEB",
    descTitle: "Applications",
    highlightWord: "sur mesure",
    descSubtitle: "& réactives",
    descBody: "Conception de sites modernes, plateformes SaaS réactives et d'applications mobiles iOS & Android d'une performance remarquable.",
    ctaText: "Voir nos réalisations",
    ctaLink: "#portfolio",
    juicePng: juice,
    juiceWebp: juiceOptimized
  },
  {
    id: 3,
    tag: "AUTOMATISATION & CONSEIL",
    title: "AGENCE DIGITALE",
    descTitle: "Accompagnement",
    highlightWord: "stratégique",
    descSubtitle: "& audit expert",
    descBody: "Optimisation globale des processus métier, audit d'architecture et conseils experts pour accélérer votre transformation digitale.",
    ctaText: "Demander un devis",
    ctaLink: "#contact",
    juicePng: juice3,
    juiceWebp: juice3Optimized
  }
];

function Home() {
  const [parallaxScene, setParallaxScene] = useState<Parallax>();
  const [activeSlide, setActiveSlide] = useState(0);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [preSelectedService, setPreSelectedService] = useState<string | null>(null);

  useEffect(() => {
    const sceneNode = document.getElementById('scene');

    if (sceneNode) {
      setParallaxScene(new Parallax(sceneNode));
    }

    return (): void => {
      parallaxScene?.disable();
    };
  }, []);

  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
  };

  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    e.preventDefault();
    
    if (link === '#contact' || currentSlide.ctaText === 'Demander un devis') {
      setIsQuoteModalOpen(true);
    } else {
      const element = document.querySelector(link);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleServiceClick = (serviceTitle: string) => {
    setPreSelectedService(serviceTitle);
    setIsQuoteModalOpen(true);
  };

  const currentSlide = heroSlides[activeSlide];

  return (
    <>
      <div style={{ position: 'relative', height: '100vh', width: '100%', overflow: 'hidden' }}>
        <Header account="John Doe" />

        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={currentSlide.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            style={{ width: '100%', height: '100%' }}
          >
            <Wrapper>
              <TextWithOpacity>{currentSlide.tag}</TextWithOpacity>

              <Title dangerouslySetInnerHTML={{ __html: currentSlide.titleHtml || currentSlide.title }} />

              <More>
                <a href={currentSlide.ctaLink} onClick={(e) => handleCtaClick(e, currentSlide.ctaLink)} className="hero-cta-button">{currentSlide.ctaText}</a>
              </More>

              <Desc>
                <p>
                  {currentSlide.descTitle} <span>{currentSlide.highlightWord}</span> <br />
                  {currentSlide.descSubtitle}
                </p>
                <p>{currentSlide.descBody}</p>
              </Desc>
            </Wrapper>
          </motion.div>
        </AnimatePresence>

        <Arrow
          type="button"
          aria-label="Previous Slide"
          arrowPosition="left"
          onClick={handlePrevSlide}
        >
          <FontAwesomeIcon icon={faChevronLeft} size="lg" />
        </Arrow>
        
        <Arrow
          type="button"
          aria-label="Next Slide"
          arrowPosition="right"
          onClick={handleNextSlide}
        >
          <FontAwesomeIcon icon={faChevronRight} size="lg" />
        </Arrow>

        <Juice>
          <picture key={currentSlide.id}>
            <source srcSet={currentSlide.juiceWebp} type="image/webp" />
            <source srcSet={currentSlide.juicePng} type="image/png" />
            <img src={currentSlide.juicePng} alt="Illustration" />
          </picture>
        </Juice>

        <Leaves>
          <ul id="scene">
            <li className="layer" data-depth="-.1">
              <picture>
                <source srcSet={leafOneOptimized} type="image/webp" />
                <source srcSet={leafOne} type="image/png" />
                <img src={leafOne} alt="Juice" />
              </picture>
            </li>
            <li className="layer" data-depth="-.3">
              <picture>
                <source srcSet={leafTwoOptimized} type="image/webp" />
                <source srcSet={leafTwo} type="image/png" />
                <img src={leafTwo} alt="Juice" />
              </picture>
            </li>
            <li className="layer" data-depth="-1.5">
              <picture>
                <source srcSet={leafThreeOptimized} type="image/webp" />
                <source srcSet={leafThree} type="image/png" />
                <img src={leafThree} alt="Juice" />
              </picture>
            </li>
            <li className="layer" data-depth=".1">
              <picture>
                <source srcSet={leafFourOptimized} type="image/webp" />
                <source srcSet={leafFour} type="image/png" />
                <img src={leafFour} alt="Juice" />
              </picture>
            </li>
            <li className="layer" data-depth=".3">
              <picture>
                <source srcSet={leafFiveOptimized} type="image/webp" />
                <source srcSet={leafFive} type="image/png" />
                <img src={leafFive} alt="Juice" />
              </picture>
            </li>
          </ul>
        </Leaves>

        <a
          href="#about-us"
          style={{
            position: 'absolute',
            bottom: '15px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 40,
            textDecoration: 'none',
            display: 'block',
          }}
          aria-label="Scroll to About Us"
        >
          <ScrollButton color="#000" />
        </a>
      </div>

      <About />
      <Services onServiceClick={handleServiceClick} />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
      
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => {
          setIsQuoteModalOpen(false);
          setPreSelectedService(null);
        }}
        preSelectedService={preSelectedService}
      />
    </>
  );
}

export default Home;
