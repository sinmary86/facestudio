import { AccordionList } from "../../Accordion/AccordionList";
import { PageBanner } from "../../PageBanner/PageBanner";
import backgroundImg from '../../Assets/actualAntiAge.jpg';


const FAQPage = () => {
    return(
        <div>
             <PageBanner
                background={backgroundImg}
                title="FAQ – Tout savoir sur le Face Fitness & le Rajeunissement Naturel"
                />
             <AccordionList />
        </div>
    )
}

export default FAQPage;