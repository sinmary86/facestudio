import serviceGroup from '../../Assets/service-group.jpg';
import serviceAtelier from '../../Assets/service-atelier.jpg';
import individualMain from '../../Assets/individualMain.jpg';
import groupService from '../../Assets/groupServices.jpg';


export const mainServicesData = [
  {
    title: 'Accompagnement individuel', 
    alt:'Accompagnement individuel',
    image: individualMain,
    link: "/services/accompagnement-individuel"
  }, 

  {
    title: 'COURS EN GROUPE', 
    alt:'Cours en Groupe',
    image: groupService,
    link: "/services/cours-en-groupe"
  }, 

  {
    title: 'Offres pour les Entreprises', 
    alt:'Offres pour les Entreprises',
    image: serviceGroup,
    link: "/services/offres-entreprises"
  }, 

  {
    title: 'Ateliers et Formations', 
    alt:'Ateliers et Formations',
    image: serviceAtelier,
    link: "/services/ateliers-formations"
  }
]