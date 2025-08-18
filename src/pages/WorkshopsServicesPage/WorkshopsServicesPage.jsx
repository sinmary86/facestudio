import { PageBanner } from "../../PageBanner/PageBanner";
import backgroundImg from "../../Assets/brunettemadchen-das-mit-exotisch.jpg";
import { WorkshopBenefits } from "../../WorkshopsComponents/WorkshopBenefits/WorkshopBenefits";
import { WorkshopsTargetGroup } from "../../WorkshopsComponents/WorkshopsTargetGroup/WorkshopsTargetGroup";
import { PageBannerWithButton } from "../../PageBannerWithButton/PageBannerWithButton";
import { WorkshopServiceCard } from "../../WorkshopsComponents/WorkshopCard/WorkshopServiceCard";

const WorkshopsServicesPage = () => {
  return (
    <div>
      <PageBanner background={backgroundImg} title="Ateliers dynamiques en groupe, où nous analysons pourquoi le visage paraît fatigué..." />
<WorkshopServiceCard/>
      <WorkshopBenefits />
      <WorkshopsTargetGroup />
      <PageBannerWithButton />
    </div>
  );
};

export default WorkshopsServicesPage;
