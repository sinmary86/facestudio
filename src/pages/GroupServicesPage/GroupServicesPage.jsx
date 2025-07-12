
import { PageBanner } from "../../PageBanner/PageBanner";
import backgroundImg from '../../Assets/wom_ touch_face.jpg';
import { GroupServicesCard } from "../../GroupServices/GroupCard/GroupServicesCard";
import { GroupBenefits } from "../../GroupServices/GroupNumbers/GroupBenefits";
import { WhyGroup } from "../../GroupServices/GroupIcons/WhyGroup";

const GroupServicesPage = () => {
     return (
        <div>

          <PageBanner
                background={backgroundImg}
                title="Pour prendre soin de son visage en douceur ou s’engager dans une vraie transformation, ensemble"
                />
<GroupServicesCard/>
<WhyGroup/>
<GroupBenefits/>
        </div> 
     )
}

export default GroupServicesPage;