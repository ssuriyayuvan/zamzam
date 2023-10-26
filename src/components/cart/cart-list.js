import React from "react";

import { MdArrowForwardIos } from "react-icons/md";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import ProductImg from "../../images/productlistImg.png";
import { FaMinus, FaPlus } from "react-icons/fa";
import { BsArrowRight, BsTagFill } from "react-icons/bs";

const CartProductItem = () => {
  return (
    <li className="cart-product-item">
      <article>
        <figure>
          <img src={ProductImg} className="img-fluid" alt={"ProductImg"} />
        </figure>
        <div className="content-box">
          <div className="prod-detail">
            <h5 className="prod-info">
              Milk Cake Sweet
              <span className="quantity">
                Quantity: <i>1 Kg</i>
              </span>
            </h5>
            <h4 className="prod-price"> ₹145</h4>
          </div>
          <div className="prod-action">
            <RiDeleteBin6Fill className="delete-icon" />
            <div className="add-minus-btngrp">
              <FaMinus className="minus-icon" />
              <span className="count">1</span>
              <FaPlus className="plus-icon" />
            </div>
          </div>
        </div>
      </article>
    </li>
  );
};
const CartListLayout = () => {
  return (
    <>
      <main>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <ul class="breadcrumb">
                <li>
                  <Link to="/">
                    Home <MdArrowForwardIos />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    Cart <MdArrowForwardIos />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <section className="cart-section">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <h4 className="sec-title">Your Cart</h4>
              </div>
              <div className="col-12">
                <main className="cart-info-block">
                  <div className="cart-product-list-box">
                    <ul className="cart-product-list">
                      <CartProductItem />
                      <CartProductItem />
                      <CartProductItem />
                      <CartProductItem />
                    </ul>
                  </div>
                  <div className="cart-product-summary">
                    <h4 className="title">Order Summary</h4>
                    <ul className="cart-summary-list">
                      <li>
                        <span className="key">Subtotal</span>
                        <span className="value">₹565</span>
                      </li>
                      <li>
                        <span className="key">Discount (-20%)</span>
                        <span className="value discount-price">-₹113</span>
                      </li>
                      <li>
                        <span className="key">Delivery Fee</span>
                        <span className="value">₹15</span>
                      </li>
                      <li>
                        <hr />
                      </li>
                      <li className="total-box">
                        <span className="key">Total</span>
                        <span className="value">₹467</span>
                      </li>
                    </ul>
                    <div className="promocode-block">
                      <div className="input-box">
                        <BsTagFill />
                        <input type="text" placeholder="Add promo code" />
                      </div>
                      <button className="theme-btn">Apply</button>
                    </div>

                    <button className="theme-btn">
                      Go to Checkout <BsArrowRight />
                    </button>
                  </div>
                </main>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default CartListLayout;
