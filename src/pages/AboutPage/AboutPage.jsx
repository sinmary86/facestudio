import { AboutContent } from "../../AboutContent/AboutContent";
import { AboutFeatures } from "../../AboutFeatures/AboutFeatures";
import { FooterApp } from "../../Footer/FooterApp";
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
            <FooterApp />

        </div> 
     )
}

export default AboutPage;