import individualProgramm from "../../Assets/bien-etre-individuel.jpg";
import Mimique from "../../Assets/correction-mimique.jpg";
import ParZone from "../../Assets/seance-ciblee-zone.jpg";

export const individualServiceItems = [
  {
    image: individualProgramm,
    alt: "Programme individuel de transformation du visage",
    title: "TRANSFORMATION \nDU VISAGE",
    subtitle: "10 séances",
    items: [
      "10 séances personnalisées (1h chacune)",
      "Analyse du tonus facial + plan de travail global",
      "Vidéos d’exercices entre chaque séance",
      "Suivi par tél / WhatsApp ou mail",
    ],
    price: "637 €",

    note: "(paiement possible en 2 × 319 € ou 3 × 213 €)",
  },
  {
    image: Mimique,
    alt: "Correction des mimiques faciales – séance personnalisée",
    title: "CORRECTION \nMIMIQUE",
    subtitle: "4 semaines",
    items: [
      "4 séances individuelles \n(1h chacune)",
      "Analyse du tonus local et global",
      "Plan d’exercices vidéo personnalisés",
      "Conseils à intégrer au quotidien",
    ],
    price: "243 €",
    note: "(par zone)",
  },
  {
    image: ParZone,
    alt: "Séance ciblée par zone – corriger une expression spécifique",
    title: "SÉANCE CIBLÉE \nPAR ZONE",
    subtitle: "1 heure",
    items: [
      "Un premier bilan ciblé personnalisé",
      "Corriger une expression nocive",
      "Adopter un exercice simple et efficace",
      "Repartir avec une routine à refaire chez soi",
    ],
    price: "63 €",
    note: "(+ Vers “Correction Mimique)",
  },
];
