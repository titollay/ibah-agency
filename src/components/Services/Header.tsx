import React from 'react';

interface HeaderProps {
  header: {
    title?: string;
    body?: string;
  };
}

const ServicesHeader: React.FC<HeaderProps> = ({ header }) => {
  const title = header?.title || "NOS SERVICES";
  const body = header?.body || "Des solutions numériques sur mesure conçues pour propulser votre entreprise vers l'excellence.";

  return (
    <header className="services-header">
      <span className="services-label">Savoir-Faire</span>
      <h2 className="services-title">{title}</h2>
      <p className="services-paragraph">{body}</p>
    </header>
  );
};

export default ServicesHeader;
