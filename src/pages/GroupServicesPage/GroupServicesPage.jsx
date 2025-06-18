import { GroupServicesCard } from "../../GroupServices/GroupServicesCard";
import { PageBanner } from "../../PageBanner/PageBanner";
import backgroundImg from '../../assets/wom_ touch_face.jpg';

const GroupServicesPage = () => {
     return (
        <div>

          <PageBanner
                background={backgroundImg}
                title="Cours en Groupe"
                />
<GroupServicesCard/>
        </div> 
     )
}

export default GroupServicesPage;