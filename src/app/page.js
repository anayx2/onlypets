import React from "react";
import NavBar from "./components/Navbar";
import Hero from "./components/Homepage/Hero";
import Category from "./components/Homepage/Category";
import OfferCarousel from "./components/Homepage/Offer";
import Ad from "./components/Homepage/Ad";
import ProductPage from "./components/Homepage/LookingFor";
import Ad2 from "./components/Homepage/Ad2";
import Treats from "./components/Homepage/Treats";
import Topfoodbrand from "./components/Homepage/Topfoodbrand";
import BestSeller from "./components/Homepage/BestSeller";
import Tipsbyexpet from "./components/Homepage/Tipsbyexpet";
import Testimonial from "./components/Homepage/Testimonial";
import FAQSection from "./components/Homepage/FAQ";
import { Footer } from "./components/Footer";

const page = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Category />
      <OfferCarousel />
      <Ad />
      <ProductPage />
      <Ad2 />
      <Treats />
      <Topfoodbrand />
      <BestSeller />
      <Tipsbyexpet />
      <Testimonial />
      <FAQSection />
      <Footer />


    </>
  );
};

export default page;
