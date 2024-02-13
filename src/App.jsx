import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Homepage";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import PageNotFound from "./components/PageNotFound";
import Shop from "./pages/Shop";
import Privacy from "./pages/Privacy";
import StillWorking from "./components/StillWorking";
import ScrollToTop from "./components/Scroll";
import AboutUsFooter from "./pages/AboutUsFooter";

const AnimatedRouter = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="service" element={<Service />} />
        <Route path="shop" element={<Shop />} />
        <Route path="kontakt" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="privacy" element={<Privacy />} />

        <Route path="about" element={<AboutUsFooter />} />
        <Route path="for-business" element={<StillWorking />} />
        <Route path="building-partners" element={<StillWorking />} />
        <Route path="careers" element={<StillWorking />} />
        <Route path="recipedirectory" element={<StillWorking />} />
        <Route path="help-center" element={<StillWorking />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AnimatedRouter;
