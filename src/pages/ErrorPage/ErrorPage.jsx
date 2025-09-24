import { ErrorContent } from "../../ErrorContent/ErrorContent";
import { PageBanner } from "../../PageBanner/PageBanner";
import backgroundImg from '../../Assets/gua-sha-massage-face-tools.jpg';

const ErrorPage = () => {
     return (
        <div>
            <PageBanner
                background={backgroundImg}
                title="Il semble que quelque chose se soit mal passé!"
                />
            <ErrorContent />
        </div> 
     )
}


export default ErrorPage;
