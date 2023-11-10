import React, { useEffect, useRef, useState } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Rate } from "antd";
import quote from "../../assets/icon/quote-left 1.svg";

import { Navigation } from "swiper/modules";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);

  console.log(testimonials);

  return (
    <div>
      <SectionTitle title={"TESTIMONIALS"} subTitle={"What Our Clients Say"} />
      <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {testimonials.map((item) => {
            return (
              <SwiperSlide className="text-center p-10" key={item._id}>
                <Rate className="text-[#CD9003]" disabled defaultValue={item.rating} />
                <div className="flex justify-center ">
                  {" "}
                  <img src={quote} alt="" />
                </div>
                <p className="text-[#444] p-10">{item.details}</p>
                <h2 className="text-[#CD9003] text-lg font-semibold">{item.name}</h2>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
