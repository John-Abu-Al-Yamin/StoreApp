import React from "react";
import "./Reviews.css";
import hero from "../../assets/testimonialHero.png";
import { TestimonialsData } from "../../data/testimonials";
import {Swiper} from "swiper/react";
import { SwiperSlide } from "swiper/react";

const Reviews = () => {
  return (
    <section>
      <div className="container review-container">
        <div className="wrapper-review">
          <div className="wrapper-container">
            <span>Top Rated</span>
            <span>
              Seedily Say Has Suitable disposal and boy. Exercise joy Mab
              Childern Rejoiced
            </span>
          </div>
          <img src={hero} alt="" />
          <div className="right-review">
            <span>100K</span>
            <span>Happy Customers with us</span>
          </div>
        </div>
        <div className="title-reviwes">Reviews</div>
        <div className="carousal">
          <Swiper
          slidesPerView={3}
          slidesPerGroup={1}
          spaceBetween={20}
          className="t-carousal"
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
            {TestimonialsData.map((test, i) => {
              return <SwiperSlide>
                <div className="testimonial">
                    <img src={test.image} alt="" />
                    <span>{test.comment}</span>
                    <hr />
                    <span>{test.name}</span>
                </div>
              </SwiperSlide>;
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
