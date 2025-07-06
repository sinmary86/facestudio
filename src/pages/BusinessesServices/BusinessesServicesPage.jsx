

import { BusinessServicesCard } from "../../BusinessService/BusinessServicesCard";
import { PageBanner } from "../../PageBanner/PageBanner";
import backgroundImg from '../../Assets/wom_ touch_face.jpg';

const BusinessesServicesPage = () => {
     return (
        <div>
            <PageBanner
                background={backgroundImg}
                title="Des ateliers bien-être pour favoriser l’énergie, la présence et le mieux-être au travail"
                />
{/* <BusinessServicesCard/> */}
<BusinessServicesCard/>
        </div> 
     )
}

export default BusinessesServicesPage;