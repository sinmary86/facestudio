import { IndividualServiceCard } from "../../IndividualServices/IndividualCard/IndividualServiceCard";
import { PageBanner } from "../../PageBanner/PageBanner";
import backgroundImg from '../../Assets/wom_ touch_face.jpg';
import { SkinSymptom } from "../../IndividualServices/IndividualIcons/SkinSymptom.jsx";
import { AvailableZones } from "../../IndividualServices/IndividualNumbers/AvailableZones.jsx";

const IndividualServicesPage = () => {
     return (
        <div>
            <PageBanner
                background={backgroundImg}
                title="Pour celles qui veulent transformer leur visage en profondeur, à leur rythme"
                />
           <IndividualServiceCard/>
           <SkinSymptom/>
         <AvailableZones/>
   
        </div> 
     )
}

export default IndividualServicesPage;