export const translations = {
  FR: {
    nav: {
      about: "À propos",
      services: "Services",
      portfolio: "Portfolio",
      testimonials: "Testimonials",
      contact: "Contact",
      quote: "Demander un devis",
      changeLang: "Changer de langue",
    },
    hero: {
      slides: [
        {
          tag: "DIGITAL PRODUCTS & SOLUTIONS",
          title: "IBAH AGENCY",
          titleHtml: "IBAH <span style='color: #A44C4C !important'>AGENCY</span>",
          descTitle: "Transformation",
          highlightWord: "numérique",
          descSubtitle: "sur mesure",
          descBody: "Agence moderne offrant une transformation numérique sur mesure, des logiciels personnalisés et des solutions intelligentes pour entreprises.",
          ctaText: "Découvrir nos solutions"
        },
        {
          tag: "SOLUTIONS IA & DATA",
          title: "INTELLIGENCE ARTIFICIELLE",
          titleHtml: "INTELLIGENCE <span style='color: #A44C4C !important'>ARTIFICIELLE</span>",
          descTitle: "Solutions",
          highlightWord: "intelligentes",
          descSubtitle: "& automatisées",
          descBody: "Intégration d'agents IA, d'outils d'analyse prédictive et d'automatisation des données pour démultiplier l'efficacité de votre entreprise.",
          ctaText: "Explorer les services IA"
        },
        {
          tag: "DEVELOPPEMENT WEB & MOBILE",
          title: "INNOVATION WEB",
          titleHtml: "INNOVATION <span style='color: #A44C4C !important'>WEB</span>",
          descTitle: "Applications",
          highlightWord: "sur mesure",
          descSubtitle: "& réactives",
          descBody: "Conception de sites modernes, plateformes SaaS réactives et d'applications mobiles iOS & Android d'une performance remarquable.",
          ctaText: "Voir nos réalisations"
        },
        {
          tag: "AUTOMATISATION & CONSEIL",
          title: "AGENCE DIGITALE",
          titleHtml: "AGENCE <span style='color: #A44C4C !important'>DIGITALE</span>",
          descTitle: "Accompagnement",
          highlightWord: "stratégique",
          descSubtitle: "& audit expert",
          descBody: "Optimisation globale des processus métier, audit d'architecture et conseils experts pour accélérer votre transformation digitale.",
          ctaText: "Demander un devis"
        }
      ]
    },
    about: {
      label: "Qui Sommes-Nous",
      title: "À PROPOS DE NOUS",
      paragraph: "Une agence créative et digitale dédiée à la transformation numérique et l'innovation sur mesure.",
      philosophyTitle: "Notre Philosophie",
      quote: "IBAH Agency met l'innovation et la transformation numérique directement au service de votre croissance.",
      desc: "Développer des solutions digitales performantes et sur mesure ne devrait pas être complexe. IBAH Agency vous accompagne dans la création de logiciels personnalisés, d'applications web modernes et d'expériences numériques d'exception — conçues pour propulser votre entreprise vers l'avenir.",
    },
    services: {
      label: "Savoir-Faire",
      title: "NOS SERVICES",
      body: "Des solutions numériques sur mesure conçues pour propulser votre entreprise vers l'excellence.",
      items: [
        {
          title: "Développement Web & Mobile",
          body: "Conception de sites web modernes, d'applications web réactives, de systèmes sur mesure et d'applications mobiles iOS & Android.",
        },
        {
          title: "Solutions IA & Data",
          body: "Intégration d'intelligence artificielle, d'outils prédictifs et d'agents intelligents adaptés aux besoins stratégiques de votre entreprise.",
        },
        {
          title: "Automatisation",
          body: "Optimisation de vos processus métier, automatisation des tâches répétitives et connexion de vos outils pour un gain de temps maximal.",
        },
        {
          title: "Conseil & Produits Digitaux",
          body: "Conseil expert, audit de vos systèmes, et fourniture d'une large gamme de produits digitaux premium en livraison instantanée.",
        }
      ]
    },
    portfolio: {
      label: "NOTRE PORTFOLIO",
      title1: "NOS PROJETS",
      title2: "RÉCENTS",
      desc: "Découvrez une sélection de nos réalisations sur mesure conçues avec passion et précision pour nos clients.",
      categories: ["Tous", "Web Development", "Mobile Apps", "AI & Automation"],
      pagination: {
        showing: "Affichage",
        to: "–",
        of: "sur",
        projects: "projets",
        prev: "Précédent",
        next: "Suivant",
        projectsFound: "projets trouvés",
        projectFound: "projet trouvé",
      },
      visitProject: "Visiter le projet →",
      items: [
        { id: 1, title: "ALLZY — E-COMMERCE", category: "Web Development", subtitle: "DESIGN WEB / DÉVELOPPEMENT", description: "Boutique e-commerce moderne et haute performance offrant une expérience d'achat fluide et intuitive." },
        { id: 2, title: "ALLZY — TABLEAU DE BORD", category: "Web Development", subtitle: "PANNEAU ADMIN / GESTION", description: "Tableau de bord d'administration complet pour le contrôle des stocks, des commandes et des statistiques." },
        { id: 3, title: "VETCARE — SYSTÈME VÉTÉRINAIRE", category: "Web Development", subtitle: "APP WEB / SYSTÈME DE GESTION", description: "Système web sur mesure pour la gestion des cliniques vétérinaires, des dossiers patients et des rendez-vous." },
        { id: 4, title: "MYCVFORGE — CRÉATEUR CV IA", category: "Web Development", subtitle: "DESIGN WEB / IA", description: "Générateur intelligent de curriculum vitae personnalisé propulsé par des algorithmes d'IA." },
        { id: 5, title: "BUSWAY — APP SUIVI DE BUS", category: "Web Development", subtitle: "DESIGN PRODUIT / MOBILE & WEB", description: "Application interactive de géolocalisation et suivi en temps réel du réseau de bus urbains." },
        { id: 6, title: "CRFR — GESTION FORMATIONS", category: "Web Development", subtitle: "APPLICATION WEB / GESTION ÉVÉNEMENTS", description: "Plateforme web de planification, réservation et gestion globale des sessions de formation et événements." },
        { id: 7, title: "ANALYSEMED — IA MÉDICALE", category: "Web Development", subtitle: "PLATEFORME IA MÉDICALE / WEB", description: "Plateforme d'analyse intelligente de données médicales et d'assistance au diagnostic clinique." },
        { id: 8, title: "SMARTNAV — SUIVI EN TEMPS RÉEL", category: "Mobile Apps", subtitle: "APPLICATION MOBILE / IOS & ANDROID", description: "Application mobile intuitive de navigation urbaine et de géolocalisation haute précision." },
        { id: 9, title: "FITLIFE — COACHING PERSONNALISÉ", category: "Mobile Apps", subtitle: "APP MOBILE / SANTÉ & FITNESS", description: "Suivi d'entraînements, nutrition sur mesure et programmes de remise en forme interactifs." },
        { id: 10, title: "NEUROFLOW — IA PRÉDICTIVE", category: "AI & Automation", subtitle: "AUTOMATISATION / MACHINE LEARNING", description: "Moteur d'analyse prédictive et d'automatisation intelligente des flux de données d'entreprise." },
        { id: 11, title: "BOTCRAFT — AGENT IA", category: "AI & Automation", subtitle: "INTELLIGENCE ARTIFICIELLE / CHATBOT", description: "Assistant virtuel intelligent intégré aux canaux de support client pour réponse instantanée 24/7." }
      ]
    },
    testimonials: {
      subtitle: "Témoignages",
      title: "CE QUE DISENT NOS CLIENTS",
      desc: "Découvrez pourquoi les entreprises et startups font confiance à IBAH Agency pour le développement et la transformation numérique de leurs projets sur mesure.",
      items: [
        { id: 1, name: "Sarah Benali", role: "CEO — ALLZY E-Commerce", date: "Février 2026", text: "Excellente plateforme e-commerce ! L'équipe IBAH Agency a totalement réinventé notre boutique en ligne. Les performances et le design sur mesure ont permis de doubler nos conversions en un temps record." },
        { id: 2, name: "Dr. Karim Alami", role: "Directeur — AnalyseMed", date: "Janvier 2026", text: "Une plateforme d'IA médicale intuitive et extrêmement performante. La rapidité de traitement des données et le soin apporté au design de l'interface sont tout simplement remarquables." },
        { id: 3, name: "Leila Tazi", role: "Fondatrice — MyCVForge", date: "Mars 2026", text: "Très satisfaite de la création de notre générateur de CV optimisé par l'IA. Le processus a été fluide, l'équipe très réactive et le rendu final dépasse largement nos attentes !" },
        { id: 4, name: "Youssef Berrada", role: "Opérations — BusWay App", date: "Mars 2026", text: "Une application mobile de suivi de bus en temps réel d'une réactivité incroyable. Design moderne, code stable et une expérience utilisateur parfaite." },
        { id: 5, name: "Amal Rochdi", role: "Directrice — CRFR Formations", date: "Avril 2026", text: "Le système de gestion des événements et formations créé par IBAH Agency a simplifié l'ensemble de notre workflow. Une qualité de service irréprochable !" },
        { id: 6, name: "Omar Drissi", role: "Fondateur — VetCare System", date: "Avril 2026", text: "Excellente méthode de travail, respect des délais et accompagnement technique sur mesure. Notre application Web de gestion vétérinaire fonctionne à la perfection." }
      ]
    },
    contact: {
      label: "CONTACTEZ-NOUS",
      title: "PARLONS DE VOTRE PROJET",
      subtitle: "Des questions sur nos services ou votre projet digital ? Contactez l'équipe IBAH Agency dès aujourd'hui. Nous sommes à votre écoute pour concrétiser vos idées.",
      infoTitle: "RESTONS EN CONTACT",
      infoDesc: "Notre équipe est à votre entière disposition pour répondre à toutes vos demandes et vous accompagner dans la réussite de vos projets digitaux.",
      formLabel: "ENVOYEZ UN MESSAGE",
      formTitle: "ÉCRIVEZ-NOUS",
      successTitle: "Merci !",
      successDesc: "Votre message a été envoyé avec succès. L'équipe IBAH Agency vous répondra dans les plus brefs délais.",
      nameLabel: "NOM COMPLET",
      namePlaceholder: "Ex: Jean Dupont",
      emailLabel: "ADRESSE EMAIL",
      emailPlaceholder: "exemple@email.com",
      messageLabel: "VOTRE MESSAGE",
      messagePlaceholder: "Expliquez-nous votre projet ou votre besoin...",
      submitBtn: "ENVOYER LE MESSAGE →",
      imgOverlay: "IBAH AGENCY",
      infoItems: [
        { label: "Téléphone", value: "0676892376" },
        { label: "Email", value: "tahaallay123@gmail.com" },
        { label: "LinkedIn", value: "Taha Allay" },
        { label: "Localisation", value: "En ligne / À distance" }
      ]
    },
    footer: {
      desc: "Votre partenaire digital d'excellence. Nous concevons des applications sur mesure, des plateformes e-commerce et des solutions web innovantes.",
      headings: ["Services", "Navigation", "Agence", "Newsletter"],
      newsletterText: "Restez informé de nos actualités",
      emailPlaceholder: "Votre adresse email",
      btnText: "S'ABONNER",
      successMsg: "✓ Merci pour votre inscription !",
      rights: "Tous droits réservés. | Développé par",
      servicesList: [
        { label: "Développement Web & Mobile", href: "#services" },
        { label: "Solutions IA & Data", href: "#services" },
        { label: "Automatisation", href: "#services" },
        { label: "Conseil & Audit Digital", href: "#services" },
      ],
      navigationList: [
        { label: "À propos", href: "#about-us" },
        { label: "Nos Services", href: "#services" },
        { label: "Portfolio", href: "#portfolio" },
        { label: "Témoignages", href: "#testimonial" },
        { label: "Contact", href: "#contact" },
      ],
      companyList: [
        { label: "IBAH Agency", href: "#" },
        { label: "Politique de confidentialité", href: "#" },
        { label: "Conditions d'utilisation", href: "#" },
        { label: "Mentions Légales", href: "#" },
      ]
    },
    quoteModal: {
      title: "Demander un devis gratuit",
      subtitle: "Parlez-nous de votre projet, et nous vous répondrons dans les 24 heures.",
      successTitle: "Demande envoyée avec succès !",
      successDesc: "Nous vous répondrons dans les plus brefs délais.",
      nameLabel: "Nom complet",
      namePlaceholder: "Jean Dupont",
      emailLabel: "Email",
      emailPlaceholder: "jean@entreprise.com",
      serviceLabel: "Quel service avez-vous besoin ?",
      servicePlaceholder: "Sélectionnez un service",
      budgetLabel: "Budget estimé",
      descLabel: "Parlez-nous de votre projet",
      descPlaceholder: "Décrivez vos objectifs, fonctionnalités ou exigences spécifiques...",
      fileLabel: "Joindre les spécifications (Optionnel)",
      privacyLabel: "J'accepte la politique de confidentialité",
      submitBtn: "Envoyer ma demande",
      submittingBtn: "Envoi en cours...",
      phoneLabel: "Téléphone / WhatsApp",
      phonePlaceholder: "+213 6XX XXX XXX",
      countryLabel: "Pays",
      countryPlaceholder: "Sélectionnez votre pays",
      urgencyLabel: "Délai souhaité",
      urgencyOptions: [
        { value: "", label: "Sélectionnez un délai" },
        { value: "urgent", label: "🔴 Urgent — moins d'une semaine" },
        { value: "soon", label: "🟡 Bientôt — dans le mois" },
        { value: "flexible", label: "🟢 Flexible — pas de contrainte" }
      ]
    }
  },
  EN: {
    nav: {
      about: "About",
      services: "Services",
      portfolio: "Portfolio",
      testimonials: "Testimonials",
      contact: "Contact",
      quote: "Get a quote",
      changeLang: "Change Language",
    },
    hero: {
      slides: [
        {
          tag: "DIGITAL PRODUCTS & SOLUTIONS",
          title: "IBAH AGENCY",
          titleHtml: "IBAH <span style='color: #A44C4C !important'>AGENCY</span>",
          descTitle: "Transformation",
          highlightWord: "digital",
          descSubtitle: "tailor-made",
          descBody: "Modern agency offering bespoke digital transformation, custom software, and smart solutions for enterprises.",
          ctaText: "Discover our solutions"
        },
        {
          tag: "AI & DATA SOLUTIONS",
          title: "ARTIFICIAL INTELLIGENCE",
          titleHtml: "ARTIFICIAL <span style='color: #A44C4C !important'>INTELLIGENCE</span>",
          descTitle: "Solutions",
          highlightWord: "smart",
          descSubtitle: "& automated",
          descBody: "Integration of AI agents, predictive analytics tools, and data automation to multiply your business efficiency.",
          ctaText: "Explore AI services"
        },
        {
          tag: "WEB & MOBILE DEVELOPMENT",
          title: "WEB INNOVATION",
          titleHtml: "WEB <span style='color: #A44C4C !important'>INNOVATION</span>",
          descTitle: "Applications",
          highlightWord: "custom",
          descSubtitle: "& responsive",
          descBody: "Design of modern websites, responsive SaaS platforms, and iOS & Android mobile apps of remarkable performance.",
          ctaText: "See our work"
        },
        {
          tag: "AUTOMATION & CONSULTING",
          title: "DIGITAL AGENCY",
          titleHtml: "DIGITAL <span style='color: #A44C4C !important'>AGENCY</span>",
          descTitle: "Consulting",
          highlightWord: "strategic",
          descSubtitle: "& expert audit",
          descBody: "Global optimization of business processes, architecture audit, and expert advice to accelerate your digital transformation.",
          ctaText: "Get a quote"
        }
      ]
    },
    about: {
      label: "Who Are We",
      title: "ABOUT US",
      paragraph: "A creative and digital agency dedicated to bespoke digital transformation and innovation.",
      philosophyTitle: "Our Philosophy",
      quote: "IBAH Agency puts innovation and digital transformation directly at the service of your growth.",
      desc: "Developing high-performing, custom digital solutions shouldn't be complex. IBAH Agency supports you in creating custom software, modern web apps, and exceptional digital experiences — designed to propel your business into the future.",
    },
    services: {
      label: "Expertise",
      title: "OUR SERVICES",
      body: "Custom digital solutions designed to propel your business towards excellence.",
      items: [
        {
          title: "Web & Mobile Development",
          body: "Design of modern websites, responsive web apps, custom systems, and iOS & Android mobile apps.",
        },
        {
          title: "AI & Data Solutions",
          body: "Integration of artificial intelligence, predictive tools, and intelligent agents tailored to your business needs.",
        },
        {
          title: "Automation",
          body: "Optimization of business processes, automation of repetitive tasks, and integration of your tools to save maximum time.",
        },
        {
          title: "Consulting & Digital Products",
          body: "Expert consulting, systems audit, and provision of a wide range of premium digital products with instant delivery.",
        }
      ]
    },
    portfolio: {
      label: "OUR PORTFOLIO",
      title1: "OUR RECENT",
      title2: "PROJECTS",
      desc: "Discover a selection of our custom creations designed with passion and precision for our clients.",
      categories: ["All", "Web Development", "Mobile Apps", "AI & Automation"],
      pagination: {
        showing: "Showing",
        to: "–",
        of: "of",
        projects: "projects",
        prev: "Previous",
        next: "Next",
        projectsFound: "projects found",
        projectFound: "project found",
      },
      visitProject: "Visit project →",
      items: [
        { id: 1, title: "ALLZY — E-COMMERCE", category: "Web Development", subtitle: "WEB DESIGN / DEVELOPMENT", description: "Modern, high-performance e-commerce store offering a seamless and intuitive shopping experience." },
        { id: 2, title: "ALLZY — DASHBOARD", category: "Web Development", subtitle: "ADMIN PANEL / MANAGEMENT", description: "Comprehensive administration dashboard for inventory control, orders, and analytics." },
        { id: 3, title: "VETCARE — VETERINARY SYSTEM", category: "Web Development", subtitle: "WEB APP / MANAGEMENT SYSTEM", description: "Custom web system for veterinary clinic management, patient records, and appointments." },
        { id: 4, title: "MYCVFORGE — AI CV BUILDER", category: "Web Development", subtitle: "WEB DESIGN / AI", description: "Intelligent personalized resume generator powered by AI algorithms." },
        { id: 5, title: "BUSWAY — BUS TRACKING APP", category: "Web Development", subtitle: "PRODUCT DESIGN / MOBILE & WEB", description: "Interactive geolocation and real-time tracking application for urban bus networks." },
        { id: 6, title: "CRFR — TRAINING MANAGEMENT", category: "Web Development", subtitle: "WEB APP / EVENT MANAGEMENT", description: "Web platform for planning, booking, and comprehensive management of training sessions and events." },
        { id: 7, title: "ANALYSEMED — MEDICAL AI", category: "Web Development", subtitle: "MEDICAL AI PLATFORM / WEB", description: "Platform for intelligent analysis of medical data and clinical diagnostic assistance." },
        { id: 8, title: "SMARTNAV — REAL-TIME TRACKING", category: "Mobile Apps", subtitle: "MOBILE APP / IOS & ANDROID", description: "Intuitive mobile application for urban navigation and high-precision geolocation." },
        { id: 9, title: "FITLIFE — CUSTOM COACHING", category: "Mobile Apps", subtitle: "MOBILE APP / HEALTH & FITNESS", description: "Workout tracking, custom nutrition, and interactive fitness programs." },
        { id: 10, title: "NEUROFLOW — PREDICTIVE AI", category: "AI & Automation", subtitle: "AUTOMATION / MACHINE LEARNING", description: "Predictive analysis engine and intelligent automation of enterprise data flows." },
        { id: 11, title: "BOTCRAFT — AI AGENT", category: "AI & Automation", subtitle: "ARTIFICIAL INTELLIGENCE / CHATBOT", description: "Intelligent virtual assistant integrated into customer support channels for instant 24/7 response." }
      ]
    },
    testimonials: {
      subtitle: "Testimonials",
      title: "WHAT OUR CLIENTS SAY",
      desc: "Discover why companies and startups trust IBAH Agency for the development and digital transformation of their custom projects.",
      items: [
        { id: 1, name: "Sarah Benali", role: "CEO — ALLZY E-Commerce", date: "February 2026", text: "Excellent e-commerce platform! The IBAH Agency team completely reinvented our online store. The performance and custom design doubled our conversions in record time." },
        { id: 2, name: "Dr. Karim Alami", role: "Director — AnalyseMed", date: "January 2026", text: "An intuitive and extremely powerful medical AI platform. The data processing speed and attention given to the interface design are simply remarkable." },
        { id: 3, name: "Leila Tazi", role: "Founder — MyCVForge", date: "March 2026", text: "Very satisfied with the creation of our AI-optimized resume generator. The process was smooth, the team highly responsive, and the final result far exceeded our expectations!" },
        { id: 4, name: "Youssef Berrada", role: "Operations — BusWay App", date: "March 2026", text: "An incredibly responsive real-time bus tracking mobile app. Modern design, stable code, and a perfect user experience." },
        { id: 5, name: "Amal Rochdi", role: "Director — CRFR Training", date: "April 2026", text: "The event and training management system created by IBAH Agency simplified our entire workflow. Flawless service quality!" },
        { id: 6, name: "Omar Drissi", role: "Founder — VetCare System", date: "April 2026", text: "Excellent working method, respect for deadlines, and custom technical support. Our veterinary management web application works perfectly." }
      ]
    },
    contact: {
      label: "CONTACT US",
      title: "LET'S TALK ABOUT YOUR PROJECT",
      subtitle: "Questions about our services or your digital project? Contact the IBAH Agency team today. We listen to you to make your ideas reality.",
      infoTitle: "STAY IN TOUCH",
      infoDesc: "Our team is entirely at your disposal to answer all your requests and support you in the success of your digital projects.",
      formLabel: "SEND A MESSAGE",
      formTitle: "WRITE TO US",
      successTitle: "Thank you!",
      successDesc: "Your message has been sent successfully. The IBAH Agency team will get back to you shortly.",
      nameLabel: "FULL NAME",
      namePlaceholder: "Ex: John Doe",
      emailLabel: "EMAIL ADDRESS",
      emailPlaceholder: "example@email.com",
      messageLabel: "YOUR MESSAGE",
      messagePlaceholder: "Explain your project or need...",
      submitBtn: "SEND MESSAGE →",
      imgOverlay: "IBAH AGENCY",
      infoItems: [
        { label: "Phone", value: "0676892376" },
        { label: "Email", value: "tahaallay123@gmail.com" },
        { label: "LinkedIn", value: "Taha Allay" },
        { label: "Location", value: "Online / Remote" }
      ]
    },
    footer: {
      desc: "Your excellent digital partner. We design custom apps, e-commerce platforms, and innovative web solutions.",
      headings: ["Services", "Navigation", "Agency", "Newsletter"],
      newsletterText: "Stay informed with our news",
      emailPlaceholder: "Your email address",
      btnText: "SUBSCRIBE",
      successMsg: "✓ Thank you for subscribing!",
      rights: "All rights reserved. | Developed by",
      servicesList: [
        { label: "Web & Mobile Development", href: "#services" },
        { label: "AI & Data Solutions", href: "#services" },
        { label: "Automation", href: "#services" },
        { label: "Digital Consulting & Audit", href: "#services" },
      ],
      navigationList: [
        { label: "About", href: "#about-us" },
        { label: "Our Services", href: "#services" },
        { label: "Portfolio", href: "#portfolio" },
        { label: "Testimonials", href: "#testimonial" },
        { label: "Contact", href: "#contact" },
      ],
      companyList: [
        { label: "IBAH Agency", href: "#" },
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Use", href: "#" },
        { label: "Legal Notice", href: "#" },
      ]
    },
    quoteModal: {
      title: "Get a free quote",
      subtitle: "Tell us about your project, and we'll get back to you within 24 hours.",
      successTitle: "Request sent successfully!",
      successDesc: "We will get back to you shortly.",
      nameLabel: "Full Name",
      namePlaceholder: "John Doe",
      emailLabel: "Email",
      emailPlaceholder: "john@company.com",
      serviceLabel: "Which service do you need?",
      servicePlaceholder: "Select a service",
      budgetLabel: "Estimated budget",
      descLabel: "Tell us about your project",
      descPlaceholder: "Describe your goals, features, or specific requirements...",
      fileLabel: "Attach specifications (Optional)",
      privacyLabel: "I agree to the privacy policy",
      submitBtn: "Send my request",
      submittingBtn: "Sending...",
      phoneLabel: "Phone / WhatsApp",
      phonePlaceholder: "+1 XXX XXX XXXX",
      countryLabel: "Country",
      countryPlaceholder: "Select your country",
      urgencyLabel: "Desired timeline",
      urgencyOptions: [
        { value: "", label: "Select a timeline" },
        { value: "urgent", label: "🔴 Urgent — less than a week" },
        { value: "soon", label: "🟡 Soon — within a month" },
        { value: "flexible", label: "🟢 Flexible — no constraint" }
      ]
    }
  },
  AR: {
    nav: {
      about: "من نحن",
      services: "خدماتنا",
      portfolio: "أعمالنا",
      testimonials: "آراء العملاء",
      contact: "اتصل بنا",
      quote: "طلب تسعيرة",
      changeLang: "تغيير اللغة",
    },
    hero: {
      slides: [
        {
          tag: "منتجات وحلول رقمية",
          title: "وكالة إيباح",
          titleHtml: "وكالة <span style='color: #A44C4C !important'>إيباح</span>",
          descTitle: "تحول",
          highlightWord: "رقمي",
          descSubtitle: "مخصص",
          descBody: "وكالة حديثة تقدم تحولاً رقمياً مخصصاً، وبرمجيات مصممة خصيصاً وحلول ذكية للشركات.",
          ctaText: "اكتشف حلولنا"
        },
        {
          tag: "حلول الذكاء الاصطناعي والبيانات",
          title: "الذكاء الاصطناعي",
          titleHtml: "الذكاء <span style='color: #A44C4C !important'>الاصطناعي</span>",
          descTitle: "حلول",
          highlightWord: "ذكية",
          descSubtitle: "ومؤتمتة",
          descBody: "دمج وكلاء الذكاء الاصطناعي، وأدوات التحليل التنبؤي، وأتمتة البيانات لمضاعفة كفاءة أعمالك.",
          ctaText: "استكشف خدمات الذكاء الاصطناعي"
        },
        {
          tag: "تطوير الويب والموبايل",
          title: "ابتكار الويب",
          titleHtml: "ابتكار <span style='color: #A44C4C !important'>الويب</span>",
          descTitle: "تطبيقات",
          highlightWord: "مخصصة",
          descSubtitle: "ومتجاوبة",
          descBody: "تصميم مواقع حديثة، منصات SaaS متجاوبة وتطبيقات الجوال بأنظمة iOS و Android بأداء ملحوظ.",
          ctaText: "شاهد أعمالنا"
        },
        {
          tag: "الأتمتة والاستشارات",
          title: "وكالة رقمية",
          titleHtml: "وكالة <span style='color: #A44C4C !important'>رقمية</span>",
          descTitle: "مواكبة",
          highlightWord: "استراتيجية",
          descSubtitle: "وتدقيق خبراء",
          descBody: "تحسين شامل لعمليات الأعمال، وتدقيق البنية التحتية، ونصائح الخبراء لتسريع تحولك الرقمي.",
          ctaText: "طلب تسعيرة"
        }
      ]
    },
    about: {
      label: "من نحن",
      title: "معلومات عنا",
      paragraph: "وكالة إبداعية ورقمية مكرسة للتحول الرقمي والابتكار المخصص.",
      philosophyTitle: "فلسفتنا",
      quote: "وكالة إيباح تضع الابتكار والتحول الرقمي مباشرة في خدمة نموك.",
      desc: "تطوير حلول رقمية عالية الأداء ومخصصة لا ينبغي أن يكون معقداً. تدعمك وكالة إيباح في إنشاء برمجيات مخصصة، وتطبيقات ويب حديثة، وتجارب رقمية استثنائية — مصممة لدفع أعمالك نحو المستقبل.",
    },
    services: {
      label: "خبراتنا",
      title: "خدماتنا",
      body: "حلول رقمية مخصصة مصممة لدفع عملك نحو التميز.",
      items: [
        {
          title: "تطوير الويب والموبايل",
          body: "تصميم مواقع ويب حديثة، وتطبيقات ويب متجاوبة، وأنظمة مخصصة وتطبيقات هواتف iOS و Android.",
        },
        {
          title: "حلول الذكاء الاصطناعي والبيانات",
          body: "دمج الذكاء الاصطناعي، والأدوات التنبؤية، والوكلاء الأذكياء المصممة خصيصًا لاحتياجات أعمالك الاستراتيجية.",
        },
        {
          title: "الأتمتة",
          body: "تحسين عمليات عملك، وأتمتة المهام المتكررة، ودمج أدواتك لتوفير أكبر قدر من الوقت.",
        },
        {
          title: "الاستشارات والمنتجات الرقمية",
          body: "استشارات استراتيجية، تدقيق للأنظمة، وتوفير مجموعة واسعة من المنتجات الرقمية المميزة بتسليم فوري.",
        }
      ]
    },
    portfolio: {
      label: "أعمالنا",
      title1: "مشاريعنا",
      title2: "الأخيرة",
      desc: "اكتشف مجموعة مختارة من إنتاجاتنا المخصصة المصممة بشغف ودقة لعملائنا.",
      categories: ["الكل", "تطوير الويب", "تطبيقات الهاتف", "الذكاء الاصطناعي والأتمتة"],
      pagination: {
        showing: "عرض",
        to: "–",
        of: "من أصل",
        projects: "مشاريع",
        prev: "السابق",
        next: "التالي",
        projectsFound: "مشاريع تم العثور عليها",
        projectFound: "مشروع",
      },
      visitProject: "زيارة المشروع ←",
      items: [
        { id: 1, title: "أُلزي — متجر إلكتروني", category: "Web Development", subtitle: "تصميم ويب / تطوير", description: "متجر إلكتروني حديث وعالي الأداء يقدم تجربة تسوق سلسة وبديهية." },
        { id: 2, title: "أُلزي — لوحة التحكم", category: "Web Development", subtitle: "لوحة إدارة", description: "لوحة تحكم إدارية شاملة لمراقبة المخزون والطلبات والإحصائيات." },
        { id: 3, title: "فيت كير — نظام بيطري", category: "Web Development", subtitle: "تطبيق ويب / نظام إدارة", description: "نظام ويب مخصص لإدارة العيادات البيطرية وسجلات المرضى والمواعيد." },
        { id: 4, title: "ماي سي في فورج — صانع السير بالذكاء الاصطناعي", category: "Web Development", subtitle: "تصميم ويب / ذكاء اصطناعي", description: "مولد سير ذاتية ذكي ومخصص مدعوم بخوارزميات الذكاء الاصطناعي." },
        { id: 5, title: "باص واي — تطبيق تتبع الحافلات", category: "Web Development", subtitle: "تصميم منتج / هاتف وويب", description: "تطبيق تفاعلي لتحديد الموقع الجغرافي وتتبع شبكات الحافلات الحضرية في الوقت الفعلي." },
        { id: 6, title: "سي آر إف آر — إدارة التدريب", category: "Web Development", subtitle: "تطبيق ويب / إدارة الأحداث", description: "منصة ويب لتخطيط وحجز والإدارة الشاملة لدورات التدريب والفعاليات." },
        { id: 7, title: "أنالايز ميد — ذكاء اصطناعي طبي", category: "Web Development", subtitle: "منصة ذكاء اصطناعي طبي / ويب", description: "منصة للتحليل الذكي للبيانات الطبية والمساعدة في التشخيص السريري." },
        { id: 8, title: "سمارت ناف — تتبع في الوقت الفعلي", category: "Mobile Apps", subtitle: "تطبيق هاتف / IOS و أندرويد", description: "تطبيق هاتف بديهي للملاحة الحضرية وتحديد المواقع الجغرافية بدقة عالية." },
        { id: 9, title: "فيت لايف — تدريب مخصص", category: "Mobile Apps", subtitle: "تطبيق هاتف / صحة ولياقة", description: "تتبع التدريبات وتغذية مخصصة وبرامج لياقة بدنية تفاعلية." },
        { id: 10, title: "نيوروفلو — ذكاء اصطناعي تنبؤي", category: "AI & Automation", subtitle: "الأتمتة / التعلم الآلي", description: "محرك للتحليل التنبؤي والأتمتة الذكية لتدفق بيانات الشركات." },
        { id: 11, title: "بوت كرافت — وكيل ذكاء اصطناعي", category: "AI & Automation", subtitle: "الذكاء الاصطناعي / بوت محادثة", description: "مساعد افتراضي ذكي مدمج في قنوات دعم العملاء للاستجابة الفورية على مدار الساعة والقسم." }
      ]
    },
    testimonials: {
      subtitle: "آراء العملاء",
      title: "ماذا يقول عملاؤنا",
      desc: "اكتشف لماذا تثق الشركات والشركات الناشئة بوكالة إيباح لتطوير مشاريعهم المخصصة وتحويلها الرقمي.",
      items: [
        { id: 1, name: "سارة بنعلي", role: "المديرة التنفيذية — أُلزي للتجارة", date: "فبراير 2026", text: "منصة تجارة إلكترونية ممتازة! قام فريق وكالة إيباح بإعادة ابتكار متجرنا بالكامل. الأداء والتصميم المخصص ضاعف مبيعاتنا في وقت قياسي." },
        { id: 2, name: "د. كريم العلمي", role: "مدير — أنالايز ميد", date: "يناير 2026", text: "منصة طبية بديهية وقوية للغاية بفضل الذكاء الاصطناعي. سرعة معالجة البيانات والاهتمام بتصميم الواجهة أمر رائع بكل بساطة." },
        { id: 3, name: "ليلى التازي", role: "مؤسسة — ماي سي في فورج", date: "مارس 2026", text: "راضية جدًا عن إنشاء مولد السيرة الذاتية الخاص بنا. كانت العملية سلسة، وكان الفريق مستجيبًا للغاية وتجاوزت النتيجة النهائية توقعاتنا!" },
        { id: 4, name: "يوسف برادة", role: "عمليات — تطبيق باص واي", date: "مارس 2026", text: "تطبيق تتبع حافلات متجاوب بشكل لا يصدق في الوقت الفعلي. تصميم حديث وكود مستقر وتجربة مستخدم مثالية." },
        { id: 5, name: "أمل رشدي", role: "مديرة — سي آر إف آر للتدريب", date: "أبريل 2026", text: "نظام إدارة الفعاليات والتدريب الذي أنشأته وكالة إيباح بسط سير عملنا بالكامل. جودة خدمة لا تشوبها شائبة!" },
        { id: 6, name: "عمر الدريسي", role: "مؤسس — نظام فيت كير", date: "أبريل 2026", text: "طريقة عمل ممتازة، احترام للمواعيد ودعم فني مخصص مذهل. يعمل تطبيق الويب البيطري الخاص بنا بشكل مثالي." }
      ]
    },
    contact: {
      label: "اتصل بنا",
      title: "دعنا نتحدث عن مشروعك",
      subtitle: "هل لديك أسئلة حول خدماتنا أو مشروعك الرقمي؟ اتصل بفريق وكالة إيباح اليوم. نحن نستمع إليك لتحقيق أفكارك.",
      infoTitle: "لنبق على تواصل",
      infoDesc: "فريقنا تحت تصرفك بالكامل للرد على جميع طلباتك ودعمك في نجاح مشاريعك الرقمية.",
      formLabel: "إرسال رسالة",
      formTitle: "اكتب لنا",
      successTitle: "شكراً لك!",
      successDesc: "تم إرسال رسالتك بنجاح. سيتواصل معك فريق وكالة إيباح في أقرب وقت ممكن.",
      nameLabel: "الاسم الكامل",
      namePlaceholder: "مثال: أحمد محمود",
      emailLabel: "البريد الإلكتروني",
      emailPlaceholder: "example@email.com",
      messageLabel: "رسالتك",
      messagePlaceholder: "اشرح لنا مشروعك أو احتياجاتك...",
      submitBtn: "إرسال الرسالة ←",
      imgOverlay: "وكالة إيباح",
      infoItems: [
        { label: "الهاتف", value: "0676892376" },
        { label: "البريد الإلكتروني", value: "tahaallay123@gmail.com" },
        { label: "لينكد إن", value: "طه علاي" },
        { label: "الموقع", value: "متاح عبر الإنترنت / عن بُعد" }
      ]
    },
    footer: {
      desc: "شريكك الرقمي المتميز. نصمم تطبيقات مخصصة ومنصات تجارة إلكترونية وحلول ويب مبتكرة.",
      headings: ["الخدمات", "التنقل", "الوكالة", "النشرة الإخبارية"],
      newsletterText: "ابق على اطلاع بأخبارنا",
      emailPlaceholder: "بريدك الإلكتروني",
      btnText: "إشتراك",
      successMsg: "✓ شكراً لاشتراكك!",
      rights: "جميع الحقوق محفوظة. | تم التطوير بواسطة",
      servicesList: [
        { label: "تطوير الويب والموبايل", href: "#services" },
        { label: "حلول الذكاء الاصطناعي", href: "#services" },
        { label: "الأتمتة", href: "#services" },
        { label: "استشارات وتدقيق رقمي", href: "#services" },
      ],
      navigationList: [
        { label: "من نحن", href: "#about-us" },
        { label: "خدماتنا", href: "#services" },
        { label: "أعمالنا", href: "#portfolio" },
        { label: "آراء العملاء", href: "#testimonial" },
        { label: "اتصل بنا", href: "#contact" },
      ],
      companyList: [
        { label: "وكالة إيباح", href: "#" },
        { label: "سياسة الخصوصية", href: "#" },
        { label: "شروط الاستخدام", href: "#" },
        { label: "ملاحظات قانونية", href: "#" },
      ]
    },
    quoteModal: {
      title: "طلب تسعيرة مجانية",
      subtitle: "أخبرنا عن مشروعك وسنرد عليك خلال 24 ساعة.",
      successTitle: "تم إرسال الطلب بنجاح!",
      successDesc: "سنرد عليك في أقرب وقت ممكن.",
      nameLabel: "الاسم الكامل",
      namePlaceholder: "أحمد محمود",
      emailLabel: "البريد الإلكتروني",
      emailPlaceholder: "ahmed@company.com",
      serviceLabel: "ما هي الخدمة التي تحتاجها؟",
      servicePlaceholder: "اختر خدمة",
      budgetLabel: "الميزانية المقدرة",
      descLabel: "حدثنا عن مشروعك",
      descPlaceholder: "صف أهدافك وميزاتك أو متطلباتك المحددة...",
      fileLabel: "إرفاق المواصفات (اختياري)",
      privacyLabel: "أوافق على سياسة الخصوصية",
      submitBtn: "إرسال طلبي",
      submittingBtn: "جاري الإرسال...",
      phoneLabel: "الهاتف / واتساب",
      phonePlaceholder: "+213 6XX XXX XXX",
      countryLabel: "الدولة",
      countryPlaceholder: "اختر دولتك",
      urgencyLabel: "الوقت المطلوب",
      urgencyOptions: [
        { value: "", label: "اختر المدة الزمنية" },
        { value: "urgent", label: "🔴 عاجل — أقل من أسبوع" },
        { value: "soon", label: "🟡 قريباً — خلال الشهر" },
        { value: "flexible", label: "🟢 مرن — لا قيود زمنية" }
      ]
    }
  }
};

export type Language = 'FR' | 'EN' | 'AR';
