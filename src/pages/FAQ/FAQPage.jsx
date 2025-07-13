import { AccordionList } from "../../Accordion/AccordionList";
import { PageBanner } from "../../PageBanner/PageBanner";
import backgroundImg from '../../Assets/actualAntiAge.jpg';
import { FeedbackSlider } from "../../FeedbackSlider/FeedbackSlider";


const FAQPage = () => {
    return(
        <div>
             <PageBanner
                background={backgroundImg}
                title="FAQ & Avis"
                />
             <AccordionList />
             <FeedbackSlider />
        </div>
    )
}

export default FAQPage;