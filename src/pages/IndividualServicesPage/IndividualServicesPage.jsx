import { IndividualServiceCard } from "../../IndividualServices/IndividualCard/IndividualServiceCard";
import { PageBanner } from "../../PageBanner/PageBanner";
import backgroundImg from '../../Assets/wom_ touch_face.jpg';
import { IndividualBenefits } from "../../IndividualServices/IndividualNumbers/IndividualBenefits";
import { IndividualIcons } from "../../IndividualServices/IndividualIcons/IndividualIcons.jsx";

const IndividualServicesPage = () => {
     return (
        <div>
            <PageBanner
                background={backgroundImg}
                title="Pour celles qui veulent transformer leur visage en profondeur, à leur rythme"
                />
           <IndividualServiceCard/>
           <IndividualIcons/>
           <IndividualBenefits/>
        </div> 
     )
}

export default IndividualServicesPage;