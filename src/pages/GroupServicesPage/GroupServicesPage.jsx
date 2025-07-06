import { GroupServicesCard } from "../../GroupServices/GroupServicesCard";
import { PageBanner } from "../../PageBanner/PageBanner";
import backgroundImg from '../../Assets/wom_ touch_face.jpg';

const GroupServicesPage = () => {
     return (
        <div>

          <PageBanner
                background={backgroundImg}
                title="Pour prendre soin de son visage en douceur ou s’engager dans une vraie transformation, ensemble"
                />
<GroupServicesCard/>
        </div> 
     )
}

export default GroupServicesPage;