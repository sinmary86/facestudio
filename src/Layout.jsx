import { Outlet } from "react-router-dom";
import { NavApp } from "./NavApp/NavApp";
import { FooterApp } from "./Footer/FooterApp";
import { FloatingButton } from "./FloatingButton/FloatingButton";
import { ScrollToTop } from "./ScrollToTop";

const Layout = () => {
  return (
    <>
      <NavApp />
      <main>
        <ScrollToTop />
        <Outlet />
      </main>
      <FooterApp />
      <FloatingButton />
    </>
  );
};

export default Layout;
