import Layout from "./Layout";
import { LazyMainPage } from "./pages/MainPage/MainPage.lazy";
import { LazyAboutPage } from "./pages/AboutPage/AboutPage.lazy";
import { LazyFAQPage } from "./pages/FAQ/FAQPage.lazy";
import { LazyIndividualServicesPage } from "./pages/IndividualServicesPage/IndividualServicesPage.lazy";
import { LazyGroupServicesPage } from "./pages/GroupServicesPage/GroupServicesPage.lazy";
import { LazyBusinessesServicesPage } from "./pages/BusinessesServices/BusinessesServicesPage.lazy";
import { LazyWorkshopsServicesPage } from "./pages/WorkshopsServicesPage/WorkshopsServicesPage.lazy";
import { LazyContactsPage } from "./pages/ContactsPage/ContactsPage.lazy";
import { LazyLegalMentionsPage } from "./pages/LegalMentionsPage/LegalMentionsPage.lazy";
import { LazyLegalConditionsPage } from "./pages/LegalConditionsPage/LegalConditionsPage.lazy";
import { LazyLegalPolicyPage } from "./pages/LegalPolicyPage/LegalPolicyPage.lazy";
import { LazyErrorPage } from "./pages/ErrorPage/ErrorPage.lazy";


export const routes = [

     {
    path: "/",
    element: <Layout />, 
    children: [
      { index: true, element: <LazyMainPage /> },
      { path: "a-propos", element: <LazyAboutPage /> },
      { path: "services/accompagnement-individuel", element: <LazyIndividualServicesPage /> },
      { path: "services/cours-en-groupe", element: <LazyGroupServicesPage /> },
      { path: "services/offres-entreprises", element: <LazyBusinessesServicesPage /> },
      { path: "services/ateliers-formations", element: <LazyWorkshopsServicesPage /> },
      { path: "faq", element: <LazyFAQPage /> },
      { path: "contacts", element: <LazyContactsPage /> },
      { path: "mentions-legales", element: <LazyLegalMentionsPage /> },
      { path: "conditions-generales-de-vente", element: <LazyLegalConditionsPage /> },
      { path: "politique-de-confidentialite", element: <LazyLegalPolicyPage /> },
      { path: "*", element: <LazyErrorPage /> },
    ],
  },
];