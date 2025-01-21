import React, { useEffect, useState } from "react";
import vid2 from "../Assets/vid2.mp4";
import vid5 from "../Assets/vid5.mp4";

import "./style.css";

const videos = [
  {
    id: 5,
    src: vid5,
  },
];

const SwiperComponent = () => {
  useEffect(() => {
    const swiper = new Swiper(".mySwiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      spaceBetween: 15,
      loop: true,
      loopedSlides: 100,
      coverflowEffect: {
        rotate: 45,
        depth: -100,
        modifier: 0.2,
        scale: 1.2,
      },
    });

    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <div className="swiper mySwiper">
      <div className="swiper-wrapper">
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="swiper-slide aspect-video h-[10rem]">
            <img src="https://placehold.co/1080x1920.png" alt="" />
          </div>
        ))} 
      </div>
    </div>
  );
};

export default SwiperComponent;
