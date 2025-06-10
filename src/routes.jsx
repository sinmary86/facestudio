import { LazyMainPage } from "./pages/MainPage/MainPage.lazy";
import { LazyAboutPage } from "./pages/AboutPage/AboutPage.lazy";
import { LazyFAQPage } from "./pages/FAQ/FAQPage.lazy";
import { LazyServicesPage } from "./pages/ServicesPage/ServicesPage.lazy";
import { LazyIndividualServicesPage } from "./pages/IndividualServicesPage/IndividualServicesPage.lazy";
import { LazyGroupServicesPage } from "./pages/GroupServicesPage/GroupServicesPage.lazy";
import { LazyBusinessesServicesPage } from "./pages/BusinessesServices/BusinessesServicesPage.lazy";
import { LazyWorkshopsServicesPage } from "./pages/WorkshopsServicesPage/WorkshopsServicesPage.lazy";
import Layout from "./Layout";
import { LazyContactsPage } from "./pages/ContactsPage/ContactsPage.lazy";

// Copie de Services - как у клиента в образце  здесь нет!!!

export const routes = [

     {
    path: "/",
    element: <Layout />, 
    children: [
      { index: true, element: <LazyMainPage /> },
      { path: "a-propos", element: <LazyAboutPage /> },
      { path: "services", element: <LazyServicesPage /> },
      { path: "services/accompagnement-individuel", element: <LazyIndividualServicesPage /> },
      { path: "services/cours-en-groupe", element: <LazyGroupServicesPage /> },
      { path: "services/offres-entreprises", element: <LazyBusinessesServicesPage /> },
      { path: "services/ateliers-formations", element: <LazyWorkshopsServicesPage /> },
      { path: "faq", element: <LazyFAQPage /> },
      { path: "contacts", element: <LazyContactsPage /> },
    ],
  },
];