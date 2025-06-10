import { Outlet } from "react-router-dom";
import { NavApp }  from "./NavApp/NavApp";

const Layout = () => {
  return (
    <>
      <NavApp />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
