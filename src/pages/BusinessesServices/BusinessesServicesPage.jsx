

import { BusinessServicesCard } from "../../BusinessService/BusinessServicesCard";
import { PageBanner } from "../../PageBanner/PageBanner";
import backgroundImg from '../../Assets/wom_ touch_face.jpg';

const BusinessesServicesPage = () => {
     return (
        <div>
            <PageBanner
                background={backgroundImg}
                title="INTERVENTIONS EN ENTREPRISE – Visage détendu, posture assurée"
                />
<BusinessServicesCard/>
        </div> 
     )
}

export default BusinessesServicesPage;