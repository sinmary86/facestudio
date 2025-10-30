import { IndividualServiceCard } from "../../IndividualServices/IndividualCard/IndividualServiceCard";
import { PageBanner } from "../../PageBanner/PageBanner";
import backgroundImg from "../../Assets/massage-visage-gros-plan.jpg";
import { SkinSymptom } from "../../IndividualServices/IndividualIcons/SkinSymptom.jsx";
import { AvailableZones } from "../../IndividualServices/IndividualNumbers/AvailableZones.jsx";
import { PageBannerWithButton } from "../../PageBannerWithButton/PageBannerWithButton.jsx";

const IndividualServicesPage = () => {
  return (
    <div>
      <PageBanner
        background={backgroundImg}
        title="Reprenez le pouvoir sur votre visage: exercices ciblés, rythme respecté, résultats visibles"
      />
      <IndividualServiceCard />
      <SkinSymptom />
      <AvailableZones />
      <PageBannerWithButton />
    </div>
  );
};

export default IndividualServicesPage;
