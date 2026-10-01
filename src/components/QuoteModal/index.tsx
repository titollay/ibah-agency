import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { useLanguage } from '../../contexts/LanguageContext';
import CountrySelect, { COUNTRIES } from './CountrySelect';

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
  BudgetInputRow,
  BudgetNumberInput,
  BudgetCurrency,
  StepIndicatorContainer,
  StepDot,
  StepLine,
  NavButtonsContainer,
  SecondaryButton,
  SuccessContainer,
  SuccessIconWrapper,
  SuccessTitle,
  SuccessSubtitle,
} from './styles';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedService?: string | null;
}

function QuoteModal({ isOpen, onClose, preSelectedService }: QuoteModalProps) {
  const { t, lang } = useLanguage();
  const [step, setStep] = useState(1);
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    serviceType: '',
    urgency: '',
    budget: 500,
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
    if (isOpen) {
      setStep(1);
      if (preSelectedService) {
        setFormData(prev => ({ ...prev, serviceType: preSelectedService }));
      }
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

      const selectedCountryObj = COUNTRIES.find(c => c.code === formData.country);
      const countryName = selectedCountryObj 
        ? (selectedCountryObj.name[lang as 'FR' | 'EN' | 'AR'] || selectedCountryObj.name.FR)
        : (formData.country || 'N/A');

      const templateParams = {
        fullName: formData.fullName,
        businessEmail: formData.email,
        phone: formData.phone || 'N/A',
        country: countryName,
        serviceType: formData.serviceType,
        urgency: formData.urgency || 'Flexible',
        estimatedBudget: formData.budget.toLocaleString(lang === 'EN' ? 'en-US' : 'fr-FR') + ' ' + (lang === 'EN' ? '$' : '€'),
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
        phone: '',
        country: '',
        serviceType: '',
        urgency: '',
        budget: 500,
        projectDescription: '',
        agreedToPrivacy: false,
      });
      setAttachedFile(null);

      setTimeout(() => {
        setIsSubmitted(false);
        setStep(1);
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

  const handleNext = () => {
    if (formRef.current) {
      if (formRef.current.reportValidity()) {
        setStep(prev => prev + 1);
      }
    }
  };

  const handleBack = () => {
    setStep(prev => prev - 1);
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
              <ModalTitle isDarkMode={isDarkMode}>{t('quoteModal.title')}</ModalTitle>
              <ModalSubtitle isDarkMode={isDarkMode}>
                {t('quoteModal.subtitle')}
              </ModalSubtitle>
            </ModalHeader>

            {isSubmitted ? (
              <SuccessContainer
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <SuccessIconWrapper
                  isDarkMode={isDarkMode}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.1, type: "spring", stiffness: 200, damping: 15 }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </SuccessIconWrapper>

                <SuccessTitle isDarkMode={isDarkMode}>
                  {t('quoteModal.successTitle')}
                </SuccessTitle>
                <SuccessSubtitle isDarkMode={isDarkMode}>
                  {t('quoteModal.successDesc')}
                </SuccessSubtitle>
              </SuccessContainer>
            ) : (
              <form onSubmit={handleSubmit} ref={formRef}>
                <StepIndicatorContainer>
                  <StepDot active={step === 1} completed={step > 1} isDarkMode={isDarkMode}>1</StepDot>
                  <StepLine completed={step > 1} />
                  <StepDot active={step === 2} completed={step > 2} isDarkMode={isDarkMode}>2</StepDot>
                  <StepLine completed={step > 2} />
                  <StepDot active={step === 3} completed={step > 3} isDarkMode={isDarkMode}>3</StepDot>
                </StepIndicatorContainer>

              <FormGrid>
                {step === 1 && (
                  <>
                <FormGroup>
                  <FormLabel htmlFor="fullName" isDarkMode={isDarkMode}>{t('quoteModal.nameLabel')}</FormLabel>
                  <FormInput
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    placeholder={t('quoteModal.namePlaceholder')}
                    isDarkMode={isDarkMode}
                  />
                </FormGroup>

                <FormGroup>
                  <FormLabel htmlFor="email" isDarkMode={isDarkMode}>{t('quoteModal.emailLabel')}</FormLabel>
                  <FormInput
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder={t('quoteModal.emailPlaceholder')}
                    isDarkMode={isDarkMode}
                  />
                </FormGroup>

                  </>
                )}

                {step === 2 && (
                  <>
                <FormGroup>
                  <FormLabel htmlFor="serviceType" isDarkMode={isDarkMode}>{t('quoteModal.serviceLabel')}</FormLabel>
                  <FormSelect
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    required
                    isDarkMode={isDarkMode}
                  >
                    <option value="">{t('quoteModal.servicePlaceholder')}</option>
                    {t<{title: string}[]>('services.items')?.map((s: {title: string}, i: number) => (
                      <option key={i} value={s.title}>{s.title}</option>
                    )) || (
                      <>
                        <option value="web-development">Développement Web</option>
                        <option value="mobile-app">Application Mobile</option>
                        <option value="ai-data">Solutions IA & Data</option>
                        <option value="automation">Automatisation</option>
                        <option value="consulting">Conseil & Audit Digital</option>
                      </>
                    )}
                  </FormSelect>
                </FormGroup>

                <FormGroup>
                  <FormLabel htmlFor="phone" isDarkMode={isDarkMode}>{t('quoteModal.phoneLabel')}</FormLabel>
                  <FormInput
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t('quoteModal.phonePlaceholder')}
                    isDarkMode={isDarkMode}
                  />
                </FormGroup>

                <FormGroup>
                  <FormLabel isDarkMode={isDarkMode}>{t('quoteModal.countryLabel')}</FormLabel>
                  <CountrySelect
                    value={formData.country}
                    onChange={(code) => setFormData(prev => ({ ...prev, country: code }))}
                    isDarkMode={isDarkMode}
                    placeholder={t('quoteModal.countryPlaceholder')}
                  />
                </FormGroup>


                <FormGroup>
                  <FormLabel htmlFor="urgency" isDarkMode={isDarkMode}>{t('quoteModal.urgencyLabel')}</FormLabel>
                  <FormSelect
                    id="urgency"
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleChange}
                    isDarkMode={isDarkMode}
                  >
                    {t<{value: string, label: string}[]>('quoteModal.urgencyOptions')?.map((opt, i) => (
                      <option key={i} value={opt.value}>{opt.label}</option>
                    ))}
                  </FormSelect>
                </FormGroup>

                <FormGroup>
                  <FormLabel isDarkMode={isDarkMode}>{t('quoteModal.budgetLabel')}</FormLabel>
                  <BudgetRangeContainer>
                    <BudgetRangeInput
                      name="budget"
                      type="range"
                      min="50"
                      max="100000"
                      step="50"
                      value={formData.budget}
                      onChange={handleChange}
                    />
                    <BudgetInputRow>
                      <BudgetNumberInput
                        type="number"
                        min={50}
                        max={100000}
                        value={formData.budget}
                        onChange={(e) => {
                          const val = Math.max(50, Math.min(100000, Number(e.target.value) || 50));
                          setFormData(prev => ({ ...prev, budget: val }));
                        }}
                        onBlur={(e) => {
                          if (!e.target.value || Number(e.target.value) < 50) {
                            setFormData(prev => ({ ...prev, budget: 50 }));
                          }
                        }}
                      />
                      <BudgetCurrency>{lang === 'EN' ? '$' : '€'}</BudgetCurrency>
                    </BudgetInputRow>
                  </BudgetRangeContainer>
                </FormGroup>

                  </>
                )}

                {step === 3 && (
                  <>
                <FormGroup style={{ gridColumn: '1 / -1' }}>
                  <FormLabel htmlFor="projectDescription" isDarkMode={isDarkMode}>{t('quoteModal.descLabel')}</FormLabel>
                  <FormTextarea
                    id="projectDescription"
                    name="projectDescription"
                    value={formData.projectDescription}
                    onChange={handleChange}
                    rows={4}
                    placeholder={t('quoteModal.descPlaceholder')}
                    isDarkMode={isDarkMode}
                  />
                </FormGroup>

                <FormGroup style={{ gridColumn: '1 / -1' }}>
                  <FileUploadArea onClick={() => document.getElementById('fileUpload')?.click()} isDarkMode={isDarkMode}>
                    <FileUploadText isDarkMode={isDarkMode}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12" />
                      </svg>
                      <span>{attachedFile ? `📎 ${attachedFile.name}` : t('quoteModal.fileLabel')}</span>
                    </FileUploadText>
                    <input
                      type="file"
                      style={{ display: 'none' }}
                      id="fileUpload"
                      onChange={handleFileUpload}
                      onClick={(e) => e.stopPropagation()}
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
                      {t('quoteModal.privacyLabel')}
                    </CheckboxLabel>
                  </CheckboxGroup>
                </FormGroup>

                  </>
                )}
              </FormGrid>

              <NavButtonsContainer>
                {step > 1 ? (
                  <SecondaryButton type="button" onClick={handleBack} isDarkMode={isDarkMode}>
                    {lang === 'AR' ? 'رجوع' : lang === 'EN' ? 'Back' : 'Retour'}
                  </SecondaryButton>
                ) : <div />}

                {step < 3 ? (
                  <SubmitButton type="button" onClick={handleNext}>
                    {lang === 'AR' ? 'التالي' : lang === 'EN' ? 'Next' : 'Suivant'}
                  </SubmitButton>
                ) : (
                  <SubmitButton type="submit" disabled={isSubmitting}>
                    {isSubmitting ? t('quoteModal.submittingBtn') : t('quoteModal.submitBtn')}
                  </SubmitButton>
                )}
              </NavButtonsContainer>
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
