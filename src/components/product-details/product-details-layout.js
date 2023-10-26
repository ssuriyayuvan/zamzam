import React from "react";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { MdArrowForwardIos } from "react-icons/md";
import {
  FaFacebookF,
  FaPinterest,
  FaRegHeart,
  FaShoppingCart,
  FaTwitter,
} from "react-icons/fa";
import ProductImg from "../../images/productlistImg.png";
import "./style.scss";
const ProductDetailsPage = () => {
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
                  <Link to="/product-list">
                    Sweets <MdArrowForwardIos />
                  </Link>
                </li>
                <li>
                  <Link to="/product-list">
                    Milk Sweets <MdArrowForwardIos />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <section className="prod-detail-layout-section">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <h4 className="product-title">Milk Cake Sweet</h4>
                <section className="product-detail-block">
                  <article className="prod-img-gallery">
                    <figure>
                      <img
                        src={ProductImg}
                        alt={ProductImg}
                        className="img-fluid preview-img"
                      />
                    </figure>
                    <ul className="prod-img-list">
                      <li>
                        <img
                          src={ProductImg}
                          alt={"ProductImg"}
                          className="img-fluid"
                        />
                      </li>
                      <li>
                        <img
                          src={ProductImg}
                          alt={"ProductImg"}
                          className="img-fluid"
                        />
                      </li>
                      <li>
                        <img
                          src={ProductImg}
                          alt={"ProductImg"}
                          className="img-fluid"
                        />
                      </li>
                      <li>
                        <img
                          src={ProductImg}
                          alt={"ProductImg"}
                          className="img-fluid"
                        />
                      </li>
                      <li>
                        <img
                          src={ProductImg}
                          alt={"ProductImg"}
                          className="img-fluid"
                        />
                      </li>
                      <li>
                        <img
                          src={ProductImg}
                          alt={"ProductImg"}
                          className="img-fluid"
                        />
                      </li>
                      <li>
                        <img
                          src={ProductImg}
                          alt={"ProductImg"}
                          className="img-fluid"
                        />
                      </li>
                    </ul>
                  </article>
                  <article className="prod-information">
                    <div className="price-block">
                      <h6 className="price-box">
                        <span className="current-price">₹145</span>
                        <del className="original-price">₹200</del>{" "}
                        <span className="offer-pill">30%</span>
                      </h6>
                      <div className="rating-box">
                        <div className="starbox">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="19"
                            viewBox="0 0 20 19"
                            fill="none"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M8.66258 1.7364C9.18745 0.525998 10.904 0.525996 11.4288 1.7364L13.0166 5.39787L16.9895 5.77645C18.3029 5.9016 18.8333 7.53411 17.8443 8.40732L14.8527 11.0488L15.7203 14.9443C16.0072 16.232 14.6185 17.241 13.4824 16.5702L10.0457 14.5413L6.60904 16.5702C5.47296 17.241 4.08426 16.232 4.37109 14.9443L5.23874 11.0488L2.24711 8.40732C1.25814 7.53411 1.78858 5.9016 3.10193 5.77645L7.07484 5.39787L8.66258 1.7364Z"
                              fill="#F89828"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="19"
                            viewBox="0 0 20 19"
                            fill="none"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M8.66258 1.7364C9.18745 0.525998 10.904 0.525996 11.4288 1.7364L13.0166 5.39787L16.9895 5.77645C18.3029 5.9016 18.8333 7.53411 17.8443 8.40732L14.8527 11.0488L15.7203 14.9443C16.0072 16.232 14.6185 17.241 13.4824 16.5702L10.0457 14.5413L6.60904 16.5702C5.47296 17.241 4.08426 16.232 4.37109 14.9443L5.23874 11.0488L2.24711 8.40732C1.25814 7.53411 1.78858 5.9016 3.10193 5.77645L7.07484 5.39787L8.66258 1.7364Z"
                              fill="#F89828"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="19"
                            viewBox="0 0 20 19"
                            fill="none"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M8.66258 1.7364C9.18745 0.525998 10.904 0.525996 11.4288 1.7364L13.0166 5.39787L16.9895 5.77645C18.3029 5.9016 18.8333 7.53411 17.8443 8.40732L14.8527 11.0488L15.7203 14.9443C16.0072 16.232 14.6185 17.241 13.4824 16.5702L10.0457 14.5413L6.60904 16.5702C5.47296 17.241 4.08426 16.232 4.37109 14.9443L5.23874 11.0488L2.24711 8.40732C1.25814 7.53411 1.78858 5.9016 3.10193 5.77645L7.07484 5.39787L8.66258 1.7364Z"
                              fill="#F89828"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="19"
                            viewBox="0 0 20 19"
                            fill="none"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M8.66258 1.7364C9.18745 0.525998 10.904 0.525996 11.4288 1.7364L13.0166 5.39787L16.9895 5.77645C18.3029 5.9016 18.8333 7.53411 17.8443 8.40732L14.8527 11.0488L15.7203 14.9443C16.0072 16.232 14.6185 17.241 13.4824 16.5702L10.0457 14.5413L6.60904 16.5702C5.47296 17.241 4.08426 16.232 4.37109 14.9443L5.23874 11.0488L2.24711 8.40732C1.25814 7.53411 1.78858 5.9016 3.10193 5.77645L7.07484 5.39787L8.66258 1.7364Z"
                              fill="#F89828"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="19"
                            height="19"
                            viewBox="0 0 19 19"
                            fill="none"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M8.55028 1.7364C9.07515 0.525998 10.7917 0.525996 11.3165 1.7364L12.9043 5.39787L16.8772 5.77645C18.1905 5.9016 18.721 7.53411 17.732 8.40732L14.7404 11.0488L15.608 14.9443C15.8949 16.232 14.5062 17.241 13.3701 16.5702L9.93341 14.5413L6.49674 16.5702C5.36065 17.241 3.97196 16.232 4.25878 14.9443L5.12643 11.0488L2.1348 8.40732C1.14584 7.53411 1.67627 5.9016 2.98963 5.77645L6.96253 5.39787L8.55028 1.7364ZM11.5211 5.99765L9.93341 2.33617L8.34567 5.99765C8.12722 6.50141 7.65215 6.84657 7.10554 6.89865L3.13263 7.27723L6.12426 9.91872C6.53587 10.2821 6.71732 10.8406 6.59795 11.3766L5.7303 15.272L9.16697 13.2431C9.6398 12.9639 10.227 12.9639 10.6998 13.2431L14.1365 15.272L13.2689 11.3766C13.1495 10.8406 13.331 10.2821 13.7426 9.91872L16.7342 7.27723L12.7613 6.89865C12.2147 6.84657 11.7396 6.50141 11.5211 5.99765Z"
                              fill="#F89828"
                            />
                          </svg>
                        </div>
                        <h6>312 review</h6>
                      </div>
                    </div>
                    <div className="quantity">
                      <label>Quantity</label>
                      <Form.Select aria-label="Default select example">
                        <option>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select>
                    </div>
                    <div className="cart-info">
                      <input type="number" />
                      <button className="theme-btn">
                        <FaShoppingCart />
                        Add to cart
                      </button>
                      <button className="secondary-btn">
                        <FaRegHeart /> Favourite
                      </button>
                    </div>
                    <div className="overview">
                      <h4>Quick Overview</h4>
                      <p>
                        Inclusive of all taxes Featuring besan bits and chopped
                        dry fruits, cooked in pure desi ghee and shaped into
                        deliciously round ladoos. Haldiram's Moti Choor is
                        delicately flavoured with royal saffron and elaichi.
                        This irresistible favourite will have you reaching for
                        more!
                      </p>
                    </div>
                    <div className="availability">
                      <h4>Availablity</h4>
                      <div className="availability-block">
                        <div className="input-box">
                          <input type="text" placeholder="Enter Pincode" />
                        </div>
                        <button className="theme-btn">
                          <MdArrowForwardIos />
                        </button>
                      </div>
                    </div>
                    <div className="share-product">
                      Share: <FaFacebookF /> <FaTwitter /> <FaPinterest />
                    </div>
                  </article>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ProductDetailsPage;
