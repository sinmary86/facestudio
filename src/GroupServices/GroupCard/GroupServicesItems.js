import  GroupServices from '../../Assets/age-groups.jpg';

import AgeGroup from '../../Assets/group-Services.jpg';

import AgeTransformation from '../../Assets/freund-helfende-frau.jpg';




   export const groupServicesItems = [
 {
    image: AgeGroup,
    alt:'Age Group',
    title: "Club Fraîche",
    subtitle: "1 séance",
    items: [
      "1 séance hebdomadaire en ligne (40 min)",
      "Groupe convivial pour progresser ensemble (max 10 personnes)",
      "Sans suivi individuel, mais efficace et bienveillant",
   
    ],
    price: "15 €",
    note: "(60 €/mois par 4 séances)",
  },
  {
    image: GroupServices,
    alt:'Group Services',
    title: "Club Boost Éclat",
    subtitle: "1 mois",
    items: [
      "1 séance hebdomadaire en ligne (40 min)",
      "Chaque mois, un programme express personnalisé (format vidéo)",
      "Mini-guide visage adapté à votre morphologie",
    
    ],
    price: "90 €",
    note: "(240 €/trimestre)",
  },
  {
    image: AgeTransformation,
    alt:'Age Transformation',
    title: "Club Reloaded ",
    subtitle: "1 mois",
    items: [
      "2 séances par semaine en petit groupe (max 6)",
      "Retours vocaux personnalisés détaillés tous les 15 jours",
      "Accès prioritaire à mes ateliers et nouveautés",

    ],
    price: "120 € ",
    note: "(320 €/trimestre)",
  },
];