import { lazy } from "react";

export const LazyWorkshopsServicesPage = lazy(() =>
  import("./WorkshopsServicesPage")
);
