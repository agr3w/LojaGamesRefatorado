import React, { useContext } from "react";
import styles from "./seletor.module.css";
import OrdemContext from "../../Commom/OrdemContext";

export default function SeletorOrdem() {
  const { ordem, handleOrdemChange } = useContext(OrdemContext);

  const handleChange = (event) => {
    const novaOrdem = event.target.value;
    handleOrdemChange(novaOrdem);
  };

  return (
    <div className={styles.selectorContainer}>
      <select className={styles.selector} value={ordem} onChange={handleChange}>
        <option value="alfabetica">Alfabética</option>
        <option value="menorPreco">Menor Preço</option>
        <option value="maiorPreco">Maior Preço</option>
      </select>
    </div>
  );
}
