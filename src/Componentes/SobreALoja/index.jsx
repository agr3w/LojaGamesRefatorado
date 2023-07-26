import React from "react";
import styles from "./SobreALoja.module.css";

const SobreLoja = () => {
  return (  
    <div className={styles.sobreLoja}>
      <div className={styles.logoAndTitle}>
        <img
          className={styles.logo}
          src="/imgs/logo-controle.png"
          alt="Logo da Loja"
        />
        <h2 className={styles.title}>Sobre a Loja</h2>
      </div>
      <div className={styles.paragraph}>
        <p>
          Bem-vindo(a) à LojaGames! Somos uma loja especializada em jogos e
          consoles das principais plataformas, como PlayStation, Xbox e
          Nintendo. E também encontrará os últimos lançamentos, jogos clássicos
          e edições especiais de colecionador para os gamers apaixonados.
        </p>
      </div>
    </div>
  );
};

export default SobreLoja;
