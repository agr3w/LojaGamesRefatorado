import React from "react";
import styles from "./descricao.module.css";

const DescricaoProduto = ({
  descricao,
  desenvolvedora,
  publicadora,
  dataLancamento,
  idiomas,
  legendas,
  idadeRecomendada,
  console,
  resolucao,
  genero,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.tituloDescricao}>
        <h2>DESCRIÇÃO DO PRODUTO</h2>
        <p>{descricao}</p>
      </div>

      <div className={styles.specifications}>
        <h2>ESPECIFICAÇÕES</h2>
        {desenvolvedora && (
          <div className={styles.specification}>
            <span className={styles.label}>DESENVOLVEDORA:</span>
            <span className={styles.value}>{desenvolvedora}</span>
          </div>
        )}
        {publicadora && (
          <div className={styles.specification}>
            <span className={styles.label}>PUBLICADORA:</span>
            <span className={styles.value}>{publicadora}</span>
          </div>
        )}
        {console && (
          <div className={styles.specification}>
            <span className={styles.label}>PLATAFORMA:</span>
            <span className={styles.value}>{console}</span>
          </div>
        )}
        {dataLancamento && (
          <div className={styles.specification}>
            <span className={styles.label}>DATA DE LANÇAMENTO:</span>
            <span className={styles.value}>{dataLancamento}</span>
          </div>
        )}
        {genero && (
          <div className={styles.specification}>
            <span className={styles.label}>GENERO:</span>
            <span className={styles.value}>{genero}</span>
          </div>
        )}
        {idiomas && (
          <div className={styles.specification}>
            <span className={styles.label}>IDIOMAS:</span>
            <span className={styles.value}>{idiomas}</span>
          </div>
        )}
        {legendas && (
          <div className={styles.specification}>
            <span className={styles.label}>LEGENDAS:</span>
            <span className={styles.value}>{legendas}</span>
          </div>
        )}
        {idadeRecomendada && (
          <div className={styles.specification}>
            <span className={styles.label}>IDADE RECOMENDADA:</span>
            <span className={styles.value}>{idadeRecomendada}</span>
          </div>
        )}
        {resolucao && (
          <div className={styles.specification}>
            <span className={styles.label}>RESOLUÇÃO:</span>
            <span className={styles.value}>{resolucao}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default DescricaoProduto;