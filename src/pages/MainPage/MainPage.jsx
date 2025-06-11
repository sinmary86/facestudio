import { ActualCard } from "../../Actual/ActualCard";
import { PageBanner } from "../../PageBanner/PageBanner";
import backgroundImg from '../../assets/wom_ touch_face.jpg';


const MainPage = () => {
    return(
        <div>
            <PageBanner
                background={backgroundImg}
                title="Apprenez les meilleures techniques de Rajeunissement du Visage avec un coach expert"
                />
             <ActualCard />
        </div>
    )
}

export default MainPage;