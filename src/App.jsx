import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/Scroll";
import SpinnerFullPage from "./components/SpinnerFullPage";

const HomePage = lazy(() => import("./pages/HomePage"));
const Service = lazy(() => import("./pages/Service"));
const Shop = lazy(() => import("./pages/Shop"));
const Contact = lazy(() => import("./pages/Contact"));
const PageNotFound = lazy(() => import("./components/PageNotFound"));
const StillWorking = lazy(() => import("./components/StillWorking"));

const AboutUsFooter = lazy(() => import("./pages/AboutUsFooter"));
const Impresum = lazy(() => import("./pages/Impresum"));
const Privacy = lazy(() => import("./pages/Privacy"));
const AGB = lazy(() => import("./pages/AGB"));

const AnimatedRouter = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<SpinnerFullPage />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="service" element={<Service />} />
          <Route path="shop" element={<Shop />} />
          <Route path="kontakt" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />

          <Route path="uber" element={<AboutUsFooter />} />
          <Route path="impresum" element={<Impresum />} />
          <Route path="agb" element={<AGB />} />
          <Route path="datenschutz" element={<Privacy />} />
          <Route path="careers" element={<StillWorking />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AnimatedRouter;
