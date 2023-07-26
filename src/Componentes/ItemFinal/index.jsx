// ItemFinal.js

import React from "react";
import styles from "./ItemFianl.module.css";

const ItemFinal = ({ item, imgDiretorio, confirmado }) => {
    return (
      <div className={styles.card}>
        <img src={`${imgDiretorio}${item.nome}.jpg`} alt={item.nome} />
        <div className={styles.info}>
          <p>{item.nome}</p>
          <p>R$ {item.valor}</p>
        </div>
        <div className={styles.selectWrapper}>
          <div className={styles.seletor}>
            <span>Quantidade: {item.quantidade}</span>
          </div>
        </div>
        {confirmado && <div className={styles.confirmadoSelo}>Confirmado</div>}
      </div>
    );
  };

export default ItemFinal;
