import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";
import { MdArrowForwardIos } from "react-icons/md";
import ProductImg from "../../images/productlistImg.png";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
const ProductItem = () => {
  return (
    <li
      className="product-list-box"
      onClick={() => (window.location.href = "/product-detail")}
    >
      <img src={ProductImg} alt="ProductImg" className="img-fluid" />
      <div className="content-box">
        <div className="info">
          <h5>Milk Sweet Cake</h5>
          <h6 className="price-box">
            <span className="current-price">₹145</span>
            <del className="original-price">₹200</del>{" "}
            <span className="offer-pill">30%</span>
          </h6>
        </div>
        <BsFillPlusCircleFill className="add-plus-icon" />
      </div>
    </li>
  );
};

const ProductListLayout = () => {
  return (
    <>
      <main>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-6">
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
              </ul>
            </div>
            <div className="col-12 col-md-6">
              <div className="sort-dropdown">
                Sort by:
                <Form.Select aria-label="Default select example">
                  <option value="1">Most Popular</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <section className="product-layout">
                <aside>
                  <div className="filters-block">
                    <div className="filter-header">
                      <h5 className="filter-title">Filter</h5>
                      <span className="filter-btn">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="27"
                          height="27"
                          viewBox="0 0 27 27"
                          fill="none"
                        >
                          <path
                            d="M14.3984 13.3808V22.7775C14.3984 23.1025 14.2692 23.4143 14.0394 23.6441C13.8095 23.874 13.4978 24.0031 13.1727 24.0031C12.8477 24.0031 12.5359 23.874 12.3061 23.6441C12.0762 23.4143 11.9471 23.1025 11.9471 22.7775V13.3808C11.9471 13.0557 12.0762 12.744 12.3061 12.5141C12.5359 12.2843 12.8477 12.1551 13.1727 12.1551C13.4978 12.1551 13.8095 12.2843 14.0394 12.5141C14.2692 12.744 14.3984 13.0557 14.3984 13.3808ZM20.5266 20.3262C20.2016 20.3262 19.8898 20.4553 19.66 20.6852C19.4301 20.915 19.301 21.2268 19.301 21.5518V22.7775C19.301 23.1025 19.4301 23.4143 19.66 23.6441C19.8898 23.874 20.2016 24.0031 20.5266 24.0031C20.8517 24.0031 21.1635 23.874 21.3933 23.6441C21.6232 23.4143 21.7523 23.1025 21.7523 22.7775V21.5518C21.7523 21.2268 21.6232 20.915 21.3933 20.6852C21.1635 20.4553 20.8517 20.3262 20.5266 20.3262ZM22.9779 16.2407H21.7523V4.80123C21.7523 4.47617 21.6232 4.16442 21.3933 3.93456C21.1635 3.70471 20.8517 3.57558 20.5266 3.57558C20.2016 3.57558 19.8898 3.70471 19.66 3.93456C19.4301 4.16442 19.301 4.47617 19.301 4.80123V16.2407H18.0753C17.7503 16.2407 17.4385 16.3698 17.2087 16.5996C16.9788 16.8295 16.8497 17.1412 16.8497 17.4663C16.8497 17.7914 16.9788 18.1031 17.2087 18.333C17.4385 18.5628 17.7503 18.692 18.0753 18.692H22.9779C23.303 18.692 23.6148 18.5628 23.8446 18.333C24.0745 18.1031 24.2036 17.7914 24.2036 17.4663C24.2036 17.1412 24.0745 16.8295 23.8446 16.5996C23.6148 16.3698 23.303 16.2407 22.9779 16.2407ZM5.8188 17.0578C5.49374 17.0578 5.18199 17.1869 4.95214 17.4167C4.72228 17.6466 4.59315 17.9583 4.59315 18.2834V22.7775C4.59315 23.1025 4.72228 23.4143 4.95214 23.6441C5.18199 23.874 5.49374 24.0031 5.8188 24.0031C6.14387 24.0031 6.45562 23.874 6.68547 23.6441C6.91533 23.4143 7.04446 23.1025 7.04446 22.7775V18.2834C7.04446 17.9583 6.91533 17.6466 6.68547 17.4167C6.45562 17.1869 6.14387 17.0578 5.8188 17.0578ZM8.27011 12.9722H7.04446V4.80123C7.04446 4.47617 6.91533 4.16442 6.68547 3.93456C6.45562 3.70471 6.14387 3.57558 5.8188 3.57558C5.49374 3.57558 5.18199 3.70471 4.95214 3.93456C4.72228 4.16442 4.59315 4.47617 4.59315 4.80123V12.9722H3.3675C3.04244 12.9722 2.73069 13.1014 2.50083 13.3312C2.27098 13.5611 2.14185 13.8728 2.14185 14.1979C2.14185 14.523 2.27098 14.8347 2.50083 15.0646C2.73069 15.2944 3.04244 15.4236 3.3675 15.4236H8.27011C8.59517 15.4236 8.90692 15.2944 9.13678 15.0646C9.36663 14.8347 9.49576 14.523 9.49576 14.1979C9.49576 13.8728 9.36663 13.5611 9.13678 13.3312C8.90692 13.1014 8.59517 12.9722 8.27011 12.9722ZM15.624 8.06964H14.3984V4.80123C14.3984 4.47617 14.2692 4.16442 14.0394 3.93456C13.8095 3.70471 13.4978 3.57558 13.1727 3.57558C12.8477 3.57558 12.5359 3.70471 12.3061 3.93456C12.0762 4.16442 11.9471 4.47617 11.9471 4.80123V8.06964H10.7214C10.3964 8.06964 10.0846 8.19877 9.85475 8.42862C9.62489 8.65848 9.49576 8.97023 9.49576 9.29529C9.49576 9.62035 9.62489 9.9321 9.85475 10.162C10.0846 10.3918 10.3964 10.5209 10.7214 10.5209H15.624C15.9491 10.5209 16.2608 10.3918 16.4907 10.162C16.7206 9.9321 16.8497 9.62035 16.8497 9.29529C16.8497 8.97023 16.7206 8.65848 16.4907 8.42862C16.2608 8.19877 15.9491 8.06964 15.624 8.06964Z"
                            fill="black"
                            fill-opacity="0.4"
                          />
                        </svg>
                      </span>
                    </div>
                    <div className="filter-body">
                      <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>Price</Accordion.Header>
                          <Accordion.Body>Lorem ipsum dol</Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                          <Accordion.Header>Size</Accordion.Header>
                          <Accordion.Body>
                            <ul className="size-pill">
                              <li> 100g</li>
                              <li> 250g</li>
                              <li className="active"> 500g</li>
                            </ul>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                      <button className="apply-btn">Apply Filter</button>
                    </div>
                  </div>
                </aside>
                <section className="product-main">
                  <article className="product-list-box">
                    <h4 className="product-title">Milk Sweets</h4>
                    <ul className="product-list-items">
                      <ProductItem />
                      <ProductItem />
                      <ProductItem />
                      <ProductItem />
                      <ProductItem />
                    </ul>
                  </article>
                </section>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ProductListLayout;
