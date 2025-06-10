import { useRoutes } from "react-router-dom";
import { routes } from "./routes";
import { Suspense } from "react";

export const AppRoutes = () => {
  return (
    <Suspense
      fallback={
        <div className="d-flex justify-content-center align-items-center vh-100">
          <div className="spinner-border text-primary" role="status" />
        </div>
      }
    >
      {useRoutes(routes)}
    </Suspense>
  );
};