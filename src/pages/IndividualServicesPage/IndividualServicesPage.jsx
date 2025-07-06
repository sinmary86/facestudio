import { IndividualServiceCard } from "../../IndividualServices/IndividualServiceCard";
import { PageBanner } from "../../PageBanner/PageBanner";
import backgroundImg from '../../Assets/wom_ touch_face.jpg';

const IndividualServicesPage = () => {
     return (
        <div>
            <PageBanner
                background={backgroundImg}
                title="Pour celles qui veulent transformer leur visage en profondeur, à leur rythme"
                />
                <IndividualServiceCard/>
        </div> 
     )
}

export default IndividualServicesPage;