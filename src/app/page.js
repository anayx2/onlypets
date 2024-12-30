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

import styles from "@/styles/hero.module.css";
import Sec2products from "@/components/Homepage/Sec2products";
import { Button } from "@/components/ui/button";
import CategoryHero from "@/components/Homepage/CategoryHero";
import Image from "next/image";

const page = () => {
  return (
    <>
      <div className="bg-[#350303] pb-[50px]">
        {/* <Hero/> */}
        <div className="h-[80px] text-center border border-white w-full">
          .....video.....
        </div>
        <CategoryHero />
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
      <section className="p-5 flex items-end justify-between">
        <div className="flex text-[40px] font-bold text-[#FF7700] opacity-70 ">
          Pet parents favorite<br />Pet Store
        </div>
        <div className="pb-3">
          <Image
            src={'/petbag.svg'}
            width={90}
            height={90}
            alt="bag"
          />
        </div>
      </section>
    </>
  );
};

export default page;