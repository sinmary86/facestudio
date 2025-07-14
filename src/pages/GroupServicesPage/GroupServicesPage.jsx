
import { PageBanner } from "../../PageBanner/PageBanner";
import backgroundImg from '../../Assets/lachende-fotografie-portrat-lach.jpg';
import { GroupServicesCard } from "../../GroupServices/GroupCard/GroupServicesCard";
import { GroupBenefits } from "../../GroupServices/GroupNumbers/GroupBenefits";
import { WhyGroup } from "../../GroupServices/GroupIcons/WhyGroup";
import { PageBannerWithButton } from "../../PageBannerWithButton/PageBannerWithButton";

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
           <PageBannerWithButton />
        </div> 
     )
}

export default GroupServicesPage;


