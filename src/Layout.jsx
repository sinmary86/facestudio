import { Outlet } from "react-router-dom";
import { NavApp }  from "./NavApp/NavApp";
import { FooterApp } from "./Footer/FooterApp";
import { FloatingButton } from "./FloatingButton/FloatingButton";

const Layout = () => {
  return (
    <>
      <NavApp />
      <main>
        <Outlet />
      </main>
      <FooterApp />
      <FloatingButton />
    </>
  );
};

export default Layout;
