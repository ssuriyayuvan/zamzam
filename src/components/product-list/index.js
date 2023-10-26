import React from "react";
import Footer from "../footer";
import Header from "../header";
import ProductListLayout from "./product-list-layout";

import "./style.scss";
const ProductListPage = () => {
  return (
    <>
      <Header />
      <ProductListLayout />
      <Footer />
    </>
  );
};

export default ProductListPage;
