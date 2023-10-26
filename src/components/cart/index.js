import React from "react";
import Footer from "../footer";
import Header from "../header";
import "./style.scss";
import CartListLayout from "./cart-list";
const CartPage = () => {
  return (
    <>
      <Header />
      <CartListLayout />
      <Footer />
    </>
  );
};

export default CartPage;
