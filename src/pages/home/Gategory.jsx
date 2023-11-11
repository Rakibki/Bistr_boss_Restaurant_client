import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import slide1 from "../../assets/home/slide1.jpg";
import slide2 from "../../assets/home/slide2.jpg";
import slide3 from "../../assets/home/slide3.jpg";
import slide4 from "../../assets/home/slide4.jpg";
import slide5 from "../../assets/home/slide5.jpg";

import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { Pagination } from "swiper/modules";

const Gategory = () => {
  return (
    <section>
      <SectionTitle
        title={"ORDER ONLINE"}
        subTitle={"From 11:00am to 10:00pm"}
      />

      <div className="mt-10">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="relative">
            <img src={slide1} alt="" />
            <div className="flex justify-center">
              <h1 className="text-2xl uppercase absolute bottom-3 block text-center text-white">
                Salads
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <img src={slide2} alt="" />
            <div className="flex justify-center">
              <h1 className="text-2xl uppercase absolute bottom-3 block text-center text-white">
                Soups
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <img src={slide3} alt="" />
            <div className="flex justify-center">
              <h1 className="text-2xl uppercase absolute bottom-3 block text-center text-white">
                pizzas
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <img src={slide4} alt="" />
            <div className="flex justify-center">
              <h1 className="text-2xl uppercase absolute bottom-3 block text-center text-white">
                desserts
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <img src={slide5} alt="" />
            <div className="flex justify-center">
              <h1 className="text-2xl uppercase absolute bottom-3 block text-center text-white">
                Salads
              </h1>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Gategory;
