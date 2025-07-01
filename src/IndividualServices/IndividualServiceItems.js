
import individualProgramm  from '../Assets/individualProgramm.jpg';
import Mimique from '../Assets/individualMimique.jpg';
import ParZone from '../Assets/individualParZone.jpg';



export const individualServiceItems = [
     {
  id : 1, 
    image: individualProgramm,
    title: "Programme VIP – Transformation du Visage",
    description: "Un accompagnement sur-mesure pour rééquilibrer, lisser et revitaliser l’ensemble de votre visage.",
    text: "CONTENU DU PROGRAMME",
    details: [
      "Analyse du tonus facial et plan global",
      "Vidéos d’exercices entre chaque séance",
      "Suivi privé via WhatsApp ou e-mail"
    ],
       period:[
         "Durée programme: 10 semaines ",
         "Séances personnalisées: 1h ",
         ],
       
    connect:  "Suivi privé : WhatsApp/Telegram ou e-mail",
    price: "600 ",
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
    description: "Un protocole parfaitement ciblé pour corriger les mimiques nocives et atténuer les rides d’expression.",
    text: "CONTENU DU PROGRAMME",
    details: [
       "Bilan tonus local et décryptage mimique",
       "Plan personnalisés et routine vidéo",
       "Conseils à intégrer au quotidien",            
      ],
      period:[
         "Durée programme: 4 semaines ",
         "Séances personnalisées: 1h ",
        ],
    connect:  "Suivi privé : WhatsApp/Telegram ou e-mail",
    price: "240 ",
    priceDetails: "par zone",          
    },
    {
  id : 3, 
    image: ParZone,
    title: "Entraînement ciblé selon chaque zone",
    description: "Une séance unique pour travailler une zone précise du visage et apprendre les bons gestes. ",
    text: "CONTENU DU PROGRAMME",
    details: [
          "Un premier bilan ciblé",
          "Corriger une expression nocive",
          "Adopter un exercice simple et efficace",       
        ],

    period:[
         "Durée programme: 1 mois ",
         "Séances personnalisées: 4 séances visio ",
      
       ],
    connect:  "Suivi privé : WhatsApp/Telegram ou e-mail",
    price: "60 ",
    priceDetails: "Peut être transformée en programme “Correction Mimique” ensuite",             
      }
 
];
  