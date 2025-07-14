
import { PageBanner } from "../../PageBanner/PageBanner";
import backgroundImg from '../../Assets/wom_ touch_face.jpg';
import { BusinessServicesCard } from "../../BusinessService/BusinessCard/BusinessServicesCard";
import { BusinessBenefits } from "../../BusinessService/BusinessResults/BusinessBenefits";
import { ProgramModules } from "../../BusinessService/BusinessModules/ProgramModules";
import { PageBannerWithButton } from "../../PageBannerWithButton/PageBannerWithButton";

const BusinessesServicesPage = () => {
     return (
        <div>
            <PageBanner
                background={backgroundImg}
                title="Des ateliers bien-être pour favoriser l’énergie, la présence et le mieux-être au travail"
                />
            <BusinessServicesCard/>
            <ProgramModules/>
            <BusinessBenefits/>
            <PageBannerWithButton />
        </div> 
     )
}

export default BusinessesServicesPage;