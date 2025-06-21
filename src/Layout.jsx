import { Outlet } from "react-router-dom";
import { NavApp }  from "./NavApp/NavApp";
import { FooterApp } from "./Footer/FooterApp";

const Layout = () => {
  return (
    <>
      <NavApp />
      <main>
        <Outlet />
      </main>
      <FooterApp />
    </>
  );
};

export default Layout;
