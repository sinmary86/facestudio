import { ErrorContent } from "../../ErrorContent/ErrorContent";
import { PageBanner } from "../../PageBanner/PageBanner";
import backgroundImg from "../../Assets/policyCover.jpg";

const ErrorPage = () => {
  return (
    <div>
      <PageBanner
        background={backgroundImg}
        title="Il semble que quelque chose se soit mal passé !"
        size="small"
      />
      <ErrorContent />
    </div>
  );
};

export default ErrorPage;
