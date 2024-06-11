import "./App.css";
import Contact from "./components/Contact/Contact";
import ExpertiseLists from "./components/ExpertiseLists/ExpertiseLists";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import PeaceMessage from "./components/PeaceMessage/PeaceMessage";
import PropertyInquiriesLists from "./components/PropertyInquiriesLists/PropertyInquiriesLists";
import RealEstateAdvantage from "./components/RealEstateAdvantage/RealEstateAdvantage";
import RealEstateConversionInfo from "./components/RealEstateConversionInfo/RealEstateConversionInfo";
import RealEstateDigitalMastery from "./components/RealEstateDigitalMastery/RealEstateDigitalMastery";
import ServicesOffers from "./components/ServicesOffers/ServicesOffers";
import Testimonial from "./components/Testimonial/Testimonial";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <RealEstateDigitalMastery />
      <ServicesOffers />
      <RealEstateAdvantage  />
      <RealEstateConversionInfo />
      <PropertyInquiriesLists />
      <ExpertiseLists />
      <PeaceMessage />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
