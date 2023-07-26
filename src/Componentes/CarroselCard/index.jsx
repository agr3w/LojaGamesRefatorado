import React from "react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSpring, animated } from "react-spring";
import "swiper/swiper.min.css";
import "swiper/css/bundle";
import styles from "./CarroselCard.module.css";
import { Link } from "react-router-dom";

SwiperCore.use([Autoplay, Pagination, Navigation]);


const CarouselCard = ({ items, titulo }) => {
  return (
    <>
      <h1>{titulo}</h1>
      <div className={styles.carousel}>
        <Swiper
          className={styles.swipper}
          spaceBetween={20}
          slidesPerView={4}
          navigation={true}
          loop={true}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            5: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
            1600: {
              slidesPerView: 4,
            },
          }}
        >
          {items.map((item) => (
            <SwiperSlide key={item.id}>
              <CarouselCardItem item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

const CarouselCardItem = ({ item }) => {
  const [hovered, setHovered] = React.useState(false);
  const valorParcelaJogo = item.valor / item.parcela;
  const Traco = (link) => {
    if (!link) {
      return "";
    }
    return link.replace(/ /g, "-");
  };
  

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const buttonAnimation = useSpring({
    opacity: hovered ? 1 : 0,
    transform: `translateY(${hovered ? "0px" : "20px"})`,
    config: { duration: 200 },
  });

  return (
    <div
      className={styles.card}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link to={`/${Traco(item.nome)}`}>
        <img
          className={styles.cardImage}
          src={`/imgs/Carousel/${item.nome}.jpg`}
          alt={item.nome}
        />
      </Link>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{item.nome}</h3>
        <div className={styles.PriceDetail}>
          <span className={styles.cardPrice}>R$ {item.valor}</span>
          <span className={styles.cardInstallment}>
            {item.parcela}x de: R$ {valorParcelaJogo.toFixed(2)} sem juros
          </span>
        </div>
        <Link to={`/${Traco(item.nome)}`}>
          <animated.button className={styles.button} style={buttonAnimation}>
            Visitar
          </animated.button>
        </Link>
      </div>
    </div>
  );
};

export default CarouselCard;
