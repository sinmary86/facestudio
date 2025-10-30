import offresEntreprises from "../../Assets/offres-entreprises.jpg";
import ateliersFormations from "../../Assets/ateliers-formations.jpg";
import accompagnementIndividuel from "../../Assets/accompagnement-individuel.jpg";
import coursEnGroupe from "../../Assets/cours-en-groupe.jpg";

export const mainServicesData = [
  {
    title: "Accompagnement individuel",
    alt: "Séances individuelles de Face Fitness personnalisées",
    image: accompagnementIndividuel,
    link: "/services/accompagnement-individuel",
  },

  {
    title: "COURS EN GROUPE",
    alt: "Cours collectifs de Face Fitness en ligne ou en présentiel",
    image: coursEnGroupe,
    link: "/services/cours-en-groupe",
  },

  {
    title: "Offres pour les Entreprises",
    alt: "Ateliers bien-être et programmes visage pour entreprises",
    image: offresEntreprises,
    link: "/services/offres-entreprises",
  },

  {
    title: "Ateliers et Formations",
    alt: "Ateliers de Face Yoga et formations pour approfondir la méthode",
    image: ateliersFormations,
    link: "/services/ateliers-formations",
  },
];
