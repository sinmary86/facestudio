import { AvantagesMain } from "../../MainComponents/AvantagesMain/AvantagesMain";
import { PageBanner } from "../../PageBanner/PageBanner";
import { MainServicesCards } from "../../MainComponents/ServicesCardsMain/MainServicesCards";
import backgroundImg from '../../Assets/wom_ touch_face.jpg';
import { MainAboutContent } from "../../MainComponents/MainAboutContent/MainAboutContent";
import { BenefitsMethodMain } from "../../MainComponents/BenefitsMethodMain/BenefitsMethodMain";


const MainPage = () => {
    return(
        <div>
            <PageBanner
                background={backgroundImg}
                title="Apprenez les meilleures techniques de Rajeunissement du Visage avec un coach expert"
                />

            <MainAboutContent />
            <AvantagesMain />
            <MainServicesCards />
            <BenefitsMethodMain />
        </div>
    )
}

export default MainPage;