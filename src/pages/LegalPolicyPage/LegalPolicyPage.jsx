import { LegalContentRenderer } from "../../LegalContent/LegalContent";
import { PageBanner } from "../../PageBanner/PageBanner";
import backgroundImg from '../../Assets/policyCover.jpg';

const LegalPolicyPage = () => {
     return (
        <div>

          <PageBanner
               background={backgroundImg}
               title="Politique de confidentialité"
               />
          
          <LegalContentRenderer type="privacy" />

        </div> 
     )
}

export default LegalPolicyPage;