import styled from 'styled-components';
import { motion } from 'framer-motion';

type DarkModeProps = {
  isDarkMode?: boolean;
};

export const ModalOverlay = styled(motion.div)<DarkModeProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ isDarkMode }) => isDarkMode ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.6)'};
  backdrop-filter: blur(8px);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const ModalContainer = styled(motion.div)<DarkModeProps>`
  background: ${({ isDarkMode }) => isDarkMode ? '#18181C' : '#F8F7F5'};
  border-radius: 16px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  max-width: 750px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  padding: 52px;
  position: relative;

  @media (max-width: 768px) {
    padding: 36px 28px;
    max-height: 95vh;
  }
`;

export const CloseButton = styled.button<DarkModeProps>`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ isDarkMode }) => isDarkMode ? '#e0e0e0' : '#666666'};
  padding: 8px;
  border-radius: 8px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${({ isDarkMode }) => isDarkMode ? '#333333' : '#f5f5f5'};
    color: #A44C4C;
  }

  @media (max-width: 768px) {
    top: 15px;
    right: 15px;
  }
`;

export const ModalHeader = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

export const ModalTitle = styled.h2<DarkModeProps>`
  font-family: 'Montserrat', sans-serif;
  font-size: 28px;
  font-weight: 700;
  color: #A44C4C;
  margin-bottom: 8px;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const ModalSubtitle = styled.p<DarkModeProps>`
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  color: ${({ isDarkMode }) => isDarkMode ? '#a0a0a0' : '#666666'};
  line-height: 1.6;
  max-width: 400px;
  margin: 0 auto;
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 28px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormLabel = styled.label<DarkModeProps>`
  font-family: 'Montserrat', sans-serif;
  font-size: 13px;
  font-weight: 600;
  color: ${({ isDarkMode }) => isDarkMode ? '#e0e0e0' : '#333333'};
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const FormInput = styled.input<DarkModeProps>`
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  padding: 14px 18px;
  border: 2px solid ${({ isDarkMode }) => isDarkMode ? '#333333' : '#e5e7eb'};
  border-radius: 8px;
  background: ${({ isDarkMode }) => isDarkMode ? '#0a0a0a' : '#F8F7F5'};
  color: ${({ isDarkMode }) => isDarkMode ? '#ffffff' : '#333333'};
  transition: all 0.2s ease;
  outline: none;

  &:focus {
    border-color: #A44C4C;
    box-shadow: 0 0 0 3px rgba(164, 76, 76, 0.1);
  }

  &::placeholder {
    color: ${({ isDarkMode }) => isDarkMode ? '#666666' : '#9ca3af'};
  }

  @media (max-width: 768px) {
    padding: 12px 16px;
  }
`;

export const FormSelect = styled.select<DarkModeProps>`
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  padding: 14px 18px;
  border: 2px solid ${({ isDarkMode }) => isDarkMode ? '#333333' : '#e5e7eb'};
  border-radius: 8px;
  background: ${({ isDarkMode }) => isDarkMode ? '#0a0a0a' : '#F8F7F5'};
  color: ${({ isDarkMode }) => isDarkMode ? '#ffffff' : '#333333'};
  transition: all 0.2s ease;
  outline: none;
  cursor: pointer;

  &:focus {
    border-color: #A44C4C;
    box-shadow: 0 0 0 3px rgba(164, 76, 76, 0.1);
  }

  @media (max-width: 768px) {
    padding: 12px 16px;
  }
`;

export const FormTextarea = styled.textarea<DarkModeProps>`
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  padding: 14px 18px;
  border: 2px solid ${({ isDarkMode }) => isDarkMode ? '#333333' : '#e5e7eb'};
  border-radius: 8px;
  background: ${({ isDarkMode }) => isDarkMode ? '#0a0a0a' : '#F8F7F5'};
  color: ${({ isDarkMode }) => isDarkMode ? '#ffffff' : '#333333'};
  transition: all 0.2s ease;
  outline: none;
  resize: vertical;

  &:focus {
    border-color: #A44C4C;
    box-shadow: 0 0 0 3px rgba(164, 76, 76, 0.1);
  }

  &::placeholder {
    color: ${({ isDarkMode }) => isDarkMode ? '#666666' : '#9ca3af'};
  }

  @media (max-width: 768px) {
    padding: 12px 16px;
  }
`;

export const FileUploadArea = styled.div<DarkModeProps>`
  border: 2px dashed ${({ isDarkMode }) => isDarkMode ? '#333333' : '#e5e7eb'};
  border-radius: 8px;
  padding: 32px;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease;
  background: ${({ isDarkMode }) => isDarkMode ? '#0a0a0a' : '#f9fafb'};

  &:hover {
    border-color: #A44C4C;
    background: rgba(164, 76, 76, 0.05);
  }

  @media (max-width: 768px) {
    padding: 24px;
  }
`;

export const FileUploadText = styled.div<DarkModeProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: ${({ isDarkMode }) => isDarkMode ? '#e0e0e0' : '#666666'};
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;

  svg {
    color: #A44C4C;
  }

  span {
    font-weight: 500;
  }
`;

export const CheckboxGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const CheckboxInput = styled.input`
  width: 20px;
  height: 20px;
  accent-color: #A44C4C;
  cursor: pointer;
`;

export const CheckboxLabel = styled.label<DarkModeProps>`
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  color: ${({ isDarkMode }) => isDarkMode ? '#e0e0e0' : '#333333'};
  cursor: pointer;
  user-select: none;
`;

