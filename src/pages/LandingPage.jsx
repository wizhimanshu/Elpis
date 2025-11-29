import PublicNavbar from "../components/Navbar/PublicNavbar";
import Hero from "../components/Hero/Hero";
import WhatWeOffer from "../components/Sections/WhatWeOffer";
import Packages from "../components/Sections/Packages";
import DigitalBoost from "../components/Sections/DigitalBoost";
import Testimonials from "../components/Sections/Testimonials";
import Footer from "../components/Footer/Footer";

export default function LandingPage() {
  return (
    <>
      <PublicNavbar />
      <Hero />
      {/* <WhatWeOffer /> */}
      <Packages />
      <DigitalBoost />
      <Testimonials />
      <Footer />
    </>
  );
}
