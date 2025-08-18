import { ContactForm } from "../../ContactForm/ContactForm";
import { PageBanner } from "../../PageBanner/PageBanner";
import backgroundImg from "../../Assets/page-about.jpg";

const ContactsPage = () => {
  return (
    <div>
      <PageBanner
        background={backgroundImg}
        title="Apprenez les meilleures techniques de Rajeunissement du Visage avec un coach expert"
      />
      <ContactForm />
    </div>
  );
};

export default ContactsPage;
