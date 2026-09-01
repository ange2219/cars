window.addEventListener("load", () => { if (typeof ScrollTrigger !== "undefined") ScrollTrigger.refresh(); });

document.addEventListener("DOMContentLoaded", (event) => {

  // Register GSAP plugins
  if (typeof gsap !== "undefined") {
    if (typeof ScrollTrigger !== "undefined" && typeof SplitText !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    } else if (typeof ScrollTrigger !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }
  }

  /* ----------------------------------
     HERO VIDEO AUTOPLAY RELIABILITY
  ---------------------------------- */
  const heroVideo = document.querySelector('.video-inner video');
  if (heroVideo) {
    heroVideo.muted = true;
    const attemptPlay = () => {
      const playPromise = heroVideo.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          ['click', 'touchstart', 'scroll', 'mousemove'].forEach(ev => {
            window.addEventListener(ev, () => { heroVideo.play(); }, { once: true });
          });
        });
      }
    };
    attemptPlay();
    heroVideo.addEventListener('loadeddata', attemptPlay);
  }

  /* ----------------------------------
     PAGE LOAD ANIMATIONS (Awwwards Original)
  ---------------------------------- */
  if (document.querySelector('.hero-section')) {

    // Logo scale-in animation
    gsap.from('header .logo', {
      scale: 0
    });

    // Smooth heading entrance animation
    gsap.from('.hero-content h1', {
      y: 80,
      opacity: 0,
      duration: 1.1,
      ease: 'power3.out',
      delay: 0.2
    });

    // Divider width animation
    gsap.from('.divider', {
      width: 0,
      duration: 1
    });

    /* ----------------------------------
       HEADER SCROLL EFFECT (Exact Original 49% Width + Blur)
    ---------------------------------- */
    gsap.to('header', {
      backdropFilter: "blur(300px)",
      backgroundColor: "rgba(255, 255, 255, 0.15)",
      width: "49%",
      "--header-color": "#121212",
      scrollTrigger: {
        trigger: 'main',
        start: 'top top',
        end: "+=100",
        scrub: 1,
      }
    });

    /* ----------------------------------
       HERO SECTION SCROLL ANIMATION
    ---------------------------------- */
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "+=120%",
        scrub: 1,
        pin: true,
        invalidateOnRefresh: true
      }
    });

    // Elements used for clip-path calculation
    const hero = document.querySelector(".hero-section");
    const col2 = document.querySelector(".col-2");

    // Dynamically calculate inset values for clip-path
    function getInset() {
      const heroRect = hero.getBoundingClientRect();
      const colRect = col2.getBoundingClientRect();

      const verticalOffset = 90;

      return {
        top: (colRect.top - heroRect.top) + verticalOffset,
        left: colRect.left - heroRect.left,
        right: heroRect.right - colRect.right,
        bottom: (heroRect.bottom - colRect.bottom) + verticalOffset
      };
    }

    // Video mask animation
    tl.to(".video-wrapper", {
      clipPath: () => {
        const i = getInset();
        return `inset(${i.top}px ${i.right}px ${i.bottom}px ${i.left}px round var(--radius))`;
      },
      ease: "power2.out",
      duration: 1
    }, 0);

    // Video scale animation
    tl.to(".video-inner", {
      scale: 0.8,
      ease: "power2.out",
      duration: 1
    }, 0);

    // Fade out hero content
    tl.to(".hero-content", {
      opacity: 0,
      ease: "power2.out",
      duration: 1
    }, 0);

    // Left column images animation
    tl.from(".col-1 img", {
      x: "-200%",
      y: "150%",
      stagger: 0.15,
      ease: "power3.out", clearProps: "all",
      duration: 1
    }, "-=0.6");

    // Right column images animation
    tl.from(".col-3 img", {
      x: "200%",
      y: "150%",
      stagger: 0.15,
      ease: "power3.out", clearProps: "all",
      duration: 1
    }, "-=0.8");
  }

  /* ----------------------------------
     GLOBAL AUTOMOTIVE CARS DATABASE (DIRECT FACTORY EXPORT)
  ---------------------------------- */
  const vcExactCars = [
  {
    "id": "swm-sawy-tiger",
    "brand": "SWM",
    "title": "Sawy Tiger 2025 — 1.5L 116 ch · Édition Luxe · 7 Places",
    "priceNum": "7 600 000",
    "priceFormatted": "7 600 000 FCFA",
    "category": "Grand SUV 7 Places Familial",
    "images": [
      "https://cdn.sanity.io/images/t3ow1rmc/production/62e1190d48c0c2014fa800823d3ac423cbaaeb1c-732x446.png",
      "https://cdn.sanity.io/images/t3ow1rmc/production/f484e80f3cd3e61307368b2fcfefd5304a911378-578x435.png",
      "https://cdn.sanity.io/images/t3ow1rmc/production/ea71fd082fcdc6ad00bc686d59dec7b4e20504fe-683x435.png",
      "https://cdn.sanity.io/images/t3ow1rmc/production/9482e939053baf239de49a634f1a79bb16141c5c-779x416.png"
    ],
    "reasons": [
      "Le grand SUV 7 places neuf 0 km le plus accessible du marché en export direct d'usine.",
      "Moteur 1.5L atmosphérique 116 ch robuste, économique et compatible avec tous carburants standards.",
      "Véritable habitacle 7 places modulable avec climatisation arrière indépendante.",
      "Garde au sol de 180 mm idéale pour affronter tous les profils de chaussées et pistes.",
      "Entretien mécanique simple et grande facilité d'approvisionnement en pièces de rechange."
    ],
    "specs": [
      {
        "key": "Modèle",
        "val": "SWM Sawy Tiger 2025 Édition Luxe"
      },
      {
        "key": "Constructeur",
        "val": "SWM Motors (Shineray Group)"
      },
      {
        "key": "Carrosserie",
        "val": "Grand SUV 5 Portes · 7 Places (2+3+2)"
      },
      {
        "key": "Motorisation",
        "val": "1.5L Essence 4 cylindres DOHC 16 soupapes"
      },
      {
        "key": "Cylindrée",
        "val": "1 498 cm³"
      },
      {
        "key": "Puissance max",
        "val": "116 ch (85 kW) à 6 000 tr/min"
      },
      {
        "key": "Couple max",
        "val": "152 N·m à 4 000 tr/min"
      },
      {
        "key": "Boîte de vitesses",
        "val": "Manuelle 5 rapports renforcée"
      },
      {
        "key": "Transmission",
        "val": "Traction avant (FWD)"
      },
      {
        "key": "Consommation mixte",
        "val": "6,9 L / 100 km"
      },
      {
        "key": "Réservoir",
        "val": "50 Litres"
      },
      {
        "key": "Dimensions (L×l×H)",
        "val": "4 605 × 1 815 × 1 810 mm"
      },
      {
        "key": "Empattement",
        "val": "2 780 mm"
      },
      {
        "key": "Garde au sol",
        "val": "180 mm (Rehaussée)"
      },
      {
        "key": "Volume du coffre",
        "val": "680 L (jusqu'à 1 560 L sièges rabattus)"
      },
      {
        "key": "Poids à vide",
        "val": "1 460 kg"
      },
      {
        "key": "Suspensions",
        "val": "Avant MacPherson / Arrière Essieu rigide renforcé"
      },
      {
        "key": "Freinage",
        "val": "4 Disques avec ABS + EBD"
      },
      {
        "key": "Multimédia",
        "val": "Écran tactile 10.25\" HD · Bluetooth · Caméra de recul"
      },
      {
        "key": "Climatisation",
        "val": "Double climatisation avant / arrière avec diffuseurs de toit"
      },
      {
        "key": "Pneumatiques",
        "val": "215/60 R17 · Jantes aluminium diamantées"
      }
    ]
  },
  {
    "id": "geely-cowboy-offroad",
    "brand": "GEELY",
    "title": "Cowboy 2025 — 1.5TD · Édition Aventure Off Road",
    "priceNum": "11 200 000",
    "priceFormatted": "11 200 000 FCFA",
    "category": "SUV Baroudeur Tout-Terrain",
    "images": [
      "https://cdn.sanity.io/images/t3ow1rmc/production/9ace466657840162bbaff2bd9c392fdba7208fb4-750x539.png",
      "https://cdn.sanity.io/images/t3ow1rmc/production/f4615fac62b5b87f73ac9a042608cb31004b8596-763x491.png",
      "https://cdn.sanity.io/images/t3ow1rmc/production/f9e88c9e3e7afac78b9d3c18f5a20e50f33893e8-697x531.png",
      "https://cdn.sanity.io/images/t3ow1rmc/production/2072fb99dbf5623df5a25894599d6c8b393676b2-779x532.png"
    ],
    "reasons": [
      "Look baroudeur exclusif avec galerie de toit adventure et projecteurs LED longue portée intégrés.",
      "Moteur 1.5TD Turbo 181 ch vigoureux avec boîte automatique 7 rapports à double embrayage.",
      "Garde au sol surélevée à 190 mm et boucliers de protection tout-terrain avant et arrière.",
      "Cockpit digital futuriste avec écran tactile 14.6 pouces et système Flyme Auto.",
      "Châssis et sécurité de très haute volée développés par le groupe Geely Auto."
    ],
    "specs": [
      {
        "key": "Modèle",
        "val": "Geely Cowboy 2025 Aventure Off Road"
      },
      {
        "key": "Constructeur",
        "val": "Geely Auto Group (吉利汽车)"
      },
      {
        "key": "Carrosserie",
        "val": "SUV Compact Baroudeur · 5 Portes · 5 Places"
      },
      {
        "key": "Moteur",
        "val": "1.5TD Turbo Essence Injection Directe 4 cylindres"
      },
      {
        "key": "Cylindrée",
        "val": "1 499 cm³"
      },
      {
        "key": "Puissance max",
        "val": "181 ch (133 kW) à 5 500 tr/min"
      },
      {
        "key": "Couple max",
        "val": "290 N·m de 2 000 à 3 500 tr/min"
      },
      {
        "key": "Accélération",
        "val": "0 à 100 km/h en 7,9 s"
      },
      {
        "key": "Vitesse maximale",
        "val": "190 km/h"
      },
      {
        "key": "Boîte de vitesses",
        "val": "Automatique 7DCT Double Embrayage humide"
      },
      {
        "key": "Transmission",
        "val": "Traction avant avec contrôle de motricité tout-terrain"
      },
      {
        "key": "Consommation mixte",
        "val": "6,8 L / 100 km"
      },
      {
        "key": "Dimensions (L×l×H)",
        "val": "4 442 × 1 860 × 1 770 mm"
      },
      {
        "key": "Empattement",
        "val": "2 640 mm"
      },
      {
        "key": "Garde au sol",
        "val": "190 mm (Pack Tout-Terrain)"
      },
      {
        "key": "Volume du coffre",
        "val": "515 L (1 200 L sièges rabattus)"
      },
      {
        "key": "Sécurité active",
        "val": "ESP 9.3 · Freinage d'urgence · Caméras panoramiques 540°"
      },
      {
        "key": "Pack Adventure",
        "val": "Galerie de toit alu, projecteurs spot LED, sabots avant/arrière"
      },
      {
        "key": "Pneumatiques",
        "val": "225/55 R18 Tout-Terrain AT"
      }
    ]
  },
  {
    "id": "geely-cowboy-trendy",
    "brand": "GEELY",
    "title": "Cowboy 2025 — 1.5TD · Édition Trendy",
    "priceNum": "10 750 000",
    "priceFormatted": "10 750 000 FCFA",
    "category": "SUV Urbain Baroudeur",
    "images": [
      "https://cdn.sanity.io/images/t3ow1rmc/production/9ace466657840162bbaff2bd9c392fdba7208fb4-750x539.png",
      "https://cdn.sanity.io/images/t3ow1rmc/production/f9e88c9e3e7afac78b9d3c18f5a20e50f33893e8-697x531.png",
      "https://cdn.sanity.io/images/t3ow1rmc/production/2072fb99dbf5623df5a25894599d6c8b393676b2-779x532.png",
      "https://cdn.sanity.io/images/t3ow1rmc/production/f4615fac62b5b87f73ac9a042608cb31004b8596-763x491.png"
    ],
    "reasons": [
      "Version urbaine et élégante du baroudeur Geely Cowboy.",
      "Même motorisation puissante 1.5TD Turbo 181 ch.",
      "Intérieur raffiné avec grand écran multimédia et insonorisation de qualité supérieure.",
      "Excellente maniabilité et position de conduite surélevée très sécurisante."
    ],
    "specs": [
      {
        "key": "Modèle",
        "val": "Geely Cowboy 2025 Édition Trendy"
      },
      {
        "key": "Carrosserie",
        "val": "SUV Urbain · 5 Portes · 5 Places"
      },
      {
        "key": "Moteur",
        "val": "1.5TD Turbo Essence 4 cylindres"
      },
      {
        "key": "Puissance",
        "val": "181 ch (133 kW) · 290 N·m"
      },
      {
        "key": "Boîte",
        "val": "Automatique 7DCT Double Embrayage"
      },
      {
        "key": "0 – 100 km/h",
        "val": "7,9 s"
      },
      {
        "key": "Consommation",
        "val": "6,6 L / 100 km"
      },
      {
        "key": "Dimensions (L×l×H)",
        "val": "4 360 × 1 830 × 1 670 mm"
      },
      {
        "key": "Garde au sol",
        "val": "180 mm"
      },
      {
        "key": "Équipements",
        "val": "Cockpit numérique 10.25\" + Écran central 14.6\" · Toit ouvrant"
      },
      {
        "key": "Pneumatiques",
        "val": "225/55 R18 · Jantes alliage"
      }
    ]
  },
  {
    "id": "chery-tiggo-8-pro-phev",
    "brand": "CHERY",
    "title": "Tiggo 8 Pro PHEV 2025 — 1.5T 100 km · Édition Champion",
    "priceNum": "13 500 000",
    "priceFormatted": "13 500 000 FCFA",
    "category": "Grand SUV 7 Places Hybride Rechargeable",
    "images": [
      "https://cdn.sanity.io/images/t3ow1rmc/production/0f85444b4771d78fa188b8c7e102049af6bb9745-961x535.png",
      "https://cdn.sanity.io/images/t3ow1rmc/production/bbd97e2a684168bf51d687b02ea665e05f5c8a42-894x636.png",
      "https://cdn.sanity.io/images/t3ow1rmc/production/a7c73f5a060d773d2b3e02506934bffb24ed8aee-949x568.png",
      "https://cdn.sanity.io/images/t3ow1rmc/production/fb22fc3c46e6df5a415dbc516c352e03f35c50a2-1005x584.png"
    ],
    "reasons": [
      "Puissance combinée hors normes de 326 ch (240 kW) et 545 N·m de couple.",
      "Véritable 7 places de grand luxe avec sellerie cuir chauffante et massante.",
      "100 km d'autonomie en 100% électrique et plus de 1 000 km d'autonomie totale combinée.",
      "Cockpit piloté par puce Qualcomm Snapdragon 8155 ultra-fluide.",
      "Sécurité maximale : 10 airbags, structure en acier haute résistance et pack ADAS complet."
    ],
    "specs": [
      {
        "key": "Modèle",
        "val": "Chery Tiggo 8 Pro PHEV Édition Champion"
      },
      {
        "key": "Constructeur",
        "val": "Chery Automobile (奇瑞汽车)"
      },
      {
        "key": "Carrosserie",
        "val": "Grand SUV Prestige 7 Places (2+3+2)"
      },
      {
        "key": "Motorisation",
        "val": "1.5T Turbo Essence + Double Moteur Électrique Synchrone"
      },
      {
        "key": "Puissance combinée",
        "val": "240 kW / 326 ch"
      },
      {
        "key": "Couple combiné",
        "val": "545 N·m"
      },
      {
        "key": "Accélération",
        "val": "0 à 100 km/h en 7,0 s"
      },
      {
        "key": "Autonomie 100% Élec",
        "val": "100 km (Norme CLTC)"
      },
      {
        "key": "Autonomie totale",
        "val": "1 050 km"
      },
      {
        "key": "Boîte de vitesses",
        "val": "DHT 3 rapports hybride dédiée"
      },
      {
        "key": "Consommation",
        "val": "1,7 L / 100 km (WLTC) · 5,5 L batterie vide"
      },
      {
        "key": "Capacité batterie",
        "val": "19,27 kWh Lithium Ternaire"
      },
      {
        "key": "Temps de charge",
        "val": "Charge rapide DC : 30% à 80% en 25 min"
      },
      {
        "key": "Dimensions (L×l×H)",
        "val": "4 745 × 1 860 × 1 747 mm"
      },
      {
        "key": "Empattement",
        "val": "2 710 mm"
      },
      {
        "key": "Garde au sol",
        "val": "185 mm"
      },
      {
        "key": "Volume du coffre",
        "val": "889 L (jusqu'à 1 930 L banquette rabattue)"
      },
      {
        "key": "Aides à la conduite",
        "val": "ADAS L2+ · Régulateur adaptatif ACC · Freinage auto · Vue 360°"
      },
      {
        "key": "Pneumatiques",
        "val": "235/55 R18 · Jantes alliage aérodynamiques"
      }
    ]
  },
  {
    "id": "geely-galaxy-l7",
    "brand": "GEELY",
    "title": "Galaxy L7 2025 — EM-i 115 km · Édition Explorer",
    "priceNum": "13 000 000",
    "priceFormatted": "13 000 000 FCFA",
    "category": "SUV Futuriste Hybride EM-i",
    "images": [
      "https://cdn.sanity.io/images/t3ow1rmc/production/cc5f78d3a86bdb3ef6e5dffaa8bfaa660b15efa8-831x614.jpg",
      "https://cdn.sanity.io/images/t3ow1rmc/production/39e239a1e8224a67f1a6a35d9b2ec4a5257f3686-874x621.jpg",
      "https://cdn.sanity.io/images/t3ow1rmc/production/a3df5f645a57634b83c82103954c673dc2e18fd4-1706x1279.jpg"
    ],
    "reasons": [
      "Système hybride Geely NordThor EM-i avec efficacité thermique record de 46,5%.",
      "115 km en mode pur électrique et consommation moyenne bluffante de 2,67 L / 100 km.",
      "Cockpit futuriste avec triple écran : compteur 10.25\", écran central 13.2\" et écran passager 16.2\".",
      "Châssis haute précision développé conjointement avec l'ingénierie européenne.",
      "Sièges Queen Seat avec repose-jambes électrique et massage intégré."
    ],
    "specs": [
      {
        "key": "Modèle",
        "val": "Geely Galaxy L7 EM-i Édition Explorer"
      },
      {
        "key": "Constructeur",
        "val": "Geely Auto (吉利银河)"
      },
      {
        "key": "Carrosserie",
        "val": "SUV Compact Futuriste · 5 Portes · 5 Places"
      },
      {
        "key": "Moteur thermique",
        "val": "1.5L NordThor Hybride 4 cylindres"
      },
      {
        "key": "Puissance combinée",
        "val": "160 kW / 218 ch"
      },
      {
        "key": "Couple combiné",
        "val": "338 N·m"
      },
      {
        "key": "Accélération",
        "val": "0 à 100 km/h en 7,5 s"
      },
      {
        "key": "Autonomie électrique",
        "val": "115 km (Norme CLTC)"
      },
      {
        "key": "Consommation mixte",
        "val": "2,67 L / 100 km"
      },
      {
        "key": "Autonomie totale",
        "val": "1 370 km"
      },
      {
        "key": "Boîte de vitesses",
        "val": "DHT 1 vitesse hybride dédiée"
      },
      {
        "key": "Dimensions (L×l×H)",
        "val": "4 700 × 1 905 × 1 685 mm"
      },
      {
        "key": "Empattement",
        "val": "2 785 mm"
      },
      {
        "key": "Garde au sol",
        "val": "175 mm"
      },
      {
        "key": "Écrans",
        "val": "Triple écran haute résolution (10.25\" + 13.2\" + 16.2\")"
      },
      {
        "key": "Puce multimédia",
        "val": "Qualcomm Snapdragon 8155 · OS Galaxy N OS"
      },
      {
        "key": "Pneumatiques",
        "val": "235/50 R19 · Jantes turbine bicolores"
      }
    ]
  },
  {
    "id": "kaiyi-x7-pro-mountain",
    "brand": "KAIYI",
    "title": "X7 Pro — 5 Places 2026 · Édition Mountain",
    "priceNum": "10 750 000",
    "priceFormatted": "10 750 000 FCFA",
    "category": "Grand SUV Statutaire",
    "images": [
      "https://cdn.sanity.io/images/t3ow1rmc/production/19ea2b8e625b89ffe72bc2c8007480cfcee4cba2-835x468.jpg",
      "https://cdn.sanity.io/images/t3ow1rmc/production/f0a6a944975c1bc69c9f6d7642509c8f642e7183-1706x1279.jpg",
      "https://cdn.sanity.io/images/t3ow1rmc/production/35f3025f2f063e73a13785a4e84e7054de3b1293-1706x1279.jpg"
    ],
    "reasons": [
      "Moteur 1.6T Turbo de 197 ch puissant et coupleux développé en partenariat avec Chery.",
      "Silhouette statutaire avec calandre cascade chromée imposante et signature lumineuse LED.",
      "Habitacle spacieux avec sellerie cuir grand confort et finitions soignées.",
      "Garde au sol de 185 mm assurant une excellente sérénité sur tous types de parcours.",
      "Rapport volume / puissance / prix CIF imbattable sur le marché mondial."
    ],
    "specs": [
      {
        "key": "Modèle",
        "val": "Kaiyi X7 Pro 2026 Édition Mountain"
      },
      {
        "key": "Constructeur",
        "val": "Kaiyi Auto (Yibin Kaiyi Automobile)"
      },
      {
        "key": "Carrosserie",
        "val": "Grand SUV Statutaire · 5 Portes · 5 Places"
      },
      {
        "key": "Motorisation",
        "val": "1.6T Turbo Essence Injection Directe ACTECO"
      },
      {
        "key": "Cylindrée",
        "val": "1 598 cm³"
      },
      {
        "key": "Puissance max",
        "val": "197 ch (145 kW) à 5 500 tr/min"
      },
      {
        "key": "Couple max",
        "val": "290 N·m de 2 000 à 4 000 tr/min"
      },
      {
        "key": "Accélération",
        "val": "0 à 100 km/h en 8,2 s"
      },
      {
        "key": "Boîte de vitesses",
        "val": "Automatique 7DCT Double Embrayage humide"
      },
      {
        "key": "Transmission",
        "val": "Traction avant (FWD)"
      },
      {
        "key": "Consommation mixte",
        "val": "7,3 L / 100 km"
      },
      {
        "key": "Réservoir",
        "val": "55 Litres"
      },
      {
        "key": "Dimensions (L×l×H)",
        "val": "4 710 × 1 890 × 1 705 mm"
      },
      {
        "key": "Empattement",
        "val": "2 745 mm"
      },
      {
        "key": "Garde au sol",
        "val": "185 mm (Renforcée)"
      },
      {
        "key": "Volume du coffre",
        "val": "580 L (jusqu'à 1 450 L banquette rabattue)"
      },
      {
        "key": "Suspensions",
        "val": "Avant MacPherson / Arrière Indépendante Multi-bras"
      },
      {
        "key": "Équipements de série",
        "val": "Double écran 12.3\" HD · Toit panoramique · Caméras 360° · Démarrage sans clé"
      },
      {
        "key": "Pneumatiques",
        "val": "235/55 R19 · Jantes sport aluminium"
      }
    ]
  },
  {
    "id": "kaiyi-x7-pro-terres",
    "brand": "KAIYI",
    "title": "X7 Pro — 5 Places 2026 · Édition Hautes Terres",
    "priceNum": "10 000 000",
    "priceFormatted": "10 000 000 FCFA",
    "category": "Grand SUV Familial",
    "images": [
      "https://cdn.sanity.io/images/t3ow1rmc/production/19ea2b8e625b89ffe72bc2c8007480cfcee4cba2-835x468.jpg",
      "https://cdn.sanity.io/images/t3ow1rmc/production/c436d140faef78a70e1b43507b386175dda4daa4-1706x1279.jpg",
      "https://cdn.sanity.io/images/t3ow1rmc/production/afc31e4ed8dd04bba879199e16351d8984d07b77-1706x1279.jpg"
    ],
    "reasons": [
      "Prix plancher de 10 Millions FCFA pour un grand SUV neuf 0 km de 197 ch.",
      "Même moteur 1.6T Turbo fiable et boîte automatique 7 rapports.",
      "Toit ouvrant panoramique XXL et habitacle familial spacieux.",
      "Suspension renforcée spécialement tarée pour les conditions de route difficiles."
    ],
    "specs": [
      {
        "key": "Modèle",
        "val": "Kaiyi X7 Pro 2026 Édition Hautes Terres"
      },
      {
        "key": "Carrosserie",
        "val": "Grand SUV · 5 Portes · 5 Places"
      },
      {
        "key": "Moteur",
        "val": "1.6T Turbo Essence (197 ch / 290 N·m)"
      },
      {
        "key": "Boîte de vitesses",
        "val": "Automatique 7DCT"
      },
      {
        "key": "Dimensions (L×l×H)",
        "val": "4 710 × 1 890 × 1 705 mm"
      },
      {
        "key": "Empattement",
        "val": "2 745 mm"
      },
      {
        "key": "Garde au sol",
        "val": "185 mm"
      },
      {
        "key": "Consommation",
        "val": "7,3 L / 100 km"
      },
      {
        "key": "Équipements",
        "val": "Écran tactile 12.3 pouces · Caméra de recul · Radar"
      },
      {
        "key": "Pneumatiques",
        "val": "235/60 R18 · Jantes alliage"
      }
    ]
  },
  {
    "id": "changan-uni-z-phev",
    "brand": "CHANGAN",
    "title": "UNI-Z PHEV 2026 — 130 km · Édition Vaisseau",
    "priceNum": "11 700 000",
    "priceFormatted": "11 700 000 FCFA",
    "category": "SUV Compact Hybride Rechargeable",
    "images": [
      "https://cdn.sanity.io/images/t3ow1rmc/production/8d0363dec95279d09f9afc539d386f630902b55d-991x553.jpg",
      "https://cdn.sanity.io/images/t3ow1rmc/production/4a3a3eaec736821bac106510e7ed4c731d70d6e0-854x591.jpg",
      "https://cdn.sanity.io/images/t3ow1rmc/production/7a054ad99e0be5efde1410c38f4635a4ebed3803-991x602.jpg",
      "https://cdn.sanity.io/images/t3ow1rmc/production/57f659edab30ee071a37bfb9503284d682859cda-1028x601.jpg"
    ],
    "reasons": [
      "130 km d'autonomie 100% électrique CLTC pour tous vos trajets quotidiens sans consommer d'essence.",
      "Consommation combinée record de 3,06 L / 100 km grâce au groupe Nouvelle Baleine Bleue PHEV.",
      "Recharge ultra-rapide DC : 30% à 80% en seulement 15 minutes.",
      "Système de conduite intelligente ADAS L2 Tianshu avec caméras panoramiques 540°.",
      "Grand cockpit digital avec écran tactile 14.6 pouces et toit panoramique ouvrant."
    ],
    "specs": [
      {
        "key": "Modèle",
        "val": "Changan UNI-Z PHEV 2026 · Nouvelle Baleine Bleue"
      },
      {
        "key": "Finition",
        "val": "Édition Vaisseau — Finition Supérieure"
      },
      {
        "key": "Constructeur",
        "val": "Changan Automobile (长安汽车)"
      },
      {
        "key": "Carrosserie",
        "val": "SUV Compact Futuriste · 5 Portes · 5 Places"
      },
      {
        "key": "Moteur thermique",
        "val": "1.5L Atmosphérique 4 cylindres JL469Q1"
      },
      {
        "key": "Moteur électrique",
        "val": "Synchrone à aimant permanent ATDM68"
      },
      {
        "key": "Puissance totale",
        "val": "160 kW / 218 ch"
      },
      {
        "key": "Couple total",
        "val": "251 N·m"
      },
      {
        "key": "Accélération",
        "val": "0 à 100 km/h en 7,4 s"
      },
      {
        "key": "Autonomie électrique",
        "val": "130 km (Norme CLTC)"
      },
      {
        "key": "Autonomie totale",
        "val": "1 200 km"
      },
      {
        "key": "Consommation",
        "val": "1,3 L / 100 km (WLTC) · 3,06 L combinée"
      },
      {
        "key": "Boîte de vitesses",
        "val": "E-CVT Transmission électronique à variation continue"
      },
      {
        "key": "Dimensions (L×l×H)",
        "val": "4 730 × 1 890 × 1 680 mm"
      },
      {
        "key": "Empattement",
        "val": "2 795 mm"
      },
      {
        "key": "Garde au sol",
        "val": "183 mm (Renforcée)"
      },
      {
        "key": "Volume du coffre",
        "val": "638 L (jusqu'à 1 425 L banquette rabattue)"
      },
      {
        "key": "Aides à la conduite",
        "val": "ADAS L2 Tianshu · Régulateur adaptatif ACC · Vue 540°"
      },
      {
        "key": "Pneumatiques",
        "val": "245/50 R20 · Jantes alliage bicolores"
      }
    ]
  },
  {
    "id": "kaiyi-x7-pro-7places",
    "brand": "KAIYI",
    "title": "X7 Pro — 7 Places 2026",
    "priceNum": "10 800 000",
    "priceFormatted": "10 800 000 FCFA",
    "category": "Grand SUV 7 Places Familial",
    "images": [
      "https://cdn.sanity.io/images/t3ow1rmc/production/19ea2b8e625b89ffe72bc2c8007480cfcee4cba2-835x468.jpg",
      "https://cdn.sanity.io/images/t3ow1rmc/production/eff155fa322f240c89bbee61896fc44976fe4a73-1706x1279.jpg",
      "https://cdn.sanity.io/images/t3ow1rmc/production/b9d0a25279667acbf02dd47877a1f5791a52b6ef-1706x1279.jpg"
    ],
    "reasons": [
      "Véritable disposition 7 places spacieuse pour les grandes familles et le transport VIP.",
      "Motorisation 1.6T Turbo de 197 ch avec boîte automatique 7 rapports.",
      "Climatisation arrière avec commandes séparées et buses aux rangées 2 et 3.",
      "Modularité intégrale avec plancher plat banquettes rabattues."
    ],
    "specs": [
      {
        "key": "Modèle",
        "val": "Kaiyi X7 Pro 2026 Édition 7 Places"
      },
      {
        "key": "Carrosserie",
        "val": "Grand SUV 7 Places (2+3+2) · 5 Portes"
      },
      {
        "key": "Moteur",
        "val": "1.6T Turbo Essence (197 ch / 290 N·m)"
      },
      {
        "key": "Boîte de vitesses",
        "val": "Automatique 7DCT"
      },
      {
        "key": "Dimensions (L×l×H)",
        "val": "4 710 × 1 890 × 1 705 mm"
      },
      {
        "key": "Empattement",
        "val": "2 745 mm"
      },
      {
        "key": "Garde au sol",
        "val": "185 mm"
      },
      {
        "key": "Volume du coffre",
        "val": "450 L en 7 places (1 500 L en 2 places)"
      },
      {
        "key": "Équipements",
        "val": "Double écran digital · Toit panoramique · Caméras 360°"
      },
      {
        "key": "Pneumatiques",
        "val": "235/55 R19 · Jantes sport"
      }
    ]
  },
  {
    "id": "kaiyi-x3-pro",
    "brand": "KAIYI",
    "title": "X3 Pro — 1.5L CVT Édition Luxe",
    "priceNum": "7 650 000",
    "priceFormatted": "7 650 000 FCFA",
    "category": "SUV Compact Urbain Automatique",
    "images": [
      "https://cdn.sanity.io/images/t3ow1rmc/production/8a28b41c7d2568fbba483b83ab85ee42e284c7c0-772x542.png",
      "https://cdn.sanity.io/images/t3ow1rmc/production/5b4c1e57f895244409d95e384f39932075ac0e58-735x555.png",
      "https://cdn.sanity.io/images/t3ow1rmc/production/93f5b4fbc4c7654b637faa065c4161254942d041-771x531.png",
      "https://cdn.sanity.io/images/t3ow1rmc/production/ac5c51f732516a6c7865535120889a817bc1bb15-780x594.png"
    ],
    "reasons": [
      "Le SUV automatique neuf 0 km au meilleur tarif d'importation mondiale.",
      "Boîte automatique CVT souple, fiable et très agréable au quotidien.",
      "Faible consommation de carburant (6.7 L/100) et gabarit urbain facile à garer.",
      "Écran multimédia tactile 10.25 pouces avec connectivité smartphone et caméra de recul."
    ],
    "specs": [
      {
        "key": "Modèle",
        "val": "Kaiyi X3 Pro 2025 Luxe"
      },
      {
        "key": "Carrosserie",
        "val": "SUV Compact Urbain · 5 Portes · 5 Places"
      },
      {
        "key": "Moteur",
        "val": "1.5L Essence atmosphérique 4 cylindres"
      },
      {
        "key": "Puissance",
        "val": "116 ch (85 kW) à 6 150 tr/min"
      },
      {
        "key": "Couple",
        "val": "143 N·m à 4 000 tr/min"
      },
      {
        "key": "Boîte de vitesses",
        "val": "Automatique CVT (Variation continue séquentielle)"
      },
      {
        "key": "Consommation mixte",
        "val": "6,7 L / 100 km"
      },
      {
        "key": "Dimensions (L×l×H)",
        "val": "4 400 × 1 831 × 1 653 mm"
      },
      {
        "key": "Empattement",
        "val": "2 632 mm"
      },
      {
        "key": "Garde au sol",
        "val": "170 mm"
      },
      {
        "key": "Volume du coffre",
        "val": "480 L (1 100 L banquette rabattue)"
      },
      {
        "key": "Pneumatiques",
        "val": "215/60 R17 · Jantes aluminium"
      }
    ]
  }
];

  /* ----------------------------------
     HOMEPAGE: RENDER CATALOGUE GRID
  ---------------------------------- */
  const showcaseGrid = document.getElementById("vehicles-grid");
  if (showcaseGrid) {
    showcaseGrid.innerHTML = vcExactCars.map((c) => `
      <a href="voiture.html?id=${c.id}" class="vc-card-item">
        <div class="vc-card-thumb">
          <img src="${c.images[0]}" alt="${c.brand} ${c.title}" loading="lazy">
          <span class="vc-badge-nouveau">NOUVEAU</span>
        </div>
        <div class="vc-card-info">
          <div class="vc-brand-title">${c.brand}</div>
          <h3 class="vc-model-title">${c.title}</h3>
          <div class="vc-price-row">
            <span class="vc-price-val">${c.priceNum}</span>
            <span class="vc-price-cur">FCFA</span>
          </div>
        </div>
      </a>
    `).join('');
  }

  /* ----------------------------------
     STANDALONE VEHICLE PAGE: RENDER ON VOITURE.HTML
  ---------------------------------- */
  const carPageContainer = document.getElementById("car-page-container");
  if (carPageContainer) {
    const urlParams = new URLSearchParams(window.location.search);
    const carId = urlParams.get('id');
    const selectedCar = vcExactCars.find(c => c.id === carId) || vcExactCars[0];

    document.title = `${selectedCar.brand} ${selectedCar.title} — Export Direct Usine CIF | MOTORS Global`;

    const waMsg = encodeURIComponent(`Bonjour, je souhaite commander ou recevoir une cotation proforma CIF internationale pour le véhicule ${selectedCar.brand} ${selectedCar.title} (${selectedCar.priceFormatted}).`);
    const waLink = `https://wa.me/8619587439774?text=${waMsg}`;

    carPageContainer.innerHTML = `
      <!-- En-tête du Véhicule -->
      <div class="vc-d-header">
        <div class="vc-d-title-box">
          <span class="vc-d-brand">${selectedCar.brand}</span>
          <h1 class="vc-d-name">${selectedCar.title}</h1>
        </div>
        <div class="vc-d-price-box">
          <div class="vc-d-price-main">${selectedCar.priceFormatted}</div>
          <div class="vc-d-price-sub">CIF · Coût + Assurance + Fret inclus</div>
        </div>
      </div>

      

      <!-- Galerie Photos Slider -->
      <div class="vc-d-gallery">
        <div class="vc-d-slider-stage">
          <img src="${selectedCar.images[0]}" alt="${selectedCar.title}" id="vc-d-main-img" class="vc-d-main-img">
          
          <button class="vc-d-slide-arrow vc-d-prev" id="vc-prev-img" aria-label="Photo précédente">&#10094;</button>
          <button class="vc-d-slide-arrow vc-d-next" id="vc-next-img" aria-label="Photo suivante">&#10095;</button>
          
          <div class="vc-d-counter" id="vc-img-counter">Photo 1 / ${selectedCar.images.length}</div>
        </div>

        <div class="vc-d-thumbs" id="vc-d-thumbs-bar">
          ${selectedCar.images.map((img, i) => `
            <div class="vc-d-thumb ${i === 0 ? 'active' : ''}" onclick="selectCarPhoto(${i})">
              <img src="${img}" alt="Miniature ${i + 1}">
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Boutons Actions WhatsApp et Proforma -->
      <div class="vc-d-actions-row">
        <a href="${waLink}" target="_blank" rel="noopener noreferrer" class="vc-d-btn-wa">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.311.045-.698.077-2.029-.475-1.623-.674-2.701-2.316-2.784-2.426-.083-.111-.667-.887-.667-1.689 0-.803.421-1.198.571-1.36.15-.162.33-.203.441-.203.111 0 .222.002.319.006.104.004.243-.039.38.291.144.348.491 1.198.534 1.286.043.088.072.191.014.306-.058.115-.087.187-.174.289-.087.102-.183.228-.261.306-.087.087-.178.182-.077.355.101.173.449.741.964 1.201.662.591 1.221.774 1.394.861.173.087.275.072.376-.044.101-.116.434-.506.55-.68.116-.174.232-.145.39-.087.159.058 1.008.475 1.181.562.173.087.289.13.332.203.043.072.043.419-.101.824z"/>
          </svg>
          <span>Commander sur WhatsApp</span>
        </a>
        <button class="vc-d-btn-proforma" onclick="openModal('${selectedCar.brand} ${selectedCar.title}', '${selectedCar.priceFormatted}')">
          <span>Demander une Facture Proforma CIF &rarr;</span>
        </button>
      </div>

      <!-- 5 Raisons Clés d'Acheter -->
      <div class="vc-reasons-box">
        <h3 class="vc-reasons-title">5 raisons d'acheter la ${selectedCar.brand} ${selectedCar.title}</h3>
        <div class="vc-reasons-grid">
          ${selectedCar.reasons.map((r, i) => `
            <div class="vc-reason-item">
              <span class="vc-reason-num">${i + 1}</span>
              <p class="vc-reason-text">${r}</p>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Fiche Technique Complète -->
      <div class="vc-specs-table-box">
        <h3 class="vc-specs-section-title">FICHE TECHNIQUE COMPLÈTE</h3>
        <div class="vc-specs-grid">
          ${selectedCar.specs.map(s => `
            <div class="vc-spec-row">
              <span class="vc-spec-key">${s.key}</span>
              <span class="vc-spec-val">${s.val}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    let activeImgIndex = 0;
    window.selectCarPhoto = function(photoIdx) {
      if (photoIdx < 0 || photoIdx >= selectedCar.images.length) return;
      activeImgIndex = photoIdx;
      const mainImg = document.getElementById("vc-d-main-img");
      const counter = document.getElementById("vc-img-counter");
      const thumbs = document.querySelectorAll(".vc-d-thumb");

      if (mainImg) mainImg.src = selectedCar.images[photoIdx];
      if (counter) counter.textContent = `Photo ${photoIdx + 1} / ${selectedCar.images.length}`;
      thumbs.forEach((t, idx) => t.classList.toggle("active", idx === photoIdx));
    };

    const prevBtn = document.getElementById("vc-prev-img");
    const nextBtn = document.getElementById("vc-next-img");
    if (prevBtn) prevBtn.addEventListener("click", () => {
      let next = activeImgIndex - 1;
      if (next < 0) next = selectedCar.images.length - 1;
      selectCarPhoto(next);
    });
    if (nextBtn) nextBtn.addEventListener("click", () => {
      let next = activeImgIndex + 1;
      if (next >= selectedCar.images.length) next = 0;
      selectCarPhoto(next);
    });
  }


  /* ----------------------------------
     MODAL DE FACTURE PROFORMA / COTATION
  ---------------------------------- */
  const reserveModal = document.getElementById("reservation-modal");
  const modalClose = document.getElementById("modal-close-btn");
  const modalBackdrop = document.getElementById("modal-backdrop");
  const modalEditionVal = document.getElementById("modal-edition-val");
  const modalPriceVal = document.getElementById("modal-price-val");
  const reserveForm = document.getElementById("reservation-form");
  const successScreen = document.getElementById("modal-success");
  const successClose = document.getElementById("modal-success-close");

  const navContactBtn = document.getElementById("nav-contact-btn");
  if (navContactBtn) {
    navContactBtn.addEventListener("click", (e) => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        e.preventDefault();
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  function openModal(editionName, priceStr) {
    if (modalEditionVal && editionName) modalEditionVal.textContent = editionName;
    if (modalPriceVal && priceStr) modalPriceVal.textContent = priceStr;
    if (reserveForm) reserveForm.style.display = "block";
    if (successScreen) successScreen.style.display = "none";
    if (reserveModal) {
      reserveModal.classList.add("open");
      reserveModal.setAttribute("aria-hidden", "false");
    }
  }
  window.openModal = openModal;

  function closeModal() {
    if (reserveModal) {
      reserveModal.classList.remove("open");
      reserveModal.setAttribute("aria-hidden", "true");
    }
  }

  if (modalClose) modalClose.addEventListener("click", closeModal);
  if (modalBackdrop) modalBackdrop.addEventListener("click", closeModal);
  if (successClose) successClose.addEventListener("click", closeModal);

  if (reserveForm) {
    reserveForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const fname = document.getElementById("res-fname").value;
      const phone = document.getElementById("res-phone").value;
      const port = document.getElementById("res-region").value;
      const model = modalEditionVal ? modalEditionVal.textContent : "Véhicule Neuf Export";

      if (reserveForm) reserveForm.style.display = "none";
      if (successScreen) {
        successScreen.style.display = "block";
        const tokenElem = document.getElementById("generated-token");
        if (tokenElem) tokenElem.textContent = "GLOBAL-EXP-" + Math.floor(1000 + Math.random() * 9000);
      }

      const waMsg = encodeURIComponent(`Bonjour, je suis ${fname} (${phone}). Je viens d'envoyer une demande de cotation proforma CIF pour le modèle ${model} avec destination : ${port}.`);
      setTimeout(() => {
        window.open(`https://wa.me/8619587439774?text=${waMsg}`, '_blank');
      }, 1200);
    });
  }

  /* ----------------------------------
     ACCORDÉON FAQ
  ---------------------------------- */
  const faqQuestions = document.querySelectorAll(".faq-question");
  faqQuestions.forEach(btn => {
    btn.addEventListener("click", () => {
      const item = btn.parentElement;
      const isOpen = item.classList.contains("active");

      faqQuestions.forEach(q => {
        q.parentElement.classList.remove("active");
        q.setAttribute("aria-expanded", "false");
      });

      if (!isOpen) {
        item.classList.add("active");
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });

  /* ----------------------------------
     FOOTER FORM
  ---------------------------------- */
  const footerForm = document.getElementById("footer-allocation-form");
  const footerFeedback = document.getElementById("footer-form-feedback");
  if (footerForm) {
    footerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("footer-email").value;
      if (footerFeedback) {
        footerFeedback.textContent = "✓ Demande enregistrée pour " + email + ". Notre département export vous répondra sous 24h.";
        footerFeedback.style.color = "var(--accent-gold)";
      }
      footerForm.reset();
    });
  }

  /* ----------------------------------
     BACK TO TOP
  ---------------------------------- */
  const backToTop = document.getElementById("back-to-top");
  if (backToTop) {
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }



  /* ----------------------------------
     ANIMATIONS CINÉMATIQUES AU DÉFILEMENT (SCROLL REVEAL)
  ---------------------------------- */
  if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {

    // 1. Apparition douce des en-têtes de section
    gsap.utils.toArray('.section-header, .meta-badge-row, .vc-catalogue-head').forEach((el) => {
      gsap.from(el, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out", clearProps: "all",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      });
    });

    // 2. Section À Propos : Texte et Image
    if (document.querySelector('.brand-story-section')) {
      gsap.from('.story-content', {
        y: 45,
        opacity: 0,
        duration: 1.1,
        ease: "power3.out", clearProps: "all",
        scrollTrigger: {
          trigger: '.brand-story-section',
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });
      gsap.from('.story-frameless-visual', {
        scale: 0.96,
        y: 35,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out", clearProps: "all",
        delay: 0.15,
        scrollTrigger: {
          trigger: '.brand-story-section',
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });
    }

    // 3. Cartes du Catalogue : Apparition progressive en cascade
    const carCards = gsap.utils.toArray('.vc-card-item');
    if (carCards.length > 0) {
      gsap.from(carCards, {
        y: 50,
        opacity: 0,
        duration: 0.9,
        stagger: 0.09,
        ease: "power3.out", clearProps: "all",
        scrollTrigger: {
          trigger: '.vc-showcase-grid',
          start: "top 85%",
          toggleActions: "play none none none"
        }
      });
    }

    // 4. Cartes de Témoignages
    const tCards = gsap.utils.toArray('.testimonial-card');
    if (tCards.length > 0) {
      gsap.from(tCards, {
        y: 45,
        opacity: 0,
        duration: 1,
        stagger: 0.14,
        ease: "power3.out", clearProps: "all",
        scrollTrigger: {
          trigger: '.testimonials-grid',
          start: "top 85%",
          toggleActions: "play none none none"
        }
      });
    }

    // 5. Chiffres Clés de Confiance
    const metricItems = gsap.utils.toArray('.metric-item');
    if (metricItems.length > 0) {
      gsap.from(metricItems, {
        y: 30,
        opacity: 0,
        duration: 0.85,
        stagger: 0.1,
        ease: "power3.out", clearProps: "all",
        scrollTrigger: {
          trigger: '.trust-metrics-strip',
          start: "top 90%",
          toggleActions: "play none none none"
        }
      });
    }

    // 6. Questions FAQ en cascade
    const faqItems = gsap.utils.toArray('.faq-item');
    if (faqItems.length > 0) {
      gsap.from(faqItems, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.out", clearProps: "all",
        scrollTrigger: {
          trigger: '.faq-list',
          start: "top 85%",
          toggleActions: "play none none none"
        }
      });
    }

    // 7. Formulaire de Cotation Footer
    if (document.querySelector('.footer-interactive-row')) {
      gsap.from('.footer-signup-box, .footer-contact-card', {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out", clearProps: "all",
        scrollTrigger: {
          trigger: '.footer-interactive-row',
          start: "top 88%",
          toggleActions: "play none none none"
        }
      });
    }
  }



  /* ----------------------------------
     AUTO-SLIDESHOW 6 VÉHICULES EN STOCK (3 SECONDES)
  ---------------------------------- */
  let currentStockIndex = 0;
  const stockSlides = document.querySelectorAll('.stock-slide');
  const stockDots = document.querySelectorAll('.stock-dot');
  let stockInterval = null;

  function showStockSlide(index) {
    if (!stockSlides.length) return;
    if (index >= stockSlides.length) index = 0;
    if (index < 0) index = stockSlides.length - 1;

    stockSlides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });

    stockDots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });

    currentStockIndex = index;
  }

  window.goToStockSlide = function(index) {
    showStockSlide(index);
    resetStockTimer();
  };

  function nextStockSlide() {
    showStockSlide(currentStockIndex + 1);
  }

  function startStockTimer() {
    if (stockSlides.length > 1 && !stockInterval) {
      stockInterval = setInterval(nextStockSlide, 3000);
    }
  }

  function stopStockTimer() {
    if (stockInterval) {
      clearInterval(stockInterval);
      stockInterval = null;
    }
  }

  function resetStockTimer() {
    stopStockTimer();
    startStockTimer();
  }

  const slideshowFrame = document.getElementById('stock-slideshow');
  if (slideshowFrame) {
    startStockTimer();
    slideshowFrame.addEventListener('mouseenter', stopStockTimer);
    slideshowFrame.addEventListener('mouseleave', startStockTimer);
  }



  });
