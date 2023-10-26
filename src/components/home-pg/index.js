import React from "react";
import Footer from "../footer";
import Header from "../header";
import HeroBanner from "./hero-baner";
import OfferSlides from "./offer-slide";
import OurExpertise from "./our-expertise";
import BestSellerList from "./bestseller";
import AllProducts from "./all-products";
import AboutUsHome from "./aboutus";
import "./style.scss";
const HomePage = () => {
  return (
    <>
      <Header />
      <HeroBanner />
      <OfferSlides />
      <OurExpertise />
      <BestSellerList />
      <AllProducts />
      <AboutUsHome />
      <Footer />
    </>
  );
};

export default HomePage;
