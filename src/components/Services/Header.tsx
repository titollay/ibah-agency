import React from 'react';

import { useLanguage } from '../../contexts/LanguageContext';

interface HeaderProps {
  header: {
    title?: string;
    body?: string;
  };
}

const ServicesHeader: React.FC<HeaderProps> = ({ header }) => {
  const { t } = useLanguage();
  const title = header?.title || t('services.title');
  const body = header?.body || t('services.body');

  return (
    <header className="services-header">
      <span className="services-label">{t('services.label')}</span>
      <h2 className="services-title">{title}</h2>
      <p className="services-paragraph">{body}</p>
    </header>
  );
};

export default ServicesHeader;
