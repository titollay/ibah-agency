import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

type PercentageTextProps = {
  scrollProgress: number;
};

type WaveContainerProps = {
  scrollProgress: number;
};

type ButtonProps = {
  isDarkMode?: boolean;
};

const PercentageText = styled.div<PercentageTextProps>`
  position: absolute;
  font-size: 1rem;
  font-weight: bold;
  font-family: 'Poppins', sans-serif;
  color: ${({ scrollProgress }) => scrollProgress > 0.5 ? '#335f5f' : '#ffffff'};
  z-index: 10;
  pointer-events: none;
  text-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
  transition: opacity 0.3s ease;
`;

const ArrowIcon = styled.svg`
  position: absolute;
  width: 24px;
  height: 24px;
  fill: white;
  z-index: 20;
  pointer-events: none;
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.3s ease;
`;

const WaterContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.1);
  transition: opacity 0.3s ease;
`;

const WaveContainer = styled.div<WaveContainerProps>`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;

  svg {
    width: 120%;
    height: 120%;
  }

  .wave {
    transition: d 0.1s ease;
    filter: drop-shadow(0 0 3px rgba(255, 255, 255, 0.3));
  }

  .wave1 {
    animation: waveMove 1.5s ease-in-out infinite;
  }

  .wave2 {
    animation: waveMove 1.2s ease-in-out infinite reverse;
  }

  .wave3 {
    animation: waveMove 1.8s ease-in-out infinite;
    animation-delay: 0.3s;
  }

  @keyframes waveMove {
    0%, 100% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(-5px);
    }
  }
`;

const StyledWrapper = styled.div`
  position: fixed;
  bottom: 103px;
  right: 25px;
  z-index: 999;
`;

const Button = styled.button<ButtonProps>`
  cursor: pointer;
  position: relative;
  width: 65px;
  height: 65px;
  border-radius: 50%;
  background-color: #4A8C8C;
  border: 3px solid #ffffffee;
  box-shadow: 0 4px 12px #4a8c8c9f;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s;
  overflow: hidden;

  &::after {
    content: "Top";
    position: absolute;
    width: auto;
    background-color: #4A8C8C;
    font-size: 1em;
    box-sizing: border-box;
    padding: 10px 15px;
    border-radius: 25px;
    top: -50px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    transition: all 0.5s;
    transform: scale(0);
    color: white;
  }

  &:hover {
    transform: translateY(-3px);
    background-color: #3c7070;
    box-shadow: 0 6px 16px #4a8c8c9f;
  }

  &:hover::after {
    transform: scale(1);
  }

  &:hover ${PercentageText} {
    opacity: 0;
  }

  &:hover ${WaterContainer} {
    opacity: 0;
  }

  &:hover ${ArrowIcon} {
    opacity: 1;
    transform: translateY(0);
  }

  &:active {
    transform: translateY(2px);
  }

  /* Dark mode styles */
  &[data-dark-mode="true"] {
    background-color: #18181C;
    border-color: #4A8C8C;
  }

  &[data-dark-mode="true"]::after {
    background-color: #18181C;
    color: #ffffff;
  }

  &[data-dark-mode="true"]:hover {
    background-color: #4A8C8C;
  }
`;

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      setScrollProgress(Math.min(progress, 1));
      setIsVisible(scrollTop > 300);
    };

    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('darkModeChange', checkDarkMode);

    const observer = new MutationObserver(() => {
      checkDarkMode();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    handleScroll();
    checkDarkMode();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('darkModeChange', checkDarkMode);
      observer.disconnect();
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  const percentage = Math.round(scrollProgress * 100);

  return (
    <StyledWrapper>
      <Button isDarkMode={isDarkMode} onClick={scrollToTop} data-dark-mode={isDarkMode}>
        <WaterContainer>
          <WaveContainer scrollProgress={scrollProgress}>
            <svg viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <linearGradient id="waterGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
                  <stop offset="50%" stopColor="#ffffff" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0.75" />
                </linearGradient>
                <filter id="waterGlow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              <path
                className="wave wave1"
                fill="url(#waterGradient)"
                filter="url(#waterGlow)"
                d={`
                  M0,100 
                  L0,${Math.max(0, 100 - (scrollProgress * 100))}
                  Q12.5,${Math.max(0, 100 - (scrollProgress * 100) - 15)} 25,${Math.max(0, 100 - (scrollProgress * 100))}
                  T50,${Math.max(0, 100 - (scrollProgress * 100))}
                  T75,${Math.max(0, 100 - (scrollProgress * 100))}
                  T100,${Math.max(0, 100 - (scrollProgress * 100))}
                  L100,100 Z
                `}
              />
              <path
                className="wave wave2"
                fill="url(#waterGradient)"
                opacity="0.6"
                filter="url(#waterGlow)"
                d={`
                  M0,100 
                  L0,${Math.max(0, 100 - (scrollProgress * 100))}
                  Q12.5,${Math.max(0, 100 - (scrollProgress * 100) - 18)} 25,${Math.max(0, 100 - (scrollProgress * 100) - 6)}
                  T50,${Math.max(0, 100 - (scrollProgress * 100))}
                  T75,${Math.max(0, 100 - (scrollProgress * 100) - 6)}
                  T100,${Math.max(0, 100 - (scrollProgress * 100))}
                  L100,100 Z
                `}
              />
              <path
                className="wave wave3"
                fill="url(#waterGradient)"
                opacity="0.3"
                filter="url(#waterGlow)"
                d={`
                  M0,100 
                  L0,${Math.max(0, 100 - (scrollProgress * 100))}
                  Q12.5,${Math.max(0, 100 - (scrollProgress * 100) - 12)} 25,${Math.max(0, 100 - (scrollProgress * 100) - 4)}
                  T50,${Math.max(0, 100 - (scrollProgress * 100))}
                  T75,${Math.max(0, 100 - (scrollProgress * 100) - 4)}
                  T100,${Math.max(0, 100 - (scrollProgress * 100))}
                  L100,100 Z
                `}
              />
            </svg>
          </WaveContainer>
        </WaterContainer>
        <PercentageText scrollProgress={scrollProgress}>{percentage}%</PercentageText>
        <ArrowIcon viewBox="0 0 384 512">
          <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
        </ArrowIcon>
      </Button>
    </StyledWrapper>
  );
};

export default ScrollToTop;
