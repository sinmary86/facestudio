import { PageBanner } from "../../PageBanner/PageBanner";
import backgroundImg from "../../Assets/atelier-visage-dynamique.jpg";
import { WorkshopsTargetGroup } from "../../WorkshopsComponents/WorkshopsTargetGroup/WorkshopsTargetGroup";
import { PageBannerWithButton } from "../../PageBannerWithButton/PageBannerWithButton";
import { WorkshopServiceCard } from "../../WorkshopsComponents/WorkshopCard/WorkshopServiceCard";
import { AtelierModules } from "../../WorkshopsComponents/WorkshopBenefits/AtelierModules";

const WorkshopsServicesPage = () => {
  return (
    <div>
      <PageBanner background={backgroundImg} title="Ateliers dynamiques en groupe, où nous analysons pourquoi le visage paraît fatigué..." />
<WorkshopServiceCard/>
   <AtelierModules/>
      <WorkshopsTargetGroup />
      <PageBannerWithButton />
    </div>
  );
};

export default WorkshopsServicesPage;
