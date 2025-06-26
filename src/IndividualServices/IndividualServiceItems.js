
import individualProgramm  from '../Assets/individualProgramm.jpg';
import Mimique from '../Assets/individualMimique.jpg';
import ParZone from '../Assets/individualParZone.jpg';



export const individualServiceItems = [
     {
  id : 1, 
    image: individualProgramm,
    title: "Programme VIP – Transformation du Visage",
    discription: "Un accompagnement sur-mesure pour rééquilibrer, lisser et revitaliser l’ensemble de votre visage.",
    text: "Idéal pour retrouver des traits détendus, harmonieux et dynamiques.",
    details: [
      "Analyse du tonus facial + plan de travail global",
      "Vidéos d’exercices entre chaque séance",
      "Suivi privé via WhatsApp ou e-mail"
    ],
       period: "10 séances personnalisées (1h chacune)",
    price: "600 €",
    priceDetails: "(paiement possible en 2x/3x)",
   
  },
  {
  id : 2, 
     image: Mimique,
     title: "Correction Mimique – Travail par zone",
     concerns: [
        "Front & ride du lion",
        "Regard et contour des yeux"
        ],
      discription: "Un protocole ciblé pour corriger les mimiques nocives et atténuer les rides d’expression.",
      text: "Chaque module comprend :",
      details: [
       "Analyse du tonus local et décryptage mimique",
       "Plan d’exercices personnalisés + routine vidéo",
       "Conseils à intégrer au quotidien",            
      ],
      period: "4 séances individuelles (1h chacune)",
      price: "240 €",
      priceDetails: "par zone",          
    },
    {
  id : 3, 
     image: ParZone,
     title: "Séance Ciblée par Zone",
     discription: "Une séance unique pour travailler une zone précise du visage et apprendre les bons gestes dès maintenant. ",
     text: "Idéal pour :",
     details: [
          "Un premier bilan ciblé",
          "Corriger une expression nocive",
          "Adopter un exercice simple et efficace",       
        ],
      period: "1 mois – 4 séances en visio.",
      price: "60 €",
      priceDetails: "Peut être transformée en programme “Correction Mimique” ensuite",             
      },
 
];
  