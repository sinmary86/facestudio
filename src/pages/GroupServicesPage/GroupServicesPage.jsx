import { PageBanner } from "../../PageBanner/PageBanner";
import backgroundImg from "../../Assets/portrait-femme-souriante.jpg";
import { GroupServicesCard } from "../../GroupServices/GroupCard/GroupServicesCard";
import { GroupBenefits } from "../../GroupServices/GroupNumbers/GroupBenefits";
import { WhyGroup } from "../../GroupServices/GroupIcons/WhyGroup";
import { PageBannerWithButton } from "../../PageBannerWithButton/PageBannerWithButton";

const GroupServicesPage = () => {
  return (
    <div>
      <PageBanner
        background={backgroundImg}
        title="Libérez les tensions du visage et boostez votre énergie dans un cadre bienveillant et motivant"
      />
      <GroupServicesCard />
      <WhyGroup />
      <GroupBenefits />
      <PageBannerWithButton />
    </div>
  );
};

export default GroupServicesPage;
