import { MainCard } from "../../MainCard/MainCard";
import { MainContent } from "../../MainContent/MainContent";
import { PageBanner } from "../../PageBanner/PageBanner";
import { ServiceCard } from "../../Services/ServiceCard";
import backgroundImg from '../../assets/wom_ touch_face.jpg';


const MainPage = () => {
    return(
        <div>
            <PageBanner
                background={backgroundImg}
                title="Apprenez les meilleures techniques de Rajeunissement du Visage avec un coach expert"
                />
            <MainContent/>
            <MainCard/>
            <ServiceCard/>
        </div>
    )
}

export default MainPage;