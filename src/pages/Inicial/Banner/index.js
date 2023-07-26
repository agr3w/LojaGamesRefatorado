import React from 'react';
import { Swiper, SwiperSlide, } from 'swiper/react';
import 'swiper/swiper.min.css';
import './banner.css';

import SwiperCore, { Navigation, Autoplay } from 'swiper';
SwiperCore.use([Navigation, Autoplay]);

const conteudosNovos = [
  {
    id: "slide1",
    imagem: "/imgs/banners/Banner-1.jpg",
  },
  {
    id: "slide2",
    imagem: "/imgs/banners/Banner-2.jpg",
  },
  {
    id: "slide3",
    imagem: "/imgs/banners/Banner-3.jpg",
  },
];

const Banner = () => {
  return (
    <div className="banner">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        navigation={true}
        loop
        autoplay={{ delay: 5000 }}
        className="swiper-container"
      >
        {conteudosNovos.map((conteudo) => (
          <SwiperSlide key={conteudo.id}>
            <img
              className="banner-image"
              src={conteudo.imagem}
              alt={conteudo.id}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
