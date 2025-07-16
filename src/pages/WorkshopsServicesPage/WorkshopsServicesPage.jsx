import { PageBanner } from "../../PageBanner/PageBanner";
import backgroundImg from "../../Assets/brunettemadchen-das-mit-exotisch.jpg";
import { WorkshopBenefits } from "../../WorkshopsComponents/WorkshopBenefits/WorkshopBenefits";
import { WorkshopContent } from "../../WorkshopsComponents/WorkshopContent/WorkshopContent";
import { WorkshopsTargetGroup } from "../../WorkshopsComponents/WorkshopsTargetGroup/WorkshopsTargetGroup";
import { PageBannerWithButton } from "../../PageBannerWithButton/PageBannerWithButton";

const WorkshopsServicesPage = () => {
  return (
    <div>
      <PageBanner background={backgroundImg} title="Ateliers & Formations" />
      <WorkshopContent />
      <WorkshopBenefits />
      <WorkshopsTargetGroup />
      <PageBannerWithButton />
    </div>
  );
};

export default WorkshopsServicesPage;
