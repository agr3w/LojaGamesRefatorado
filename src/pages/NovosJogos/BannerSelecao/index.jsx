import React from "react";
import { Link } from "react-router-dom";
import styles from "./BannerSelecao.module.css";
import {PlataformasLink} from "../../../Arrays/ItensCategorias"

export default function BannerSelecao() {

  return (
    <div className={styles.bannerContainer}>
      {PlataformasLink.map((plataforma) => (
        <div key={plataforma.link}>
          <Link
            to={`/categoria/${plataforma.link}`}
            className={styles.banner}
          >
            <img
              src={`imgs/banners/banner${plataforma.link}.jpg`}
              alt={`Banner ${plataforma.link}`}
            />
          </Link>
          <h2 className={styles.bannerTitle}>{plataforma.link}</h2>
        </div>
      ))}
    </div>
  );
}
