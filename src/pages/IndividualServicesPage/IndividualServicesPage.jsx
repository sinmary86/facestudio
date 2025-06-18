import { IndividualServiceCard } from "../../IndividualServices/IndividualServiceCard";
import { PageBanner } from "../../PageBanner/PageBanner";
import backgroundImg from '../../assets/wom_ touch_face.jpg';

const IndividualServicesPage = () => {
     return (
        <div>
            <PageBanner
                background={backgroundImg}
                title="Accompagnement Individuel"
                />
                <IndividualServiceCard/>
        </div> 
     )
}

export default IndividualServicesPage;