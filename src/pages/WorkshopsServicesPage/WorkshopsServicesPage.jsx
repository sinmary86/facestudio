import { PageBanner } from "../../PageBanner/PageBanner";
import { WorkShopServicesCard } from "../../WorkShopServices/WorkShopServicesCard";
import backgroundImg from '../../assets/wom_ touch_face.jpg';


const WorkshopsServicesPage = () => {
     return (
        <div>

          <PageBanner
              background={backgroundImg}
              title="Ateliers & Formations"
              />
<WorkShopServicesCard/>
        </div> 
     )
}

export default WorkshopsServicesPage;