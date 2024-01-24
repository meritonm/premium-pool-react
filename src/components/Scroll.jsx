import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { n } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [n]);

  return null;
}

export default ScrollToTop;
