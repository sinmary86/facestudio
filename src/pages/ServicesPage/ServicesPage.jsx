

import { PageBanner } from "../../PageBanner/PageBanner";
import { ServiceCard } from "../../Services/ServiceCard";

import backgroundImg from '../../assets/wom_ touch_face.jpg';

const ServicesPage = () => {
     return (
        <div>

          <PageBanner
               background={backgroundImg}
               title="Garder l'authenticité de votre visage grâce aux méthodes naturelles et non invasives"
               />
<ServiceCard/>
        </div> 
     )
}

export default ServicesPage;