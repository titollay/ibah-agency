import styled from 'styled-components';
import { lighten } from 'polished';

type ArrowsProps = {
  arrowPosition: 'right' | 'left';
};

export const Wrapper = styled.section`
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  z-index: 5;

  @media (max-width: 768px) {
    width: 95%;
    top: 27%;
    padding: 0 15px;
    flex-direction: column;
    align-items: flex-start;
  }

  @media (max-width: 480px) {
    width: 95%;
    padding: 0px 10px;
    top: 24%;
  }
`;

export const TextWithOpacity = styled.p`
  flex: 1;
  font-size: 30px;
  color: ${({ theme }) => theme.colors.gray};

  @media (max-width: 768px) {
    font-size: 18px;
    flex: 0 0 100%;
    margin-bottom: 8px;
    order: 1;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const Amount = styled.p`
  flex: 0;
  letter-spacing: 5px;
  color: ${({ theme }) => theme.colors.gray};

  span {
    font-size: 60px;
    color: ${({ theme }) => theme.colors.inline};
    font-weight: 600;
  }
`;

export const Title = styled.h1`
  flex: 0 0 100%;
  font-size: clamp(36px, 7.5vw, 110px);
  text-transform: uppercase;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: clamp(28px, 8vw, 60px);
    order: 2;
  }

  @media (max-width: 480px) {
    font-size: clamp(24px, 10vw, 48px);
  }
`;

export const More = styled.div`
  flex: 1;

  a {
    text-decoration: none;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.inline};
    padding: 10px 30px;
    border-radius: 10px;
    pointer-events: auto;
    cursor: pointer;

 @media (max-width: 1060px) {
      font-size: 14px;
      padding: 10px 20px;
    }
      @media (max-width: 900px) {
      font-size: 16px;
      padding: 8px 20px;
      flex: 0 0 100%;
      display: inline-block;
      margin-bottom: 12px;
    }
    @media (max-width: 768px) {
      font-size: 16px;
      padding: 8px 20px;
      flex: 0 0 100%;
      display: inline-block;
      margin-bottom: 12px;
    }

    @media (max-width: 480px) {
      font-size: 14px;
      padding: 6px 16px;
    }
      
  }

  @media (max-width: 768px) {
    order: 4;
  }
`;

export const Desc = styled.div`
  flex: 0 0 32%;

  p:nth-child(1) {
    font-size: 30px;
    margin-bottom: 20px;

    span {
      color: ${({ theme }) => theme.colors.span};
    }

    @media (max-width: 768px) {
      font-size: 18px;
      margin-bottom: 12px;
    }

    @media (max-width: 480px) {
      font-size: 16px;
    }
  }

  p:nth-child(2) {
    line-height: 2;

    @media (max-width: 768px) {
      font-size: 13px;
    }

    @media (max-width: 480px) {
      font-size: 12px;
    }
  }

  @media (max-width: 768px) {
    flex: 0 0 100%;
    order: 3;
    margin-bottom: 20px;
  }
`;

export const Arrow = styled.button<ArrowsProps>`
  position: absolute;
  padding: 0;
  top: 50%;
  border: none;
  background: none;
  outline: inherit;
  ${props => props.arrowPosition}: 100px;
  cursor: pointer;
  z-index: 30;

  &:hover {
    color: ${({ theme }) => lighten(0.4, theme.colors.inline)};
  }

  @media (max-width: 768px) {
    ${props => props.arrowPosition}: 20px;
  }

  @media (max-width: 480px) {
    ${props => props.arrowPosition}: 10px;
  }
`;

export const Juice = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 11;
  pointer-events: none;

  picture {
    pointer-events: none;
  }

  img {
    animation: float 4s ease-in-out infinite;
    max-height: 500px;
    transition: opacity 0.4s ease;
    cursor: pointer;
    pointer-events: auto;

    &:hover {
      opacity: 0 !important;
    }

    @media (max-width: 768px) {
      max-height: 450px;
    }

    @media (max-width: 480px) {
      max-height: 510px;
    }
  }

  @keyframes float {
    0% {
      transform: translate(-50%, -46%);
    }
    50% {
      transform: translate(-50%, -54%);
    }
    100% {
      transform: translate(-50%, -46%);
    }
  }

  @media (max-width: 768px) {
    top: 64%;
  }

  @media (max-width: 480px) {
    top: 64%;
  }
`;

export const Leaves = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 10;
  pointer-events: none;

  ul, li, picture {
    pointer-events: none;
  }

  img {
    max-width: 50%;
    max-height: 190px;
    object-fit: contain;
    pointer-events: auto;
    transition: opacity 0.4s ease;
    cursor: pointer;

    &:hover {
      opacity: 0 !important;
    }
  }

  .layer:nth-child(1) {
    top: -70px !important;
    left: -480px !important;
  }

  .layer:nth-child(2) {
    top: 10px !important;
    left: 160px !important;
  }

  .layer:nth-child(3) {
    top: -300px !important;
    left: 160px !important;
  }

  .layer:nth-child(4) {
    top: -10px !important;
    left: 320px !important;
  }

  .layer:nth-child(5) {
    top: 200px !important;
    left: -320px !important;
  }

  @media (max-width: 768px) {
    img {
      max-width: 40%;
      max-height: 150px;
    }

    .layer:nth-child(1) {
      top: -50px !important;
      left: -300px !important;
    }

    .layer:nth-child(2) {
      top: 10px !important;
      left: 100px !important;
    }

    .layer:nth-child(3) {
      top: -200px !important;
      left: 100px !important;
    }

    .layer:nth-child(4) {
      top: -10px !important;
      left: 200px !important;
    }

    .layer:nth-child(5) {
      top: 150px !important;
      left: -200px !important;
    }
  }

  @media (max-width: 480px) {
    img {
      max-width: 35%;
      max-height: 120px;
    }

    .layer:nth-child(1) {
      top: -40px !important;
      left: -200px !important;
    }

    .layer:nth-child(2) {
      top: 10px !important;
      left: 60px !important;
    }

    .layer:nth-child(3) {
      top: -150px !important;
      left: 60px !important;
    }

    .layer:nth-child(4) {
      top: -10px !important;
      left: 120px !important;
    }

    .layer:nth-child(5) {
      top: 100px !important;
      left: -120px !important;
    }
  }
`;
