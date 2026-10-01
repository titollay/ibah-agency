import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

import logo from '../../assets/img/logo.png';
import logo1 from '../../assets/img/logo-1.png';
import logoDark from '../../assets/img/logo-1.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faChevronDown } from '@fortawesome/free-solid-svg-icons';

import {
  NavHeader,
  Container,
  LogoWrapper,
  LogoImg,
  LogoTextGroup,
  LogoTitle,
  LogoSubtitle,
  DesktopNav,
  NavLinkItem,
  CtaButton,
  MenuToggleButton,
  MobileMenu,
  MobileNavLink,
  LangButton,
  MobileLangButton,
  LangDropdownContainer,
  LangDropdownMenu,
  LangOptionBtn,
} from './styles';

import { useLanguage } from '../../contexts/LanguageContext';

import { HeaderProps } from './types';
import QuoteModal from '../QuoteModal';

function Header({ account }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const { lang, toggleLang, setLang, t } = useLanguage();

  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const languages = [
    { 
      code: 'FR', 
      label: 'Français', 
      flagSvg: 'https://flagcdn.com/w40/fr.png' 
    },
    { 
      code: 'EN', 
      label: 'English', 
      flagSvg: 'https://flagcdn.com/w40/gb.png' 
    },
    { 
      code: 'AR', 
      label: 'العربية', 
      flagSvg: 'https://flagcdn.com/w40/sa.png' 
    }
  ];

  const handleLangChange = (code: string) => {
    if (code === lang) return;
    setIsLangMenuOpen(false);
    localStorage.setItem('lang', code);
    const isDirectionChange = (lang === 'AR') !== (code === 'AR');
    if (isDirectionChange) {
      window.location.reload();
    } else {
      setLang(code as any);
    }
  };

  const navItems = [
    { label: t('nav.about'), link: '#about-us' },
    { label: t('nav.services'), link: '#services' },
    { label: t('nav.portfolio'), link: '#portfolio' },
    { label: t('nav.testimonials'), link: '#testimonial' },
    { label: t('nav.contact'), link: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const checkDarkMode = () => {
      const isDark = document.documentElement.classList.contains('dark');
      console.log('Dark mode check:', isDark);
      setIsDarkMode(isDark);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('storage', checkDarkMode);

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
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('storage', checkDarkMode);
      window.removeEventListener('darkModeChange', checkDarkMode);
      observer.disconnect();
    };
  }, []);

  return (
    <NavHeader
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      isScrolled={scrolled}
      className={scrolled ? 'is-scrolled' : ''}
    >
      <Container>
        {/* Logo Section */}
        <LogoWrapper onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <LogoImg
            key={isDarkMode ? 'dark' : 'light'}
            src={isDarkMode ? logoDark : logo}
            alt="IBAH Logo"
            className="header-logo"
          />
          <LogoTextGroup>
            <LogoTitle isScrolled={scrolled}>
              IBAH
            </LogoTitle>
            <LogoSubtitle isScrolled={scrolled}>
              DIGITAL PRODUCTS  <span style={{ color: '#A44C4C' }}>&</span> SOLUTIONS
            </LogoSubtitle>
          </LogoTextGroup>
        </LogoWrapper>

        {/* Desktop Navigation */}
        <DesktopNav>
          {navItems.map(item => (
            <NavLinkItem
              key={item.label}
              href={item.link}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              isScrolled={scrolled}
              isDarkMode={isDarkMode}
              className={isDarkMode ? 'dark-nav-link' : ''}
            >
              {item.label}
            </NavLinkItem>
          ))}
          
        </DesktopNav>

        {/* Action Group */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <LangDropdownContainer
            onMouseEnter={() => setIsLangMenuOpen(true)}
            onMouseLeave={() => setIsLangMenuOpen(false)}
          >
            <LangButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              isScrolled={scrolled}
              isDarkMode={isDarkMode}
              className={isDarkMode ? 'dark-nav-link' : ''}
              aria-label={t('nav.changeLang')}
              style={{ fontWeight: 700 }}
            >
              {lang} <FontAwesomeIcon icon={faGlobe} style={{ fontSize: '13px', marginLeft: '4px' }} />
            </LangButton>

            <AnimatePresence>
              {isLangMenuOpen && (
                <LangDropdownMenu
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {languages.map(l => (
                    <LangOptionBtn
                      key={l.code}
                      isActive={lang === l.code}
                      onClick={() => handleLangChange(l.code)}
                      style={{ gap: '8px', justifyContent: 'center', padding: '8px 10px' }}
                    >
                      <img 
                        src={l.flagSvg} 
                        alt={l.code} 
                        style={{ width: '18px', height: '12px', borderRadius: '2px', objectFit: 'cover' }} 
                      />
                      <span style={{ fontWeight: 700, fontSize: '13.5px' }}>{l.code}</span>
                    </LangOptionBtn>
                  ))}
                </LangDropdownMenu>
              )}
            </AnimatePresence>
          </LangDropdownContainer>

          {/* CTA Button */}
          <CtaButton
            onClick={(e) => {
              e.preventDefault();
              setIsQuoteModalOpen(true);
            }}
            isScrolled={scrolled}
            className="cta-button"
          >
            {t('nav.quote')}
          </CtaButton>
        </div>

        {/* Mobile Menu Button */}
        <MenuToggleButton
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          isScrolled={scrolled}
          aria-label="Toggle navigation menu"
        >
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </MenuToggleButton>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <MobileMenu
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            isScrolled={scrolled}
          >
            {navItems.map(item => (
              <MobileNavLink
                key={item.label}
                href={item.link}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </MobileNavLink>
            ))}
            <div style={{ marginTop: '12px', paddingTop: '16px', borderTop: '1px solid rgba(0,0,0,0.08)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', width: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
                {languages.map(l => (
                  <button
                    key={l.code}
                    onClick={() => {
                      handleLangChange(l.code);
                      setIsMenuOpen(false);
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '6px 12px',
                      borderRadius: '20px',
                      border: lang === l.code ? '1.5px solid #A44C4C' : '1px solid rgba(0,0,0,0.1)',
                      background: lang === l.code ? 'rgba(164, 76, 76, 0.1)' : 'transparent',
                      color: lang === l.code ? '#A44C4C' : isDarkMode ? '#FFFFFF' : '#333333',
                      fontWeight: 700,
                      fontSize: '13px',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <img 
                      src={l.flagSvg} 
                      alt={l.code} 
                      style={{ width: '18px', height: '13px', borderRadius: '2px', objectFit: 'cover' }} 
                    />
                    <span>{l.code}</span>
                  </button>
                ))}
              </div>
              
              <CtaButton
                onClick={(e) => {
                  e.preventDefault();
                  setIsMenuOpen(false);
                  setIsQuoteModalOpen(true);
                }}
                isScrolled={true}
                className="cta-button"
                style={{ display: 'inline-block' }}
              >
                {t('nav.quote')}
              </CtaButton>
            </div>
          </MobileMenu>
        )}
      </AnimatePresence>

      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />
    </NavHeader>
  );
}

export default Header;
