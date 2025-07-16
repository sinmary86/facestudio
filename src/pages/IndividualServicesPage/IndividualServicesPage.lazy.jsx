import { lazy } from "react";

export const LazyIndividualServicesPage = lazy(() =>
  import("./IndividualServicesPage")
);
