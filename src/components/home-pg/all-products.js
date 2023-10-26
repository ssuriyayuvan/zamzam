import React from "react";
import allProduct1 from "../../images/allabout-001.png";
import { FaRegHeart } from "react-icons/fa";
import { BsChevronRight, BsFillPlusCircleFill } from "react-icons/bs";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const AllProductItem = ({ image, name, priceRange, quantity }) => {
  return (
    <article className="allproduct-card">
      <FaRegHeart className="heart-like-icon" />
      <figure>
        <img src={image} alt="allProduct1" className="expertise-img" />
      </figure>
      <div className="product-info">
        <h4>{name}</h4>
        <h5>{priceRange}</h5>
        <h6>{quantity}</h6>
      </div>
      <BsFillPlusCircleFill className="add-plus-icon" />
    </article>
  );
};

const AllProducts = () => {
  return (
    <>
      <section className="allproduct-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="heading-block">
                <h3>All Products</h3>
                <div className="btn-block">
                  <a href="javascript:void(0);" className="view-btn">
                    {" "}
                    View all <BsChevronRight />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="allproduct-list">
          <Swiper
            className={"offer-slide-swiper"}
            modules={[Navigation, Autoplay, Pagination]}
            autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
            speed={500}
            spaceBetween={30}
            // pagination={{ dynamicBullets: true }}
            centeredSlides={true}
            initialSlide-={3}
            loop
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              575: {
                slidesPerView: 3,
              },
              991: {
                slidesPerView: 4,
              },
            }}
          >
            <SwiperSlide>
              <AllProductItem
                image={allProduct1}
                name={"Sweets"}
                priceRange={"Rs. 179.00 - Rs. 357.00"}
                quantity={"(per kilogram)"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <AllProductItem
                image={allProduct1}
                name={"Savories"}
                priceRange={"Rs. 179.00 - Rs. 357.00"}
                quantity={"(per kilogram)"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <AllProductItem
                image={allProduct1}
                name={"Beverages"}
                priceRange={"Rs. 179.00 - Rs. 357.00"}
                quantity={"(per kilogram)"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <AllProductItem
                image={allProduct1}
                name={"Beverages"}
                priceRange={"Rs. 179.00 - Rs. 357.00"}
                quantity={"(per kilogram)"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <AllProductItem
                image={allProduct1}
                name={"Beverages"}
                priceRange={"Rs. 179.00 - Rs. 357.00"}
                quantity={"(per kilogram)"}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default AllProducts;
