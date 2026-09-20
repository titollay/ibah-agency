import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="container">
        <div className="action-rays" />
        <div className="pop-burst">
          <div className="word" />
        </div>
        <div className="stage">
          <div className="cube">
            <div className="face f-1">
              <span className="panel-num">01</span>
              <span className="panel-label">Développement</span>
            </div>
            <div className="face f-2">
              <span className="panel-num">02</span>
              <span className="panel-label">Conception</span>
            </div>
            <div className="face f-3">
              <span className="panel-num">03</span>
              <span className="panel-label">Création</span>
            </div>
            <div className="face f-4">
              <span className="panel-num">04</span>
              <span className="panel-label">Innovation</span>
            </div>
            <div className="face f-5">
              <span className="panel-num">05</span>
              <span className="panel-label">En Cours</span>
            </div>
            <div className="face f-6">
              <span className="panel-num">06</span>
              <span className="panel-label">Bientôt</span>
            </div>
          </div>
          <div className="shadow-floor" />
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .container {
    --bg: #A44C4C;
    --ink: #000;
    --paper: #F5E6E6;
    --accent-1: #D97979;
    --accent-2: #E8B86D;
    --accent-3: #4A8C8C;
    --size: 200px;
    --half: 100px;
    --smooth-snap: cubic-bezier(0.85, 0, 0.15, 1);

    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    /* background: var(--bg); */
    perspective: 1500px;
  }

  .action-rays {
    position: absolute;
    // width: 300vmax;
    // height: 300vmax;
   
    /* background: repeating-conic-gradient(
                  from 0deg,
                  rgba(0,0,0,0.15) 0deg 10deg,
                  transparent 10deg 20deg
              ); */
    /* animation: raySpin 20s linear infinite; */
    z-index: -1;
  }

  @keyframes raySpin {
    to {
      transform: rotate(360deg);
    }
  }

  .container::after {
    content: "";
    position: absolute;
    inset: 0;
    background-image: radial-gradient(var(--ink) 1px, transparent 1px);
    background-size: 15px 15px;
    opacity: 0.1;
    pointer-events: none;
  }

  .stage {
    position: relative;
    width: var(--size);
    height: var(--size);
    transform-style: preserve-3d;
    animation: stageJump 4s var(--smooth-snap) infinite;
  }

  @keyframes stageJump {
    0%,
    100% {
      transform: scale(1) rotateX(-20deg) rotateY(0deg);
    }
    50% {
      transform: scale(1.3) rotateX(160deg) rotateY(180deg);
    }
  }

  .cube {
    position: absolute;
    inset: 0;
    transform-style: preserve-3d;
    animation: autoRotate 8s linear infinite;
  }

  @keyframes autoRotate {
    to {
      transform: rotateY(360deg) rotateZ(360deg);
    }
  }

  .face {
    position: absolute;
    width: 100%;
    height: 100%;
    background: var(--paper);
    border: 5px solid var(--ink);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    backface-visibility: visible;
    overflow: hidden;
    box-shadow: 12px 12px 0 var(--ink);
  }

  .f-1 {
    transform: rotateY(0deg) translateZ(var(--half));
    background: var(--bg);
  }
  .f-2 {
    transform: rotateY(180deg) translateZ(var(--half));
    background: var(--accent-1);
  }
  .f-3 {
    transform: rotateY(90deg) translateZ(var(--half));
    background: var(--accent-2);
  }
  .f-4 {
    transform: rotateY(-90deg) translateZ(var(--half));
    background: var(--accent-3);
  }
  .f-5 {
    transform: rotateX(90deg) translateZ(var(--half));
    background: var(--paper);
  }
  .f-6 {
    transform: rotateX(-90deg) translateZ(var(--half));
    background: var(--ink);
  }

  .face::before {
    content: "";
    position: absolute;
    width: 150%;
    height: 20px;
    background: var(--ink);
    transform: rotate(-45deg) translateY(-40px);
    opacity: 0.2;
  }

  .panel-num {
    font-family: "Arial Black", sans-serif;
    font-size: 40px;
    color: var(--ink);
    line-height: 1;
    margin: 0;
    transform: skew(-10deg);
    z-index: 2;
  }

  .panel-label {
    font-family: "Arial Black", sans-serif;
    font-size: 12px;
    background: var(--ink);
    color: #fff;
    padding: 2px 8px;
    margin-top: 5px;
    text-transform: uppercase;
    z-index: 2;
  }

  .pop-burst {
    position: absolute;
    width: 100%;
    height: 100%;
    pointer-events: none;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
  }

  .word {
    position: absolute;
    font-family: "Arial Black", sans-serif;
    font-size: 60px;
    color: var(--paper);
    -webkit-text-stroke: 3px var(--ink);
    text-shadow: 8px 8px 0 var(--accent-2);
    opacity: 0;
    animation: comicFlash 4s var(--smooth-snap) infinite;
  }

  @keyframes comicFlash {
    0%,
    48%,
    52%,
    100% {
      opacity: 0;
      transform: scale(0.5) rotate(-20deg);
    }
    50% {
      opacity: 1;
      transform: scale(1.4) rotate(5deg);
    }
  }

  .shadow-floor {
    position: absolute;
    bottom: -100px;
    width: 150px;
    height: 40px;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 50%;
    filter: blur(10px);
    animation: shadowPulse 4s var(--smooth-snap) infinite;
  }

  @keyframes shadowPulse {
    0%,
    100% {
      transform: scale(1);
      opacity: 0.5;
    }
    50% {
      transform: scale(0.4);
      opacity: 0.1;
    }
  }`;

export default Loader;
