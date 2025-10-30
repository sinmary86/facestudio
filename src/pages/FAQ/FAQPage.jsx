import { AccordionList } from "../../Accordion/AccordionList";
import { PageBanner } from "../../PageBanner/PageBanner";
import backgroundImg from "../../Assets/femme-visage-soleil.jpg";
import { FeedbackSlider } from "../../FeedbackSlider/FeedbackSlider";
import { PageBannerWithButton } from "../../PageBannerWithButton/PageBannerWithButton";

const FAQPage = () => {
  return (
    <div>
      <PageBanner background={backgroundImg} title="FAQ & Avis" />
      <AccordionList />
      <FeedbackSlider />
      <PageBannerWithButton />
    </div>
  );
};

export default FAQPage;
