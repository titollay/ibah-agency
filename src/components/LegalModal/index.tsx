import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import {
  ModalOverlay,
  ModalContainer,
  CloseButton,
  ModalHeader,
  ModalTitle,
  TabsContainer,
  TabButton,
  ModalBody,
} from './styles';

export type LegalTabType = 'privacy' | 'terms' | 'legal';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: LegalTabType;
}

export default function LegalModal({ isOpen, onClose, defaultTab = 'privacy' }: LegalModalProps) {
  const { lang } = useLanguage();
  const [activeTab, setActiveTab] = useState<LegalTabType>(defaultTab);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setActiveTab(defaultTab);
  }, [defaultTab, isOpen]);

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };
    checkDarkMode();
    window.addEventListener('darkModeChange', checkDarkMode);
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => {
      window.removeEventListener('darkModeChange', checkDarkMode);
      observer.disconnect();
    };
  }, []);

  const tabLabels = {
    privacy: { FR: 'Politique de confidentialité', EN: 'Privacy Policy', AR: 'سياسة الخصوصية' },
    terms: { FR: "Conditions d'utilisation", EN: 'Terms of Service', AR: 'شروط الاستخدام' },
    legal: { FR: 'Mentions Légales', EN: 'Legal Notice', AR: 'إشعارات قانونية' },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <ModalOverlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          isDarkMode={isDarkMode}
        >
          <ModalContainer
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            isDarkMode={isDarkMode}
          >
            <CloseButton onClick={onClose} isDarkMode={isDarkMode} aria-label="Close">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </CloseButton>

            <ModalHeader isDarkMode={isDarkMode}>
              <ModalTitle isDarkMode={isDarkMode}>
                {lang === 'AR' ? 'المعلومات والسياسات القانونية' : lang === 'EN' ? 'Legal & Privacy' : 'Informations Légales'}
              </ModalTitle>
              <TabsContainer>
                <TabButton
                  active={activeTab === 'privacy'}
                  onClick={() => setActiveTab('privacy')}
                  isDarkMode={isDarkMode}
                >
                  {tabLabels.privacy[lang as 'FR' | 'EN' | 'AR'] || tabLabels.privacy.FR}
                </TabButton>
                <TabButton
                  active={activeTab === 'terms'}
                  onClick={() => setActiveTab('terms')}
                  isDarkMode={isDarkMode}
                >
                  {tabLabels.terms[lang as 'FR' | 'EN' | 'AR'] || tabLabels.terms.FR}
                </TabButton>
                <TabButton
                  active={activeTab === 'legal'}
                  onClick={() => setActiveTab('legal')}
                  isDarkMode={isDarkMode}
                >
                  {tabLabels.legal[lang as 'FR' | 'EN' | 'AR'] || tabLabels.legal.FR}
                </TabButton>
              </TabsContainer>
            </ModalHeader>

            <ModalBody isDarkMode={isDarkMode}>
              {activeTab === 'privacy' && (
                <div>
                  <h3>1. Collecte des données</h3>
                  <p>
                    IBAH Agency collecte uniquement les données nécessaires pour répondre à vos demandes de devis et projets (Nom, Email, Téléphone, Pays, Description).
                  </p>
                  <h3>2. Utilisation des données</h3>
                  <p>
                    Vos informations sont strictement confidentielles et ne sont jamais vendues ou partagées avec des tiers à des fins commerciales.
                  </p>
                  <h3>3. Sécurité</h3>
                  <p>
                    Nous appliquons des mesures de sécurité modernes pour protéger vos données contre tout accès non autorisé.
                  </p>
                </div>
              )}

              {activeTab === 'terms' && (
                <div>
                  <h3>1. Prestations de Services</h3>
                  <p>
                    IBAH Agency fournit des services de développement web/mobile, automatisation et conseil digital conformes aux cahiers des charges validés.
                  </p>
                  <h3>2. Propriété Intellectuelle</h3>
                  <p>
                    Tous les développements et créations livrés deviennent la propriété du client après le règlement intégral des honoraires.
                  </p>
                  <h3>3. Engagements</h3>
                  <p>
                    Nous nous engageons à offrir un accompagnement personnalisé et un respect strict des délais convenus.
                  </p>
                </div>
              )}

              {activeTab === 'legal' && (
                <div>
                  <h3>Éditeur du site</h3>
                  <p><strong>Raison sociale :</strong> IBAH Agency</p>
                  <p><strong>Siège social :</strong> Oujda, Maroc</p>
                  <p><strong>Contact :</strong> tahaallay123@gmail.com | +212 676 892 376</p>
                  <h3>Hébergement</h3>
                  <p>Le site est hébergé sur des serveurs sécurisés haute performance.</p>
                </div>
              )}
            </ModalBody>
          </ModalContainer>
        </ModalOverlay>
      )}
    </AnimatePresence>
  );
}
