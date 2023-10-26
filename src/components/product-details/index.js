import React from "react";
import Header from "../header";
import Footer from "../footer";
import ProductDetailsPage from "./product-details-layout";

import "./style.scss";

const ProductDetailLayoutPage = () => {
  return (
    <>
      <Header />
      <ProductDetailsPage />
      <Footer />
    </>
  );
};

export default ProductDetailLayoutPage;
