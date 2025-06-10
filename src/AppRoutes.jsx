import { useRoutes } from "react-router-dom";
import { routes } from "./routes";
import { Suspense } from "react";
import { Loader } from "./Loader";

export const AppRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      {useRoutes(routes)}
    </Suspense>
  );
};