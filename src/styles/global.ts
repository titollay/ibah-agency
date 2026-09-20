import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: 0 solid;
    
  }
    
  
   html, body {
    width: 100%;
    overflow-x: hidden;
  }

  a {
    color: ${({ theme }) => theme.colors.inline};
    text-decoration: none;
    cursor: pointer;
  }

  body {
    width: 100%;
    min-height: 100vh;
    height: auto;
    background-color: ${({ theme }) => theme.colors.primary};
    overflow-x: hidden;
    overflow-y: auto;
    font-size: 12px;
    font-family: 'Montserrat', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  /* Dark Mode Styles */
  html.dark {
    background-color: #0a0a0a;
  }

  html.dark body {
    background-color: #0a0a0a !important;
    color: #e0e0e0 !important;
  }

  html.dark * {
    color: inherit !important;
  }

  html.dark a {
    color: #A44C4C !important;
  }

  html.dark h1,
  html.dark h2,
  html.dark h3,
  html.dark h4,
  html.dark h5,
  html.dark h6 {
    color: #ffffff !important;
  }

  html.dark p,
  html.dark span,
  html.dark div,
  html.dark section,
  html.dark article {
    color: #d0d0d0 !important;
  }

  html.dark .services {
    /* Services section keeps its original background in dark mode */
    background-color: #0a0a0a !important;
  }

  html.dark .portfolio-section {
    background-color: #0a0a0a !important;
  }

  html.dark #about-us {
    background-color: #0a0a0a !important;
  }

  html.dark .testimonials-root {
    background-color: #0a0a0a !important;
  }

  html.dark .testimonial-card,
  html.dark .featured-slider-card {
    background-color: #18181C !important;
  }

  html.dark .prod-card {
    box-shadow: 0 2px 10px rgba(164, 76, 76, 0.2) !important;
  }

  html.dark .contact-root {
    background-color: #0a0a0a !important;
  }

  html.dark footer {
    background-color: #0a0a0a !important;
    color: #e0e0e0 !important;
  }

  html.dark .footer {
    background-color: #0a0a0a !important;
  }

  html.dark .footer a,
  html.dark .footer-link {
    color: #ffffff !important;
  }

  html.dark .footer a:hover,
  html.dark .footer-link:hover {
    color: #A44C4C !important;
  }

  html.dark .footer-input {
    background-color: #18181C !important;
    border-color: #333333 !important;
    color: #ffffff !important;
  }

  html.dark .footer-input::placeholder {
    color: #888888 !important;
  }

  html.dark .footer-social-btn {
    background-color: #000000 !important;
    border-color: #333333 !important;
  }

  html.dark svg {
    filter: brightness(0.7) saturate(0.6) !important;
  }

  html.dark img {
    filter: brightness(0.85) !important;
  }

  /* Dark mode for background images */
  html.dark .portfolio-section::before {
    filter: brightness(0.6) saturate(0.7) !important;
  }

  html.dark .services::before {
    filter: brightness(0.8) saturate(0.7) !important;
  }

  html.dark .testimonials-root::before {
    filter: brightness(0.8) saturate(0.7) !important;
  }

  html.dark .testimonials-deco-left,
  html.dark .testimonials-deco-right {
    filter: brightness(0.8) saturate(0.6) !important;
  }

  html.dark nav,
  html.dark .navbar,
  html.dark .header {
    background-color: #0a0a0a !important;
    color: #e0e0e0 !important;
  }

  html.dark .nav-link,
  html.dark .navbar-link,
  html.dark a[href="#about-us"],
  html.dark a[href="#services"],
  html.dark a[href="#portfolio"],
  html.dark a[href="#testimonial"],
  html.dark a[href="#contact"],
  html.dark .dark-mode-nav-link {
    color: #ffffff !important;
  }

  html.dark .scrolldown {
    border-color: #ffffff !important;
  }

  html.dark .scrolldown::before {
    background-color: #ffffff !important;
  }

  html.dark .chevrondown {
    border-color: #ffffff !important;
  }

  html.dark #about-us video,
  html.dark .about-video-frame {
    border-color: #18181C !important;
    background-color: #18181C !important;
  }

  html.dark .nav-link:hover,
  html.dark .navbar-link:hover,
  html.dark a[href="#about-us"]:hover,
  html.dark a[href="#services"]:hover,
  html.dark a[href="#portfolio"]:hover,
  html.dark a[href="#testimonial"]:hover,
  html.dark a[href="#contact"]:hover,
  html.dark .dark-nav-link:hover {
    color: #A44C4C !important;
  }

  /* QuoteModal dark mode */
  html.dark .modal-overlay {
    background-color: rgba(0, 0, 0, 0.8) !important;
  }

  html.dark .modal-container {
    background-color: #18181C !important;
    color: #e0e0e0 !important;
  }

  html.dark .modal-title {
    color: #ffffff !important;
  }

  html.dark .modal-subtitle {
    color: #a0a0a0 !important;
  }

  html.dark .form-label {
    color: #e0e0e0 !important;
  }

  html.dark .form-input,
  html.dark .form-select,
  html.dark .form-textarea {
    background-color: #0a0a0a !important;
    border-color: #333333 !important;
    color: #ffffff !important;
  }

  html.dark .form-input::placeholder,
  html.dark .form-textarea::placeholder {
    color: #666666 !important;
  }

  html.dark .file-upload-area {
    background-color: #0a0a0a !important;
    border-color: #333333 !important;
    color: #e0e0e0 !important;
  }

  html.dark .submit-button {
    background-color: #A44C4C !important;
    color: #ffffff !important;
  }

  html.dark .close-button {
    color: #e0e0e0 !important;
  }

  html.dark .close-button:hover {
    color: #A44C4C !important;
  }

  /* ComingSoon dark mode */
  html.dark .coming-soon-root {
    background-color: #0a0a0a !important;
  }

  html.dark .coming-soon-container {
    color: #e0e0e0 !important;
  }

  html.dark .coming-soon-title {
    color: #ffffff !important;
  }

  html.dark .coming-soon-subtitle {
    color: #a0a0a0 !important;
  }

  html.dark .coming-soon-back-btn {
    color: #ffffff !important;
  }

  html.dark .footer-heading {
    color: #A44C4C !important;
  }

  /* Navbar border - only in dark mode when scrolled */
  html.dark nav.is-scrolled,
  html.dark .navbar.is-scrolled,
  html.dark .header.is-scrolled {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
  }

  /* Specific buttons with border in dark mode */
  html.dark .cta-button,
  html.dark .hero-cta-button,
  html.dark .footer-sub-btn {
    border: 1px solid rgba(255, 255, 255, 0.2) !important;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  ul {
    list-style: none;
  }
`;
