
import serviceGroup from '../assets/service-group.jpg';
import serviceAtelier from '../Assets/service-atelier.jpg'
import individualMain from '../Assets/individualMain.jpg'

 // заменить картинки в разделе   'Accompagnement individuel',  и Offres pour les Entreprises
 // кнопка на разном уровне из за текста 
 // цвет заголовка оставляем ? 

export const serviceItems = [
    {
  title: 'Accompagnement individuel', 
  image: individualMain,
  link: "/services/accompagnement-individuel"
    }, 

    {
    title: 'Cours en Groupe', 
    image: serviceGroup,
     link: "/services/cours-en-groupe"
    }, 

    {
    title: 'Offres pour les Entreprises', 
    image: serviceAtelier,
     link: "/services/offres-entreprises"
    }, 

    {
    title: 'Ateliers et Formations', 
    image: serviceAtelier,
     link: "/services/ateliers-formations"
    }

]