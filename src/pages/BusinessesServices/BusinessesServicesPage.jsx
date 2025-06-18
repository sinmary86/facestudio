

import { BusinessServicesCard } from "../../BusinessService/BusinessServicesCard";
import { PageBanner } from "../../PageBanner/PageBanner";
import backgroundImg from '../../assets/wom_ touch_face.jpg';

const BusinessesServicesPage = () => {
     return (
        <div>
            <PageBanner
                background={backgroundImg}
                title="Offres pour les Entreprises"
                />
<BusinessServicesCard/>
        </div> 
     )
}

export default BusinessesServicesPage;