import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

import logo from '../../assets/img/logo.png';
import logo1 from '../../assets/img/logo-1.png';
import logoDark from '../../assets/img/logo-1.png';

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
} from './styles';

import { HeaderProps } from './types';
import QuoteModal from '../QuoteModal';

function Header({ account }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const navItems = [
    { label: 'À propos', link: '#about-us' },
    { label: 'Services', link: '#services' },
    { label: 'Portfolio', link: '#portfolio' },
    { label: 'Testimonials', link: '#testimonial' },
    { label: 'Contact', link: '#contact' },
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

        {/* CTA Button */}
        <CtaButton
          onClick={(e) => {
            e.preventDefault();
            setIsQuoteModalOpen(true);
          }}
          isScrolled={scrolled}
          className="cta-button"
        >
          Demander un devis
        </CtaButton>

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
            <div style={{ marginTop: '12px', paddingTop: '16px', borderTop: '1px solid rgba(0,0,0,0.08)' }}>
              <CtaButton
                onClick={(e) => {
                  e.preventDefault();
                  setIsQuoteModalOpen(true);
                }}
                isScrolled={true}
                className="cta-button"
                style={{ display: 'inline-block' }}
              >
                Demander un devis
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
