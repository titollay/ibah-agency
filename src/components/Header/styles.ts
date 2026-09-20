import styled from 'styled-components';
import { motion } from 'framer-motion';

type ScrolledProps = {
  isScrolled: boolean;
  isDarkMode?: boolean;
};

export const NavHeader = styled(motion.nav)<ScrolledProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: 80px;
  transition: all 0.3s ease;
  background-color: ${({ isScrolled }) =>
    isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent'};
  backdrop-filter: ${({ isScrolled }) => (isScrolled ? 'blur(10px)' : 'none')};
  border-bottom: ${({ isScrolled }) =>
    isScrolled ? '1px solid rgba(0, 0, 0, 0.08)' : '1px solid transparent'};
  box-shadow: ${({ isScrolled }) =>
    isScrolled ? '0 4px 20px rgba(0, 0, 0, 0.05)' : 'none'};
  width: 100%;
  box-sizing: border-box;

  @media (max-width:900px) {
    position: relative;
  }
   
`;

export const Container = styled.div`
  max-width: 1320px;
  margin: 0 auto;
  padding: 0 12px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

   @media (max-width: 480px) {
   height: 90%;
   padding: 0 0;
  }
`;


export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
`;

export const LogoImg = styled.img`
  width: 48px;
  height: 48px;
  object-fit: contain;
  transition: opacity 0.3s ease;
`;

export const LogoTextGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LogoTitle = styled.h1<ScrolledProps>`
  font-family: 'Montserrat', sans-serif;
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${({ isScrolled, theme }) =>
    isScrolled ? '#111111' : theme.colors.inline};
  transition: color 0.3s ease;

  span {
    color: ${({ theme }) => theme.colors.span};
  }
`;

export const LogoSubtitle = styled.p<ScrolledProps>`
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: ${({ isScrolled }) =>
    isScrolled ? '#666666' : 'rgba(0, 0, 0, 0.65)'};
  transition: color 0.3s ease;
`;

export const DesktopNav = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const NavLinkItem = styled(motion.a)<ScrolledProps>`
  font-family: 'Montserrat', sans-serif;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  text-decoration: none;
  color: ${({ isScrolled, isDarkMode }) => {
    if (isDarkMode) return '#ffffff';
    return isScrolled ? '#333333' : '#111111';
  }};
  transition: color 0.2s ease;

  &:hover {
    color: #A44C4C;
  }
`;

export const PhoneGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const PhoneLink = styled(motion.a)<ScrolledProps>`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12.5px;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
  text-decoration: none;
  color: ${({ isScrolled }) => (isScrolled ? '#334155' : '#1e293b')};
  transition: all 0.25s ease;
  padding: 6px 12px 6px 6px;
  border-radius: 100px;
  border: 1px solid ${({ isScrolled }) =>
    isScrolled ? 'rgba(164,76,76,0.2)' : 'rgba(0,0,0,0.1)'};
  background: ${({ isScrolled }) =>
    isScrolled ? 'rgba(164,76,76,0.06)' : 'rgba(255,255,255,0.15)'};
  backdrop-filter: blur(4px);
  letter-spacing: 0.01em;

 
  

  /* phone icon */
  .phone-icon {
    width: 13px;
    height: 13px;
    opacity: 0.6;
    flex-shrink: 0;
  }

  &:hover {
    color: #A44C4C;
    border-color: rgba(164,76,76,0.45);
    background: rgba(164,76,76,0.1);
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(164,76,76,0.15);

    .phone-badge { background: #883838; }
  }
`;

export const CtaButton = styled.button<ScrolledProps>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 22px;
  border-radius: 100px;
  font-family: 'Montserrat', sans-serif;
  font-size: 12.5px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  text-decoration: none;
  white-space: nowrap;
  transition: all 0.3s ease;
  cursor: pointer;

  background: #A44C4C;
  color: #ffffff;
  border: 2px solid #A44C4C;
  box-shadow: 0 4px 15px rgba(164, 76, 76, 0.3);

  &:hover {
    background: #883838;
    border-color: #883838;
    box-shadow: 0 6px 20px rgba(164, 76, 76, 0.4);
    transform: translateY(-2px);
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

export const MenuToggleButton = styled.button<ScrolledProps>`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  color: ${({ isScrolled }) => (isScrolled ? '#111111' : '#111111')};

  @media (max-width: 900px) {
    display: block;
  }

  svg {
    width: 24px;
    height: 24px;
    display: block;
  }
`;

export const MobileMenu = styled(motion.div)<ScrolledProps>`
  display: none;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    padding: 20px 24px;
    background: #F8F7F5;
    backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    align-items: center;
    text-align: center;
  }

  html.dark & {
    @media (max-width: 900px) {
      background: #080808;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
    }
  }
`;

export const MobileNavLink = styled.a`
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  text-decoration: none;
  color: #333333;
  padding: 10px 0;

  &:hover {
    color: ${({ theme }) => theme.colors.span};
  }
`;
