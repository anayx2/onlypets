import { Footer } from "@/components/Footer";
import Ad from "@/components/Homepage/Ad";
import Ad2 from "@/components/Homepage/Ad2";
import BestSeller from "@/components/Homepage/BestSeller";
import Category from "@/components/Homepage/Category";
import FAQSection from "@/components/Homepage/FAQ";
import Hero from "@/components/Homepage/Hero";
import ProductPage from "@/components/Homepage/LookingFor";
import CouponCarousel from "@/components/Homepage/Offer";
import Testimonial from "@/components/Homepage/Testimonial";
import TipsbyExperts from "@/components/Homepage/Tipsbyexpet";
import Topfoodbrand from "@/components/Homepage/Topfoodbrand";
import Treats from "@/components/Homepage/Treats";
import Navbar1 from "@/components/Navbar";
import React from "react";


const page = () => {
  return (
    <>
      <Hero />
      <Category />
      <CouponCarousel />
      <Ad />
      <ProductPage />
      <Ad2 />
      <Treats />
      <Topfoodbrand />
      <BestSeller />
      <TipsbyExperts />
      <Testimonial />
      <FAQSection />
    </>
  );
};

export default page;
