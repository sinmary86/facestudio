import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ block: "start", inline: "nearest" });
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" }); 
  }, [pathname, hash]);

  return null;
}
