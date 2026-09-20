import React from 'react';

export interface ServiceItem {
  id: number | string;
  title: string;
  body: string;
  svgSrc: string;
  blobPath: string;
  blobFill?: string;
  highlighted?: boolean;
}

interface ServicesBodyProps {
  content?: ServiceItem[];
  onServiceClick?: (serviceTitle: string) => void;
}

const defaultServices: ServiceItem[] = [
  {
    id: 1,
    title: "Développement Web & Mobile",
    body: "Conception de sites web modernes, d'applications web réactives, de systèmes sur mesure et d'applications mobiles iOS & Android.",
    svgSrc: `${process.env.PUBLIC_URL}/svg/deve.svg`,
    blobPath: "M41.7,-64.1C53.7,-57.4,62.9,-45.5,68.9,-32.2C74.9,-18.9,77.7,-4.2,74.9,9.4C72.1,23,63.7,35.5,53.4,45.8C43.1,56.1,30.9,64.2,17.2,68.3C3.5,72.4,-11.7,72.5,-25.4,67.6C-39.1,62.7,-51.3,52.8,-60.7,40.3C-70.1,27.8,-76.7,12.7,-76.3,-2.3C-75.9,-17.3,-68.5,-32.2,-57.9,-41.8C-47.3,-51.4,-33.5,-55.7,-20.3,-61.8C-7.1,-67.9,5.5,-75.8,18.8,-75.5C32.1,-75.2,29.7,-70.8,41.7,-64.1Z",
    blobFill: "rgba(164, 76, 76, 1)"
  },
  {
    id: 2,
    title: "Solutions IA & Data",
    body: "Intégration d'intelligence artificielle, d'outils prédictifs et d'agents intelligents adaptés aux besoins stratégiques de votre entreprise.",
    svgSrc: `${process.env.PUBLIC_URL}/svg/ai.svg`,
    blobPath: "M47.7,-68.8C61.4,-61.2,71.8,-47.3,76.5,-31.6C81.2,-15.9,80.2,1.6,74.9,17.2C69.6,32.8,60,46.5,47.8,56.5C35.6,66.5,20.8,72.8,5.1,75.1C-10.6,77.4,-27.2,75.7,-41.3,67.8C-55.4,59.9,-67,45.8,-73.2,29.7C-79.4,13.6,-80.2,-4.5,-75.2,-20.7C-70.2,-36.9,-59.4,-51.2,-45.5,-58.8C-31.6,-66.4,-14.6,-67.3,1.4,-69.5C17.4,-71.7,34,-76.4,47.7,-68.8Z",
    blobFill: "rgba(255, 255, 255, 1)",
    highlighted: true
  },
  {
    id: 3,
    title: "Automatisation",
    body: "Optimisation de vos processus métier, automatisation des tâches répétitives et connexion de vos outils pour un gain de temps maximal.",
    svgSrc: `${process.env.PUBLIC_URL}/svg/auto.svg`,
    blobPath: "M38.8,-58.2C50.2,-51,59.3,-40.4,64.8,-28.1C70.3,-15.8,72.2,-1.8,69.7,11.5C67.2,24.8,60.3,37.4,50.3,47.1C40.3,56.8,27.2,63.6,12.8,67.2C-1.6,70.8,-17.3,71.2,-31.3,65.8C-45.3,60.4,-57.6,49.2,-65.4,35.4C-73.2,21.6,-76.5,5.2,-74.3,-10.4C-72.1,-26,-64.4,-40.8,-52.8,-48.4C-41.2,-56,-25.7,-56.4,-11.4,-58.6C2.9,-60.8,27.4,-65.4,38.8,-58.2Z",
    blobFill: "rgba(164, 76, 76, 1)"
  },
  {
    id: 4,
    title: "Conseil & Audit Digital",
    body: "Accompagnement stratégique, audit de vos systèmes d'information et conseil expert en transformation numérique.",
    svgSrc: `${process.env.PUBLIC_URL}/svg/cons.svg`,
    blobPath: "M43.2,-61.7C55.2,-53.4,63.7,-40.5,68.6,-26.3C73.5,-12.1,74.8,3.4,70.8,17.6C66.8,31.8,57.5,44.7,45.4,54.1C33.3,63.5,18.4,69.4,2.9,70.8C-12.6,72.2,-28.7,69.1,-41.8,60.8C-54.9,52.5,-65,39,-70.7,23.8C-76.4,8.6,-77.7,-8.3,-72.1,-22.7C-66.5,-37.1,-54,-49,-40.4,-56.6C-26.8,-64.2,-12.1,-67.5,1.7,-70.1C15.5,-72.7,31.2,-70,43.2,-61.7Z",
    blobFill: "rgba(164, 76, 76, 1)"
  }
];

const ServicesBody: React.FC<ServicesBodyProps> = ({ content = defaultServices, onServiceClick }) => {
  const handleCardClick = (serviceTitle: string) => {
    if (onServiceClick) {
      onServiceClick(serviceTitle);
    }
  };

  return (
    <section className="services-container">
      {content.map((serv) => (
        <div 
          key={serv.id} 
          className={`services-card ${serv.highlighted ? 'highlighted' : ''}`}
          onClick={() => handleCardClick(serv.title)}
          style={{ cursor: 'pointer' }}
        >
          <h3 className="card-title">{serv.title}</h3>
          
          <div className="card-illustration">
            <svg viewBox="0 0 200 200" className="card-blob-svg">
              <path 
                d={serv.blobPath} 
                fill={serv.blobFill || "rgba(164, 76, 76, 1)"} 
                transform="translate(100 100) scale(1.25)" 
              />
            </svg>
            <img src={serv.svgSrc} alt={serv.title} className="card-svg-image" />
          </div>

          <p className="card-paragraph">{serv.body}</p>
        </div>
      ))}
    </section>
  );
};

export default ServicesBody;
