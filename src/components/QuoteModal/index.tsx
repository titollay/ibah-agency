import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

import {
  ModalOverlay,
  ModalContainer,
  ModalHeader,
  ModalTitle,
  ModalSubtitle,
  FormGrid,
  FormGroup,
  FormLabel,
  FormInput,
  FormSelect,
  FormTextarea,
  FileUploadArea,
  FileUploadText,
  CheckboxGroup,
  CheckboxInput,
  CheckboxLabel,
  SubmitButton,
  CloseButton,
  BudgetRangeContainer,
  BudgetRangeInput,
  BudgetValueDisplay,
} from './styles';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedService?: string | null;
}

function QuoteModal({ isOpen, onClose, preSelectedService }: QuoteModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    serviceType: '',
    budget: 25000,
    projectDescription: '',
    agreedToPrivacy: false,
  });
  const [attachedFile, setAttachedFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };

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
      window.removeEventListener('darkModeChange', checkDarkMode);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (preSelectedService && isOpen) {
      setFormData(prev => ({ ...prev, serviceType: preSelectedService }));
    }
  }, [preSelectedService, isOpen]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
      const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration is missing. Please check environment variables.');
      }

      const templateParams = {
        fullName: formData.fullName,
        businessEmail: formData.email,
        serviceType: formData.serviceType,
        estimatedBudget: formData.budget.toLocaleString('fr-FR') + ' €',
        projectDescription: formData.projectDescription,
        reply_to: formData.email,
      };

      let emailParams: any = { ...templateParams };

      if (attachedFile) {
        emailParams.attachments = [
          {
            name: attachedFile.name,
            data: await attachedFile.text(),
            type: attachedFile.type,
          },
        ];
      }

      await emailjs.send(serviceId, templateId, emailParams, publicKey);

      setIsSubmitted(true);
      setFormData({
        fullName: '',
        email: '',
        serviceType: '',
        budget: 25000,
        projectDescription: '',
        agreedToPrivacy: false,
      });
      setAttachedFile(null);

      setTimeout(() => {
        setIsSubmitted(false);
        onClose();
      }, 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit form. Please try again.');
      console.error('EmailJS error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const newValue = type === 'range' ? Number(value) : value;
    setFormData(prev => ({ ...prev, [name]: newValue }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAttachedFile(e.target.files[0]);
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, agreedToPrivacy: e.target.checked }));
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
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
            isDarkMode={isDarkMode}
          >
            <CloseButton onClick={(e: React.MouseEvent) => {
              e.preventDefault();
              onClose();
            }} aria-label="Close modal" isDarkMode={isDarkMode}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </CloseButton>

            <ModalHeader>
              <ModalTitle isDarkMode={isDarkMode}>Demander un devis gratuit</ModalTitle>
              <ModalSubtitle isDarkMode={isDarkMode}>
                Parlez-nous de votre projet, et nous vous répondrons dans les 24 heures.
              </ModalSubtitle>
            </ModalHeader>

            {isSubmitted ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>✓</div>
                <h3 style={{ color: '#A44C4C', marginBottom: '8px' }}>Demande envoyée avec succès !</h3>
                <p style={{ color: '#666' }}>Nous vous répondrons dans les plus brefs délais.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
              <FormGrid>
                <FormGroup>
                  <FormLabel htmlFor="fullName" isDarkMode={isDarkMode}>Nom complet</FormLabel>
                  <FormInput
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    placeholder="Jean Dupont"
                    isDarkMode={isDarkMode}
                  />
                </FormGroup>

                <FormGroup>
                  <FormLabel htmlFor="email" isDarkMode={isDarkMode}>Email</FormLabel>
                  <FormInput
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="jean@entreprise.com"
                    isDarkMode={isDarkMode}
                  />
                </FormGroup>

                <FormGroup>
                  <FormLabel htmlFor="serviceType" isDarkMode={isDarkMode}>Quel service avez-vous besoin ?</FormLabel>
                  <FormSelect
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    required
                    isDarkMode={isDarkMode}
                  >
                    <option value="">Sélectionnez un service</option>
                    <option value="web-development">Développement Web</option>
                    <option value="mobile-app">Application Mobile</option>
                    <option value="ai-data">Solutions IA & Data</option>
                    <option value="automation">Automatisation</option>
                    <option value="consulting">Conseil & Audit Digital</option>
                  </FormSelect>
                </FormGroup>

                <FormGroup>
                  <FormLabel isDarkMode={isDarkMode}>Budget estimé</FormLabel>
                  <BudgetRangeContainer>
                    <BudgetRangeInput
                      name="budget"
                      type="range"
                      min="1000"
                      max="100000"
                      step="1000"
                      value={formData.budget}
                      onChange={handleChange}
                    />
                    <BudgetValueDisplay>
                      {formData.budget.toLocaleString('fr-FR')} €
                    </BudgetValueDisplay>
                  </BudgetRangeContainer>
                </FormGroup>

                <FormGroup style={{ gridColumn: '1 / -1' }}>
                  <FormLabel htmlFor="projectDescription" isDarkMode={isDarkMode}>Parlez-nous de votre projet</FormLabel>
                  <FormTextarea
                    id="projectDescription"
                    name="projectDescription"
                    value={formData.projectDescription}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Décrivez vos objectifs, fonctionnalités ou exigences spécifiques..."
                    isDarkMode={isDarkMode}
                  />
                </FormGroup>

                <FormGroup style={{ gridColumn: '1 / -1' }}>
                  <FileUploadArea onClick={() => document.getElementById('fileUpload')?.click()} isDarkMode={isDarkMode}>
                    <FileUploadText isDarkMode={isDarkMode}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12" />
                      </svg>
                      <span>Joindre les spécifications (Optionnel)</span>
                    </FileUploadText>
                    <input
                      type="file"
                      style={{ display: 'none' }}
                      id="fileUpload"
                      onChange={handleFileUpload}
                    />
                  </FileUploadArea>
                </FormGroup>

                <FormGroup style={{ gridColumn: '1 / -1' }}>
                  <CheckboxGroup>
                    <CheckboxInput
                      id="privacy"
                      type="checkbox"
                      checked={formData.agreedToPrivacy}
                      onChange={handleCheckboxChange}
                      required
                    />
                    <CheckboxLabel htmlFor="privacy" isDarkMode={isDarkMode}>
                      J'accepte la politique de confidentialité
                    </CheckboxLabel>
                  </CheckboxGroup>
                </FormGroup>

                <FormGroup style={{ gridColumn: '1 / -1' }}>
                  <SubmitButton type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande'}
                  </SubmitButton>
                </FormGroup>
              </FormGrid>
            </form>
            )}
            {error && (
              <div style={{ 
                marginTop: '16px', 
                padding: '12px', 
                backgroundColor: '#fee2e2', 
                color: '#dc2626', 
                borderRadius: '8px',
                fontSize: '14px',
                textAlign: 'center'
              }}>
                {error}
              </div>
            )}
          </ModalContainer>
        </ModalOverlay>
      )}
    </AnimatePresence>
  );
}

export default QuoteModal;
