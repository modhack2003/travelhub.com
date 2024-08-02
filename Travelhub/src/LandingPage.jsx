import React from 'react';
import Header from "./components/Header";
import RecommendationSection from "./components/RecommendationSection";
import FAQWithImages from "./components/FAQWithImages";
import Footer from "./components/Footer";
import TravelPromo from "./components/TravelPromo";
import WhoWeAre from "./components/whoWeAre";
import TravelBookingCard from "./components/TravelBookingCard";
import Navbar from "./components/Navbar";


const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Header />
      <TravelBookingCard />
      <WhoWeAre />
      <RecommendationSection />
      <TravelPromo />
      <FAQWithImages />
      <Footer />
    </>
  );
}

export default LandingPage;