export const SubmitButton = styled.button`
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: #ffffff;
  background: #A44C4C;
  border: none;
  border-radius: 8px;
  padding: 16px 32px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(164, 76, 76, 0.3);

  &:hover {
    background: #8b3d3d;
    box-shadow: 0 6px 16px rgba(164, 76, 76, 0.4);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    padding: 14px 28px;
    font-size: 15px;
  }
`;

export const BudgetRangeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 14px;
`;

export const BudgetInputRow = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
`;

export const BudgetRangeInput = styled.input`
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 6px;
  border-radius: 4px;
  background: #e5e7eb;
  outline: none;
  cursor: pointer;
  flex: 1;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #A44C4C;
    cursor: pointer;
    box-shadow: 0 2px 6px rgba(164, 76, 76, 0.3);
    transition: all 0.2s ease;

    &:hover {
      transform: scale(1.1);
      box-shadow: 0 4px 12px rgba(164, 76, 76, 0.4);
    }
  }

  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #A44C4C;
    cursor: pointer;
    border: none;
    box-shadow: 0 2px 6px rgba(164, 76, 76, 0.3);
    transition: all 0.2s ease;

    &:hover {
      transform: scale(1.1);
      box-shadow: 0 4px 12px rgba(164, 76, 76, 0.4);
    }
  }

  &::-webkit-slider-runnable-track {
    border-radius: 4px;
  }

  &::-moz-range-track {
    border-radius: 4px;
  }

  @media (max-width: 768px) {
    height: 5px;

    &::-webkit-slider-thumb {
      width: 18px;
      height: 18px;
    }

    &::-moz-range-thumb {
      width: 18px;
      height: 18px;
    }
  }
`;

export const BudgetValueDisplay = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #A44C4C;
  text-align: center;
  padding: 6px 12px;
  background: rgba(164, 76, 76, 0.05);
  border-radius: 6px;
  border: 1px solid rgba(164, 76, 76, 0.2);
  min-width: 80px;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 13px;
    padding: 5px 10px;
    min-width: 70px;
  }
`;

export const BudgetNumberInput = styled.input`
  font-family: 'Montserrat', sans-serif;
  font-size: 15px;
  font-weight: 700;
  color: #A44C4C;
  text-align: center;
  width: 110px;
  padding: 8px 10px;
  background: rgba(164, 76, 76, 0.05);
  border: 2px solid rgba(164, 76, 76, 0.3);
  border-radius: 8px;
  outline: none;
  transition: all 0.2s ease;
  -moz-appearance: textfield;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &:focus {
    border-color: #A44C4C;
    box-shadow: 0 0 0 3px rgba(164, 76, 76, 0.12);
    background: rgba(164, 76, 76, 0.08);
  }

  @media (max-width: 768px) {
    width: 90px;
    font-size: 14px;
  }
`;

export const BudgetCurrency = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-size: 15px;
  font-weight: 700;
  color: #A44C4C;
`;

export const SuccessContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  text-align: center;
`;

export const SuccessIconWrapper = styled(motion.div)<DarkModeProps>`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: ${({ isDarkMode }) => isDarkMode ? 'rgba(164, 76, 76, 0.15)' : '#FDF2F2'};
  border: 2px solid #A44C4C;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #A44C4C;
  margin-bottom: 24px;

  svg {
    width: 40px;
    height: 40px;
    stroke-dasharray: 50;
    stroke-dashoffset: 0;
  }
`;

export const SuccessTitle = styled.h3<DarkModeProps>`
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: ${({ isDarkMode }) => isDarkMode ? '#FFFFFF' : '#111827'};
  margin-bottom: 12px;
`;

export const SuccessSubtitle = styled.p<DarkModeProps>`
  font-family: 'Montserrat', sans-serif;
  font-size: 15px;
  color: ${({ isDarkMode }) => isDarkMode ? '#9CA3AF' : '#4B5563'};
  max-width: 440px;
  line-height: 1.6;
`;

export const StepIndicatorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
  gap: 8px;
`;

export const StepDot = styled.div<{ active?: boolean, completed?: boolean, isDarkMode?: boolean }>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: ${({ active, completed, isDarkMode }) => 
    (active || completed) ? '#ffffff' : (isDarkMode ? '#666' : '#999')
  };
  background: ${({ active, completed, isDarkMode }) => 
    (active || completed) ? '#A44C4C' : (isDarkMode ? '#333' : '#e5e7eb')
  };
  transition: all 0.3s ease;
`;

export const StepLine = styled.div<{ completed?: boolean }>`
  height: 2px;
  width: 40px;
  background: ${({ completed }) => completed ? '#A44C4C' : '#e5e7eb'};
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    width: 20px;
  }
`;

export const NavButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;
  padding-top: 24px;
  border-top: 1px solid rgba(0,0,0,0.05);
`;

export const SecondaryButton = styled.button<{ isDarkMode?: boolean }>`
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: ${({ isDarkMode }) => isDarkMode ? '#e0e0e0' : '#666666'};
  background: transparent;
  border: 2px solid ${({ isDarkMode }) => isDarkMode ? '#333' : '#e5e7eb'};
  border-radius: 8px;
  padding: 16px 32px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ isDarkMode }) => isDarkMode ? '#333' : '#f5f5f5'};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    padding: 14px 28px;
    font-size: 15px;
  }
`;
