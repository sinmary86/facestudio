import { LegalContentRenderer } from "../../LegalContent/LegalContent";
import { PageBanner } from "../../PageBanner/PageBanner";
import backgroundImg from '../../Assets/mentionsCover.jpg';

const LegalMentionsPage = () => {
     return (
        <div>

          <PageBanner
               background={backgroundImg}
               title="Mentions légales"
               />

          <LegalContentRenderer type="mentions" />

        </div> 
     )
}

export default LegalMentionsPage;
