import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import offerSlide1 from "../../images/offerbanner-1.png";

const OfferSlides = () => {
  return (
    <>
      <Swiper
        className={"offer-slide-swiper"}
        modules={[Navigation, Autoplay, Pagination]}
        autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
        speed={500}
        pagination={{ dynamicBullets: true }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
        }}
      >
        <SwiperSlide>
          <img
            src={offerSlide1}
            alt="offerSlide1"
            className="offer-slide-img"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={offerSlide1}
            alt="offerSlide1"
            className="offer-slide-img"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={offerSlide1}
            alt="offerSlide1"
            className="offer-slide-img"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={offerSlide1}
            alt="offerSlide1"
            className="offer-slide-img"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default OfferSlides;
