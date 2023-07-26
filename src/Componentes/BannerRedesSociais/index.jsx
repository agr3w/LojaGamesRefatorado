import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import styles from "./bannerRedesSociais.module.css";
import { Link } from "react-router-dom";

const BannerRedesSociais = () => {
  const [clicked, setClicked] = useState(false);

  const handleButtonClick = () => {
    setClicked(true);
  };

  useEffect(() => {
    if (clicked) {
      const timer = setTimeout(() => {
        setClicked(false);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [clicked]);

  const buttonAnimation = useSpring({
    from: { transform: "scale(1)", opacity: 1 },
    to: { transform: clicked ? "scale(2.0)" : "scale(1)", opacity: 1 },
    config: { duration: 500 },
  });

  return (
    <div className={styles.banner}>
      <div className={styles.text}>Siga meu trabalho</div>
      <Link to={"https://portifolio-weslley-kampa.netlify.app/"}>
      <animated.button
        style={buttonAnimation}
        className={styles.button}
        onClick={handleButtonClick}
      >
        Seguir
      </animated.button>
      </Link>
    </div>
  );
};

export default BannerRedesSociais;
