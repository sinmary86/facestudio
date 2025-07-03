import { GroupServicesCard } from "../../GroupServices/GroupServicesCard";
import { PageBanner } from "../../PageBanner/PageBanner";
import backgroundImg from '../../Assets/wom_ touch_face.jpg';

const GroupServicesPage = () => {
     return (
        <div>

          <PageBanner
                background={backgroundImg}
                title="COURS EN GROUPE – Clubs en ligne"
                />
<GroupServicesCard/>
        </div> 
     )
}

export default GroupServicesPage;