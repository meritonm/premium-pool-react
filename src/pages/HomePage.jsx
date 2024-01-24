import AboutUs from "./AboutUs";
import FeaturedSection from "./FeaturesPool";
import SectionBackground from "./SectionBackground";
import Footer from "./Footer";
import PageNav from "../components/PageNav";

function HomePage() {
  return (
    <>
      <PageNav />
      <SectionBackground />
      <AboutUs />
      <FeaturedSection />
      <Footer />
    </>
  );
}

export default HomePage;
