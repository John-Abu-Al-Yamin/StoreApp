import React from "react";
import "./Slider.css";
// import Swiper core and required modules
import { Navigation, Pagination} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { SliderProducts } from "../../data/products";
const Slider = () => {
  return (
    <section>
      <div className="container slider-container">
        <Swiper
          className="my-swiper"
          // install Swiper modules
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={3}
          slidesPerGroup={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          loop={true}
          breakpoints={{
            1024:{
              slidesPerView: 3
            },
            600:{
              slidesPerView: 2
            },
            0:{
              slidesPerView: 1
            }
          }}
          
        >
          {SliderProducts.map((slide, i) => {
            return (
              <SwiperSlide>
                <div className="left-slider">
                  <div className="name">
                    <span>{slide.name}</span>
                    <span>{slide.detail}</span>
                  </div>
                  <span>{slide.price}$</span>
                  <div>Shop now</div>
                  <img src={slide.img} alt="" className="img-p" />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Slider;


{/* <div className="left-slider">
<div className="name">
  <span>{slide.name}</span>
  <span>{slide.detail}</span>
</div>
<span>{slide.price}$</span>
<div>Shop now</div>
<img src={slide.img} alt="" className="img-p" />
</div> */}