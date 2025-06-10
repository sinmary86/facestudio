import { BrowserRouter } from "react-router-dom";
import { routes } from "./routes";
import { useRoutes } from "react-router-dom";
import { Suspense } from "react";

const AppRoutes = () => {
  return <Suspense fallback={<div>Chargement...</div>}>{useRoutes(routes)}</Suspense>;
};

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
