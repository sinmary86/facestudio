import { AboutContent } from "../../AboutComponents/AboutContent/AboutContent";
import { AboutFeatures } from "../../AboutComponents/AboutFeatures/AboutFeatures";
import { PageBanner } from "../../PageBanner/PageBanner";
import backgroundImg from '../../Assets/woman-with-leaves.jpg';
import { PageBannerWithButton } from "../../PageBannerWithButton/PageBannerWithButton";

const AboutPage = () => {
     return (
        <div>
            <PageBanner
                background={backgroundImg}
                title="Votre Coach en Face Fitness et Rajeunissement Naturel"
                />
            <AboutContent />
            <AboutFeatures />  
            <PageBannerWithButton />
        </div> 
     )
}

export default AboutPage;