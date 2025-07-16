import { lazy } from "react";

export const LazyBusinessesServicesPage = lazy(() =>
  import("./BusinessesServicesPage")
);
