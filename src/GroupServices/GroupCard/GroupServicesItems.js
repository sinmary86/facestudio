import GroupServices from "../../Assets/seance-collective.jpg";
import AgeGroup from "../../Assets/groupe-bien-etre.jpg";
import AgeTransformation from "../../Assets/transformation-visage-femme.jpg";

export const groupServicesItems = [
  {
    image: AgeGroup,
    alt: "Club Fraîche – séance collective pour entretenir l’éclat du visage",
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
    alt: "Club Boost Éclat – programme mensuel pour dynamiser le visage",
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
    alt: "Club Reloaded – transformation progressive du visage en petit groupe",
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
