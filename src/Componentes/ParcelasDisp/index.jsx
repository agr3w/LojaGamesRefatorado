import React from "react";
import styles from "./Parcelas.module.css"

export default function ParcelasDisponiveis({ parcelas, valor }) {
  const parcelasArray = Array.from(
    { length: parcelas },
    (_, index) => index + 1
  );

  return (
    <div className={styles.pagamento_parcelas}>
      <h2>Parcelas disponíveis:</h2>
      {Array.isArray(parcelasArray) && parcelasArray.length > 0 ? (
        parcelasArray.map((parcela) => (
          <span key={parcela}>
            {parcela}x de R$ {(valor / parcela).toFixed(2)}{" "}
          </span>
        ))
      ) : (
        <p>Não há opções de parcelamento disponíveis.</p>
      )}
    </div>
  );
}
