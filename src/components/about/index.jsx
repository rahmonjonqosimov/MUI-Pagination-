import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./index.scss";

import user1 from "../../assets/images/about-user-1.png";
import user2 from "../../assets/images/about-user-2.png";
import star from "../../assets/images/star.svg";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";

const About = () => {
  const swiperItem = [
    {
      id: 1,
      url: user1,
      name: "Hamza Faizi",
      desc: "Don’t waste time, just order! This is the best website to puschase smart watches.",
    },
    {
      id: 2,
      url: user2,
      name: "Hafiz Huzaifa",
      desc: "I’ve been purchasing smart watches of Mohid for a long time. All the products are good quality.",
    },
    {
      id: 3,
      url: user1,
      name: "Hamza Faizi",
      desc: "Don’t waste time, just order! This is the best website to puschase smart watches.",
    },
    {
      id: 4,
      url: user2,
      name: "Hafiz Huzaifa",
      desc: "I’ve been purchasing smart watches of Mohid for a long time. All the products are good quality.",
    },
    {
      id: 5,
      url: user1,
      name: "Hamza Faizi",
      desc: "Don’t waste time, just order! This is the best website to puschase smart watches.",
    },
    {
      id: 6,
      url: user2,
      name: "Hafiz Huzaifa",
      desc: "I’ve been purchasing smart watches of Mohid for a long time. All the products are good quality.",
    },
  ];

  const swiper = swiperItem?.map((item) => (
    <SwiperSlide key={item.id}>
      <div className="swiper__item__card">
        <img src={item.url} alt="" />
        <div className="swiper__item__about">
          <h4>{item.name}</h4>
          <p>{item.desc}</p>
          <img src={star} alt="Star" />
        </div>
      </div>
    </SwiperSlide>
  ));

  return (
    <section id="about">
      <div className="about__title">
        <p>Here are our some of the best clients.</p>
        <h2>What People Say About Us</h2>
      </div>
      <div className="container">
        <div className="about">
          <Swiper
            slidesPerView={1}
            spaceBetween={50}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            loop={true}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            {swiper}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default About;
