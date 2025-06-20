import { AboutContent } from "../../AboutContent/AboutContent";
import { AboutFeatures } from "../../AboutFeatures/AboutFeatures";
import { PageBanner } from "../../PageBanner/PageBanner";
import backgroundImg from '../../assets/two_wom_doc_pat.jpg';

const AboutPage = () => {
     return (
        <div>

            <PageBanner
                background={backgroundImg}
                title="Votre Coach en Face Fitness et Rajeunissement Naturel"
                />

            <AboutContent />
            <AboutFeatures />

        </div> 
     )
}

export default AboutPage;