
import serviceGroup from '../assets/service-group.jpg';
import serviceAtelier from '../Assets/service-atelier.jpg';
import individualMain from '../Assets/individualMain.jpg';
import groupService from '../Assets/groupServices.jpg';

// цвет заголовка оставляем ? 

export const serviceItems = [
  {
    title: 'Accompagnement individuel', 
    alt:'Accompagnement individuel',
    image: individualMain,
    link: "/services/accompagnement-individuel"
  }, 

  {
    title: 'Programme des cours collectifs', 
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