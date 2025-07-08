


import { PageBanner } from "../../PageBanner/PageBanner";
import backgroundImg from '../../Assets/wom_ touch_face.jpg';
import { BusinessServicesCard } from "../../BusinessService/BusinessCard/BusinessServicesCard";
import { BusinessIcons } from "../../BusinessService/BusinessIcons/BusinessIcons";
import { BusinessBenefits } from "../../BusinessService/BusinessNumbers/BusinessBenefits";

const BusinessesServicesPage = () => {
     return (
        <div>
            <PageBanner
                background={backgroundImg}
                title="Des ateliers bien-être pour favoriser l’énergie, la présence et le mieux-être au travail"
                />

<BusinessServicesCard/>
<BusinessIcons/>
<BusinessBenefits/>
        </div> 
     )
}

export default BusinessesServicesPage;