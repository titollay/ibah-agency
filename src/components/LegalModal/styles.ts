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
  background: ${({ isDarkMode }) => isDarkMode ? 'rgba(0, 0, 0, 0.85)' : 'rgba(0, 0, 0, 0.65)'};
  backdrop-filter: blur(8px);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const ModalContainer = styled(motion.div)<DarkModeProps>`
  background: ${({ isDarkMode }) => isDarkMode ? '#18181C' : '#FFFFFF'};
  border-radius: 16px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  max-width: 800px;
  width: 100%;
  max-height: 85vh;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    max-height: 90vh;
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
  z-index: 10;

  &:hover {
    background: ${({ isDarkMode }) => isDarkMode ? '#333333' : '#f5f5f5'};
    color: #A44C4C;
  }
`;

export const ModalHeader = styled.div<DarkModeProps>`
  padding: 32px 32px 20px;
  border-bottom: 1px solid ${({ isDarkMode }) => isDarkMode ? '#2d2d32' : '#e5e7eb'};
`;

export const ModalTitle = styled.h2<DarkModeProps>`
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: #A44C4C;
  margin-bottom: 16px;
`;

export const TabsContainer = styled.div`
  display: flex;
  gap: 12px;
  overflow-x: auto;
  padding-bottom: 4px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TabButton = styled.button<{ active?: boolean; isDarkMode?: boolean }>`
  font-family: 'Montserrat', sans-serif;
  font-size: 13px;
  font-weight: 600;
  padding: 8px 16px;
  border-radius: 20px;
  border: 1px solid ${({ active, isDarkMode }) =>
    active ? '#A44C4C' : isDarkMode ? '#333' : '#e2e8f0'};
  background: ${({ active, isDarkMode }) =>
    active ? '#A44C4C' : isDarkMode ? '#222' : '#f8fafc'};
  color: ${({ active, isDarkMode }) =>
    active ? '#FFFFFF' : isDarkMode ? '#a0a0a0' : '#64748b'};
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s ease;

  &:hover {
    border-color: #A44C4C;
    color: ${({ active }) => (active ? '#FFFFFF' : '#A44C4C')};
  }
`;

export const ModalBody = styled.div<DarkModeProps>`
  padding: 28px 32px;
  overflow-y: auto;
  font-family: 'Montserrat', sans-serif;
  color: ${({ isDarkMode }) => isDarkMode ? '#d1d5db' : '#374151'};
  font-size: 14px;
  line-height: 1.7;

  h3 {
    font-size: 16px;
    font-weight: 700;
    color: ${({ isDarkMode }) => isDarkMode ? '#ffffff' : '#111827'};
    margin-top: 20px;
    margin-bottom: 8px;

    &:first-child {
      margin-top: 0;
    }
  }

  p {
    margin-bottom: 12px;
  }

  ul {
    padding-left: 20px;
    margin-bottom: 12px;
  }

  li {
    margin-bottom: 4px;
  }
`;
