import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./itensCard.module.css";
import OrdemContext from "../../Commom/OrdemContext";
import SeletorOrdem from "../SeletorOrdem";
import { Plataformas } from "../../Arrays/ItensCategorias";
import { useSubstituicao } from "../../Commom/SubstituicaoContext";

export default function ItensCard({ jogos, imagemDiretorio, secaoAtual }) {
  const { ordem } = useContext(OrdemContext);
  const { Traco } = useSubstituicao();
  const location = useLocation();
  const pathname = location.pathname;

  const ordenarJogos = (jogos) => {
    switch (ordem) {
      case "alfabetica":
        return jogos.sort((a, b) => a.nome.localeCompare(b.nome));
      case "menorPreco":
        return jogos.sort((a, b) => a.valor - b.valor);
      case "maiorPreco":
        return jogos.sort((a, b) => b.valor - a.valor);
      default:
        return jogos;
    }
  };

  const tituloMap = {
    "/novos-jogos": "Novos Lançamentos Populares",
    [`/categoria/${secaoAtual}`]: `Novos lançamentos de ${secaoAtual}`,
    [`/categoria/Nintendo/${secaoAtual}`]: `Jogos de ${secaoAtual}`,
    [`/categoria/Playstation/${secaoAtual}`]: `Jogos de ${secaoAtual}`,
    [`/categoria/Xbox/${secaoAtual}`]: `Jogos de ${secaoAtual}`,
    [`/categoria/colecionaveis`]: `Itens Para Sua Coleção`,
    [`/categoria/colecionaveis/${secaoAtual}`]: `${secaoAtual}`,
    [`/categoria/GiftCards/${secaoAtual}`]: `${secaoAtual}`,
    [`/categoria/GiftCards`]: `Cartões Presentes`,
  };

  const titulo = tituloMap[pathname] || "";

  ordenarJogos(jogos);

  return (
    <div>
      <div className={styles.bannerContainer}>
        {Plataformas.map((plataforma) =>
          plataforma.nome === secaoAtual ? (
            <div key={plataforma.nome} className={styles.banner}>
              <img
                src={`/imgs/banners/banner${plataforma.nome}.jpg`}
                alt={plataforma.nome}
              />
            </div>
          ) : null
        )}
      </div>
      <h1>{titulo}</h1>
      <SeletorOrdem />
      <div className={styles.corpo}>
        <div className={styles.cardContainer}>
          {jogos.map((jogo) => {
            const valorParcelaJogo = jogo.valor / jogo.parcela;
            return (
              <div key={jogo.id} className={styles.card}>
                <div className={styles.cardImg}>
                  <Link to={`/${Traco(jogo.nome)}`}>
                    <img
                      src={`${imagemDiretorio}/${jogo.nome}.jpg`}
                      alt={jogo.nome}
                    />
                  </Link>
                </div>
                <div className={styles.cardDetails}>
                  <h2>{jogo.nome}</h2>
                  <span className={styles.valor}>R$ {jogo.valor}</span>
                  <span className={styles.parcela}>
                    {jogo.parcela}x de: R$ {valorParcelaJogo.toFixed(2)} sem
                    juros
                  </span>
                </div>
                <Link to={`/${Traco(jogo.nome)}`}>
                  <button className={styles.button}>Visitar</button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
