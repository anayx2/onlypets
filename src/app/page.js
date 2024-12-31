import Ad from "@/components/Homepage/Ad";
import Ad2 from "@/components/Homepage/Ad2";
import BestSeller from "@/components/Homepage/BestSeller";
import FAQSection from "@/components/Homepage/FAQ";
import ProductPage from "@/components/Homepage/LookingFor";
import CouponCarousel from "@/components/Homepage/Offer";
import Testimonial from "@/components/Homepage/Testimonial";
import TipsbyExperts from "@/components/Homepage/Tipsbyexpet";
import Topfoodbrand from "@/components/Homepage/Topfoodbrand";
import Treats from "@/components/Homepage/Treats";
import React from "react";
import styles from "@/styles/hero.module.css";
import Sec2products from "@/components/Homepage/Sec2products";
import { Button } from "@/components/ui/button";
import CategoryHeroNew from "@/components/Homepage/CategoryNew";

const page = () => {
  return (
    <>
      <div className="bg-[#350303] pb-[50px] pt-2">
        {/* <Hero/> */}
        <div className="h-[80px] text-center border border-white w-full">
          .....video.....
        </div>
        {/* <CategoryHero /> */}
        <CategoryHeroNew />
      </div>
      <div className="">
        <div className="relative w-full ">
          <div
            className={styles.notch}
            style={{ display: "flex", textAlign: "center" }}
          >
            <span className="absolute top-[15%] left-[15%] text-[20px] text-[#350303] font-bold">
              UNMISSABLE OFFER
            </span>
          </div>
        </div>
        <div className="p-5 pt-5 ">
          <Sec2products />
          <span className="w-full flex justify-center mt-5">
            <Button className="bg-white mt-2 text-black hover:bg-white border-[1px] border-[#ef8427]">
              See all products
            </Button>
          </span>
        </div>
      </div>
      {/* <Category /> */}
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