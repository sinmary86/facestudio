import { PageBanner } from "../../PageBanner/PageBanner";
import backgroundImg from '../../Assets/wom_ touch_face.jpg';
import { WorkshopBenefits } from "../../WorkshopsComponents/WorkshopBenefits/WorkshopBenefits";
import { WorkshopContent } from "../../WorkshopsComponents/WorkshopContent/WorkshopContent";
import { WorkshopsTargetGroup } from "../../WorkshopsComponents/WorkshopsTargetGroup/WorkshopsTargetGroup";


const WorkshopsServicesPage = () => {
     return (
        <div>

          <PageBanner
              background={backgroundImg}
              title="Ateliers & Formations"
              />
              <WorkshopContent />
              <WorkshopBenefits />
              <WorkshopsTargetGroup />
        </div> 
     )
}

export default WorkshopsServicesPage;