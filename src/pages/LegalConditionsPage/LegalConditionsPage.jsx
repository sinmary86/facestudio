import { LegalContentRenderer } from "../../LegalContent/LegalContent";
import { PageBanner } from "../../PageBanner/PageBanner";
import backgroundImg from "../../Assets/face-rolle-leaves.jpg";

const LegalConditionsPage = () => {
  return (
    <div>
      <PageBanner
        background={backgroundImg}
        title="Conditions Générales de Vente (CGV)"
      />

      <LegalContentRenderer type="cgv" />
    </div>
  );
};

export default LegalConditionsPage;
